// 表单
import { computed, ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import { addUnit } from '../../../utils';

// 表单的 props
export const formProps = {
  // 表单项显示模式：默认块级模式
  filedInline: { type: Boolean, default: false },
  filedBlock: { type: Boolean, default: true },
  // 标签位置：left, right, top
  labelPosition: { type: String, default: 'left' },
  // 标签宽度：仅块级模式的左侧/右侧标签有效，默认取最长标签的宽度，不带单位时默认 `px`
  labelWidth: { type: [Number, String], default: null }
};

// 表单项的 props
export const formItemProps = {
  // 左侧文本
  label: { type: String, default: null }
};

// 使用表单
export const useForm = ({ formEl, props }) => {
  // 是否行内
  const isInline = computed(() => props.filedInline || !props.filedBlock);

  // 计算标签宽度
  const labelAutoWidth = ref(null);
  const { stop } = useIntersectionObserver(formEl, async ([entry]) => {
    if (entry?.isIntersecting) {
      const labels = formEl.value.querySelectorAll('.vui-form-label');
      const labelWidths = Array.from(labels).map(label => label.offsetWidth);
      labelAutoWidth.value = Math.max(...labelWidths);
      stop();
    }
  });

  // 使用标签宽度
  const labelWidth = computed(() => {
    // 行内模式不使用宽度
    if (isInline.value) return null;

    // 标签位置在顶部时不使用宽度
    if (props.labelPosition === 'top') return null;

    // 设置的值或计算的值
    return props.labelWidth || labelAutoWidth.value;
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
      '--vui-form-label-width': addUnit(labelWidth.value, 'px')
    };
  });

  return {
    rootClasses,
    rootStyles
  };
};
