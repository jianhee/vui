// 行-多选
import { computed, watch, provide, inject } from 'vue';
import { useEventListener } from '@vueuse/core';

// emits
export const selectionEmits = ['selection-change'];

// v-model
export const selectionModel = {
  // 选中项的 `id`
  selectedRowIds: { type: Array, default: null }
};

// props
export const selectionProps = {
  // 是否可以选择行：这是多选的总开关
  selectable: { type: Boolean, default: false },
  // 是否可以拖拽框选
  dragSelectable: { type: Boolean, default: true },
  // 左侧框选触发区域宽度
  // 默认只能从底部空白区域开始框选，设置后也可以从左侧开始框选
  dragSelectAreaWidth: { type: Number, default: 0 },
  // 是否可以 `ctrl + a` 全选
  ctrlASelectable: { type: Boolean, default: true }
};

// 使用多选
export const useSelection = ({ selectable, dragSelectAreaWidth, modelSelectedRowIds, rowItems, emits }) => {
  // 切换事件
  function onSelectionChange(selectedItems = [], selectedIds = []) {
    if (!selectable) return;

    // 更新值
    modelSelectedRowIds.value = selectedIds;

    // 参数为 选中项、选中项的 id
    emits('selection-change', { selectedItems, selectedIds });
  }

  // 更新数据时取消选中
  watch(
    () => rowItems,
    () => {
      if (!selectable) return;
      onSelectionChange();
    }
  );

  // 子组件使用
  provide('selectionRoot', {
    onSelectionChange
  });

  // 鼠标框选的样式
  const selectionRootStyles = computed(() => ({ marginLeft: `-${dragSelectAreaWidth}px` }));
  const selectionInnerStyles = computed(() => ({ paddingLeft: `${dragSelectAreaWidth}px` }));

  return {
    selectionRootStyles,
    selectionInnerStyles
  };
};

// 使用全选
export const useAllSelection = ({ selectable, ctrlASelectable, modelSelectedRowIds, rowItems }) => {
  // 全局状态
  const selectionRoot = inject('selectionRoot', null);

  // 是否全选
  const isSelectedAll = computed(() => {
    if (!selectable) return false;

    return modelSelectedRowIds.value?.length === rowItems?.length;
  });

  // 切换全选
  const toggleAllSelection = () => {
    if (!selectable) return;

    const newState = !isSelectedAll.value;
    if (newState) {
      const selectedIds = rowItems?.map(item => item.id);
      selectionRoot.onSelectionChange(rowItems, selectedIds);
    } else {
      selectionRoot.onSelectionChange();
    }
  };

  // ctrl+a 切换全选
  useEventListener(window, 'keydown', event => {
    if (!ctrlASelectable) return;
    if (event.key === 'a' && event.ctrlKey) {
      event.preventDefault();
      toggleAllSelection();
    }
  });

  return {
    isSelectedAll,
    toggleAllSelection
  };
};

// 使用行选中
export const useRowSelection = ({ selectable, modelSelectedRowIds, rowItems, rowId }) => {
  // 全局状态
  const selectionRoot = inject('selectionRoot', null);

  // 是否选中
  const isSelectedRow = computed(() => {
    if (!selectable) return false;

    return modelSelectedRowIds.value?.includes(rowId);
  });

  // 切换选中
  const toggleRowSelection = () => {
    if (!selectable) return;

    const newState = !isSelectedRow.value;
    let selectedIds = modelSelectedRowIds.value || [];
    if (newState) {
      selectedIds.push(rowId);
    } else {
      selectedIds = selectedIds.filter(id => id !== rowId);
    }
    const selectedItems = rowItems.filter(item => selectedIds.includes(item.id));
    selectionRoot.onSelectionChange(selectedItems, selectedIds);
  };

  // 类名
  const rowSelectionClasses = computed(() => {
    return {
      'is-selected': isSelectedRow.value
    };
  });

  return {
    rowSelectionClasses,
    isSelectedRow,
    toggleRowSelection
  };
};
