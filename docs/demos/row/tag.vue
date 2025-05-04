<template>
  <DemoRow
    v-for="tag in tagTypes"
    :key="tag"
  >
    <VRow :tag="tag">{{ tag || 'default' }}</VRow>
  </DemoRow>
</template>

<script setup>
// 标签类型
const tagTypes = [undefined, 'span', 'a', 'b', 'i'];
</script>
