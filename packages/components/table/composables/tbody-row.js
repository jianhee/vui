// 表身-行
import { computed } from 'vue';

// props
export const tbodyRowProps = {
  // 当前行
  rowData: { type: Object, required: true }
};

// 使用行
export const useTbodyRow = ({ tableRoot, tbodyRow }) => {
  // 行类名
  const rowClasses = computed(() => {
    return { 'is-current': tbodyRow.props.rowData?.id === tableRoot.props.currentRowId };
  });

  // 行自定义属性
  const customRowAttrs = computed(() => {
    return tableRoot.props.customRow?.(tbodyRow.props.rowData);
  });

  // 右键点击行
  function onRowContextmenu(event) {
    // 参数为 事件对象、当前行
    tableRoot.emits('row-contextmenu', {
      event,
      row: tbodyRow.props.rowData
    });
  }

  return {
    rowClasses,
    customRowAttrs,
    onRowContextmenu
  };
};
