<template>
  <VTable
    v-slot="{ row, col }"
    class="c-demo-table"
    :row-items="rowItems"
    :col-items="colItems"
    col-resizable
    col-resize-storage-key="c-demo-table-col-widths"
  >
    <template v-if="col.key === 'title'">
      <VIcon :icon="row.type" />
      <span>{{ row.title }}</span>
    </template>
  </VTable>
</template>

<script setup>
import { renderItems, renderCols } from '../composables';

const rowItems = renderItems({ length: 5 });
const colItems = renderCols();
</script>
