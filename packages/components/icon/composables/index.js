// 图标
import { computed } from 'vue';
import { addUnit } from '../../../utils';

// props
export const iconProps = {
  // 图标名称或组件：二选一
  name: { type: String, default: null },
  component: { type: Object, default: null },
  // 是否可点击
  clickable: { type: Boolean, default: false },
  // 是否禁用
  disabled: { type: Boolean, default: false },
  // 旋转动画
  spin: { type: Boolean, default: false },
  // ---------- 样式属性 ----------
  // 主要颜色
  color: { type: String, default: null },
  // 次要颜色：仅双色图标有效
  twoToneColor: { type: String, default: null },
  // 图标尺寸: 不带单位时默认 `px`
  size: { type: [Number, String], default: null },
  // 旋转角度：不带单位时默认 `deg`
  rotate: { type: [Number, String], default: null }
};

// 使用图标
export const useIcon = props => {
  // 获取类名
  const rootClasses = computed(() => [
    'vui-icon',
    {
      'is-clickable': props.clickable,
      'is-disabled': props.disabled,
      'is-spin': props.spin
    }
  ]);

  // 获取样式
  const rootStyles = computed(() => ({
    '--vui-icon-color': props.color,
    '--vui-icon-two-tone-color': props.twoToneColor,
    '--vui-icon-size': addUnit(props.size, 'px'),
    'transform': `rotate(${addUnit(props.rotate, 'deg')})`
  }));

  return {
    rootClasses,
    rootStyles
  };
};
