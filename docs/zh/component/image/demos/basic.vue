<template>
  <DemoSpace flex>
    <DemoConfig
      label="加载成功"
      label-position="top-center"
    >
      <VImage :src="url" />
    </DemoConfig>
    <DemoConfig
      label="加载失败"
      label-position="top-center"
    >
      <VImage :src="`123${url}`" />
    </DemoConfig>
  </DemoSpace>
</template>

<script setup>
const url = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg';
</script>
