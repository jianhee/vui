# 使用工具集

1. 大部分函数按需引入后即可直接使用
2. 有些插件需要先在 Vue 实例中注册，然后才能使用

```js [*.js]
import { xxx1 } from 'vui/utils';
import { xxx2 } from 'vui/composable';
import { xxx3, xxx4 } from 'vui/plugins';

// 直接使用
xxx1();
xxx2();
xxx3();

// 注册插件
vueApp.use(xxx4);
```
