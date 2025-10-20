<template>
  <DemoUsage class="c-demo-inputs">
    <template #render>
      <VSelect
        v-model:value="selectValue"
        class="c-demo-select"
        placeholder="请选择"
        :options="selectOptions"
        clearable
        :disabled="isDisabled"
        :readonly="isReadonly"
        @clear="writeLog('clear', $event)"
      />
    </template>

    <template #config>
      <DemoConfig label="是否禁用状态">
        <VSwitch v-model:checked="isDisabled" />
      </DemoConfig>
      <DemoConfig label="是否只读状态">
        <VSwitch v-model:checked="isReadonly" />
      </DemoConfig>
    </template>
  </DemoUsage>
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

const isDisabled = ref(false);
const isReadonly = ref(false);
</script>
