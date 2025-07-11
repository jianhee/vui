<template>
  <template
    v-for="btnSize in btnSizes"
    :key="btnSize.label"
  >
    <div>{{ btnSize.label }}</div>
    <DemoBasic :size="btnSize.value" />
  </template>
</template>

<script setup>
import DemoBasic from './basic.vue';

// 按钮尺寸
const btnSizes = [
  { label: 'Large', value: 'large' },
  { label: 'Medium（默认）', value: undefined },
  { label: 'Small', value: 'small' }
];
</script>
