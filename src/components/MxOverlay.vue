<!-- 遮罩层 -->
<template>
  <div class="mx-overlay">
    <slot />
  </div>
</template>

<style lang="scss">
@use '../assets/styles/vars';
.mx-overlay {
  position: fixed;
  inset: 0;
  z-index: 999;
  background-color: var(--mx-overlay-bg-color);
  transition: opacity 0.3s ease;
}
</style>
