<template>
  <DemoConfig
    v-for="(tooltipItem, index) in tooltipItems"
    :key="index"
    :label="tooltipItem.label"
    label-position="top"
  >
    <VSlider
      v-model:value="valueRef"
      :tooltip="tooltipItem.value"
    />
  </DemoConfig>
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(50);
const tooltipItems = [
  {
    label: '不显示提示框',
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
