<!-- 多选框-选项组 -->
<template>
  <div :class="`vui-${checkboxType}-group`">
    <VCheckbox
      v-for="(formattedOption, index) in formattedOptions"
      :key="index"
      :formatted-option="formattedOption"
    >
      <slot :option="formattedOption.__rawData__" />
    </VCheckbox>
  </div>
</template>

<script setup>
import { provide, inject } from 'vue';
import { useCheckboxGroup, checkboxGroupModel, checkboxGroupProps, checkboxGroupEmits } from './composables/checkbox-group';
import { commonProps } from './composables/checkbox';

// 区分类型
const checkboxType = inject('vuiCheckboxType', 'checkbox');

// 选项组
const modelValue = defineModel('value', checkboxGroupModel.value);
const props = defineProps({ ...checkboxGroupProps, ...commonProps });
const emits = defineEmits(checkboxGroupEmits);
const { formattedOptions } = useCheckboxGroup({ props });

// 子组件使用
provide('vuiCheckboxGroup', {
  modelValue,
  props,
  emits
});
</script>
