<template>
  <template
    v-for="iconType in iconTypes"
    :key="iconType.label"
  >
    <DemoRow>{{ iconType.label }}</DemoRow>
    <BtnBasic :icon="iconType.prop" />
  </template>
</template>

<script setup>
import BtnBasic from './basic.vue';
import IconClose from '@icons/close.svg?component';

// 图标类型
const iconTypes = [
  { label: '传入 name', prop: 'close' },
  { label: '传入 component', prop: IconClose },
  { label: '传入 { name }', prop: { name: 'close' } },
  { label: '传入 { component }', prop: { component: IconClose } }
];
</script>
