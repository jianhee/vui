// 表格
import { ref, computed, watchEffect } from 'vue';
import { useStorage, useEventListener, useIntersectionObserver } from '@vueuse/core';
import { addUnit } from '../../../utils';

// emits
export const tableEmits = ['row-contextmenu'];

// props
export const tableProps = {
  // ---------- 表格属性 ----------
  // 表格高度：不带单位时默认 `px`
  // 必须使用此属性或 CSS 限制高度，否则会渲染全部数据
  tableHeight: { type: [String, Number], default: null },
  // ---------- 行属性 ----------
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
  // ---------- 列属性 ----------
  // 列数据 `Array[Object]`
  //  1. `key` 列唯一标识，默认使用 `row[col.key]` 的值渲染单元格内容
  //  2. `title` 列标题
  //  3. `width` 列宽，默认根据列数量平分
  //  4. `cellClass` 单元格类名
  colItems: { type: Array, required: true },
  // 是否可以调整列宽
  colResizable: { type: Boolean, default: true },
  // 如果需要记住调整后的列宽，需要设置一个键名
  colWidthsStorageKey: { type: String, default: null }
};

// 使用表格
export const useTable = ({ tableElRef, tbodyElRef, props }) => {
  // 根元素样式
  const rootStyles = computed(() => {
    return {
      'height': addUnit(props.tableHeight, 'px'),
      '--vui-table-row-height': `${props.rowHeight}px`
    };
  });

  // 表身滚动时带动表头
  const headerStyles = ref({ transform: null });
  useEventListener(tbodyElRef, 'scroll', event => {
    const scrollLeft = Math.floor(event.target.scrollLeft);
    headerStyles.value.transform = `translateX(-${scrollLeft}px)`;
  });

  // 计算平均列宽
  const colMinWidth = 50;
  const colAutoWidth = ref(0);
  const { stop } = useIntersectionObserver(tableElRef, ([entry]) => {
    if (entry?.isIntersecting) {
      const colMaxWidth = Math.floor((tableElRef.value.offsetWidth - 100) / props.colItems.length);
      colAutoWidth.value = Math.max(colMinWidth, colMaxWidth);
      stop();
    }
  });

  // 计算当前列宽
  const colWidthsRef = props.colWidthsStorageKey ? useStorage(props.colWidthsStorageKey, {}) : ref({});
  watchEffect(() => {
    colWidthsRef.value = props.colItems.reduce((acc, col) => {
      acc[col.key] = colWidthsRef.value[col.key] || col.width || colAutoWidth.value;
      return acc;
    }, {});
  });

  return {
    rootStyles,
    headerStyles,
    colMinWidth,
    colWidthsRef
  };
};
