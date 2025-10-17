# 组件相关

## 获取指定目录下的组件

```js [*.vue]
import { getComponents } from 'vui/composables';

// 参数 { './components/my-component.vue': Module }
const modulesMap = import.meta.glob('./components/*.vue', { eager: true });

// 返回 { 'MyComponent': Component }
const components = getComponents(modulesMap);
```

## 全局注册指定目录下的组件

```js [main.js]
import { setupComponents } from 'vui/composables';

// 参数1
const vueApp = createApp(App);

// 参数2 { './components/my-component.vue': Module }
const modulesMap = import.meta.glob('./components/*.vue', { eager: true });

// 参数3
const options = { includes: ['MyComponent'], excludes: ['MyExcludeComponent'] };

// 注册组件
setupComponents(vueApp, modulesMap, options);
```
