<template>
  <DemoRow>
    <VBtn
      v-for="btnType in btnTypes"
      :key="btnType.label"
      :type="btnType.prop"
      v-bind="$attrs"
    >
      {{ btnType.label }}
    </VBtn>
  </DemoRow>
</template>

<script setup>
// 按钮类型
const btnTypes = [
  { label: 'Primary Btn', prop: 'primary' },
  { label: 'Default Btn', prop: undefined },
  { label: 'Link Btn', prop: 'link' }
];
</script>
