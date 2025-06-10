<template>
  <VForm>
    <VFormItem label="切换宽度">
      <DemoValue
        v-model:value="widthRef"
        unit="%"
      />
    </VFormItem>
    <VFormItem label="操作">
      <VBtn @click="openDialog">打开</VBtn>
    </VFormItem>
  </VForm>

  <!-- 弹窗 -->
  <component
    :is="componentName"
    v-model:visible="isVisible"
    title="标题"
    :width="`${widthRef}%`"
  >
    内容
    <template #footer>
      <VBtn @click="closeDialog">关闭</VBtn>
    </template>
  </component>
</template>

<script setup>
import { ref } from 'vue';
import { useDialog } from '../composables';

// 区分类型
const { isDialog, isVisible, componentName, openDialog, closeDialog } = useDialog();
const defaultWidth = isDialog ? 50 : 30;

// 基础属性
const widthRef = ref(defaultWidth);
</script>
