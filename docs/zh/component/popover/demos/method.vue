<template>
  <DemoSpace flex>
    <DemoConfig
      label="通过触发元素自动打开或关闭（默认）"
      label-position="top"
    >
      <VComponentMatchRoute
        ref="popoverRef"
        v-bind="props"
        trigger="click"
      >
        <VButton>click 对齐触发元素</VButton>
      </VComponentMatchRoute>
    </DemoConfig>

    <DemoConfig
      label="通过方法手动打开或关闭"
      label-position="top"
    >
      <DemoConfig
        label="1.参数为空"
        label-position="top"
      >
        <VButton @click.stop="openPopover1">click 对齐触发元素</VButton>
      </DemoConfig>

      <DemoConfig
        label="2.参数为一个外部组件或元素"
        label-position="top"
      >
        <DemoSpace flex>
          <VButton
            ref="triggerComponent"
            @click.stop="openPopover2(triggerComponent)"
          >
            click 对齐组件
          </VButton>
          <button
            ref="triggerElement"
            @click.stop="openPopover2(triggerElement)"
          >
            click 对齐元素
          </button>
        </DemoSpace>
      </DemoConfig>

      <DemoConfig
        label="3.参数为 MouseEvent"
        label-position="top"
      >
        <DemoSpace flex>
          <VButton @contextmenu.prevent="openPopover3">contextmenu 对齐鼠标</VButton>
          <VButton @contextmenu.prevent="closePopover">contextmenu 关闭</VButton>
        </DemoSpace>
      </DemoConfig>
    </DemoConfig>
  </DemoSpace>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue';
import { useDemo } from '../composables';

const { props } = useDemo();
const popoverRef = ref(null);
const triggerComponent = useTemplateRef('triggerComponent');
const triggerElement = useTemplateRef('triggerElement');

const openPopover1 = () => popoverRef.value.open();
const openPopover2 = el => popoverRef.value.open({ el });
const openPopover3 = event => popoverRef.value.open({ event });
const closePopover = () => popoverRef.value.close();
</script>
