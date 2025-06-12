<template>
  <DemoSpace
    v-for="tag in tagTypes"
    :key="tag"
  >
    <VRow :tag="tag">{{ tag || 'div（默认）' }}</VRow>
  </DemoSpace>
</template>

<script setup>
// 标签类型
const tagTypes = [undefined, 'span', 'a', 'b', 'i'];
</script>
