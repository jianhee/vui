// 拖拽移动
import { computed } from 'vue';
import { onLongPress } from '@vueuse/core';

export const useDragMove = ({ boxElRef, dragFlagRef, props, modelLeft, modelTop }) => {
  // 是否可移动
  const isMovable = computed(() => props.movable && props.enabled);

  // 初始数据
  let mouseStartPos = { x: 0, y: 0 };
  let boxStartPos = { x: 0, y: 0 };

  // 长按开始移动
  onLongPress(boxElRef, e => {
    if (!isMovable.value) return;
    if (dragFlagRef.value) return;

    dragFlagRef.value = 'move';

    // 记录初始数据
    const boxRect = boxElRef.value.getBoundingClientRect();
    mouseStartPos = { x: e.clientX, y: e.clientY };
    boxStartPos = { x: boxRect.left, y: boxRect.top };

    window.addEventListener('mousemove', onMoving);
    window.addEventListener('mouseup', onMoveStop);
  });

  // 移动中
  function onMoving(e) {
    if (dragFlagRef.value !== 'move') return;

    // 鼠标当前位置：不能超出窗口
    const mouseCurrentPos = {
      x: Math.max(0, Math.min(e.clientX, document.documentElement.clientWidth)),
      y: Math.max(0, Math.min(e.clientY, document.documentElement.clientHeight))
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
    window.removeEventListener('mousemove', onMoving);
    window.removeEventListener('mouseup', onMoveStop);
  }

  // 移动的类名
  const moveClasses = computed(() => {
    return {
      'is-movable': isMovable.value,
      'is-moving': dragFlagRef.value === 'move'
    };
  });

  // 移动的样式
  const moveStyles = computed(() => {
    if (!props.enabled) return null;
    return {
      left: `${modelLeft.value}px`,
      top: `${modelTop.value}px`
    };
  });

  return {
    moveClasses,
    moveStyles
  };
};
