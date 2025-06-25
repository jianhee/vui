// 表单
import { computed, ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import { addUnit } from '../../../utils';

// props
export const formProps = {
  // 表单项是否为行内模式
  filedInline: { type: Boolean, default: false },
  // 表单项是否为块级模式
  filedBlock: { type: Boolean, default: true },
  // 标签位置：left, right, top
  labelPosition: { type: String, default: 'left' },
  // 标签宽度：数字自动补全单位 `px`，默认取最长标签的宽度
  // 行内模式和顶部标签不生效
  labelWidth: { type: [String, Number], default: null }
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

  // 根元素类名
  const rootClasses = computed(() => {
    return [
      'vui-form',
      {
        'vui-form--filed-inline': isInline.value,
        [`vui-form--label-${props.labelPosition}`]: props.labelPosition !== 'left'
      }
    ];
  });

  // 根元素样式
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
