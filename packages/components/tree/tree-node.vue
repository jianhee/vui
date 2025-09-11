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
    <div class="vui-tree-node-placeholder">
      <!-- 加载状态 -->
      <VIcon
        v-if="nodeData.isLoading"
        class="vui-tree-node-loading"
        :icon="IconLoading"
        :spin="true"
      />
      <!-- 展开图标 -->
      <VIcon
        v-else-if="isShowExpand"
        class="vui-tree-node-expand"
        :icon="IconExpand"
        :rotate="expandIconRotate"
        @click.stop="toggleChildren"
      />
    </div>
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
      class="vui-tree-node-action"
    >
      <VIcon
        :icon="IconDrag"
        class="vui-tree-node-drag-handle"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';
import { useTreeNode, treeNodeProps } from './composables/tree-node';
import { useDragSortItem } from '../table/composables/drag-sort';
import IconLoading from '../../icons/loading.vue';
import IconExpand from '../../icons/caret-right.vue';
import IconDrag from '../../icons/drag.vue';

// 树
const treeRoot = inject('vuiTreeRoot', null);

// 树节点
const props = defineProps(treeNodeProps);

// 使用树节点
const { isShowExpand, expandIconRotate, toggleChildren, onNodeClick, onNodeContextmenu, nodeClasses, nodeStyles, customNodeAttrs } = useTreeNode({
  treeRoot,
  treeNode: { props }
});

// 使用拖拽排序
const { dragClasses, onDragStart, onDragEnter, onDragOver, onDrop, onDragEnd } = useDragSortItem({
  dragFlagRef: treeRoot.dragFlagRef,
  dragSortable: treeRoot.props.dragSortable,
  canDropInto: treeRoot.props.canDropInto,
  idKey: 'id',
  rawItem: props.itemData,
  // rawItemsRef: treeRoot.treeDataRef,
  selectedItemsRef: computed(() => null),
  emits: treeRoot.emits
});
</script>
