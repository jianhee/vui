<template>
  <DemoSpace flex>
    <DemoConfig
      label="自定义图片"
      label-position="top-center"
    >
      <VComponentMatchRoute :image="image" />
    </DemoConfig>
    <DemoConfig
      label="自定义图片和样式"
      label-position="top-center"
    >
      <VComponentMatchRoute
        :image="image"
        :image-styles="{ width: '400px' }"
      />
    </DemoConfig>
  </DemoSpace>
</template>

<script setup>
import { validateRoutePath } from '@vp/composables';
import loadingImg from '@vp/images/loading.gif';
import emptyImg from '@vp/images/empty.png';

// 区分类型
const isEmpty = validateRoutePath('empty');
const image = isEmpty ? emptyImg : loadingImg;
</script>
