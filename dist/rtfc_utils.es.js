"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validator = exports.regexp = void 0;
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var normalPlateRegExp = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]$/;
var newEnergyPlateRegExp = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DABCEFGHJK])|([DABCEFGHJK][A-HJ-NP-Z0-9][0-9]{4}))$/;
var mobileRegExp = /^(\+86)?1\d{10}$/;
var regexp = /* @__PURE__ */Object.freeze( /* @__PURE__ */Object.defineProperty({
  __proto__: null,
  emailRegExp: emailRegExp,
  normalPlateRegExp: normalPlateRegExp,
  newEnergyPlateRegExp: newEnergyPlateRegExp,
  mobileRegExp: mobileRegExp
}, Symbol.toStringTag, {
  value: "Module"
}));
exports.regexp = regexp;

function checkEmail(email) {
  return emailRegExp.test(email);
}

function checkNumberPlate(numberPlate) {
  if (numberPlate.length !== 7 && numberPlate.length !== 8) {
    return false;
  }

  if (numberPlate.length === 7) {
    return normalPlateRegExp.test(numberPlate);
  }

  return newEnergyPlateRegExp.test(numberPlate);
}

function checkMobile(mobile) {
  return mobileRegExp.test(mobile);
}

var validator = /* @__PURE__ */Object.freeze( /* @__PURE__ */Object.defineProperty({
  __proto__: null,
  checkEmail: checkEmail,
  checkNumberPlate: checkNumberPlate,
  checkMobile: checkMobile
}, Symbol.toStringTag, {
  value: "Module"
}));
exports.validator = validator;