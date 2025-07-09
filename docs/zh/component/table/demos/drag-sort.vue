<template>
  <VTable
    v-slot="{ row, col }"
    v-model:selected-row-ids="selectedRowIds"
    :row-items="rowItems"
    :col-items="colItems"
    :selectable="true"
    :drag-sortable="true"
    :can-drop-into="target => target.type === 'folder'"
    v-bind="$attrs"
    @drag-sort-end="writeLog('drag-sort-end', $event)"
  >
    <template v-if="col.key === 'desc'">
      <VIcon :name="row.type" />
      <span>{{ row.desc }}</span>
    </template>
  </VTable>
</template>

<script setup>
import { ref } from 'vue';
import { renderData, colItems } from '../composables';
import { writeLog } from '@vp/utils';

const rowItems = renderData(5);
const selectedRowIds = ref(null);
</script>
