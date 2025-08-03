<!-- 拖拽框 -->
<template>
  <div
    ref="boxElRef"
    class="vui-dragbox"
    :class="{ ...moveClasses, ...resizeClasses }"
    :style="{ ...moveStyles, ...resizeStyles }"
  >
    <!-- 显示内容 -->
    <slot />
    <!-- 手柄 -->
    <template v-if="isResizable">
      <div
        v-for="handle in resizeHandles"
        :key="handle"
        :class="[
          'vui-dragbox-handle',
          `vui-dragbox-handle-${handle}`,
          {
            'is-active': handle === activeHandleName
          }
        ]"
        @mousedown.left="onResizeStart($event, handle)"
      />
    </template>
  </div>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue';
import { dragboxModel, dragboxProps } from './composables';
import { useDragMove } from './composables/drag-move';
import { useDragResize } from './composables/drag-resize';

// 盒子
const boxElRef = useTemplateRef('boxElRef');
const props = defineProps(dragboxProps);
const modelLeft = defineModel('left', dragboxModel);
const modelTop = defineModel('top', dragboxModel);
const modelWidth = defineModel('width', dragboxModel);
const modelHeight = defineModel('height', dragboxModel);

// 拖拽标识：move, resize
const dragFlagRef = ref(null);

// 使用移动
const { moveClasses, moveStyles } = useDragMove({
  boxElRef,
  dragFlagRef,
  props,
  modelLeft,
  modelTop
});

// 使用缩放
const { isResizable, resizeClasses, resizeStyles, activeHandleName, onResizeStart } = useDragResize({
  boxElRef,
  dragFlagRef,
  props,
  modelLeft,
  modelTop,
  modelWidth,
  modelHeight
});
</script>
