<template>
  <VTree
    class="demo-tree"
    :tree-height="300"
    :data="treeData"
    v-bind="$attrs"
    @node-click="writeLog('node-click', $event)"
    @node-contextmenu="writeLog('node-contextmenu', $event)"
  />
</template>

<script setup>
import { inject } from 'vue';
import { renderItems } from '../../table/composables';
import { writeLog } from '@vp/utils';

const _treeData = renderItems({ length: 10, level: 3 });
const treeData = inject('treeData', _treeData);
</script>

<style>
.demo-tree {
  height: 300px;
  border: 1px solid var(--vui-border-color-base);
}
</style>
