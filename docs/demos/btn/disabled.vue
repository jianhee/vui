<template>
  <DemoRow
    flex
    flex-center
  >
    <VBtn
      v-for="type in btnTypes"
      :key="type"
      :type="type"
      disabled
    >
      {{ type || 'default' }}
    </VBtn>
  </DemoRow>
</template>

<script setup>
// 按钮类型
const btnTypes = [undefined, 'primary', 'link'];
</script>
