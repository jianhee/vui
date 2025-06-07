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
    :show-close="isShowClose"
    :close-on-click-modal="isCloseOnClickModal"
  >
    内容
    <template #footer>
      <VBtn @click="closeModal">关闭</VBtn>
    </template>
  </component>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vitepress';

// 区分类型
const route = useRoute();
const isDialog = /dialog/.test(route.path);
const ModalComponent = isDialog ? 'VDialog' : 'VDrawer';

// 基础属性
const isVisible = ref(false);
const widthRef = ref(undefined);
const isShowClose = ref(true);
const isCloseOnClickModal = ref(true);

// 打开弹窗
function openModal() {
  isVisible.value = true;
}

// 关闭弹窗
function closeModal() {
  isVisible.value = false;
}
</script>
