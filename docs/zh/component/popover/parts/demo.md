### 触发元素

默认使用 `default` 插槽定义触发元素，也可以使用 `triggerElement` 属性定义组件外的触发元素

<preview path="@docs/component/popover/demos/trigger-element.vue"></preview>

### 触发方式

使用 `trigger` 属性定义触发方式

<preview path="@docs/component/popover/demos/trigger-type.vue"></preview>

<!-- 弹框内容 -->
<template v-if="isShowContent">

### 弹框内容

使用 `content` 属性或插槽定义弹框内容

<preview path="@docs/component/popover/demos/content.vue"></preview>

</template>

### 弹框位置

使用 `placement` 属性定义弹框位置

<preview path="@docs/component/popover/demos/placement.vue"></preview>

### 禁用状态

<preview path="@docs/component/popover/demos/disabled.vue"></preview>

### 调用方法

- 使用 `open()` 方法手动打开弹框，默认对齐参考元素的位置，也可以传入鼠标事件来对齐鼠标位置
- 使用 `close()` 方法关闭弹框

<preview path="@docs/component/popover/demos/method.vue"></preview>

### 触发事件

从打开到关闭依次触发 `open`、`opened` 、`close` 、`closed` 四个事件

<preview path="@docs/component/popover/demos/event.vue"></preview>
