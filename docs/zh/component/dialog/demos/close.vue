<template>
  <DemoUsage>
    <template #render>
      <VButton @click="openDialog">打开弹窗</VButton>
    </template>

    <template #config>
      <DemoConfig
        code="showClose"
        label="是否显示关闭按钮"
      >
        <VSwitch v-model:checked="isShowClose" />
      </DemoConfig>
      <DemoConfig
        code="closeOnClickModal"
        label="是否在点击遮罩时关闭"
      >
        <VSwitch v-model:checked="isCloseOnClickModal" />
      </DemoConfig>
    </template>
  </DemoUsage>

  <!-- 弹窗 -->
  <VComponentMatchRoute
    v-model:visible="isVisible"
    title="标题"
    :show-close="isShowClose"
    :close-on-click-modal="isCloseOnClickModal"
  >
    内容
    <template #footer>
      <VButton @click="closeDialog">关闭</VButton>
    </template>
  </VComponentMatchRoute>
</template>

<script setup>
import { ref } from 'vue';
import { useDemoDialog } from '../composables';

// 区分类型
const { isVisible, openDialog, closeDialog } = useDemoDialog();

// 基础属性
const isShowClose = ref(false);
const isCloseOnClickModal = ref(false);
</script>
