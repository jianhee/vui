<!-- 多选框-组 -->
<template>
  <div :class="['mx-checkbox-group', `mx-checkbox-${direction}`]">
    <MxCheckbox
      v-for="(item, index) in items"
      :key="index"
      :value="item.value"
      :label="item.label"
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
  // 选项：{ value: '值', label: '文本' }
  items: { type: Array, default: () => [] },
  // 排列方向：默认 vertical 纵向（每项独占一行），horizontal 横向（所有项共用一行）
  direction: { type: String, default: 'vertical' }
});

// 当前值
const modelValue = defineModel('value', { type: Array, default: () => [] });

// 修改值
function onValueChange(checkedVal) {
  const index = modelValue.value.findIndex(val => val === checkedVal);
  if (index === -1) {
    modelValue.value.push(checkedVal);
  } else {
    modelValue.value.splice(index, 1);
  }
  emits('change', modelValue.value);
}

// 共享数据
provide('parentGroup', {
  modelValue,
  onValueChange
});
</script>

<style lang="scss">
.mx-checkbox {
  &-horizontal .mx-checkbox:not(:last-child) {
    margin-right: 10px;
  }
  &-vertical .mx-checkbox {
    display: flex;
  }
}
</style>
