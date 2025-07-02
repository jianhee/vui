<!-- 树-节点 -->
<template>
  <div
    :class="['vui-tree-node', nodeClasses, dragClasses]"
    :style="nodeStyles"
    :draggable="treeRoot.props.dragSortable"
    @dragstart.stop="onDragStart"
    @dragend.stop="onDragEnd"
    @dragenter.stop="onDragEnter"
    @dragover.stop.prevent="onDragOver"
    @drop.stop="onDrop"
    @click="onNodeClick"
    @contextmenu.prevent="onNodeContextmenu"
  >
    <!-- 折叠图标 -->
    <VIcon
      v-if="hasChildren"
      :component="IconExpand"
      :rotate="expandIconRotate"
      @click.stop="toggleExpand(!nodeData.isExpanded)"
    />
    <!-- 占位图标 -->
    <VIcon v-else />
    <!-- 节点内容 -->
    <slot />
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
import IconExpand from '../../icons/tree-arrow.vue';
import IconDrag from '../../icons/drag.vue';

// 树
const treeRoot = inject('treeRoot', null);

// 树节点
const props = defineProps(treeNodeProps);

// 使用树节点
const { hasChildren, expandIconRotate, toggleExpand, onNodeClick, onNodeContextmenu, nodeClasses, nodeStyles } = useTreeNode({
  treeRoot,
  treeNode: { props }
});

// 使用拖拽排序
const { dragClasses, onDragStart, onDragEnter, onDragOver, onDrop, onDragEnd } = useDragSortItem({
  dragFlagRef: treeRoot.dragFlagRef,
  dragSortable: treeRoot.props.dragSortable,
  canDropInto: treeRoot.props.canDropInto,
  rawItem: props.nodeData,
  // rawItemsRef: treeRoot.treeDataRef,
  selectedItemsRef: computed(() => null),
  emits: treeRoot.emits
});
</script>
