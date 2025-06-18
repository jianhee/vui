// 对话框
import { computed, watch, inject } from 'vue';
import { addUnit } from '../../../utils';

// emits
export const dialogEmits = ['open', 'close'];

// v-model
export const dialogModel = {
  visible: { type: Boolean, default: false }
};

// props
export const dialogProps = {
  // 标题
  title: { type: String, default: null },
  // 是否显示关闭按钮
  showClose: { type: Boolean, default: true },
  // 是否在点击遮罩时关闭
  closeOnClickModal: { type: Boolean, default: true },
  // 抽屉出现位置：left, right
  placement: { type: String, default: 'left' },
  // ---------- 样式属性 ----------
  // 内容宽度：不带单位时默认 `px`
  width: { type: [Number, String], default: null }
};

// use
export const useDialog = ({ modelVisible, props, emits }) => {
  // 区分类型
  const dialogType = inject('dialogType', 'dialog');
  const isDialog = dialogType === 'dialog';

  // 获取类名
  const dialogClasses = computed(() => {
    return [
      `vui-${dialogType}`,
      {
        [`vui-drawer--${props.placement}`]: !isDialog
      }
    ];
  });

  // 获取样式
  const dialogStyles = computed(() => {
    const key = isDialog ? '--vui-dialog-width' : '--vui-drawer-width';
    const value = addUnit(props.width, 'px');
    return {
      [key]: value
    };
  });

  // 点击遮罩
  function onClickOverlay() {
    if (!props.closeOnClickModal) return;
    modelVisible.value = false;
  }

  // 点击关闭按钮
  function onClickCloseIcon() {
    modelVisible.value = false;
  }

  // 切换显示状态：外部关闭也能触发
  watch(modelVisible, val => {
    if (val) {
      emits('open');
    } else {
      emits('close');
    }
  });

  return {
    dialogType,
    dialogClasses,
    dialogStyles,
    onClickOverlay,
    onClickCloseIcon
  };
};
