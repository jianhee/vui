<!-- 下拉框 -->
<template>
  <!-- 触发器：必须是有效的 html DOM 元素 -->
  <slot />
  <!-- 为了获取 slots.default 根元素 -->
  <span
    v-if="$slots.default"
    ref="triggerNextEl"
    style="display: none"
  />

  <!-- 下拉框 -->
  <Teleport to="body">
    <Transition name="vui-dropdown">
      <div
        v-show="dropdownVisible"
        ref="dropdownEl"
        v-bind="$attrs"
        class="vui-dropdown"
        :style="dropdownStyles"
      >
        <!-- 菜单内容 -->
        <DropdownMenu v-if="menus" />
        <!-- 下拉框内容 -->
        <slot
          v-else
          name="dropdown"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { provide, useTemplateRef } from 'vue';
import { useDropdown, dropdownProps, dropdownEmits } from './composables/dropdown';
import { menuModel, menuProps, menuEmits } from './composables/menu';
import DropdownMenu from './menu.vue';

// 下拉框
defineOptions({ inheritAttrs: false });
const triggerNextEl = useTemplateRef('triggerNextEl');
const dropdownEl = useTemplateRef('dropdownEl');
const modelSelectedKey = defineModel('selectedKey', menuModel.selectedKey);
const props = defineProps({ ...dropdownProps, ...menuProps });
const emits = defineEmits([...dropdownEmits, ...menuEmits]);

// 使用下拉框
const { dropdownVisible, dropdownStyles, openDropdown, closeDropdown } = useDropdown({
  triggerNextEl,
  dropdownEl,
  props,
  emits
});

// 下拉框方法
defineExpose({
  open: openDropdown
});

// 菜单子组件使用
provide('menuRoot', {
  modelSelectedKey,
  props,
  emits,
  closeDropdown
});
</script>
