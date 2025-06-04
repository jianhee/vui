<template>
  <VBtn @click="openModal">打开</VBtn>

  <component
    :is="ModalComponent"
    v-model:visible="isVisible"
    title="标题"
    @open="writeLog('open')"
    @close="writeLog('close')"
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
import { writeLog } from '@utils';

// 区分类型
const route = useRoute();
const isDialog = /dialog/.test(route.path);
const ModalComponent = isDialog ? 'VDialog' : 'VDrawer';

// 基础属性
const isVisible = ref(false);

// 打开弹窗
function openModal() {
  isVisible.value = true;
}

// 关闭弹窗
function closeModal() {
  isVisible.value = false;
}
</script>
