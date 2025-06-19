<template>
  <VTable
    v-slot="{ row, col }"
    table-height="300"
    :row-items="rowItems"
    :col-items="colItems"
    col-resizable
    col-widths-storage-key="demo-table-cols-width"
  >
    <VBtn
      v-if="col.key === 'btn'"
      type="link"
      @click="writeLog(`当前行 id 为：${row.id}`)"
    >
      点我
    </VBtn>
  </VTable>
</template>

<script setup>
import { writeLog } from '@vp/utils';
import { rowItems, colItems } from '../composables';
</script>
