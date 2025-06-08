<!-- 多选框/单选框-单个选项 -->
<template>
  <label :class="optionClasses">
    <!-- 隐藏的 input -->
    <input
      :checked="isChecked"
      :type="typeName"
      :class="`vui-${typeName}-input`"
      @change="onCheckedChange"
    />
    <!-- 图标 -->
    <VIcon
      v-if="!isBtn"
      :component="IconComponent"
      :class="`vui-${typeName}-icon`"
    />
    <!-- 文本 -->
    <span v-if="lableRef">{{ lableRef }}</span>
    <!-- 自定义内容 -->
    <slot />
  </label>
</template>

<script setup>
import { computed, inject } from 'vue';
import { optionEmits, optionProps } from '../composables';
import IconCheckbox from '../../../icons/checkbox.vue';
import IconRadio from '../../../icons/radio.vue';

// 区分类型
const typeName = inject('typeName', null);
const isCheckbox = typeName === 'checkbox';
const IconComponent = isCheckbox ? IconCheckbox : IconRadio;

// 处理数据
const parentGroup = inject('parentGroup', null);
const emits = defineEmits(optionEmits);
const props = defineProps(optionProps);
const modelChecked = defineModel('checked', { type: Boolean, default: false });

// 是否按钮
const isBtn = computed(() => props.type === 'button' || parentGroup?.props.optionType === 'button');

// 是否块级
const isBlock = computed(() => {
  if (isBtn.value) return false;
  if (parentGroup) {
    return parentGroup.props.optionBlock && !parentGroup.props.optionInline;
  }
  return props.block || !props.inline;
});

// 获取类名
const optionClasses = computed(() => {
  return [
    isBtn.value ? `vui-${typeName}-btn` : `vui-${typeName}`,
    {
      [`vui-${typeName}--block`]: isBlock.value,
      'is-checked': isChecked.value
    }
  ];
});

// 文本
const lableRef = computed(() => props.label || props.option?.label);

// 是否选中
const isChecked = computed(() => {
  if (parentGroup) {
    // 选项组
    const checkedValue = parentGroup.modelValue.value;
    const optionValue = props.option.value;
    if (isCheckbox) {
      return checkedValue?.includes(optionValue);
    } else {
      return checkedValue === optionValue;
    }
  } else {
    // 单个选项
    return modelChecked.value;
  }
});

// 切换选中状态
function onCheckedChange() {
  if (parentGroup) {
    parentGroup.onValueChange(props.option);
  } else {
    onOptionChange();
  }
}

// 切换选中状态
function onOptionChange() {
  const newChecked = !isChecked.value;
  modelChecked.value = newChecked;
  emits('change', newChecked);
}
</script>
