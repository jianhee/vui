<!-- 菜单 -->
<template>
  <Dropdown
    ref="dropdownRef"
    v-bind="$attrs"
  >
    <!-- 触发器 -->
    <template
      v-if="$slots.default"
      #default
    >
      <slot />
    </template>

    <!-- 下拉框 -->
    <template #dropdown>
      <div class="vui-menu">
        <MenuItem
          v-for="(item, index) in items"
          :key="index"
          :item="item"
        />
      </div>
    </template>
  </Dropdown>
</template>

<script setup>
import { provide, useTemplateRef } from 'vue';
import { menuModel, menuProps, menuEmits } from './composables/menu';
import Dropdown from '../dropdown/dropdown.vue';
import MenuItem from './menu-item.vue';

// 菜单
const modelSelectedKey = defineModel('selectedKey', menuModel.selectedKey);
const props = defineProps(menuProps);
const emits = defineEmits(menuEmits);

// 下拉方法
const dropdownRef = useTemplateRef('dropdownRef');
defineExpose({
  open: params => dropdownRef.value?.open(params),
  close: () => dropdownRef.value?.close()
});

// 子组件使用
provide('menuRoot', {
  modelSelectedKey,
  props,
  emits,
  dropdownRef
});
</script>
