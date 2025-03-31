<!-- 表格组件：支持虚拟列表、固定表头、拖拽调整列宽、多选 -->
<template>
  <div
    ref="tableRef"
    class="mx-table"
    :style="{ height: height }"
  >
    <!-- 固定表头 -->
    <div
      class="mx-table-fixedbar"
      :style="fixedbarStyles"
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
          <MxCheckbox v-model:checked="selectedAll" />
        </div>
        <!-- 拖拽调整宽度 -->
        <MxDragbox
          v-for="col in columns"
          :key="col.key"
          v-model:width="tableColsWidth[col.key]"
          :min-width="100"
          :resizable="['right']"
          class="mx-table-cell"
        >
          {{ col.title }}
        </MxDragbox>
      </div>
    </div>

    <!-- 滚动区域 -->
    <div
      v-bind="scrollbarProps"
      class="mx-table-scrollbar"
      @scroll="onScroll"
    >
      <!-- 虚拟列表区域 -->
      <div
        class="mx-table-body"
        v-bind="bodyProps"
      >
        <!-- 行 -->
        <div
          v-for="{ data: row } in virtualList"
          :key="row.id"
          class="mx-table-row"
          :class="{
            'is-current': row.id === currentId,
            'is-selected': row.isSelected
          }"
          @contextmenu.prevent="onRowContextmenu(row, $event)"
        >
          <!-- 复选框 -->
          <div
            v-if="selectable"
            class="mx-table-cell is-checkbox"
          >
            <MxCheckbox
              v-model:checked="row.isSelected"
              @change="onRowSelected(row, $event)"
            />
          </div>
          <!-- 内容：slot优先 -->
          <div
            v-for="col in columns"
            :key="col.key"
            class="mx-table-cell"
            :class="col.className"
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
import { ref, computed, watch, useSlots, onMounted } from 'vue';
import { useVirtualList, useStorage } from '@vueuse/core';

const slots = useSlots();
const emits = defineEmits(['row-contextmenu', 'selection-change']);

const props = defineProps({
  // 高度
  height: { type: String, default: null },
  // 行数据
  rows: { type: Array, default: null },
  // 列数据： { key: 'key', title: 'title', width: 300 },
  columns: { type: Array, default: null },
  // 当前 ID
  currentId: { type: Number, default: null },
  // 是否可选择
  selectable: { type: Boolean, default: false },
  // 列宽本地存储的 key
  storageKey: { type: String, default: null }
});

// 保存选中状态
const selectedMap = ref(new Map());

// 格式化行
const formattedRows = ref([]);
const formatRows = data => {
  return data?.map(item => {
    return {
      ...item,
      isSelected: selectedMap.value.get(item.id)
    };
  });
};

// 数据变化时重新处理数据
watch(
  () => props.rows,
  newData => {
    formattedRows.value = formatRows(newData);
  },
  { immediate: true }
);

// 虚拟列表
const overscan = 5;
const itemHeight = 35;
const {
  list: virtualList,
  containerProps: scrollbarProps,
  wrapperProps: bodyProps
} = useVirtualList(formattedRows, {
  itemHeight,
  overscan
});

// 单选
const onRowSelected = (item, newState) => {
  selectedMap.value.set(item.id, newState);
  const items = formattedRows.value.filter(item => item.isSelected);
  emits('selection-change', items);
};

// 全选
const selectedAll = computed({
  get: () => formattedRows.value.length > 0 && formattedRows.value.every(item => item.isSelected),
  set: newState => {
    formattedRows.value.forEach(item => {
      item.isSelected = newState;
      selectedMap.value.set(item.id, newState);
    });
    const items = newState ? [...formattedRows.value] : [];
    emits('selection-change', items);
  }
});

// 右键点击节点
function onRowContextmenu(item, event) {
  emits('row-contextmenu', item, event);
}

// 表格列宽度
const tableRef = ref(null);
const tableColsWidth = props.storageKey ? useStorage(`mx-${props.storageKey}-cols-width`, {}) : ref({});
onMounted(() => {
  if (Object.keys(tableColsWidth.value).length) return;
  const colWidth = (tableRef.value.clientWidth - 50) / props.columns.length;
  tableColsWidth.value = props.columns.reduce((map, col) => {
    map[col.key] = col.width || colWidth;
    return map;
  }, {});
});

// 表头滚动
const fixedbarStyles = ref(null);
function onScroll(event) {
  fixedbarStyles.value = {
    transform: `translateX(-${event.target.scrollLeft}px)`
  };
}
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-table {
  display: flex;
  flex: auto;
  flex-direction: column;
  overflow: hidden;
  &-fixedbar {
    flex: none;
  }
  &-scrollbar {
    flex: auto;
  }
  &-row {
    display: flex;
    font-size: 14px;
  }
  &-cell {
    display: inline-flex;
    flex: none;
    gap: 4px;
    align-items: center;
    height: 35px;
    padding: 0 8px;
    white-space: nowrap;
  }
  // 表头加粗
  &-fixedbar &-row {
    font-weight: bold;
  }
  // 表身状态
  &-scrollbar &-row:hover,
  &-scrollbar &-row.is-current {
    background-color: var(--mx-table-row-active-bg-color);
  }
  // 是否显示复选框
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
  // 是否显示拖拽手柄
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
}
</style>
