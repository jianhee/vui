<!-- 表格-鼠标框选 -->
<template>
  <div
    v-if="parentTable.isSelecting.value"
    :style="selectboxStyles"
    class="vui-table-selectbox"
  />
</template>

<script setup>
import { ref, computed, inject } from 'vue';

// 共享数据
const parentTable = inject('parentTable', null);

// 框选区域
let tbodyRect = null;
let viewRect = null;

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

// 开始框选
function onSelectStart(e) {
  if (!parentTable.props.selectable) return;
  parentTable.isSelecting.value = true;

  // 清空选择
  parentTable.selectFn.toggleAllSelected(false);

  // 重新开始选择
  viewRect = parentTable.viewRef.value.getBoundingClientRect();
  tbodyRect = parentTable.tbodyRef.value.getBoundingClientRect();

  // 记录初始数据
  selectboxStartPos.value = {
    x: e.clientX - tbodyRect.x,
    y: e.clientY - tbodyRect.y + parentTable.tbodyRef.value.scrollTop
  };
  selectboxCurrentPos.value = { ...selectboxStartPos.value };

  window.addEventListener('mousemove', onSelectMove);
  window.addEventListener('mouseup', onSelectionStop);
}

// 框选中
function onSelectMove(e) {
  if (!parentTable.isSelecting.value) return;

  // 选择框当前位置：不能超出父元素
  const { scrollTop } = parentTable.tbodyRef.value;
  selectboxCurrentPos.value = {
    x: Math.max(0, Math.min(e.clientX - tbodyRect.x, tbodyRect.width)),
    y: Math.max(0, Math.min(e.clientY - tbodyRect.y + scrollTop, tbodyRect.height + scrollTop))
  };

  checkSelectedRows();
}

// 结束框选
function onSelectionStop() {
  parentTable.isSelecting.value = false;

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
  parentTable.props.rowsData.forEach((row, index) => {
    // 当前行的位置
    const rowRect = {
      x1: parentTable.props.selectAreaWidth,
      x2: parentTable.props.selectAreaWidth + viewRect.width,
      y1: parentTable.props.rowHeight * index,
      y2: parentTable.props.rowHeight * (index + 1)
    };

    // X轴是否包含
    const isInX = rowRect.x1 < selectboxRect.x2 && rowRect.x2 > selectboxRect.x1;
    // Y轴是否包含
    const isInY = rowRect.y1 < selectboxRect.y2 && rowRect.y2 > selectboxRect.y1;

    // 更新选中状态
    parentTable.selectFn.toggleRowSelected(row.id, isInX && isInY);
  });
}

defineExpose({ onSelectStart });
</script>
