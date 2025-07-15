<template>
  <DemoSpace>
    <VSlider
      v-model:value="valueRef"
      class="demo-slider"
      :min="50"
      :max="200"
    />
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(100);
</script>
