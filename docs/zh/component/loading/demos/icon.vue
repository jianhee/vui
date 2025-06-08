<template>
  <DemoSpace flex>
    <VLoading :icon="IconClose" />
    <VLoading :icon="{ size: 50 }" />
    <VLoading :icon="{ component: IconFace, size: 100 }" />
  </DemoSpace>
</template>

<script setup>
import IconClose from '@vp/icons/close.svg?component';
import IconFace from '@vp/icons/face.svg?component';
</script>
