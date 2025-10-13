<template>
  <DemoUsage>
    <template #render>
      <VButton @click="openDialog">打开弹窗</VButton>
    </template>

    <template #config>
      <DemoConfig label="是否显示顶栏标题">
        <VSwitch v-model:checked="isShowTitle" />
      </DemoConfig>
      <DemoConfig label="是否显示中间内容">
        <VSwitch v-model:checked="isShowContent" />
      </DemoConfig>
      <DemoConfig label="是否显示底栏内容">
        <VSwitch v-model:checked="isShowFooter" />
      </DemoConfig>
      <DemoConfig label="是否内容溢出">
        <VSwitch v-model:checked="isShowOverflow" />
      </DemoConfig>
    </template>
  </DemoUsage>

  <!-- 弹窗 -->
  <VComponentMatchRoute
    v-model:visible="isVisible"
    :title="title"
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
  </VComponentMatchRoute>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDemoDialog } from '../composables';

// 区分类型
const { isVisible, openDialog, closeDialog } = useDemoDialog();

// 基础属性
const isShowTitle = ref(true);
const isShowContent = ref(true);
const isShowFooter = ref(true);
const isShowOverflow = ref(false);
const title = computed(() => (isShowTitle.value ? '标题' : undefined));
const contentLength = computed(() => (isShowOverflow.value ? 100 : 1));
</script>
