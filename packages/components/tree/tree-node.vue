<!-- 树-节点 -->
<template>
  <div
    :class="nodeClasses"
    :style="nodeStyles"
    @click="onNodeClick"
    @contextmenu.prevent="onNodeContextmenu"
  >
    <!-- 折叠图标 -->
    <VIcon
      :component="IconArrow"
      :size="16"
      :rotate="expandIconRotate"
      :class="expandIconClass"
      @click.stop="toggleExpand"
    />
    <slot />
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';
import IconArrow from '../../icons/tree-arrow.vue';

// 共享数据
const parentTree = inject('parentTree', null);

// 参数
const props = defineProps({
  // 节点
  node: { type: Object, required: true }
});

// 获取类名
const nodeClasses = computed(() => {
  return ['vui-tree-node', { 'is-current': props.node.id === parentTree.props.currentNodeId }];
});

// 获取样式
const nodeStyles = computed(() => {
  return {
    paddingLeft: `${parentTree.props.treeIndent + parentTree.props.nodeIndent * props.node.level}px`
  };
});

// 左键点击节点
function onNodeClick(event) {
  if (props.node.children?.length) {
    toggleExpand(props.node);
  }
  if (props.node.id !== parentTree.props.currentNodeId) {
    parentTree.emits('node-click', props.node, event);
  }
}

// 右键点击节点
function onNodeContextmenu(event) {
  parentTree.emits('node-contextmenu', props.node, event);
}

// 是否展开节点
const isExpand = computed(() => {
  return parentTree.expandedMap.get(props.node.id);
});

// 切换展开状态
const toggleExpand = () => {
  const newState = !isExpand.value;
  parentTree.expandedMap.set(props.node.id, newState);
};

// 展开图标
const expandIconClass = computed(() => {
  return { 'vui-tree-hidden': !props.node.children?.length };
});
const expandIconRotate = computed(() => {
  return isExpand.value ? 0 : -90;
});
</script>
