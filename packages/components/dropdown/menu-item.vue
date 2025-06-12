<!-- 下拉菜单-项 -->
<template>
  <!-- 内容 -->
  <div
    class="vui-menu-item"
    :title="formattedMenuItem.label"
    @click="onClickItem"
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
import { menuItemProps, useMenuItem } from './composables/menu';
import { useIconProps } from '../icon/composables/base';
import IconSelected from '../../icons/selected.vue';

// 菜单
const props = defineProps(menuItemProps);
const { formattedMenuItem, isSelected, onClickItem } = useMenuItem({ props });

// 图标
const { iconProps } = useIconProps(formattedMenuItem.value.icon);
</script>
