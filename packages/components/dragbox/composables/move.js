// 移动
import { ref, computed } from 'vue';
import { onLongPress } from '@vueuse/core';

export const useMove = parentBox => {
  // 是否可移动
  const isMovable = computed(() => {
    return parentBox.props.movable && !parentBox.props.disabled;
  });

  // 是否正在移动
  const isMoving = ref(false);
  let mouseStartPos = { x: 0, y: 0 };
  let boxStartPos = { x: 0, y: 0 };

  // 长按开始移动
  onLongPress(parentBox.boxRef, e => {
    if (!isMovable.value) return;

    isMoving.value = true;

    // 记录初始数据
    const rect = parentBox.boxRef.value.getBoundingClientRect();
    mouseStartPos = { x: e.clientX, y: e.clientY };
    boxStartPos = { x: rect.left, y: rect.top };

    window.addEventListener('mousemove', onMoving);
    window.addEventListener('mouseup', onMoveStop);
  });

  // 移动中
  function onMoving(e) {
    if (!isMoving.value) return;

    // 鼠标当前位置：不能超出窗口
    const mouseCurrentPos = {
      x: Math.max(0, Math.min(e.clientX, document.documentElement.clientWidth)),
      y: Math.max(0, Math.min(e.clientY, document.documentElement.clientHeight))
    };

    // 差值
    const deltaX = mouseCurrentPos.x - mouseStartPos.x;
    const deltaY = mouseCurrentPos.y - mouseStartPos.y;

    // 盒子当前位置
    parentBox.boxCurrentLeft.value = boxStartPos.x + deltaX;
    parentBox.boxCurrentTop.value = boxStartPos.y + deltaY;
  }

  // 移动结束
  function onMoveStop() {
    isMoving.value = false;

    window.removeEventListener('mousemove', onMoving);
    window.removeEventListener('mouseup', onMoveStop);
  }

  return {
    isMovable,
    isMoving
  };
};
