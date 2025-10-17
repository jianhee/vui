# Toast 消息提示

::: details 示例中的消息数据
<<< @/component/toast/composables/index.js
:::

## 组件式调用

### 如何使用

注册组件后即可使用

### 基础用法

- 使用 `message` 属性定义消息内容
- 使用 `type` 属性定义消息类型

<preview path="@docs/component/toast/demos/component.vue"></preview>

## 函数式调用

### 如何使用

按需引入后即可使用

```js [*.vue]
import { toast } from 'vui/plugins';

toast('这是一条消息');
```

### 基础用法

直接调用 `toast` 方法，它的参数可以是字符串或对象

<preview path="@docs/component/toast/demos/function.vue"></preview>

### 使用别名

每种消息类型都有一个对应的方法别名，使用时可以省略 `type` 参数

<preview path="@docs/component/toast/demos/function-type.vue"></preview>

### 显示时间

使用 `duration` 参数定义显示时间

<preview path="@docs/component/toast/demos/duration.vue"></preview>

## 插件式调用

### 如何使用

1. 注册 Vui 时会自动注册 toast 插件，如果不使用组件库，也可以单独注册 toast 插件

```js [main.js]
// 方式一
import { toastPlugin } from 'vui/plugins';
vueApp.use(toastPlugin);

// 方式二
import { setupToast } from 'vui/plugins';
setupToast(vueApp);
```

2. 在组件中使用 `$toast` 方法

```vue [*.vue]
<template>
  <button @click="$toast('这是一条消息')">点击打开 Toast</button>
</template>
```

### 基础用法

插件式调用 `$toast` 方法和函数式调用 `toast` 方法，两种方式的参数完全一样

<preview path="@docs/component/toast/demos/plugin.vue"></preview>

## API

### 组件式接口

| 名称       | 说明                                       | 类型                                                | 默认值                        |
| ---------- | ------------------------------------------ | --------------------------------------------------- | ----------------------------- |
| `message`  | 消息内容                                   | `String`                                            |                               |
| `type`     | 消息类型                                   | `String` = `primary\|success\|warning\|error\|info` | `info`                        |
| `duration` | 显示时间，单位为毫秒，空值表示不会自动关闭 | `Number`                                            | 组件中 `0` <br> 插件中 `3000` |

### 函数式接口

```js
// 打开消息提示
// options 是 `string` 时，等同于 `VToast.props.message`
// options 是 `object` 时，等同于 `VToast.props`
toast(options);

// 打开对应类型的消息提示
toast.primary(options);
toast.success(options);
toast.warning(options);
toast.error(options);
toast.info(options);
```

### 插件式接口

```js
// 用法同 toast
$toast(options);
$toast.primary(options);
$toast.success(options);
$toast.warning(options);
$toast.error(options);
$toast.info(options);
```
