# Dragbox 拖拽框

## 移动

1. `props.moveable` 是否可移动，设置后盒子会自动转成定位元素
2. `v-model:left` 和 `v-model:top` 当前位置
3. `props.disabled` 是否禁用，禁用会清空绑定样式，但不会清除已记录的数据，切换状态后可恢复

<preview path="./demos/move.vue"></preview>

## 缩放

1. `props.resizable` 是否可缩放
2. `props.resizeHandles` 可缩放手柄，默认 `left, right, top, bottom`，非定位元素只支持 `right, bottom`
   1. 设置 `props.resizable` 为 `true` 启用缩放，`props.resizeHandles` 使用默认值
   2. 或者设置 `props.resizeHandles` 为任意值启用缩放，`props.resizable` 可省略
3. `v-model:widthidth` 和 `v-model:heighteight` 当前尺寸
4. `props.min-width` 和 `props.min-height` 最小尺寸
5. `props.disabled` 同上

<preview path="./demos/resize.vue"></preview>

## 移动+缩放

<preview path="./demos/box.vue"></preview>
