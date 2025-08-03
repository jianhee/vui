<template>
  <DemoViewTop
    v-for="btnSize in btnSizes"
    :key="btnSize.label"
    :code="btnSize.value"
    :label="btnSize.label"
  >
    <DemoBasic :size="btnSize.value" />
  </DemoViewTop>
</template>

<script setup>
import DemoBasic from './basic.vue';

// 按钮尺寸
const btnSizes = [
  { label: '大号', value: 'large' },
  { label: '中号（默认）', value: 'medium' },
  { label: '小号', value: 'small' }
];
</script>
