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
          :class="[className, `is-${position}`]"
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
  // 样式
  className: { type: String, default: null },
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
  transition: opacity .3s ease;
  &-content {
    --mx-drawer-content-width: min(var(--mx-drawer-width), var(--mx-drawer-max-width));

    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--mx-drawer-content-width);
    word-break: break-word;
    background-color: var(--mx-drawer-bg);
    &.is-left {
      left: 0;
      transition: left .3s ease;
    }
    &.is-right {
      right: 0;
      transition: right .3s ease;
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
}
.mx-drawer-enter-from,
.mx-drawer-leave-to {
  opacity: 0;
  .mx-drawer-content.is-left {
    left: calc(var(--mx-drawer-content-width) * -1);
  }
  .mx-drawer-content.is-right {
    right: calc(var(--mx-drawer-content-width) * -1);
  }
}
</style>
