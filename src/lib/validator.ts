/**
 * 验证器
 */

import { emailRegExp, mobileRegExp, newEnergyPlateRegExp, normalPlateRegExp } from "./regexp"

/**
 * 校验电子邮箱地址是否合法
 * @param email 电子邮箱地址
 * @returns 
 */
export function checkEmail (email: string): boolean {
  // // NOTE: 考虑是否使用浏览器厂商实现的规则??
  // const input = document.createElement('input')
  // input.type = 'email'
  // input.required = true
  // input.value = email
  // // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity#browser_compatibility
  // return typeof input.checkValidity === 'function' ? input.checkValidity() : emailExp.test(email)

  return emailRegExp.test(email)
}

/**
 * 校验车牌号码是否合法
 * @param numberPlate 车牌号码
 * @returns 
 */
export function checkNumberPlate (numberPlate: string): boolean {
  if (numberPlate.length !== 7 && numberPlate.length !== 8) {
    return false
  }
  // 常规燃油车牌
  if (numberPlate.length === 7) {
    return normalPlateRegExp.test(numberPlate)
  }
  // 新能源车牌
  return newEnergyPlateRegExp.test(numberPlate)
}

/**
 * 校验手机号码是否合法
 * @param mobile 手机号码
 * @returns 
 */
export function checkMobile (mobile: string): boolean {
  return mobileRegExp.test(mobile)
}