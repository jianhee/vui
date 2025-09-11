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
    const children = itemData.value.children?.filter(item => treeRoot.props.filterMethod({ item }));
    const hasChildren = !!children?.length;

    // 使用方法判断
    if (treeRoot.props.isLeaf) {
      if (nodeData.value.isLeaf) {
        return nodeData.value.isLoaded ? hasChildren : true;
      } else {
        return false;
      }
    }

    // 使用子集判断
    return hasChildren;
  });

  // 展开图标
  const expandIconRotate = computed(() => (nodeData.value.isExpanded ? 90 : null));

  // 展开/关闭子节点
  async function toggleChildren() {
    if (!isShowExpand.value) return;

    const { isExpanded, isLeaf, isLoaded } = nodeData.value;

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

    // 展开/关闭节点
    toggleChildren();
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
    paddingLeft: `${treeRoot.props.treeIndent + treeRoot.props.nodeIndent * nodeData.value.level}px`
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
