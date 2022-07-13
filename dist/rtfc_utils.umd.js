"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (e, t) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && typeof module != "undefined" ? t(exports) : typeof define == "function" && define.amd ? define(["exports"], t) : (e = typeof globalThis != "undefined" ? globalThis : e || self, t(e.rtfc_utils = {}));
})(void 0, function (e) {
  "use strict";

  var t = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  var o = Object.freeze(Object.defineProperty({
    __proto__: null,
    emailExp: t
  }, Symbol.toStringTag, {
    value: "Module"
  }));

  function i(l) {
    return t.test(l);
  }

  var n = Object.freeze(Object.defineProperty({
    __proto__: null,
    checkEmail: i
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  e.regexp = o, e.validator = n, Object.defineProperties(e, _defineProperty({
    __esModule: {
      value: !0
    }
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});