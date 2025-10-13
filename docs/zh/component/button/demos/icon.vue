<template>
  <DemoConfig
    label="添加图标"
    label-position="top"
  >
    <DemoBasic icon="face" />
  </DemoConfig>
  <DemoConfig
    label="添加图标和样式"
    label-position="top"
  >
    <DemoBasic
      icon="face"
      :icon-props="{ color: 'pink' }"
    />
  </DemoConfig>
</template>

<script setup>
import DemoBasic from './basic.vue';
</script>
