// 多选
import { reactive, watch, computed } from 'vue';

// 选中状态
export const useSelect = (props, emits) => {
  // 选中状态
  const selectedMap = reactive(new Map());

  // 切换选中状态时
  watch(selectedMap, () => {
    const items = props.rowsData.filter(item => selectedMap.get(item.id));
    emits('selection-change', items);
  });

  // 是否选中
  const isRowSelected = id => {
    return selectedMap.get(id);
  };

  // 切换选中
  const toggleRowSelected = (id, newState) => {
    selectedMap.set(id, newState);
  };

  // 是否全选
  const isAllSelected = computed(() => {
    const isEmpty = props.rowsData.length === 0;
    const isSelected = props.rowsData.every(item => selectedMap.get(item.id));
    return !isEmpty && isSelected;
  });

  // 切换全选
  const toggleAllSelected = newState => {
    if (newState) {
      props.rowsData.forEach(item => selectedMap.set(item.id, true));
    } else {
      selectedMap.clear();
    }
  };

  // ctrl+a 切换全选
  window.addEventListener('keydown', event => {
    if (!props.selectable) return;
    if (event.key === 'a' && event.ctrlKey) {
      event.preventDefault();
      const newState = !isAllSelected.value;
      toggleAllSelected(newState);
    }
  });

  // 更新数据时取消选中
  watch(
    () => props.rowsData,
    () => {
      if (props.selectable && !props.keepSelected) {
        toggleAllSelected(false);
      }
    }
  );

  return {
    selectedMap,
    isRowSelected,
    toggleRowSelected,
    isAllSelected,
    toggleAllSelected
  };
};
