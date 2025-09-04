<template>
  <DemoViewLeft
    label="禁用状态"
    code="disabled"
  >
    <VSwitch
      v-model:checked="checkedRef"
      disabled
    />
  </DemoViewLeft>
  <DemoViewLeft
    label="只读状态"
    code="readonly"
  >
    <VSwitch
      v-model:checked="checkedRef"
      readonly
    />
  </DemoViewLeft>
</template>

<script setup>
import { ref } from 'vue';

const checkedRef = ref(true);
</script>
