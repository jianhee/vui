<template>
  <VSwitch
    v-model:checked="isBlock"
    active-text="块级模式"
  />

  <DemoOption :block="isBlock" />
</template>

<script setup>
import { ref } from 'vue';
import DemoOption from './option.vue';

const isBlock = ref(true);
</script>
