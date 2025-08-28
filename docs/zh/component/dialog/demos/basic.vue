<template>
  <DemoView>
    <template #content>
      <VButton @click="openDialog">打开弹窗</VButton>
    </template>

    <template #props>
      <DemoViewBoolean label="组成部分">
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
      </DemoViewBoolean>
      <DemoViewBoolean label="内容溢出">
        <VSwitch v-model:checked="isShowOverflow" />
      </DemoViewBoolean>
      <DemoViewBoolean
        v-if="!isDialog"
        label="出现位置"
      >
        <VRadioGroup
          v-model:value="placementRef"
          :options="placementOptions"
          option-type="button"
        />
      </DemoViewBoolean>
    </template>
  </DemoView>

  <!-- 弹窗 -->
  <component
    :is="componentName"
    v-model:visible="isVisible"
    :title="title"
    :placement="placementRef"
    @open="writeLog('open')"
    @close="writeLog('close')"
  >
    <template v-if="isShowContent">
      <div
        v-for="i in contentLength"
        :key="i"
      >
        内容
      </div>
    </template>
    <template
      v-if="isShowFooter"
      #footer
    >
      <VButton @click="closeDialog">关闭</VButton>
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
const isShowContent = ref(true);
const isShowFooter = ref(true);
const isShowOverflow = ref(false);
const placementRef = ref('left');
const placementOptions = ['left', 'right'];
const title = computed(() => (isShowTitle.value ? '标题' : undefined));
const contentLength = computed(() => (isShowOverflow.value ? 100 : 1));
</script>
