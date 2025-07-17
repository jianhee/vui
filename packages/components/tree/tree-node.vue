<!-- 树-节点 -->
<template>
  <div
    :class="['vui-tree-node', nodeClasses, dragClasses]"
    :style="nodeStyles"
    :draggable="treeRoot.props.dragSortable"
    v-bind="customNodeAttrs"
    @dragstart.stop="onDragStart"
    @dragend.stop="onDragEnd"
    @dragenter.stop="onDragEnter"
    @dragover.stop.prevent="onDragOver"
    @drop.stop="onDrop"
    @click="onNodeClick"
    @contextmenu.prevent="onNodeContextmenu"
  >
    <!-- 加载状态 -->
    <VIcon
      v-if="nodeData.isLoading"
      :component="IconLoading"
      :spin="true"
    />
    <!-- 折叠图标 -->
    <VIcon
      v-else-if="isShowExpand"
      :component="IconExpand"
      v-bind="expandIconProps"
      @click.stop="toggleChildren"
    />
    <!-- 占位符 -->
    <div
      v-else
      class="vui-tree-node-placeholder"
    />
    <!-- 优先显示 slot -->
    <slot v-if="$slots.default" />
    <!-- 其次显示 title -->
    <div
      v-else
      class="vui-tree-node-inner"
      :title="nodeData.data.title"
    >
      {{ nodeData.data.title }}
    </div>
    <!-- 排序 -->
    <div
      v-if="treeRoot.props.dragSortable"
      class="vui-tree-node--action"
    >
      <VIcon
        :component="IconDrag"
        class="vui-tree-drag-handle"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';
import { useTreeNode, treeNodeProps } from './composables/tree-node';
import { useDragSortItem } from '../table/composables/drag-sort';
import IconLoading from '../../icons/loading-loop.vue';
import IconExpand from '../../icons/tree-arrow.vue';
import IconDrag from '../../icons/drag.vue';

// 树
const treeRoot = inject('treeRoot', null);

// 树节点
const props = defineProps(treeNodeProps);

// 使用树节点
const { isShowExpand, expandIconProps, toggleChildren, onNodeClick, onNodeContextmenu, nodeClasses, nodeStyles, customNodeAttrs } = useTreeNode({
  treeRoot,
  treeNode: { props }
});

// 使用拖拽排序
const { dragClasses, onDragStart, onDragEnter, onDragOver, onDrop, onDragEnd } = useDragSortItem({
  dragFlagRef: treeRoot.dragFlagRef,
  dragSortable: treeRoot.props.dragSortable,
  canDropInto: treeRoot.props.canDropInto,
  rawItem: props.itemData,
  // rawItemsRef: treeRoot.treeDataRef,
  selectedItemsRef: computed(() => null),
  emits: treeRoot.emits
});
</script>
