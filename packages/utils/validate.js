// 校验相关的方法

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
