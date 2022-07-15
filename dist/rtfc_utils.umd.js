"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (t, n) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && typeof module != "undefined" ? n(exports) : typeof define == "function" && define.amd ? define(["exports"], n) : (t = typeof globalThis != "undefined" ? globalThis : t || self, n(t.rtfc_utils = {}));
})(void 0, function (t) {
  "use strict";

  var n = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      o = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]$/,
      l = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DABCEFGHJK])|([DABCEFGHJK][A-HJ-NP-Z0-9][0-9]{4}))$/,
      i = /^(\+86)?1\d{10}$/;
  var r = Object.freeze(Object.defineProperty({
    __proto__: null,
    emailRegExp: n,
    normalPlateRegExp: o,
    newEnergyPlateRegExp: l,
    mobileRegExp: i
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function a(e) {
    return n.test(e);
  }

  function c(e) {
    return e.length !== 7 && e.length !== 8 ? !1 : e.length === 7 ? o.test(e) : l.test(e);
  }

  function u(e) {
    return i.test(e);
  }

  var f = Object.freeze(Object.defineProperty({
    __proto__: null,
    checkEmail: a,
    checkNumberPlate: c,
    checkMobile: u
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  t.regexp = r, t.validator = f, Object.defineProperties(t, _defineProperty({
    __esModule: {
      value: !0
    }
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});