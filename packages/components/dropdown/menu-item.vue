<!-- 菜单-项 -->
<template>
  <div
    class="vui-menu-item"
    :title="formattedMenuItem.label"
    @click="onMenuItemClick"
  >
    <!-- 前置图标 -->
    <VIcon
      v-if="formattedMenuItem.icon"
      v-bind="iconProps"
    />
    <!-- 文本 -->
    <span class="vui-menu-label">{{ formattedMenuItem.label }}</span>
    <!-- 选中图标 -->
    <VIcon
      v-if="isSelected"
      :component="IconSelected"
    />
  </div>
  <!-- 分隔符 -->
  <div
    v-if="formattedMenuItem.divider"
    class="vui-menu-divider"
  />
</template>

<script setup>
import { computed, inject } from 'vue';
import { useMenuItem, menuItemProps } from './composables/menu-item';
import { useIconProps } from '../icon/composables/base';
import IconSelected from '../../icons/selected.vue';

// 菜单
const menuRoot = inject('menuRoot', null);

// 菜单项
const props = defineProps(menuItemProps);

// 使用菜单项
const { formattedMenuItem, isSelected, onMenuItemClick } = useMenuItem({
  menuRoot,
  menuItem: { props }
});

// 使用图标
const { iconProps } = useIconProps({
  iconRef: computed(() => formattedMenuItem.value.icon)
});
</script>
