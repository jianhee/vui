<template>
  <VTree
    v-slot="{ node, item }"
    class="c-demo-tree"
    :data="treeData"
    :filter-method="filterMethod"
    :tree-height="200"
  >
    <VIcon :icon="renderIcon(node)" />
    <span>{{ item.title }}</span>
  </VTree>
</template>

<script setup>
import { renderItems, renderIcon } from '../../table/composables';

const treeData = renderItems({ length: 5, level: 2 });
function filterMethod({ item }) {
  return item.type === 'folder';
}
</script>
