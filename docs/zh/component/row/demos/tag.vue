<template>
  <DemoSpace
    v-for="tag in tagTypes"
    :key="tag.value"
  >
    <VRow :tag="tag.value">这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字</VRow>
  </DemoSpace>
</template>

<script setup>
const tagTypes = [
  { value: 'div', label: 'div（默认）' },
  { value: 'span', label: 'span' },
  { value: 'a', label: 'a' },
  { value: 'b', label: 'b' },
  { value: 'i', label: 'i' },
  { value: 'u', label: 'u' }
];
</script>
