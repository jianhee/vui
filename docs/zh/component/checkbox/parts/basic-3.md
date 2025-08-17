<!-- 多选框/单选框 -->

### 基础用法

- 使用 `v-model:value` 属性绑定当前值
- 使用 `options` 属性定义选项数组，选项内容优先级顺序为 `default` 插槽 > `option.label` 属性 > `option.value` 属性 > `option` 属性
- 切换选项时触发 `change` 事件

<preview path="@docs/component/checkbox/demos/group.vue"></preview>

### 按钮类型

<preview path="@docs/component/checkbox/demos/group-type.vue"></preview>

### 行内模式

<preview path="@docs/component/checkbox/demos/group-display.vue"></preview>
