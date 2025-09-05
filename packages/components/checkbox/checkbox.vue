<!-- 多选框-单个选项 -->
<template>
  <label :class="[`vui-${checkboxType}`, rootClasses]">
    <!-- 隐藏的 input -->
    <input
      :class="`vui-${checkboxType}-input`"
      :type="checkboxType"
      :checked="isChecked"
      :disabled="isDisabled || isReadonly"
      @change="onCheckedChange"
    />
    <!-- 图标 -->
    <VIcon
      v-if="!isBtn"
      :class="`vui-${checkboxType}-icon`"
      :icon="iconComponent"
    />
    <!-- 优先使用插槽 -->
    <slot v-if="$slots?.default?.()[0].children.length" />
    <!-- 其次使用属性值 -->
    <template v-else-if="label">{{ label }}</template>
  </label>
</template>

<script setup>
import { inject } from 'vue';
import { useCheckbox, checkboxModel, checkboxProps, commonProps, checkboxEmits } from './composables/checkbox';

// 区分类型
const checkboxType = inject('vuiCheckboxType', 'checkbox');

// 选项
const modelChecked = defineModel('checked', checkboxModel.checked);
const props = defineProps({ ...checkboxProps, ...commonProps });
const emits = defineEmits(checkboxEmits);

// 使用选项
const { isBtn, isDisabled, isReadonly, isChecked, onCheckedChange, rootClasses, iconComponent } = useCheckbox({
  modelChecked,
  props,
  emits
});
</script>
