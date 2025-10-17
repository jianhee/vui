# 使用组件

## 全局注册所有组件

```js [main.js]
import vui from 'vui/components';
import 'vui/styles/index.scss';

app.use(vui);
```

## 使用组件

```vue [*.vue]
<template>
  <VButton>按钮</VButton>
</template>
```
