// 日期时间相关的方法
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import message from '../locals/datetime.js';
dayjs.extend(utc);

/**
 * 获取时间
 * @param {string|Date} datetime  本地时间：默认当前时间
 * @param {string} format         格式：默认为空，参考 https://day.js.org/docs/zh-CN/display/format
 * @returns {string}              和格式匹配的时间：'2008-08-08' ...
 */
export function getDateTime(_datetime, _format) {
  const date = _datetime ? dayjs(_datetime) : dayjs();
  return date.format(_format);
}

/**
 * 获取UTC时间
 * @param {string|Date} datetime  本地时间：默认当前时间
 * @param {string} format         格式：默认为空，参考 https://day.js.org/docs/zh-CN/display/format
 * @returns {string}              和格式匹配的时间：'2008-08-08' ...
 */
export function getUTCDateTime(_datetime, _format) {
  const date = _datetime ? dayjs(_datetime) : dayjs();
  return date.utc().format(_format);
}

/**
 * 获取语言环境的时间
 * @param {string|Date} date  本地时间：默认当前时间
 * @param {string} format     格式：默认为空，参考 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {string} local      语言：默认当前语言
 * @returns {string}          和格式匹配的时间：'2023年1月06日 星期五' ...
 */
export function getLocalDateTime(_datetime, _format, _local) {
  const date = _datetime ? new Date(_datetime) : new Date();
  const local = _local || window.navigator.language;
  return new Intl.DateTimeFormat(local, _format).format(date);
}

/**
 * 获取相对时间（多久之前）
 * @param {string|Date} date  要比较的时间
 * @returns {string}          相对时间描述："5s ago" ...
 */
export function getTimeAgo(_datetime) {
  if (!_datetime) return '';

  const date = dayjs(_datetime);
  const now = dayjs();

  // 1分钟内："5s ago"
  const diffSeconds = now.diff(date, 'second');
  if (diffSeconds < 60) {
    return `${diffSeconds}${message.s}`;
  }

  // 1小时内："5m ago"
  const diffMinutes = now.diff(date, 'minute');
  if (diffMinutes < 60) {
    return `${diffMinutes}${message.m}`;
  }

  // 1天内："5h ago"
  const diffHours = now.diff(date, 'hour');
  if (diffHours < 24) {
    return `${diffHours}${message.h}`;
  }

  // 7天内："5d ago"
  const diffDays = now.diff(date, 'day');
  if (diffDays < 7) {
    return `${diffDays}${message.d}`;
  }

  // 1年内："Jan 21"
  const diffYears = now.diff(date, 'year');
  if (diffYears < 1) {
    return date.format(message.mm);
  }

  // 1年以上："Jan 2023"
  return date.format(message.yy);
}
