/**
 * 正则表达式
 */
/**
 * 电子邮箱地址
 *
 * @see {@link https://stackoverflow.com/a/1373724/2630689}
 * @see {@link https://stackoverflow.com/a/13975255/2630689}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#basic_validation}
 */
export declare const emailRegExp: RegExp;
/**
 * 常规燃油车车牌号码
 *
 * @description
 * - 第1位为省份汉字缩写
 * - 第2位为城市编码大写字母
 * - 第3-6位为数字/字母
 * - 第7位为数字/字母/挂学警港澳使领
 *
 * @see {@link https://juejin.cn/post/6974216278684729374}
 */
export declare const normalPlateRegExp: RegExp;
/**
 * 新能源车车牌号码
 *
 * @description
 * - 第1位为省份汉字缩写
 * - 第2位为城市编码大写字母
 * - 第3-8位规则请参考百度百科
 *
 * @see {@link https://baike.baidu.com/item/%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%E4%B8%93%E7%94%A8%E5%8F%B7%E7%89%8C/19525289?fr=aladdin#5}
 * @see {@link https://www.modiauto.com.cn/bk/51403.html}
 */
export declare const newEnergyPlateRegExp: RegExp;
/**
 * 中国大陆手机号码
 *
 * @description
 * 1. +86后面跟11位数字
 * 2. 11位数字
 */
export declare const mobileRegExp: RegExp;
/**
 * 中国大陆居民身份证号码
 *
 * @description
 * 地址码:
 * - 长6位
 * - 以数字1-9开头
 * - 后5位为0-9的数字
 * NOTE: 我国并不存在16，26开头的地区, 未做精确校验
 *
 * 年份码:
 * - 长4位
 * - 以数字18，19或20开头(若不需要18开头的年份，可以去掉18)
 * - 剩余两位为0-9的数字
 *
 * 月份码:
 * - 长2位
 * - 第一位数字为0，第二位数字为1-9
 * - 或者第一位数字为1，第二位数字为0-2
 *
 * 日期码:
 * - 长2位
 * - 第一位数字为0-2，第二位数字为1-9
 * - 或者是10，20，30，31
 * NOTE: 2月并不存在31日, 未做精确校验
 *
 * 顺序码:
 * - 长3位
 * - 是数字
 *
 * 校验码:
 * - 长1位
 * - 可以是数字，字母x或字母X
 * NOTE: 校验码是由17位本体码计算得出, 未做精确校验
 *
 * @see {@link https://www.jianshu.com/p/8ee4ad0c1f31}
 */
export declare const IDCardNoRegExp: RegExp;
//# sourceMappingURL=regexp.d.ts.map