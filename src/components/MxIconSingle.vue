<!-- 单图标 -->
<!-- 本组件用于展示 svg 的内容 -->
<template>
  <i>
    <!-- 方式1：使用 name，需要提前安装 vite-plugin-svg-icons 插件自动导入 svg 文件 -->
    <svg v-if="name">
      <use :href="`#icon-${name}`" />
    </svg>
    <!-- 方式2：使用 component，需要将 svg 文件改成 vue 组件后导入 -->
    <component
      :is="component"
      v-else
    />
  </i>
</template>

<script setup>
defineProps({
  name: { type: [String, Object], default: null },
  component: { type: Object, default: null }
});
</script>
