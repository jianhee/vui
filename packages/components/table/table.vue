<!-- 表格 -->
<template>
  <div
    ref="tableEl"
    :class="rootClasses"
    :style="rootStyles"
  >
    <!-- 表头 -->
    <div
      class="vui-table-header"
      :style="headerStyles"
    >
      <TheadRow />
    </div>
    <!-- 表身 -->
    <div
      class="vui-table-body"
      v-bind="tbodyProps"
    >
      <!-- 虚拟列表 -->
      <div
        class="vui-table-view"
        v-bind="tviewProps"
      >
        <!-- 行 -->
        <TbodyRow
          v-for="{ data: row } in virtualList"
          v-slot="{ col }"
          :key="row.id"
          :row-data="row"
        >
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
import { computed, provide, useTemplateRef } from 'vue';
import { useVirtualList } from '@vueuse/core';
import { useTable, tableProps, tableEmits } from './composables/table';
import TheadRow from './thead-row.vue';
import TbodyRow from './tbody-row.vue';

// 处理数据
const tableEl = useTemplateRef('tableEl');
const props = defineProps({ ...tableProps });
const emits = defineEmits([...tableEmits]);

// 虚拟列表
const {
  list: virtualList,
  containerProps: tbodyProps,
  wrapperProps: tviewProps
} = useVirtualList(
  computed(() => props.rowItems),
  {
    itemHeight: props.rowHeight,
    overscan: 20
  }
);

// 处理表格
const { rootClasses, rootStyles, headerStyles, colMinWidth, colWidths } = useTable({
  props,
  tableEl,
  tbodyEl: tbodyProps.ref
});

// 共享数据
provide('tableRoot', {
  props,
  emits,
  colMinWidth,
  colWidths
});
</script>
