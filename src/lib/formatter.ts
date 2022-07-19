/**
 * 格式化器
 */

import dayjs from 'dayjs'

/**
 * 日期时间格式化
 * @param datetime  日期时间值
 * @param format    日期时间格式
 * @see {@link https://day.js.org/docs/en/display/format#list-of-all-available-formats}
 * @returns 格式化日期字符串, 默认: YYYY-MM-DD HH:mm:ss
 */
export function formatDatetime({
  datetime = new Date(),
  format = 'YYYY-MM-DD HH:mm:ss'
}: {
  datetime?: dayjs.ConfigType
  format?: string
} = {}) {
  return dayjs(datetime).format(format)
}