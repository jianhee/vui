<!-- 抽屉 -->
<template>
  <Teleport to="body">
    <Transition name="mx-drawer">
      <div
        v-show="visible"
        class="mx-drawer"
        @click.self="onCancel"
      >
        <div
          class="mx-drawer-content"
          :class="`is-${position}`"
          :style="{ '--mx-drawer-width': width, '--mx-drawer-max-width': maxWidth }"
        >
          <div
            v-if="title"
            class="mx-drawer-title"
          >
            {{ title }}
          </div>
          <div class="mx-drawer-body">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  // 是否显示
  visible: { type: Boolean, default: false },
  // 标题
  title: { type: String, default: null },
  // 位置：left, right
  position: { type: String, default: 'left' },
  // 宽度
  width: { type: String, default: '350px' },
  maxWidth: { type: String, default: '100vw' }
});

// 关闭
const emits = defineEmits(['update:visible']);
function onCancel() {
  emits('update:visible', false);
}
</script>

<style lang="scss">
:root {
  --mx-drawer-bg: #f7f7f7;
  --mx-drawer-title-color: #212121;
}
.mx-drawer {
  position: fixed;
  inset: 0;
  z-index: 999;
  transition: opacity 0.3s ease;
  &-content {
    position: absolute;
    top: 0;
    bottom: 0;
    word-break: break-word;
    width: var(--mx-drawer-width);
    max-width: var(--mx-drawer-max-width);
    background-color: var(--mx-drawer-bg);
    &.is-left {
      left: 0;
      transition: left 0.3s ease;
    }
    &.is-right {
      right: 0;
      transition: right 0.3s ease;
    }
  }
  &-title {
    padding: 0 20px;
    font-size: 20px;
    font-weight: bold;
    line-height: 48px;
    color: var(--mx-drawer-title-color);
    text-align: center;
  }
  &-body {
    padding: 0 10px 20px;
  }
}
.mx-drawer-enter-from,
.mx-drawer-leave-to {
  opacity: 0;
  .mx-drawer-content {
    right: max(calc(var(--mx-drawer-max-width) * -1), calc(var(--mx-drawer-width) * -1));
  }
}
</style>
