<!-- 图标 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>依次展示默认状态、可点击状态、禁用状态、旋转45度、旋转动画</template>
    <DemoRow>使用 name</DemoRow>
    <DemoRow flex>
      <MxIcon name="close" />
      <MxIcon
        name="close"
        clickable
      />
      <MxIcon
        name="close"
        disabled
      />
      <MxIcon
        name="close"
        rotate="45"
      />
      <MxIcon
        name="close"
        spin
      />
    </DemoRow>
    <DemoRow>使用 component</DemoRow>
    <DemoRow flex>
      <MxIcon :component="IconClose" />
      <MxIcon
        :component="IconClose"
        clickable
      />
      <MxIcon
        :component="IconClose"
        disabled
      />
      <MxIcon
        :component="IconClose"
        rotate="45"
      />
      <MxIcon
        :component="IconClose"
        spin
      />
    </DemoRow>
  </DemoCard>
  <DemoCard title="图标尺寸">
    <DemoRow>使用 name</DemoRow>
    <DemoRow flex>
      <MxIcon name="close" />
      <MxIcon
        name="close"
        size="28"
      />
      <MxIcon
        name="close"
        size="32"
      />
      <MxIcon
        name="close"
        size="36"
      />
    </DemoRow>
    <DemoRow>使用 component</DemoRow>
    <DemoRow flex>
      <MxIcon :component="IconClose" />
      <MxIcon
        :component="IconClose"
        size="28"
      />
      <MxIcon
        :component="IconClose"
        size="32"
      />
      <MxIcon
        :component="IconClose"
        size="36"
      />
    </DemoRow>
  </DemoCard>
  <DemoCard title="多色图标切换">
    <DemoRow>使用 name</DemoRow>
    <DemoRow>
      <MxIcon
        :name="{
          default: 'toggle-light',
          hover: 'toggle-light-hover',
          dark: 'toggle-dark',
          darkHover: 'toggle-dark-hover'
        }"
      />
    </DemoRow>
    <DemoRow>使用 component</DemoRow>
    <DemoRow>
      <MxIcon
        :component="{
          default: IconToggleLight,
          hover: IconToggleLightHover,
          dark: IconToggleDark,
          darkHover: IconToggleDarkHover
        }"
      />
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import IconClose from '@/assets/icons/close.svg?component';
import IconToggleLight from '@/assets/icons/toggle-light.svg?component';
import IconToggleLightHover from '@/assets/icons/toggle-light-hover.svg?component';
import IconToggleDark from '@/assets/icons/toggle-dark.svg?component';
import IconToggleDarkHover from '@/assets/icons/toggle-dark-hover.svg?component';
</script>

<style scoped>
.mx-icon {
  font-size: 24px;
}
.mx-icon:hover {
  color: pink;
}
</style>
