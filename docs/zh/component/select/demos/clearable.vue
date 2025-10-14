<template>
  <VSelect
    v-model:value="selectValue"
    class="c-demo-select"
    placeholder="请选择"
    :options="selectOptions"
    clearable
    @clear="writeLog('clear', $event)"
  />
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@vp/utils';

const selectValue = ref(null);
const selectOptions = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' }
];
</script>
