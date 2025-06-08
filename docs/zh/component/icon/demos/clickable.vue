<template>
  <VSwitch
    v-model:checked="isClickable"
    active-text="可点击状态"
  />

  <DemoBasic :clickable="isClickable" />
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const isClickable = ref(true);
</script>
