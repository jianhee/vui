<template>
  <DemoSpace>默认</DemoSpace>
  <DemoSpace class="demo-images">
    <VImage :src="url" />
    <VImage :src="`123${url}`" />
  </DemoSpace>
  <DemoSpace>自定义图片</DemoSpace>
  <DemoSpace class="demo-images">
    <VImage
      :src="url"
      :loading-img="loadingImg"
      :error-img="errorImg"
    />
    <VImage
      :src="`123${url}`"
      :loading-img="loadingImg"
      :error-img="errorImg"
    />
  </DemoSpace>
</template>

<script setup>
import loadingImg from '@vp/images/loading.png';
import errorImg from '@vp/images/error.png';

const url = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg';
</script>

<style>
.demo-images > .vui-image {
  display: inline-block;
  width: 200px;
  margin-right: 30px;
  vertical-align: top;
}
</style>
