# Dragbox 拖拽框

## 移动

1. `props.movable` 是否可移动，默认 `false`，可移动盒子会自动转成定位元素
2. `v-model:left` 和 `v-model:top` 当前位置，只能是 `Number` 类型
3. `props.disabled` 是否禁用，默认 `false`，禁用会清空绑定样式，但不会清除已记录的数据，切换状态后可恢复

<preview path="./demos/move.vue"></preview>

## 缩放

1. `props.resizable` 是否可缩放，默认 `false`
2. `props.resizeHandles` 可缩放手柄，默认启用所有手柄
   1. 定位元素支持 `['left', 'right', 'top', 'bottom']` 四个轴
   2. 非定位元素只支持 `['right', 'bottom']` 两个轴
3. `v-model:left` 和 `v-model:top` 当前位置，只能是 `Number` 类型，下同
4. `v-model:width` 和 `v-model:height` 当前尺寸
5. `props.min-width` 和 `props.min-height` 最小尺寸
6. `props.disabled`

<preview path="./demos/resize.vue"></preview>

## 移动+缩放

<preview path="./demos/box.vue"></preview>
