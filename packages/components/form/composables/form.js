// 表单
import { computed, ref, watchEffect } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import { completeCSSUnit } from '../../@common';

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
  labelPosition: { type: String, default: undefined },
  // 标签对齐：left, right, center
  labelAlign: { type: String, default: undefined },
  // 标签宽度：不带单位时默认 `px`，默认取最长标签的宽度
  labelWidth: { type: [String, Number], default: undefined },
  // ---------- 原生属性 ----------
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false }
};

// 使用表单
export const useForm = ({ formElRef, props }) => {
  // 元素是否显示
  const isShow = ref(false);
  const { stop } = useIntersectionObserver(formElRef, async ([entry]) => {
    if (entry?.isIntersecting) {
      isShow.value = true;
      stop();
    }
  });

  // 是否行内
  const isInline = computed(() => props.filedInline || !props.filedBlock);

  // 计算标签宽度
  const labelWidthRef = ref(null);
  watchEffect(() => {
    // 行内：内容撑开
    if (isInline.value) {
      labelWidthRef.value = 'fit-content';
      return;
    }

    // 上下：100%
    if (props.labelPosition === 'top' || props.labelPosition === 'bottom') {
      labelWidthRef.value = '100%';
      return;
    }

    // 其它
    // 有值：使用设置值
    if (props.labelWidth) {
      labelWidthRef.value = props.labelWidth;
      return;
    }

    // 没有值：使用最大的标签宽度
    if (!isShow.value) return;
    const labels = formElRef.value.querySelectorAll('.vui-form-label');
    const labelWidths = Array.from(labels).map(label => label.offsetWidth);
    labelWidthRef.value = Math.max(...labelWidths);
  });

  // 根元素类名
  const rootClasses = computed(() => {
    return {
      'vui-form--filed-inline': isInline.value
    };
  });

  // 根元素样式
  const rootStyles = computed(() => {
    return {
      '--vui-form-label-width': completeCSSUnit(labelWidthRef.value, 'px')
    };
  });

  return {
    rootClasses,
    rootStyles
  };
};
