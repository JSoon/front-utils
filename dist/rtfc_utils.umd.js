"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (e, n) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && typeof module != "undefined" ? n(exports) : typeof define == "function" && define.amd ? define(["exports"], n) : (e = typeof globalThis != "undefined" ? globalThis : e || self, n(e.rtfc_utils = {}));
})(void 0, function (e) {
  "use strict";

  var n = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      r = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]$/,
      o = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DABCEFGHJK])|([DABCEFGHJK][A-HJ-NP-Z0-9][0-9]{4}))$/;
  var l = Object.freeze(Object.defineProperty({
    __proto__: null,
    emailExp: n,
    normalNumberPlateExp: r,
    newEnergyNumberPlateExp: o
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function i(t) {
    return n.test(t);
  }

  function a(t) {
    return t.length !== 7 && t.length !== 8 ? !1 : t.length === 7 ? r.test(t) : o.test(t);
  }

  var u = Object.freeze(Object.defineProperty({
    __proto__: null,
    checkEmail: i,
    checkNumberPlate: a
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  e.regexp = l, e.validator = u, Object.defineProperties(e, _defineProperty({
    __esModule: {
      value: !0
    }
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});