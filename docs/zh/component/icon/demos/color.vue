<template>
  <DemoSpace>主要颜色</DemoSpace>
  <VRadioGroup
    v-model:value="colorRef"
    :options="colorOptions"
    option-type="button"
  />
  <DemoSpace>次要颜色</DemoSpace>
  <VRadioGroup
    v-model:value="twoToneColorRef"
    :options="colorOptions"
    option-type="button"
  />

  <DemoBasic
    :color="colorRef"
    :two-tone-color="twoToneColorRef"
  />
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const colorOptions = ['#333', 'rgb(126,211,33)', 'red'];
const colorRef = ref('#333');
const twoToneColorRef = ref(undefined);
</script>
