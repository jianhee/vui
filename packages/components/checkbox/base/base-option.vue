<!-- 多选框/单选框 -->
<!-- 单个选项 -->
<template>
  <label :class="optionClasses">
    <!-- 隐藏的 input -->
    <input
      :checked="isChecked"
      :type="inputType"
      :class="`vui-${inputType}-input`"
      @change="onCheckedChange"
    />
    <!-- 图标 -->
    <VIcon
      v-if="!isBtn"
      :component="IconComponent"
      :class="`vui-${inputType}-icon`"
    />
    <!-- 文本 -->
    <span v-if="lableRef">{{ lableRef }}</span>
    <!-- 自定义内容 -->
    <slot />
  </label>
</template>

<script setup>
import { computed, inject } from 'vue';
import IconCheckbox from '../../../icons/checkbox.vue';
import IconRadio from '../../../icons/radio.vue';

const parentForm = inject('parentForm', null);
const parentGroup = inject('parentGroup', null);
const parentOption = inject('parentOption', null);

// 区分多选框和单选框
const isCheckbox = parentOption?.isCheckbox;
const inputType = isCheckbox ? 'checkbox' : 'radio';
const IconComponent = isCheckbox ? IconCheckbox : IconRadio;

// 是否按钮
const isBtn = parentGroup?.props.optionType === 'button' || parentOption?.props.type === 'button';

// 是否行内
const isInline = computed(() => {
  // 按钮类型
  if (isBtn) return true;

  // 行内表单
  if (parentForm?.props.filedInline) return true;

  // 选项组：默认 block
  if (parentGroup) {
    return parentGroup.props.optionInline || !parentGroup.props.optionBlock;
  }

  // 单个选项：默认 inline
  return parentOption.props.inline && !parentOption.props.block;
});

// 获取类名
const optionClasses = computed(() => {
  return [
    isBtn ? [`vui-${inputType}-btn`] : [`vui-${inputType}`],
    {
      [`vui-${inputType}--block`]: !isInline.value,
      'is-checked': isChecked.value
    }
  ];
});

// 文本
const lableRef = computed(() => {
  return parentOption?.props.option?.label || parentOption?.props.label;
});

// 值
const valueRef = computed(() => {
  return parentOption?.props.option.value;
});

// 是否选中
const isChecked = computed(() => {
  // 选项组
  if (parentGroup) {
    // 多选框
    if (isCheckbox) {
      return parentGroup.modelValue.value.includes(valueRef.value);
    }
    // 单选框
    return parentGroup.modelValue.value === valueRef.value;
  }
  // 单个选项
  return parentOption.modelChecked.value;
});

// 切换选中状态
function onCheckedChange() {
  // 选项组
  if (parentGroup) {
    // 多选框
    if (isCheckbox) {
      if (isChecked.value) {
        const index = parentGroup.modelValue.value.findIndex(val => val === valueRef.value);
        parentGroup.modelValue.value.splice(index, 1);
      } else {
        parentGroup.modelValue.value.push(valueRef.value);
      }
      parentGroup.emits('change', parentGroup.modelValue.value, parentOption.props.option);
      return;
    }
    // 单选框
    const newVal = valueRef.value;
    parentGroup.modelValue.value = newVal;
    parentGroup.emits('change', newVal, parentOption.props.option);
    return;
  }
  // 单个选项
  const newChecked = !isChecked.value;
  parentOption.modelChecked.value = newChecked;
  parentOption.emits('change', newChecked);
}
</script>
