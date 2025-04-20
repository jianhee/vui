<!-- 菜单项 -->
<template>
  <!-- 内容 -->
  <div
    class="mx-menu-item"
    :title="item.label"
    @click="parentMenu.onSelect(item)"
  >
    <MxIcon
      v-if="item.icon"
      v-bind="iconProps"
    />
    <span class="mx-menu-label">{{ item.label }}</span>
    <MxIcon
      v-if="parentMenu.showSelectedIcon && item.key === parentMenu.modelSelectedKey"
      :component="IconSelected"
    />
  </div>
  <!-- 分隔符 -->
  <hr
    v-if="item.divider"
    class="mx-menu-divider"
  />
</template>

<script setup>
import { inject, computed } from 'vue';
import { getIconProps } from '../composables';
import IconSelected from '../assets/icons/selected.vue';

const parentMenu = inject('parentMenu', null);

// 参数
const props = defineProps({
  // 菜单项
  // key      唯一标识，需要选中状态时必填
  // label    文本
  // icon     前置图标，MxIcon 组件的 name/component/props
  // divider  分隔符
  item: { type: Object, default: () => ({}) }
});

// 图标 props
const iconProps = computed(() => getIconProps(props.item.icon));
</script>

<style lang="scss">
@use '../assets/styles/vars';
@use '../assets/styles/mixins';
.mx-menu {
  &-item {
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 8px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  &-item:hover {
    background-color: var(--mx-menu-item-active-bg-color);
  }
  &-label {
    @include mixins.mx-ellipsis;

    flex: auto;
    font-size: 12px;
  }
  &-divider {
    height: 1px;
    background-color: var(--mx-menu-divider-bg-color);
  }
}
</style>
