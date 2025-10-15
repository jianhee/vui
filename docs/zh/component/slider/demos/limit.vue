<template>
  <VSlider
    v-model:value="valueRef"
    :min="50"
    :max="200"
  />
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(100);
</script>
