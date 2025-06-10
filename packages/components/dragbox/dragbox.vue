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
      :class="['vui-dragbox-handle', `vui-dragbox-handle-${handle}`]"
      @mousedown="onResizeStart($event, handle)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { dragboxModel, dragboxProps, useDragbox } from './composables';

// 盒子
const boxRef = ref(null);

// 处理数据
const props = defineProps(dragboxProps);
const boxLeft = defineModel('left', dragboxModel);
const boxTop = defineModel('top', dragboxModel);
const boxWidth = defineModel('width', dragboxModel);
const boxHeight = defineModel('height', dragboxModel);
const { rootClasses, rootStyles, handleItems, onResizeStart } = useDragbox({
  boxRef,
  props,
  styles: { boxLeft, boxTop, boxWidth, boxHeight }
});
</script>
