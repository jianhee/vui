<!-- 多选框-单个选项 -->
<template>
  <label :class="rootClasses">
    <!-- 隐藏的 input -->
    <input
      :checked="isChecked"
      :type="checkboxType"
      :class="`vui-${checkboxType}-input`"
      @change="onCheckedChange"
    />
    <!-- 图标 -->
    <VIcon
      v-if="!isBtn"
      :component="IconComponent"
      :class="`vui-${checkboxType}-icon`"
    />
    <!-- 文本 -->
    <span v-if="formattedOption.label">{{ formattedOption.label }}</span>
    <!-- 自定义内容 -->
    <slot />
  </label>
</template>

<script setup>
import { inject } from 'vue';
import { useCheckbox, checkboxModel, checkboxProps, checkboxEmits } from './composables';

// 区分类型
const checkboxType = inject('checkboxType', 'checkbox');

// 选项组
const checkboxGroup = inject('checkboxGroup', null);

// 选项
const modelChecked = defineModel('checked', checkboxModel.checked);
const props = defineProps(checkboxProps);
const emits = defineEmits(checkboxEmits);

// 使用选项
const { IconComponent, isBtn, rootClasses, formattedOption, isChecked, onCheckedChange } = useCheckbox({
  checkboxType,
  checkboxGroup,
  checkbox: {
    modelChecked,
    props,
    emits
  }
});
</script>
