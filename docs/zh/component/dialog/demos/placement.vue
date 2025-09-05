<template>
  <DemoView>
    <template #content>
      <VButton @click="openDialog">打开弹窗</VButton>
    </template>

    <template #props>
      <DemoViewTop
        code="placement"
        label="出现位置"
      >
        <VRadioGroup
          v-model:value="placementRef"
          :options="placementOptions"
          option-type="button"
        />
      </DemoViewTop>
    </template>
  </DemoView>

  <!-- 弹窗 -->
  <component
    :is="componentName"
    v-model:visible="isVisible"
    title="标题"
    :placement="placementRef"
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

const { isVisible, componentName, openDialog, closeDialog } = useDialog();
const placementOptions = ['left', 'right'];
const placementRef = ref('left');
</script>
