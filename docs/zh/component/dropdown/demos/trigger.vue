<template>
  <DemoSpace flex>
    <VDropdown
      v-for="trigger in triggers"
      :key="trigger.label"
      :trigger="trigger.label"
      class="demo-dropdown"
      @open="writeLog('open')"
      @close="writeLog('close')"
    >
      <VButton>{{ trigger.label }} 触发{{ trigger.tip }}</VButton>
      <template #dropdown>下拉框</template>
    </VDropdown>
  </DemoSpace>
</template>

<script setup>
import { writeLog } from '@vp/utils';

const triggers = [{ label: 'hover', tip: '（默认）' }, { label: 'click' }, { label: 'contextmenu' }];
</script>
