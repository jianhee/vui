<!-- 菜单 -->
<template>
  <div class="vui-menu">
    <DropdownMenuItem
      v-for="(item, index) in menuRoot.props.menus"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script setup>
import { inject } from 'vue';
import DropdownMenuItem from './menu-item.vue';

// 菜单
const menuRoot = inject('menuRoot', null);
</script>
