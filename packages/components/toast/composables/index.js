// 消息提示
import { ref, computed, watch } from 'vue';
import { useElementHover } from '@vueuse/core';
import IconSuccess from '../../../icons/success.vue';
import IconWarning from '../../../icons/warning.vue';
import IconError from '../../../icons/circle-close.vue';
import IconInfo from '../../../icons/info.vue';

// emits
// closed 事件：不对外使用，为了在插件中销毁组件
export const toastEmits = ['closed'];

// props
export const toastProps = {
  // 消息内容
  message: { type: String, default: undefined },
  // 消息类型：'primary', 'success', 'warning', 'error', 'info'
  type: { type: String, default: 'info' },
  // 显示时间，空值表示不会自动关闭
  duration: { type: Number, default: undefined },
  // ---------- 以下属性不对外使用，为了区分组件和插件 ----------
  // 显示状态
  visible: { type: Boolean, default: true }
};

// 使用提示
export const useToast = ({ toastElRef, props }) => {
  // 根元素
  const rootClasses = computed(() => {
    return `vui-toast--${props.type}`;
  });

  // 图标
  const icons = {
    primary: IconInfo,
    success: IconSuccess,
    warning: IconWarning,
    error: IconError,
    info: IconInfo
  };
  const iconComponent = computed(() => icons[props.type] || '');

  // 显示状态
  const isVisible = ref(props.visible);
  let timer = null;

  // 打开
  const open = () => {
    isVisible.value = true;
    autoClose();
  };

  // 自动关闭
  const autoClose = () => {
    if (!props.duration) return;

    timer = setTimeout(() => {
      clearTimeout(timer);
      isVisible.value = false;
    }, props.duration);
  };

  // 鼠标悬停时不关闭
  const isHovered = useElementHover(toastElRef);
  watch(isHovered, hovered => {
    if (hovered) {
      clearTimeout(timer);
    } else {
      autoClose();
    }
  });

  return {
    rootClasses,
    iconComponent,
    isVisible,
    open
  };
};
