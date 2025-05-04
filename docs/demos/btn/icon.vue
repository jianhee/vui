<template>
  <DemoRow
    v-for="type1 in btnTypes"
    :key="type1"
    flex
  >
    <VBtn
      v-for="type2 in iconTypes"
      :key="type2.label"
      :type="type1"
      :icon="type2.icon"
    >
      {{ type2.label }}
    </VBtn>
  </DemoRow>
</template>

<script setup>
import IconClose from '@icons/close.svg?component';

// 按钮类型
const btnTypes = [undefined, 'primary'];

// 图标类型
const iconTypes = [
  { label: '传入 name', icon: 'close' },
  { label: '传入 component', icon: IconClose },
  { label: '传入 { name }', icon: { name: 'close' } },
  { label: '传入 { component }', icon: { component: IconClose } }
];
</script>
