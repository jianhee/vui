<!-- 多选框-组 -->
<template>
  <div class="mx-checkbox-group">
    <MxCheckbox
      v-for="(item, index) in items"
      :key="index"
      :value="item.value"
      :label="item.label"
      :block="direction === 'vertical'"
    >
      <slot :item="item" />
    </MxCheckbox>
  </div>
</template>

<script setup>
import { provide } from 'vue';

const emits = defineEmits(['change']);

// 参数
defineProps({
  // 选项
  // value    值
  // label    文本
  items: { type: Array, default: () => [] },
  // 排列方向：horizontal, vertical
  direction: { type: String, default: 'horizontal' }
});

// 当前值
const modelValue = defineModel('value', { type: Array, default: () => [] });

// 修改值
function onValueChange(isChecked, checkedVal) {
  const index = modelValue.value.findIndex(n => n === checkedVal);
  if (index === -1) {
    modelValue.value.push(checkedVal);
  } else {
    modelValue.value.splice(index, 1);
  }
  emits('change', modelValue.value);
}

// 共享数据
provide('checkboxGroup', {
  modelValue,
  onValueChange
});
</script>
