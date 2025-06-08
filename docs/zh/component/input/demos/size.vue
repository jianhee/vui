<template>
  <DemoSpace>Medium（默认）</DemoSpace>
  <DemoSpace>
    <VInput
      v-model:value="inputValue"
      placeholder="请输入内容"
    />
  </DemoSpace>
  <DemoSpace>Small</DemoSpace>
  <DemoSpace>
    <VInput
      v-model:value="inputValue"
      placeholder="请输入内容"
      size="small"
    />
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>
