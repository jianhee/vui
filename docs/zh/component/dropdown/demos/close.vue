<template>
  <DemoSpace flex>
    <VDropdown class="demo-dropdown">
      <VButton>点击内部不会关闭（默认）</VButton>
      <template #dropdown>点击内部不会关闭</template>
    </VDropdown>

    <VDropdown
      close-on-click-dropdown
      class="demo-dropdown"
    >
      <VButton>点击内部可以关闭</VButton>
      <template #dropdown>点击内部可以关闭</template>
    </VDropdown>
  </DemoSpace>
</template>
