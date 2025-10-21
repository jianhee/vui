// 行-排序
import { ref, computed, provide, inject } from 'vue';
import { getSortResults } from '../../../utils/data-array';

// props
export const sortProps = {
  // 默认排序字段
  sortKey: { type: String, default: undefined },
  // 默认排序方式
  sortOrder: { type: String, default: undefined }
};

// 使用排序
export const useSort = ({ props }) => {
  // 排序标识
  const sortKeyRef = ref(props.sortKey);
  const sortOrderRef = ref(props.sortOrder);
  provide('vuiTableSort', {
    sortKeyRef,
    sortOrderRef
  });

  // 排序后的列表
  const sortedRows = computed(() => {
    // 没有值
    if (!props.rowItems?.length) return null;

    // 不需要排序
    const activeCol = props.colItems.find(col => col.key === sortKeyRef.value);
    if (!activeCol?.sortable) return null;

    // 需要排序
    return getSortResults({
      items: props.rowItems || [],
      key: sortKeyRef.value,
      order: sortOrderRef.value
    });
  });

  return { sortedRows };
};

// 使用排序项
export const useSortItem = ({ rowItemsRef, colDataRef }) => {
  // 继承
  const { sortKeyRef, sortOrderRef } = inject('vuiTableSort', {});

  // 当前状态
  const isSortable = computed(() => rowItemsRef.value.length && colDataRef.value.sortable);
  const isActive = computed(() => isSortable.value && sortKeyRef.value && sortKeyRef.value === colDataRef.value.key);
  const isAsc = computed(() => isActive.value && sortOrderRef.value === 'asc');
  const isDesc = computed(() => isActive.value && sortOrderRef.value === 'desc');

  // 点击 key
  function onSortKeyClick() {
    if (!isSortable.value) return;
    if (isAsc.value) {
      sortOrderRef.value = 'desc';
    } else if (isDesc.value) {
      sortKeyRef.value = null;
      sortOrderRef.value = null;
    } else {
      sortKeyRef.value = colDataRef.value.key;
      sortOrderRef.value = 'asc';
    }
  }

  // 点击 order
  function onSortOrderClick(order) {
    if (!isSortable.value) return;
    if (isActive.value && order === sortOrderRef.value) {
      sortKeyRef.value = null;
      sortOrderRef.value = null;
    } else {
      sortKeyRef.value = colDataRef.value.key;
      sortOrderRef.value = order;
    }
  }

  return {
    isSortable,
    isAsc,
    isDesc,
    onSortKeyClick,
    onSortOrderClick
  };
};
