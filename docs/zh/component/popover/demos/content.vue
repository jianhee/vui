<template>
  <DemoSpace flex>
    <VComponentMatchRoute content="这里是属性定义的弹框内容">
      <VButton>hover 属性定义弹框内容</VButton>
    </VComponentMatchRoute>

    <VComponentMatchRoute>
      <VButton>hover 插槽定义弹框内容</VButton>
      <template #content>这里是插槽定义的弹框内容</template>
    </VComponentMatchRoute>
  </DemoSpace>
</template>
