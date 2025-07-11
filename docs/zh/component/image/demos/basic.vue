<template>
  <DemoSpace flex>
    <DemoCard label="加载成功">
      <VImage :src="url" />
    </DemoCard>
    <DemoCard label="加载失败">
      <VImage :src="`123${url}`" />
    </DemoCard>
  </DemoSpace>
</template>

<script setup>
const url = 'https://pc-newtab.maxthonimg.com/mxbg/horizontal/1039.jpg';
</script>
