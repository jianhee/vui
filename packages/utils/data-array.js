// 数组相关的方法

/**
 * 获取两个数组的重复项
 * @param {array} arr1  需要比较的数组1
 * @param {array} arr2  需要比较的数组2
 * @param {string} key  数组项的key：默认空表示字符串/数字数组，设置后表示对象数组
 * @returns {array}     重复的数组
 */
export function getCommonItems(arr1, arr2, key) {
  // 对象数组
  if (key) {
    const keysArr = arr1.map(item => item[key]);
    const keysSet = new Set(keysArr);
    return arr2.filter(item => keysSet.has(item[key]));
  }

  // 字符串/数字数组
  const keysSet = new Set(arr1);
  return arr2.filter(item => keysSet.has(item));
}

/**
 * 检查两个数组是否有重复项
 * @param {arr1,arr2,key} 同 getCommonItems
 * @returns {boolean}     是否有重复项
 */
export function hasCommonItems(...args) {
  return getCommonItems(...args).length > 0;
}
