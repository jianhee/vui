<!-- 示例 -->
<template>
  <div class="mx-ui">
    <div class="mx-ui-title">多语言</div>
    <div class="mx-ui-card">{{ $t('hello') }}</div>
    <div class="mx-ui-title">图标</div>
    <div class="mx-ui-card">
      <div>方式1：使用 name，依次展示 默认尺寸、size=20、可点击、禁用、旋转90度、loading、多图标</div>
      <div class="mx-ui-row">
        <MxIcon name="close" />
        <MxIcon
          name="close"
          size="20"
        />
        <MxIcon
          name="close"
          size="20"
          clickable
        />
        <MxIcon
          name="close"
          size="20"
          disabled
        />
        <MxIcon
          name="close"
          size="20"
          rotate="90"
        />
        <MxIcon
          name="close"
          size="20"
          spin
        />
        <MxIcon
          :name="{
            default: 'toggle-light',
            hover: 'toggle-light-hover',
            dark: 'toggle-dark',
            darkHover: 'toggle-dark-hover'
          }"
          size="20"
          class="mx-ui-icon"
        />
      </div>
      <div>方式2：使用 component</div>
      <div class="mx-ui-row">
        <MxIcon :component="IconClose" />
        <MxIcon
          :component="IconClose"
          size="20"
        />
        <MxIcon
          :component="IconClose"
          size="20"
          clickable
        />
        <MxIcon
          :component="IconClose"
          size="20"
          disabled
        />
        <MxIcon
          :component="IconClose"
          size="20"
          rotate="90"
        />
        <MxIcon
          :component="IconClose"
          size="20"
          spin
        />
        <MxIcon
          :component="{
            default: IconToggleLight,
            hover: IconToggleLightHover,
            dark: IconToggleDark,
            darkHover: IconToggleDarkHover
          }"
          size="20"
          class="mx-ui-icon"
        />
      </div>
    </div>
    <div class="mx-ui-title">按钮</div>
    <div class="mx-ui-card">
      <div class="mx-ui-row">
        <MxBtn>default</MxBtn>
        <MxBtn disabled>disabled</MxBtn>
        <MxBtn loading>loading</MxBtn>
        <MxBtn icon="close">图标 name</MxBtn>
        <MxBtn :icon="IconClose">图标 component</MxBtn>
        <MxBtn :icon="{ name: 'close' }">图标 props.name</MxBtn>
        <MxBtn :icon="{ component: IconClose }">图标 props.component</MxBtn>
      </div>
      <div class="mx-ui-row">
        <MxBtn type="primary">primary</MxBtn>
        <MxBtn
          type="primary"
          disabled
        >
          disabled
        </MxBtn>
        <MxBtn
          type="primary"
          loading
        >
          loading
        </MxBtn>
        <MxBtn
          type="primary"
          icon="close"
        >
          图标 name
        </MxBtn>
        <MxBtn
          type="primary"
          :icon="IconClose"
        >
          图标 component
        </MxBtn>
        <MxBtn
          type="primary"
          :icon="{ name: 'close' }"
        >
          图标 props.name
        </MxBtn>
        <MxBtn
          type="primary"
          :icon="{ component: IconClose }"
        >
          图标 props.component
        </MxBtn>
      </div>
    </div>
    <div class="mx-ui-title">菜单+下拉框</div>
    <div class="mx-ui-card">
      <div>方式1：使用 trigger 打开</div>
      <div class="mx-ui-row">
        <MxDropdown trigger="hover">
          <MxBtn>hover</MxBtn>
          <template #content>
            <MxMenu :data="menuItems" />
          </template>
        </MxDropdown>
        <MxDropdown trigger="click">
          <MxBtn>click</MxBtn>
          <template #content>
            <MxMenu :data="menuItems" />
          </template>
        </MxDropdown>
        <MxDropdown trigger="contextmenu">
          <MxBtn>contextmenu</MxBtn>
          <template #content>
            <MxMenu :data="menuItems" />
          </template>
        </MxDropdown>
      </div>
      <div>方式2：使用 open 方法打开</div>
      <div class="mx-ui-row">
        <MxBtn
          ref="downdownTrigger"
          @click="openDropdown()"
        >
          对齐元素
        </MxBtn>
        <MxBtn @click="openDropdown">对齐鼠标</MxBtn>
        <MxDropdown ref="downdownContent">
          <template #content>
            <MxMenu :data="menuItems" />
          </template>
        </MxDropdown>
      </div>
    </div>
    <div class="mx-ui-title">弹窗</div>
    <div class="mx-ui-card">
      <MxBtn @click="dialogVisible = true">打开弹窗</MxBtn>
      <MxDialog
        v-model:visible="dialogVisible"
        title="标题"
      >
        内容
      </MxDialog>
    </div>
    <div class="mx-ui-title">抽屉</div>
    <div class="mx-ui-card">
      <MxBtn @click="openDrawer('left')">左侧</MxBtn>
      <MxBtn @click="openDrawer('right')">右侧</MxBtn>
      <MxDrawer
        v-model:visible="drawerVisible"
        :placement="drawerPlacement"
        title="标题"
      >
        内容
      </MxDrawer>
    </div>
    <div class="mx-ui-title">拖拽</div>
    <div class="mx-ui-card">
      <MxDragBox
        :width="100"
        :height="100"
        :min-width="50"
        :min-height="50"
        :is-draggable="false"
        :handles="['left', 'right', 'top', 'bottom']"
      >
        只能缩放
      </MxDragBox>
      <MxDragBox
        :x="200"
        :y="420"
        :width="100"
        :height="100"
        :min-width="50"
        :min-height="50"
        :handles="[]"
      >
        只能移动
      </MxDragBox>
      <MxDragBox
        :x="400"
        :y="420"
        :width="100"
        :height="100"
        :min-width="50"
        :min-height="50"
      >
        移动+缩放
      </MxDragBox>
    </div>
    <div class="mx-ui-title">图片</div>
    <div class="mx-ui-card">
      <div>默认比例、16/9、1:1、加载失败</div>
      <div class="mx-ui-row">
        <MxImage
          src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/1031.jpg"
          width="200px"
        />
        <MxImage
          src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/1031.jpg"
          width="200px"
          aspect-ratio="16/9"
        />
        <MxImage
          src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/1031.jpg"
          width="200px"
          aspect-ratio="1/1"
        />
        <MxImage
          src="https://pc-newtab.maxthonimg.com/mxbg/horizontal/10311.jpg"
          width="200px"
          aspect-ratio="1/1"
        />
      </div>
    </div>
    <div class="mx-ui-title">骨架屏</div>
    <div class="mx-ui-card">
      <MxSkeleton
        width="50%"
        center
      />
      <MxSkeleton
        aspect-ratio="16/9"
        center
        border
      />
      <MxSkeleton
        :rows="3"
        border
      />
      <MxSkeleton
        :rows="3"
        border
      />
      <MxSkeleton :rows="3" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { unrefElement } from '@vueuse/core';
import IconClose from './icons/close.svg?component';
import IconToggleLight from './icons/toggle-light.svg?component';
import IconToggleLightHover from './icons/toggle-light-hover.svg?component';
import IconToggleDark from './icons/toggle-dark.svg?component';
import IconToggleDarkHover from './icons/toggle-dark-hover.svg?component';

// 菜单
const menuItems = [
  { key: 'key1', title: '图标 name', icon: 'close' },
  { key: 'key2', title: '图标 component', icon: IconClose },
  { key: 'key3', title: '图标 props.name', icon: { name: 'close' }, divider: true },
  { key: 'key4', title: '图标 props.component', icon: { component: IconClose } }
];

// 下拉框
const downdownTrigger = ref(null);
const downdownContent = ref(null);
function openDropdown(event) {
  const el = unrefElement(downdownTrigger);
  downdownContent.value.open(event || el);
}

// 弹窗
const dialogVisible = ref(false);

// 抽屉
const drawerVisible = ref(false);
const drawerPlacement = ref(null);
function openDrawer(placement) {
  drawerVisible.value = true;
  drawerPlacement.value = placement;
}
</script>

<style lang="scss">
.mx-ui {
  padding: 20px;
  &-title {
    margin: 20px 0;
    font-size: 20px;
    color: #666;
  }
  &-card {
    padding: 20px;
    border: 1px solid #ddd;
  }
  &-row {
    display: flex;
    align-items: flex-start;
    margin: 10px 0;
  }
  &-row > .mx-icon {
    margin-right: 10px;
  }
  &-row > .mx-icon:hover {
    color: pink;
  }
  .mx-dropdown-trigger {
    margin-right: 10px;
  }
  .mx-drag-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: pink;
  }
  .mx-image {
    margin-right: 10px;
  }
}
</style>
