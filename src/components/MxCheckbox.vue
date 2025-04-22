<!-- 多选框-项 -->
<template>
  <label :class="checkboxClasses">
    <!-- 图标 -->
    <input
      :checked="isChecked"
      type="checkbox"
      class="mx-checkbox-input"
      @change="onCheckedChange"
    />
    <MxIcon
      :component="IconCheckbox"
      class="mx-checkbox-icon"
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
import IconCheckbox from '../assets/icons/checkbox.vue';

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
const checkboxClasses = computed(() => {
  return [
    'mx-checkbox',
    {
      'mx-checkbox-block': props.display === 'block',
      'is-checked': isChecked.value
    }
  ];
});

// 选中状态：分组使用无效
const modelChecked = defineModel('checked', { type: Boolean, default: false });

// 是否选中
const isChecked = computed(() => {
  if (parentGroup) {
    return parentGroup.modelValue.value.includes(props.value);
  } else {
    return modelChecked.value;
  }
});

// 切换选中状态
function onCheckedChange() {
  if (parentGroup) {
    parentGroup.onValueChange(props.value);
  } else {
    const newChecked = !isChecked.value;
    modelChecked.value = newChecked;
    emits('change', newChecked);
  }
}
</script>

<style lang="scss">
@use '../assets/styles/modules/checkbox';
@include checkbox.mx-checkbox('mx-checkbox');
.mx-checkbox {
  --mx-checkbox-text-color: var(--mx-text-color-regular);
  --mx-checkbox-icon-color: var(--mx-border-color);
  --mx-checkbox-checked-text-color: var(--mx-brand-color);
  --mx-checkbox-checked-icon-color: var(--mx-brand-color);
}
</style>
