<template>
  <DemoUsage
    class="c-demo-selects"
    render-gap
  >
    <template #render>
      <VSelect
        v-model:value="selectValue"
        placeholder="禁用状态"
        :options="selectOptions"
        :disabled="isDisabled"
      />
      <VSelect
        v-model:value="selectValue"
        placeholder="只读状态"
        :options="selectOptions"
        :readonly="isReadonly"
      />
    </template>

    <template #config>
      <DemoConfig
        label="是否禁用状态"
        code="disabled"
      >
        <VSwitch v-model:checked="isDisabled" />
      </DemoConfig>
      <DemoConfig
        label="是否只读状态"
        code="readonly"
      >
        <VSwitch v-model:checked="isReadonly" />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';

const selectValue = ref(null);
const selectOptions = [
  { value: 1, label: '选项1' },
  { value: 2, label: '选项2' },
  { value: 3, label: '选项3' }
];

const isDisabled = ref(true);
const isReadonly = ref(true);
</script>
