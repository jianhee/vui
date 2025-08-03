<template>
  <DemoView>
    <template #content>
      <VButton @click="openDialog">打开弹窗</VButton>
    </template>

    <template #props>
      <DemoViewBoolean
        code="showClose"
        label="是否显示关闭按钮"
      >
        <VSwitch v-model:checked="isShowClose" />
      </DemoViewBoolean>
      <DemoViewBoolean
        code="closeOnClickModal"
        label="是否在点击遮罩时关闭"
      >
        <VSwitch v-model:checked="isCloseOnClickModal" />
      </DemoViewBoolean>
    </template>
  </DemoView>

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
