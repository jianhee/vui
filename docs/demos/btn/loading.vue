<template>
  <DemoRow flex>
    <VBtn
      v-for="type in btnTypes"
      :key="type"
      :type="type"
      loading
    >
      {{ type || 'default' }}
    </VBtn>
  </DemoRow>
</template>

<script setup>
// 按钮类型
const btnTypes = [undefined, 'primary'];
</script>
