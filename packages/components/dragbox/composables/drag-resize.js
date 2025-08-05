// 拖拽缩放
import { ref, computed } from 'vue';

export const useDragResize = ({ boxElRef, dragFlagRef, props, modelLeft, modelTop, modelWidth, modelHeight }) => {
  // 是否可缩放
  const isResizable = computed(() => props.resizable && props.enabled);

  // 初始数据
  const activeHandleName = ref(null);
  let mouseStartPos = { x: 0, y: 0 };
  let boxStartSize = { width: 0, height: 0 };
  let boxIsFixed = false;

  // 开始缩放
  function onResizeStart(e, handleName) {
    if (!isResizable.value) return;
    if (dragFlagRef.value) return;

    // 记录状态
    dragFlagRef.value = 'resize';
    activeHandleName.value = handleName;

    // 记录初始数据
    const { offsetWidth, offsetHeight } = boxElRef.value;
    const { position } = window.getComputedStyle(boxElRef.value);
    mouseStartPos = { x: e.clientX, y: e.clientY };
    boxStartSize = { width: offsetWidth, height: offsetHeight };
    boxIsFixed = position === 'fixed';

    window.addEventListener('mousemove', onResizing);
    window.addEventListener('mouseup', onResizeStop);
  }

  // 缩放中
  function onResizing(e) {
    if (dragFlagRef.value !== 'resize') return;

    // 需要扣除的边框宽度
    const useBorder = ['right', 'bottom'].includes(activeHandleName.value);
    const handleBoderWidth = useBorder ? 2 : 0;

    // 水平方向
    const isHorizontal = ['left', 'right'].includes(activeHandleName.value);
    if (isHorizontal) {
      // 最大宽度
      const maxWidth = document.documentElement.clientWidth - handleBoderWidth;

      // 移动的距离
      const mouseX = Math.max(0, Math.min(e.clientX, maxWidth));
      const deltaX = mouseX - mouseStartPos.x;

      // 新的宽度
      const isLeft = activeHandleName.value === 'left';
      const newWidth = isLeft ? boxStartSize.width - deltaX : boxStartSize.width + deltaX;
      modelWidth.value = Math.max(newWidth, props.minWidth);

      // 新的位置
      if (boxIsFixed && isLeft && newWidth >= props.minWidth) {
        modelLeft.value = mouseX;
      }
      return;
    }

    // 垂直方向
    // 最大宽度
    const maxHeight = document.documentElement.clientHeight - handleBoderWidth;

    // 移动的距离
    const mouseY = Math.max(0, Math.min(e.clientY, maxHeight));
    const deltaY = mouseY - mouseStartPos.y;

    // 新的高度
    const isTop = activeHandleName.value === 'top';
    const newHeight = isTop ? boxStartSize.height - deltaY : boxStartSize.height + deltaY;
    modelHeight.value = Math.max(newHeight, props.minHeight);

    // 新的位置
    if (boxIsFixed && isTop && newHeight >= props.minHeight) {
      modelTop.value = mouseY;
    }
  }

  // 缩放结束
  function onResizeStop() {
    if (dragFlagRef.value !== 'resize') return;

    dragFlagRef.value = null;
    activeHandleName.value = null;
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
    isResizable,
    resizeClasses,
    resizeStyles,
    activeHandleName,
    onResizeStart
  };
};
