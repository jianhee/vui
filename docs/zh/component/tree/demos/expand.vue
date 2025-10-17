<template>
  <DemoSpace
    flex
    class="c-demo-tree-expand"
  >
    <DemoBasicTree :expanded-node-ids="[treeData[2].id]" />
    <DemoLoadTree :expanded-node-ids="[treeData[2].id]" />
  </DemoSpace>
</template>

<script setup>
import { provide } from 'vue';
import { renderItems } from '../../table/composables';
import DemoBasicTree from './basic.vue';
import DemoLoadTree from './load.vue';

const treeData = renderItems({ length: 10, level: 3 });
provide('demoTreeData', treeData);
</script>

<style>
.c-demo-tree-expand .vui-tree {
  flex: auto;
  width: 0;
}
</style>
