// 日期时间相关的方法
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

/**
 * 获取格式化后的UTC日期
 * @param {string|Date} date  本地日期：默认当前时间
 * @param {string} format     格式：默认 'YYYY-MM-DD'
 * @returns {string}          和格式匹配的日期：'2023-01-06' ...
 */
export function getUTCDate(_date, _format) {
  const utcDate = _date ? dayjs(_date).utc() : dayjs.utc();
  const format = _format || 'YYYY-MM-DD';
  return utcDate.format(format);
}

/**
 * 获取格式化后的本地日期
 * @param {string|Date} date  本地日期：默认当前时间
 * @param {string} format     格式
 * @returns {string}          和格式匹配的日期：'2023-01-06' ...
 */
export function getLocalDate(_format, _date) {
  const formatOptions = {
    // 2023-01-06
    'YYYY-MM-DD': { year: 'numeric', month: '2-digit', day: '2-digit' },
    // 2023-01-06 20:50
    'YYYY-MM-DD HH:mm': { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false },
    // 2023年1月06日 星期五
    'YYYY-MM-DD dddd': { year: 'numeric', month: 'long', day: '2-digit', weekday: 'long' }
  };
  const date = _date ? new Date() : new Date(_date);
  return new Intl.DateTimeFormat(window.navigator.language, formatOptions).format(date);
}

/**
 * 获取相对时间
 * @param {string|Date} date  要比较的日期
 * @returns {string}          相对时间描述："5s ago" ...
 */
export function getTimeAgo(_date) {
  if (!_date) return '';

  const date = dayjs(_date);
  const now = dayjs();

  // 1分钟内："5s ago"
  const diffSeconds = now.diff(date, 'second');
  if (diffSeconds < 60) {
    return `${diffSeconds}s ago`;
  }

  // 1小时内："5m ago"
  const diffMinutes = now.diff(date, 'minute');
  if (diffMinutes < 60) {
    return `${diffMinutes}m ago`;
  }

  // 1天内："5h ago"
  const diffHours = now.diff(date, 'hour');
  if (diffHours < 24) {
    return `${diffHours}h ago`;
  }

  // 7天内："5d ago"
  const diffDays = now.diff(date, 'day');
  if (diffDays < 7) {
    return `${diffDays}d ago`;
  }

  // 1年内："Jan 21"
  const diffYears = now.diff(date, 'year');
  if (diffYears <= 1) {
    return date.format('MMM D');
  }

  // 1年以上："Jan 2023"
  return date.format('MMM YYYY');
}
