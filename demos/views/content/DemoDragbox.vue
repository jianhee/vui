<!-- 拖拽移动+缩放 -->
<template>
  <DemoCard title="移动">
    <template #desc>
      <ol>
        <li><code>props.draggable</code> 是否可移动</li>
        <li><code>v-model:x</code> 和 <code>v-model:y</code> 当前位置</li>
      </ol>
    </template>
    <MxDragbox
      draggable
      :x="500"
      :y="150"
      :width="180"
      :height="100"
    >
      移动
    </MxDragbox>
  </DemoCard>
  <DemoCard title="缩放">
    <template #desc>
      <ol>
        <li><code>props.resizable</code> 是否可缩放</li>
        <li><code>props.handles</code> 缩放时可拖拽的轴</li>
        <li><code>props.fixed</code> 是否固定定位</li>
        <li><code>v-model:width</code> 和 <code>v-model:height</code> 当前尺寸</li>
        <li><code>props.min-width</code> 和 <code>props.min-height</code> 最小尺寸</li>
      </ol>
    </template>
    <MxDragbox
      resizable
      :fixed="false"
      :width="180"
      :height="100"
      :min-width="50"
      :min-height="50"
    >
      缩放<br />
      非定位元素<br />
      只能拖拽右边和下边
    </MxDragbox>
    <MxDragbox
      resizable
      :x="500"
      :y="510"
      :width="180"
      :height="100"
      :min-width="50"
      :min-height="50"
    >
      缩放<br />
      定位元素<br />
      可以拖拽四个边
    </MxDragbox>
    <MxDragbox
      resizable
      handles="right"
      :x="800"
      :y="510"
      :width="180"
      :height="100"
      :min-width="50"
      :min-height="50"
    >
      缩放<br />
      定位元素<br />
      自定义可拖拽的轴
    </MxDragbox>
  </DemoCard>
  <DemoCard title="移动+缩放">
    <MxDragbox
      draggable
      resizable
      :x="800"
      :y="650"
      :width="180"
      :height="100"
      :min-width="50"
      :min-height="50"
    >
      移动+缩放
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
