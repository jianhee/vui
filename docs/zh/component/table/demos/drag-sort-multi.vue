<template>
  <DemoSpace
    flex
    class="demo-table-sort-multi"
  >
    <DemoDragSortTree drag-sort-group="demo" />
    <DemoDragSortTable drag-sort-group="demo" />
  </DemoSpace>
</template>

<script setup>
import { ref, provide } from 'vue';
import DemoDragSortTree from '../../tree/demos/drag-sort.vue';
import DemoDragSortTable from './drag-sort.vue';

// 多组件拖拽的全局状态
provide('vuiDragSortContext', {
  sourceRef: ref({}),
  targetRef: ref({})
});
</script>

<style lang="scss">
.demo-table-sort-multi {
  .vui-tree {
    flex: none;
    width: 200px;
    border-right: 1px solid var(--vui-border-color-base);
  }
  .vui-table {
    flex: auto;
  }
}
</style>
