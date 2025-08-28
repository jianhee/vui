<template>
  <DemoSpace flex>
    <DemoViewTopCenter label="只修改图片">
      <DemoBase :image="image" />
    </DemoViewTopCenter>
    <DemoViewTopCenter label="修改图片和样式">
      <DemoBase
        :image="image"
        :image-styles="{ width: '400px' }"
      />
    </DemoViewTopCenter>
  </DemoSpace>
</template>

<script setup>
import { useRouteValid } from '@vp/composables';
import DemoBase from './basic.vue';
import loadingImg from '@vp/images/loading.gif';
import emptyImg from '@vp/images/empty.png';

// 区分类型
const isEmpty = useRouteValid('empty');
const image = isEmpty ? emptyImg : loadingImg;
</script>
