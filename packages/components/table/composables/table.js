// 表格
import { ref, computed, watchEffect } from 'vue';
import { useStorage, useEventListener, useIntersectionObserver } from '@vueuse/core';
import { addUnit } from '../../../utils';

// emits
export const tableEmits = ['row-click', 'row-contextmenu'];

// props
export const tableProps = {
  // ---------- 数据展示 ----------
  // 是否正在加载数据
  loading: { type: Boolean, default: false },
  // 空数据时显示的文本内容
  emptyText: { type: String, default: 'No Data' },
  // 行数据 `Array[Object]`
  //  1. `id` 行唯一标识
  rowItems: { type: Array, default: null },
  // 列数据 `Array[Object]`
  //  1. `key` 列唯一标识，默认使用 `row[col.key]` 的值渲染单元格内容
  //  2. `title` 列标题
  //  3. `width` 列宽，默认根据列数量平分
  //  4. `minWidth` 最小列宽，默认 `50`
  //  5. `cellClass` 单元格类名
  colItems: { type: Array, required: true },
  // ---------- 表格属性 ----------
  // 表格高度：不带单位时默认 `px`
  // 必须使用此属性或 CSS 限制高度，否则会渲染全部数据
  tableHeight: { type: [String, Number], default: null },
  // 是否使用斑马纹
  stripe: { type: Boolean, default: false },
  // ---------- 行属性 ----------
  // 行高：用于计算虚拟列表的显示内容
  rowHeight: { type: Number, default: 35 },
  // 行 `id` 键名
  rowIdKey: { type: String, default: 'id' },
  // 当前行 `id`，用于高亮当前行
  currentRowId: { type: [String, Number], default: null },
  // 自定义行属性的方法
  //  1. 示例 `({ row }) => ({ key: value, ... })`
  //  2. 参数为当前行，返回一个可以使用 `v-bind` 绑定到行元素的对象
  customRow: { type: Function, default: null },
  // ---------- 列属性 ----------
  // 是否可以调整列宽
  colResizable: { type: Boolean, default: false },
  // 如果需要记住调整后的列宽，需要设置一个键名
  colResizeStorageKey: { type: String, default: null }
};

// 使用表格
export const useTable = ({ tableElRef, tbodyElRef, props }) => {
  // 元素是否显示
  const isShow = ref(false);
  const { stop } = useIntersectionObserver(tableElRef, ([entry]) => {
    if (entry?.isIntersecting) {
      isShow.value = true;
      stop();
    }
  });

  // 根元素样式
  const rootClasses = computed(() => {
    return {
      'vui-table--striped': props.stripe
    };
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
  useEventListener(tbodyElRef, 'scroll', event => {
    const scrollLeft = Math.floor(event.target.scrollLeft);
    headerStyles.value.transform = `translateX(-${scrollLeft}px)`;
  });

  // 计算列宽
  const colWidthsRef = props.colResizeStorageKey ? useStorage(props.colResizeStorageKey, {}) : ref({});
  watchEffect(() => {
    // 未显示时不计算
    if (!isShow.value) return;

    // 可用的宽度（减去滚动条宽度）
    let totalWidth = tableElRef.value.offsetWidth - 20;
    // 可用的列数
    let totalLength = props.colItems?.length || 0;

    // 排除已设置宽度的列
    props.colItems.forEach(col => {
      if (col.width) {
        totalWidth -= col.width;
        totalLength -= 1;
      }
    });

    // 排除内置的操作列
    const actionCols = tableElRef.value?.querySelectorAll('.vui-table-header .vui-table-row-action');
    actionCols.forEach(el => {
      totalWidth -= el.offsetWidth;
    });

    // 计算剩余的平均列宽
    const autoWidth = Math.floor(totalWidth / totalLength);

    // 分配列宽
    colWidthsRef.value = props.colItems.reduce((acc, col) => {
      const selfWidth = colWidthsRef.value[col.key] || col.width || autoWidth;
      const minWidth = col.minWidth || 50;
      acc[col.key] = Math.max(selfWidth, minWidth);
      return acc;
    }, {});
  });

  return {
    rootClasses,
    rootStyles,
    headerStyles,
    colWidthsRef
  };
};
