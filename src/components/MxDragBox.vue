<!-- 拖拽 -->
<!-- 有两个功能 -->
<!-- 1.移动位置 -->
<!-- 2.缩放大小 -->
<template>
  <div
    ref="boxRef"
    :class="{
      'mx-drag-box': true,
      'is-draging': boxIsDraging || !!handleDragingName
    }"
    :style="boxStyles"
  >
    <!-- 内容 -->
    <slot />
    <!-- 拖拽手柄 -->
    <div
      v-for="handle in handleItems"
      :key="handle"
      class="mx-drag-handle"
      :class="`is-${handle}`"
      @mousedown.stop="onResizeStart($event, handle)"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { onLongPress } from '@vueuse/core';

// 参数
const props = defineProps({
  // 最小尺寸
  minWidth: { type: Number, default: 10 },
  minHeight: { type: Number, default: 10 },
  // 是否固定定位
  fixed: { type: Boolean, default: true },
  // 是否计算样式：比如状态1可拖拽，绑定了定位和宽高，状态2普通div，不需要使用绑定信息，可以设置 false 清除绑定样式
  useStyles: { type: Boolean, default: true },
  // 是否可移动：自动转成定位元素
  draggable: { type: Boolean, default: false },
  // 是否可缩放
  resizable: { type: Boolean, default: false },
  // 缩放时可拖拽的轴：定位元素支持四个边，非定位元素只支持右边和下边
  handles: { type: String, default: 'left, right, top, bottom' }
});

// 盒子
const boxRef = ref(null);
const boxIsDraging = ref(false);

// 手柄
const handleDragingName = ref(null);
const handleItems = computed(() => {
  if (!props.resizable) return null;
  if (boxIsDraging.value) return null;
  if (handleDragingName.value) return [handleDragingName.value];

  const items = props.handles.replace(/\s/g, '').split(',');
  if (props.fixed) {
    return items;
  } else {
    return items.filter(item => item === 'right' || item === 'bottom');
  }
});

// 开始位置和尺寸
let mouseStartPos = { x: 0, y: 0 };
let boxStartPos = { x: 0, y: 0 };
let boxStartSize = { width: 0, height: 0 };

// 当前位置和尺寸：只支持left和top
const boxCurrentX = defineModel('x', { type: Number, default: null });
const boxCurrentY = defineModel('y', { type: Number, default: null });
const boxCurrentWidth = defineModel('width', { type: Number, default: null });
const boxCurrentHeight = defineModel('height', { type: Number, default: null });

// 获取样式
const boxStyles = computed(() => {
  const position = props.fixed ? 'fixed' : 'relative';
  if (!props.useStyles) return { position };
  return {
    position,
    left: `${boxCurrentX.value}px`,
    top: `${boxCurrentY.value}px`,
    width: `${boxCurrentWidth.value}px`,
    height: `${boxCurrentHeight.value}px`,
    cursor: boxIsDraging.value ? 'move' : null
  };
});

// 长按开始移动：修复移动时无法选中文本的问题
onLongPress(boxRef, e => {
  if (!props.draggable) return;
  if (!props.fixed) return;

  boxIsDraging.value = true;

  // 记录初始数据
  const rect = boxRef.value.getBoundingClientRect();
  mouseStartPos = { x: e.clientX, y: e.clientY };
  boxStartPos = { x: rect.left, y: rect.top };

  window.addEventListener('mousemove', onBoxMove);
  window.addEventListener('mouseup', onBoxMoveStop);
});

// 移动中
function onBoxMove(e) {
  if (!boxIsDraging.value) return;

  // 鼠标当前位置：不能超出窗口
  const mouseCurrentPos = {
    x: Math.max(0, Math.min(e.clientX, document.documentElement.clientWidth)),
    y: Math.max(0, Math.min(e.clientY, document.documentElement.clientHeight))
  };

  // 差值
  const deltaX = mouseCurrentPos.x - mouseStartPos.x;
  const deltaY = mouseCurrentPos.y - mouseStartPos.y;

  // 盒子当前位置
  boxCurrentX.value = boxStartPos.x + deltaX;
  boxCurrentY.value = boxStartPos.y + deltaY;
}

// 移动结束
function onBoxMoveStop() {
  boxIsDraging.value = false;

  window.removeEventListener('mousemove', onBoxMove);
  window.removeEventListener('mouseup', onBoxMoveStop);
}

// 缩放开始
function onResizeStart(e, _handleName) {
  if (!props.resizable) return;

  // 记录初始数据
  handleDragingName.value = _handleName;
  mouseStartPos = { x: e.clientX, y: e.clientY };
  boxStartSize = { width: boxRef.value.offsetWidth, height: boxRef.value.offsetHeight };

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
    boxCurrentWidth.value = Math.max(newWidth, props.minWidth);
    // 盒子当前位置
    if (handleDragingName.value === 'left' && newWidth >= props.minWidth) {
      boxCurrentX.value = mouseCurrentX;
    }
    return;
  }
  // 垂直方向
  const maxHeight = document.documentElement.clientHeight - handleBoderWidth;
  const mouseCurrentY = Math.max(0, Math.min(e.clientY, maxHeight));
  // 盒子当前宽度
  const deltaY = mouseCurrentY - mouseStartPos.y;
  const newHeight = handleDragingName.value === 'top' ? boxStartSize.height - deltaY : boxStartSize.height + deltaY;
  boxCurrentHeight.value = Math.max(newHeight, props.minHeight);
  // 盒子当前位置
  if (handleDragingName.value === 'top' && newHeight >= props.minHeight) {
    boxCurrentY.value = mouseCurrentY;
  }
}

// 拖拽结束
function onResizeStop() {
  handleDragingName.value = null;
  window.removeEventListener('mousemove', onBoxResizing);
  window.removeEventListener('mouseup', onResizeStop);
}
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-drag {
  &-box {
    z-index: 999;
  }
  &-box.is-draging {
    user-select: none;
    transition: none;
  }
  &-handle {
    position: absolute;
    z-index: 999;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: var(--mx-drag-handle-bg-color);
    }
    &.is-left,
    &.is-right {
      top: 0;
      bottom: 0;
      width: 2px;
      cursor: ew-resize;
    }
    &.is-left {
      left: 0;
    }
    &.is-right {
      right: 0;
    }
    &.is-top,
    &.is-bottom {
      right: 0;
      left: 0;
      height: 2px;
      cursor: ns-resize;
    }
    &.is-top {
      top: 0;
    }
    &.is-bottom {
      bottom: 0;
    }
  }
}
</style>
