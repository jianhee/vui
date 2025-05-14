<template>
  <VRadioGroup
    v-model:value="direction"
    :items="directionItems"
    type="btn"
  />
  <DemoFormBasic
    :direction="direction"
    class="vui-mt-10"
  />
</template>

<script setup>
import { ref } from 'vue';
import DemoFormBasic from './basic.vue';

const direction = ref('horizontal');
const directionItems = ['vertical', 'horizontal'];
</script>
