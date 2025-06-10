<template>
  <VSwitch
    v-model:checked="isBtn"
    active-text="按钮类型"
  />

  <DemoGroup :option-type="type" />
</template>

<script setup>
import { ref, computed } from 'vue';
import DemoGroup from './group.vue';

const isBtn = ref(true);
const type = computed(() => (isBtn.value ? 'button' : undefined));
</script>
