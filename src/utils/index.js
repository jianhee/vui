/**
 * 生成符合UUID格式的随机字符串
 * @returns {string} 返回字符串："xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
 */
export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * 根据用户代理字符串判断设备类型
 * @returns {string} 返回设备类型：'android'|'ios'|'pc'
 */
export function getDeviceType() {
  const userAgent = navigator.userAgent.toLowerCase();
  if (/android/.test(userAgent)) {
    return 'android';
  } else if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios';
  } else {
    return 'pc';
  }
}

/**
 * 将指定文本复制到剪贴板
 * @param {string} text     要复制的文本内容
 * @returns {Promise<void>} 返回一个Promise，表示复制操作的结果
 */
export async function copyText(text) {
  try {
    await navigator.clipboard.writeText('text');
  } catch (error) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
  }
}

/**
 * 从当前URL中获取指定参数的值
 * @param {string} name   要获取的参数名称
 * @returns {string|null} 返回参数值：不存在时返回null
 */
export function getUrlParams(name) {
  const queryString = window.location.href.split('?')[1];
  if (!queryString) return null;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(name);
}

// 校验网址格式
export function isValidUrl(url) {
  try {
    // eslint-disable-next-line no-new
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}
