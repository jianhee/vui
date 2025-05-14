<!-- 图片 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li>`props.src` 图片地址</li>
        <li>`props.loadingImg` 加载中的图片地址，默认使用骨架屏</li>
        <li>`props.errorImg` 加载失败的图片地址</li>
      </ol>
    </template>
    <DemoRow flex>
      <VImage
        src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/1031.jpg"
        width="200px"
      />
      <VImage
        src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/10311.jpg"
        width="200px"
      />
    </DemoRow>
  </DemoCard>
  <DemoCard title="图片宽度">
    <template #desc>`props.width`</template>
    <DemoRow flex>
      <VImage
        src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/1031.jpg"
        width="200px"
      />
      <VImage
        src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/1031.jpg"
        width="150px"
      />
    </DemoRow>
  </DemoCard>
  <DemoCard title="图片宽高比">
    <template #desc>`props.aspectRatio` 默认按照原始比例展示完整图片，设置后按指定比例展示部分图片</template>
    <DemoRow flex>
      <VImage
        src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/1031.jpg"
        width="200px"
        aspect-ratio="16/9"
      />
      <VImage
        src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/1031.jpg"
        width="200px"
        aspect-ratio="1/1"
      />
    </DemoRow>
  </DemoCard>
</template>
