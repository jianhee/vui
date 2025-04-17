<!-- 图片 -->
<template>
  <DemoCard title="基本用法">
    <template #desc>
      <ol>
        <li><code>props.src</code> 图片地址</li>
        <li><code>props.loadingImg</code> 加载中的图片地址，默认使用骨架屏</li>
        <li><code>props.errorImg</code> 加载失败的图片地址</li>
      </ol>
    </template>
    <DemoRow flex>
      <MxImage
        src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/1031.jpg"
        width="200px"
      />
      <MxImage
        src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/10311.jpg"
        width="200px"
      />
    </DemoRow>
  </DemoCard>
  <DemoCard title="图片宽度">
    <template #desc><code>props.width</code></template>
    <DemoRow flex>
      <MxImage
        src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/1031.jpg"
        width="200px"
      />
      <MxImage
        src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/1031.jpg"
        width="150px"
      />
    </DemoRow>
  </DemoCard>
  <DemoCard title="图片宽高比">
    <template #desc><code>props.aspectRatio</code> 默认为空，按照原始比例展示完整图片，设置后按指定比例展示部分图片</template>
    <DemoRow flex>
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
</template>
