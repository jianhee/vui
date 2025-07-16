<template>
  <VTree
    v-slot="{ node, item }"
    :data="treeData"
    :tree-height="200"
    :tree-indent="20"
    :node-height="20"
    :node-indent="20"
    :current-node-id="treeData[0].id"
    :custom-node="customNode"
  >
    <VIcon :name="renderIcon(node)" />
    <span>{{ item.title }}</span>
  </VTree>
</template>

<script setup>
import { renderData, renderIcon } from '../../table/composables';

// 数据
const treeData = renderData(5, 2);

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
