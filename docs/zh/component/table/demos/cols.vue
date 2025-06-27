<template>
  <VTable
    v-slot="{ row, col }"
    class="demo-table"
    :row-items="rowItems"
    :col-items="colItems"
    col-resizable
    col-widths-storage-key="demo-table-col-widths"
  >
    <VBtn
      v-if="col.key === 'btn'"
      type="link"
      @click="writeLog(`当前行 id 为：${row.id}`)"
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
