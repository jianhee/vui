# 安装

目前暂未发布线上版本，仅支持本地使用，需要手动将 Vui 代码库克隆到本地。

## 使用 Vite

给本地路径设置一个别名，然后在项目中使用别名即可

```js [vite.config.js]
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      // 别名
      vui: fileURLToPath(new URL('../vui', import.meta.url))
    }
  }
});
```

## 使用 Yalc

1. 发布

```sh [vui 根目录下运行]
yalc publish    # 发布
yalc push       # 推送更新
```

2. 安装

```sh [项目根目录运行]
yalc add vui      # 添加
yalc remove vui   # 删除
yalc update vui   # 更新
```
