// 拖拽框选
import { ref, computed, inject } from 'vue';
import { useEventListener } from '@vueuse/core';

// 使用框选
export const useDragSelect = ({ dragSelectAreaWidth, parentEl, dragFlag, rowItems, rowHeight }) => {
  // 全局状态
  const selectionRoot = inject('selectionRoot', null);
  let cacheIds = [];

  // 选择框相对于父元素的位置
  let parentRect = null;
  const selectionStartPos = ref({ x: 0, y: 0 });
  const selectionCurrentPos = ref({ x: 0, y: 0 });
  const selectionStyles = computed(() => ({
    left: `${Math.min(selectionStartPos.value.x, selectionCurrentPos.value.x)}px`,
    top: `${Math.min(selectionStartPos.value.y, selectionCurrentPos.value.y)}px`,
    width: `${Math.abs(selectionStartPos.value.x - selectionCurrentPos.value.x)}px`,
    height: `${Math.abs(selectionStartPos.value.y - selectionCurrentPos.value.y)}px`
  }));

  // 开始框选
  useEventListener(parentEl, 'mousedown', e => {
    if (dragFlag.value) return;
    if (e.button !== 0) return;
    if (e.target !== e.currentTarget) return;

    // 记录初始数据
    dragFlag.value = 'select';
    parentRect = parentEl.value.getBoundingClientRect();
    selectionStartPos.value = {
      x: e.clientX - parentRect.x,
      y: e.clientY - parentRect.y + parentEl.value.scrollTop
    };
    selectionCurrentPos.value = { ...selectionStartPos.value };

    window.addEventListener('mousemove', onSelectMove);
    window.addEventListener('mouseup', onSelectStop);
  });

  // 框选中
  function onSelectMove(e) {
    if (dragFlag.value !== 'select') return;

    // 更新选择框位置：不能超出父元素
    const { scrollTop } = parentEl.value;
    selectionCurrentPos.value = {
      x: Math.max(0, Math.min(e.clientX - parentRect.x, parentRect.width)),
      y: Math.max(0, Math.min(e.clientY - parentRect.y + scrollTop, parentRect.height + scrollTop))
    };

    // 更新选中项
    updateSelectedItems();
  }

  // 结束框选
  function onSelectStop() {
    if (dragFlag.value !== 'select') return;

    dragFlag.value = null;
    window.removeEventListener('mousemove', onSelectMove);
    window.removeEventListener('mouseup', onSelectStop);
  }

  // 更新选中项
  function updateSelectedItems() {
    // 选择框相对于父元素的边界
    const selectionRect = {
      x1: Math.min(selectionStartPos.value.x, selectionCurrentPos.value.x),
      x2: Math.max(selectionStartPos.value.x, selectionCurrentPos.value.x),
      y1: Math.min(selectionStartPos.value.y, selectionCurrentPos.value.y),
      y2: Math.max(selectionStartPos.value.y, selectionCurrentPos.value.y)
    };

    // 筛选选中项
    const selectedItems = rowItems.filter((_, index) => {
      // 当前项相对于父元素的边界
      const rowRect = {
        x1: dragSelectAreaWidth,
        x2: parentRect?.width - dragSelectAreaWidth,
        y1: rowHeight * index,
        y2: rowHeight * (index + 1)
      };

      // X轴是否包含
      const isInX = rowRect.x1 < selectionRect.x2 && rowRect.x2 > selectionRect.x1;

      // Y轴是否包含
      const isInY = rowRect.y1 < selectionRect.y2 && rowRect.y2 > selectionRect.y1;

      // 更新选中状态
      return isInX && isInY;
    });

    // 选中项的 id
    const selectedIds = selectedItems.map(item => item.id);

    // 触发事件
    if (JSON.stringify(selectedIds) === JSON.stringify(cacheIds)) return;
    cacheIds = selectedIds;
    selectionRoot.onSelectionChange(selectedItems, selectedIds);
  }

  return {
    selectionStyles
  };
};
