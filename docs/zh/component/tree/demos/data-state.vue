<template>
  <VBtn
    type="primary"
    :disabled="loading"
    @click="refreshData"
  >
    重新加载
  </VBtn>
  <DemoSpace
    flex
    class="demo-tree-state"
  >
    <div>
      <DemoSpace>默认状态</DemoSpace>
      <VTree :loading="loading" />
    </div>
    <div>
      <DemoSpace>自定义文本</DemoSpace>
      <VTree
        :loading="loading"
        empty-text="暂无数据"
      />
    </div>
    <div>
      <DemoSpace>自定义插槽</DemoSpace>
      <VTree :loading="loading">
        <template #empty>
          <VEmpty description="暂无数据" />
        </template>
      </VTree>
    </div>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';

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

<style lang="scss">
.demo-tree-state {
  > div {
    width: 33%;
  }
  .vui-tree {
    height: 200px;
    border: 1px solid var(--vui-border-color-base);
  }
}
</style>
