<template>
  <DemoBase :image="image" />
</template>

<script setup>
import { useRouteValid } from '@vp/composables';
import DemoBase from './basic.vue';
import LoadingImg from '@vp/images/loading.gif';

// 区分类型
const isEmpty = useRouteValid('empty');
const emptyImg = 'https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original';
const image = isEmpty ? emptyImg : LoadingImg;
</script>
