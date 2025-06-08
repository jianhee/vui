<!-- 多选框/单选框-选项组 -->
<template>
  <div :class="`vui-${typeName}-group`">
    <BaseOption
      v-for="(option, index) in options"
      :key="index"
      :option="option"
    >
      <slot :option="option" />
    </BaseOption>
  </div>
</template>

<script setup>
import { provide, inject } from 'vue';
import { groupProps, groupEmits } from '../composables';
import BaseOption from './base-option.vue';

// 区分类型
const typeName = inject('typeName', null);
const isCheckbox = typeName === 'checkbox';

// 处理数据
const emits = defineEmits(groupEmits);
const props = defineProps(groupProps);
const modelValue = defineModel('value', {
  type: [Array, String, Number],
  default: null
});

// 切换选项
const onValueChange = (formatOption, rawOption) => {
  if (isCheckbox) {
    onCheckboxChange(formatOption, rawOption);
  } else {
    onRadioChange(formatOption, rawOption);
  }
};

// 多选框
function onCheckboxChange(formatOption, rawOption) {
  const checkedValues = modelValue.value || [];
  const index = checkedValues.findIndex(value => value === formatOption.value);
  if (index === -1) {
    checkedValues.push(formatOption.value);
  } else {
    checkedValues.splice(index, 1);
  }
  modelValue.value = checkedValues;
  emits('change', { option: rawOption, value: checkedValues });
}

// 单选框
function onRadioChange(formatOption, rawOption) {
  const checkedValue = formatOption.value;
  modelValue.value = checkedValue;
  emits('change', checkedValue, { option: rawOption, value: checkedValue });
}

// 共享数据
provide('parentGroup', {
  props,
  modelValue,
  onValueChange
});
</script>
