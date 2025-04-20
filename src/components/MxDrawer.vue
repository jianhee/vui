<!-- 抽屉 -->
<template>
  <Teleport to="body">
    <Transition name="mx-drawer">
      <!-- 遮罩 -->
      <MxOverlay
        v-show="modelVisible"
        @click.self="onClickModal"
      >
        <!-- 主体 -->
        <div
          v-bind="$attrs"
          class="mx-drawer"
          :class="drawerClasses"
          :style="drawerStyles"
        >
          <!-- 顶栏 -->
          <div class="mx-drawer-header">
            <!-- 标题 -->
            <div class="mx-drawer-title">{{ title }}</div>
            <!-- 关闭按钮 -->
            <MxIcon
              v-if="showClose"
              class="mx-drawer-close"
              :component="IconClose"
              @click="onClickCloseIcon"
            />
          </div>
          <!-- 内容 -->
          <div class="mx-drawer-body">
            <slot />
          </div>
          <!-- 底栏 -->
          <div class="mx-drawer-footer">
            <slot name="footer" />
          </div>
        </div>
      </MxOverlay>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, watch } from 'vue';
import MxIcon from './MxIcon.vue';
import IconClose from '../assets/icons/close.vue';

defineOptions({ inheritAttrs: false });
const emits = defineEmits(['open', 'close']);

// 参数
const props = defineProps({
  // 宽度
  width: { type: String, default: '30vh' },
  // 出现位置：left, right
  placement: { type: String, default: 'left' },
  // 标题
  title: { type: String, default: null },
  // 是否显示关闭按钮
  showClose: { type: Boolean, default: true },
  // 点击 modal 时是否可以关闭
  closeOnClickModal: { type: Boolean, default: true }
});

// 是否显示
const modelVisible = defineModel('visible', { type: Boolean, default: false });

// 获取类名
const drawerClasses = computed(() => {
  return `mx-drawer-${props.placement}`;
});

// 获取样式
const drawerStyles = computed(() => {
  return { width: props.width };
});

// 点击遮罩
function onClickModal() {
  if (!props.closeOnClickModal) return;
  closeDrawer();
}

// 点击关闭按钮
function onClickCloseIcon() {
  closeDrawer();
}

// 关闭抽屉
function closeDrawer() {
  modelVisible.value = false;
}

// 切换显示状态：外部关闭也能触发
watch(modelVisible, val => {
  if (val) {
    emits('open');
  } else {
    emits('close');
  }
});
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-drawer {
  // 主体
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  height: 100vh;
  padding: 16px 0;
  background-color: var(--mx-drawer-bg-color);
  transition: transform 0.3s ease;
  &-left {
    left: 0;
  }
  &-right {
    right: 0;
  }

  // 顶栏
  &-header {
    display: flex;
    flex: none;
    gap: 10px;
    justify-content: space-between;
    padding: 0 16px 16px;
    font-size: 16px;
  }
  &-title {
    line-height: 24px;
    color: var(--mx-drawer-title-text-color);
  }
  &-close {
    align-self: flex-start;
    color: var(--mx-drawer-close-icon-color);
    cursor: pointer;
  }
  &-close:hover {
    color: var(--mx-drawer-close-icon-active-color);
  }

  // 内容
  &-body {
    flex: auto;
    padding: 0 16px;
    overflow: auto;
    font-size: 14px;
  }

  // 底栏
  &-footer {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    padding: 16px 16px 0;
  }
}

// 动画
.mx-drawer-enter-from,
.mx-drawer-leave-to {
  opacity: 0;
  > .mx-drawer {
    &-left {
      transform: translateX(-100%);
    }
    &-right {
      transform: translateX(100%);
    }
  }
}
</style>
