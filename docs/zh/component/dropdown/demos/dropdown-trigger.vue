<template>
  <DemoSpace flex>
    <VDropdown
      v-for="trigger in triggers"
      :key="trigger"
      :trigger="trigger"
      class="demo-dropdown"
      @open="writeLog('open')"
      @close="writeLog('close')"
    >
      <VButton>{{ trigger }} 触发</VButton>
      <template #dropdown>下拉框</template>
    </VDropdown>
  </DemoSpace>
</template>

<script setup>
import { writeLog } from '@vp/utils';
const triggers = ['hover', 'click', 'contextmenu'];
</script>
