<template>
  <VTree
    v-slot="{ node }"
    :tree-height="300"
    :data="treeData"
    :drag-sortable="true"
    :can-drop-into="target => target.canDropInto"
    @drag-sort-end="writeLog('drag-sort-end', $event)"
  >
    {{ node.action }}
  </VTree>
</template>

<script setup>
import { renderData } from '../../table/composables';
import { writeLog } from '@vp/utils';

const treeData = renderData(10, 2);
</script>
