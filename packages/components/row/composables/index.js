// 行
import { computed } from 'vue';

// props
export const rowProps = {
  // 标签类型
  tag: { type: String, default: 'div' },
  // 文字是否居中
  center: { type: Boolean, default: false },
  // 文字是否溢出隐藏
  ellipsis: { type: Boolean, default: false }
};

// 使用行
export const useRow = ({ props }) => {
  const rootClasses = computed(() => {
    return [
      'vui-row',
      {
        'is-center': props.center,
        'is-ellipsis': props.ellipsis
      }
    ];
  });

  return {
    rootClasses
  };
};
