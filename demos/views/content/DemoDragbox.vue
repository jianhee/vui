<!-- 拖拽 -->
<template>
  <DemoCard title="缩放">
    <DemoRow>
      <MxDragbox
        :width="180"
        :height="100"
        :min-width="50"
        :min-height="50"
        resizable
      >
        非定位元素缩放
        <br />
        只能调整右边和下边
      </MxDragbox>
      <MxDragbox
        position="fixed"
        :x="500"
        :y="160"
        :width="180"
        :height="100"
        :min-width="50"
        :min-height="50"
        resizable
      >
        定位元素缩放
        <br />
        可以调整四个边
      </MxDragbox>
    </DemoRow>
  </DemoCard>
  <DemoCard title="移动">
    <DemoRow>
      <MxDragbox
        :width="180"
        :height="100"
        draggable
      >
        非定位元素移动
        <br />
        不支持
      </MxDragbox>
      <MxDragbox
        position="fixed"
        :x="500"
        :y="400"
        :width="180"
        :height="100"
        draggable
      >
        定位元素移动
      </MxDragbox>
    </DemoRow>
  </DemoCard>
  <DemoCard title="缩放+移动">
    <MxDragbox
      :width="180"
      :height="100"
      :min-width="50"
      :min-height="50"
      resizable
    >
      非定位元素缩放+移动
    </MxDragbox>
    <MxDragbox
      position="fixed"
      :x="500"
      :y="600"
      :width="180"
      :height="100"
      :min-width="50"
      :min-height="50"
      resizable
      draggable
    >
      定位元素缩放+移动
    </MxDragbox>
  </DemoCard>
</template>

<style scoped>
.mx-drag-box {
  display: flex;
  padding: 10px;
  background-color: pink;
}
</style>
