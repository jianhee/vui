<template>
  <DemoRow flex>
    <VInput
      v-for="size in ['medium', 'small']"
      :key="size"
      v-model:value="inputValue"
      :size="size"
      :placeholder="size"
    />
  </DemoRow>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>
