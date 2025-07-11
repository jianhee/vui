<template>
  <DemoDesc :items="['width']" />
  <VForm>
    <VFormItem label="主体宽度">
      <DemoValue
        v-model:value="widthRef"
        unit="%"
        :min="15"
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
    :width="`${widthRef}%`"
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
const { isDialog, isVisible, componentName, openDialog, closeDialog } = useDialog();
const defaultWidth = isDialog ? 50 : 30;

// 基础属性
const widthRef = ref(defaultWidth);
</script>
