<!-- 表格组件 -->
<!-- 1.虚拟列表 -->
<!-- 2.多选、鼠标框选、保持选中状态 -->
<!-- 3.固定表头、拖拽调整列宽 -->
<template>
  <div
    ref="tableRef"
    class="mx-table"
    :class="{ 'is-selecting': isSelecting }"
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
          v-for="col in columns"
          :key="col.key"
          v-model:width="tableColsWidth[col.key]"
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
      v-bind="bodyProps"
      class="mx-table-body"
      @scroll="onBodyScroll"
      @mousedown="onSelectStart"
    >
      <!-- 框选层 -->
      <div
        v-show="isSelecting"
        class="mx-table-select-box"
        :style="selectboxStyles"
      />
      <!-- 虚拟列表 -->
      <div
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
            'is-current': row.id === currentId,
            'is-selected': selectedMap.get(row.id)
          }"
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
            v-for="col in columns"
            :key="col.key"
            class="mx-table-cell"
            :class="col.cellClassName"
            :style="{ width: `${tableColsWidth[col.key]}px` }"
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
import { ref, reactive, computed, watch, useSlots, onMounted } from 'vue';
import { useVirtualList, useStorage } from '@vueuse/core';

const slots = useSlots();
const emits = defineEmits(['row-contextmenu', 'selection-change']);

// 参数
const props = defineProps({
  // 唯一标识：用于存储数据
  name: { type: String, default: null },
  // 样式
  tableHeight: { type: Number, default: null },
  rowHeight: { type: Number, default: 35 },
  // 行数据
  rows: { type: Array, default: () => [] },
  // 列数据： { key: 'key', title: 'title', width: 300 },
  columns: { type: Array, default: null },
  // 当前 ID
  currentId: { type: Number, default: null },
  // 是否可选择
  selectable: { type: Boolean, default: false },
  // 数据刷新时是否保留选中状态
  keepSelected: { type: Boolean, default: false },
  // 自定义方法
  rowTitle: { type: Function, default: null }
});

// 高度
const tableStyles = computed(() => ({
  'height': `${props.tableHeight}px`,
  '--mx-table-row-height': `${props.rowHeight}px`
}));

// 虚拟列表
const {
  list: virtualList,
  containerProps: bodyProps,
  wrapperProps: viewProps
} = useVirtualList(
  computed(() => props.rows),
  {
    itemHeight: props.rowHeight,
    overscan: 5
  }
);

// 表格列宽度
const tableRef = ref(null);
const tableColsWidth = props.name ? useStorage(`mx-table-cols-width-${props.name}`, {}) : ref({});
onMounted(() => {
  if (Object.keys(tableColsWidth.value).length) return;
  const colWidth = (tableRef.value.clientWidth - 50) / props.columns.length;
  tableColsWidth.value = props.columns.reduce((map, col) => {
    map[col.key] = col.width || colWidth;
    return map;
  }, {});
});

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
  const items = props.rows.filter(item => selectedMap.get(item.id));
  emits('selection-change', items);
});

// 是否全选
const selectedAll = computed(() => {
  if (!props.selectable) return;
  return props.rows.length > 0 && props.rows.every(item => selectedMap.get(item.id));
});

// 切换全选
function toggleSelectedAll(newState) {
  if (!props.selectable) return;
  props.rows.forEach(item => selectedMap.set(item.id, newState));
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
  () => props.rows,
  () => {
    if (props.selectable && !props.keepSelected) {
      toggleSelectedAll(false);
    }
  }
);

// 鼠标框选
let viewRect = null; // x轴用到，宽度完全一致
let tbodyRect = null; // y轴用到
let tbodyEl = null; // 获取实时的scrolltop

// 选择框相对于父元素的位置
const isSelecting = ref(false);
const selectboxStartPos = ref({ x: 0, y: 0 });
const selectboxCurrentPos = ref({ x: 0, y: 0 });

// 选择框相对定位的样式
const selectboxStyles = computed(() => ({
  left: `${Math.min(selectboxStartPos.value.x, selectboxCurrentPos.value.x)}px`,
  top: `${Math.min(selectboxStartPos.value.y, selectboxCurrentPos.value.y)}px`,
  width: `${Math.abs(selectboxStartPos.value.x - selectboxCurrentPos.value.x)}px`,
  height: `${Math.abs(selectboxStartPos.value.y - selectboxCurrentPos.value.y)}px`
}));

// 开始框选
function onSelectStart(e) {
  if (!props.selectable) return;

  // 父元素
  viewRect = document.querySelector('.mx-table-view').getBoundingClientRect();
  tbodyEl = document.querySelector('.mx-table-body');
  tbodyRect = tbodyEl.getBoundingClientRect();

  // 记录初始数据
  isSelecting.value = true;
  selectboxStartPos.value = {
    x: e.clientX - viewRect.x,
    y: e.clientY - tbodyRect.y + tbodyEl.scrollTop
  };
  selectboxCurrentPos.value = { ...selectboxStartPos.value };

  window.addEventListener('mousemove', onSelectMove);
  window.addEventListener('mouseup', onSelectionStop);
}

// 框选中
function onSelectMove(e) {
  if (!isSelecting.value) return;

  // 选择框当前位置：不能超出父元素
  selectboxCurrentPos.value = {
    x: Math.max(0, Math.min(e.clientX - viewRect.x, viewRect.width)),
    y: Math.max(0, Math.min(e.clientY - tbodyRect.y + tbodyEl.scrollTop, tbodyRect.height + tbodyEl.scrollTop))
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
  props.rows.forEach((row, index) => {
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
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-table {
  display: flex;
  flex: auto;
  flex-direction: column;
  overflow: hidden;
  &.is-selecting {
    user-select: none;
  }
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
    &:hover,
    &.is-current {
      background-color: var(--mx-table-row-active-bg-color);
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
    height: var(--mx-table-row-height);
    padding: 0 8px;
    white-space: nowrap;
  }

  // 复选框
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

  // 拖拽手柄
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
}
</style>
