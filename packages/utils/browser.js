// 浏览器相关的方法

/**
 * 简化浏览器接口
 * @description 解决在非浏览器环境下直接使用window对象引起的报错
 */
export const ssrBrowser = {
  // 判断是否是浏览器环境
  get isBrowser() {
    return typeof window !== 'undefined';
  },
  // 获取window对象
  get window() {
    return this.isBrowser ? window : null;
  },
  // 获取浏览器语言简写
  get langShort() {
    return this.isBrowser ? window.navigator.language.split('-')[0] : 'en';
  },
  // 获取浏览器语言全称
  get langFull() {
    return this.isBrowser ? window.navigator.language : 'en-US';
  },
  // 获取设备类型：'android|ios|pc'
  get deviceType() {
    const userAgent = ssrBrowser.window?.navigator?.userAgent?.toLowerCase();
    if (/android/.test(userAgent)) {
      return 'android';
    }
    if (/iphone|ipad|ipod/.test(userAgent)) {
      return 'ios';
    }
    return 'pc';
  }
};

/**
 * 获取当前URL中的指定参数
 * @param {string} name   参数名
 * @returns {string|null} 参数值：不存在时返回null
 */
export const getUrlParams = name => {
  const queryString = ssrBrowser.window?.location?.href?.split('?')[1];
  if (!queryString) return null;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(name);
};

/**
 * 复制文本
 * @param {string} text     文本内容
 * @returns {Promise<void>} 一个Promise，表示复制操作的结果
 */
export const copyText = async text => {
  try {
    return new Promise(resolve => {
      ssrBrowser.window?.navigator?.clipboard
        ?.writeText(text)
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
};
