<!-- 菜单 -->
<template>
  <div class="mx-menu">
    <MxMenuItem
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script setup>
import { provide } from 'vue';

const emits = defineEmits(['select', 'selectChange']);

// 参数
const props = defineProps({
  // 菜单项
  items: { type: Array, default: null },
  // 是否显示选中图标：在选中项的最后加一个 √ 图标，此时每项必需 key
  showSelectedIcon: { type: Boolean, default: false }
});

// 选中项的 key
const modelSelectedKey = defineModel('selectedKey', { type: [String, Number], default: null });

// 选中一项
const onSelect = item => {
  emits('select', item);
  if (item.key !== modelSelectedKey.value) {
    modelSelectedKey.value = item.key;
    emits('selectChange', item);
  }
};

// 共享数据
provide('modelSelectedKey', modelSelectedKey);
provide('showSelectedIcon', props.showSelectedIcon);
provide('onSelect', onSelect);
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-menu {
  max-width: 240px;
  &-item {
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 8px 20px;
    color: var(--mx-menu-text-color);
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: var(--mx-menu-hover-bg-color);
    }
  }
  &-label {
    flex: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    white-space: nowrap;
  }
  &-divider {
    height: 1px;
    background-color: var(--mx-menu-divider-bg-color);
  }
}
</style>
