<!-- 行 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <DemoRow>所有的属性默认都是 <code>false</code>，按需开启</DemoRow>
      <ol>
        <li><code>props.tag</code> 标签，默认 <code>div</code></li>
        <li><code>props.center</code> 是否居中</li>
        <li><code>props.ellipsis</code> 是否溢出隐藏</li>
      </ol>
    </template>
    <VRow>测试文本</VRow>
  </DemoCard>
</template>
