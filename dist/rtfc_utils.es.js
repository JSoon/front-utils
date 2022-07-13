"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validator = exports.regexp = void 0;
var emailExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var regexp = /* @__PURE__ */Object.freeze( /* @__PURE__ */Object.defineProperty({
  __proto__: null,
  emailExp: emailExp
}, Symbol.toStringTag, {
  value: "Module"
}));
exports.regexp = regexp;

function checkEmail(email) {
  return emailExp.test(email);
}

var validator = /* @__PURE__ */Object.freeze( /* @__PURE__ */Object.defineProperty({
  __proto__: null,
  checkEmail: checkEmail
}, Symbol.toStringTag, {
  value: "Module"
}));
exports.validator = validator;