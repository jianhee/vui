// 表单
import { computed } from 'vue';
import { useElementVisibility } from '@vueuse/core';
import { addUnit } from '../../../utils';

// 表单的 props
export const formProps = {
  // 表单项显示模式：默认块级模式
  filedInline: { type: Boolean, default: false },
  filedBlock: { type: Boolean, default: true },
  // 标签位置：left, right, top
  labelPosition: { type: String, default: 'left' },
  // 标签宽度：仅块级模式的左侧/右侧标签有效，默认取最长标签的宽度，缺省单位时默认 `px`
  labelWidth: { type: [Number, String], default: null }
};

// 表单项的 props
export const formItemProps = {
  // 左侧文本
  label: { type: String, default: null }
};

// 使用表单
export function useForm({ formRef, props }) {
  // 表单是否可见
  const formIsVisible = useElementVisibility(formRef);

  // 是否行内
  const isInline = computed(() => props.filedInline || !props.filedBlock);

  // 使用的标签宽度
  const useLabelWidth = computed(() => {
    // 行内模式不使用宽度
    if (isInline.value) return null;

    // 标签位置在顶部时不使用宽度
    if (props.labelPosition === 'top') return null;

    // 设置的值
    if (props.labelWidth) return props.labelWidth;

    // 表单不可见时无法获取宽度
    if (!formIsVisible.value) return null;

    // 没有标签时不使用宽度
    const labels = formRef.value.querySelectorAll('.vui-form-label');
    if (!labels.length) return null;

    // 计算最长的值
    const labelWidths = Array.from(labels).map(label => label.offsetWidth);
    return Math.max(...labelWidths);
  });

  // 获取类名
  const rootClasses = computed(() => {
    return [
      'vui-form',
      {
        'vui-form--filed-inline': isInline.value,
        [`vui-form--label-${props.labelPosition}`]: props.labelPosition !== 'left'
      }
    ];
  });

  // 获取样式
  const rootStyles = computed(() => {
    return {
      '--vui-form-label-width': addUnit(useLabelWidth.value, 'px')
    };
  });

  return {
    rootClasses,
    rootStyles
  };
}
