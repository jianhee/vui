<!-- 下拉框 -->
<template>
  <!-- 触发器：可省略 -->
  <template v-if="$slots.default">
    <!-- 必须是有效的 html DOM 元素 -->
    <slot />
    <!-- 为了获取 slots.default 根元素 -->
    <span
      ref="triggerNextElRef"
      style="display: none"
    />
  </template>

  <!-- 下拉框：必填 -->
  <Teleport to="body">
    <Transition
      name="vui-dropdown"
      @after-enter="onTransitionEnd('enter')"
      @after-leave="onTransitionEnd('leave')"
    >
      <div
        v-if="dropdownVisible"
        ref="dropdownElRef"
        class="vui-dropdown"
        :style="dropdownStyles"
        v-bind="$attrs"
      >
        <slot name="dropdown" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import { useDropdown, dropdownProps, dropdownEmits } from './composables/dropdown';

// 下拉框
defineOptions({ inheritAttrs: false });
const triggerNextElRef = useTemplateRef('triggerNextElRef');
const dropdownElRef = useTemplateRef('dropdownElRef');
const props = defineProps(dropdownProps);
const emits = defineEmits(dropdownEmits);

// 使用下拉框
const { dropdownVisible, dropdownStyles, openByMethod, closeDropdown, onTransitionEnd } = useDropdown({
  triggerNextElRef,
  dropdownElRef,
  props,
  emits
});

// 下拉框方法
defineExpose({
  open: openByMethod,
  close: closeDropdown
});
</script>
