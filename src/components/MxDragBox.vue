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
      v-for="handle in handleItems"
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
  // 最小尺寸
  minWidth: { type: Number, default: 0 },
  minHeight: { type: Number, default: 0 },
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

// 窗口
const { width: windowWidth, height: windowHeight } = useWindowSize();

// 盒子
const boxRef = ref(null);
const boxIsDragging = ref(false);

// 当前定位和尺寸：只支持left和top
const boxCurrentX = defineModel('x', { type: Number, default: null });
const boxCurrentY = defineModel('y', { type: Number, default: null });
const boxCurrentWidth = defineModel('width', { type: Number, default: null });
const boxCurrentHeight = defineModel('height', { type: Number, default: null });

// 开始拖拽时的定位和尺寸
let boxStartX = 0;
let boxStartY = 0;
let boxStartWidth = 0;
let boxStartHeight = 0;

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
    cursor: boxIsDragging.value ? 'move' : null
  };
});

// 获取类名
const boxClasses = computed(() => {
  return {
    'is-active': boxIsDragging.value || handleActiveName.value
  };
});

// 手柄
const handleItems = computed(() => {
  if (!props.resizable) return null;
  const items = props.handles.replace(/\s/g, '').split(',');
  if (props.fixed) {
    return items;
  } else {
    return items.filter(item => item === 'right' || item === 'bottom');
  }
});

// 当前激活的手柄
const handleActiveName = ref(null);

// 需要扣除的宽度
const handleBoderWidth = computed(() => (/right|bottom/.test(handleActiveName.value) ? 2 : 0));

// 开始拖拽时的定位
let handleStartX = 0;
let handleStartY = 0;

// 移动
// 长按开始拖拽：修复移动时无法选中文本的问题
onLongPress(boxRef, e => {
  if (!props.draggable) return;

  // 是否需要定位
  if (!props.fixed) return;

  // 记录初始数据
  boxIsDragging.value = true;
  handleStartX = e.clientX;
  handleStartY = e.clientY;
  const rect = boxRef.value.getBoundingClientRect();
  boxStartX = rect.left;
  boxStartY = rect.top;
  window.addEventListener('mousemove', onBoxDraging);
  window.addEventListener('mouseup', onBoxDragEnd);
});

// 拖拽中：鼠标不能超出窗口
function onBoxDraging(e) {
  if (!boxIsDragging.value) return;

  // 水平方向
  if (e.clientX >= 0 && e.clientX <= windowWidth.value) {
    const deltaX = e.clientX - handleStartX;
    boxCurrentX.value = boxStartX + deltaX;
  }
  // 垂直方向
  if (e.clientY >= 0 && e.clientY <= windowWidth.value) {
    const deltaY = e.clientY - handleStartY;
    boxCurrentY.value = boxStartY + deltaY;
  }
}

// 拖拽结束
function onBoxDragEnd() {
  boxIsDragging.value = false;
  window.removeEventListener('mousemove', onBoxDraging);
  window.removeEventListener('mouseup', onBoxDragEnd);
}

// 缩放
// 拖拽开始
function onHandleDragStart(e, _handleName) {
  if (!props.resizable) return;

  // 记录初始数据
  handleActiveName.value = _handleName;
  handleStartX = e.clientX;
  handleStartY = e.clientY;
  boxStartWidth = boxRef.value.offsetWidth;
  boxStartHeight = boxRef.value.offsetHeight;
  window.addEventListener('mousemove', onHandleDraging);
  window.addEventListener('mouseup', onHandleDragEnd);
}

// 拖拽中：鼠标不能超出窗口
function onHandleDraging(e) {
  if (!handleActiveName.value) return;

  if (/left|right/.test(handleActiveName.value)) {
    // 水平方向
    const maxX = windowWidth.value - handleBoderWidth.value;
    if (e.clientX < 0 || e.clientX > maxX) return;
    const deltaX = e.clientX - handleStartX;
    const newWidth = handleActiveName.value === 'left' ? boxStartWidth - deltaX : boxStartWidth + deltaX;
    if (newWidth < props.minWidth) return;
    boxCurrentX.value = handleActiveName.value === 'left' ? e.clientX : null;
    boxCurrentWidth.value = newWidth;
  } else {
    // 垂直方向
    const maxY = windowHeight.value - handleBoderWidth.value;
    if (e.clientY < 0 || e.clientY > maxY) return;
    const deltaY = e.clientY - handleStartY;
    const newHeight = handleActiveName.value === 'top' ? boxStartHeight - deltaY : boxStartHeight + deltaY;
    if (newHeight < props.minHeight) return;
    boxCurrentY.value = handleActiveName.value === 'top' ? e.clientY : null;
    boxCurrentHeight.value = newHeight;
  }
}

// 拖拽结束
function onHandleDragEnd() {
  handleActiveName.value = null;
  window.removeEventListener('mousemove', onHandleDraging);
  window.removeEventListener('mouseup', onHandleDragEnd);
}
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-drag {
  &-box {
    z-index: 999;
  }
  &-box.is-active {
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
