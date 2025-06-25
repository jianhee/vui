<!-- 鼠标框选 -->
<template>
  <div
    v-if="tableRoot.dragFlag.value === 'select'"
    class="vui-table-select-rect"
    :style="rectStyles"
  />
</template>

<script setup>
import { inject } from 'vue';
import { useSelectRect } from './composables/select-rect.js';

// 表格
const tableRoot = inject('tableRoot', null);

// 使用框选
const { rectStyles } = useSelectRect({
  selectable: tableRoot.props.selectable,
  selectAreaGap: tableRoot.props.selectAreaGap,
  parentEl: tableRoot.tbodyEl,
  dragFlag: tableRoot.dragFlag,
  rowItems: tableRoot.props.rowItems,
  rowHeight: tableRoot.props.rowHeight
});
</script>
