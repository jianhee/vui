<!-- 表格-表身-行排序 -->
<template>
  <div
    :class="[{ 'is-draggable': isDraggable }, dragClass]"
    :draggable="isDraggable"
    @dragstart="onDragStart"
    @dragenter="onDragEnter"
    @dragover="onDragOver"
    @dragend="onDragEnd"
  >
    <!-- 多选 -->
    <slot />
    <!-- 内容 -->
    <div
      v-for="col in parentTable.props.colsData"
      :key="col.key"
      :class="['vui-table-cell', col.className]"
      :style="{ width: `${parentTable.colsWidth.value[col.key]}px` }"
    >
      <!-- 优先显示slot -->
      <slot
        v-if="$slots[col.key]"
        :name="col.key"
      />
      <!-- 其次显示 col.key -->
      <VRow
        v-else
        ellipsis
      >
        {{ rowData[col.key] }}
      </VRow>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';

const parentTable = inject('parentTable', null);

// 参数
const props = defineProps({
  rowData: { type: Object, default: () => {} },
  isSelected: { type: Boolean, default: false }
});

// 是否可以拖拽
const isDraggable = computed(() => parentTable.props.sortable && !parentTable.isSelecting.value);

// 拖拽相关的类名
const dragClass = computed(() => {
  if (!parentTable.dragStartData.value) return null;

  // 拖拽元素
  const isDraging = parentTable.dragStartData.value.item.id === props.rowData.id || props.isSelected;
  if (isDraging) {
    return 'is-draging';
  }

  // 目标元素
  if (parentTable.dragTargetData.value?.item.id === props.rowData.id) {
    return `is-${parentTable.dragTargetData.value?.state}`;
  }

  return null;
});

// dragstart  开始拖拽
function onDragStart() {
  if (!isDraggable.value) return;

  // 区分拖拽的项
  let items = null;
  if (props.isSelected) {
    items = parentTable.props.rowsData.filter(item => parentTable.selectFn.selectedMap.get(item.id));
  } else if (parentTable.props.selectable) {
    parentTable.selectFn.selectedMap.clear();
    parentTable.selectFn.selectedMap.set(props.rowData.id, true);
  }

  // 初始数据
  parentTable.dragStartData.value = {
    item: props.rowData,
    items: items || [props.rowData]
  };
}

// dragenter  进入目标元素
function onDragEnter(event) {
  if (!parentTable.dragStartData.value) return;

  // 初始数据
  parentTable.dragTargetData.value = {
    state: null,
    item: props.rowData,
    rect: event.currentTarget.getBoundingClientRect(),
    // 是否可以合并
    // 1.有判断方法
    // 2.目标元素不是被拖拽的项
    canMerge: parentTable.props.sortMerge && parentTable.props.sortMerge(props.rowData) && !parentTable.dragStartData.value.items.some(item => item.id === props.rowData.id)
  };

  // 立即更新状态
  onDragOver(event);
}

// drag       拖拽中
// dragover   在目标元素中移动
function onDragOver(event) {
  if (!parentTable.dragTargetData.value) return;

  // 更新状态：before, after, merge
  const { rect, canMerge } = parentTable.dragTargetData.value;
  const deltaY = event.clientY - rect.top;

  if (canMerge) {
    // 可以合并：前10在上方，后10在下方，其余在中间
    parentTable.dragTargetData.value.state = deltaY < 10 ? 'before' : deltaY > rect.height - 10 ? 'after' : 'merge';
  } else {
    // 不能合并：前半在上方，后半在下方
    parentTable.dragTargetData.value.state = deltaY < rect.height / 2 ? 'before' : 'after';
  }
}

// dragleave    离开目标元素
// dragend      停止拖拽
function onDragEnd() {
  if (!parentTable.dragTargetData.value) return;

  const { item: dragItem, items: dragItems } = parentTable.dragStartData.value;
  const { item: targetItem, state } = parentTable.dragTargetData.value;

  // 新的索引
  const index = parentTable.props.rowsData.findIndex(item => item.id === targetItem.id);
  const newIndex = state === 'before' ? index : index + 1;

  // 触发事件
  const type = state === 'merge' ? 'merge' : 'sort';
  parentTable.emits(type, { dragItem, dragItems, targetItem, state, newIndex });

  // 清空状态
  parentTable.dragStartData.value = null;
  parentTable.dragTargetData.value = null;
}
</script>
