<template>
  <DemoUsage class="c-demo-inputs">
    <template #render>
      <VInput
        v-model:value="inputValue"
        placeholder="请输入文字"
        :maxlength="maxlength"
        :show-word-limit="showWordLimit"
      />
    </template>

    <template #config>
      <DemoConfig
        label="最大长度"
        code="maxlength"
      >
        <DemoSlider
          v-model:value="maxlength"
          unit="位"
        />
      </DemoConfig>
      <DemoConfig
        label="是否显示统计字数"
        code="showWordLimit"
      >
        <VSwitch v-model:checked="showWordLimit" />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
const maxlength = ref(5);
const showWordLimit = ref(true);
</script>
