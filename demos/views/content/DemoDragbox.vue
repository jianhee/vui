<!-- 拖拽 -->
<template>
  <DemoCard title="基础用法">
    <MxDragbox
      :width="180"
      :height="100"
      :min-width="50"
      :min-height="50"
      resizable
    >
      缩放<br />
      非定位元素<br />
      只能拖拽右边和下边
    </MxDragbox>
    <MxDragbox
      style="position: fixed"
      :x="500"
      :y="160"
      :width="180"
      :height="100"
      :min-width="50"
      :min-height="50"
      resizable
    >
      缩放<br />
      定位元素<br />
      可以拖拽四个边
    </MxDragbox>
    <MxDragbox
      :x="240"
      :y="310"
      :width="180"
      :height="100"
      draggable
    >
      移动
    </MxDragbox>
    <MxDragbox
      :x="240"
      :y="450"
      :width="180"
      :height="100"
      :min-width="50"
      :min-height="50"
      resizable
      draggable
    >
      缩放+移动
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
