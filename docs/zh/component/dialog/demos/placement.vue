<template>
  <DemoUsage>
    <template #render>
      <VButton @click="openDialog">打开弹窗</VButton>
    </template>

    <template #config>
      <DemoConfig
        code="placement"
        label="出现位置"
      >
        <DemoOptions
          v-model:value="placementRef"
          :options="placementOptions"
        />
      </DemoConfig>
    </template>
  </DemoUsage>

  <!-- 弹窗 -->
  <VComponentMatchRoute
    v-model:visible="isVisible"
    title="标题"
    :placement="placementRef"
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

const { isVisible, openDialog, closeDialog } = useDemoDialog();
const placementOptions = ['left', 'right'];
const placementRef = ref('left');
</script>
