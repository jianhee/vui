<!-- 下拉菜单-项 -->
<template>
  <!-- 内容 -->
  <div
    class="vui-menu-item"
    :title="formatItem.label"
    @click="onClickItem"
  >
    <!-- 前置图标 -->
    <VIcon
      v-if="formatItem.icon"
      v-bind="iconProps"
    />
    <!-- 文本 -->
    <span class="vui-menu-label">{{ formatItem.label }}</span>
    <!-- 选中图标 -->
    <VIcon
      v-if="isSelected"
      :component="IconSelected"
    />
  </div>
  <!-- 分隔符 -->
  <div
    v-if="formatItem.divider"
    class="vui-menu-divider"
  />
</template>

<script setup>
import { inject, computed } from 'vue';
import { itemProps, useMenu } from './composables/menu';
import { useIcon } from '../icon/composables';
import IconSelected from '../../icons/selected.vue';

// 处理数据
const parentMenu = inject('parentMenu', null);
const props = defineProps(itemProps);
const { formatItem } = useMenu(props);

// 图标 props
const { iconProps } = useIcon(formatItem.value.icon);

// 是否选中
const isSelected = computed(() => {
  if (!parentMenu.props.selectable) return false;

  return formatItem.value.key === parentMenu.modelSelectedKey.value;
});

// 点击一项
const onClickItem = () => {
  // 关闭下拉框
  parentMenu.closeDropdown();

  // 处理数据
  const selectedKey = formatItem.value.key;
  const params = { item: formatItem.value, key: selectedKey };

  // 点击事件
  parentMenu.emits('menu-click', params);

  // 切换选中事件
  if (!parentMenu.props.selectable) return;
  if (!isSelected.value) {
    parentMenu.modelSelectedKey.value = selectedKey;
    parentMenu.emits('menu-select-change', params);
  }
};
</script>
