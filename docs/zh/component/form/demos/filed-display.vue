<template>
  <DemoUsage>
    <template #render>
      <DemoBasic :form-props="formProps" />
    </template>

    <template #config>
      <DemoConfig code="filedInline|filedBlock">
        <VSwitch
          v-model:checked="formProps.filedInline"
          inactive-text="块级模式"
          active-text="行内模式"
        />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const formProps = ref({
  filedInline: true
});
</script>
