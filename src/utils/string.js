// 字符串处理相关的方法

/**
 * 获取UUID
 * @returns {string} "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
 */
export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * 校验是否有效网址
 * @param {string} url  网址
 * @returns {boolean}   是否有效：true|false
 */
export function isValidUrl(url) {
  try {
    // eslint-disable-next-line no-new
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}
