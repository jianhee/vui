<template>
  <VTree
    v-slot="{ node }"
    :data="treeData"
    :tree-height="300"
    :tree-indent="50"
    :node-indent="20"
    :node-height="50"
    :current-node-id="treeData[1].id"
    :expand-node-ids="[treeData[2].id]"
  >
    当前节点为 {{ node.title }}
  </VTree>
</template>

<script setup>
import { renderData } from '../../table/composables';

const treeData = renderData(10, 2);
</script>
