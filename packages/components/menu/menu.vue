<!-- 菜单 -->
<template>
  <div class="vui-menu">
    <MenuItem
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script setup>
import { provide } from 'vue';
import { menuModel, menuProps, menuEmits } from '../menu/composables/menu';
import MenuItem from './menu-item.vue';

// 菜单
const modelSelectedKey = defineModel('selectedKey', menuModel.selectedKey);
const props = defineProps(menuProps);
const emits = defineEmits(menuEmits);

// 子组件使用
provide('vuiMenuRoot', {
  modelSelectedKey,
  props,
  emits
});
</script>
