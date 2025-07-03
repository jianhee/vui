<template>
  <VTree
    v-slot="{ node, item }"
    :tree-height="300"
    :data="treeData"
    :drag-sortable="true"
    :can-drop-into="target => target.type === 'folder'"
    v-bind="$attrs"
    @drag-sort-end="writeLog('drag-sort-end', $event)"
  >
    <VIcon :name="item.type === 'note' ? 'note' : node.isExpanded ? 'folder-open' : 'folder'" />
    <span>{{ item.title }}</span>
  </VTree>
</template>

<script setup>
import { renderData } from '../../table/composables';
import { writeLog } from '@vp/utils';

const treeData = renderData(10, 2);
</script>
