<template>
  <DemoView>
    <template #content>
      <DemoSpace>通过元素自动触发</DemoSpace>
      <DemoSpace>
        <VDropdown
          ref="dropdownRef"
          :items="items"
          :disabled="isDisabled"
          :trigger="trigger"
          :placement="placement"
          @open="writeLog('open')"
          @opened="writeLog('opened')"
          @close="writeLog('close')"
          @closed="writeLog('closed')"
        >
          <VButton :disabled="isDisabled">插槽定义触发元素</VButton>
        </VDropdown>
      </DemoSpace>
      <DemoSpace>
        <VButton
          ref="triggerElement"
          :disabled="isDisabled"
        >
          属性定义触发元素
        </VButton>
        <VDropdown
          :items="items"
          :disabled="isDisabled"
          :trigger="trigger"
          :placement="placement"
          :trigger-element="triggerElement"
        />
      </DemoSpace>
      <DemoSpace>通过方法手动触发</DemoSpace>
      <DemoSpace>
        <VButton @contextmenu.prevent="openDropdown()">contextmenu 对齐元素</VButton>
      </DemoSpace>
      <DemoSpace>
        <VButton @contextmenu.prevent="openDropdown">contextmenu 对齐鼠标</VButton>
      </DemoSpace>
      <DemoSpace>
        <VButton @contextmenu.prevent="closeDropdown">contextmenu 关闭</VButton>
      </DemoSpace>
    </template>

    <template #props>
      <DemoViewBoolean
        label="是否禁用状态"
        code="disabled"
      >
        <VSwitch v-model:checked="isDisabled" />
      </DemoViewBoolean>
      <DemoViewBoolean
        label="触发方式"
        code="trigger"
      >
        <VSelect
          v-model:value="trigger"
          :options="triggerOptions"
        />
      </DemoViewBoolean>
      <DemoViewBoolean
        label="弹出位置"
        code="placement"
      >
        <VSelect
          v-model:value="placement"
          :options="placementOptions"
        />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue';
import { writeLog } from '@vp/utils';
import { renderItems } from '../composables';

// 元素
const triggerElement = useTemplateRef('triggerElement');
const dropdownRef = ref(null);
const openDropdown = event => dropdownRef.value.open(event);
const closeDropdown = () => dropdownRef.value.close();

// 数据
const items = renderItems();
const isDisabled = ref(false);
const trigger = ref('click');
const triggerOptions = ['hover', 'click', 'contextmenu'];
const placement = ref('top');
const placementOptions = ['top', 'top-start', 'top-end', 'right-start', 'right-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left-end'];
</script>
