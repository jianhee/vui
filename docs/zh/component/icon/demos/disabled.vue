<template>
  <VSwitch
    v-model:checked="isDisbaled"
    active-text="禁用状态"
  />

  <DemoBasic :disabled="isDisbaled" />
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const isDisbaled = ref(true);
</script>
