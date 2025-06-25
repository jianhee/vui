<template>
  <VSelect
    v-model:value="selectValue"
    class="demo-select"
    :options="selectOptions"
    @change="writeLog('change', $event)"
  />

  <DemoSpace>
    当前值为 <code>{{ selectValue }}</code>
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
  // string|number
  3
];
</script>

<style>
.demo-select {
  max-width: 240px;
}
</style>
