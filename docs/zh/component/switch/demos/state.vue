<template>
  <DemoView content-gap>
    <template #content>
      <VSwitch
        v-model:checked="checkedRef"
        :disabled="isDisabled"
      />
      <VSwitch
        v-model:checked="checkedRef"
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

const checkedRef = ref(true);
const isDisabled = ref(true);
const isReadonly = ref(true);
</script>
