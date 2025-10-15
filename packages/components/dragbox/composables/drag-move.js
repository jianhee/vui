// 拖拽移动
import { computed } from 'vue';
import { useEventListener, useWindowSize } from '@vueuse/core';

export const useDragMove = ({ boxElRef, dragFlagRef, props, modelLeft, modelTop }) => {
  // 是否可移动
  const isMovable = computed(() => props.movable && props.enabled);

  // 初始数据
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  let mouseStartPos = { x: 0, y: 0 };
  let boxStartPos = { x: 0, y: 0 };
  let clearEvent1 = null;
  let clearEvent2 = null;

  // 开始移动
  const handleEl = computed(() => props.moveHandle || boxElRef.value);
  useEventListener(handleEl, 'mousedown', e => {
    if (!isMovable.value) return;
    if (dragFlagRef.value) return;

    dragFlagRef.value = 'move';

    // 记录初始数据
    const boxRect = boxElRef.value.getBoundingClientRect();
    mouseStartPos = { x: e.clientX, y: e.clientY };
    boxStartPos = { x: boxRect.left, y: boxRect.top };

    clearEvent1 = useEventListener('mousemove', onMoving);
    clearEvent2 = useEventListener('mouseup', onMoveStop);
  });

  // 移动中
  function onMoving(e) {
    if (dragFlagRef.value !== 'move') return;

    // 鼠标当前位置：不能超出窗口
    const mouseCurrentPos = {
      x: Math.max(0, Math.min(e.clientX, windowWidth.value)),
      y: Math.max(0, Math.min(e.clientY, windowHeight.value))
    };

    // 差值
    const deltaX = mouseCurrentPos.x - mouseStartPos.x;
    const deltaY = mouseCurrentPos.y - mouseStartPos.y;

    // 盒子当前位置
    modelLeft.value = boxStartPos.x + deltaX;
    modelTop.value = boxStartPos.y + deltaY;
  }

  // 移动结束
  function onMoveStop() {
    if (dragFlagRef.value !== 'move') return;

    dragFlagRef.value = null;
    clearEvent1();
    clearEvent2();
  }

  // 移动的类名
  const moveClasses = computed(() => {
    return {
      'is-movable': isMovable.value
    };
  });

  // 移动的样式
  const moveStyles = computed(() => {
    // 未启用时禁用样式
    if (!props.enabled) return null;
    // 只要启用了，不论是否可移动都保留样式
    return {
      cursor: props.movable && !props.moveHandle ? 'move' : null,
      left: `${modelLeft.value}px`,
      top: `${modelTop.value}px`
    };
  });

  return {
    moveClasses,
    moveStyles
  };
};
