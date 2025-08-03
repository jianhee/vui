// 表单
import { computed, ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import { addUnit } from '../../../utils';

// 表单的 props
export const formProps = {
  // 表单项是否为行内模式
  filedInline: { type: Boolean, default: false },
  // 表单项是否为块级模式
  filedBlock: { type: Boolean, default: true }
};

// 表单和表单项都有的 props
// formItem 优先级高于 form
export const commonProps = {
  // 标签位置：left, right, top, bottom
  labelPosition: { type: String, default: null },
  // 标签对齐：left, right, center
  labelAlign: { type: String, default: null },
  // 标签宽度：不带单位时默认 `px`，默认取最长标签的宽度
  labelWidth: { type: [String, Number], default: null }
};

// 使用表单
export const useForm = ({ formElRef, props }) => {
  // 是否行内
  const isInline = computed(() => props.filedInline || !props.filedBlock);

  // 计算标签宽度
  const labelAutoWidth = ref(null);
  const { stop } = useIntersectionObserver(formElRef, async ([entry]) => {
    if (entry?.isIntersecting) {
      const labels = formElRef.value.querySelectorAll('.vui-form-label');
      const labelWidths = Array.from(labels).map(label => label.offsetWidth);
      labelAutoWidth.value = Math.max(...labelWidths);
      stop();
    }
  });

  // 根元素类名
  const rootClasses = computed(() => {
    return {
      'vui-form--filed-inline': isInline.value
    };
  });

  // 根元素样式
  const rootStyles = computed(() => {
    const labelWidth = props.labelWidth || labelAutoWidth.value;

    return {
      '--vui-form-label-width': addUnit(labelWidth, 'px')
    };
  });

  return {
    rootClasses,
    rootStyles
  };
};
