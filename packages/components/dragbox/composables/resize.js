// 缩放
import { ref, computed } from 'vue';

export const useResize = parentBox => {
  // 当前拖拽的手柄
  const handleDragingName = ref(null);

  // 所有手柄
  const handleItems = computed(() => {
    // 是否可缩放
    if (!parentBox.props.resizable) return null;

    // 拖拽盒子时不能缩放
    if (parentBox.isMoving.value) return null;

    // 拖拽手柄时不显示其它手柄
    if (handleDragingName.value) return [handleDragingName.value];

    // 定位元素支持四个边，非定位元素只支持右边和下边
    const items = parentBox.props.handles.replace(/\s/g, '').split(',');
    if (parentBox.props.fixed) {
      return items;
    } else {
      return items.filter(item => item === 'right' || item === 'bottom');
    }
  });

  // 开始位置
  let mouseStartPos = { x: 0, y: 0 };
  let boxStartSize = { width: 0, height: 0 };

  // 开始缩放
  function onResizeStart(e, _handleName) {
    if (!parentBox.props.resizable) return;

    // 记录初始数据
    const { offsetWidth, offsetHeight } = parentBox.boxRef.value;
    handleDragingName.value = _handleName;
    mouseStartPos = { x: e.clientX, y: e.clientY };
    boxStartSize = { width: offsetWidth, height: offsetHeight };

    window.addEventListener('mousemove', onBoxResizing);
    window.addEventListener('mouseup', onResizeStop);
  }

  // 缩放中
  function onBoxResizing(e) {
    if (!handleDragingName.value) return;

    // 需要扣除的边框宽度
    const handleBoderWidth = /right|bottom/.test(handleDragingName.value) ? 2 : 0;

    // 水平方向
    if (/left|right/.test(handleDragingName.value)) {
      const maxWidth = document.documentElement.clientWidth - handleBoderWidth;
      const mouseCurrentX = Math.max(0, Math.min(e.clientX, maxWidth));
      // 盒子当前宽度
      const deltaX = mouseCurrentX - mouseStartPos.x;
      const newWidth = handleDragingName.value === 'left' ? boxStartSize.width - deltaX : boxStartSize.width + deltaX;
      parentBox.boxCurrentWidth.value = Math.max(newWidth, parentBox.props.minWidth);
      // 盒子当前位置
      if (handleDragingName.value === 'left' && newWidth >= parentBox.props.minWidth) {
        parentBox.boxCurrentX.value = mouseCurrentX;
      }
      return;
    }
    // 垂直方向
    const maxHeight = document.documentElement.clientHeight - handleBoderWidth;
    const mouseCurrentY = Math.max(0, Math.min(e.clientY, maxHeight));
    // 盒子当前宽度
    const deltaY = mouseCurrentY - mouseStartPos.y;
    const newHeight = handleDragingName.value === 'top' ? boxStartSize.height - deltaY : boxStartSize.height + deltaY;
    parentBox.boxCurrentHeight.value = Math.max(newHeight, parentBox.props.minHeight);
    // 盒子当前位置
    if (handleDragingName.value === 'top' && newHeight >= parentBox.props.minHeight) {
      parentBox.boxCurrentY.value = mouseCurrentY;
    }
  }

  // 缩放结束
  function onResizeStop() {
    handleDragingName.value = null;
    window.removeEventListener('mousemove', onBoxResizing);
    window.removeEventListener('mouseup', onResizeStop);
  }

  return {
    handleDragingName,
    handleItems,
    onResizeStart
  };
};
