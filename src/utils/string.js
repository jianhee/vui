// 字符串处理相关的方法

/**
 * 生成UUID
 * @returns {string} "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
 */
export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
