<template>
  <DemoRow
    flex
    flex-center
  >
    <VBtn
      v-for="type in btnTypes"
      :key="type"
      :type="type"
    >
      {{ type || 'default' }}
    </VBtn>
  </DemoRow>
</template>

<script setup>
// 按钮类型
const btnTypes = [undefined, 'primary', 'link'];
</script>
