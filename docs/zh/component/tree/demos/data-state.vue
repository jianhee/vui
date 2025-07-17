<template>
  <VButton
    type="primary"
    :disabled="loading"
    @click="refreshData"
  >
    重新加载
  </VButton>
  <DemoSpace flex>
    <DemoCard label="默认状态">
      <VTree
        class="demo-tree"
        :loading="loading"
      />
    </DemoCard>
    <DemoCard label="自定义文本">
      <VTree
        class="demo-tree"
        :loading="loading"
        empty-text="暂无数据"
      />
    </DemoCard>
    <DemoCard label="自定义插槽">
      <VTree
        class="demo-tree"
        :loading="loading"
      >
        <template #empty>
          <VEmpty description="暂无数据" />
        </template>
      </VTree>
    </DemoCard>
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
