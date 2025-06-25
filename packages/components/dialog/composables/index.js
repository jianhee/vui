// 对话框
import { computed, watch } from 'vue';
import { addUnit } from '../../../utils';

// emits
export const dialogEmits = ['open', 'close'];

// v-model
export const dialogModel = {
  // 是否显示
  visible: { type: Boolean, default: false }
};

// props
export const dialogProps = {
  // 抽屉出现的位置：left, right
  placement: { type: String, default: 'left' },
  // 标题：为空时不显示顶栏
  title: { type: String, default: null },
  // 是否显示关闭按钮
  showClose: { type: Boolean, default: true },
  // 是否在点击遮罩时关闭
  closeOnClickModal: { type: Boolean, default: true },
  // ---------- 样式属性 ----------
  // 内容宽度：数字自动补全单位 `px`
  width: { type: [String, Number], default: null }
};

// 使用弹窗
export const useDialog = ({ dialogType, modelVisible, props, emits }) => {
  // 区分类型
  const isDialog = dialogType === 'dialog';

  // 切换显示状态：外部关闭也能触发
  watch(modelVisible, val => {
    if (val) {
      emits('open');
    } else {
      emits('close');
    }
  });

  // 点击遮罩层
  function onClickOverlay() {
    if (!props.closeOnClickModal) return;
    modelVisible.value = false;
  }

  // 主体类名
  const innerClasses = computed(() => {
    return [
      `vui-${dialogType}`,
      {
        [`vui-drawer--${props.placement}`]: !isDialog
      }
    ];
  });

  // 主体样式
  const innerStyles = computed(() => {
    const key = isDialog ? '--vui-dialog-width' : '--vui-drawer-width';
    const value = addUnit(props.width, 'px');
    return {
      [key]: value
    };
  });

  // 点击关闭按钮
  function onClickCloseIcon() {
    modelVisible.value = false;
  }

  return {
    onClickOverlay,
    innerClasses,
    innerStyles,
    onClickCloseIcon
  };
};
