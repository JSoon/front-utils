/**
 * 验证器
 */

import { emailRegExp, IDCardNoRegExp, mobileRegExp, newEnergyPlateRegExp, normalPlateRegExp, positiveRN2DExp, positiveRN3DExp, strongPasswordExp, } from './regexp';

/**
 * 校验电子邮箱地址是否合法
 * @param email 电子邮箱地址
 */
export function checkEmail (email: string) {
  // // NOTE: 考虑是否使用浏览器厂商实现的规则??
  // const input = document.createElement('input')
  // input.type = 'email'
  // input.required = true
  // input.value = email
  // // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity#browser_compatibility
  // return typeof input.checkValidity === 'function' ? input.checkValidity() : emailExp.test(email)

  return emailRegExp.test(email);
}

/**
 * 校验车牌号码是否合法
 * @param numberPlate 车牌号码
 */
export function checkNumberPlate (numberPlate: string) {
  if (numberPlate.length !== 7 && numberPlate.length !== 8) {
    return false;
  }
  // 常规燃油车牌
  if (numberPlate.length === 7) {
    return normalPlateRegExp.test(numberPlate);
  }
  // 新能源车牌
  return newEnergyPlateRegExp.test(numberPlate);
}

/**
 * 校验手机号码是否合法
 * @param mobile 手机号码
 */
export function checkMobile (mobile: string): boolean {
  return mobileRegExp.test(mobile);
}

/**
 * 校验身份证号码是否合法
 * @param idCardNo 身份证号码
 */
export function checkIDCardNo (idCardNo: string) {
  return IDCardNoRegExp.test(idCardNo);
}

/**
 * 校验是否为强密码
 * @param password 密码
 */
export function checkStrongPassword (password: string) {
  return strongPasswordExp.test(password);
}

/**
 * 校验是否为正有理数(最多2位小数)
 * @param numberString 数字字符串
 */
export function checkPositiveRN2Exp (numberString: string) {
  return positiveRN2DExp.test(numberString);
}

/**
 * 校验是否为正有理数(最多3位小数)
 * @param numberString 数字字符串
 */
export function checkPositiveRN3Exp (numberString: string) {
  return positiveRN3DExp.test(numberString);
}

/**
 * 校验是否是数字字符串
 * @param numberString 数字字符串
 * @param maxLength 最大长度
 */
export function checkNumberString (numberString: string, maxLength?: number) {
  const reg = maxLength ? new RegExp(`^\\d{0,${maxLength}}$`) : /^\d*$/;
  return reg.test(numberString);
}