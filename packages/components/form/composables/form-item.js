// 表单项
import { inject, computed } from 'vue';
import { addUnit } from '../../../utils';

// props
export const formItemProps = {
  // 左侧文本
  label: { type: String, default: null }
};

// 使用表单项
export function useFormItem(formItem) {
  // 继承
  const formRoot = inject('formRoot', {});

  // 表单项类名
  const itemClasses = computed(() => {
    // 位置：默认 left
    const labelPosition = formItem.props.labelPosition || formRoot.props.labelPosition || 'left';
    // 对齐：左侧位置默认 right，其它位置默认 left
    const labelAlign = formItem.props.labelAlign || formRoot.props.labelAlign || (labelPosition === 'left' ? 'right' : 'left');

    return {
      [`vui-form--label-position-${labelPosition}`]: labelPosition !== 'left',
      [`vui-form--label-align-${labelAlign}`]: labelAlign !== 'left'
    };
  });

  // 表单项样式
  const itemStyles = computed(() => {
    return {
      '--vui-form-label-width': addUnit(formItem.props.labelWidth, 'px')
    };
  });

  return {
    itemClasses,
    itemStyles
  };
}
