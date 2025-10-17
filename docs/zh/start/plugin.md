# 使用插件

有些插件是基于第三方插件的封装，需要先安装第三方插件

```sh
npm install xxx
```

有些插件需要注册后才能使用

```js [main.js]
import { xxx } from 'vui/plugins';

vueApp.use(xxx);
```

有些插件还提供了调用方法，按需引入后即可使用

```js [*.js]
import { xxx } from 'vui/plugins';

xxx();
```
