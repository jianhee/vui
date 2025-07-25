// 行-排序
import { computed } from 'vue';

// props
export const sortProps = {
  // 默认排序字段
  sortKey: { type: String, default: null },
  // 默认排序方式
  sortOrder: { type: String, default: null }
};

// 使用排序
export const useSortItem = ({ rowItemsRef, colData, sortKeyRef, sortOrderRef }) => {
  // 是否可以排序
  const isSortable = computed(() => rowItemsRef.value.length && colData.sortable);

  // 当前状态
  const isActive = computed(() => sortKeyRef.value === colData.key);
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
      sortKeyRef.value = colData.key;
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
      sortKeyRef.value = colData.key;
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
