// 拖拽框
// v-model
export const dragboxModel = { type: Number, default: null };

// props
export const dragboxProps = {
  // 是否可移动：可移动盒子会自动转成定位元素
  movable: { type: Boolean, default: false },
  // 是否可缩放
  resizable: { type: Boolean, default: false },
  // 可缩放手柄：`[String]` 默认启用所有手柄
  // 定位元素支持 `['left', 'right', 'top', 'bottom']` 四个轴
  // 非定位元素只支持 `['right', 'bottom']` 两个轴
  resizeHandles: { type: Array, default: () => ['left', 'right', 'top', 'bottom'] },
  // 最小尺寸
  minWidth: { type: Number, default: 0 },
  minHeight: { type: Number, default: 0 },
  // 是否禁用：禁用会清空状态和绑定样式，但不会清除已记录的数据，切换状态后可恢复
  disabled: { type: Boolean, default: false }
};
