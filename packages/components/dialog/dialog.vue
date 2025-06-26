<!-- 对话框 -->
<template>
  <Teleport to="body">
    <Transition :name="`vui-${dialogType}`">
      <!-- 遮罩 -->
      <VOverlay
        v-show="modelVisible"
        @click.self="onOverlayClick"
      >
        <!-- 主体 -->
        <div
          v-bind="$attrs"
          :class="innerClasses"
          :style="innerStyles"
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
              @click="onClose"
            />
          </div>
          <!-- 中间内容 -->
          <div :class="`vui-${dialogType}-body`">
            <slot />
          </div>
          <!-- 底栏内容 -->
          <div :class="`vui-${dialogType}-footer`">
            <slot name="footer" />
          </div>
        </div>
      </VOverlay>
    </Transition>
  </Teleport>
</template>

<script setup>
import { inject } from 'vue';
import { useDialog, dialogModel, dialogProps, dialogEmits } from './composables';
import IconClose from '../../icons/close.vue';

// 区分类型
const dialogType = inject('dialogType', 'dialog');

// 弹窗
defineOptions({ inheritAttrs: false });
const modelVisible = defineModel('visible', dialogModel.visible);
const props = defineProps(dialogProps);
const emits = defineEmits(dialogEmits);

// 使用弹窗
const { onOverlayClick, innerClasses, innerStyles, onClose } = useDialog({
  dialogType,
  modelVisible,
  props,
  emits
});
</script>
