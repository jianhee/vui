<!-- 下拉菜单-选项 -->
<template>
  <div
    class="vui-dropdown-item"
    :class="itemClasses"
    :title="formattedItem.label"
    @click="onItemClick"
  >
    <!-- 前置图标 -->
    <VIcon
      v-if="_iconProps"
      v-bind="_iconProps"
    />
    <!-- 文本 -->
    <span class="vui-dropdown-label">{{ formattedItem.label }}</span>
    <!-- 选中图标 -->
    <VIcon
      v-if="isSelected"
      :icon="IconSelected"
    />
  </div>
  <!-- 分隔符 -->
  <div
    v-if="formattedItem.divider"
    class="vui-dropdown-divider"
  />
</template>

<script setup>
import { useDropdownItem } from './composables/dropdown';
import { useIconProps } from '../icon/composables';
import IconSelected from '../../icons/selected.vue';

// 菜单项
const props = defineProps({
  formattedItem: { type: Object, required: true }
});

// 使用菜单项
const { isSelected, itemClasses, onItemClick } = useDropdownItem({
  formattedItem: props.formattedItem
});

// 使用图标
const _iconProps = useIconProps(props.formattedItem.icon, props.formattedItem.iconProps);
</script>
