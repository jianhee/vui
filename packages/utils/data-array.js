// 数组相关的方法

/**
 * 获取两个数组的重复项
 * @param {array} arr1  需要比较的数组1
 * @param {array} arr2  需要比较的数组2
 * @param {string} key  数组项的key：默认空表示字符串/数字数组，设置后表示对象数组
 * @returns {array}     重复的数组
 */
export const getCommonItems = (arr1, arr2, key) => {
  // 对象数组
  if (key) {
    const keysArr = arr1.map(item => item[key]);
    const keysSet = new Set(keysArr);
    return arr2.filter(item => keysSet.has(item[key]));
  }

  // 字符串/数字数组
  const keysSet = new Set(arr1);
  return arr2.filter(item => keysSet.has(item));
};

/**
 * 检查两个数组是否有重复项
 * @param {arr1,arr2,key} 同 getCommonItems
 * @returns {boolean}     是否有重复项
 */
export const hasCommonItems = (...args) => {
  return getCommonItems(...args).length > 0;
};

/**
 * 获取排序结果
 * @param {array}  items  源数组
 * @param {string} key    排序字段
 * @param {string} order  排序方式
 * @returns {array}       排序后的数组
 */
export const getSortResults = (params = {}) => {
  const { items, key, order } = params;

  // 无需排序
  if (!items?.length) return [];
  if (!key || !order) return items;

  // 需要排序
  return items.sort((a, b) => {
    const valA = a[key];
    const valB = b[key];

    // 数字比较大小
    const isNum = typeof valA === 'number' && typeof valB === 'number';
    if (isNum) {
      return order === 'asc' ? valA - valB : valB - valA;
    }

    // 字符串比较编码
    const strRes = String(valA).localeCompare(String(valB));
    return order === 'asc' ? strRes : strRes * -1;
  });
};
