<template>
  <VTree
    v-slot="{ node, item }"
    class="demo-tree"
    :data="treeData"
    :tree-indent="25"
    :node-height="25"
    :node-indent="25"
    :current-node-id="treeData[0].id"
    :custom-node="customNode"
  >
    <VIcon :icon="renderIcon(node)" />
    <span>{{ item.title }}</span>
  </VTree>
</template>

<script setup>
import { renderItems, renderIcon } from '../../table/composables';

// 数据
const treeData = renderItems({ length: 5, level: 2 });

// 自定义节点属性
function customNode({ item }) {
  return {
    title: item.title,
    style: {
      color: item.id === '0-2' ? 'pink' : null,
      backgroundColor: item.id === '0-4' ? 'pink' : null
    }
  };
}
</script>
