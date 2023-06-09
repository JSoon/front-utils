/**
 * 格式化器
 */
import dayjs from 'dayjs';
/**
 * 日期时间格式化
 * @param datetime  日期时间值
 * @param format    日期时间格式
 * @returns 格式化日期字符串, 默认: YYYY-MM-DD HH:mm:ss
 *
 * @see {@link https://day.js.org/docs/en/display/format#list-of-all-available-formats}
 */
export declare function formatDatetime({ datetime, format, }: {
    datetime?: dayjs.ConfigType;
    format?: string;
}): string;
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
export declare function formatThousandSeparator(number?: number | string, options?: Intl.NumberFormatOptions): string;
//# sourceMappingURL=formatter.d.ts.map