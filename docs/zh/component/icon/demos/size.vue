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
        v-for="size in sizeItems"
        :key="size"
        v-bind="{ ...type.icon, size }"
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

// 图标大小
const sizeItems = [undefined, '28', '32', '36'];
</script>
