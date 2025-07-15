<template>
  <VDropdown
    class="demo-dropdown"
    @open="writeLog('open')"
    @close="writeLog('close')"
  >
    <VButton>hover</VButton>
    <template #dropdown>下拉框</template>
  </VDropdown>
</template>

<script setup>
import { writeLog } from '@vp/utils';
</script>

<style>
.demo-dropdown {
  width: 240px;
  height: 240px;
  padding: 10px;
}
</style>
