<template>
  <DemoView class="demo-inputs">
    <template #content>
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

    <template #props>
      <DemoViewBoolean
        label="是否禁用状态"
        code="disabled"
      >
        <VSwitch v-model:checked="isDisabled" />
      </DemoViewBoolean>
      <DemoViewBoolean
        label="是否只读状态"
        code="readonly"
      >
        <VSwitch v-model:checked="isReadonly" />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
const isDisabled = ref(true);
const isReadonly = ref(true);
</script>
