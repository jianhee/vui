<template>
  <VForm>
    <VFormItem label="切换宽度">
      <DemoValue
        v-model:value="widthRef"
        unit="%"
      />
    </VFormItem>
    <VFormItem label="操作">
      <VBtn @click="openModal">打开弹窗</VBtn>
    </VFormItem>
  </VForm>

  <!-- 弹窗 -->
  <component
    :is="ModalComponent"
    v-model:visible="isVisible"
    title="标题"
    :width="`${widthRef}%`"
  >
    内容
    <template #footer>
      <VBtn @click="closeModal">关闭</VBtn>
    </template>
  </component>
</template>

<script setup>
import { ref } from 'vue';
import { useModal } from '../composables';

// 区分类型
const { isDialog, ModalComponent, isVisible, openModal, closeModal } = useModal();
const defaultWidth = isDialog ? 50 : 30;

// 基础属性
const widthRef = ref(defaultWidth);
</script>
