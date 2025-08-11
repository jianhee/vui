<template>
  <DemoViewTop
    v-for="inputSize in inputSizes"
    :key="inputSize.label"
    :label="inputSize.label"
    :code="inputSize.value"
  >
    <VInput
      v-model:value="inputValue"
      class="demo-input"
      placeholder="请输入内容"
      :size="inputSize.value"
    />
  </DemoViewTop>
</template>

<script setup>
import { ref } from 'vue';

const inputSizes = [
  { label: '大号', value: 'large' },
  { label: '中号（默认）', value: 'medium' },
  { label: '小号', value: 'small' }
];
const inputValue = ref(null);
</script>
