// 消息提示
// 依赖 vue-toast-notification
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

/**
 * 全局Toast实例
 * @description 使用默认主题，位置在顶部
 */
export const toast = useToast({
  position: 'top'
});
