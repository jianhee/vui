// 进度条
import { computed } from 'vue';
import { addUnit } from '../../../utils';

// props
export const progressProps = {
  // 百分比
  percent: { type: Number, default: 0 },
  // 文字的格式化方法
  // 1.函数：参数为百分比，返回一个可以作为文本的值
  // 2.空值：表示不显示文本
  textFormatter: { type: Function, default: percent => `${percent}%` },
  // ---------- 样式属性 ----------
  // 高度：不带单位时默认 `px`，默认 `6px`
  height: { type: [Number, String], default: null },
  // 圆角尺寸：不带单位时默认 `px`，默认 `4px`
  radius: { type: [Number, String], default: null }
};

// 使用进度条
export const useProgress = ({ props }) => {
  // 轨道样式
  const railStyles = computed(() => ({
    '--vui-progress-height': addUnit(props.height, 'px'),
    '--vui-progress-radius': addUnit(props.radius, 'px')
  }));

  // 填充样式
  const trackStyles = computed(() => ({
    width: `${props.percent}%`
  }));

  // 文字内容
  const textContent = computed(() => props.textFormatter?.(props.percent));

  return {
    railStyles,
    trackStyles,
    textContent
  };
};
