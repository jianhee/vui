// 表身-单元格
import { computed } from 'vue';

// props
export const tbodyCellProps = {
  // 当前行
  rowData: { type: Object, required: true },
  // 当前列
  colData: { type: Object, required: true }
};

// 使用单元格
export const useTbodyCell = ({ tableRoot, tbodyCell }) => {
  // 单元格类名
  const cellClasses = computed(() => {
    return ['vui-table-cell', tbodyCell.props.colData.cellClass];
  });

  // 单元格类名
  const cellStyles = computed(() => {
    return {
      width: `${tableRoot.colWidthsRef.value[tbodyCell.props.colData.key]}px`
    };
  });

  return {
    cellClasses,
    cellStyles
  };
};
