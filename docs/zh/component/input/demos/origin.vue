<template>
  <DemoRow>
    <VInput
      v-model:value="inputValue1"
      placeholder="请输入内容"
    />
  </DemoRow>
  <DemoRow>
    <VInput
      v-model:value="inputValue2"
      placeholder="禁用状态"
      disabled
    />
  </DemoRow>
  <DemoRow>
    <VInput
      v-model:value="inputValue3"
      placeholder="限制输入长度"
      maxlength="5"
    />
  </DemoRow>
</template>

<script setup>
import { ref } from 'vue';

const inputValue1 = ref('');
const inputValue2 = ref('');
const inputValue3 = ref('');
</script>
