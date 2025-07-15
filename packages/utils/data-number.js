// 数字相关的方法

/**
 * 生成随机整数
 * @param {number} min  最小值
 * @param {number} max  最大值
 * @returns {string}    范围内的整数
 */
export const randomIntNum = (min = 0, max = 10000) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 判断是否是数字
export const isNumber = value => {
  // 数字类型
  if (typeof value === 'number') return true;

  // 数字字符串
  if (typeof value === 'string') {
    return !isNaN(value);
  }

  // 其它
  return false;
};

// 给数字添加单位
export const addUnit = (value, unit) => {
  if (isNumber(value)) {
    return `${value}${unit}`;
  } else {
    return value;
  }
};
