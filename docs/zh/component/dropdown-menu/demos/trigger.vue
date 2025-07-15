<template>
  <DemoSpace flex>
    <VDropdownMenu
      v-for="trigger in triggers"
      :key="trigger.label"
      :trigger="trigger.label"
      :items="items"
      @open="writeLog('open')"
      @close="writeLog('close')"
    >
      <VButton>{{ trigger.label }} 触发{{ trigger.tip }}</VButton>
    </VDropdownMenu>
  </DemoSpace>
</template>

<script setup>
import { items } from '../composables';
import { writeLog } from '@vp/utils';

const triggers = [{ label: 'hover', tip: '（默认）' }, { label: 'click' }, { label: 'contextmenu' }];
</script>
