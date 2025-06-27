// 拖拽排序
import { ref, computed, provide, inject } from 'vue';

// emits
export const dragSortEmist = ['drag-sort-end'];

// props
export const dragSortProps = {
  // 是否可以拖拽排序：支持拖拽多项
  dragSortable: { type: Boolean, default: false },
  // 校验是否可以移入目标项
  // 1. 示例 target => Boolean
  // 2. 参数为当前项，返回 `true` 可以移入
  canDropInto: { type: Function, default: null }
};

// 使用排序
export const useDragSort = () => {
  // 拖拽来源和目标
  provide('dragSort', {
    dragSourceRef: ref({}),
    dropTargetRef: ref({})
  });
};

// 使用排序项
export const useDragSortItem = ({ dragFlagRef, dragSortable, canDropInto, itemsDataRef, itemData, selectedItemsRef, emits }) => {
  // 全局状态
  const dragSort = inject('dragSort', null);

  // 更新全局状态
  const updateDragSource = val => (dragSort.dragSourceRef.value = val || {});
  const updateDropTarget = val => (dragSort.dropTargetRef.value = val || {});

  // 当前项是否是拖拽项
  const isDragging = computed(() => dragSort.dragSourceRef.value?.dragIds?.includes(itemData.id));

  // dragstart  开始拖拽
  function onDragStart() {
    if (!dragSortable) return;
    if (dragFlagRef.value) return;

    // 记录初始数据
    dragFlagRef.value = 'sort';
    const dragItems = selectedItemsRef.value || [itemData];
    updateDragSource({
      dragIds: dragItems.map(n => n.id),
      dragItems
    });
  }

  // dragenter  进入目标元素
  function onDragEnter(event) {
    const { targetId } = dragSort.dropTargetRef.value;

    // 当前项已经是目标时不再重复操作
    if (itemData.id === targetId) return;

    // 当前项是拖拽项时不能作为目标
    if (isDragging.value) {
      updateDropTarget(null);
      return;
    }

    // 更新数据
    updateDropTarget({
      targetId: itemData.id,
      targetRect: event.target.getBoundingClientRect(),
      dropPos: null,
      canDropInto: canDropInto?.(itemData)
    });

    // 立即更新状态
    onDragOver(event);
  }

  // drag       拖拽中
  // dragover   在目标元素中移动
  function onDragOver(event) {
    const { targetId, targetRect, canDropInto } = dragSort.dropTargetRef.value;

    // 当前项不是目标时不响应
    if (itemData.id !== targetId) return;

    // 当前项是拖拽项时不响应
    if (isDragging.value) return;

    // 计算位置
    const deltaY = event.clientY - targetRect.top;
    const threshold = targetRect.height / (canDropInto ? 3 : 2);

    // 上半部分
    if (deltaY <= threshold) {
      dragSort.dropTargetRef.value.dropPos = 'top';
      return;
    }

    // 下半部分
    const distance = canDropInto ? threshold * 2 : threshold;
    if (deltaY >= distance) {
      dragSort.dropTargetRef.value.dropPos = 'bottom';
      return;
    }

    // 中间部分
    dragSort.dropTargetRef.value.dropPos = 'center';
  }

  // dragend      停止拖拽：只有 start 的那个元素响应
  function onDragEnd() {
    // 处理数据
    dragFlagRef.value = null;
    const { dragIds } = dragSort.dragSourceRef.value;
    const { targetId } = dragSort.dropTargetRef.value;

    // 目标项是拖拽项时不响应
    if (dragIds.includes(targetId)) {
      updateDragSource(null);
      updateDropTarget(null);
      return;
    }

    // 更新列表
    updateItems();

    // 清空数据
    updateDragSource(null);
    updateDropTarget(null);
  }

  // 更新列表
  function updateItems() {
    const { dragIds, dragItems } = dragSort.dragSourceRef.value;
    const { targetId, dropPos } = dragSort.dropTargetRef.value;

    // 删除拖拽项
    const newItems = itemsDataRef.value.filter(item => !dragIds.includes(item.id));

    // 排序时重新插入拖拽项
    if (dropPos !== 'center') {
      const targetIndex = newItems.findIndex(item => item.id === targetId);
      const newIndex = dropPos === 'top' ? targetIndex : targetIndex + 1;
      newItems.splice(newIndex, 0, ...dragItems);
    }

    // 更新数据
    itemsDataRef.value = newItems;

    // 触发事件：参数为 重新排序后的数据
    emits('drag-sort-end', {
      newItems
    });
  }

  // 当前项和拖拽相关的类名
  const dragClasses = computed(() => {
    const { targetId, dropPos } = dragSort.dropTargetRef.value;

    // 当前项是拖拽元素
    if (isDragging.value) {
      return 'is-draging';
    }

    // 当前项是目标元素
    if (itemData.id === targetId) {
      return `is-${dropPos}`;
    }

    return null;
  });

  return {
    dragClasses,
    onDragStart,
    onDragEnter,
    onDragOver,
    onDragEnd
  };
};
