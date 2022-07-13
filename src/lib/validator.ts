/**
 * 验证器
 */

import { emailExp } from "./regexp"

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

  return emailExp.test(email)
}