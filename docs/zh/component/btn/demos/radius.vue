<template>
  <DemoBasic :radius="radiusRef" />
  <DemoValue
    v-model:value="radiusRef"
    label="圆角尺寸"
  />
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const radiusRef = ref(4);
</script>
