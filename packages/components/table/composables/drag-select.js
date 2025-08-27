// 拖拽鼠标框选
import { ref, computed, inject } from 'vue';
import { useEventListener } from '@vueuse/core';

// 使用框选
export const useDragSelect = ({ dragFlagRef, dragSelectAreaWidth, parentElRef, rowItemsRef, rowHeight, rowIdKey }) => {
  // 全局状态
  const onSelectionChange = inject('onSelectionChange', null);

  // 是否显示
  const isShowBox = computed(() => dragFlagRef.value === 'select');

  // 父元素在浏览器中的边界：拖拽开始时计算一次，避免浪费性能
  let parentRect = null;

  // 鼠标在父元素中的位置
  const mouseStartPos = ref({ x: 0, y: 0 });
  const mouseCurrentPos = ref({ x: 0, y: 0 });

  // 选择框在父元素中的边界
  const boxRect = computed(() => ({
    x1: Math.min(mouseStartPos.value.x, mouseCurrentPos.value.x),
    x2: Math.max(mouseStartPos.value.x, mouseCurrentPos.value.x),
    y1: Math.min(mouseStartPos.value.y, mouseCurrentPos.value.y),
    y2: Math.max(mouseStartPos.value.y, mouseCurrentPos.value.y)
  }));

  // 选择框在父元素中的样式
  const boxStyles = computed(() => ({
    left: `${boxRect.value.x1}px`,
    top: `${boxRect.value.y1}px`,
    width: `${boxRect.value.x2 - boxRect.value.x1}px`,
    height: `${boxRect.value.y2 - boxRect.value.y1}px`
  }));

  // 开始框选
  useEventListener(parentElRef, 'mousedown', e => {
    if (dragFlagRef.value) return;
    if (e.button !== 0) return;
    if (e.target !== e.currentTarget) return;

    // 记录初始数据
    dragFlagRef.value = 'select';
    parentRect = parentElRef.value.getBoundingClientRect();
    mouseStartPos.value = {
      x: e.clientX - parentRect.x,
      y: e.clientY - parentRect.y + parentElRef.value.scrollTop
    };
    mouseCurrentPos.value = { ...mouseStartPos.value };

    window.addEventListener('mousemove', onSelecting);
    window.addEventListener('mouseup', onSelectStop);
  });

  // 框选中
  function onSelecting(e) {
    if (dragFlagRef.value !== 'select') return;

    // 不能超出父元素
    const { scrollTop } = parentElRef.value;
    mouseCurrentPos.value = {
      x: Math.max(0, Math.min(e.clientX - parentRect.x, parentRect.width)),
      y: Math.max(0, Math.min(e.clientY - parentRect.y + scrollTop, parentRect.height + scrollTop))
    };

    // 更新选中项
    updateSelectedItems();
  }

  // 结束框选
  function onSelectStop() {
    if (dragFlagRef.value !== 'select') return;

    dragFlagRef.value = null;
    window.removeEventListener('mousemove', onSelecting);
    window.removeEventListener('mouseup', onSelectStop);
  }

  // 更新选中项
  function updateSelectedItems() {
    const selectedItems = rowItemsRef.value.filter((_, index) => {
      // 当前项在父元素中的边界
      const rowRect = {
        x1: dragSelectAreaWidth,
        x2: parentRect?.width - dragSelectAreaWidth,
        y1: rowHeight * index,
        y2: rowHeight * (index + 1)
      };

      // X轴是否包含
      const isInX = rowRect.x1 < boxRect.value.x2 && rowRect.x2 > boxRect.value.x1;

      // Y轴是否包含
      const isInY = rowRect.y1 < boxRect.value.y2 && rowRect.y2 > boxRect.value.y1;

      // 更新选中状态
      return isInX && isInY;
    });

    // 选中项的 ids
    const selectedIds = selectedItems.map(item => item?.[rowIdKey]);

    // 触发事件
    onSelectionChange(selectedItems, selectedIds);
  }

  return {
    isShowBox,
    boxStyles
  };
};
