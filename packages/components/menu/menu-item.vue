<!-- 菜单项 -->
<template>
  <!-- 内容 -->
  <div
    class="vui-menu-item"
    :title="item.label"
    @click="onClickItem"
  >
    <VIcon
      v-if="item.icon"
      v-bind="iconProps"
    />
    <span class="vui-menu-label">{{ item.label }}</span>
    <VIcon
      v-if="isShowSelectedIcon"
      :component="IconSelected"
    />
  </div>
  <!-- 分隔符 -->
  <hr
    v-if="item.divider"
    class="vui-menu-divider"
  />
</template>

<script setup>
import { inject, computed } from 'vue';
import { getIconProps } from '../icon/utils';
import IconSelected from '../../icons/selected.vue';

const parentMenu = inject('parentMenu', null);

// 参数
const props = defineProps({
  // 菜单项
  // key      唯一标识，需要选中状态时必填，也可以是 parentMenu.props.keyName 指定的其它键名
  // label    文本
  // icon     前置图标，VIcon 组件的 name/component/props
  // divider  分隔符
  item: { type: Object, default: () => ({}) }
});

// 图标 props
const iconProps = computed(() => getIconProps(props.item.icon));

// 是否显示选中图标
const isShowSelectedIcon = computed(() => {
  const isSelected = props.item[parentMenu.props.keyName] === parentMenu.modelSelectedKey.value;
  return parentMenu.props.showSelectedIcon && isSelected;
});

// 点击一项
const onClickItem = () => {
  // 选中事件
  parentMenu.emits('select', props.item);
  // 切换事件
  const selectedKey = props.item[parentMenu.props.keyName];
  if (selectedKey !== parentMenu.modelSelectedKey.value) {
    parentMenu.modelSelectedKey.value = selectedKey;
    parentMenu.emits('selectChange', props.item);
  }
};
</script>
