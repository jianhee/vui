<template>
  <DemoSpace flex>
    <VTable
      v-for="n in 2"
      :key="n"
      v-model:selected-row-ids="selectedRowIds"
      :row-items="rowItems"
      :col-items="colItems"
      :selectable="true"
      :drag-sortable="true"
      drag-sort-group="demo"
      :can-drop-into="row => row.canDropInto"
      @drag-sort-end="onEnd"
    />
  </DemoSpace>
</template>

<script setup>
import { ref, provide } from 'vue';
import { renderRows } from '../composables';
import { writeLog } from '@vp/utils';

// 行
const rowItems = ref(renderRows({ length: 10 }));

// 列
const colItems = [
  { key: 'id', title: 'ID', width: 100 },
  { key: 'drop', title: '是否可以移入', width: 120 }
];

// 已选中的行
const selectedRowIds = ref(null);

function onEnd(val) {
  rowItems.value = val.newSourceItems;
  writeLog('drag-sort-end', val);
}

// 多组件拖拽的全局状态
provide('vuiDragSortContext', {
  sourceRef: ref({}),
  targetRef: ref({})
});
</script>
