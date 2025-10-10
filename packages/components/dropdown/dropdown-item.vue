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
  item: { type: [Object, Number, String], required: true }
});

// 使用菜单项
const { formattedItem, isSelected, itemClasses, onItemClick } = useDropdownItem({
  item: props.item
});

// 使用图标
const _iconProps = useIconProps(formattedItem.value.icon, formattedItem.value.iconProps);
</script>
