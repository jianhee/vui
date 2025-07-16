<template>
  <DemoDesc :items="['disabled', 'placeholder']" />
  <VForm>
    <VFormItem label="禁用状态">
      <VSelect
        v-model:value="selectValue"
        class="demo-select"
        placeholder="禁用状态"
        :options="selectOptions"
        disabled
      />
    </VFormItem>
    <VFormItem label="占位文字">
      <VSelect
        v-model:value="selectValue"
        class="demo-select"
        placeholder="请选择"
        :options="selectOptions"
      />
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';

const selectValue = ref(null);
const selectOptions = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' }
];
</script>
