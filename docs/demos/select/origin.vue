<template>
  <VSelect
    v-model:value="selectValue"
    :items="selectOptions"
    disabled
  />
</template>

<script setup>
import { ref } from 'vue';

const selectValue = ref(null);
const selectOptions = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' }
];
</script>
