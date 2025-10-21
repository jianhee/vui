# Dragbox 拖拽框

## 示例

### 移动

<preview path="./demos/move.vue"></preview>

### 缩放

<preview path="./demos/resize.vue"></preview>

### 移动+缩放

<preview path="./demos/box.vue"></preview>

## API

### 属性

| 名称                             | 说明                                                                                             | 类型                    | 默认值                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------- | ------------------------------------ |
| `enabled`                        | 是否启用组件 <br> 未启用时不允许拖拽，并且会清空绑定的样式，但不会清除已记录的数据，启用后可恢复 | `boolean`               | `true`                               |
| `movable`                        | 是否可移动，可移动盒子会自动转成定位元素                                                         | `boolean`               | `false`                              |
| `moveHandle`                     | 可移动手柄，一个 DOM 元素或组件对象                                                              | `HTMLElement\|object`   | 整个盒子                             |
| `moveBoundary`                   | 移动到边界时的参考对象                                                                           | `string` = `mouse\|box` | `mouse`                              |
| `resizable`                      | 是否可缩放，定位元素和非定位元素表现不同                                                         | `boolean`               | `false`                              |
| `resizeHandles`                  | 可缩放手柄                                                                                       | `Array[string]`         | `['left', 'right', 'top', 'bottom']` |
| `v-model:left`/`v-model:top`     | 当前位置                                                                                         | `number`                |                                      |
| `v-model:width`/`v-model:height` | 当前尺寸                                                                                         | `number`                |                                      |
| `minWidth`/`minHeight`           | 最小尺寸                                                                                         | `number`                | `0`                                  |

### 插槽

| 名称      | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 显示内容 |      |
