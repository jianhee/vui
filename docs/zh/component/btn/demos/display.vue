<template>
  <VSwitch
    v-model:checked="isBlock"
    active-text="块级模式"
  />

  <DemoBasic :block="isBlock" />
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const isBlock = ref(true);
</script>
