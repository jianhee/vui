<template>
  <VButton
    type="primary"
    :disabled="loading"
    @click="refreshData"
  >
    重新加载
  </VButton>
  <DemoSpace flex>
    <DemoViewTopCenter label="默认状态">
      <VTree
        class="demo-tree"
        :loading="loading"
      />
    </DemoViewTopCenter>
    <DemoViewTopCenter label="自定义文本">
      <VTree
        class="demo-tree"
        :loading="loading"
        empty-text="暂无数据"
      />
    </DemoViewTopCenter>
    <DemoViewTopCenter label="自定义插槽">
      <VTree
        class="demo-tree"
        :loading="loading"
      >
        <template #empty>
          <VEmpty description="暂无数据" />
        </template>
      </VTree>
    </DemoViewTopCenter>
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
