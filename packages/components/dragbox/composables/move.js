// 移动
import { computed } from 'vue';
import { onLongPress } from '@vueuse/core';

export const useDragboxMove = ({ boxRef, dragFlag, props, styles }) => {
  // 是否可移动
  const isMovable = computed(() => props.movable && !props.disabled);

  // 初始数据
  let mouseStartPos = { x: 0, y: 0 };
  let boxStartPos = { x: 0, y: 0 };

  // 长按开始移动
  onLongPress(boxRef, e => {
    if (!isMovable.value) return;
    if (dragFlag.value) return;

    dragFlag.value = 'move';

    // 记录初始数据
    const rect = boxRef.value.getBoundingClientRect();
    mouseStartPos = { x: e.clientX, y: e.clientY };
    boxStartPos = { x: rect.left, y: rect.top };

    window.addEventListener('mousemove', onMoving);
    window.addEventListener('mouseup', onMoveStop);
  });

  // 移动中
  function onMoving(e) {
    if (!dragFlag.value) return;

    // 鼠标当前位置：不能超出窗口
    const mouseCurrentPos = {
      x: Math.max(0, Math.min(e.clientX, document.documentElement.clientWidth)),
      y: Math.max(0, Math.min(e.clientY, document.documentElement.clientHeight))
    };

    // 差值
    const deltaX = mouseCurrentPos.x - mouseStartPos.x;
    const deltaY = mouseCurrentPos.y - mouseStartPos.y;

    // 盒子当前位置
    styles.boxLeft.value = boxStartPos.x + deltaX;
    styles.boxTop.value = boxStartPos.y + deltaY;
  }

  // 移动结束
  function onMoveStop() {
    if (!dragFlag.value) return;

    dragFlag.value = null;
    window.removeEventListener('mousemove', onMoving);
    window.removeEventListener('mouseup', onMoveStop);
  }

  // 移动的类名
  const moveClasses = computed(() => {
    return {
      'is-movable': isMovable.value,
      'is-moving': dragFlag.value === 'move'
    };
  });

  // 移动的样式
  const moveStyles = computed(() => {
    if (props.disabled) return null;
    return {
      left: `${styles.boxLeft.value}px`,
      top: `${styles.boxTop.value}px`
    };
  });

  return {
    moveClasses,
    moveStyles
  };
};
