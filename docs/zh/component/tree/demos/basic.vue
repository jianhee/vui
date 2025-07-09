<template>
  <VTree
    :tree-height="200"
    :data="treeData"
    v-bind="$attrs"
    @node-click="writeLog('node-click', $event)"
    @node-contextmenu="writeLog('node-contextmenu', $event)"
  />
</template>

<script setup>
import { renderData } from '../../table/composables';
import { writeLog } from '@vp/utils';

const treeData = renderData(10, 3);
</script>
