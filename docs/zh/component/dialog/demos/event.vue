<template>
  <VButton @click="openDialog">打开弹窗</VButton>

  <VComponentMatchRoute
    v-model:visible="isVisible"
    title="标题"
    @open="writeLog('open')"
    @opened="writeLog('opened')"
    @close="writeLog('close')"
    @closed="writeLog('closed')"
  >
    内容
    <template #footer>
      <VButton @click="closeDialog">关闭</VButton>
    </template>
  </VComponentMatchRoute>
</template>

<script setup>
import { writeLog } from '@vp/utils';
import { useDemoDialog } from '../composables';

const { isVisible, openDialog, closeDialog } = useDemoDialog();
</script>
