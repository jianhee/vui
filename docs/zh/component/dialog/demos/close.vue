<template>
  <VForm>
    <VFormItem label="切换状态">
      <VSwitch
        v-model:checked="isShowClose"
        active-text="显示关闭按钮"
      />
      <br />
      <VSwitch
        v-model:checked="isCloseOnClickModal"
        active-text="点击遮罩时关闭"
      />
    </VFormItem>
    <VFormItem label="操作">
      <VButton @click="openDialog">打开</VButton>
    </VFormItem>
  </VForm>

  <!-- 弹窗 -->
  <component
    :is="componentName"
    v-model:visible="isVisible"
    title="标题"
    :show-close="isShowClose"
    :close-on-click-modal="isCloseOnClickModal"
  >
    内容
    <template #footer>
      <VButton @click="closeDialog">关闭</VButton>
    </template>
  </component>
</template>

<script setup>
import { ref } from 'vue';
import { useDialog } from '../composables';

// 区分类型
const { isVisible, componentName, openDialog, closeDialog } = useDialog();

// 基础属性
const isShowClose = ref(true);
const isCloseOnClickModal = ref(true);
</script>
