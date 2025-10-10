<template>
  <VPopover
    content="弹出框内容"
    @open="writeLog('open')"
    @opened="writeLog('opened')"
    @close="writeLog('close')"
    @closed="writeLog('closed')"
  >
    <VButton>hover 触发元素</VButton>
  </VPopover>
</template>

<script setup>
import { writeLog } from '@vp/utils';
</script>
