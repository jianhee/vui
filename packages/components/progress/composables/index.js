// 进度条
import { computed } from 'vue';
import { completeCSSUnit, getFormattedText } from '../../@common';

// props
export const progressProps = {
  // 百分比
  percentage: { type: Number, default: 0 },
  // 轨道右侧内容
  // - `null` 不显示内容
  // - `function` : `percentage => {}` 的返回值
  // - `any` : 直接显示
  suffix: { type: [Function, String, Number, Object], default: undefined },
  // ---------- 样式属性 ----------
  // 高度：不带单位时默认 `px`，默认 `6px`
  height: { type: [Number, String], default: undefined },
  // 圆角尺寸：不带单位时默认 `px`，默认 `4px`
  radius: { type: [Number, String], default: undefined }
};

// 使用进度条
export const useProgress = ({ props }) => {
  // 轨道样式
  const railStyles = computed(() => ({
    '--vui-progress-height': completeCSSUnit(props.height, 'px'),
    '--vui-progress-radius': completeCSSUnit(props.radius, 'px')
  }));

  // 填充样式
  const trackStyles = computed(() => ({
    width: `${props.percentage}%`
  }));

  // 右侧内容
  const suffixText = computed(() => getFormattedText(props.suffix, props.percentage, '%'));

  return {
    railStyles,
    trackStyles,
    suffixText
  };
};
