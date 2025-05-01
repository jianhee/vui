<template>
  <VInput
    v-model:value="inputValue"
    @input="writeLog('input', $event)"
    @change="writeLog('change', $event)"
    @enter="writeLog('enter', $event)"
    @clear="writeLog('clear')"
  />
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@theme/utils';

const inputValue = ref(null);
</script>
