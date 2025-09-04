<template>
  <DemoView class="demo-inputs">
    <template #content>
      <VInput
        v-model:value="inputValue"
        placeholder="请输入文字"
        :maxlength="maxlength"
        :show-word-limit="showWordLimit"
      />
    </template>

    <template #props>
      <DemoViewTop
        label="最大长度"
        code="maxlength"
      >
        <DemoValue
          v-model:value="maxlength"
          unit="位"
        />
      </DemoViewTop>
      <DemoViewBoolean
        label="是否显示统计字数"
        code="showWordLimit"
      >
        <VSwitch v-model:checked="showWordLimit" />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref(null);
const maxlength = ref(5);
const showWordLimit = ref(true);
</script>
