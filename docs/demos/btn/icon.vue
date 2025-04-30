<template>
  <DemoRow
    v-for="type in ['default', 'primary']"
    :key="type"
    flex
  >
    <VBtn
      :type="type"
      icon="close"
    >
      传入 name
    </VBtn>
    <VBtn
      :type="type"
      :icon="IconClose"
    >
      传入 component
    </VBtn>
    <VBtn
      :type="type"
      :icon="{ name: 'close' }"
    >
      传入 { name }
    </VBtn>
    <VBtn
      :type="type"
      :icon="{ component: IconClose }"
    >
      传入 { component }
    </VBtn>
  </DemoRow>
</template>

<script setup>
import IconClose from '@icons/close.svg?component';
</script>
