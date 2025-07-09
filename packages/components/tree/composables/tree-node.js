// 树-节点
import { computed } from 'vue';

// props
export const treeNodeProps = {
  // 节点数据
  nodeData: { type: Object, required: true },
  // 原始数据
  itemData: { type: Object, required: true }
};

// 使用树节点
export const useTreeNode = ({ treeRoot, treeNode }) => {
  const nodeData = computed(() => treeNode.props.nodeData);
  const itemData = computed(() => treeNode.props.itemData);

  // 是否当前节点
  const isCurrentNode = computed(() => {
    return itemData.value.id === treeRoot.props.currentNodeId;
  });

  // 是否显示折叠按钮
  const isShowExpand = computed(() => {
    // 未加载的叶子节点
    if (nodeData.value.isLeaf && !nodeData.value.isLoaded) return true;

    // 是否有子集
    const children = itemData.value.children?.filter(item => treeRoot.props.dataFilter?.(item) !== false);
    return children?.length;
  });

  // 展开图标状态
  const expandIconRotate = computed(() => {
    return nodeData.value.isExpanded ? 0 : -90;
  });

  // 展开/关闭子节点
  async function toggleChildren() {
    const { isLeaf, isExpanded, isLoaded } = nodeData.value;

    if (!isExpanded && isLeaf && !isLoaded) {
      // 异步打开
      treeRoot.loadChildren(nodeData.value);
    } else {
      // 直接打开/关闭
      treeRoot.nodeMap.set(itemData.value.id, { ...nodeData.value, isExpanded: !isExpanded });
    }
  }

  // 左键点击节点
  function onNodeClick(event) {
    // 点击事件
    treeRoot.emits('node-click', {
      event,
      node: nodeData.value,
      item: itemData.value
    });

    // 展开节点
    if (isShowExpand.value && !nodeData.value.isExpanded) {
      toggleChildren(nodeData.value);
    }
  }

  // 右键点击节点
  function onNodeContextmenu(event) {
    treeRoot.emits('node-contextmenu', {
      event,
      node: nodeData.value,
      item: itemData.value
    });
  }

  // 节点类名
  const nodeClasses = computed(() => ({
    'is-current': isCurrentNode.value
  }));

  // 节点样式
  const nodeStyles = computed(() => ({
    paddingLeft: `${treeRoot.props.treeIndent + treeRoot.props.nodeIndent * nodeData.value.level}px`,
    paddingRight: treeRoot.props.dragSortable ? '35px' : null
  }));

  // 行自定义属性
  const customNodeAttrs = computed(() => {
    return treeRoot.props.customNode?.({
      node: nodeData.value,
      item: itemData.value
    });
  });

  return {
    isShowExpand,
    expandIconRotate,
    toggleChildren,
    onNodeClick,
    onNodeContextmenu,
    nodeClasses,
    nodeStyles,
    customNodeAttrs
  };
};
