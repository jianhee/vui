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
import { inject, provide } from 'vue';
import { checkboxGroupModel, checkboxGroupProps, checkboxGroupEmits } from './composables';

// 处理数据
const modelValue = defineModel('value', checkboxGroupModel);
const props = defineProps(checkboxGroupProps);
const emits = defineEmits(checkboxGroupEmits);

// 共享数据
const checkboxType = inject('checkboxType', 'checkbox');
provide('checkboxGroup', {
  modelValue,
  props,
  emits
});
</script>
