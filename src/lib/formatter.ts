/**
 * 格式化器
 */

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

/**
 * 日期时间格式化
 * @param datetime  日期时间值
 * @param format    日期时间格式
 * @returns 格式化日期字符串, 默认: YYYY-MM-DD HH:mm:ss
 * 
 * @see {@link https://day.js.org/docs/en/display/format#list-of-all-available-formats}
 */
export function formatDatetime ({
  datetime = new Date,
  format = 'YYYY-MM-DD HH:mm:ss',
}: {
  datetime?: dayjs.ConfigType
  format?: string
}) {
  return dayjs(datetime).format(format);
}

/**
 * 数字千分位表示法
 * 
 * @description 由于本质上调用的是 Number.prototype.toLocaleString(), 所以 toLocaleString 支持的格式化都能实现
 * 
 * @param number  数字或数字字符串
 * @param options 格式化配置
 * @returns 格式化千分位数字, 如: 1,234,567
 * 
 * @see {@link https://docs.oracle.com/cd/E19455-01/806-0169/overview-9/index.html}
 * @see {@link https://stackoverflow.com/a/17663871/2630689}
 */
export function formatThousandSeparator (number: number | string = 0, options: Intl.NumberFormatOptions = {}) {
  number = Number(number);
  if (isNaN(number)) {
    return 'Invalid Number';
  }
  if (number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER) {
    return 'Out of Range';
  }
  return number.toLocaleString('zh-CN', {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
    useGrouping: true, // 是否显示千分位分组（即逗号分隔符）
    maximumFractionDigits: 2, // 最大小数位
    ...options,
  });
}

/**
 * 毫秒数格式化，最多显示到天
 * @param ms 毫秒数
 * @returns 格式化后的时间字符串，如：1分钟30秒
 */
export function formatMilliseconds (ms: number) {
  if (!ms) return '';
  const d = dayjs.duration(ms);
  const seconds = d.seconds() ? `${d.seconds()}秒` : '';
  const minutes = d.minutes() ? `${d.minutes()}分钟` : '';
  const hours = d.hours() ? `${d.hours()}小时` : '';
  const days = d.days() ? `${d.days()}天` : '';

  // 小于1秒，显示毫秒
  if (ms < 1000) return `${ms}毫秒`;
  // 小于1分钟，显示秒
  if (ms < 60 * 1000) return `${seconds}`;
  // 小于1小时，显示分钟
  if (ms < 60 * 60 * 1000) return `${minutes}${seconds}`;
  // 小于1天，显示小时
  if (ms < 24 * 60 * 60 * 1000) return `${hours}${minutes}${seconds}`;
  // 其他情况，显示天
  return `${days}${hours}${minutes}${seconds}`;
}