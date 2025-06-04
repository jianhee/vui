<template>
  <DemoSpace v-if="isDialog">
    <VBtn @click="openModal()">打开</VBtn>
  </DemoSpace>
  <DemoSpace v-else>
    <VBtn @click="openModal('left')">左侧打开</VBtn>
    <VBtn @click="openModal('right')">右侧打开</VBtn>
  </DemoSpace>

  <component
    :is="ModalComponent"
    v-model:visible="isVisible"
    title="标题"
    :width="widthRef"
    :placement="placementRef"
    :show-close="isShowClose"
    :close-on-click-modal="isCloseOnClickModal"
  >
    <VForm label-width="5em">
      <VFormItem label="切换宽度">
        <VRadioGroup
          v-model:value="widthRef"
          :options="widthOptions"
          option-inline
        />
      </VFormItem>
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
        <br />
        <VSwitch
          v-model:checked="isShowFooter"
          active-text="显示底栏"
        />
      </VFormItem>
    </VForm>
    <template
      v-if="isShowFooter"
      #footer
    >
      <VBtn
        type="primary"
        @click="closeModal"
      >
        确定
      </VBtn>
      <VBtn @click="closeModal">取消</VBtn>
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
const widthOptions = ['200px', '400px', '600px', '800px'];
const placementRef = ref(undefined);
const isShowClose = ref(true);
const isCloseOnClickModal = ref(true);
const isShowFooter = ref(true);

// 打开弹窗
function openModal(val) {
  isVisible.value = true;
  placementRef.value = val;
}

// 关闭弹窗
function closeModal() {
  isVisible.value = false;
}
</script>
