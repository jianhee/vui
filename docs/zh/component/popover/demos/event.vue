<template>
  <VComponentMatchRoute
    v-bind="props"
    @open="writeLog('open')"
    @opened="writeLog('opened')"
    @close="writeLog('close')"
    @closed="writeLog('closed')"
  >
    <VButton>hover 触发元素</VButton>
  </VComponentMatchRoute>
</template>

<script setup>
import { writeLog } from '@vp/utils';
import { useDemo } from '../composables';

const { props } = useDemo();
</script>
