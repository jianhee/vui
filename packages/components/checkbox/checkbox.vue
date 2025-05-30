<!-- 多选框-单个选项 -->
<template>
  <BaseOption>
    <slot />
  </BaseOption>
</template>

<script setup>
import { provide } from 'vue';
import { optionEmits, optionProps } from './base/composable';
import BaseOption from './base/base-option.vue';

// 参数
const emits = defineEmits(optionEmits);
const props = defineProps(optionProps);
const modelChecked = defineModel('checked', { type: Boolean, default: false });

// 共享数据
provide('parentOption', {
  isCheckbox: true,
  emits,
  props,
  modelChecked
});
</script>
