<template>
  <VSlider
    v-model:value="valueRef"
    class="c-demo-slider"
  />

  <DemoSpace>
    当前值为 <code>{{ valueRef }}</code>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(50);
</script>

<style>
.c-demo-slider,
.c-demo-sliders .vui-slider {
  max-width: var(--demo-filed-width);
}
</style>
