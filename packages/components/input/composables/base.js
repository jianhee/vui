// 表单元素使用
// 筛选外层属性和原生属性
import { computed, useAttrs } from 'vue';
export const useFormElementAttrs = () => {
  const attrs = useAttrs();

  // 根元素的属性
  const wraperAttrs = computed(() => ({
    class: attrs.class,
    style: attrs.style
  }));

  // 表单元素的属性
  const innerAttrs = computed(() => {
    const { class: _, style: __, ...rest } = attrs;
    return rest;
  });

  return {
    wraperAttrs,
    innerAttrs
  };
};
