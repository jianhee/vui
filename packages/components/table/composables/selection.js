// 多选
import { computed, watch, inject, provide } from 'vue';
import { useEventListener } from '@vueuse/core';

// emits
export const selectionEmits = ['selection-change'];

// v-model
export const selectionModel = {
  // 选中项的 `key` 数组
  selectedRowKeys: { type: Array, default: null }
};

// props
export const selectionProps = {
  // 是否可选择
  selectable: { type: Boolean, default: false }
};

// 使用多选
export const useSelection = ({ modelSelectedRowKeys, props, emits }) => {
  // 切换事件
  function onSelectionChange(keys = [], items = []) {
    if (!props.selectable) return;
    modelSelectedRowKeys.value = keys;
    // 参数为选中项和 v-model:selectedRowKeys 的值
    emits('selection-change', { items, keys });
  }

  // 更新数据时取消选中
  watch(
    () => props.rowItems,
    () => {
      if (!props.selectable) return;
      onSelectionChange();
    }
  );

  // 子集使用
  provide('tableSelection', {
    rowItems: props.rowItems,
    selectable: props.selectable,
    modelSelectedRowKeys,
    onSelectionChange
  });
};

// 全选
export const useAllSelection = () => {
  const tableSelection = inject('tableSelection', null);

  // 是否全选
  const isSelectedAll = computed(() => {
    if (!tableSelection.selectable) return false;

    return tableSelection.modelSelectedRowKeys.value?.length === tableSelection.rowItems?.length;
  });

  // 切换全选
  const toggleAllSelection = () => {
    if (!tableSelection.selectable) return;

    if (isSelectedAll.value) {
      tableSelection.onSelectionChange();
    } else {
      const ids = tableSelection.rowItems?.map(item => item.id);
      tableSelection.onSelectionChange(ids, tableSelection.rowItems);
    }
  };

  // ctrl+a 切换全选
  useEventListener(window, 'keydown', event => {
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

// 行选中
export const useRowSelection = ({ props }) => {
  const tableSelection = inject('tableSelection', null);

  // 是否选中
  const isSelectedRow = computed(() => {
    if (!tableSelection.selectable) return false;

    return tableSelection.modelSelectedRowKeys.value?.includes(props.rowData?.id);
  });

  // 切换选中
  function toggleRowSelection() {
    if (!tableSelection.selectable) return;

    let ids = tableSelection.modelSelectedRowKeys.value || [];
    if (isSelectedRow.value) {
      ids = ids.filter(id => id !== props.rowData?.id);
    } else {
      ids.push(props.rowData?.id);
    }
    const items = tableSelection.rowItems.filter(item => ids.includes(item.id));
    tableSelection.onSelectionChange(ids, items);
  }

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
