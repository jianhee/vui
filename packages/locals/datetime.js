// 日期时间相关的文案
const lang = window.navigator.language.startsWith('zh') ? 'zh' : 'en';
const messages = {
  en: {
    s: 's ago',
    m: 'm ago',
    h: 'h ago',
    d: 'd ago',
    mm: 'MMM D',
    yy: 'MMM YYYY'
  },
  zh: {
    s: '秒前',
    m: '分钟前',
    h: '小时前',
    d: '天前',
    mm: 'M/D',
    yy: 'YYYY/M'
  }
};

export default messages[lang];
