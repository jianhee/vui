<!-- 拖拽框选 -->
<template>
  <div
    v-if="tableRoot.dragFlag.value === 'select'"
    class="vui-table-select-rect"
    :style="selectionStyles"
  />
</template>

<script setup>
import { inject } from 'vue';
import { useDragSelect } from './composables/drag-select.js';

// 表格
const tableRoot = inject('tableRoot', null);

// 使用框选
const { selectionStyles } = useDragSelect({
  dragSelectAreaWidth: tableRoot.props.dragSelectAreaWidth,
  parentEl: tableRoot.tbodyEl,
  dragFlag: tableRoot.dragFlag,
  rowItems: tableRoot.props.rowItems,
  rowHeight: tableRoot.props.rowHeight
});
</script>
