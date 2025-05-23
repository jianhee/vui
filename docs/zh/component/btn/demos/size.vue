<template>
  <template
    v-for="btnSize in btnSizes"
    :key="btnSize.label"
  >
    <DemoRow>{{ btnSize.label }}</DemoRow>
    <BtnBasic :size="btnSize.prop" />
  </template>
</template>

<script setup>
import BtnBasic from './basic.vue';

// 按钮尺寸
const btnSizes = [
  { label: 'Large', prop: 'large' },
  { label: 'Default', prop: undefined },
  { label: 'Small', prop: 'small' }
];
</script>
