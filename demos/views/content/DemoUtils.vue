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
        当前结果：{{ guid() }}
      </MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="数字相关的方法">
    <MxForm derection="column">
      <MxFormFiled
        label="生成随机整数"
        is-text
      >
        <div>默认范围 0-10000：{{ randomIntNum() }}</div>
        <div>限制范围 190-200：{{ randomIntNum(190, 200) }}</div>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="校验相关的方法">
    <MxForm derection="column">
      <MxFormFiled
        label="校验是否有效网址"
        is-text
      >
        <div>https://123.com：{{ isValidUrl('https://123.com') }}</div>
        <div>abcd01223456789：{{ isValidUrl('abcd01223456789') }}</div>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
  <DemoCard title="浏览器相关的方法">
    <MxForm derection="column">
      <MxFormFiled
        label="获取设备类型"
        is-text
      >
        当前设备：{{ getDeviceType() }}
      </MxFormFiled>
      <MxFormFiled
        label="获取当前URL中的指定参数"
        is-text
      >
        test参数：{{ getUrlParams('test') }}
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
        <div>1.默认时间+默认格式：{{ getDateTime() }}</div>
        <div>2.指定时间+指定格式：{{ getDateTime(time1, format1) }}</div>
      </MxFormFiled>
      <MxFormFiled
        label="获取UTC时间"
        is-text
      >
        <div>1.默认时间+默认格式：{{ getUTCDateTime() }}</div>
        <div>2.指定时间+指定格式：{{ getUTCDateTime(time1, format1) }}</div>
      </MxFormFiled>
      <MxFormFiled
        label="获取语言环境的时间"
        is-text
      >
        <div>1.默认时间+默认格式+默认语言：{{ getLocalDateTime() }}</div>
        <div>2.指定时间+指定格式+默认语言：{{ getLocalDateTime(time1, format2) }}</div>
        <div>3.指定时间+指定格式+指定语言：{{ getLocalDateTime(time1, format2, 'en-us') }}</div>
      </MxFormFiled>
      <MxFormFiled
        label="获取相对时间"
        is-text
      >
        <div>1分钟内：{{ getTimeAgo(timeAgo1) }}</div>
        <div>1小时内：{{ getTimeAgo(timeAgo2) }}</div>
        <div>1天内：{{ getTimeAgo(timeAgo3) }}</div>
        <div>7天内：{{ getTimeAgo(timeAgo4) }}</div>
        <div>1年内：{{ getTimeAgo(timeAgo5) }}</div>
        <div>1年以上：{{ getTimeAgo(timeAgo6) }}</div>
      </MxFormFiled>
    </MxForm>
  </DemoCard>
</template>

<script setup>
import { toast } from '@mxui/plugins/toast';
import { guid, randomIntNum, isValidUrl, getDeviceType, getUrlParams, copyText, getDateTime, getUTCDateTime, getLocalDateTime, getTimeAgo } from '@mxui/utils';

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
const timeAgo1 = new Date(timeStamp - 10 * 1000);
const timeAgo2 = new Date(timeStamp - 10 * 60 * 1000);
const timeAgo3 = new Date(timeStamp - 10 * 60 * 60 * 1000);
const timeAgo4 = new Date(timeStamp - 5 * 24 * 60 * 60 * 1000);
const timeAgo5 = new Date(timeStamp - 10 * 24 * 60 * 60 * 1000);
const timeAgo6 = new Date(timeStamp - 380 * 24 * 60 * 60 * 1000);
</script>
