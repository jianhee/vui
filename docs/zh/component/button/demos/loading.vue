<template>
  <VSwitch
    v-model:checked="isLoading"
    active-text="加载状态"
  />

  <DemoBasic :loading="isLoading" />
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const isLoading = ref(true);
</script>
