// 浏览器API相关的方法

/**
 * 获取设备类型
 * @returns {string} 'android'|'ios'|'pc'
 */
export function getDeviceType() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (/android/.test(userAgent)) {
    return 'android';
  }
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios';
  }
  return 'pc';
}

/**
 * 获取当前URL中的指定参数
 * @param {string} name   参数名
 * @returns {string|null} 参数值：不存在时返回null
 */
export function getUrlParams(name) {
  const queryString = window.location.href.split('?')[1];
  if (!queryString) return null;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(name);
}

/**
 * 复制文本
 * @param {string} text     文本内容
 * @returns {Promise<void>} 一个Promise，表示复制操作的结果
 */
export async function copyText(text) {
  try {
    return new Promise(resolve => {
      window.navigator.clipboard
        .writeText(text)
        .then(() => resolve(true))
        .catch(() => resolve(false));
    });
  } catch (error) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    return true;
  }
}
