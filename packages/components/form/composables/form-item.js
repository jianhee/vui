// 表单项
import { computed } from 'vue';
import { addUnit } from '../../../utils';

// props
export const formItemProps = {
  // 左侧文本
  label: { type: String, default: null }
};

// 使用表单项
export function useFormItem({ formRoot, formItem }) {
  // 表单项类名
  const itemClasses = computed(() => {
    const labelPosition = formItem.props.labelPosition || formRoot.props.labelPosition;
    const labelAlign = formItem.props.labelAlign || formRoot.props.labelAlign;

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
