<!-- 抽屉 -->
<template>
  <Teleport to="body">
    <Transition name="mx-drawer">
      <div
        v-show="visible"
        class="mx-drawer"
        @click.self="visible = false"
      >
        <div
          class="mx-drawer-content"
          :class="[`is-${placement}`, className]"
          :style="{ '--mx-drawer-contant-width': width }"
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
  // 标题
  title: { type: String, default: null },
  // 位置：left, right
  placement: { type: String, default: 'right' },
  // 宽度
  width: { type: String, default: '378px' },
  // 样式
  className: { type: String, default: null }
});

// 是否显示
const visible = defineModel('visible', { type: Boolean, default: false });
</script>

<style lang="scss">
.mx-drawer {
  --mx-drawer-title-color: #212121;
  --mx-drawer-content-bg: #f7f7f7;

  position: fixed;
  inset: 0;
  z-index: 999;
  transition: opacity .3s ease;
  &-content {
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--mx-drawer-contant-width);
    max-width: 100vw;
    word-break: break-word;
    background-color: var(--mx-drawer-content-bg);
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
.mx-drawer-enter-from .mx-drawer-content,
.mx-drawer-leave-to .mx-drawer-content {
  &.is-left {
    left: calc(min(var(--mx-drawer-contant-width), 100vw) * -1);
  }
  &.is-right {
    right: calc(min(var(--mx-drawer-contant-width), 100vw) * -1);
  }
}
</style>
