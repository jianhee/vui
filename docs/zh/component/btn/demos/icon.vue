<template>
  <template
    v-for="iconType in iconTypes"
    :key="iconType.label"
  >
    <DemoSpace>
      <code>{{ iconType.label }}</code>
    </DemoSpace>
    <DemoBasic :icon="iconType.value" />
  </template>
</template>

<script setup>
import DemoBasic from './basic.vue';
import IconClose from '@icons/close.svg?component';

// 图标类型
const iconTypes = [
  { label: ':icon="name"', value: 'close' },
  { label: ':icon="component"', value: IconClose },
  { label: ':icon="{ name: "xxx" }"', value: { name: 'close' } },
  { label: ':icon="{ component: xxx }"', value: { component: IconClose } }
];
</script>
