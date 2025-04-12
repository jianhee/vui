<!-- 表格组件 -->
<!-- 1.虚拟列表 -->
<!-- 2.拖拽排序 -->
<!-- 3.多选、鼠标框选、保持选中状态 -->
<!-- 4.固定表头、拖拽调整列宽 -->
<template>
  <div
    ref="tableRef"
    class="mx-table"
    :class="tableClasses"
    :style="tableStyles"
  >
    <!-- 表头 -->
    <div
      class="mx-table-header"
      :style="headerStyles"
    >
      <div
        class="mx-table-row"
        :class="{ 'is-selected': selectedAll }"
        :style="{ height: `${rowHeight}px` }"
      >
        <!-- 复选框 -->
        <div
          v-if="selectable"
          class="mx-table-cell is-checkbox"
        >
          <MxCheckbox
            :checked="selectedAll"
            @change="toggleSelectedAll"
          />
        </div>
        <!-- 拖拽调整宽度 -->
        <MxDragbox
          v-for="col in colsData"
          :key="col.key"
          v-model:width="colsCurrentWidth[col.key]"
          :min-width="100"
          :fixed="false"
          resizable
          handles="right"
          class="mx-table-cell"
        >
          {{ col.title }}
        </MxDragbox>
      </div>
    </div>

    <!-- 表身 -->
    <div
      v-bind="tbodyProps"
      class="mx-table-body"
      @scroll="onBodyScroll"
      @mousedown="onMousedown(null, $event)"
    >
      <!-- 框选层 -->
      <div
        v-if="isSelecting"
        class="mx-table-select-box"
        :style="selectboxStyles"
      />
      <!-- 虚拟列表 -->
      <div
        ref="viewRef"
        v-bind="viewProps"
        class="mx-table-view"
      >
        <!-- 行 -->
        <div
          v-for="{ data: row } in virtualList"
          :key="row.id"
          :title="rowTitle ? rowTitle(row) : null"
          :class="{
            'mx-table-row': true,
            'is-current': row.id === currentRowId,
            'is-selected ': selectedMap.get(row.id),
            'is-sortable': selectedMap.get(row.id) && sortable
          }"
          :style="{ height: `${rowHeight}px` }"
          @mousedown.stop="onMousedown(row, $event)"
          @contextmenu.prevent="onRowContextmenu(row, $event)"
        >
          <!-- 复选框 -->
          <div
            v-if="selectable"
            class="mx-table-cell is-checkbox"
          >
            <MxCheckbox
              :checked="selectedMap.get(row.id)"
              @change="toggleSelectedItem(row, $event)"
            />
          </div>
          <!-- 内容：slot优先 -->
          <div
            v-for="col in colsData"
            :key="col.key"
            class="mx-table-cell"
            :class="col.cellClassName"
            :style="{ width: `${colsCurrentWidth[col.key]}px` }"
          >
            <!-- 优先显示slot -->
            <slot
              v-if="slots[col.key]"
              :name="col.key"
              :row="row"
              :col="col"
            />
            <MxRow
              v-else
              ellipsis
            >
              {{ row[col.key] }}
            </MxRow>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, useSlots } from 'vue';
import { useVirtualList, useStorage } from '@vueuse/core';

const slots = useSlots();
const emits = defineEmits(['row-contextmenu', 'selection-change']);

// 参数
const props = defineProps({
  // 表格
  tableHeight: { type: Number, default: null },
  // 列： { key: 'key', title: 'title', width: 300 },
  colsData: { type: Array, default: null },
  colsWidthStorageKey: { type: String, default: null },
  // 行
  rowsData: { type: Array, default: () => [] },
  rowHeight: { type: Number, default: 35 },
  rowTitle: { type: Function, default: null },
  currentRowId: { type: Number, default: null },
  // 是否可选择
  selectable: { type: Boolean, default: false },
  // 是否在数据刷新时保留选中状态
  keepSelected: { type: Boolean, default: false },
  // 是否可排序
  sortable: { type: Boolean, default: false }
});

// 类名
const tableClasses = computed(() => ({
  'is-draging': isSelecting.value || isSorting.value
}));

// 样式
const tableStyles = computed(() => ({
  height: `${props.tableHeight}px`
}));

// 元素
const tableRef = ref(null);
const viewRef = ref(null);
let viewRect = null;
let tbodyRect = null;

// 虚拟列表
const {
  list: virtualList,
  containerProps: tbodyProps,
  wrapperProps: viewProps
} = useVirtualList(
  computed(() => props.rowsData),
  {
    itemHeight: props.rowHeight,
    overscan: 5
  }
);

// 列宽
const colsDefaultWidth = props.colsData.reduce((map, col) => {
  map[col.key] = col.width || 100;
  return map;
}, {});
const colsCurrentWidth = props.colsWidthStorageKey ? useStorage(props.colsWidthStorageKey, colsDefaultWidth) : ref(colsDefaultWidth);

// 表身滚动时带动表头
const headerStyles = ref(null);
function onBodyScroll(event) {
  headerStyles.value = {
    transform: `translateX(-${event.target.scrollLeft}px)`
  };
}

// 右键点击节点
function onRowContextmenu(item, event) {
  emits('row-contextmenu', item, event);
}

// 选中状态
const selectedMap = reactive(new Map());
watch(selectedMap, () => {
  const items = props.rowsData.filter(item => selectedMap.get(item.id));
  emits('selection-change', items);
});

// 是否全选
const selectedAll = computed(() => {
  if (!props.selectable) return;
  return props.rowsData.length > 0 && props.rowsData.every(item => selectedMap.get(item.id));
});

// 切换全选
function toggleSelectedAll(newState) {
  if (!props.selectable) return;
  props.rowsData.forEach(item => selectedMap.set(item.id, newState));
}

// 切换单选
function toggleSelectedItem(item, newState) {
  if (!props.selectable) return;
  selectedMap.set(item.id, newState);
}

// ctrl+a 切换全选
window.addEventListener('keydown', event => {
  if (!props.selectable) return;
  if (event.key === 'a' && event.ctrlKey) {
    event.preventDefault();
    const newState = !selectedAll.value;
    toggleSelectedAll(newState);
  }
});

// 更新数据时切换全选
watch(
  () => props.rowsData,
  () => {
    if (props.selectable && !props.keepSelected) {
      toggleSelectedAll(false);
    }
  }
);

// 鼠标框选
const isSelecting = ref(false);

// 选择框相对于父元素的位置
const selectboxStartPos = ref({ x: 0, y: 0 });
const selectboxCurrentPos = ref({ x: 0, y: 0 });

// 选择框相对定位的样式
const selectboxStyles = computed(() => ({
  left: `${Math.min(selectboxStartPos.value.x, selectboxCurrentPos.value.x)}px`,
  top: `${Math.min(selectboxStartPos.value.y, selectboxCurrentPos.value.y)}px`,
  width: `${Math.abs(selectboxStartPos.value.x - selectboxCurrentPos.value.x)}px`,
  height: `${Math.abs(selectboxStartPos.value.y - selectboxCurrentPos.value.y)}px`
}));

// 按下鼠标时区分状态
function onMousedown(row, e) {
  // 是否可以框选
  if (!props.selectable) return;

  // 如果已选中的行：开始拖拽排序
  const isSelected = row && selectedMap.get(row.id);
  if (isSelected) return;

  // 开始
  viewRect = viewRef.value.getBoundingClientRect();
  tbodyRect = tbodyProps.ref.value.getBoundingClientRect();

  // 记录初始数据
  isSelecting.value = true;
  selectboxStartPos.value = {
    x: e.clientX - viewRect.x,
    y: e.clientY - tbodyRect.y + tbodyProps.ref.value.scrollTop
  };
  selectboxCurrentPos.value = { ...selectboxStartPos.value };

  window.addEventListener('mousemove', onSelectMove);
  window.addEventListener('mouseup', onSelectionStop);
}

// 框选中
function onSelectMove(e) {
  if (!isSelecting.value) return;

  // 选择框当前位置：不能超出父元素
  const { scrollTop } = tbodyProps.ref.value;
  selectboxCurrentPos.value = {
    x: Math.max(0, Math.min(e.clientX - viewRect.x, viewRect.width)),
    y: Math.max(0, Math.min(e.clientY - tbodyRect.y + scrollTop, tbodyRect.height + scrollTop))
  };

  checkSelectedRows();
}

// 结束框选
function onSelectionStop() {
  isSelecting.value = false;

  window.removeEventListener('mousemove', onSelectMove);
  window.removeEventListener('mouseup', onSelectionStop);
}

// 检测选中项
function checkSelectedRows() {
  // 选择框位置
  const selectboxRect = {
    x1: Math.min(selectboxStartPos.value.x, selectboxCurrentPos.value.x),
    x2: Math.max(selectboxStartPos.value.x, selectboxCurrentPos.value.x),
    y1: Math.min(selectboxStartPos.value.y, selectboxCurrentPos.value.y),
    y2: Math.max(selectboxStartPos.value.y, selectboxCurrentPos.value.y)
  };

  // 检查所有项
  props.rowsData.forEach((row, index) => {
    // 当前行的位置
    const rowRect = {
      x1: 0,
      x2: viewRect.width,
      y1: props.rowHeight * index,
      y2: props.rowHeight * (index + 1)
    };

    // X轴是否包含
    const isInX = rowRect.x1 < selectboxRect.x2 && rowRect.x2 > selectboxRect.x1;
    // Y轴是否包含
    const isInY = rowRect.y1 < selectboxRect.y2 && rowRect.y2 > selectboxRect.y1;

    // 更新选中状态
    selectedMap.set(row.id, isInX && isInY);
  });
}

// 拖拽排序
const isSorting = ref(false);
function onSortStart(row, e) {
  // 是否可以排序
  if (!props.sortable) return;

  // 开始
  isSorting.value = true;
}
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-table {
  display: flex;
  flex: auto;
  flex-direction: column;
  overflow: hidden;
  &.is-draging {
    user-select: none;
  }

  // 布局
  &-header {
    flex: none;
  }
  &-body {
    position: relative;
    flex: auto;
  }

  // 行
  &-row {
    display: flex;
    font-size: 14px;
    transition: transform 0.15s ease;
    &:hover,
    &.is-current,
    &.is-selected {
      background-color: var(--mx-table-row-active-bg-color);
    }
    &.is-sortable {
      cursor: move;
    }
  }
  &-header &-row {
    font-weight: bold;
  }

  // 单元格
  &-cell {
    display: inline-flex;
    flex: none;
    gap: 4px;
    align-items: center;
    padding: 0 8px;
    white-space: nowrap;
  }

  // 多选
  .is-checkbox {
    visibility: hidden;
    width: 30px;
  }
  &-row:hover,
  &-row.is-selected {
    .is-checkbox {
      visibility: visible;
    }
  }

  // 表头拖拽手柄
  .mx-drag-handle {
    top: 5px !important;
    bottom: 5px !important;
  }
  &-cell:hover .mx-drag-handle {
    background-color: var(--mx-border-color);
    &:hover {
      background-color: var(--mx-brand-color-default);
    }
  }

  // 鼠标框选
  &-select-box {
    position: absolute;
    z-index: 999;
    pointer-events: none;
    background-color: var(--mx-brand-color-a10);
    border: 1px solid var(--mx-brand-color-default);
  }

  // 拖拽排序
  &.is-draging .is-sortable {
    display: none;
  }
}
</style>
