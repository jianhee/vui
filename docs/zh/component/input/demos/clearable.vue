<template>
  <VInput
    v-model:value="inputValue"
    class="demo-input"
    placeholder="请输入内容"
    clearable
    @clear="writeLog('clear', $event)"
  />
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@vp/utils';

const inputValue = ref(null);
</script>
