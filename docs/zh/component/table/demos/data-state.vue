<template>
  <div class="demo-table-state">
    <VBtn
      type="primary"
      :disabled="loading"
      @click="refreshData"
    >
      重新加载
    </VBtn>
    <DemoSpace>默认状态</DemoSpace>
    <VTable
      :loading="loading"
      :col-items="colItems"
    />
    <DemoSpace>自定义文本</DemoSpace>
    <VTable
      :loading="loading"
      empty-text="暂无数据"
      :col-items="colItems"
    />
    <DemoSpace>自定义插槽</DemoSpace>
    <VTable
      :loading="loading"
      :col-items="colItems"
    >
      <template #empty>
        <VEmpty description="暂无数据" />
      </template>
    </VTable>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { colItems } from '../composables';

// 数据
const loading = ref(false);

// 加载数据
refreshData();
function refreshData() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
}
</script>

<style>
.demo-table-state .vui-table {
  height: 200px;
  border: 1px solid var(--vui-border-color-base);
}
</style>
