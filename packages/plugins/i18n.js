// 国际化语言
// 依赖 vue-i18n
import { createI18n } from 'vue-i18n';

// 在 js 中调用
export let t = null;

/**
 * 在 main.js 中调用
 * @param {Object} vueApp       - Vue 应用实例
 * @param {Object} [options={}] - i18n 配置项，参考官方文档
 */
export function setupI18n(vueApp, options = {}) {
  // 创建i18n实例
  const i18n = createI18n({
    // 不使用 Vue 2 的兼容模式
    legacy: false,
    // 当前语言：匹配浏览器主语言 'zh-CN' -> 'zh'，默认 en
    locale: navigator.language.split('-')[0] || 'en',
    // 备用语言：当前语言不存在对应的 messages 时使用
    fallbackLocale: 'en',
    // 消息内容：必填
    messages: options.messages,
    // 其他配置项
    ...options
  });

  // 将 t 函数赋值给全局变量，方便在其他地方使用
  t = i18n.global.t;

  // 将 i18n 插件注册到 Vue 应用中
  vueApp.use(i18n);
}
