<!-- 表格 -->
<template>
  <div
    ref="tableElRef"
    :class="['vui-table', rootClasses, selectionRootClasses, dragSortRootClasses]"
    :style="{ ...rootStyles, ...selectionRootStyles }"
  >
    <!-- 表头 -->
    <div
      class="vui-table-header"
      :style="{ ...headerStyles, ...selectionInnerStyles }"
    >
      <TheadRow />
    </div>
    <!-- 加载/空状态 -->
    <component
      :is="renderState"
      v-if="renderState"
    />
    <template v-else>
      <!-- 表身 -->
      <div
        class="vui-table-body"
        v-bind="tbodyProps"
        :style="selectionInnerStyles"
      >
        <!-- 拖拽鼠标框选 -->
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
            :key="row[rowIdKey]"
            :row-data="row"
          >
            <slot
              :row="row"
              :col="col"
            />
          </TbodyRow>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, provide, useTemplateRef, watchEffect } from 'vue';
import { useVirtualList } from '@vueuse/core';
import { useTable, tableProps, tableEmits } from './composables/table';
import { useState, stateProps } from './composables/state';
import { useSelection, selectionModel, selectionProps, selectionEmits } from './composables/selection';
import { useSort, sortProps } from './composables/sort';
import { useDragSort, dragSortProps, dragSortEmist } from './composables/drag-sort';
import TheadRow from './thead-row.vue';
import TbodyRow from './tbody-row.vue';
import DragSelect from './drag-select.vue';

// 表格
const tableElRef = useTemplateRef('tableElRef');
const modelSelectedRowIds = defineModel('selectedRowIds', selectionModel.selectedRowIds);
const props = defineProps({ ...tableProps, ...stateProps, ...selectionProps, ...sortProps, ...dragSortProps });
const emits = defineEmits([...tableEmits, ...selectionEmits, ...dragSortEmist]);

// 全局状态
const rowItemsRef = ref(null);
const dragFlagRef = ref(null);

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
const { rootClasses, rootStyles, headerStyles, colWidthsRef } = useTable({
  tableElRef,
  tbodyElRef: tbodyProps.ref,
  props
});

// 使用状态
const { renderState } = useState({
  type: 'table',
  props,
  dataRef: rowItemsRef
});

// 使用多选
const { selectionRootClasses, selectionRootStyles, selectionInnerStyles } = useSelection({
  props,
  dragFlagRef,
  modelSelectedRowIds,
  emits
});

// 使用排序
const { sortedRows } = useSort({ props });

// 使用拖拽排序
const { dragSortRootClasses } = useDragSort({
  dragFlagRef,
  dragSortGroup: props.dragSortGroup
});

// 更新数据
watchEffect(() => {
  rowItemsRef.value = sortedRows.value || props.rowItems || [];
});

// 子组件使用
provide('vuiTableRoot', {
  tbodyElRef: tbodyProps.ref,
  modelSelectedRowIds,
  props,
  emits,
  rowItemsRef,
  dragFlagRef,
  colWidthsRef
});
</script>
