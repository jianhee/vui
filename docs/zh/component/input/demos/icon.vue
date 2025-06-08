<template>
  <VInput
    v-model:value="inputValue"
    placeholder="请输入内容"
    icon="search"
  />
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
</script>
