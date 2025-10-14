<template>
  <DemoUsage>
    <template #render>
      <VDropdown
        :items="items"
        :max-width="maxWidthRef"
        :min-width="minWidthRef"
        :max-height="maxHeightRef"
      >
        <VButton>hover 触发元素</VButton>
      </VDropdown>
    </template>

    <template #config>
      <DemoConfig
        label="最大宽度"
        code="maxWidth"
      >
        <DemoSlider
          v-model:value="maxWidthRef"
          :min="20"
          :max="200"
        />
      </DemoConfig>
      <DemoConfig
        label="最小宽度"
        code="minWidth"
      >
        <DemoSlider
          v-model:value="minWidthRef"
          :min="20"
          :max="200"
        />
      </DemoConfig>
      <DemoConfig
        label="最大高度"
        code="maxHeight"
      >
        <DemoSlider
          v-model:value="maxHeightRef"
          :min="200"
          :max="500"
        />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';
import { renderItems } from '../composables';

const items = renderItems(50);
const maxWidthRef = ref(200);
const minWidthRef = ref(100);
const maxHeightRef = ref(300);
</script>
