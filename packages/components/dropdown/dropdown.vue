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
        :class="contentClass"
        :style="{ ...contentStyle, ...contentStyles }"
      >
        <!-- 使用菜单 -->
        <VMenu v-if="menus" />
        <!-- 使用自定义内容 -->
        <slot
          v-else
          name="content"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, provide } from 'vue';
import { dropdownEmits, dropdownProps, useDropdown } from './composables/dropdown';
import { menuEmits, menuProps } from './composables/menu';
import VMenu from './menu.vue';

// 处理数据
defineOptions({ inheritAttrs: false });
const emits = defineEmits([...dropdownEmits, ...menuEmits]);
const props = defineProps({ ...dropdownProps, ...menuProps });

// 触发器和内容
const triggerRef = ref(null);
const contentRef = ref(null);

// 下拉框
const { contentVisible, contentStyles, openDropdownByEvent, closeDropdown } = useDropdown(props, emits, triggerRef, contentRef);

// 下拉方法
defineExpose({
  open: openDropdownByEvent
});

// 菜单选中项的 key
const modelSelectedKey = defineModel('selectedKey', { type: [String, Number], default: null });

// 菜单共享数据
provide('parentMenu', {
  emits,
  props,
  modelSelectedKey,
  closeDropdown
});
</script>
