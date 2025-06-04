<template>
  <DemoSpace>
    <VDropdown
      v-for="trigger in ['hover', 'click', 'contextmenu']"
      :key="trigger"
      :trigger="trigger"
      @open="writeLog('open')"
      @close="writeLog('close')"
    >
      <VBtn>{{ trigger }} 触发</VBtn>
      <template #content>
        <div class="demo-dropdown">内容</div>
      </template>
    </VDropdown>
  </DemoSpace>
</template>

<script setup>
import { writeLog } from '@utils';
</script>

<style>
.demo-dropdown {
  width: 200px;
  height: 200px;
  padding: 10px;
  font-size: 12px;
}
</style>
