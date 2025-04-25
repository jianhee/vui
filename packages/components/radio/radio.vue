<!-- 单选框-项 -->
<template>
  <label :class="radioClasses">
    <!-- 图标 -->
    <input
      :checked="isChecked"
      type="radio"
      class="vui-radio-input"
      @change="onCheckedChange"
    />
    <VIcon
      :component="IconRadio"
      class="vui-radio-icon"
    />
    <!-- 文本 -->
    <span>{{ label }}</span>
    <!-- 自定义内容 -->
    <slot />
  </label>
</template>

<script setup>
import { computed, inject } from 'vue';
import IconRadio from '../../icons/radio.vue';

const emits = defineEmits(['change']);
const parentGroup = inject('parentGroup', null);

// 参数
const props = defineProps({
  // 值：单独使用无效
  value: { type: [String, Number], default: null },
  // 文本
  label: { type: String, default: null },
  // 显示类型：inline 行内，block 独占一行，分组使用无效
  display: { type: String, default: 'inline' }
});

// 获取类名
const radioClasses = computed(() => {
  return [
    'vui-radio',
    {
      'vui-radio-block': props.display === 'block',
      'is-checked': isChecked.value
    }
  ];
});

// 选中状态：分组使用无效
const modelChecked = defineModel('checked', { type: Boolean, default: false });

// 是否选中
const isChecked = computed(() => {
  if (parentGroup) {
    return parentGroup.modelValue.value === props.value;
  } else {
    return modelChecked.value;
  }
});

// 切换选中状态
function onCheckedChange() {
  if (parentGroup) {
    parentGroup.onValueChange(props.value);
  } else {
    const newChecked = !isChecked.value;
    modelChecked.value = newChecked;
    emits('change', newChecked);
  }
}
</script>
