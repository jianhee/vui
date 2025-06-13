<template>
  <template
    v-for="inputSize in inputSizes"
    :key="inputSize.label"
  >
    <DemoSpace>{{ inputSize.label }}</DemoSpace>
    <DemoSpace>
      <VInput
        v-model:value="inputValue"
        class="demo-input"
        placeholder="请输入内容"
        :size="inputSize.value"
      />
    </DemoSpace>
  </template>
</template>

<script setup>
import { ref } from 'vue';

const inputSizes = [
  { label: 'medium（默认）', value: undefined },
  { label: 'small', value: 'small' }
];
const inputValue = ref(null);
</script>
