<!-- 下拉框 -->
<template>
  <!-- 触发器 -->
  <div
    v-if="$slots.default"
    ref="triggerRef"
    class="vui-dropdown-trigger"
    v-bind="$attrs"
  >
    <slot />
  </div>

  <!-- 内容 -->
  <Teleport to="body">
    <Transition name="vui-dropdown">
      <div
        v-show="contentVisible"
        ref="contentRef"
        class="vui-dropdown-content"
        :style="contentStyles"
      >
        <slot name="content" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue';
import { dropdownEmits, dropdownProps, useDropdown } from './composables/dropdown';

defineOptions({ inheritAttrs: false });

// 参数
const emits = defineEmits(dropdownEmits);
const props = defineProps({
  ...dropdownProps
});

// 触发器和内容
const triggerRef = ref(null);
const contentRef = ref(null);

// 下拉框
const { contentVisible, contentStyles, openDropdownByEvent } = useDropdown(props, emits, triggerRef, contentRef);

// 下拉方法
defineExpose({
  open: openDropdownByEvent
});
</script>
