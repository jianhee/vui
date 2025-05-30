<template>
  <VRadioGroup
    v-model:value="displayVal"
    :options="['inline', 'block']"
    option-type="button"
  />

  <DemoBasic :block="isBlock" />
</template>

<script setup>
import { ref, computed } from 'vue';
import DemoBasic from './basic.vue';

const displayVal = ref(undefined);
const isBlock = computed(() => displayVal.value === 'block');
</script>
