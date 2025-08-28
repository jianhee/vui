<template>
  <VTree
    v-slot="{ node, item }"
    class="demo-tree"
    :data="treeData"
    :is-leaf="n => n.type === 'folder'"
    :load-data="loadData"
    v-bind="$attrs"
  >
    <VIcon :icon="renderIcon(node)" />
    <span>{{ item.title }}</span>
  </VTree>
</template>

<script setup>
import { ref, inject } from 'vue';
import { renderItems, renderIcon } from '../../table/composables';

// 初始数据
const treeData1 = renderItems({ length: 5 });
const treeData2 = inject('treeData', treeData1);
const treeData = ref(treeData2);

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
        const children = renderItems({ length: 5, path: item.title.slice(3) });
        const newNode = findNodeById(item.id);
        newNode.children = children;
      }
      resolve(true);
    }, 1000);
  });
}

defineExpose({
  treeData
});
</script>
