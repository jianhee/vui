<template>
  <DemoSpace v-if="isDialog">
    <VBtn @click="openModal()">打开对话框</VBtn>
  </DemoSpace>
  <DemoSpace v-else>
    <VBtn @click="openModal('left')">左侧打开抽屉</VBtn>
    <VBtn @click="openModal('right')">右侧打开抽屉</VBtn>
  </DemoSpace>

  <component
    :is="ModalComponent"
    v-model:visible="isVisible"
    title="标题"
    :width="width"
    :placement="placement"
    :show-close="showClose"
    :close-on-click-modal="closeOnClickModal"
    @open="writeLog('open')"
    @close="writeLog('close')"
  >
    <VForm label-width="10em">
      <VFormFiled label="是否显示关闭按钮">
        <VSwitch v-model:checked="showClose" />
      </VFormFiled>
      <VFormFiled label="是否显示底栏">
        <VSwitch v-model:checked="showFooter" />
      </VFormFiled>
      <VFormFiled label="是否在点击遮罩时关闭">
        <VSwitch v-model:checked="closeOnClickModal" />
      </VFormFiled>
      <VFormFiled label="自定义宽度">
        <VRadioGroup
          v-model:value="width"
          :options="widthOptions"
          option-inline
        />
      </VFormFiled>
    </VForm>
    <template
      v-if="showFooter"
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
import { writeLog } from '@utils';

// 区分类型
const route = useRoute();
const isDialog = /dialog/.test(route.path);
const ModalComponent = isDialog ? 'VDialog' : 'VDrawer';

// 是否显示
const isVisible = ref(false);

// 基础属性
const placement = ref(undefined);
const showClose = ref(true);
const showFooter = ref(true);
const closeOnClickModal = ref(true);

// 宽度
const width = ref(undefined);
const widthOptions = ['200px', '400px', '600px', '800px'];

// 打开弹窗
function openModal(val) {
  isVisible.value = true;
  placement.value = val;
}

// 关闭弹窗
function closeModal() {
  isVisible.value = false;
}
</script>
