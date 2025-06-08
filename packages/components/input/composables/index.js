// 输入框相关的方法
import { computed, useAttrs } from 'vue';

// 提取原生属性
export const useProps = () => {
  const attrs = useAttrs();

  // 根元素的属性
  const wraperAttrs = computed(() => ({
    class: attrs.class,
    style: attrs.style
  }));

  // 表单元素的原生属性
  const innerAttrs = computed(() => {
    const { class: _, style: __, ...rest } = attrs;
    return rest;
  });

  return {
    wraperAttrs,
    innerAttrs
  };
};
