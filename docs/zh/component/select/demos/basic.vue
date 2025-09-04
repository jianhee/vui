<template>
  <VSelect
    v-model:value="selectValue"
    class="demo-select"
    placeholder="请选择"
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
.demo-select,
.demo-selects .vui-select {
  max-width: var(--demo-filed-width);
}
</style>
