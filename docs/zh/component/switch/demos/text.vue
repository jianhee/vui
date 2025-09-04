<template>
  <VSwitch
    v-model:checked="checkedRef"
    active-text="打开"
    inactive-text="关闭"
  />
</template>

<script setup>
import { ref } from 'vue';

const checkedRef = ref(false);
</script>
