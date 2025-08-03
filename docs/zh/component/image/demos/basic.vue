<template>
  <DemoSpace flex>
    <DemoViewTopCenter label="加载成功">
      <VImage :src="url" />
    </DemoViewTopCenter>
    <DemoViewTopCenter label="加载失败">
      <VImage :src="`123${url}`" />
    </DemoViewTopCenter>
  </DemoSpace>
</template>

<script setup>
const url = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg';
</script>
