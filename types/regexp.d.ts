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
export declare const emailExp: RegExp;
/**
 * 常规燃油车车牌号码
 *
 * @description
 * 第1位为省份汉字缩写
 * 第2位为城市编码大写字母
 * 第3-6位为数字/字母
 * 第7位为数字/字母/挂学警港澳使领
 *
 * @see {@link https://juejin.cn/post/6974216278684729374}
 */
export declare const normalNumberPlateExp: RegExp;
/**
 * 新能源车车牌号码
 *
 * @description
 * 第1位为省份汉字缩写
 * 第2位为城市编码大写字母
 * 第3-8位规则请参考百度百科
 *
 * @see {@link https://baike.baidu.com/item/%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%E4%B8%93%E7%94%A8%E5%8F%B7%E7%89%8C/19525289?fr=aladdin#5}
 * @see {@link https://www.modiauto.com.cn/bk/51403.html}
 */
export declare const newEnergyNumberPlateExp: RegExp;
//# sourceMappingURL=regexp.d.ts.map