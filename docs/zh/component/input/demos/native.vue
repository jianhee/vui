<template>
  <DemoViewLeft
    label="是否自动聚焦"
    code="autofocus"
  >
    <VInput
      v-model:value="inputValue"
      placeholder="自动聚焦"
      autofocus
      class="demo-input"
    />
  </DemoViewLeft>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>
