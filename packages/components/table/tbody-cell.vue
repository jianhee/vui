<!-- 表身-单元格 -->
<template>
  <div
    :class="cellClasses"
    :style="cellStyles"
  >
    <!-- 优先显示 slot -->
    <slot v-if="$slots.default()[0].children.length" />
    <!-- 其次显示 row[col.key] 的值 -->
    <span
      v-else
      class="vui-table-cell-inner"
    >
      {{ rowData[colData.key] }}
    </span>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useTbodyCell, tbodyCellProps } from './composables/tbody-cell';

// 表格
const tableRoot = inject('tableRoot', null);

// 单元格
const props = defineProps(tbodyCellProps);

// 使用单元格
const { cellClasses, cellStyles } = useTbodyCell({
  tableRoot,
  tbodyCell: { props }
});
</script>
