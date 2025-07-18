<!-- 多选框-单个选项 -->
<template>
  <label
    :class="[`vui-${checkboxType}`, rootClasses]"
    v-bind="rootProps"
  >
    <!-- 隐藏的 input -->
    <input
      :class="`vui-${checkboxType}-input`"
      :type="checkboxType"
      :checked="isChecked"
      v-bind="nativeProps"
      @change="onCheckedChange"
    />
    <!-- 图标 -->
    <VIcon
      v-if="!isBtn"
      :class="`vui-${checkboxType}-icon`"
      :component="iconComponent"
    />
    <!-- 文本 -->
    <span v-if="labelText">{{ labelText }}</span>
    <!-- 文本后的内容 -->
    <slot />
  </label>
</template>

<script setup>
import { inject } from 'vue';
import { useCheckbox, checkboxModel, checkboxProps, checkboxEmits } from './composables/checkbox';
import { useNativeProps } from '../../composables/use-native-props';

// 筛选属性
defineOptions({ inheritAttrs: false });
const { rootProps, nativeProps } = useNativeProps(['disabled']);

// 区分类型
const checkboxType = inject('checkboxType', 'checkbox');

// 选项组
const checkboxGroup = inject('checkboxGroup', null);

// 选项
const modelChecked = defineModel('checked', checkboxModel.checked);
const props = defineProps(checkboxProps);
const emits = defineEmits(checkboxEmits);

// 原生属性

// 使用选项
const { isBtn, isChecked, onCheckedChange, rootClasses, iconComponent, labelText } = useCheckbox({
  checkboxType,
  checkboxGroup,
  checkbox: {
    modelChecked,
    props,
    emits
  }
});
</script>
