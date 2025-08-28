<!-- 菜单-项 -->
<template>
  <div
    class="vui-menu-item"
    :class="rootClasses"
    :title="formattedMenuItem.label"
    @click="onMenuItemClick"
  >
    <!-- 前置图标 -->
    <VIcon
      v-if="formattedMenuItem.icon"
      :icon="formattedMenuItem.icon"
      v-bind="formattedMenuItem.iconProps"
    />
    <!-- 文本 -->
    <span class="vui-menu-label">{{ formattedMenuItem.label }}</span>
    <!-- 选中图标 -->
    <VIcon
      v-if="isSelected"
      :icon="IconSelected"
    />
  </div>
  <!-- 分隔符 -->
  <div
    v-if="formattedMenuItem.divider"
    class="vui-menu-divider"
  />
</template>

<script setup>
import { inject } from 'vue';
import { useMenuItem, menuItemProps } from '../menu/composables/menu-item';
import IconSelected from '../../icons/selected.vue';

// 菜单
const menuRoot = inject('menuRoot', null);

// 菜单项
const props = defineProps(menuItemProps);

// 使用菜单项
const { formattedMenuItem, isSelected, rootClasses, onMenuItemClick } = useMenuItem({
  menuRoot,
  menuItem: { props }
});
</script>
