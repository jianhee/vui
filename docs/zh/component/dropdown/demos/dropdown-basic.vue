<template>
  <VDropdown
    class="demo-dropdown"
    @open="writeLog('open')"
    @close="writeLog('close')"
  >
    <VBtn>hover</VBtn>
    <template #dropdown>下拉框</template>
  </VDropdown>
</template>

<script setup>
import { writeLog } from '@vp/utils';
</script>

<style>
.demo-dropdown {
  width: 200px;
  height: 200px;
  padding: 10px;
  font-size: 12px;
}
</style>
