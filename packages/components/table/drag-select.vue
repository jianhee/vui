<!-- 拖拽鼠标框选 -->
<template>
  <div
    v-if="isShowBox"
    class="vui-table-select-rect"
    :style="boxStyles"
  />
</template>

<script setup>
import { inject } from 'vue';
import { useDragSelect } from './composables/drag-select.js';

// 表格
const tableRoot = inject('tableRoot', null);

// 使用框选
const { isShowBox, boxStyles } = useDragSelect({
  dragFlagRef: tableRoot.dragFlagRef,
  dragSelectAreaWidth: tableRoot.props.dragSelectAreaWidth,
  parentElRef: tableRoot.tbodyElRef,
  rowItemsRef: tableRoot.rowItemsRef,
  rowHeight: tableRoot.props.rowHeight,
  rowIdKey: tableRoot.props.rowIdKey
});
</script>
