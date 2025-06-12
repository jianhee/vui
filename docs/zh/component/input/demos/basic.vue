<template>
  <VInput
    v-model:value="inputValue"
    placeholder="请输入内容"
    @input="writeLog('input', $event)"
    @change="writeLog('change', $event)"
    @enter="writeLog('enter', $event)"
    @clear="writeLog('clear', $event)"
  />

  <DemoSpace>
    绑定值 <code>v-model:value</code> 的值为 <code>{{ inputValue }}</code>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@vp/utils';

const inputValue = ref(null);
</script>
