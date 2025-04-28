// 移动
import { ref } from 'vue';
import { onLongPress } from '@vueuse/core';

export const useMove = parentBox => {
  const isMoving = ref(false);
  let mouseStartPos = { x: 0, y: 0 };
  let boxStartPos = { x: 0, y: 0 };

  // 长按开始移动
  onLongPress(parentBox.boxRef, e => {
    if (!parentBox.props.draggable) return;
    if (!parentBox.props.fixed) return;

    isMoving.value = true;

    // 记录初始数据
    const rect = parentBox.boxRef.value.getBoundingClientRect();
    mouseStartPos = { x: e.clientX, y: e.clientY };
    boxStartPos = { x: rect.left, y: rect.top };

    window.addEventListener('mousemove', onBoxMove);
    window.addEventListener('mouseup', onBoxMoveStop);
  });

  // 移动中
  function onBoxMove(e) {
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
    parentBox.boxCurrentX.value = boxStartPos.x + deltaX;
    parentBox.boxCurrentY.value = boxStartPos.y + deltaY;
  }

  // 移动结束
  function onBoxMoveStop() {
    isMoving.value = false;

    window.removeEventListener('mousemove', onBoxMove);
    window.removeEventListener('mouseup', onBoxMoveStop);
  }

  return {
    isMoving
  };
};
