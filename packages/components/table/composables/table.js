// 表格
import { ref, computed, inject, watchEffect } from 'vue';
import { useStorage, useEventListener, useIntersectionObserver } from '@vueuse/core';
import { addUnit } from '../../../utils';

// table emits
export const tableEmits = ['row-contextmenu'];

// table props
export const tableProps = {
  // 表格高度：不带单位时默认 `px`，或者用 CSS 限制高度，否则会渲染全部数据
  tableHeight: { type: [Number, String], default: null },
  // 行数据 `[Object]`
  //  1. `id` 行唯一标识
  //  2. `xxx` 行自定义字段
  rowItems: { type: Array, default: null },
  // 行高：用于计算虚拟列表的显示内容
  rowHeight: { type: Number, default: 35 },
  // 当前行 `id`，设置后高亮当前行
  currentRowId: { type: [Number, String], default: null },
  // 自定义行属性的方法
  //  1. 示例 `row => ({ key: value, ... })`
  //  2. 参数为当前行数据
  //  3. 返回一个可以使用 `v-bind` 绑定到行元素的值
  customRow: { type: Function, default: null },
  // 列数据 `[Object]`
  //  1. `Object.key` 列唯一标识，单元格默认显示 `row[col.key]` 的值
  //  2. `Object.title` 列标题
  //  3. `Object.width` 列宽，默认根据列数量平分
  //  4. `Object.cellClass` 单元格类名
  colItems: { type: Array, required: true },
  // 是否可以调整列宽
  colResizable: { type: Boolean, default: false },
  // 列宽本地存储的 `key`
  colWidthsStorageKey: { type: String, default: null }
};

// table-row props
export const tableRowProps = {
  rowData: { type: Object, required: true }
};

// table-cell props
export const tableCellProps = {
  rowData: { type: Object, required: true },
  colData: { type: Object, required: true }
};

// 使用表格
export const useTable = ({ props, tableEl, tbodyEl }) => {
  // 是否正在拖拽
  const isDragging = ref(false);

  // 根元素类名
  const rootClasses = computed(() => {
    return [
      'vui-table',
      {
        'is-draging': isDragging.value
      }
    ];
  });

  // 根元素样式
  const rootStyles = computed(() => {
    return {
      'height': addUnit(props.tableHeight, 'px'),
      '--vui-table-row-height': `${props.rowHeight}px`
    };
  });

  // 表身滚动时带动表头
  const headerStyles = ref({ transform: null });
  useEventListener(tbodyEl, 'scroll', event => {
    headerStyles.value.transform = `translateX(-${event.target.scrollLeft}px)`;
  });

  // 计算平均列宽
  const colMinWidth = 50;
  const colAutoWidth = ref(0);
  const { stop } = useIntersectionObserver(tableEl, ([entry]) => {
    if (entry?.isIntersecting) {
      const colMaxWidth = Math.floor((tableEl.value.offsetWidth - 100) / props.colItems.length);
      colAutoWidth.value = Math.max(colMinWidth, colMaxWidth);
      stop();
    }
  });

  // 计算当前列宽
  const colWidths = props.colWidthsStorageKey ? useStorage(props.colWidthsStorageKey, {}) : ref({});
  watchEffect(() => {
    colWidths.value = props.colItems.reduce((acc, col) => {
      acc[col.key] = colWidths.value[col.key] || col.width || colAutoWidth.value;
      return acc;
    }, {});
  });

  return {
    rootClasses,
    colMinWidth,
    colWidths,
    rootStyles,
    headerStyles
  };
};

// 使用表格行
export const useTableRow = ({ props }) => {
  const tableRoot = inject('tableRoot', null);

  // 获取类名
  const rowClasses = computed(() => {
    return [
      'vui-table-row',
      {
        'is-current': props.rowData?.id === tableRoot.props.currentRowId
      }
    ];
  });

  // 自定义行属性
  const customRowAttrs = computed(() => {
    return tableRoot.props.customRow?.(props.rowData);
  });

  // 右键点击节点
  function onRowContextmenu(event) {
    tableRoot.emits('row-contextmenu', {
      row: props.rowData,
      event
    });
  }

  return {
    rowClasses,
    customRowAttrs,
    onRowContextmenu
  };
};

// 使用单元格
export const useTableCell = ({ props }) => {
  const tableRoot = inject('tableRoot', null);

  // 获取类名
  const cellClasses = computed(() => {
    return ['vui-table-cell', props.colData.cellClass];
  });

  // 获取样式
  const cellStyles = computed(() => {
    return {
      width: `${tableRoot.colWidths.value[props.colData.key]}px`
    };
  });

  return {
    cellClasses,
    cellStyles
  };
};
