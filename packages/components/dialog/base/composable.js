// 对话框/抽屉

// emits
export const modalEmits = ['open', 'close'];

// 通用的 props
const modalProps = {
  // 标题
  title: { type: String, default: null },
  // 是否显示关闭按钮
  showClose: { type: Boolean, default: true },
  // 是否在点击遮罩时关闭
  closeOnClickModal: { type: Boolean, default: true }
};

// 对话框的 props
export const dialogProps = {
  ...modalProps,
  // 内容宽度
  width: { type: String, default: '50%' }
};

// 抽屉的 props
export const drawerProps = {
  ...modalProps,
  // 内容宽度
  width: { type: String, default: '30%' },
  // 出现位置：left, right
  placement: { type: String, default: 'left' }
};
