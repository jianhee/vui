<template>
  <DemoSpace class="demo-slider">
    <VSlider v-model:value="valueRef" />
  </DemoSpace>
  <DemoSpace>
    当前值为 <code>{{ valueRef }}</code>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(50);
</script>

<style>
.demo-slider {
  max-width: 500px;
  padding-top: 20px;
}
</style>
