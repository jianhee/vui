// 行-鼠标框选
import { ref, computed, inject } from 'vue';
import { useEventListener } from '@vueuse/core';

// 使用框选
export const useSelectRect = ({ selectable, selectAreaGap, parentEl, dragFlag, rowItems, rowHeight }) => {
  // 全局状态
  const selectionRoot = inject('selectionRoot', null);
  let cacheIds = [];

  // 父元素位置
  let parentRect = null;

  // 鼠标相对于父元素的位置
  const mouseStartPos = ref({ x: 0, y: 0 });
  const mouseCurrentPos = ref({ x: 0, y: 0 });

  // 选择框相对于父元素的样式
  const rectStyles = computed(() => ({
    left: `${Math.min(mouseStartPos.value.x, mouseCurrentPos.value.x)}px`,
    top: `${Math.min(mouseStartPos.value.y, mouseCurrentPos.value.y)}px`,
    width: `${Math.abs(mouseStartPos.value.x - mouseCurrentPos.value.x)}px`,
    height: `${Math.abs(mouseStartPos.value.y - mouseCurrentPos.value.y)}px`
  }));

  // 开始框选
  useEventListener(parentEl, 'mousedown', e => {
    if (!selectable) return;
    if (dragFlag.value) return;
    if (e.button !== 0) return;
    if (e.target !== e.currentTarget) return;

    dragFlag.value = 'select';
    parentRect = parentEl.value.getBoundingClientRect();

    // 记录初始数据
    mouseStartPos.value = {
      x: e.clientX - parentRect.x,
      y: e.clientY - parentRect.y + parentEl.value.scrollTop
    };
    mouseCurrentPos.value = { ...mouseStartPos.value };

    window.addEventListener('mousemove', onSelectMove);
    window.addEventListener('mouseup', onSelectStop);
  });

  // 框选中
  function onSelectMove(e) {
    if (dragFlag.value !== 'select') return;

    // 选择框当前位置：不能超出父元素
    const { scrollTop } = parentEl.value;
    mouseCurrentPos.value = {
      x: Math.max(0, Math.min(e.clientX - parentRect.x, parentRect.width)),
      y: Math.max(0, Math.min(e.clientY - parentRect.y + scrollTop, parentRect.height + scrollTop))
    };

    checkSelectedRows();
  }

  // 结束框选
  function onSelectStop() {
    if (dragFlag.value !== 'select') return;

    dragFlag.value = null;
    window.removeEventListener('mousemove', onSelectMove);
    window.removeEventListener('mouseup', onSelectStop);
  }

  // 检测选中项
  function checkSelectedRows() {
    // 选择框相对于父元素的样式
    const rectPos = {
      x1: Math.min(mouseStartPos.value.x, mouseCurrentPos.value.x),
      x2: Math.max(mouseStartPos.value.x, mouseCurrentPos.value.x),
      y1: Math.min(mouseStartPos.value.y, mouseCurrentPos.value.y),
      y2: Math.max(mouseStartPos.value.y, mouseCurrentPos.value.y)
    };

    // 筛选选中项
    const selectedItems = rowItems.filter((_, index) => {
      // 当前项相对于父元素的样式
      const rowPos = {
        x1: selectAreaGap,
        x2: parentRect?.width - selectAreaGap,
        y1: rowHeight * index,
        y2: rowHeight * (index + 1)
      };

      // X轴是否包含
      const isInX = rowPos.x1 < rectPos.x2 && rowPos.x2 > rectPos.x1;
      // Y轴是否包含
      const isInY = rowPos.y1 < rectPos.y2 && rowPos.y2 > rectPos.y1;

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
    rectStyles
  };
};
