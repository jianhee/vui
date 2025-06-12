<template>
  <VSelect
    v-model:value="selectValue"
    :options="selectOptions"
    @change="writeLog('change', $event)"
  />

  <DemoSpace>
    绑定值 <code>v-model:value</code> 的值为 <code>{{ selectValue }}</code>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@vp/utils';

const selectValue = ref(null);
const selectOptions = [
  // Object
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  // Number|String
  3
];
</script>
