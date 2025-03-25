<!-- 菜单 -->
<template>
  <div class="mx-menu">
    <template
      v-for="item in items"
      :key="item.key"
    >
      <!-- 菜单项 -->
      <div
        :title="item.title"
        class="mx-menu-item"
        @click="onSelect(item)"
      >
        <MxIconInside
          v-if="item.icon"
          :icon="item.icon"
        />
        <span>{{ item.title }}</span>
      </div>
      <!-- 分隔符 -->
      <hr
        v-if="item.divider"
        class="mx-menu-divider"
      />
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import MxIconInside from './MxIconInside.vue';

const props = defineProps({
  // 菜单项：{ key: 'key', title: 'title', divider: true, icon: 'MxIcon 组件的 name/component/props' }
  data: { type: Array, default: null }
});

// 筛选菜单
const items = computed(() => props.data?.filter(item => item.visible !== false));

// 选中菜单
const emits = defineEmits(['select']);
function onSelect(item) {
  emits('select', item);
}
</script>

<style lang="scss">
@use '../styles/vars';
.mx-menu {
  &-item {
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 8px 20px;
    font-size: 12px;
    line-height: 20px;
    color: var(--mx-menu-text-color);
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background-color: var(--mx-menu-hover-bg-color);
    }
  }
  &-divider {
    height: 1px;
    background-color: var(--mx-menu-divider-bg-color);
  }
}
</style>
