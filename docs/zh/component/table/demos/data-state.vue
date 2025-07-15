<template>
  <VButton
    type="primary"
    :disabled="loading"
    @click="refreshData"
  >
    重新加载
  </VButton>
  <DemoSpace
    flex
    class="demo-table-state"
  >
    <DemoCard label="默认状态">
      <VTable
        :loading="loading"
        :col-items="colItems"
      />
    </DemoCard>
    <DemoCard label="自定义文本">
      <VTable
        :loading="loading"
        empty-text="暂无数据"
        :col-items="colItems"
      />
    </DemoCard>
    <DemoCard label="自定义插槽">
      <VTable
        :loading="loading"
        :col-items="colItems"
      >
        <template #empty>
          <VEmpty description="暂无数据" />
        </template>
      </VTable>
    </DemoCard>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';

// 数据
const loading = ref(false);
const colItems = [
  { key: 'id', title: 'ID', width: 80, cellClass: 'demo-table-cell' },
  { key: 'desc', title: '说明', width: 80 },
  { key: 'name', title: '姓名', width: 80 }
];

// 加载数据
refreshData();
function refreshData() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
}
</script>

<style lang="scss">
.demo-table-state .vui-table {
  height: 200px;
  border: 1px solid var(--vui-border-color-base);
}
</style>
