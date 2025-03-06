// 消息提示：依赖 vue-toast-notification
import 'vue-toast-notification/dist/theme-default.css';
import { useToast } from 'vue-toast-notification';

export const toast = useToast({ position: 'top' });
