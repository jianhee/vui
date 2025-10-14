<!-- 弹出框 -->
<template>
  <!-- 触发元素：可省略 -->
  <VPopoverTrigger
    v-if="$slots.default"
    ref="triggerRef"
  >
    <slot />
  </VPopoverTrigger>

  <!-- 弹出框 -->
  <Teleport to="body">
    <Transition
      name="vui-popover"
      @after-enter="emits('opened')"
      @after-leave="emits('closed')"
    >
      <div
        v-if="contentVisible"
        ref="contentElRef"
        class="vui-popover"
        v-bind="$attrs"
      >
        <!-- 箭头 -->
        <span
          ref="arrowElRef"
          class="vui-popover-arrow"
          data-popper-arrow
        />
        <!-- 内容 -->
        <div class="vui-popover-content">
          <!-- 优先使用插槽 -->
          <slot
            v-if="$slots.content"
            name="content"
          />
          <!-- 其次使用属性值 -->
          <template v-else>{{ content }}</template>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import { usePopover, popoverProps, popoverEmits } from './composables/popover.js';
import VPopoverTrigger from './composables/trigger.js';

// 弹出框
defineOptions({ inheritAttrs: false });
const triggerRef = useTemplateRef('triggerRef');
const contentElRef = useTemplateRef('contentElRef');
const arrowElRef = useTemplateRef('arrowElRef');
const props = defineProps(popoverProps);
const emits = defineEmits(popoverEmits);

// 使用弹出框
const { contentVisible, openByMethod, closePopover } = usePopover({
  triggerRef,
  contentElRef,
  arrowElRef,
  props,
  emits
});

// 弹出框方法
defineExpose({
  open: openByMethod,
  close: closePopover,
  update: () => openByMethod(undefined, false)
});
</script>
