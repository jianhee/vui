<!-- 多选框/单选框-选项组 -->
<template>
  <div :class="`vui-${typeName}-group`">
    <BaseOption
      v-for="option in options"
      :key="option.value"
      :option="option"
    >
      <slot :option="option" />
    </BaseOption>
  </div>
</template>

<script setup>
import { computed, provide, inject } from 'vue';
import { groupProps, groupEmits } from './composable';
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

// 格式化选项
const options = computed(() => {
  return props.options.map(option => {
    if (typeof option === 'object') {
      return option;
    } else {
      return { label: option, value: option };
    }
  });
});

// 切换选项
const onValueChange = option => {
  if (isCheckbox) {
    onCheckboxChange(option);
  } else {
    onRadioChange(option);
  }
};

// 多选框
function onCheckboxChange(option) {
  const values = modelValue.value || [];
  const index = values.findIndex(value => value === option.value);
  if (index === -1) {
    values.push(option.value);
  } else {
    values.splice(index, 1);
  }
  modelValue.value = values;
  emits('change', values, option);
}

// 单选框
function onRadioChange(option) {
  const newValue = option.value;
  modelValue.value = newValue;
  emits('change', newValue, option);
}

// 共享数据
provide('parentGroup', {
  props,
  modelValue,
  onValueChange
});
</script>
