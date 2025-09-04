<!-- 多选框-选项组 -->
<template>
  <div :class="`vui-${checkboxType}-group`">
    <VCheckbox
      v-for="(formattedOption, index) in formattedOptions"
      :key="index"
      :label="formattedOption.label"
      :value="formattedOption.value"
      :option="options[index]"
    >
      <slot :option="options[index]" />
    </VCheckbox>
  </div>
</template>

<script setup>
import { provide, inject } from 'vue';
import { useCheckboxGroup, checkboxGroupModel, checkboxGroupProps, checkboxGroupEmits } from './composables/checkbox-group';
import { commonProps } from './composables/checkbox';

// 区分类型
const checkboxType = inject('checkboxType', 'checkbox');

// 选项组
const modelValue = defineModel('value', checkboxGroupModel.value);
const props = defineProps({ ...checkboxGroupProps, ...commonProps });
const emits = defineEmits(checkboxGroupEmits);
const { formattedOptions } = useCheckboxGroup({ props });

// 子组件使用
provide('checkboxGroup', {
  modelValue,
  props,
  emits
});
</script>
