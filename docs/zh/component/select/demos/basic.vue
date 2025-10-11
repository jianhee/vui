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
  { value: '选项1的value', label: '选项1的label' },
  { value: '选项2的value' },
  // string|number
  ...Array.from({ length: 10 }, (_, i) => `选项${i + 3}`)
];
</script>

<style>
.demo-select,
.demo-selects .vui-select {
  max-width: var(--vp-demo-filed-width);
}
</style>
