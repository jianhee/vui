<template>
  <DemoConfig
    label="是否自动聚焦"
    code="autofocus"
  >
    <VInput
      v-model:value="inputValue"
      placeholder="自动聚焦"
      autofocus
      class="c-demo-input"
    />
  </DemoConfig>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>
