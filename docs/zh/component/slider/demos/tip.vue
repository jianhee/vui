<template>
  <DemoSpace>不显示提示框</DemoSpace>
  <DemoSpace>
    <VSlider
      v-model:value="valueRef"
      :show-tip="false"
    />
  </DemoSpace>
  <DemoSpace>格式化提示框</DemoSpace>
  <DemoSpace>
    <VSlider
      v-model:value="valueRef"
      :tip-format="val => `${val}%`"
    />
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(50);
</script>
