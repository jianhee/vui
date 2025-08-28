<template>
  <DemoViewTop label="添加图标">
    <DemoBasic icon="face" />
  </DemoViewTop>
  <DemoViewTop label="添加图标和样式">
    <DemoBasic
      icon="face"
      :icon-props="{ color: 'pink' }"
    />
  </DemoViewTop>
</template>

<script setup>
import DemoBasic from './basic.vue';
</script>
