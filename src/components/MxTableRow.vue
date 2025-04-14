<!-- 表格行 -->
<template>
  <div
    :title="rowTitle"
    :class="[{ 'is-selected': isSelected, 'is-draggable': isDraggable }, dragClass]"
    class="mx-table-row"
    :draggable="isDraggable"
    @dragstart="onDragStart"
    @dragenter.prevent="onDragEnter"
    @dragover.prevent="onDragOver"
    @dragend="onDragEnd"
  >
    <!-- 复选框 -->
    <div
      v-if="tableProps.selectable"
      class="mx-table-cell is-checkbox"
    >
      <MxCheckbox
        :checked="isSelected"
        @change="toggleSelected"
      />
    </div>
    <!-- 内容：slot优先 -->
    <div
      v-for="col in tableProps.colsData"
      :key="col.key"
      class="mx-table-cell"
      :class="col.cellClassName"
      :style="{ width: `${colsWidth[col.key]}px` }"
    >
      <!-- 优先显示slot -->
      <slot
        v-if="slots[col.key]"
        :name="col.key"
      />
      <MxRow
        v-else
        ellipsis
      >
        {{ rowData[col.key] }}
      </MxRow>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, useSlots } from 'vue';

const slots = useSlots();

// 参数
const props = defineProps({
  rowData: { type: Object, default: () => {} }
});

// 共享数据
const tableProps = inject('tableProps');
const colsWidth = inject('colsWidth');
const selectedMap = inject('selectedMap');
const isSelecting = inject('isSelecting');
const dragStartData = inject('dragStartData');
const dragTargetData = inject('dragTargetData');
const dragNewData = inject('dragNewData');
const dragEnd = inject('dragEnd');

// 行title
const rowTitle = computed(() => {
  return tableProps.rowTitle ? tableProps.rowTitle(props.rowData) : null;
});

// 是否选中
const isSelected = computed(() => {
  if (!tableProps.selectable) return false;
  return selectedMap.get(props.rowData.id);
});

// 切换选中
function toggleSelected(newState) {
  if (!tableProps.selectable) return;
  selectedMap.set(props.rowData.id, newState);
}

// 是否可以拖拽
const isDraggable = computed(row => {
  return (tableProps.sortable && !isSelecting.value) || null;
});

// 当前行拖拽相关的类名
const dragClass = computed(() => {
  if (!dragStartData.value) return null;

  // 拖拽元素
  const isDraging = dragStartData.value.item.id === props.rowData.id || isSelected.value;
  if (isDraging) {
    return 'is-draging';
  }

  // 目标元素
  if (dragTargetData.value?.item.id === props.rowData.id) {
    return `is-${dragNewData.value?.state}`;
  }

  return null;
});

// 拖拽排序
// dragstart  开始拖拽
function onDragStart() {
  // 区分拖拽的项
  let items = null;
  if (isSelected.value) {
    items = tableProps.rowsData.filter(item => selectedMap.get(item.id));
  } else if (tableProps.selectable) {
    selectedMap.clear();
    selectedMap.set(props.rowData.id, true);
  }

  // 初始数据
  dragStartData.value = {
    item: props.rowData,
    items: items || [props.rowData]
  };

  console.log('dragstart', dragStartData.value);
}

// dragenter  进入目标元素
function onDragEnter(event) {
  // 初始数据
  dragTargetData.value = {
    item: props.rowData,
    index: tableProps.rowsData.findIndex(item => item.id === props.rowData.id),
    rect: event.currentTarget.getBoundingClientRect(),
    // 是否可以合并
    // 1.有判断方法
    // 2.目标元素不是被拖拽的项
    canMerge: tableProps.sortMerge && tableProps.sortMerge(props.rowData) && !dragStartData.value.items.some(item => item.id === props.rowData.id)
  };

  console.log('dragenter', dragTargetData.value);

  // 立即更新状态
  onDragOver(props.rowData, event);
}

// drag       拖拽中
// dragover   在目标元素中移动
function onDragOver(event) {
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

  console.log('dragover', dragNewData.value);
}

// dragleave    离开目标元素
// dragend      停止拖拽
function onDragEnd() {
  console.log('dragend', dragNewData.value);

  const { item: dragItem, items: dragItems } = dragStartData.value;
  const { item: targetItem } = dragTargetData.value;
  const { state, index: newIndex } = dragNewData.value;
  const type = state === 'merge' ? 'merge' : 'sort';
  dragEnd(type, { dragItem, dragItems, targetItem, state, newIndex });

  // 清空状态
  dragStartData.value = null;
  dragTargetData.value = null;
  dragNewData.value = null;
}
</script>
