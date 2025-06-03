<!-- 拖拽框 -->
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
  // 是否可移动：设置后盒子会自动转成定位元素
  moveable: { type: Boolean, default: false },
  // 是否可缩放
  resizable: { type: Boolean, default: false },
  // 可缩放手柄：默认 'left, right, top, bottom'，非定位元素只支持 `right, bottom`
  //  1. 设置 `props.resizable` 为 `true` 启用缩放，`props.resizeHandles` 使用默认值
  //  2. 或者设置 `props.resizeHandles` 为任意值启用缩放，`props.resizable` 可省略
  resizeHandles: { type: String, default: null },
  // 最小尺寸
  minWidth: { type: Number, default: 10 },
  minHeight: { type: Number, default: 10 },
  // 是否禁用：禁用会清空状态和绑定样式，但不会清除已记录的数据，切换状态后可恢复
  disabled: { type: Boolean, default: false }
});

// 盒子
const boxRef = ref(null);

// 当前位置：只支持 `left, top`
const boxCurrentLeft = defineModel('left', { type: Number, default: null });
const boxCurrentTop = defineModel('top', { type: Number, default: null });

// 当前尺寸
const boxCurrentWidth = defineModel('width', { type: Number, default: null });
const boxCurrentHeight = defineModel('height', { type: Number, default: null });

// 移动
const { isMoveable, isMoving } = useMove({
  props,
  boxRef,
  boxCurrentLeft,
  boxCurrentTop
});

// 缩放
const { isResizable, isResizing, handleItems, onResizeStart } = useResize({
  props,
  boxRef,
  isMoving,
  boxCurrentLeft,
  boxCurrentTop,
  boxCurrentWidth,
  boxCurrentHeight
});

// 获取类名
const boxClasses = computed(() => {
  return [
    'vui-dragbox',
    {
      'is-movable': isMoveable.value,
      'is-moving': isMoving.value,
      'is-resizable': isResizable.value,
      'is-resizing': isResizing.value
    }
  ];
});

// 获取样式
const boxStyles = computed(() => {
  if (props.disabled) return null;
  return {
    left: `${boxCurrentLeft.value}px`,
    top: `${boxCurrentTop.value}px`,
    width: `${boxCurrentWidth.value}px`,
    height: `${boxCurrentHeight.value}px`
  };
});
</script>
