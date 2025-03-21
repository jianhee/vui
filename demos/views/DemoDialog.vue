<!-- 弹窗 -->
<template>
  <DemoCard title="基本用法">
    <MxBtn @click="dialogVisible = true">打开弹窗</MxBtn>
  </DemoCard>

  <MxDialog
    v-model:visible="dialogVisible"
    title="标题"
    @close="showLog('close')"
  >
    内容
  </MxDialog>
</template>

<script setup>
import { ref } from 'vue';

const dialogVisible = ref(false);

function showLog(action) {
  console.log(action);
}
</script>
