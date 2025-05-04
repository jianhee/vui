<template>
  <template
    v-for="type in iconTypes"
    :key="type.name"
  >
    <DemoRow>使用 {{ type.name }}</DemoRow>
    <DemoRow
      flex
      class="demo-icons"
    >
      <VIcon
        v-for="(prop, index) in basicProps"
        :key="index"
        v-bind="{ ...type.icon, ...prop }"
      />
    </DemoRow>
  </template>
</template>

<script setup>
import IconClose from '@icons/close.svg?component';

// 图标类型
const iconTypes = [
  { name: 'name', icon: { name: 'close' } },
  { name: 'component', icon: { component: IconClose } }
];

// 基础属性
const basicProps = [
  //
  {},
  { color: 'red' },
  { clickable: true },
  { disabled: true },
  { rotate: 45 },
  { spin: true }
];
</script>
