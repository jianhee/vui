<!-- 菜单项 -->
<template>
  <!-- 内容 -->
  <div
    class="mx-menu-item"
    :title="item.label"
    @click="onSelect(item)"
  >
    <MxIcon
      v-if="item.icon"
      v-bind="iconProps"
    />
    <span class="mx-menu-label">{{ item.label }}</span>
    <MxIcon
      v-if="showSelectedIcon && item.key === modelSelectedKey"
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

const props = defineProps({
  // 菜单项
  // key      唯一标识，需要选中状态时必填
  // label    文本，必填
  // icon     前置图标，可选，MxIcon 组件的 name/component/props
  // divider  分隔符，默认 false
  // ...      其他自定义属性
  item: { type: Object, default: () => ({}) }
});

// 共享数据
const modelSelectedKey = inject('modelSelectedKey');
const showSelectedIcon = inject('showSelectedIcon');
const onSelect = inject('onSelect');

// 图标 props
const iconProps = computed(() => getIconProps(props.item.icon));
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-menu {
  &-item {
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 8px 20px;
    color: var(--mx-menu-text-color);
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: var(--mx-menu-hover-bg-color);
    }
  }
  &-label {
    flex: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    white-space: nowrap;
  }
  &-divider {
    height: 1px;
    background-color: var(--mx-menu-divider-bg-color);
  }
}
</style>
