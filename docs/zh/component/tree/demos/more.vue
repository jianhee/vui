<template>
  <VTree
    v-slot="{ node, item }"
    :data="treeData"
    :tree-height="300"
    :tree-indent="50"
    :node-indent="20"
    :node-height="50"
    :current-node-id="treeData[1].id"
  >
    <VIcon :name="item.type === 'note' ? 'note' : node.isExpanded ? 'folder-open' : 'folder'" />
    <span>{{ item.desc }}</span>
  </VTree>
</template>

<script setup>
import { renderData } from '../../table/composables';

const treeData = renderData(10, 2);
</script>
