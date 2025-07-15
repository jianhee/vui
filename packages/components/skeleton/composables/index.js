// 骨架屏-项
import { computed } from 'vue';
import { addUnit } from '../../../utils/data-number';

// props
export const skeletonItemProps = {
  // 宽高
  width: { type: [String, Number], default: null },
  height: { type: [String, Number], default: 20 },
  // 宽高比：设置后忽略高度
  aspectRatio: { type: String, default: null },
  // 是否水平居中
  center: { type: Boolean, default: false },
  // 是否添加分割线
  devider: { type: Boolean, default: false },
  // 行数：多行时首行宽度 `40%`，尾行宽度 `60%`
  rows: { type: Number, default: 1 }
};

// 使用骨架屏项
export const useSkeletonItem = ({ props }) => {
  // 获取宽度
  const getWidth = index => {
    if (props.width) return props.width;
    if (props.rows <= 1) return undefined;
    if (index === 0) return '40%';
    if (index === props.rows - 1) return '60%';
    return undefined;
  };

  // 格式化行
  const formattedRows = computed(() => {
    return Array.from({ length: props.rows }, (_, index) => {
      // 获取类名
      const itemClasses = { 'vui-skeleton--center': props.center };

      // 获取宽度
      const width = getWidth(index);

      // 获取样式
      const styles = {
        width: addUnit(width, 'px'),
        height: props.aspectRatio ? undefined : addUnit(props.height, 'px'),
        aspectRatio: props.aspectRatio
      };
      return {
        class: itemClasses,
        style: styles
      };
    });
  });

  return {
    formattedRows
  };
};
