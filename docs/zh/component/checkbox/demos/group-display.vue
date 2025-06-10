<template>
  <VSwitch
    v-model:checked="isInline"
    inactive-text="块级模式"
    active-text="行内模式"
  />

  <DemoGroup :option-inline="isInline" />
</template>

<script setup>
import { ref } from 'vue';
import DemoGroup from './group.vue';

const isInline = ref(true);
</script>
