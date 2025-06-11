// 缩放
import { computed } from 'vue';

export const useResize = ({ boxRef, props, styles, isMoving, dragingHandleName }) => {
  // 是否可缩放
  const isResizable = computed(() => props.resizable && !props.disabled);

  // 可缩放手柄
  const handleItems = computed(() => {
    if (!isResizable.value) return null;
    return props.resizeHandles;
  });

  // 初始数据
  let mouseStartPos = { x: 0, y: 0 };
  let boxStartSize = { width: 0, height: 0 };

  // 开始缩放
  function onResizeStart(e, _handleName) {
    if (!isResizable.value) return;
    if (isMoving.value) return;

    // 非定位元素只支持 `right, bottom`
    const { position } = window.getComputedStyle(boxRef.value);
    const boxIsFixed = position === 'fixed';
    const handleIsDragable = ['right', 'bottom'].includes(_handleName);
    if (!boxIsFixed && !handleIsDragable) return;

    // 记录初始数据
    const { offsetWidth, offsetHeight } = boxRef.value;
    dragingHandleName.value = _handleName;
    mouseStartPos = { x: e.clientX, y: e.clientY };
    boxStartSize = { width: offsetWidth, height: offsetHeight };

    window.addEventListener('mousemove', onResizing);
    window.addEventListener('mouseup', onResizeStop);
  }

  // 缩放中
  function onResizing(e) {
    if (!dragingHandleName.value) return;

    // 需要扣除的边框宽度
    const useBorder = ['right', 'bottom'].includes(dragingHandleName.value);
    const handleBoderWidth = useBorder ? 2 : 0;

    // 水平方向
    const isHorizontal = ['left', 'right'].includes(dragingHandleName.value);
    if (isHorizontal) {
      const maxWidth = document.documentElement.clientWidth - handleBoderWidth;
      const mouseX = Math.max(0, Math.min(e.clientX, maxWidth));
      // 盒子当前宽度
      const deltaX = mouseX - mouseStartPos.x;
      const isLeft = dragingHandleName.value === 'left';
      const newWidth = isLeft ? boxStartSize.width - deltaX : boxStartSize.width + deltaX;
      styles.boxWidth.value = Math.max(newWidth, props.minWidth);
      // 盒子当前位置
      if (isLeft && newWidth >= props.minWidth) {
        styles.boxLeft.value = mouseX;
      }
      return;
    }
    // 垂直方向
    const maxHeight = document.documentElement.clientHeight - handleBoderWidth;
    const mouseY = Math.max(0, Math.min(e.clientY, maxHeight));
    // 盒子当前宽度
    const deltaY = mouseY - mouseStartPos.y;
    const isTop = dragingHandleName.value === 'top';
    const newHeight = isTop ? boxStartSize.height - deltaY : boxStartSize.height + deltaY;
    styles.boxHeight.value = Math.max(newHeight, props.minHeight);
    // 盒子当前位置
    if (isTop && newHeight >= props.minHeight) {
      styles.boxTop.value = mouseY;
    }
  }

  // 缩放结束
  function onResizeStop() {
    if (!dragingHandleName.value) return;

    dragingHandleName.value = null;
    window.removeEventListener('mousemove', onResizing);
    window.removeEventListener('mouseup', onResizeStop);
  }

  return {
    isResizable,
    handleItems,
    dragingHandleName,
    onResizeStart
  };
};
