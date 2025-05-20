<template>
  <DemoRow
    v-for="btnType in ['default', 'primary']"
    :key="btnType"
    flex
  >
    <VBtn
      v-for="iconType in iconTypes"
      :key="iconType.label"
      :type="btnType"
      :icon="iconType.icon"
    >
      {{ iconType.label }}
    </VBtn>
  </DemoRow>
</template>

<script setup>
import IconClose from '@icons/close.svg?component';

// 图标类型
const iconTypes = [
  { label: '传入 name', icon: 'close' },
  { label: '传入 component', icon: IconClose },
  { label: '传入 { name }', icon: { name: 'close' } },
  { label: '传入 { component }', icon: { component: IconClose } }
];
</script>
