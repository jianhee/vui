<!-- 表格-单元格 -->
<template>
  <div
    :class="cellClasses"
    :style="cellStyles"
  >
    <!-- 优先显示 slot -->
    <slot v-if="$slots.default()[0].children.length" />
    <!-- 其次显示 col.key 对应的字段值 -->
    <template v-else>{{ rowData[colData.key] }}</template>
  </div>
</template>

<script setup>
import { useTableCell, tableCellProps } from './composables/table';

// 处理数据
const props = defineProps(tableCellProps);
const { cellClasses, cellStyles } = useTableCell({ props });
</script>
