<template>
  <DemoConfig
    v-for="(suffixItem, index) in suffixItems"
    :key="index"
    :label="suffixItem.label"
    label-position="top"
  >
    <VSlider
      v-model:value="valueRef"
      :suffix="suffixItem.value"
    />
  </DemoConfig>
  <DemoConfig
    label="使用插槽"
    label-position="top"
  >
    <VSlider v-model:value="valueRef">
      <template #suffix="{ value }">{{ `${value}px` }}</template>
    </VSlider>
    <VSlider
      v-model:value="valueRef"
      :tooltip="`${valueRef}%`"
    >
      <template #suffix="{ tooltip }">{{ tooltip }}</template>
    </VSlider>
  </DemoConfig>
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(50);
const suffixItems = [
  {
    label: '不显示内容',
    value: null
  },
  {
    label: '使用函数渲染',
    value: value => `${value}px`
  },
  {
    label: '使用字段值',
    value: `${valueRef.value}%`
  }
];
</script>
