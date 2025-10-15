<template>
  <VSlider
    v-model:value="valueRef"
    class="c-demo-slider"
    :min="50"
    :max="200"
  />
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(100);
</script>
