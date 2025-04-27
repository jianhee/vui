<!-- 菜单 -->
<template>
  <div class="vui-menu">
    <VMenuItem
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script setup>
import { provide } from 'vue';
import VMenuItem from './menu-item.vue';

const emits = defineEmits(['select', 'selectChange']);

// 参数
const props = defineProps({
  // 菜单项：{ key, label, icon, divider }
  items: { type: Array, default: null },
  // 自定义键名
  keyName: { type: String, default: 'key' },
  // 是否显示选中图标：在选中项的最后加一个 √ 图标，此时每项必需 key
  showSelectedIcon: { type: Boolean, default: false }
});

// 选中项的 key
const modelSelectedKey = defineModel('selectedKey', { type: [String, Number], default: null });

// 选中一项
const onSelect = item => {
  emits('select', item);
  if (item[props.keyName] !== modelSelectedKey.value) {
    modelSelectedKey.value = item[props.keyName];
    emits('selectChange', item);
  }
};

// 共享数据
provide('parentMenu', {
  props,
  modelSelectedKey,
  onSelect
});
</script>
