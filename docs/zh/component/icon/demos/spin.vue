<template>
  <VSwitch
    v-model:checked="isSpin"
    active-text="旋转动画"
  />
  <DemoBasic :spin="isSpin" />
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const isSpin = ref(true);
</script>
