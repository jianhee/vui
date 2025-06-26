// 按钮
import { computed } from 'vue';
import { addUnit } from '../../../utils';

// props
export const btnProps = {
  // 按钮类型：primary, default, link
  type: { type: String, default: 'default' },
  // 是否为禁用状态
  disabled: { type: Boolean, default: false },
  // 是否为加载状态
  loading: { type: Boolean, default: false },
  // 前置图标：可选的值有 `<VIcon>` 组件的 `name` 属性值、`component` 属性值、完整的 `props` 对象
  icon: { type: [String, Object], default: null },
  // 按钮尺寸：large, medium, small
  size: { type: String, default: 'medium' },
  // 是否为行内模式
  inline: { type: Boolean, default: true },
  // 是否为块级模式
  block: { type: Boolean, default: false },
  // ---------- 样式属性 ----------
  // 圆角尺寸：不带单位时默认 `px`
  radius: { type: [String, Number], default: null }
};

// 使用按钮
export const useBtn = props => {
  // 是否禁用
  const isDisabled = computed(() => props.disabled || props.loading);

  // 根元素类名
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

  // 根元素样式
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
