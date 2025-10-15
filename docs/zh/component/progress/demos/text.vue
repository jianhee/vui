<template>
  <div>
    <DemoConfig
      v-for="(suffixItem, index) in suffixItems"
      :key="index"
      :label="suffixItem.label"
      label-position="top"
    >
      <VProgress
        :percentage="valueRef"
        :suffix="suffixItem.value"
      />
    </DemoConfig>
  </div>
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
    value: percentage => `当前进度${percentage}%`
  },
  {
    label: '使用字段值',
    value: `当前进度${valueRef.value}%`
  }
];
</script>
