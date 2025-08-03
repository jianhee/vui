# DropdownMenu 下拉菜单

`<DropdownMenu>` 组件由 `<Dropdown>` 组件和 `<Menu>` 组件组成，并且继承这两个组件的所有 API，参考 [Dropdown](/component/dropdown/) 和 [Menu](/component/menu/)

## 示例

### 触发方式

<preview path="./demos/trigger.vue"></preview>

### 隐藏方式

这里和 `<Dropdown>` 组件的默认值相反

<preview path="./demos/close.vue"></preview>

### 下拉方法

<preview path="./demos/method.vue"></preview>

### 菜单项事件

<preview path="./demos/select.vue"></preview>

## Dropdown API

::: warning 下拉菜单和下拉框的接口有以下两点不同

1. `closeOnClickDropdown` 属性默认 `true`
2. `dropdown` 插槽无效

:::

<!--@include: @/component/dropdown/parts/api.md-->

## Menu API

<!--@include: @/component/menu/parts/api.md-->
