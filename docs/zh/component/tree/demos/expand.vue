<template>
  <div class="demo-tree-expand">
    <DemoBasicTree :expand-node-ids="['0-3']" />
    <DemoLoadTree :expand-node-ids="['0-3']" />
  </div>
</template>

<script setup>
import DemoBasicTree from './basic.vue';
import DemoLoadTree from './load.vue';
</script>

<style>
.demo-tree-expand {
  display: flex;
  gap: 100px;
}
.demo-tree-expand .vui-tree {
  flex: auto;
  width: 50%;
}
</style>
