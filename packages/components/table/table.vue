<!-- 表格 -->
<!-- 1.固定表头+拖拽调整列宽 -->
<!-- 2.虚拟列表 -->
<!-- 3.多选+鼠标框选、保持选中状态 -->
<!-- 4.拖拽排序+合并 -->
<template>
  <div
    ref="tableRef"
    :class="['vui-table', { 'is-draging': isSelecting || dragStartData }]"
    :style="tableStyles"
  >
    <!-- 表头 -->
    <div
      class="vui-table-header"
      :style="headerStyles"
    >
      <VTableRow type="head" />
    </div>

    <!-- 表身 -->
    <div
      v-bind="tbodyProps"
      :style="bodyStyles"
      class="vui-table-body"
      @scroll="onBodyScroll"
      @mousedown.self="onSelectStart"
    >
      <!-- 鼠标框选 -->
      <VTableSelectbox
        v-if="selectable"
        ref="selectboxRef"
      />
      <!-- 虚拟列表 -->
      <div
        ref="viewRef"
        class="vui-table-view"
        v-bind="viewProps"
      >
        <!-- 行 -->
        <VTableRow
          v-for="{ data: row } in virtualList"
          :key="row.id"
          :row-data="row"
          type="body"
        >
          <!-- 自定义内容：name 和 col.key 一致 -->
          <template
            v-for="(_, name) in $slots"
            #[name]
          >
            <slot
              :name="name"
              :row="row"
            />
          </template>
        </VTableRow>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, provide } from 'vue';
import { useVirtualList, useStorage } from '@vueuse/core';
import { useSelect } from './composables/select';
import VTableRow from './table-row.vue';
import VTableSelectbox from './table-selectbox.vue';

const emits = defineEmits(['row-contextmenu', 'selection-change', 'sort', 'merge']);

// 参数
const props = defineProps({
  // 表格
  tableHeight: { type: Number, default: null },
  // 列
  // 列数据：{ key, title, width: 默认根据列数量平分, className },
  colsData: { type: Array, default: null },
  // 列宽本地存储的key
  colsWidthStorageKey: { type: String, default: null },
  // 行
  // 行数据：{ id, ... },
  rowsData: { type: Array, default: () => [] },
  // 行高
  rowHeight: { type: Number, default: 35 },
  // 行自定义属性：row => ({title: row.title})
  rowProps: { type: Function, default: null },
  // 当前行
  currentRowId: { type: [Number, String], default: null },
  // 多选
  // 是否可选择
  selectable: { type: Boolean, default: false },
  // 刷新后是否保留选中状态
  keepSelected: { type: Boolean, default: false },
  // 鼠标框选两侧宽度
  selectAreaWidth: { type: Number, default: 0 },
  // 排序
  // 是否可排序
  sortable: { type: Boolean, default: false },
  // 可合并时的规则
  sortMerge: { type: Function, default: null }
});

// 元素
const tableRef = ref(null);
const viewRef = ref(null);

// 表格样式
const tableStyles = ref({
  'height': `${props.tableHeight}px`,
  'margin-left': `-${props.selectAreaWidth}px`,
  '--vui-table-row-height': `${props.rowHeight}px`
});

// 表身样式
const bodyStyles = ref({
  'padding-left': `${props.selectAreaWidth}px`
});

// 表头样式
const headerStyles = ref({
  ...bodyStyles.value,
  transform: null
});

// 虚拟列表
const {
  list: virtualList,
  containerProps: tbodyProps,
  wrapperProps: viewProps
} = useVirtualList(
  computed(() => props.rowsData),
  {
    itemHeight: props.rowHeight,
    overscan: 20
  }
);

// 列宽
const colsWidth = props.colsWidthStorageKey ? useStorage(props.colsWidthStorageKey, {}) : ref({});

// 动态初始化列宽
onMounted(() => {
  const tableWidth = tableRef.value?.offsetWidth - 100;
  const checkboxWidth = 30;
  const totalWidth = props.selectable ? tableWidth - checkboxWidth - props.selectAreaWidth : tableWidth;
  const itemWidth = totalWidth / props.colsData.length;
  props.colsData.forEach(col => {
    if (!colsWidth.value[col.key]) {
      colsWidth.value[col.key] = col.width || itemWidth;
    }
  });
});

// 滚动表身时带动表头
function onBodyScroll(event) {
  headerStyles.value.transform = `translateX(-${event.target.scrollLeft}px)`;
}

// 框选
const isSelecting = ref(false);
const selectFn = useSelect(props, emits);
const selectboxRef = ref(null);
const onSelectStart = e => selectboxRef.value?.onSelectStart(e);

// 排序
const dragStartData = ref(null);
const dragTargetData = ref(null);

// 共享数据
provide('parentTable', {
  emits,
  props,
  // 元素
  viewRef,
  tbodyRef: tbodyProps.ref,
  // 列宽
  colsWidth,
  // 多选
  isSelecting,
  selectFn,
  // 排序
  dragStartData,
  dragTargetData
});
</script>
