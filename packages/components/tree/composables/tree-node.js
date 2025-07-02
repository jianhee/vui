// 树-节点
import { computed } from 'vue';

// props
export const treeNodeProps = {
  // 节点数据
  nodeData: { type: Object, required: true }
};

// 使用树节点
export const useTreeNode = ({ treeRoot, treeNode }) => {
  // 是否当前节点
  const isCurrentNode = computed(() => treeNode.props.nodeData.id === treeRoot.props.currentNodeId);

  // 是否有子集
  const hasChildren = computed(() => {
    return treeNode.props.nodeData.children?.length;
  });

  // 展开图标
  const expandIconRotate = computed(() => {
    return treeNode.props.nodeData.isExpanded ? 0 : -90;
  });

  // 点击展开图标
  const toggleExpand = newState => {
    treeRoot.expandIdMap.set(treeNode.props.nodeData.id, newState);
  };

  // 左键点击节点
  function onNodeClick(event) {
    // 展开节点
    if (hasChildren.value && !treeNode.props.nodeData.isExpanded) {
      toggleExpand(true);
    }
    // 点击事件
    treeRoot.emits('node-click', {
      event,
      node: treeNode.props.nodeData
    });
  }

  // 右键点击节点
  function onNodeContextmenu(event) {
    treeRoot.emits('node-contextmenu', {
      event,
      node: treeNode.props.nodeData
    });
  }

  // 节点类名
  const nodeClasses = computed(() => ({
    'is-current': isCurrentNode.value
  }));

  // 节点样式
  const nodeStyles = computed(() => ({
    paddingLeft: `${treeRoot.props.treeIndent + treeRoot.props.nodeIndent * treeNode.props.nodeData.level}px`
  }));

  return {
    hasChildren,
    expandIconRotate,
    toggleExpand,
    onNodeClick,
    onNodeContextmenu,
    nodeClasses,
    nodeStyles
  };
};
