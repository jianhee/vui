# Dragbox 拖拽框

使用 `enabled` 属性启用组件

## 移动

1. 使用 `movable` 属性开启移动功能
2. 使用 `v-model:left` 和 `v-model:top` 属性绑定当前位置

<preview path="./demos/move.vue"></preview>

## 缩放

1. 使用 `resizable` 属性开启缩放功能，使用 `resizeHandles` 属性定义可缩放手柄
2. 使用 `v-model:width` 和 `v-model:height` 绑定当前尺寸，位置同上
3. 使用 `min-width` 和 `min-height` 属性设置最小尺寸

<preview path="./demos/resize.vue"></preview>

## 移动+缩放

<preview path="./demos/box.vue"></preview>

## API

### 属性

| 名称                                  | 说明                                                                                             | 类型       | 默认值                               |
| ------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------- | ------------------------------------ |
| `enabled`                             | 是否启用组件 <br> 未启用时不允许拖拽，并且会清空绑定的样式，但不会清除已记录的数据，启用后可恢复 | `boolean`  | `true`                               |
| `movable`                             | 是否可移动，可移动盒子会自动转成定位元素                                                         | `boolean`  | `false`                              |
| `resizable`                           | 是否可缩放                                                                                       | `boolean`  | `false`                              |
| `resizeHandles`                       | 可缩放手柄 <br> 定位元素支持上下左右四个手柄 <br> 非定位元素只支持右下两个手柄                   | `[string]` | `['left', 'right', 'top', 'bottom']` |
| `v-model:left` <br> `v-model:top`     | 当前位置                                                                                         | `number`   |                                      |
| `v-model:width` <br> `v-model:height` | 当前尺寸                                                                                         | `number`   |                                      |
| `minWidth` <br> `minHeight`           | 最小尺寸                                                                                         | `number`   | `0`                                  |

### 插槽

| 名称      | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 显示内容 |      |
