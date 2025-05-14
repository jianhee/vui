<template>
  <VInput
    v-model:value="inputValue"
    icon="search"
  />
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
