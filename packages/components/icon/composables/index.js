// 图标
import { computed } from 'vue';
import { addUnit } from '../../../utils';

// props
export const iconProps = {
  // 图标名称
  name: { type: String, default: null },
  // 图标组件
  component: { type: Object, default: null },
  // 是否为可点击状态
  clickable: { type: Boolean, default: false },
  // 是否为禁用状态
  disabled: { type: Boolean, default: false },
  // 是否为旋转状态
  spin: { type: Boolean, default: false },
  // ---------- 样式属性 ----------
  // 主要颜色
  // 需要将 `svg` 中对应的颜色改为 `currentColor`
  color: { type: String, default: null },
  // 次要颜色
  // 需要将 `svg` 中对应的颜色改为 `var(--vui-icon-two-tone-color)`
  // 仅双色图标有效
  twoToneColor: { type: String, default: null },
  // 图标尺寸: 不带单位时默认 `px`
  size: { type: [String, Number], default: null },
  // 旋转角度：不带单位时默认 `deg`
  rotate: { type: [String, Number], default: null }
};

// 使用图标
export const useIcon = props => {
  // 根元素类名
  const rootClasses = computed(() => [
    'vui-icon',
    {
      'is-clickable': props.clickable,
      'is-disabled': props.disabled,
      'is-spin': props.spin
    }
  ]);

  // 根元素样式
  const rootStyles = computed(() => ({
    '--vui-icon-color': props.color,
    '--vui-icon-two-tone-color': props.twoToneColor,
    '--vui-icon-size': addUnit(props.size, 'px'),
    '--vui-icon-rotate': addUnit(props.rotate, 'deg')
  }));

  return {
    rootClasses,
    rootStyles
  };
};
