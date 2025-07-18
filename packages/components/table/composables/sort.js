// 行-排序
import { computed } from 'vue';

export const useSortItem = ({ sortKeyRef, sortOrderRef, colKey }) => {
  // 当前状态
  const isActive = computed(() => sortKeyRef.value === colKey);
  const isAsc = computed(() => isActive.value && sortOrderRef.value === 'asc');
  const isDesc = computed(() => isActive.value && sortOrderRef.value === 'desc');

  // 点击 filed
  function onSortFiledClick() {
    if (isAsc.value) {
      sortOrderRef.value = 'desc';
    } else if (isDesc.value) {
      sortKeyRef.value = null;
      sortOrderRef.value = null;
    } else {
      sortKeyRef.value = colKey;
      sortOrderRef.value = 'asc';
    }
  }

  // 点击 order
  function onSortOrderClick(order) {
    if (isActive.value && order === sortOrderRef.value) {
      sortKeyRef.value = null;
      sortOrderRef.value = null;
    } else {
      sortKeyRef.value = colKey;
      sortOrderRef.value = order;
    }
  }

  return {
    isAsc,
    isDesc,
    onSortFiledClick,
    onSortOrderClick
  };
};
