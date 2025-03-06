// 多语言：依赖 vue-i18n
import { createI18n } from 'vue-i18n';

// 插件安装
export function setupMxI18n(app, options = {}) {
  // 创建i18n实例
  const i18n = createI18n({
    legacy: false,
    locale: navigator.language.split('-')[0] || 'en',
    fallbackLocale: 'en',
    messages: options.messages || {},
    ...options
  });

  // 注册i18n实例
  app.use(i18n);
}
