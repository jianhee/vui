<template>
  <VTree
    class="demo-tree"
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

<style>
.demo-tree {
  height: 200px;
  border: 1px solid var(--vui-border-color-base);
}
</style>
