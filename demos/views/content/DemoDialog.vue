<!-- 弹窗 -->
<template>
  <DemoCard title="基本用法">
    <template #desc>
      <ol>
        <li>
          <code>v-model:visible</code> 弹窗显示状态，当前为 <code>{{ isVisible1 }}</code>
        </li>
        <li><code>props.title</code> 弹窗标题，<code>slot.default</code> 弹窗内容</li>
        <li><code>@open</code> 和 <code>@close</code> 切换显示状态时触发</li>
      </ol>
    </template>
    <MxBtn @click="isVisible1 = true">打开弹窗</MxBtn>
  </DemoCard>
  <DemoCard title="更多用法">
    <template #desc>
      <ol>
        <li><code>props.width</code> 弹窗宽度</li>
        <li><code>props.showClose</code> 是否显示关闭按钮</li>
        <li><code>slot.footer</code> 自定义底栏</li>
      </ol>
    </template>
    <MxBtn @click="isVisible2 = true">打开弹窗</MxBtn>
  </DemoCard>

  <MxDialog
    v-model:visible="isVisible1"
    title="标题"
    @open="writeLog('open')"
    @close="writeLog('close')"
  >
    内容
  </MxDialog>

  <MxDialog
    v-model:visible="isVisible2"
    title="标题"
    width="800px"
    :show-close="false"
  >
    内容
    <template #footer>
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
