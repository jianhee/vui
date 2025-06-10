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
import { checkboxModel, checkboxProps, checkboxEmits, useCheckbox } from './composables';
import IconCheckbox from '../../icons/checkbox.vue';
import IconRadio from '../../icons/radio.vue';

// 处理数据
const modelChecked = defineModel('checked', checkboxModel.checked);
const props = defineProps(checkboxProps);
const emits = defineEmits(checkboxEmits);
const { checkboxType, isCheckbox, isBtn, rootClasses, formattedOption, isChecked, onCheckedChange } = useCheckbox({
  modelChecked,
  props,
  emits
});

// 图标
const IconComponent = isCheckbox ? IconCheckbox : IconRadio;
</script>
