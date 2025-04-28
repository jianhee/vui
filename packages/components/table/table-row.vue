<!-- 表格-行 -->
<template>
  <component
    :is="type === 'head' ? TheadResize : TbodySort"
    v-bind="rowProps"
    :row-data="rowData"
    :is-selected="isSelected"
    :class="rowClasses"
    @contextmenu.prevent="onRowContextmenu"
  >
    <!-- 多选列 -->
    <div
      v-if="parentTable.props.selectable"
      class="vui-table-cell"
      style="width: 30px"
    >
      <VCheckbox
        class="vui-table-checkbox"
        :checked="isSelected"
        @change="toggleSelected"
      />
    </div>
    <!-- 自定义列：name 和 col.key 一致 -->
    <template
      v-for="(_, name) in $slots"
      #[name]
    >
      <slot :name="name" />
    </template>
  </component>
</template>

<script setup>
import { computed, inject } from 'vue';
import TheadResize from './thead-resize.vue';
import TbodySort from './tbody-sort.vue';

// 共享数据
const parentTable = inject('parentTable', null);

// 参数
const props = defineProps({
  // 类型: head | body
  type: { type: String, default: 'head' },
  // 行数据
  rowData: { type: Object, default: null }
});

// 获取类名
const rowClasses = computed(() => {
  return [
    'vui-table-row',
    {
      'is-current': props.rowData?.id === parentTable.props.currentRowId,
      'is-selected': isSelected.value
    }
  ];
});

// 行自定义属性
const rowProps = computed(() => {
  if (props.type === 'body' && parentTable.props.rowProps) {
    return parentTable.props.rowProps(props.rowData);
  }
  return null;
});

// 是否选中
const isSelected = computed(() => {
  if (!parentTable.props.selectable) return null;
  if (props.type === 'head') {
    return parentTable.selectFn.isAllSelected.value;
  } else {
    return parentTable.selectFn.isRowSelected(props.rowData.id);
  }
});

// 切换选中
function toggleSelected() {
  const newState = !isSelected.value;
  if (props.type === 'head') {
    return parentTable.selectFn.toggleAllSelected(newState);
  } else {
    return parentTable.selectFn.toggleRowSelected(props.rowData.id, newState);
  }
}

// 右键点击节点
function onRowContextmenu(event) {
  if (props.type === 'head') return;
  parentTable.emits('row-contextmenu', props.rowData, event);
}
</script>
