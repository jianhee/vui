<template>
  <DemoView>
    <template #content>
      <VInput
        v-model:value="inputValue"
        class="demo-input"
        placeholder="请输入密码"
        :type="typeRef"
        :show-password="isShowPassword"
      />
    </template>

    <template #props>
      <DemoViewBoolean
        label="输入框类型"
        code="type"
      >
        <VRadioGroup
          v-model:value="typeRef"
          :options="['text', 'password']"
          option-type="button"
        />
      </DemoViewBoolean>
      <DemoViewBoolean
        label="是否显示切换按钮"
        code="showPassword"
      >
        <VSwitch v-model:checked="isShowPassword" />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';

const typeRef = ref('password');
const isShowPassword = ref(true);
const inputValue = ref('123456789');
</script>
