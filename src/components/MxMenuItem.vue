<!-- 菜单项 -->
<template>
  <!-- 内容 -->
  <div
    class="mx-menu-item"
    :title="item.label"
    @click="onSelect(item)"
  >
    <MxIconInside
      v-if="item.icon"
      :icon="item.icon"
    />
    <span class="mx-menu-label">{{ item.label }}</span>
    <MxIconInside
      v-if="showSelectedIcon && item.key === selectedKey"
      :icon="IconSelected"
    />
  </div>
  <!-- 分隔符 -->
  <hr
    v-if="item.divider"
    class="mx-menu-divider"
  />
</template>

<script setup>
import { inject } from 'vue';
import MxIconInside from './MxIconInside.vue';
import IconSelected from '../assets/icons/selected.vue';

defineProps({
  // 菜单项
  // key      唯一标识，需要选中状态时必填
  // label    显示内容，必填
  // icon     前置图标，可选，MxIcon 组件的 name/component/props
  // divider  分隔符，默认 false
  // ...      其他自定义属性
  item: { type: Object, default: () => ({}) }
});

// 共享数据
const selectedKey = inject('selectedKey');
const showSelectedIcon = inject('showSelectedIcon');
const onSelect = inject('onSelect');
</script>
