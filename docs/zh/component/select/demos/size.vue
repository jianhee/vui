<template>
  <template
    v-for="selectSize in selectSizes"
    :key="selectSize.label"
  >
    <DemoSpace>{{ selectSize.label }}</DemoSpace>
    <DemoSpace>
      <VSelect
        v-model:value="selectValue"
        class="demo-select"
        placeholder="请选择"
        :options="selectOptions"
        :size="selectSize.value"
      />
    </DemoSpace>
  </template>
</template>

<script setup>
import { ref } from 'vue';

const selectSizes = [
  { label: 'medium（默认）', value: undefined },
  { label: 'small', value: 'small' }
];
const selectValue = ref(null);
const selectOptions = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' }
];
</script>
