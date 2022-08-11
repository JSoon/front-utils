/**
 * 验证器
 */
/**
 * 校验电子邮箱地址是否合法
 * @param email 电子邮箱地址
 */
export declare function checkEmail(email: string): boolean;
/**
 * 校验车牌号码是否合法
 * @param numberPlate 车牌号码
 */
export declare function checkNumberPlate(numberPlate: string): boolean;
/**
 * 校验手机号码是否合法
 * @param mobile 手机号码
 */
export declare function checkMobile(mobile: string): boolean;
/**
 * 校验身份证号码是否合法
 * @param idCardNo 身份证号码
 */
export declare function checkIDCardNo(idCardNo: string): boolean;
/**
 * 校验是否为强密码
 * @param password 密码
 */
export declare function checkStrongPassword(password: string): boolean;
/**
 * 校验是否为正有理数(最多2位小数)
 * @param numberString 数字字符串
 */
export declare function checkPositiveRN2Exp(numberString: string): boolean;
/**
 * 校验是否为正有理数(最多3位小数)
 * @param numberString 数字字符串
 */
export declare function checkPositiveRN3Exp(numberString: string): boolean;
/**
 * 校验是否是数字字符串
 * @param numberString 数字字符串
 * @param maxLength 最大长度
 */
export declare function checkNumberString(numberString: string, maxLength?: number): boolean;
//# sourceMappingURL=validator.d.ts.map