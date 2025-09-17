<template>
  <VDropdown
    class="demo-dropdown"
    @open="writeLog('open')"
    @opened="writeLog('opened')"
    @close="writeLog('close')"
    @closed="writeLog('closed')"
  >
    <VButton>hover</VButton>
    <template #dropdown>下拉框</template>
  </VDropdown>
</template>

<script setup>
import { writeLog } from '@vp/utils';
</script>
