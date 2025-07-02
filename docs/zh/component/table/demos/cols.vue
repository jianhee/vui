<template>
  <VTable
    v-slot="{ row, col }"
    table-height="500"
    :row-items="rowItems"
    :col-items="colItems"
    :col-resizable="true"
    col-widths-storage-key="demo-table-col-widths"
  >
    <VBtn
      v-if="col.key === 'btn'"
      type="link"
      @click="writeLog(`点击第 ${row.id} 行`)"
    >
      自定义按钮
    </VBtn>
  </VTable>
</template>

<script setup>
import { writeLog } from '@vp/utils';
import { renderRows, colItems } from '../composables';

const rowItems = renderRows();
</script>
