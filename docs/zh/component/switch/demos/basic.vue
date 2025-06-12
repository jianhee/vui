<template>
  <DemoSpace>
    <VSwitch
      v-model:checked="valueRef"
      @change="writeLog('change', $event)"
    />
  </DemoSpace>

  <DemoSpace>
    绑定值 <code>v-model:checked</code> 的值为 <code>{{ valueRef }}</code>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@vp/utils';

const valueRef = ref(false);
</script>
