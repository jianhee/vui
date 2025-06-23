<!-- 拖拽框 -->
<template>
  <div
    ref="boxRef"
    class="vui-dragbox"
    :class="{ ...moveClasses, ...resizeClasses }"
    :style="{ ...moveStyles, ...resizeStyles }"
  >
    <!-- 内容 -->
    <slot />
    <!-- 手柄 -->
    <div
      v-for="handle in handleItems"
      :key="handle"
      :class="['vui-dragbox-handle', `vui-dragbox-handle-${handle}`, { 'is-active': handle === handleActiveName }]"
      @mousedown="onResizeStart($event, handle)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { dragboxModel, dragboxProps } from './composables';
import { useDragboxMove } from './composables/move';
import { useDragboxResize } from './composables/resize';

// 盒子
const boxRef = ref(null);
const props = defineProps(dragboxProps);
const boxLeft = defineModel('left', dragboxModel);
const boxTop = defineModel('top', dragboxModel);
const boxWidth = defineModel('width', dragboxModel);
const boxHeight = defineModel('height', dragboxModel);

// 拖拽标识：move, resize
const dragFlag = ref(null);

// 使用移动
const { moveClasses, moveStyles } = useDragboxMove({
  boxRef,
  dragFlag,
  props,
  styles: { boxLeft, boxTop }
});

// 使用缩放
const { resizeClasses, resizeStyles, handleItems, handleActiveName, onResizeStart } = useDragboxResize({
  boxRef,
  dragFlag,
  props,
  styles: { boxLeft, boxTop, boxWidth, boxHeight }
});
</script>
