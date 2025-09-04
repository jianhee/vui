<template>
  <DemoViewLeft
    label="是否禁用"
    code="disabled"
    label-width="160"
  >
    <VSelect
      v-model:value="selectValue"
      class="demo-select"
      placeholder="禁用状态"
      :options="selectOptions"
      disabled
    />
  </DemoViewLeft>
  <DemoViewLeft
    label="是否只读"
    code="readonly"
    label-width="160"
  >
    <VSelect
      v-model:value="selectValue"
      class="demo-select"
      placeholder="只读状态"
      :options="selectOptions"
      readonly
    />
  </DemoViewLeft>
  <DemoViewLeft
    label="占位文字"
    code="placeholder"
    label-width="160"
  >
    <VSelect
      v-model:value="selectValue"
      class="demo-select"
      placeholder="请选择"
      :options="selectOptions"
    />
  </DemoViewLeft>
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
