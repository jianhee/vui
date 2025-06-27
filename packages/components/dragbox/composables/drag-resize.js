// 拖拽缩放
import { ref, computed } from 'vue';

export const useDragResize = ({ boxElRef, dragFlagRef, props, modelLeft, modelTop, modelWidth, modelHeight }) => {
  // 是否可缩放
  const isResizable = computed(() => props.resizable && props.enabled);

  // 可缩放手柄
  const handleItems = computed(() => {
    if (!isResizable.value) return null;
    return props.resizeHandles;
  });

  // 初始数据
  const handleActiveName = ref(null);
  let mouseStartPos = { x: 0, y: 0 };
  let boxStartSize = { width: 0, height: 0 };

  // 开始缩放
  function onResizeStart(e, handleName) {
    if (!isResizable.value) return;
    if (dragFlagRef.value) return;

    // 非定位元素只支持 `right, bottom`
    const { position } = window.getComputedStyle(boxElRef.value);
    const boxIsFixed = position === 'fixed';
    const handleIsDragable = ['right', 'bottom'].includes(handleName);
    if (!boxIsFixed && !handleIsDragable) return;

    // 记录状态
    dragFlagRef.value = 'resize';
    handleActiveName.value = handleName;

    // 记录初始数据
    const { offsetWidth, offsetHeight } = boxElRef.value;
    mouseStartPos = { x: e.clientX, y: e.clientY };
    boxStartSize = { width: offsetWidth, height: offsetHeight };

    window.addEventListener('mousemove', onResizing);
    window.addEventListener('mouseup', onResizeStop);
  }

  // 缩放中
  function onResizing(e) {
    if (dragFlagRef.value !== 'resize') return;

    // 需要扣除的边框宽度
    const useBorder = ['right', 'bottom'].includes(handleActiveName.value);
    const handleBoderWidth = useBorder ? 2 : 0;

    // 水平方向
    const isHorizontal = ['left', 'right'].includes(handleActiveName.value);
    if (isHorizontal) {
      const maxWidth = document.documentElement.clientWidth - handleBoderWidth;
      const mouseX = Math.max(0, Math.min(e.clientX, maxWidth));
      // 盒子当前宽度
      const deltaX = mouseX - mouseStartPos.x;
      const isLeft = handleActiveName.value === 'left';
      const newWidth = isLeft ? boxStartSize.width - deltaX : boxStartSize.width + deltaX;
      modelWidth.value = Math.max(newWidth, props.minWidth);
      // 盒子当前位置
      if (isLeft && newWidth >= props.minWidth) {
        modelLeft.value = mouseX;
      }
      return;
    }
    // 垂直方向
    const maxHeight = document.documentElement.clientHeight - handleBoderWidth;
    const mouseY = Math.max(0, Math.min(e.clientY, maxHeight));
    // 盒子当前宽度
    const deltaY = mouseY - mouseStartPos.y;
    const isTop = handleActiveName.value === 'top';
    const newHeight = isTop ? boxStartSize.height - deltaY : boxStartSize.height + deltaY;
    modelHeight.value = Math.max(newHeight, props.minHeight);
    // 盒子当前位置
    if (isTop && newHeight >= props.minHeight) {
      modelTop.value = mouseY;
    }
  }

  // 缩放结束
  function onResizeStop() {
    if (dragFlagRef.value !== 'resize') return;

    dragFlagRef.value = null;
    handleActiveName.value = null;
    window.removeEventListener('mousemove', onResizing);
    window.removeEventListener('mouseup', onResizeStop);
  }

  // 缩放的类名
  const resizeClasses = computed(() => {
    return {
      'is-resizable': isResizable.value,
      'is-resizing': dragFlagRef.value === 'resize'
    };
  });

  // 缩放的样式
  const resizeStyles = computed(() => {
    if (!props.enabled) return null;
    return {
      left: `${modelLeft.value}px`,
      top: `${modelTop.value}px`,
      width: `${modelWidth.value}px`,
      height: `${modelHeight.value}px`
    };
  });

  return {
    resizeClasses,
    resizeStyles,
    handleItems,
    handleActiveName,
    onResizeStart
  };
};
