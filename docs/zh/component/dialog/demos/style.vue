<template>
  <DemoView>
    <template #content>
      <VButton @click="openDialog">打开弹窗</VButton>
    </template>

    <template #props>
      <DemoViewTop
        label="主体宽度"
        code="width"
      >
        <DemoValue
          v-model:value="widthRef"
          unit="%"
          :min="15"
        />
      </DemoViewTop>
    </template>
  </DemoView>

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
