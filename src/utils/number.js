// 数字相关的方法

/**
 * 生成随机整数
 * @param {number} min  最小值
 * @param {number} max  最大值
 * @returns {string}    范围内的整数
 */
export function randomIntNum(min = 0, max = 10000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
