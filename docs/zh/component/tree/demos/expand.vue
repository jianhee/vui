<template>
  <DemoSpace
    flex
    class="demo-tree-expand"
  >
    <DemoBasicTree :expanded-node-ids="['0-2']" />
    <DemoLoadTree :expanded-node-ids="['0-2']" />
  </DemoSpace>
</template>

<script setup>
import DemoBasicTree from './basic.vue';
import DemoLoadTree from './load.vue';
</script>

<style>
.demo-tree-expand .vui-tree {
  flex: auto;
  border-right: 1px solid var(--vui-border-color-base);
}
</style>
