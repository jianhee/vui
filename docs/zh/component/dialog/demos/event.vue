<template>
  <VButton @click="openDialog">打开弹窗</VButton>

  <component
    :is="componentName"
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
  </component>
</template>

<script setup>
import { writeLog } from '@vp/utils';
import { useDialog } from '../composables';

const { isVisible, componentName, openDialog, closeDialog } = useDialog();
</script>
