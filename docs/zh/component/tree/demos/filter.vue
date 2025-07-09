<template>
  <VTree
    v-slot="{ node, item }"
    :data="treeData"
    :filter-method="filterMethod"
    :tree-height="200"
  >
    <VIcon :name="item.type === 'note' ? 'note' : node.isExpanded ? 'folder-open' : 'folder'" />
    <span>{{ item.desc }}</span>
  </VTree>
</template>

<script setup>
import { renderData } from '../../table/composables';

const treeData = renderData(5, 2);
function filterMethod({ item }) {
  return item.type === 'folder';
}
</script>
