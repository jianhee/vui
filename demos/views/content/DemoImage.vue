<!-- 图片 -->
<template>
  <DemoCard title="基本用法">
    <template #desc>依次展示默认比例、16/9 和 1:1</template>
    <DemoRow flex>
      <MxImage
        src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/1031.jpg"
        width="200px"
      />
      <MxImage
        src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/1031.jpg"
        width="200px"
        aspect-ratio="16/9"
      />
      <MxImage
        src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/1031.jpg"
        width="200px"
        aspect-ratio="1/1"
      />
    </DemoRow>
  </DemoCard>
  <DemoCard title="加载失败">
    <DemoRow>
      <MxImage
        src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/10311.jpg"
        width="200px"
      />
    </DemoRow>
  </DemoCard>
</template>
