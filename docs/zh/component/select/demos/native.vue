<template>
  <VForm>
    <VFormItem label="disabled">
      <VSelect
        v-model:value="selectValue"
        class="demo-select"
        :options="selectOptions"
        disabled
      />
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';

const selectValue = ref(1);
const selectOptions = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' }
];
</script>
