// 按钮
import { computed } from 'vue';
import { addUnit } from '../../../utils';
import VIcon from '../../icon/icon.vue';

// props
export const btnProps = {
  // 按钮类型：primary, default, link
  type: { type: String, default: 'default' },
  // 点击跳转的地址，有值时 `<button>` 转为 `<a>` 标签
  href: { type: String, default: null },
  // 是否为加载状态
  loading: { type: Boolean, default: false },
  // 按钮尺寸：large, medium, small
  size: { type: String, default: 'medium' },
  // 是否为行内模式
  inline: { type: Boolean, default: true },
  // 是否为块级模式
  block: { type: Boolean, default: false },
  // ---------- 原生属性 ----------
  disabled: { type: Boolean, default: false },
  // ---------- 样式属性 ----------
  // 圆角尺寸：不带单位时默认 `px`
  radius: { type: [String, Number], default: null },
  // ---------- 图标属性 ----------
  icon: VIcon.props.icon,
  iconProps: VIcon.props
};

// 使用按钮
export const useButton = ({ props }) => {
  // 根元素标签
  const rootTag = computed(() => {
    return props.href ? 'a' : 'button';
  });

  // 根元素属性
  const rootAttrs = computed(() => {
    return {
      type: props.href ? null : 'button',
      disabled: props.disabled || props.loading ? true : null,
      href: props.href,
      class: [
        `vui-btn--${props.type}`,
        {
          [`vui-btn--${props.size}`]: props.type !== 'link',
          'vui-btn--block': props.block || !props.inline
        }
      ],
      style: {
        '--vui-btn-radius': addUnit(props.radius, 'px')
      }
    };
  });

  return {
    rootTag,
    rootAttrs
  };
};
