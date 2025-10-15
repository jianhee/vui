// 按钮
import { computed } from 'vue';
import { completeCSSUnit } from '../../@common';
import VIcon from '../../icon/icon.vue';

// props
export const btnProps = {
  // 按钮类型：primary, default, link
  type: { type: String, default: 'default' },
  // 是否为加载状态
  loading: { type: Boolean, default: false },
  // 前置图标
  icon: VIcon.props.icon,
  iconProps: VIcon.props,
  // 按钮尺寸：large, medium, small
  size: { type: String, default: 'medium' },
  // 是否为行内模式
  inline: { type: Boolean, default: true },
  // 是否为块级模式
  block: { type: Boolean, default: false },
  // 点击跳转的地址，有值时 `<button>` 转为 `<a>` 标签
  href: { type: String, default: undefined },
  // ---------- 原生属性 ----------
  disabled: { type: Boolean, default: false },
  // ---------- 样式属性 ----------
  // 圆角尺寸：不带单位时默认 `px`
  radius: { type: [String, Number], default: undefined }
};

// 使用按钮
export const useButton = ({ props }) => {
  // 根元素标签
  const rootTag = computed(() => {
    return props.href ? 'a' : 'button';
  });

  // 根元素属性
  const rootAttrs = computed(() => {
    const isLink = props.type === 'link';
    return {
      type: props.href ? null : 'button',
      disabled: isLink ? null : props.disabled || props.loading,
      href: props.href,
      class: {
        [`vui-btn--${props.type}`]: !!props.type,
        [`vui-btn--${props.size}`]: !isLink,
        'vui-btn--block': props.block || !props.inline,
        'is-disabled': props.disabled || props.loading
      },
      style: {
        '--vui-btn-radius': completeCSSUnit(props.radius, 'px')
      }
    };
  });

  return {
    rootTag,
    rootAttrs
  };
};
