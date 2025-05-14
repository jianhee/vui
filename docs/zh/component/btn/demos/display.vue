<template>
  <VBtn
    v-for="type in btnTypes"
    :key="type"
    :type="type"
    display="block"
    class="vui-mb-10"
  >
    {{ type || 'default' }}
  </VBtn>
</template>

<script setup>
// 按钮类型
const btnTypes = [undefined, 'primary'];
</script>
