<template>
  <VForm>
    <VFormItem label="组成部分">
      <VSwitch
        v-model:checked="isShowTitle"
        active-text="显示标题"
      />
      <br />
      <VSwitch
        v-model:checked="isShowContent"
        active-text="显示内容"
      />
      <br />
      <VSwitch
        v-model:checked="isShowFooter"
        active-text="显示底栏"
      />
    </VFormItem>
    <VFormItem
      v-if="!isDialog"
      label="出现位置"
    >
      <VRadioGroup
        v-model:value="placementRef"
        :options="placementOptions"
        option-type="button"
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
    :title="isShowTitle ? '标题' : undefined"
    :placement="placementRef"
    @open="writeLog('open')"
    @close="writeLog('close')"
  >
    <template v-if="isShowContent">内容</template>
    <template
      v-if="isShowFooter"
      #footer
    >
      <VBtn @click="closeModal">关闭</VBtn>
    </template>
  </component>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vitepress';
import { writeLog } from '@vp/utils';

// 区分类型
const route = useRoute();
const isDialog = /dialog/.test(route.path);
const ModalComponent = isDialog ? 'VDialog' : 'VDrawer';

// 基础属性
const isVisible = ref(false);
const isShowTitle = ref(true);
const isShowContent = ref(true);
const isShowFooter = ref(true);
const placementRef = ref('left');
const placementOptions = ['left', 'right'];

// 打开弹窗
function openModal() {
  isVisible.value = true;
}

// 关闭弹窗
function closeModal() {
  isVisible.value = false;
}
</script>
