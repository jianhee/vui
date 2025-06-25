// VInput/VSelect 等表单组件使用
import { computed, useAttrs } from 'vue';

// 使用表单元素属性
export const useFormElementAttrs = () => {
  const attrs = useAttrs();

  // 根元素的属性
  const rootAttrs = computed(() => ({
    id: attrs.id,
    class: attrs.class,
    style: attrs.style
  }));

  // 表单元素的属性
  const innerAttrs = computed(() => {
    const { id: _, class: __, style: ___, ...rest } = attrs;
    return rest;
  });

  return {
    rootAttrs,
    innerAttrs
  };
};
