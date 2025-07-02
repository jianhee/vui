<template>
  <DemoSpace flex>
    <!-- 树 -->
    <VTree
      :tree-height="300"
      :data="treeData"
      :drag-sortable="true"
      drag-sort-group="demo"
      :can-drop-into="canDropInto"
      @drag-sort-end="onEnd"
    />

    <!-- 列表 -->
    <VTable
      v-model:selected-row-ids="selectedRowIds"
      :table-height="300"
      :row-items="tabelRowItems"
      :col-items="colItems"
      :selectable="true"
      :drag-sortable="true"
      drag-sort-group="demo"
      :can-drop-into="canDropInto"
      @drag-sort-end="onEnd"
    />
  </DemoSpace>
</template>

<script setup>
import { ref, provide } from 'vue';
import { renderData, colItems } from '../composables';
import { writeLog } from '@vp/utils';

// 数据
const treeData = ref(renderData(10, 2));
const tabelRowItems = ref(renderData(10));

// 已选中的行
const selectedRowIds = ref(null);

// 是否可以移入
function canDropInto(target) {
  return target.canDropInto;
}

// 拖拽结束时
function onEnd(val) {
  writeLog('drag-sort-end', val);
}

// 多组件拖拽的全局状态
provide('vuiDragSortContext', {
  sourceRef: ref({}),
  targetRef: ref({})
});
</script>
