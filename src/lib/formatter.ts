/**
 * 格式化器
 */

import dayjs from 'dayjs'

/**
 * 日期时间格式化
 * @param datetime  日期时间值
 * @param format    日期时间格式
 * @returns 格式化日期字符串, 默认: YYYY-MM-DD HH:mm:ss
 * 
 * @see {@link https://day.js.org/docs/en/display/format#list-of-all-available-formats}
 */
export function formatDatetime ({
  datetime = new Date(),
  format = 'YYYY-MM-DD HH:mm:ss'
}: {
  datetime?: dayjs.ConfigType
  format?: string
} = {}) {
  return dayjs(datetime).format(format)
}

/**
 * 数字千分位表示法
 * @param number  数字或数字字符串
 * @param options 格式化配置
 * @returns 格式化千分位数字, 如: 1,234,567
 * 
 * @see {@link https://docs.oracle.com/cd/E19455-01/806-0169/overview-9/index.html}
 * @see {@link https://stackoverflow.com/a/17663871/2630689}
 */
export function formatThousandSeparator (number: number | string = 0, options: Intl.NumberFormatOptions = {}) {
  number = Number(number)
  if (isNaN(number)) {
    return 'Invalid Number'
  }
  if (number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER) {
    return 'Out of Range'
  }
  return number.toLocaleString('zh-CN', {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
    maximumFractionDigits: 2,
    ...options,
  })
}