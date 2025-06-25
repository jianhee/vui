<!-- 表格 -->
<template>
  <div
    ref="tableEl"
    :class="rootClasses"
    :style="{ ...rootStyles, ...selectRootStyles }"
  >
    <!-- 表头 -->
    <div
      class="vui-table-header"
      :style="{ ...headerStyles, ...selectInnerStyles }"
    >
      <TheadRow />
    </div>
    <!-- 表身 -->
    <div
      class="vui-table-body"
      v-bind="tbodyProps"
      :style="selectInnerStyles"
    >
      <!-- 鼠标框选 -->
      <SelectRect v-if="selectable" />
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
import { ref, computed, provide, useTemplateRef } from 'vue';
import { useVirtualList } from '@vueuse/core';
import { useTable, tableProps, tableEmits } from './composables/table';
import { useSelection, selectionModel, selectionProps, selectionEmits } from './composables/selection';
import TheadRow from './thead-row.vue';
import TbodyRow from './tbody-row.vue';
import SelectRect from './select-rect.vue';

// 表格
const tableEl = useTemplateRef('tableEl');
const modelSelectedRowIds = defineModel('selectedRowIds', selectionModel.selectedRowIds);
const props = defineProps({ ...tableProps, ...selectionProps });
const emits = defineEmits([...tableEmits, ...selectionEmits]);

// 拖拽状态
const dragFlag = ref(null);

// 使用虚拟列表
const {
  list: virtualList,
  containerProps: tbodyProps,
  wrapperProps: viewProps
} = useVirtualList(
  computed(() => props.rowItems),
  {
    itemHeight: props.rowHeight,
    overscan: 20
  }
);

// 使用表格
const { rootClasses, rootStyles, headerStyles, colMinWidth, colWidths } = useTable({
  tableEl,
  tbodyEl: tbodyProps.ref,
  props,
  dragFlag
});

// 使用多选
const { selectRootStyles, selectInnerStyles } = useSelection({
  selectable: props.selectable,
  selectAreaGap: props.selectAreaGap,
  modelSelectedRowIds,
  rowItems: props.rowItems,
  emits
});

// 子组件使用
provide('tableRoot', {
  tbodyEl: tbodyProps.ref,
  modelSelectedRowIds,
  props,
  emits,
  dragFlag,
  colWidths,
  colMinWidth
});
</script>
