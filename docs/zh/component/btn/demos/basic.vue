<template>
  <DemoSpace>
    <VBtn
      v-for="btnType in btnTypes"
      :key="btnType.label"
      :type="btnType.value"
      v-bind="$attrs"
    >
      {{ btnType.label }}
    </VBtn>
  </DemoSpace>
</template>

<script setup>
defineOptions({ inheritAttrs: false });

// 按钮类型
const btnTypes = [
  { label: 'Primary Btn', value: 'primary' },
  { label: 'Default Btn', value: undefined },
  { label: 'Link Btn', value: 'link' }
];
</script>
