<!-- 表身-行 -->
<template>
  <div
    :class="['vui-table-row', rowClasses, rowSelectionClasses, dragClasses]"
    v-bind="customRowAttrs"
    :draggable="tableRoot.props.dragSortable"
    @dragstart.stop="onDragStart"
    @dragend.stop="onDragEnd"
    @dragenter.stop="onDragEnter"
    @dragover.stop.prevent="onDragOver"
    @drop.stop="onDrop"
    @contextmenu.prevent="onRowContextmenu"
  >
    <!-- 排序 -->
    <div
      v-if="tableRoot.props.dragSortable"
      class="vui-table-row--action"
    >
      <VIcon
        :component="IconDrag"
        class="vui-table-drag-handle"
      />
    </div>
    <!-- 多选 -->
    <div
      v-if="tableRoot.props.selectable"
      class="vui-table-row--action"
    >
      <VCheckbox
        :checked="isSelectedRow"
        @change="toggleRowSelection"
      />
    </div>
    <!-- 单元格 -->
    <TbodyCell
      v-for="col in tableRoot.props.colItems"
      :key="col.key"
      :row-data="rowData"
      :col-data="col"
    >
      <slot :col="col" />
    </TbodyCell>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';
import { useTbodyRow, tbodyRowProps } from './composables/tbody-row';
import { useRowSelection } from './composables/selection';
import { useDragSortItem } from './composables/drag-sort';
import TbodyCell from './tbody-cell.vue';
import IconDrag from '../../icons/drag.vue';

// 表格
const tableRoot = inject('tableRoot', null);

// 表身行
const props = defineProps(tbodyRowProps);

// 使用行
const { rowClasses, customRowAttrs, onRowContextmenu } = useTbodyRow({
  tableRoot,
  tbodyRow: { props }
});

// 使用行选中
const { isSelectedRow, toggleRowSelection, rowSelectionClasses } = useRowSelection({
  selectable: tableRoot.props.selectable,
  modelSelectedRowIds: tableRoot.modelSelectedRowIds,
  rowItemsRef: tableRoot.rowItemsRef,
  rowId: props.rowData?.id
});

// 使用拖拽排序
// 当前行被选中时拖拽所有选中的行
const selectedItemsRef = computed(() => {
  if (isSelectedRow.value) {
    return tableRoot.rowItemsRef.value.filter(item => tableRoot.modelSelectedRowIds.value?.includes(item.id));
  } else {
    return null;
  }
});

// 处理数据
const { dragClasses, onDragStart, onDragEnter, onDragOver, onDrop, onDragEnd } = useDragSortItem({
  dragFlagRef: tableRoot.dragFlagRef,
  dragSortable: tableRoot.props.dragSortable,
  canDropInto: tableRoot.props.canDropInto,
  rawItem: props.rowData,
  // rawItemsRef: tableRoot.rowItemsRef,
  selectedItemsRef,
  emits: tableRoot.emits
});
</script>
