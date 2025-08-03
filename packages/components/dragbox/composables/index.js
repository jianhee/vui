// 拖拽框
// v-model
export const dragboxModel = { type: Number, default: null };

// props
export const dragboxProps = {
  // 是否启用组件
  // 未启用时不允许拖拽，并且会清空绑定的样式，但不会清除已记录的数据，启用后可恢复
  enabled: { type: Boolean, default: true },
  // 是否可移动：可移动盒子会自动转成定位元素
  movable: { type: Boolean, default: false },
  // 是否可缩放
  resizable: { type: Boolean, default: false },
  // 可缩放手柄
  resizeHandles: { type: Array, default: () => ['left', 'right', 'top', 'bottom'] },
  // 最小尺寸
  minWidth: { type: Number, default: 0 },
  minHeight: { type: Number, default: 0 }
};
