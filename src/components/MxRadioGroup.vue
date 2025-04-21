<!-- 单选框-组 -->
<template>
  <div :class="['mx-radio-group', `mx-radio-group-${direction}`]">
    <MxRadio
      v-for="(item, index) in items"
      :key="index"
      :value="item.value"
      :label="item.label"
    >
      <slot :item="item" />
    </MxRadio>
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
const modelValue = defineModel('value', { type: [String, Number], default: null });

// 修改值
function onValueChange(checkedVal) {
  modelValue.value = checkedVal;
  emits('change', checkedVal);
}

// 共享数据
provide('parentGroup', {
  modelValue,
  onValueChange
});
</script>

<style lang="scss">
@use '../assets/styles/mixins';
@include mixins.mx-checkbox-group('mx-radio');
</style>
