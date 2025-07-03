<template>
  <div class="demo-table-drag">
    <DemoDragSortTree drag-sort-group="demo" />
    <DemoDragSortTable drag-sort-group="demo" />
  </div>
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

<style>
.demo-table-drag {
  display: flex;
  gap: 50px;
}
.demo-table-drag .vui-tree {
  flex: auto;
  width: 30%;
}
.demo-table-drag .vui-table {
  flex: auto;
  width: 70%;
}
</style>
