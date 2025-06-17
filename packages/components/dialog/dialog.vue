<!-- 对话框 -->
<template>
  <Teleport to="body">
    <Transition :name="`vui-${dialogType}`">
      <!-- 遮罩 -->
      <VOverlay
        v-show="modelVisible"
        @click.self="onClickOverlay"
      >
        <!-- 主体 -->
        <div
          v-bind="$attrs"
          :class="dialogClasses"
          :style="dialogStyles"
        >
          <!-- 顶栏 -->
          <div
            v-if="title"
            :class="`vui-${dialogType}-header`"
          >
            <!-- 标题 -->
            <span :class="`vui-${dialogType}-title`">{{ title }}</span>
            <!-- 关闭按钮 -->
            <VIcon
              v-if="showClose"
              :class="`vui-${dialogType}-close`"
              :component="IconClose"
              @click="onClickCloseIcon"
            />
          </div>
          <!-- 内容 -->
          <div :class="`vui-${dialogType}-body`">
            <slot />
          </div>
          <!-- 底栏 -->
          <div :class="`vui-${dialogType}-footer`">
            <slot name="footer" />
          </div>
        </div>
      </VOverlay>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useDialog, dialogModel, dialogProps, dialogEmits } from './composables';
import IconClose from '../../icons/close.vue';

defineOptions({ inheritAttrs: false });

// 处理数据
const modelVisible = defineModel('visible', dialogModel.visible);
const props = defineProps(dialogProps);
const emits = defineEmits(dialogEmits);
const { dialogType, dialogClasses, dialogStyles, onClickOverlay, onClickCloseIcon } = useDialog({
  modelVisible,
  props,
  emits
});
</script>
