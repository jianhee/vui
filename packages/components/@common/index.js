// 组件内部使用的方法
import { isNumber } from '../../utils/data-number';

// 获取格式化后的文本
export const getFormattedText = (formatter, value, unit = '') => {
  // 不使用文本
  if (formatter === null) return '';

  // 没有文本
  if (typeof value === 'undefined' || value === null) return '';

  // 使用默认格式
  if (formatter === undefined) return `${value}${unit}`;
  // 使用自定义格式
  if (typeof formatter === 'function') return formatter(value);
  // 使用自定义值
  return formatter;
};

// 获取格式化后的图标属性
export const getFormattedIconProps = (icon, props, defaultProps = {}) => {
  // 不使用图标
  if (icon === null) return null;

  // 没有图标
  const mergedProps = { ...defaultProps, ...(props || {}) };
  const mergedIcon = icon || mergedProps?.icon || mergedProps?.name || mergedProps?.component;
  if (!mergedIcon) return null;

  // 图标属性
  return { ...defaultProps, ...(props || {}), icon: mergedIcon };
};

// 补全CSS属性值的单位
export const completeCSSUnit = (value, unit) => {
  if (isNumber(value)) {
    return `${value}${unit}`;
  } else {
    return value;
  }
};
