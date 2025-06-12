<template>
  <DemoSpace class="demo-slider">
    <VSlider
      v-model:value="valueRef"
      :min="50"
      :max="200"
    />
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(100);
</script>
