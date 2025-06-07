// 缩放
import { ref, computed } from 'vue';

export const useResize = parentBox => {
  // 是否可缩放
  const isResizable = computed(() => parentBox.props.resizable && !parentBox.props.disabled);

  // 当前拖拽的手柄
  const dragingHandleName = ref(null);

  // 可缩放手柄
  const handleItems = computed(() => {
    if (!isResizable.value) return null;

    // 移动时不显示
    if (parentBox.isMoving.value) return null;

    // 拖拽当前手柄时不显示其它手柄
    if (dragingHandleName.value) return [dragingHandleName.value];

    // 可缩放手柄
    return parentBox.props.resizeHandles.replace(/\s+/g, '').split(',');
  });

  // 开始位置
  let mouseStartPos = { x: 0, y: 0 };
  let boxStartSize = { width: 0, height: 0 };

  // 开始缩放
  function onResizeStart(e, _handleName) {
    if (!isResizable.value) return;

    // 非定位元素只支持 `right, bottom`
    const computedStyle = window.getComputedStyle(parentBox.boxRef.value);
    const boxIsFixed = computedStyle.position === 'fixed';
    const handleIsDragable = ['right', 'bottom'].includes(_handleName);
    if (!boxIsFixed && !handleIsDragable) return;

    // 记录初始数据
    const { offsetWidth, offsetHeight } = parentBox.boxRef.value;
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
      const mouseCurrentX = Math.max(0, Math.min(e.clientX, maxWidth));
      // 盒子当前宽度
      const deltaX = mouseCurrentX - mouseStartPos.x;
      const isLeft = dragingHandleName.value === 'left';
      const newWidth = isLeft ? boxStartSize.width - deltaX : boxStartSize.width + deltaX;
      parentBox.boxCurrentWidth.value = Math.max(newWidth, parentBox.props.minWidth);
      // 盒子当前位置
      if (isLeft && newWidth >= parentBox.props.minWidth) {
        parentBox.boxCurrentLeft.value = mouseCurrentX;
      }
      return;
    }
    // 垂直方向
    const maxHeight = document.documentElement.clientHeight - handleBoderWidth;
    const mouseCurrentY = Math.max(0, Math.min(e.clientY, maxHeight));
    // 盒子当前宽度
    const deltaY = mouseCurrentY - mouseStartPos.y;
    const isTop = dragingHandleName.value === 'top';
    const newHeight = isTop ? boxStartSize.height - deltaY : boxStartSize.height + deltaY;
    parentBox.boxCurrentHeight.value = Math.max(newHeight, parentBox.props.minHeight);
    // 盒子当前位置
    if (isTop && newHeight >= parentBox.props.minHeight) {
      parentBox.boxCurrentTop.value = mouseCurrentY;
    }
  }

  // 缩放结束
  function onResizeStop() {
    dragingHandleName.value = null;
    window.removeEventListener('mousemove', onResizing);
    window.removeEventListener('mouseup', onResizeStop);
  }

  return {
    isResizable,
    isResizing: computed(() => !!dragingHandleName.value),
    handleItems,
    onResizeStart
  };
};
