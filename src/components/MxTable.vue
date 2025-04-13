<!-- 表格组件 -->
<!-- 1.固定表头、拖拽调整列宽 -->
<!-- 2.虚拟列表 -->
<!-- 3.多选、鼠标框选、保持选中状态 -->
<!-- 4.拖拽排序 -->
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
        :class="{ 'is-selected': isAllSelected }"
        :style="{ height: `${rowHeight}px` }"
      >
        <!-- 复选框 -->
        <div
          v-if="selectable"
          class="mx-table-cell is-checkbox"
        >
          <MxCheckbox
            :checked="isAllSelected"
            @change="toggleAllSelected"
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
          class="mx-table-row"
          v-bind="rowProps(row)"
          @contextmenu.prevent="onRowContextmenu(row, $event)"
          @dragstart="onDragStart(row)"
          @dragenter="onDragEnter(row, $event)"
          @dragover="onDragOver(row, $event)"
          @dragend="onDragEnd"
        >
          <!-- 复选框 -->
          <div
            v-if="selectable"
            class="mx-table-cell is-checkbox"
          >
            <MxCheckbox
              :checked="isRowSelected(row)"
              @change="toggleRowSelected(row, $event)"
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
import { useVirtualList, useStorage, onLongPress } from '@vueuse/core';

const slots = useSlots();
const emits = defineEmits(['row-contextmenu', 'selection-change', 'sort', 'merge']);

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
  keepSelected: { type: Boolean, default: false },
  // 是否可排序
  sortable: { type: Boolean, default: false },
  sortMerge: { type: Function, default: null }
});

// 表格类名
const tableClasses = computed(() => ({
  'is-draging': isSelecting.value || !!dragStartData.value
}));

// 表格样式
const tableStyles = computed(() => ({
  height: `${props.tableHeight}px`
}));

// 行属性
function rowProps(row) {
  const isDragable = isRowDraggable(row);
  return {
    draggable: isDragable ? true : null,
    title: props.rowTitle ? props.rowTitle(row) : null,
    class: [
      {
        'is-current': row.id === props.currentRowId,
        'is-selected ': isRowSelected(row),
        'is-draggable': isDragable,
        'is-draging': dragStartData.value?.items.some(item => item.id === row.id)
      },
      dragTargetData.value?.item.id === row.id ? `is-${dragNewData.value?.state}` : null
    ],
    style: { height: `${props.rowHeight}px` }
  };
}

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

// 元素
const tableRef = ref(null);
const tbodyRef = tbodyProps.ref;
const viewRef = ref(null);
let tbodyRect = null;
let viewRect = null;

// 列宽默认值
const colsDefaultWidth = props.colsData.reduce((map, col) => {
  map[col.key] = col.width || 100;
  return map;
}, {});

// 列宽当前值
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
const isAllSelected = computed(() => {
  if (!props.selectable) return false;
  return props.rowsData.length > 0 && props.rowsData.every(item => selectedMap.get(item.id));
});

// 切换全选
function toggleAllSelected(newState) {
  if (!props.selectable) return;
  props.rowsData.forEach(item => selectedMap.set(item.id, newState));
}

// 是否选中行
function isRowSelected(item) {
  if (!props.selectable) return false;
  return selectedMap.get(item.id);
}

// 切换选中行
function toggleRowSelected(item, newState) {
  if (!props.selectable) return;
  selectedMap.set(item.id, newState);
}

// ctrl+a 切换全选
window.addEventListener('keydown', event => {
  if (!props.selectable) return;
  if (event.key === 'a' && event.ctrlKey) {
    event.preventDefault();
    const newState = !isAllSelected.value;
    toggleAllSelected(newState);
  }
});

// 更新数据时切换全选
watch(
  () => props.rowsData,
  () => {
    if (props.selectable && !props.keepSelected) {
      toggleAllSelected(false);
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

// 长按开始框选
onLongPress(tbodyRef, e => {
  // 是否可以框选
  if (!props.selectable) return;

  // 是否已选中
  const row = e.target.closest('.mx-table-row');
  const isSelected = row && row.classList.contains('is-selected');

  // 点击已选中的行：可排序时不再选择而是转到排序
  if (isSelected && props.sortable) return;

  // 清空选择
  selectedMap.clear();

  // 重新开始选择
  viewRect = viewRef.value.getBoundingClientRect();
  tbodyRect = tbodyRef.value.getBoundingClientRect();

  // 记录初始数据
  isSelecting.value = true;
  selectboxStartPos.value = {
    x: e.clientX - viewRect.x,
    y: e.clientY - tbodyRect.y + tbodyRef.value.scrollTop
  };
  selectboxCurrentPos.value = { ...selectboxStartPos.value };

  window.addEventListener('mousemove', onSelectMove);
  window.addEventListener('mouseup', onSelectionStop);
});

// 框选中
function onSelectMove(e) {
  if (!isSelecting.value) return;

  // 选择框当前位置：不能超出父元素
  const { scrollTop } = tbodyRef.value;
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
const dragStartData = ref(null);
const dragTargetData = ref(null);
const dragNewData = ref(null);

// 行是否可以拖拽
function isRowDraggable(row) {
  // 是否可以排序
  if (!props.sortable) return false;

  // 是否可以选择
  if (!props.selectable) return true;

  // 是否正在选择
  if (isSelecting.value) return false;

  // 是否是已选中的项
  return isRowSelected(row);
}

// dragstart  开始拖拽
function onDragStart(statrItem) {
  dragStartData.value = {
    item: statrItem,
    index: props.rowsData.indexOf(statrItem),
    items: props.selectable ? props.rowsData.filter(item => selectedMap.get(item.id)) : [statrItem]
  };
}

// dragenter  进入目标元素
function onDragEnter(targetItem, event) {
  dragTargetData.value = {
    item: targetItem,
    index: props.rowsData.indexOf(targetItem),
    rect: event.currentTarget.getBoundingClientRect(),
    // 是否可以合并
    // 1.有判断方法
    // 2.目标元素不是被拖拽的项
    canMerge: props.sortMerge && props.sortMerge(targetItem) && !dragStartData.value.items.some(item => item.id === targetItem.id)
  };

  // 立即更新状态
  onDragOver(targetItem, event);
}

// drag       拖拽中
// dragover   在目标元素中移动
function onDragOver(targetItem, event) {
  if (!dragTargetData.value) return;

  // 区分操作
  const { rect, index, canMerge } = dragTargetData.value;
  const deltaY = event.clientY - rect.top;
  let newState = null;
  if (canMerge) {
    // 可以合并：前10在上方，后10在下方，其余在中间
    newState = deltaY < 10 ? 'before' : deltaY > rect.height - 10 ? 'after' : 'merge';
  } else {
    // 不能合并：前半在上方，后半在下方
    newState = deltaY < rect.height / 2 ? 'before' : 'after';
  }

  // 更新数据
  dragNewData.value = {
    // 当前状态：before, after, merge
    state: newState,
    // 新的索引
    index: newState === 'before' ? index : index + 1
  };
}

// dragleave    离开目标元素
// dragend      停止拖拽
function onDragEnd() {
  const { item: dragItem, items: dragItems } = dragStartData.value;
  const { item: targetItem } = dragTargetData.value;
  const { state, index: newIndex } = dragNewData.value;
  if (state === 'merge') {
    // 合并
    emits('merge', { dragItem, dragItems, targetItem });
  } else {
    // 排序
    emits('sort', { dragItem, dragItems, targetItem, newIndex });
  }

  // 清空状态
  dragStartData.value = null;
  dragTargetData.value = null;
  dragNewData.value = null;
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
  &-header &-row {
    font-weight: bold;
  }
  &-row {
    position: relative;
    display: flex;
    font-size: 14px;
    &:hover,
    &.is-current,
    &.is-selected {
      background-color: var(--mx-table-row-active-bg-color);
    }
    &.is-draggable {
      cursor: move;
    }
    &.is-draging {
      opacity: 0.5;
    }
    &.is-merge {
      background-color: var(--mx-table-row-active-bg-color);
      opacity: 0.8;
    }
    &.is-before,
    &.is-after {
      &::after {
        position: absolute;
        right: 0;
        left: 0;
        z-index: 99;
        height: 2px;
        content: '';
        background-color: var(--mx-brand-color-default);
      }
    }
    &.is-before::after {
      top: -1px;
    }
    &.is-after::after {
      bottom: -1px;
    }
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
}
</style>
