// 行-多选
import { computed, watch, provide, inject } from 'vue';
import { useEventListener } from '@vueuse/core';

// emits
export const selectionEmits = ['selection-change'];

// v-model
export const selectionModel = {
  // 选中项的 ids
  selectedRowIds: { type: Array, default: null }
};

// props
export const selectionProps = {
  // 是否可以选择行：这是多选的总开关
  selectable: { type: Boolean, default: false },
  // 是否可以拖拽鼠标框选
  dragSelectable: { type: Boolean, default: false },
  // 左侧框选触发区域宽度
  // 默认只能从底部空白区域开始框选，设置后也可以从左侧开始框选
  dragSelectAreaWidth: { type: Number, default: 0 },
  // 是否可以 `ctrl + a` 全选
  ctrlASelectable: { type: Boolean, default: false }
};

// 使用多选
export const useSelection = ({ props, dragFlagRef, modelSelectedRowIds, emits }) => {
  // 切换事件
  function onSelectionChange(selectedItems = [], selectedIds = []) {
    if (!props.selectable) return;

    // 避免重复更新
    if (JSON.stringify(selectedIds) === JSON.stringify(modelSelectedRowIds.value || '[]')) return;

    // 更新值
    modelSelectedRowIds.value = selectedIds;

    // 参数为 选中项、选中项的 ids
    emits('selection-change', { selectedItems, selectedIds });
  }

  // 更新数据时取消选中
  watch(
    () => props.rowItems,
    () => {
      if (!props.selectable) return;
      onSelectionChange();
    }
  );

  // 子组件使用
  provide('vuiOnSelectionChange', onSelectionChange);

  // 根元素类名
  const selectionRootClasses = computed(() => ({
    'is-dragging': dragFlagRef.value === 'select'
  }));

  // 根元素样式
  const selectionRootStyles = computed(() => ({
    marginLeft: `-${props.dragSelectAreaWidth}px`
  }));

  // 子元素样式
  const selectionInnerStyles = computed(() => ({
    paddingLeft: `${props.dragSelectAreaWidth}px`
  }));

  return {
    selectionRootClasses,
    selectionRootStyles,
    selectionInnerStyles
  };
};

// 使用全选
export const useAllSelection = ({ selectable, ctrlASelectable, modelSelectedRowIds, rowItemsRef, rowIdKey }) => {
  // 全局状态
  const onSelectionChange = inject('vuiOnSelectionChange', null);

  // 是否全选
  const isSelectedAll = computed(() => {
    if (!selectable) return false;
    if (!rowItemsRef.value?.length) return false;

    return modelSelectedRowIds.value?.length === rowItemsRef.value?.length;
  });

  // 切换全选
  const toggleAllSelection = () => {
    if (!selectable) return;
    if (!rowItemsRef.value?.length) return;

    const newState = !isSelectedAll.value;
    if (newState) {
      const selectedIds = rowItemsRef.value?.map(item => item?.[rowIdKey]);
      onSelectionChange(rowItemsRef.value, selectedIds);
    } else {
      onSelectionChange();
    }
  };

  // ctrl+a 切换全选
  useEventListener(window, 'keydown', event => {
    if (!selectable) return;
    if (!ctrlASelectable) return;
    if (!rowItemsRef.value?.length) return;
    if (event.key === 'a' && event.ctrlKey) {
      event.preventDefault();
      toggleAllSelection();
    }
  });

  // 行类名
  const allSelectionClasses = computed(() => {
    return {
      'is-selected': isSelectedAll.value
    };
  });

  return {
    isSelectedAll,
    toggleAllSelection,
    allSelectionClasses
  };
};

// 使用行选中
export const useRowSelection = ({ selectable, modelSelectedRowIds, rowItemsRef, rowItem, rowIdKey }) => {
  // 全局状态
  const onSelectionChange = inject('vuiOnSelectionChange', null);

  // 是否选中
  const isSelectedRow = computed(() => {
    if (!selectable) return false;

    return modelSelectedRowIds.value?.includes(rowItem?.[rowIdKey]);
  });

  // 切换选中
  const toggleRowSelection = () => {
    if (!selectable) return;

    const newState = !isSelectedRow.value;
    let selectedIds = [...(modelSelectedRowIds.value || [])];
    if (newState) {
      selectedIds.push(rowItem?.[rowIdKey]);
    } else {
      selectedIds = selectedIds.filter(id => id !== rowItem?.[rowIdKey]);
    }
    const selectedItems = rowItemsRef.value.filter(item => selectedIds.includes(item?.[rowIdKey]));
    onSelectionChange(selectedItems, selectedIds);
  };

  // 行类名
  const rowSelectionClasses = computed(() => {
    return {
      'is-selected': isSelectedRow.value
    };
  });

  return {
    isSelectedRow,
    toggleRowSelection,
    rowSelectionClasses
  };
};
