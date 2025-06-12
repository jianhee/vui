<!-- 拖拽框 -->
<template>
  <div
    ref="boxRef"
    :class="rootClasses"
    :style="rootStyles"
  >
    <!-- 内容 -->
    <slot />
    <!-- 手柄 -->
    <div
      v-for="handle in handleItems"
      :key="handle"
      :class="['vui-dragbox-handle', `vui-dragbox-handle-${handle}`, { 'is-active': handle === dragFlag }]"
      @mousedown="onResizeStart($event, handle)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { dragboxModel, dragboxProps, useDragbox } from './composables';
import { useMove } from './composables/move';
import { useResize } from './composables/resize';

// 盒子
const boxRef = ref(null);

// 处理数据
const props = defineProps(dragboxProps);
const boxLeft = defineModel('left', dragboxModel);
const boxTop = defineModel('top', dragboxModel);
const boxWidth = defineModel('width', dragboxModel);
const boxHeight = defineModel('height', dragboxModel);

// 拖拽标识
const dragFlag = ref(null); // move, left, right, top, bottom

// 移动
const { isMovable } = useMove({
  boxRef,
  dragFlag,
  props,
  styles: { boxLeft, boxTop }
});

// 缩放
const { isResizable, handleItems, onResizeStart } = useResize({
  boxRef,
  dragFlag,
  props,
  styles: { boxLeft, boxTop, boxWidth, boxHeight }
});

// 拖拽框
const { rootClasses, rootStyles } = useDragbox({
  dragFlag,
  props,
  styles: { boxLeft, boxTop, boxWidth, boxHeight },
  isMovable,
  isResizable
});
</script>
