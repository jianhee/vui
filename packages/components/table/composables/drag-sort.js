// 拖拽排序
import { ref, computed, provide, inject } from 'vue';
import { useEventListener } from '@vueuse/core';
import { guid } from '../../../utils';

// emits
export const dragSortEmist = ['drag-sort-end'];

// props
export const dragSortProps = {
  // 是否可以拖拽排序：支持拖拽多项
  dragSortable: { type: Boolean, default: false },
  // 多组件之间拖拽的分组标识
  // 默认在单个树或列表内部拖拽，设置分组标识并提供一个全局状态(见示例)，就可以在多组件之间拖拽
  dragSortGroup: { type: String, default: undefined },
  // 校验是否可以移入目标
  // 1. 示例 target => Boolean
  // 2. 参数为目标项，返回 `true` 表示可以移入
  canDropInto: { type: Function, default: undefined }
};

// 使用拖拽排序
export const useDragSort = ({ dragFlagRef, dragSortGroup }) => {
  // 树和列表之间拖拽时必需
  const dragSortRoot = inject('vuiDragSortContext', {
    // 来源
    sourceRef: ref({}),
    // 目标
    targetRef: ref({})
  });

  // 提供给子组件使用
  provide('vuiDragSort', {
    // 第一层：分组标识，一个分组可以包含多个组件，只能在同一个分组内拖拽
    groupId: dragSortGroup || guid(),
    // 第二层：组件标识，树组件内有多个列表，表格组件内只有一个列表
    componetId: guid(),
    ...dragSortRoot
  });

  // 根元素类名
  const dragSortRootClasses = computed(() => ({
    'is-dragging': dragFlagRef.value === 'dragSort'
  }));

  return {
    dragSortRootClasses
  };
};

// 使用排序项
export const useDragSortItem = ({ dragFlagRef, dragSortable, canDropInto, rawItem, rawItemsRef, idKey, selectedItemsRef, emits }) => {
  // 全局状态
  const dragSort = inject('vuiDragSort', null);
  const groupId = dragSort.groupId;
  const componetId = dragSort.componetId;

  // 更新全局状态
  const updateSourceData = val => (dragSort.sourceRef.value = val);
  const updateTargetData = val => (dragSort.targetRef.value = val);
  const clearSourceData = () => (dragSort.sourceRef.value = {});
  const clearTargetData = () => (dragSort.targetRef.value = {});
  const clearAllData = () => {
    clearSourceData();
    clearTargetData();
  };

  // 是否正在拖拽
  const isDragging = computed(() => dragSortable && !!dragSort.sourceRef.value.dragItemIds);

  // 当前项是否是拖拽项
  const isDragItem = computed(() => {
    const { dragComponetId, dragItemIds } = dragSort.sourceRef.value;
    return isDragging.value && dragComponetId === componetId && dragItemIds.includes(rawItem?.[idKey]);
  });

  // 当前项是否是目标项
  const isTargetItem = computed(() => {
    const { targetComponetId, targetItemId } = dragSort.targetRef.value;
    return isDragging.value && targetComponetId === componetId && targetItemId === rawItem?.[idKey];
  });

  // 当前项是否可以作为目标项
  const isTargetValid = computed(() => {
    const { dragGroupId, dragItemIds } = dragSort.sourceRef.value;
    return isDragging.value && dragGroupId === groupId && !dragItemIds.includes(rawItem?.[idKey]);
  });

  // 被拖拽元素的事件
  // dragstart 开始拖拽时触发：只触发一次
  let clearEvent = null;
  function onDragStart() {
    // 不能拖拽的情况
    if (!dragSortable || dragFlagRef.value) return;

    // 记录初始数据
    dragFlagRef.value = 'dragSort';
    const dragItems = selectedItemsRef.value || [rawItem];
    updateSourceData({
      // rawSourceItems: [...rawItemsRef.value],
      // newSourceItems: null,
      dragGroupId: groupId,
      dragComponetId: componetId,
      dragItem: rawItem,
      dragItems,
      dragItemIds: dragItems.map(n => n?.[idKey])
    });

    // 处理拖拽到组件外部的情况
    clearEvent = useEventListener('dragenter', clearTargetData);
  }

  // drag     拖拽过程中持续触发（每几百毫秒）
  // dragend  拖拽结束时触发：只有 start 的那个元素响应
  function onDragEnd() {
    const { dragItem, dragItems, dragItemIds } = dragSort.sourceRef.value;
    const { targetItem, targetItemId, dropPos } = dragSort.targetRef.value;

    // 拖拽成功
    if (targetItemId) {
      // 更新数据
      // rawItemsRef.value = newSourceItems;

      // 参数为 更新后的来源列表数据
      emits('drag-sort-end', {
        dragItem,
        dragItems,
        dragItemIds,
        targetItem,
        targetItemId,
        dropPos
      });
    }

    // 清空数据
    dragFlagRef.value = null;
    clearAllData();
    clearEvent();
  }

  // 目标元素的事件
  // dragenter  拖拽元素首次进入目标元素时触发一次
  function onDragEnter(event) {
    // 当前项是目标项：不再重复操作
    if (isTargetItem.value) return;

    // 当前项不能作为目标：清空数据
    if (!isTargetValid.value) {
      clearTargetData();
      return;
    }

    // 更新数据
    updateTargetData({
      // rawTargetItems: [...rawItemsRef.value],
      targetComponetId: componetId,
      targetItem: rawItem,
      targetItemId: rawItem?.[idKey],
      targetRect: event.target.getBoundingClientRect(),
      dropPos: null,
      canDropInto: canDropInto?.(rawItem)
    });

    // 更新位置
    updateDragItemPos(event);
  }

  // dragover 拖拽元素在目标元素上移动时持续触发（约每几百毫秒一次）
  // 必须在此事件中调用 event.preventDefault()，否则后续 drop 事件不会触发
  function onDragOver(event) {
    // 当前项不是目标项：不响应
    if (!isTargetItem.value) return;

    // 当前项不能作为目标：清空数据
    if (!isTargetValid.value) {
      clearTargetData();
      return;
    }

    // 更新位置
    updateDragItemPos(event);
  }

  // dragleave  拖拽元素离开目标元素时触发
  // drop       拖拽元素在目标元素上释放时触发
  function onDrop() {
    const { targetItemId } = dragSort.targetRef.value;

    // 当前项不能释放的情况
    if (!isTargetItem.value || !isTargetValid.value || !targetItemId) {
      clearAllData();
    }

    // // 更新后的数据
    // let newTargetItems;
    // let newSourceItems;

    // // 目标项和拖拽项是否同一个父级
    // if (rawSourceItems.find(item => item?.[idKey] === targetItemId)) {
    //   // 是：重新排序后插入
    //   const remainItems = getRemainItems(rawTargetItems);
    //   newTargetItems = addDragItemsToTargetList(remainItems);
    //   newSourceItems = [...newTargetItems];
    // } else {
    //   // 否
    //   // 目标列表：插入当前位置
    //   newTargetItems = addDragItemsToTargetList(rawTargetItems);
    //   // 来源列表：删除拖拽项
    //   newSourceItems = getRemainItems(rawSourceItems);
    // }

    // // 更新目标列表
    // rawItemsRef.value = newTargetItems;
    // // 更新来源列表
    // dragSort.sourceRef.value.newSourceItems = newSourceItems;
  }

  // 更新拖拽项相对于目标的位置
  function updateDragItemPos(event) {
    const { targetRect, canDropInto } = dragSort.targetRef.value;

    // 计算位置
    const deltaY = event.clientY - targetRect.top;
    const threshold = targetRect.height / (canDropInto ? 3 : 2);

    // 上半部分
    if (deltaY <= threshold) {
      dragSort.targetRef.value.dropPos = 'top';
      return;
    }

    // 下半部分
    const distance = canDropInto ? threshold * 2 : threshold;
    if (deltaY >= distance) {
      dragSort.targetRef.value.dropPos = 'bottom';
      return;
    }

    // 中间部分
    dragSort.targetRef.value.dropPos = 'center';
  }

  // 获取拖拽剩余的项目
  // function getRemainItems(items) {
  //   const { dragItemIds } = dragSort.sourceRef.value;
  //   return items.filter(item => !dragItemIds.includes(item?.[idKey]));
  // }

  // 将拖拽项插入目标列表
  // function addDragItemsToTargetList(targetList) {
  //   const { dragItems } = dragSort.sourceRef.value;
  //   const { targetItemId, dropPos } = dragSort.targetRef.value;

  //   if (dropPos === 'center') {
  //     // 移入某项中：不处理
  //   } else {
  //     // 排序到某项：插入拖拽项
  //     const targetIndex = targetList.findIndex(item => item?.[idKey] === targetItemId);
  //     const newIndex = dropPos === 'top' ? targetIndex : targetIndex + 1;
  //     targetList.splice(newIndex, 0, ...dragItems);
  //   }

  //   return targetList;
  // }

  // 当前项和拖拽相关的类名
  const dragClasses = computed(() => {
    // 处理数据
    const { dropPos } = dragSort.targetRef.value;

    // 当前项是拖拽元素
    if (isDragItem.value) {
      return 'is-draging';
    }

    // 当前项是目标元素
    if (isTargetItem.value) {
      return `is-${dropPos}`;
    }

    return null;
  });

  return {
    dragClasses,
    onDragStart,
    onDragEnd,
    onDragEnter,
    onDragOver,
    onDrop
  };
};
