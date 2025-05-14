<!-- 拖拽移动+缩放 -->
<template>
  <DemoCard title="移动">
    <template #desc>
      <ol>
        <li>`props.draggable` 是否可移动</li>
        <li>`v-model:x` 和 `v-model:y` 当前位置</li>
      </ol>
    </template>
    <VDragbox
      draggable
      :x="500"
      :y="150"
      :width="180"
      :height="100"
    >
      移动
    </VDragbox>
  </DemoCard>
  <DemoCard title="缩放">
    <template #desc>
      <ol>
        <li>`props.resizable` 是否可缩放</li>
        <li>`props.handles` 缩放时可拖拽的轴，非定位元素只支持右边和下边</li>
        <li>`props.fixed` 是否固定定位</li>
        <li>`v-model:width` 和 `v-model:height` 当前尺寸</li>
        <li>`props.min-width` 和 `props.min-height` 最小尺寸</li>
      </ol>
    </template>
    <VDragbox
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
    </VDragbox>
    <VDragbox
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
    </VDragbox>
    <VDragbox
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
    </VDragbox>
  </DemoCard>
  <DemoCard title="移动+缩放">
    <VDragbox
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
    </VDragbox>
  </DemoCard>
</template>

<style scoped>
.vui-dragbox {
  display: flex;
  padding: 10px;
  background-color: pink;
}
</style>
