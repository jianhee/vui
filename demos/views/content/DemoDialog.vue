<!-- 弹窗 -->
<template>
  <DemoCard title="基本用法">
    <MxBtn @click="isVisible1 = true">打开弹窗</MxBtn>
  </DemoCard>
  <DemoCard title="自定义底栏+不显示关闭按钮">
    <MxBtn @click="isVisible2 = true">打开弹窗</MxBtn>
  </DemoCard>

  <MxDialog
    v-model:visible="isVisible1"
    title="标题"
    @close="writeLog('close')"
  >
    内容
  </MxDialog>

  <MxDialog
    v-model:visible="isVisible2"
    title="标题"
    :show-close="false"
    @close="writeLog('close')"
  >
    内容
    <template #footer>
      <MxBtn
        type="primary"
        @click="isVisible2 = false"
      >
        确定
      </MxBtn>
      <MxBtn @click="isVisible2 = false">取消</MxBtn>
    </template>
  </MxDialog>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';

const isVisible1 = ref(false);
const isVisible2 = ref(false);
</script>
