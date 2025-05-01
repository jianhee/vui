<template>
  <DemoRow flex>
    <VInput
      v-model:value="inputValue1"
      placeholder="medium"
    />
    <VInput
      v-model:value="inputValue2"
      placeholder="small"
      size="small"
    />
  </DemoRow>
</template>

<script setup>
import { ref } from 'vue';

const inputValue1 = ref(null);
const inputValue2 = ref(null);
</script>
