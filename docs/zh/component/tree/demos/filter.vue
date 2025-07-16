<template>
  <VTree
    v-slot="{ node, item }"
    :data="treeData"
    :filter-method="filterMethod"
    :tree-height="200"
  >
    <VIcon :name="renderIcon(node)" />
    <span>{{ item.title }}</span>
  </VTree>
</template>

<script setup>
import { renderData, renderIcon } from '../../table/composables';

const treeData = renderData(5, 2);
function filterMethod({ item }) {
  return item.type === 'folder';
}
</script>
