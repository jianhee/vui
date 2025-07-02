<template>
  <VTree
    :tree-height="300"
    :data="treeData"
    @node-click="writeLog('node-click', $event)"
    @node-contextmenu="writeLog('node-contextmenu', $event)"
  />
</template>

<script setup>
import { renderData } from '../../table/composables';
import { writeLog } from '@vp/utils';

const treeData = renderData(10, 2);
</script>
