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
      <VBtn @click="openDialog">打开</VBtn>
    </VFormItem>
  </VForm>

  <!-- 弹窗 -->
  <component
    :is="componentName"
    v-model:visible="isVisible"
    :title="title"
    :placement="placementRef"
    @open="writeLog('open')"
    @close="writeLog('close')"
  >
    <template v-if="isShowContent">内容</template>
    <template
      v-if="isShowFooter"
      #footer
    >
      <VBtn @click="closeDialog">关闭</VBtn>
    </template>
  </component>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDialog } from '../composables';
import { writeLog } from '@vp/utils';

// 区分类型
const { isDialog, isVisible, componentName, openDialog, closeDialog } = useDialog();

// 基础属性
const isShowTitle = ref(true);
const title = computed(() => (isShowTitle.value ? '标题' : undefined));
const isShowContent = ref(true);
const isShowFooter = ref(true);
const placementRef = ref('left');
const placementOptions = ['left', 'right'];
</script>
