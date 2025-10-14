<template>
  <DemoUsage class="c-demo-inputs">
    <template #render>
      <VInput
        v-model:value="inputValue"
        placeholder="请输入密码"
        :type="typeRef"
        :show-password-toggle="isShowPassword"
      />
    </template>

    <template #config>
      <DemoConfig
        label="输入框类型"
        code="type"
      >
        <DemoOptions
          v-model:value="typeRef"
          :options="['text', 'password']"
        />
      </DemoConfig>
      <DemoConfig
        label="是否显示切换按钮"
        code="showPasswordToggle"
      >
        <VSwitch v-model:checked="isShowPassword" />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref('123456789');
const typeRef = ref('password');
const isShowPassword = ref(true);
</script>
