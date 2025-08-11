<template>
  <DemoViewTop
    v-for="selectSize in selectSizes"
    :key="selectSize.label"
    :label="selectSize.label"
    :code="selectSize.value"
  >
    <VSelect
      v-model:value="selectValue"
      class="demo-select"
      placeholder="请选择"
      :options="selectOptions"
      :size="selectSize.value"
    />
  </DemoViewTop>
</template>

<script setup>
import { ref } from 'vue';

const selectSizes = [
  { label: '大号', value: 'large' },
  { label: '中号（默认）', value: 'medium' },
  { label: '小号', value: 'small' }
];
const selectValue = ref(null);
const selectOptions = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' }
];
</script>
