<template>
  <DemoValue
    v-model:value="rotateRef"
    label="旋转角度"
    unit="deg"
  />

  <DemoBasic :rotate="rotateRef" />
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const rotateRef = ref(45);
</script>
