<!-- 对话框/抽屉 -->
<template>
  <Teleport to="body">
    <Transition :name="`vui-${typeName}`">
      <!-- 遮罩 -->
      <VOverlay
        v-show="modelVisible"
        @click.self="onClickOverlay"
      >
        <!-- 主体 -->
        <div
          v-bind="$attrs"
          :class="modalClasses"
          :style="modalStyles"
        >
          <!-- 顶栏 -->
          <div
            v-if="title"
            :class="`vui-${typeName}-header`"
          >
            <!-- 标题 -->
            <span :class="`vui-${typeName}-title`">{{ props.title }}</span>
            <!-- 关闭按钮 -->
            <VIcon
              v-if="props.showClose"
              :class="`vui-${typeName}-close`"
              :component="IconClose"
              @click="onClickCloseIcon"
            />
          </div>
          <!-- 内容 -->
          <div :class="`vui-${typeName}-body`">
            <slot />
          </div>
          <!-- 底栏 -->
          <div :class="`vui-${typeName}-footer`">
            <slot name="footer" />
          </div>
        </div>
      </VOverlay>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, watch, inject } from 'vue';
import { addUnit } from '../../../utils';
import IconClose from '../../../icons/close.vue';

defineOptions({ inheritAttrs: false });

// 区分类型
const typeName = inject('typeName', null);
const isDialog = typeName === 'dialog';

// 处理数据
const emits = defineEmits(['open', 'close']);
const props = defineProps({
  // 标题
  title: { type: String, default: null },
  // 是否显示关闭按钮
  showClose: { type: Boolean, default: true },
  // 是否在点击遮罩时关闭
  closeOnClickModal: { type: Boolean, default: true },
  // 抽屉出现位置：left, right
  placement: { type: String, default: 'left' },
  // ---------- 设置样式 ----------
  // 内容宽度：默认值对话框 `50%` / 抽屉 `30%`，默认单位 `px`
  width: { type: [Number, String], default: null }
});

// 是否显示
const modelVisible = defineModel('visible', { type: Boolean, default: false });

// 获取类名
const modalClasses = computed(() => {
  return [
    `vui-${typeName}`,
    {
      [`vui-drawer--${props.placement}`]: !isDialog
    }
  ];
});

// 获取样式
const modalStyles = computed(() => {
  return { width: addUnit(props.width, 'px') };
});

// 点击遮罩
function onClickOverlay() {
  if (!props.closeOnClickModal) return;
  closeDialog();
}

// 点击关闭按钮
function onClickCloseIcon() {
  closeDialog();
}

// 关闭弹窗
function closeDialog() {
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
