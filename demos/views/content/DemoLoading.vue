<!-- 加载状态 -->
<template>
  <DemoCard title="基础用法">
    <template #desc><code>props.animation</code> 动画，默认 <code>loop</code> 转圈，<code>bubble</code> 气泡</template>
    <DemoRow flex>
      <MxLoading />
      <MxLoading animate="bubble" />
    </DemoRow>
  </DemoCard>
  <DemoCard title="图标">
    <template #desc><code>props.icon</code> 自定义图标，MxIcon 组件的 name/component/props</template>
    <DemoRow flex>
      <MxLoading :icon="IconClose" />
      <MxLoading :icon="{ component: IconClose, size: 100 }" />
    </DemoRow>
  </DemoCard>
  <DemoCard title="文本">
    <template #desc>
      <ol>
        <li><code>props.text</code> 文本内容</li>
        <li><code>props.showText</code> 是否显示文本</li>
      </ol>
    </template>
    <DemoRow flex>
      <MxLoading text="加载中..." />
      <MxLoading :show-text="false" />
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import IconClose from '@/assets/icons/close.svg?component';
</script>
