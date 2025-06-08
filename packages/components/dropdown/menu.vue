<!-- 菜单 -->
<template>
  <div class="vui-menu">
    <VMenuItem
      v-for="(item, index) in parentMenu.props.menus"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script setup>
import { inject } from 'vue';
import VMenuItem from './menu-item.vue';

const parentMenu = inject('parentMenu', null);
</script>
