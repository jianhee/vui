<!-- 拖拽 -->
<!-- 1.移动位置 -->
<!-- 2.缩放大小 -->
<template>
  <div
    ref="boxRef"
    :class="boxClasses"
    :style="boxStyles"
  >
    <!-- 内容 -->
    <slot />
    <!-- 手柄 -->
    <div
      v-for="handle in handleItems"
      :key="handle"
      :class="['vui-dragbox-handle', `vui-dragbox-handle-${handle}`]"
      @mousedown="onResizeStart($event, handle)"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useMove } from './composables/move.js';
import { useResize } from './composables/resize.js';

// 参数
const props = defineProps({
  // 是否可移动：自动转成定位元素
  draggable: { type: Boolean, default: false },
  // 是否可缩放
  resizable: { type: Boolean, default: false },
  // 缩放时可拖拽的轴
  handles: { type: String, default: 'left, right, top, bottom' },
  // 是否固定定位
  fixed: { type: Boolean, default: true },
  // 是否计算样式：比如状态1可拖拽，绑定了定位和宽高，状态2普通div，不需要使用绑定信息，可以设置 false 清除绑定样式
  useStyles: { type: Boolean, default: true },
  // 最小尺寸
  minWidth: { type: Number, default: 10 },
  minHeight: { type: Number, default: 10 }
});

// 盒子
const boxRef = ref(null);

// 当前位置：只支持left和top
const boxCurrentX = defineModel('x', { type: Number, default: null });
const boxCurrentY = defineModel('y', { type: Number, default: null });

// 当前尺寸
const boxCurrentWidth = defineModel('width', { type: Number, default: null });
const boxCurrentHeight = defineModel('height', { type: Number, default: null });

// 移动
const { isMoving } = useMove({
  props,
  boxRef,
  boxCurrentX,
  boxCurrentY
});

// 缩放
const { handleDragingName, handleItems, onResizeStart } = useResize({
  props,
  boxRef,
  isMoving,
  boxCurrentX,
  boxCurrentY,
  boxCurrentWidth,
  boxCurrentHeight
});

// 获取类名
const boxClasses = computed(() => {
  return [
    'vui-dragbox',
    {
      'is-draging': isMoving.value || !!handleDragingName.value
    }
  ];
});

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
    cursor: isMoving.value ? 'move' : null
  };
});
</script>
