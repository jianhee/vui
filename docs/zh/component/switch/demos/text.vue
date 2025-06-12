<template>
  <VSwitch
    v-model:checked="valueRef"
    active-text="打开"
    inactive-text="关闭"
  />
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(false);
</script>
