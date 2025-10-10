<template>
  <DemoSpace flex>
    <VPopover>
      <VButton>hover 使用插槽定义弹框内容</VButton>
      <template #content>这里的内容是插槽定义的</template>
    </VPopover>

    <VPopover content="这里的内容是属性定义的">
      <VButton>hover 使用属性定义弹框内容</VButton>
    </VPopover>
  </DemoSpace>
</template>
