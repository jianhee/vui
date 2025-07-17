<template>
  <VTree
    v-slot="{ node, item }"
    class="demo-tree"
    :data="treeData"
    :drag-sortable="true"
    :can-drop-into="target => target.type === 'folder'"
    v-bind="$attrs"
    @drag-sort-end="writeLog('drag-sort-end', $event)"
  >
    <VIcon :name="renderIcon(node)" />
    <span>{{ item.title }}</span>
  </VTree>
</template>

<script setup>
import { renderData, renderIcon } from '../../table/composables';
import { writeLog } from '@vp/utils';

const treeData = renderData(5, 2);
</script>
