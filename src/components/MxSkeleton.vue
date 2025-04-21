<!-- 骨架屏-容器 -->
<template>
  <div class="mx-skeleton">
    <slot />
  </div>
</template>

<style lang="scss">
.mx-skeleton {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
