"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validator = exports.regexp = void 0;
var emailExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var normalNumberPlateExp = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]$/;
var newEnergyNumberPlateExp = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DABCEFGHJK])|([DABCEFGHJK][A-HJ-NP-Z0-9][0-9]{4}))$/;
var regexp = /* @__PURE__ */Object.freeze( /* @__PURE__ */Object.defineProperty({
  __proto__: null,
  emailExp: emailExp,
  normalNumberPlateExp: normalNumberPlateExp,
  newEnergyNumberPlateExp: newEnergyNumberPlateExp
}, Symbol.toStringTag, {
  value: "Module"
}));
exports.regexp = regexp;

function checkEmail(email) {
  return emailExp.test(email);
}

function checkNumberPlate(numberPlate) {
  if (numberPlate.length !== 7 && numberPlate.length !== 8) {
    return false;
  }

  if (numberPlate.length === 7) {
    return normalNumberPlateExp.test(numberPlate);
  }

  return newEnergyNumberPlateExp.test(numberPlate);
}

var validator = /* @__PURE__ */Object.freeze( /* @__PURE__ */Object.defineProperty({
  __proto__: null,
  checkEmail: checkEmail,
  checkNumberPlate: checkNumberPlate
}, Symbol.toStringTag, {
  value: "Module"
}));
exports.validator = validator;