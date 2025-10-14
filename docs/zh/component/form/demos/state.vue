<template>
  <DemoUsage>
    <template #render>
      <DemoBasic :form-props="formProps" />
    </template>

    <template #config>
      <DemoConfig
        label="是否禁用状态"
        code="disabled"
      >
        <VSwitch v-model:checked="formProps.disabled" />
      </DemoConfig>
      <DemoConfig
        label="是否只读状态"
        code="readonly"
      >
        <VSwitch v-model:checked="formProps.readonly" />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const formProps = ref({
  disabled: true,
  readonly: true
});
</script>
