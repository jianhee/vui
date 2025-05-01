<template>
  <VInput
    v-model:value="inputValue"
    icon="close"
  />
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>
