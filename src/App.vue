<!-- 示例 -->
<template>
  <div class="mx-ui">
    <div class="mx-ui-title">多语言</div>
    <div class="mx-ui-card">{{ $t('hello') }}</div>
    <div class="mx-ui-title">图标</div>
    <div class="mx-ui-card">
      <div>使用 name：默认尺寸、size=20、可点击、禁用、旋转90度、loading</div>
      <div class="mx-ui-row">
        <MxIcon name="search" />
        <MxIcon
          name="search"
          size="20"
        />
        <MxIcon
          name="search"
          size="20"
          clickable
        />
        <MxIcon
          name="search"
          size="20"
          disabled
        />
        <MxIcon
          name="search"
          size="20"
          rotate="90"
        />
        <MxIcon
          name="search"
          size="20"
          spin
        />
      </div>
      <div>使用 slot</div>
      <div class="mx-ui-row">
        <MxIcon>
          <IconLoading />
        </MxIcon>
        <MxIcon size="20">
          <IconLoading />
        </MxIcon>
      </div>
    </div>
    <div class="mx-ui-title">按钮</div>
    <div class="mx-ui-card">
      <div class="mx-ui-row">
        <MxBtn> default </MxBtn>
        <MxBtn disabled> disabled </MxBtn>
        <MxBtn loading> loading </MxBtn>
        <MxBtn pre-icon="search"> 前置图标 </MxBtn>
        <MxBtn post-icon="search"> 后置图标 </MxBtn>
      </div>
      <div class="mx-ui-row">
        <MxBtn type="primary"> primary </MxBtn>
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
          pre-icon="search"
        >
          前置图标
        </MxBtn>
        <MxBtn
          type="primary"
          post-icon="search"
        >
          后置图标
        </MxBtn>
      </div>
    </div>
    <div class="mx-ui-title">拖拽</div>
    <div class="mx-ui-card">
      <mx-drag-box
        :width="100"
        :height="100"
        :min-width="50"
        :min-height="50"
        :is-draggable="false"
        :handles="['left', 'right', 'top', 'bottom']"
      >
        只能缩放
      </mx-drag-box>
      <mx-drag-box
        :x="200"
        :y="420"
        :width="100"
        :height="100"
        :min-width="50"
        :min-height="50"
        :handles="[]"
      >
        只能移动
      </mx-drag-box>
      <mx-drag-box
        :x="400"
        :y="420"
        :width="100"
        :height="100"
        :min-width="50"
        :min-height="50"
      >
        移动+缩放
      </mx-drag-box>
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
    <div class="mx-ui-title">下拉框</div>
    <div class="mx-ui-card">
      <div>使用 trigger 触发</div>
      <div class="mx-ui-row">
        <MxDropdown trigger="hover">
          <MxBtn>hover</MxBtn>
          <template #content>
            <div class="mx-ui-dropdown">内容</div>
          </template>
        </MxDropdown>
        <MxDropdown trigger="click">
          <MxBtn>click</MxBtn>
          <template #content>
            <div class="mx-ui-dropdown">内容</div>
          </template>
        </MxDropdown>
        <MxDropdown trigger="contextmenu">
          <MxBtn>contextmenu</MxBtn>
          <template #content>
            <div class="mx-ui-dropdown">内容</div>
          </template>
        </MxDropdown>
      </div>
      <div>使用方法手动触发</div>
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
            <div class="mx-ui-dropdown">内容</div>
          </template>
        </MxDropdown>
      </div>
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
import IconLoading from './icons-vue/IconLoading.vue';

// 抽屉
const drawerVisible = ref(false);
const drawerPlacement = ref(null);
function openDrawer(placement) {
  drawerVisible.value = true;
  drawerPlacement.value = placement;
}

// 下拉框
const downdownTrigger = ref(null);
const downdownContent = ref(null);
function openDropdown(event) {
  const el = unrefElement(downdownTrigger);
  downdownContent.value.open(event || el);
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
  .mx-drag-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: pink;
  }
  .mx-dropdown-trigger {
    margin-right: 10px;
  }
  &-dropdown {
    width: 100px;
    height: 100px;
    padding: 10px;
  }
  .mx-image {
    margin-right: 10px;
  }
}
</style>
