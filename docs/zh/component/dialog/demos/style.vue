<template>
  <DemoUsage>
    <template #render>
      <VButton @click="openDialog">打开弹窗</VButton>
    </template>

    <template #config>
      <DemoConfig
        label="主体宽度"
        code="width"
      >
        <DemoSlider
          v-model:value="widthRef"
          unit="%"
          :min="15"
        />
      </DemoConfig>
    </template>
  </DemoUsage>

  <!-- 弹窗 -->
  <VComponentMatchRoute
    v-model:visible="isVisible"
    title="标题"
    :width="`${widthRef}%`"
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
const { isDialog, isVisible, openDialog, closeDialog } = useDemoDialog();
const defaultWidth = isDialog ? 50 : 30;

// 基础属性
const widthRef = ref(defaultWidth);
</script>
