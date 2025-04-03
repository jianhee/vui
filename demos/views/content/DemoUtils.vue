<!-- 插件+方法 -->
<template>
  <DemoCard title="i18n">{{ $t('hello') }}</DemoCard>
  <DemoCard title="toast">
    <MxBtn @click="toast.success('这是一个成功提示')">成功</MxBtn>
    <MxBtn @click="toast.error('这是一个失败提示')">失败</MxBtn>
  </DemoCard>
  <DemoCard title="字符串相关的方法">
    <MxForm derection="column">
      <MxFormFiled
        label="生成UUID"
        is-text
      >
        当前结果：<code>{{ guid() }}</code>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="数字相关的方法">
    <MxForm derection="column">
      <MxFormFiled
        label="生成随机整数"
        is-text
      >
        <DemoRow>
          默认范围 0-10000：<code>{{ randomIntNum() }}</code>
        </DemoRow>
        <DemoRow>
          指定范围 190-200：<code>{{ randomIntNum(190, 200) }}</code>
        </DemoRow>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="数组相关的方法">
    <MxForm derection="column">
      <MxFormFiled
        label="测试数据"
        is-text
      >
        <DemoRow
          v-for="(item, index) in testArray"
          :key="index"
        >
          数组{{ index + 1 }}：<code>{{ item }}</code>
        </DemoRow>
      </MxFormFiled>
      <MxFormFiled
        label="获取/检查两个数组的重复项"
        is-text
      >
        <DemoRow>
          数字数组1和2：<code>{{ getCommonItems(testArray[0], testArray[1]) }}</code> <code>{{ hasCommonItems(testArray[0], testArray[1]) }}</code>
        </DemoRow>
        <DemoRow>
          数字数组1和3：<code>{{ getCommonItems(testArray[0], testArray[2]) }}</code> <code>{{ hasCommonItems(testArray[0], testArray[2]) }}</code>
        </DemoRow>
        <DemoRow>
          对象数组4和5：<code>{{ getCommonItems(testArray[3], testArray[4], 'id') }}</code> <code>{{ hasCommonItems(testArray[3], testArray[4], 'id') }}</code>
        </DemoRow>
        <DemoRow>
          对象数组4和6：<code>{{ getCommonItems(testArray[3], testArray[5], 'id') }}</code> <code>{{ hasCommonItems(testArray[3], testArray[5], 'id') }}</code>
        </DemoRow>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="校验相关的方法">
    <MxForm derection="column">
      <MxFormFiled
        label="校验是否有效网址"
        is-text
      >
        <DemoRow
          v-for="url in testUrls"
          :key="url"
        >
          {{ url }}：<code>{{ isValidUrl(url) }}</code>
        </DemoRow>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="浏览器相关的方法">
    <MxForm derection="column">
      <MxFormFiled
        label="获取设备类型"
        is-text
      >
        当前设备：<code>{{ getDeviceType() }}</code>
      </MxFormFiled>
      <MxFormFiled
        label="获取当前URL中的指定参数"
        is-text
      >
        test参数：<code>{{ getUrlParams('test') }}</code>
      </MxFormFiled>
      <MxFormFiled label="复制文本"><MxBtn @click="onCopy">复制当前网址</MxBtn></MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="日期时间相关的方法">
    <MxForm derection="column">
      <MxFormFiled
        label="获取时间"
        is-text
      >
        <DemoRow>
          1.默认时间+默认格式：<code>{{ getDateTime() }}</code>
        </DemoRow>
        <DemoRow>
          2.指定时间+指定格式：<code>{{ getDateTime(time1, format1) }}</code>
        </DemoRow>
      </MxFormFiled>
      <MxFormFiled
        label="获取UTC时间"
        is-text
      >
        <DemoRow>
          1.默认时间+默认格式：<code>{{ getUTCDateTime() }}</code>
        </DemoRow>
        <DemoRow>
          2.指定时间+指定格式：<code>{{ getUTCDateTime(time1, format1) }}</code>
        </DemoRow>
      </MxFormFiled>
      <MxFormFiled
        label="获取语言环境的时间"
        is-text
      >
        <DemoRow>
          1.默认时间+默认格式+默认语言：<code>{{ getLocalDateTime() }}</code>
        </DemoRow>
        <DemoRow>
          2.指定时间+指定格式+默认语言：<code>{{ getLocalDateTime(time1, format2) }}</code>
        </DemoRow>
        <DemoRow>
          3.指定时间+指定格式+指定语言：<code>{{ getLocalDateTime(time1, format2, 'en-us') }}</code>
        </DemoRow>
      </MxFormFiled>
      <MxFormFiled
        label="获取相对时间"
        is-text
      >
        <DemoRow
          v-for="item in timeArray"
          :key="item"
        >
          {{ item.title }}：<code>{{ getTimeAgo(item.time) }}</code>
        </DemoRow>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
</template>

<script setup>
import { toast } from '@mxui/plugins/toast';
import { guid, randomIntNum, getCommonItems, hasCommonItems, isValidUrl, getDeviceType, getUrlParams, copyText, getDateTime, getUTCDateTime, getLocalDateTime, getTimeAgo } from '@mxui/utils';

// 数组
const testArray = [
  [1, 2, 3],
  [3, 4, 5],
  [5, 6, 7],
  [{ id: 1 }, { id: 2 }, { id: 3 }],
  [{ id: 3 }, { id: 4 }, { id: 5 }],
  [{ id: 5 }, { id: 6 }, { id: 7 }]
];

// 校验
const testUrls = ['https://123.com', 'https://123', '123.com', 'abcd01223456789'];

// 复制
async function onCopy() {
  const isSuccess = await copyText(location.href);
  if (isSuccess) {
    toast.success('复制成功');
  } else {
    toast.error('复制失败');
  }
}

// 时间
const time1 = '2025';
const format1 = 'YYYY/MM/DD HH:mm:ss';
const format2 = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };

// 相对时间
const timeStamp = Date.now();
const timeArray = [
  { title: '1分钟内', time: new Date(timeStamp - 10 * 1000) },
  { title: '1小时内', time: new Date(timeStamp - 10 * 60 * 1000) },
  { title: '1天内', time: new Date(timeStamp - 10 * 60 * 60 * 1000) },
  { title: '7天内', time: new Date(timeStamp - 5 * 24 * 60 * 60 * 1000) },
  { title: '1年内', time: new Date(timeStamp - 10 * 24 * 60 * 60 * 1000) },
  { title: '1年以上', time: new Date(timeStamp - 380 * 24 * 60 * 60 * 1000) }
];
</script>
