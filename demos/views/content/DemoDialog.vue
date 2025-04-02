<!-- 弹窗 -->
<template>
  <DemoCard title="基本用法">
    <MxBtn @click="isVisible = true">打开弹窗</MxBtn>
  </DemoCard>

  <MxDialog
    v-model:visible="isVisible"
    title="标题"
    @close="writeLog('close')"
  >
    内容
  </MxDialog>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';

const isVisible = ref(false);
</script>
