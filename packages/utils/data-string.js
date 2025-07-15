// 字符串处理相关的方法

/**
 * 生成UUID
 * @returns {string} "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
 */
export const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * 字数统计
 * @param {string} str  文本
 * @returns {object}    数量对象
 */
export const countText = str => {
  // 1. 包含空格的字符数量
  const charCount = str.length;

  // 2. 不包含空格的字符数量
  const charCountWithoutSpace = str.replace(/\s/g, '').length;

  // 3. 汉字和单词数量
  // 汉字：Unicode范围
  const chineseCharArr = str.match(/[\u4E00-\u9FA5]|[\u9FA6-\u9fcb]/g) || [];
  // 英文单词：按单词边界分割
  const englishWordArr = str.match(/\b[a-zA-Z]+\b/g) || [];
  // 总数
  const wordCount = chineseCharArr.length + englishWordArr.length;

  return {
    charCount,
    charCountWithoutSpace,
    wordCount
  };
};
