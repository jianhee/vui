<!-- 菜单 -->
<template>
  <div class="mx-menu">
    <template
      v-for="item in data"
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
import MxIconInside from './MxIconInside.vue';
defineProps({
  // 菜单项：{ key: 'key', title: 'title', divider: true, icon: 'MxIcon 组件的 name/component/props' }
  data: { type: Array, default: null }
});

// 选中菜单
const emits = defineEmits(['select']);
function onSelect(item) {
  emits('select', item);
}
</script>

<style lang="scss">
:root {
  --mx-menu-text-color: #333;
  --mx-menu-divider-bg-color: #ddd;
  --mx-menu-hover-bg-color: #f1f1f1;
}

@media (prefers-color-scheme: dark) {
  :root {
    --mx-menu-text-color: #fff;
    --mx-menu-divider-bg-color: #4f4f4f;
    --mx-menu-hover-bg-color: #444;
  }
}
.mx-menu {
  &-item {
    display: flex;
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
    .mx-icon {
      margin-right: 5px;
      font-size: 14px;
    }
  }
  &-divider {
    height: 1px;
    background-color: var(--mx-menu-divider-bg-color);
  }
}
</style>
