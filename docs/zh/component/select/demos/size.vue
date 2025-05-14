<template>
  <DemoRow flex>
    <VSelect
      v-for="size in ['medium', 'small']"
      :key="size"
      v-model:value="selectValue"
      :items="selectOptions"
      :size="size"
    />
  </DemoRow>
</template>

<script setup>
import { ref } from 'vue';

const selectValue = ref(null);
const selectOptions = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' }
];
</script>
