<template>
  <VInput
    v-model:value="inputValue"
    class="demo-input"
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
.demo-input {
  max-width: var(--demo-filed-width);
}
.demo-input + .demo-input {
  margin-top: 10px;
}
</style>
