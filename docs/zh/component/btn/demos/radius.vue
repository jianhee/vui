<template>
  <template
    v-for="btnRadius in btnRadiuses"
    :key="btnRadius.label"
  >
    <DemoRow>{{ btnRadius.label }}</DemoRow>
    <BtnBasic :radius="btnRadius.prop" />
  </template>
</template>

<script setup>
import BtnBasic from './basic.vue';

// 圆角尺寸
const btnRadiuses = [
  { label: '0px', prop: '0px' },
  { label: '4px（默认）', prop: undefined },
  { label: '10px', prop: '10px' },
  { label: '20px', prop: '20px' }
];
</script>
