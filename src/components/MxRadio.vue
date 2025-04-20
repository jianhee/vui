<!-- 单选框-项 -->
<template>
  <label :class="radioClasses">
    <!-- 图标 -->
    <input
      :checked="isChecked"
      type="radio"
      class="mx-radio-input"
      @change="onCheckedChange"
    />
    <MxIcon
      :component="IconRadio"
      class="mx-radio-icon"
    />
    <!-- 文本 -->
    <span>{{ label }}</span>
    <!-- 自定义内容 -->
    <slot />
  </label>
</template>

<script setup>
import { computed, inject } from 'vue';
import MxIcon from './MxIcon.vue';
import IconRadio from '../assets/icons/radio.vue';

const emits = defineEmits(['change']);
const parentGroup = inject('parentGroup', null);

// 参数
const props = defineProps({
  // 值：单独使用无效
  value: { type: [String, Number], default: null },
  // 文本
  label: { type: String, default: null },
  // 显示类型：inline 行内，block 独占一行，分组使用无效
  display: { type: String, default: 'inline' }
});

// 获取类名
const radioClasses = computed(() => {
  return [
    'mx-radio',
    {
      'mx-radio-block': props.display === 'block',
      'is-checked': isChecked.value
    }
  ];
});

// 选中状态：分组使用无效
const modelChecked = defineModel('checked', { type: Boolean, default: false });

// 是否选中
const isChecked = computed(() => {
  if (parentGroup) {
    return parentGroup.modelValue.value === props.value;
  } else {
    return modelChecked.value;
  }
});

// 切换选中状态
function onCheckedChange() {
  const newState = !isChecked.value;
  if (parentGroup) {
    parentGroup.onValueChange(newState, props.value);
  } else {
    modelChecked.value = newState;
    emits('change', newState);
  }
}
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-radio {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 32px;
  font-size: 14px;
  line-height: 32px;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: color 0.3s ease;

  // 块级元素
  &-block {
    display: flex;
  }

  // 图标
  &-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
  &-icon {
    overflow: hidden;
    color: var(--mx-radio-icon-color);
    border-radius: 2px;
  }

  // 选中状态
  &.is-checked,
  &.is-checked &-icon {
    color: var(--mx-radio-icon-active-color);
  }
}
</style>
