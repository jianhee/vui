<!-- 表格 -->
<template>
  <div
    ref="tableElRef"
    :class="rootClasses"
    :style="{ ...rootStyles, ...selectionRootStyles }"
  >
    <!-- 表头 -->
    <div
      class="vui-table-header"
      :style="{ ...headerStyles, ...selectionInnerStyles }"
    >
      <TheadRow />
    </div>
    <!-- 表身 -->
    <div
      class="vui-table-body"
      v-bind="tbodyProps"
      :style="selectionInnerStyles"
    >
      <!-- 拖拽框选 -->
      <DragSelect v-if="selectable && dragSelectable" />
      <!-- 虚拟列表 -->
      <div
        class="vui-table-view"
        v-bind="viewProps"
      >
        <!-- 行 -->
        <TbodyRow
          v-for="{ data: row } in virtualList"
          v-slot="{ col }"
          :key="row.id"
          :row-data="row"
        >
          <!-- 单元格内容 -->
          <slot
            :row="row"
            :col="col"
          />
        </TbodyRow>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, provide, useTemplateRef } from 'vue';
import { useVirtualList } from '@vueuse/core';
import { useTable, tableProps, tableEmits } from './composables/table';
import { useSelection, selectionModel, selectionProps, selectionEmits } from './composables/selection';
import { useDragSort, dragSortProps, dragSortEmist } from './composables/drag-sort';
import TheadRow from './thead-row.vue';
import TbodyRow from './tbody-row.vue';
import DragSelect from './drag-select.vue';

// 表格
const tableElRef = useTemplateRef('tableElRef');
const modelSelectedRowIds = defineModel('selectedRowIds', selectionModel.selectedRowIds);
const props = defineProps({ ...tableProps, ...selectionProps, ...dragSortProps });
const emits = defineEmits([...tableEmits, ...selectionEmits, ...dragSortEmist]);

// 全局数据
const dragFlagRef = ref(null);
const rowItemsRef = ref(props.rowItems);
watch(
  () => props.rowItems,
  val => (rowItemsRef.value = val)
);

// 使用虚拟列表
const {
  list: virtualList,
  containerProps: tbodyProps,
  wrapperProps: viewProps
} = useVirtualList(rowItemsRef, {
  itemHeight: props.rowHeight,
  overscan: 20
});

// 使用表格
const { rootClasses, rootStyles, headerStyles, colMinWidth, colWidthsRef } = useTable({
  tableElRef,
  tbodyElRef: tbodyProps.ref,
  props,
  dragFlagRef
});

// 使用多选
const { selectionRootStyles, selectionInnerStyles } = useSelection({
  selectable: props.selectable,
  dragSelectAreaWidth: props.dragSelectAreaWidth,
  modelSelectedRowIds,
  rowItemsRef,
  emits
});

// 使用排序
useDragSort();

// 子组件使用
provide('tableRoot', {
  tbodyElRef: tbodyProps.ref,
  modelSelectedRowIds,
  props,
  emits,
  dragFlagRef,
  rowItemsRef,
  colWidthsRef,
  colMinWidth
});
</script>
