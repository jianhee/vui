<template>
  <VSwitch
    v-model:checked="isDisabled"
    active-text="禁用状态"
  />

  <DemoBasic :disabled="isDisabled" />
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const isDisabled = ref(true);
</script>
