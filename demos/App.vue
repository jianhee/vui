<template>
  <div class="demo-layout">
    <LayoutSidebar />
    <div class="demo-container">
      <div class="demo-title">{{ route.meta.title }}</div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { useRoute, RouterView } from 'vue-router';
import LayoutSidebar from './views/LayoutSidebar.vue';

const route = useRoute();
</script>

<style lang="scss">
.demo {
  &-layout {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
  &-container {
    flex: auto;
    height: 100%;
    padding: 40px 20px;
    overflow: auto;
  }
  &-title {
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 40px;
  }
}
</style>
