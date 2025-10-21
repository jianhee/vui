<template>
  <VDragbox
    v-model:left="leftRef"
    v-model:top="topRef"
    :enabled="isEnabled"
    :movable="isMovable"
    :move-handle="handleEl"
    :move-boundary="moveBoundary"
    class="c-demo-dragbox"
  >
    <DemoConfig
      label="是否启用"
      code="enabled"
      label-width="180px"
    >
      <VSwitch v-model:checked="isEnabled" />
    </DemoConfig>
    <DemoConfig
      label="是否可移动"
      code="movable"
      label-width="180px"
    >
      <VSwitch v-model:checked="isMovable" />
    </DemoConfig>
    <DemoConfig
      label="可移动手柄"
      code="moveHandle"
      label-width="180px"
    >
      <VSwitch v-model:checked="isShowHandle" />
      <br />
      <VButton
        v-if="isShowHandle"
        ref="handleEl"
        style="cursor: move"
      >
        拖动手柄才能移动
      </VButton>
    </DemoConfig>
    <DemoConfig
      label="可移动边界"
      code="moveBoundary"
      label-width="180px"
    >
      <VRadioGroup
        v-model:value="moveBoundary"
        :options="['mouse', 'box']"
        option-type="button"
      />
    </DemoConfig>
    <DemoConfig
      label="绑定值"
      label-width="180px"
    >
      <code>v-model:left="{{ leftRef }}"</code>
      <br />
      <code>v-model:top="{{ topRef }}"</code>
    </DemoConfig>
  </VDragbox>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue';

const isEnabled = ref(false);
const isMovable = ref(false);
const isShowHandle = ref(false);
const handleEl = useTemplateRef('handleEl');
const moveBoundary = ref('mouse');
const leftRef = ref(400);
const topRef = ref(200);
</script>
