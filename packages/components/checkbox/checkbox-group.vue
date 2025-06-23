<!-- 多选框-选项组 -->
<template>
  <div :class="`vui-${checkboxType}-group`">
    <VCheckbox
      v-for="(option, index) in options"
      :key="index"
      :option="option"
    >
      <slot :option="option" />
    </VCheckbox>
  </div>
</template>

<script setup>
import { provide, inject } from 'vue';
import { checkboxGroupModel, checkboxGroupProps, checkboxGroupEmits } from './composables';

// 区分类型
const checkboxType = inject('checkboxType', 'checkbox');

// 选项组
const modelValue = defineModel('value', checkboxGroupModel.value);
const props = defineProps(checkboxGroupProps);
const emits = defineEmits(checkboxGroupEmits);

// 子组件使用
provide('checkboxGroup', {
  modelValue,
  props,
  emits
});
</script>
