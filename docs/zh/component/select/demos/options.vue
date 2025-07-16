<template>
  <VSelect
    class="demo-select"
    placeholder="请选择"
    :label="currentData?.title"
  >
    <template #options>
      <VTree
        v-slot="{ node, item }"
        :tree-height="200"
        :data="treeData"
        :current-node-id="currentData?.id"
        @node-click="onNodeClick"
      >
        <VIcon :name="renderIcon(node)" />
        <span>{{ item.title }}</span>
      </VTree>
    </template>
  </VSelect>
</template>

<script setup>
import { ref } from 'vue';
import { renderData, renderIcon } from '../../table/composables';

// 树
const treeData = renderData(5, 3);

// 当前项
const currentData = ref(null);
function onNodeClick({ item }) {
  currentData.value = item;
}
</script>
