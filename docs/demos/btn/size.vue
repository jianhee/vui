<template>
  <DemoRow
    v-for="type in btnTypes"
    :key="type"
    flex
  >
    <VBtn
      v-for="size in btnSizes"
      :key="size"
      :type="type"
      :size="size"
    >
      {{ size }}
    </VBtn>
  </DemoRow>
</template>

<script setup>
// 按钮类型
const btnTypes = [undefined, 'primary'];

// 按钮尺寸
const btnSizes = ['small', 'medium', 'large'];
</script>
