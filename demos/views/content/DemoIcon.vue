<!-- 图标 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li><code>props.name</code> 图标名称，或者 <code>props.component</code> 图标组件</li>
        <li><code>props.color</code> 图标颜色，为空继承 css <code>color</code></li>
        <li><code>props.clickable</code> 是否可点击</li>
        <li><code>props.disabled</code> 是否禁用</li>
        <li><code>props.rotate</code> 旋转角度</li>
        <li><code>props.spin</code> 是否使用旋转动画</li>
      </ol>
    </template>
    <DemoRow>使用 name</DemoRow>
    <DemoRow flex>
      <MxIcon name="close" />
      <MxIcon
        name="close"
        color="red"
      />
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
        color="red"
      />
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
  <DemoCard title="图标大小">
    <template #desc><code>props.size</code>，为空继承 css <code>font-size</code></template>
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
  <DemoCard title="多图标">
    <template #desc>
      <ol>
        <li>单图标：适用于单色图标或者无需切换状态，手动设置 color 对应不同状态，比如 <code>props.name="close"</code></li>
        <li>多图标：适用于多色图标并且需要切换状态，内部自动切换图标对应不同状态，比如 <code>props.name="{ default: 'close', hover: 'close-hover', dark: 'close-dark', darkHover: 'close-dark-hover' }</code></li>
      </ol>
    </template>
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
</style>
