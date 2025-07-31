# 使用

## 组件

1. 全局引入并注册

```js [main.js]
import vui from 'vui/components';
import 'vui/styles/index.scss';

app.use(vui);
```

2. 使用

```vue [*.vue]
<template>
  <VButton>按钮</VButton>
</template>
```

## 插件和方法

按需引入后使用

```vue [*.vue]
<template>...</template>

<script setup>
import { xxx1 } from 'vui/plugins';
import { xxx2 } from 'vui/utils';

xxx1();
xxx2();
</script>
```
