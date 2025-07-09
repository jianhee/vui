<!-- 表格 -->
<template>
  <div
    ref="tableElRef"
    :class="['vui-table', selectionRootClasses, dragSortRootClasses]"
    :style="{ ...rootStyles, ...selectionRootStyles }"
  >
    <!-- 表头 -->
    <div
      class="vui-table-header"
      :style="{ ...headerStyles, ...selectionInnerStyles }"
    >
      <TheadRow />
    </div>
    <!-- 加载状态 -->
    <VLoading v-if="loading" />
    <!-- 空状态 -->
    <template v-else-if="!rowItemsRef?.length">
      <!-- 优先插槽 -->
      <slot
        v-if="$slots.empty"
        name="empty"
      />
      <!-- 其次文案 -->
      <VEmpty
        v-else
        :icon="null"
        :description="emptyText"
      />
    </template>
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
    </template>
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

// 全局拖拽状态
const dragFlagRef = ref(null);

// 原始数据
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
const { rootStyles, headerStyles, colMinWidth, colWidthsRef } = useTable({
  tableElRef,
  tbodyElRef: tbodyProps.ref,
  props
});

// 使用多选
const { selectionRootClasses, selectionRootStyles, selectionInnerStyles } = useSelection({
  selectable: props.selectable,
  dragFlagRef,
  dragSelectAreaWidth: props.dragSelectAreaWidth,
  modelSelectedRowIds,
  rowItemsRef,
  emits
});

// 使用排序
const { dragSortRootClasses } = useDragSort({
  dragFlagRef,
  dragSortGroup: props.dragSortGroup
});

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
