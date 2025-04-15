<!-- 单选框-组 -->
<template>
  <div :class="`mx-radio-group is-${layout}`">
    <MxRadioItem
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    >
      <slot :item="item" />
    </MxRadioItem>
  </div>
</template>

<script setup>
import { provide } from 'vue';

const emits = defineEmits(['change']);

// 参数
defineProps({
  // 单选框项
  items: { type: Array, default: null },
  // 布局：block, inline
  layout: { type: String, default: 'inline' }
});

// 当前值
const modelValue = defineModel('value', { type: [String, Number], default: null });

// 修改值
function onValueChange(item) {
  if (item.value === modelValue.value) return;
  modelValue.value = item.value;
  emits('change', item);
}

// 共享数据
provide('modelValue', modelValue);
provide('onValueChange', onValueChange);
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-radio {
  &-item {
    position: relative;
    gap: 8px;
    align-items: center;
    height: 32px;
    margin-right: 10px;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    &.is-checked,
    &.is-checked .mx-radio-icon {
      color: var(--mx-checkbox-active-color);
    }
  }
  &-group.is-inline &-item {
    display: inline-flex;
  }
  &-group.is-block &-item {
    display: flex;
  }
  &-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
  &-icon {
    overflow: hidden;
    color: var(--mx-checkbox-default-color);
    border-radius: 2px;
    transition: color 0.3s ease;
  }
}
</style>
