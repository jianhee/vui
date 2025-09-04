<template>
  <DemoView
    class="demo-selects"
    content-gap
  >
    <template #content>
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

    <template #props>
      <DemoViewLeft
        label="是否禁用状态"
        code="disabled"
      >
        <VSwitch v-model:checked="isDisabled" />
      </DemoViewLeft>
      <DemoViewLeft
        label="是否只读状态"
        code="readonly"
      >
        <VSwitch v-model:checked="isReadonly" />
      </DemoViewLeft>
    </template>
  </DemoView>
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
