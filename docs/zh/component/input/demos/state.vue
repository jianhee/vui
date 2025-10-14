<template>
  <DemoUsage class="c-demo-inputs">
    <template #render>
      <VInput
        v-model:value="inputValue"
        placeholder="禁用状态"
        :disabled="isDisabled"
      />
      <VInput
        v-model:value="inputValue"
        placeholder="只读状态"
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

const inputValue = ref(null);
const isDisabled = ref(true);
const isReadonly = ref(true);
</script>
