// 图标
import { computed } from 'vue';
import { completeCSSUnit } from '../../@common';

// props
export const iconProps = {
  // 图标名称/组件：三选一
  icon: { type: [String, Object], default: undefined },
  name: { type: String, default: undefined },
  component: { type: Object, default: undefined },
  // 是否为禁用状态
  disabled: { type: Boolean, default: false },
  // 是否为旋转状态
  spin: { type: Boolean, default: false },
  // ---------- 样式属性 ----------
  // 鼠标样式
  cursor: { type: String, default: undefined },
  // 主要颜色
  // 需要将 `svg` 中对应的颜色改为 `currentColor`
  color: { type: String, default: undefined },
  // 次要颜色（仅双色图标有效）
  // 需要将 `svg` 中对应的颜色改为 `var(--vui-icon-two-tone-color)`
  twoToneColor: { type: String, default: undefined },
  // 图标尺寸: 不带单位时默认 `px`
  size: { type: [String, Number], default: undefined },
  // 旋转角度：不带单位时默认 `deg`
  rotate: { type: [String, Number], default: undefined }
};

// 使用图标
export const useIcon = ({ props }) => {
  // 根元素类名
  const rootClasses = computed(() => ({
    'is-disabled': props.disabled,
    'is-spin': props.spin
  }));

  // 根元素样式
  const rootStyles = computed(() => ({
    '--vui-icon-cursor': props.cursor,
    '--vui-icon-color': props.color,
    '--vui-icon-two-tone-color': props.twoToneColor,
    '--vui-icon-size': completeCSSUnit(props.size, 'px'),
    '--vui-icon-transform': props.rotate ? `rotate(${completeCSSUnit(props.rotate, 'deg')})` : null
  }));

  // 图标属性
  const _iconProps = computed(() => {
    const isName = typeof props.icon === 'string';
    return {
      name: props.name || (isName ? props.icon : null),
      component: props.component || (isName ? null : props.icon)
    };
  });

  return {
    rootClasses,
    rootStyles,
    _iconProps
  };
};
