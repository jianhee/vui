// 基础方法

// 生成随机id
export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// 获取设备类型
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

// 复制文本
export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
  }
}

// 获取url参数
export function getUrlParams(name) {
  const queryString = window.location.href.split('?')[1];
  if (!queryString) return null;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(name);
}
