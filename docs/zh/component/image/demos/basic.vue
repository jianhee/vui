<template>
  <DemoSpace
    flex
    class="demo-image-basic"
  >
    <div>
      <div class="demo-image-text">加载成功</div>
      <VImage :src="url" />
    </div>
    <div>
      <div class="demo-image-text">加载失败</div>
      <VImage :src="`123${url}`" />
    </div>
  </DemoSpace>
</template>

<script setup>
const url = 'https://pc-newtab.maxthonimg.com/mxbg/horizontal/1039.jpg';
</script>

<style>
.demo-image-basic .vui-image {
  width: 200px;
}
.demo-image-text {
  margin-bottom: 5px;
  font-size: 12px;
  text-align: center;
}
</style>
