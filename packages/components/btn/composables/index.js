// 按钮
import { computed } from 'vue';
import { addUnit } from '../../../utils';

// props
export const btnProps = {
  // 按钮类型：primary, default, link
  type: { type: String, default: 'default' },
  // 禁用状态
  disabled: { type: Boolean, default: false },
  // 加载状态
  loading: { type: Boolean, default: false },
  // 前置图标：`<VIcon>` 组件的 `name|component|props`
  icon: { type: [String, Object], default: null },
  // 按钮尺寸：large, medium, small
  size: { type: String, default: 'medium' },
  // 显示模式：行内模式（默认）、块级模式
  inline: { type: Boolean, default: true },
  block: { type: Boolean, default: false },
  // ---------- 样式属性 ----------
  // 圆角尺寸：不带单位时默认 `px`
  radius: { type: [Number, String], default: null }
};

// use
export const useBtn = props => {
  // 是否禁用
  const isDisabled = computed(() => props.disabled || props.loading);

  // 获取类名
  const rootClasses = computed(() => {
    return [
      'vui-btn',
      `vui-btn--${props.type}`,
      {
        [`vui-btn--${props.size}`]: props.type !== 'link',
        'vui-btn--block': props.block || !props.inline
      }
    ];
  });

  // 获取样式
  const rootStyles = computed(() => {
    return {
      '--vui-btn-radius': addUnit(props.radius, 'px')
    };
  });

  return {
    isDisabled,
    rootClasses,
    rootStyles
  };
};
