<template>
  <VSwitch
    v-model:checked="isBtn"
    active-text="按钮类型"
  />

  <DemoOption :type="type" />
</template>

<script setup>
import { ref, computed } from 'vue';
import DemoOption from './option.vue';

const isBtn = ref(true);
const type = computed(() => (isBtn.value ? 'button' : undefined));
</script>
