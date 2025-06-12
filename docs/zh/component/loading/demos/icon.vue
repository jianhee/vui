<template>
  <DemoSpace flex>
    <VLoading
      :icon="IconFace"
      text="修改图标"
    />
    <VLoading
      :icon="{ color: 'red' }"
      text="修改颜色"
    />
    <VLoading
      :icon="{ size: 50 }"
      text="修改尺寸"
    />
    <VLoading
      :icon="{ component: IconFace, color: 'red', size: 50 }"
      text="修改多项"
    />
  </DemoSpace>
</template>

<script setup>
import IconFace from '@vp/icons/face.svg?component';
</script>
