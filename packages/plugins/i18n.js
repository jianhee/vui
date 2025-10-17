// 简化 vue-i18n 的使用方式
import { createI18n } from 'vue-i18n';
import { ssrBrowser } from '../utils/browser';

// 处理配置项：参考官方文档
const mergeOptions = options => {
  return {
    // 不使用 Vue 2 的兼容模式
    legacy: false,
    // 当前语言：比如 'en'、'zh'，默认使用浏览器语言
    locale: ssrBrowser.langShort,
    // 备用语言：当前语言不存在对应的 messages 时使用
    fallbackLocale: 'en',
    // 文案内容
    messages: {
      zh: { hello: '你好' },
      en: { hello: 'Hello' }
    },
    // 其他配置项
    ...options
  };
};

// 简化注册方式：在 main.js 中注册
// 方式1：setupI18n(vueApp, options)
let i18n = null;
export const setupI18n = (vueApp, options = {}) => {
  const _options = mergeOptions(options);
  i18n = createI18n(_options);
  vueApp.use(i18n);
};

// 方式2：vueApp.use(i18n)
export const i18nPlugin = { install: setupI18n };

// 简化翻译函数
export const t = msg => i18n?.global?.t(msg);
