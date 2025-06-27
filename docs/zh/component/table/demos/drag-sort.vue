<template>
  <VTable
    v-slot="{ row, col }"
    v-model:selected-row-ids="selectedRowIds"
    class="demo-table"
    :row-items="rowItems"
    :col-items="colItems"
    :selectable="true"
    :drag-sortable="true"
    :can-drop-into="canDropInto"
    @drag-sort-end="writeLog('drag-sort-end', $event)"
  >
    <template v-if="col.key === 'name'">
      <VBtn
        v-if="row.type === 'folder'"
        type="primary"
        size="small"
      >
        可以移入此项
      </VBtn>
      <VBtn
        v-else
        type="link"
      >
        不能移入此项
      </VBtn>
    </template>
  </VTable>
</template>

<script setup>
import { ref } from 'vue';
import { renderRows, colItems } from '../composables';
import { writeLog } from '@vp/utils';

const rowItems = renderRows(20);
const selectedRowIds = ref(null);
const canDropInto = row => row.type === 'folder';
</script>
