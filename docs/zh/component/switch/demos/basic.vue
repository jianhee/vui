<template>
  <VSwitch
    v-model:checked="checkedRef"
    @change="writeLog('change', $event)"
  />

  <DemoSpace>
    当前值为 <code>{{ checkedRef }}</code>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@vp/utils';

const checkedRef = ref(false);
</script>
