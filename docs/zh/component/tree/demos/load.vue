<template>
  <VTree
    v-slot="{ node, item }"
    class="demo-tree"
    :data="treeData"
    :is-leaf="n => n.type === 'folder'"
    :load-data="loadData"
    v-bind="$attrs"
  >
    <VIcon :name="renderIcon(node)" />
    <span>{{ item.title }}</span>
  </VTree>
</template>

<script setup>
import { ref } from 'vue';
import { renderData, renderIcon } from '../../table/composables';

// 初始数据
const treeData = ref(renderData(5));

// 查找节点
const findNodeById = (nodeId, nodes = treeData.value) => {
  for (const node of nodes) {
    if (node.id === nodeId) return node;
    if (node.children?.length) {
      const found = findNodeById(nodeId, node.children);
      if (found) return found;
    }
  }
  return null;
};

// 加载数据：最多三级
function loadData({ node, item }) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (node.level < 2) {
        const children = renderData(5, 0, item.id);
        const newNode = findNodeById(item.id);
        newNode.children = children;
      }
      resolve(true);
    }, 1000);
  });
}
</script>
