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
  // 图标尺寸: 省略单位时默认 `px`
  size: { type: [Number, String], default: null },
  // 旋转角度：省略单位时默认 `deg`
  rotate: { type: [Number, String], default: null }
};

// 使用图标
export function useIcons(props) {
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
    'font-size': addUnit(props.size, 'px'),
    'transform': `rotate(${addUnit(props.rotate, 'deg')})`
  }));

  return {
    rootClasses,
    rootStyles
  };
}

// 格式化 VBtn/VMenu 等组件的 `icon` 属性
export function useIcon(rawIcon) {
  const iconProps = computed(() => {
    // 空值
    if (!rawIcon) return null;

    // :icon="name"
    if (typeof rawIcon === 'string') {
      return { name: rawIcon };
    }

    // :icon="component"
    if (rawIcon.render) {
      return { component: rawIcon };
    }

    // :icon="{ name: 'close', size: 20, ... }"
    return rawIcon;
  });

  return { iconProps };
}
