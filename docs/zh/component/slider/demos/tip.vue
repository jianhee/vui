<template>
  <DemoSpace class="demo-slider">
    <VSlider
      v-model:value="valueRef1"
      :show-tip="false"
    />
  </DemoSpace>
  <DemoSpace>不显示提示框</DemoSpace>
  <DemoSpace class="demo-slider">
    <VSlider
      v-model:value="valueRef2"
      :tip-format="val => `${val}%`"
    />
  </DemoSpace>
  <DemoSpace>格式化提示框</DemoSpace>
</template>

<script setup>
import { ref } from 'vue';

const valueRef1 = ref(50);
const valueRef2 = ref(50);
</script>
