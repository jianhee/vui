// 表格
import { ref, computed, watchEffect } from 'vue';
import { useStorage, useEventListener, useIntersectionObserver } from '@vueuse/core';
import { addUnit } from '../../../utils';

// emits
export const tableEmits = ['row-contextmenu'];

// props
export const tableProps = {
  // 表格高度：不带单位时默认 `px`
  // 必须使用表格属性或 CSS 限制高度，否则会渲染全部数据
  tableHeight: { type: [String, Number], default: null },
  // 行数据 `Array[Object]`
  //  1. `id` 行唯一标识，必填
  rowItems: { type: Array, default: null },
  // 行高：用于计算虚拟列表的显示内容
  rowHeight: { type: Number, default: 35 },
  // 当前行 `id`，用于高亮当前行
  currentRowId: { type: [String, Number], default: null },
  // 自定义行属性的方法
  //  1. 示例 `row => ({ key: value, ... })`
  //  2. 参数为当前行，返回一个对象，使用 `v-bind` 绑定到行元素
  customRow: { type: Function, default: null },
  // 列数据 `Array[Object]`
  //  1. `key` 列唯一标识，单元格默认显示 `row[col.key]` 的值
  //  2. `title` 列标题
  //  3. `width` 列宽，默认根据列数量平分
  //  4. `cellClass` 单元格类名
  colItems: { type: Array, required: true },
  // 是否可以调整列宽
  colResizable: { type: Boolean, default: false },
  // 如果需要记住调整后的列宽，需要设置一个键名
  colWidthsStorageKey: { type: String, default: null }
};

// 使用表格
export const useTable = ({ tableEl, tbodyEl, props, dragFlag }) => {
  // 根元素类名
  const rootClasses = computed(() => {
    return ['vui-table', { 'is-dragging': !!dragFlag.value }];
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
    const scrollLeft = Math.floor(event.target.scrollLeft);
    headerStyles.value.transform = `translateX(-${scrollLeft}px)`;
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
    rootStyles,
    headerStyles,
    colMinWidth,
    colWidths
  };
};
