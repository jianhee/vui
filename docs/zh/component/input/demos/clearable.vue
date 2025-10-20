<template>
  <DemoUsage class="c-demo-inputs">
    <template #render>
      <VInput
        v-model:value="inputValue"
        class="c-demo-input"
        placeholder="请输入内容"
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

const inputValue = ref(null);
const isDisabled = ref(false);
const isReadonly = ref(false);
</script>
