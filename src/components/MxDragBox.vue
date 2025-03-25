<!-- 拖拽 -->
<!-- 有两个功能 -->
<!-- 1.缩放大小 -->
<!-- 2.移动位置 -->
<template>
  <div
    ref="boxRef"
    class="mx-drag-box"
    :class="boxClasses"
    :style="boxStyles"
  >
    <!-- 内容 -->
    <slot />
    <!-- 拖拽手柄 -->
    <div
      v-for="handle in handles"
      :key="handle"
      class="mx-drag-handle"
      :class="`is-${handle}`"
      @mousedown.stop="onHandleDragStart($event, handle)"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useWindowSize, onLongPress } from '@vueuse/core';

// 参数
const props = defineProps({
  // 定位：absolute/fixed
  position: { type: String, default: null },
  // 最小尺寸
  minWidth: { type: Number, default: 0 },
  minHeight: { type: Number, default: 0 },
  // 是否可移动：非定位元素不能移动
  draggable: { type: Boolean, default: false },
  // 是否可缩放：非定位元素只能调整右边和下边
  // 布尔值：true：全部, false：不允许
  // 数组：['left', 'right', 'top', 'bottom'] 允许指定的边
  resizable: { type: [Boolean, Array], default: false }
});

// 可拖拽的轴
const handles = computed(() => {
  if (!props.resizable) return null;
  if (props.resizable === true) return ['left', 'right', 'top', 'bottom'];
  return props.resizable;
});

// 当前定位：只支持left和top
const boxCurrentX = defineModel('x', { type: Number, default: null });
const boxCurrentY = defineModel('y', { type: Number, default: null });

// 当前尺寸
const boxCurrentWidth = defineModel('width', { type: Number, default: null });
const boxCurrentHeight = defineModel('height', { type: Number, default: null });

// 窗口大小
const { width: windowWidth, height: windowHeight } = useWindowSize();

// 计算样式
const boxStyles = computed(() => {
  return {
    position: props.position,
    left: props.draggable ? `${boxCurrentX.value}px` : null,
    top: props.draggable ? `${boxCurrentY.value}px` : null,
    width: props.resizable ? `${boxCurrentWidth.value}px` : null,
    height: props.resizable ? `${boxCurrentHeight.value}px` : null,
    cursor: isDragging.value ? 'move' : null
  };
});

// 计算类名
const boxClasses = computed(() => {
  return {
    'is-active': handleActiveName.value || isDragging.value
  };
});

// 手柄
const handleActiveName = ref(null);
const handleStartX = ref(0);
const handleStartY = ref(0);
const handleBoderWidth = computed(() => (/right|bottom/.test(handleActiveName.value) ? 2 : 0));

// 盒子
const boxRef = ref(null);
const boxStartX = ref(0);
const boxStartY = ref(0);
const boxStartWidth = ref(0);
const boxStartHeight = ref(0);

// 是否定位元素
const isFixed = () => {
  const style = window.getComputedStyle(boxRef.value);
  return ['fixed', 'absolute'].includes(style.position);
};

// 缩放：开始
function onHandleDragStart(e, _handleName) {
  if (!props.resizable) return;

  // 是否需要定位
  const needFixed = _handleName === 'top' || _handleName === 'left';
  if (needFixed && !isFixed()) return;

  // 记录初始数据
  handleActiveName.value = _handleName;
  handleStartX.value = e.clientX;
  handleStartY.value = e.clientY;
  boxStartWidth.value = boxRef.value.offsetWidth;
  boxStartHeight.value = boxRef.value.offsetHeight;
  window.addEventListener('mousemove', onResize);
  window.addEventListener('mouseup', onResizeEnd);
}

// 缩放：鼠标不能超出窗口
function onResize(e) {
  if (!handleActiveName.value) return;

  if (/left|right/.test(handleActiveName.value)) {
    // 水平方向
    const maxX = windowWidth.value - handleBoderWidth.value;
    if (e.clientX < 0 || e.clientX > maxX) return;
    const deltaX = e.clientX - handleStartX.value;
    const newWidth = handleActiveName.value === 'left' ? boxStartWidth.value - deltaX : boxStartWidth.value + deltaX;
    if (newWidth < props.minWidth) return;
    boxCurrentX.value = handleActiveName.value === 'left' ? e.clientX : null;
    boxCurrentWidth.value = newWidth;
  } else {
    // 垂直方向
    const maxY = windowHeight.value - handleBoderWidth.value;
    if (e.clientY < 0 || e.clientY > maxY) return;
    const deltaY = e.clientY - handleStartY.value;
    const newHeight = handleActiveName.value === 'top' ? boxStartHeight.value - deltaY : boxStartHeight.value + deltaY;
    if (newHeight < props.minHeight) return;
    boxCurrentY.value = handleActiveName.value === 'top' ? e.clientY : null;
    boxCurrentHeight.value = newHeight;
  }
}

// 缩放：结束
function onResizeEnd() {
  handleActiveName.value = null;
  window.removeEventListener('mousemove', onResize);
  window.removeEventListener('mouseup', onResizeEnd);
}

// 移动：长按开始
// 修复移动时无法选中文本的问题
const isDragging = ref(false);
onLongPress(boxRef, e => {
  if (!props.draggable) return;

  // 是否需要定位
  if (!isFixed()) return;

  // 记录初始数据
  isDragging.value = true;
  handleStartX.value = e.clientX;
  handleStartY.value = e.clientY;
  const rect = boxRef.value.getBoundingClientRect();
  boxStartX.value = rect.left;
  boxStartY.value = rect.top;
  window.addEventListener('mousemove', onDrag);
  window.addEventListener('mouseup', onDragEnd);
});

// 移动：鼠标不能超出窗口
function onDrag(e) {
  if (!isDragging.value) return;

  // 水平方向
  if (e.clientX >= 0 && e.clientX <= windowWidth.value) {
    const deltaX = e.clientX - handleStartX.value;
    boxCurrentX.value = boxStartX.value + deltaX;
  }
  // 垂直方向
  if (e.clientY >= 0 && e.clientY <= windowWidth.value) {
    const deltaY = e.clientY - handleStartY.value;
    boxCurrentY.value = boxStartY.value + deltaY;
  }
}

// 移动：结束
function onDragEnd() {
  isDragging.value = false;
  window.removeEventListener('mousemove', onDrag);
  window.removeEventListener('mouseup', onDragEnd);
}
</script>

<style lang="scss">
@use '../styles/vars';
.mx-drag {
  &-box {
    position: relative;
    z-index: 999;
    &.is-active {
      transition: none;
    }
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
