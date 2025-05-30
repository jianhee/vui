<template>
  <template
    v-for="radiusSize in radiusSizes"
    :key="radiusSize.label"
  >
    <DemoSpace>{{ radiusSize.label }}</DemoSpace>
    <DemoBasic :radius="radiusSize.value" />
  </template>
</template>

<script setup>
import DemoBasic from './basic.vue';

// 圆角尺寸
const radiusSizes = [
  { label: '0px', value: '0px' },
  { label: '4px（默认）', value: undefined },
  { label: '10px', value: '10px' },
  { label: '20px', value: '20px' }
];
</script>
