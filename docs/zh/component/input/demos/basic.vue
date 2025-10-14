<template>
  <VInput
    v-model:value="inputValue"
    class="c-demo-input"
    placeholder="请输入内容"
    @input="writeLog('input', $event)"
    @change="writeLog('change', $event)"
    @enter="writeLog('enter', $event)"
  />

  <DemoSpace>
    当前值为 <code>{{ inputValue }}</code>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@vp/utils';

const inputValue = ref(null);
</script>

<style>
.c-demo-input,
.c-demo-inputs .vui-input {
  max-width: var(--demo-filed-width);
}
.vui-input + .vui-input {
  margin-top: var(--demo-filed-gap);
}
</style>
