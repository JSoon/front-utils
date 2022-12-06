"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validator = exports.regexp = exports.getter = exports.formatter = exports.enums = exports.detector = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;

var __defNormalProp = function __defNormalProp(obj, key, value) {
  return key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: value
  }) : obj[key] = value;
};

var __spreadValues = function __spreadValues(a, b) {
  for (var prop in b || (b = {})) {
    if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }

  if (__getOwnPropSymbols) {
    var _iterator = _createForOfIteratorHelper(__getOwnPropSymbols(b)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return a;
};

var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var normalPlateRegExp = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]$/;
var newEnergyPlateRegExp = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DABCEFGHJK])|([DABCEFGHJK][A-HJ-NP-Z0-9][0-9]{4}))$/;
var mobileRegExp = /^(\+86)?1\d{10}$/;
var IDCardNoRegExp = /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
var strongPasswordExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*]).{8,16}$/;
var positiveRN2DExp = /^[0-9]+(.[0-9]{1,2})?$/;
var positiveRN3DExp = /^[0-9]+(.[0-9]{1,3})?$/;
var fileExtExp = /(?:\.([^.]+))?$/;
var ipv4Exp = /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
var ipv6Exp = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var urlExp = /^(?:https?:\/\/)?(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
var regexp = /* @__PURE__ */Object.freeze( /* @__PURE__ */Object.defineProperty({
  __proto__: null,
  emailRegExp: emailRegExp,
  normalPlateRegExp: normalPlateRegExp,
  newEnergyPlateRegExp: newEnergyPlateRegExp,
  mobileRegExp: mobileRegExp,
  IDCardNoRegExp: IDCardNoRegExp,
  strongPasswordExp: strongPasswordExp,
  positiveRN2DExp: positiveRN2DExp,
  positiveRN3DExp: positiveRN3DExp,
  fileExtExp: fileExtExp,
  ipv4Exp: ipv4Exp,
  ipv6Exp: ipv6Exp,
  urlExp: urlExp
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

function checkIDCardNo(idCardNo) {
  return IDCardNoRegExp.test(idCardNo);
}

function checkStrongPassword(password) {
  return strongPasswordExp.test(password);
}

function checkPositiveRN2Exp(numberString) {
  return positiveRN2DExp.test(numberString);
}

function checkPositiveRN3Exp(numberString) {
  return positiveRN3DExp.test(numberString);
}

function checkNumberString(numberString, maxLength) {
  var reg = maxLength ? new RegExp("^\\d{0,".concat(maxLength, "}$")) : /^\d*$/;
  return reg.test(numberString);
}

function checkIPv4(ipAddress) {
  return ipv4Exp.test(ipAddress);
}

function checkIPv6(ipAddress) {
  return ipv6Exp.test(ipAddress);
}

function checkURL(url) {
  return urlExp.test(url);
}

var validator = /* @__PURE__ */Object.freeze( /* @__PURE__ */Object.defineProperty({
  __proto__: null,
  checkEmail: checkEmail,
  checkNumberPlate: checkNumberPlate,
  checkMobile: checkMobile,
  checkIDCardNo: checkIDCardNo,
  checkStrongPassword: checkStrongPassword,
  checkPositiveRN2Exp: checkPositiveRN2Exp,
  checkPositiveRN3Exp: checkPositiveRN3Exp,
  checkNumberString: checkNumberString,
  checkIPv4: checkIPv4,
  checkIPv6: checkIPv6,
  checkURL: checkURL
}, Symbol.toStringTag, {
  value: "Module"
}));
exports.validator = validator;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var dayjs_min = {
  exports: {}
};

(function (module, exports) {
  !function (t, e) {
    module.exports = e();
  }(commonjsGlobal, function () {
    var t = 1e3,
        e = 6e4,
        n = 36e5,
        r = "millisecond",
        i = "second",
        s = "minute",
        u = "hour",
        a = "day",
        o = "week",
        f = "month",
        h = "quarter",
        c = "year",
        d = "date",
        $ = "Invalid Date",
        l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        M = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
    },
        m = function m(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    },
        g = {
      s: m,
      z: function z(t2) {
        var e2 = -t2.utcOffset(),
            n2 = Math.abs(e2),
            r2 = Math.floor(n2 / 60),
            i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      },
      m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()),
            i2 = e2.clone().add(r2, f),
            s2 = n2 - i2 < 0,
            u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      },
      a: function a(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      },
      p: function p(t2) {
        return {
          M: f,
          y: c,
          w: o,
          d: a,
          D: d,
          h: u,
          m: s,
          s: i,
          ms: r,
          Q: h
        }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      },
      u: function u(t2) {
        return void 0 === t2;
      }
    },
        v = "en",
        D = {};

    D[v] = M;

    var p = function p(t2) {
      return t2 instanceof _;
    },
        S = function t2(e2, n2, r2) {
      var i2;
      if (!e2) return v;

      if ("string" == typeof e2) {
        var s2 = e2.toLowerCase();
        D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
        var u2 = e2.split("-");
        if (!i2 && u2.length > 1) return t2(u2[0]);
      } else {
        var a2 = e2.name;
        D[a2] = e2, i2 = a2;
      }

      return !r2 && i2 && (v = i2), i2 || !r2 && v;
    },
        w = function w(t2, e2) {
      if (p(t2)) return t2.clone();
      var n2 = "object" == _typeof(e2) ? e2 : {};
      return n2.date = t2, n2.args = arguments, new _(n2);
    },
        O = g;

    O.l = S, O.i = p, O.w = function (t2, e2) {
      return w(t2, {
        locale: e2.$L,
        utc: e2.$u,
        x: e2.$x,
        $offset: e2.$offset
      });
    };

    var _ = function () {
      function M2(t2) {
        this.$L = S(t2.locale, null, true), this.parse(t2);
      }

      var m2 = M2.prototype;
      return m2.parse = function (t2) {
        this.$d = function (t3) {
          var e2 = t3.date,
              n2 = t3.utc;
          if (null === e2) return new Date(NaN);
          if (O.u(e2)) return new Date();
          if (e2 instanceof Date) return new Date(e2);

          if ("string" == typeof e2 && !/Z$/i.test(e2)) {
            var r2 = e2.match(l);

            if (r2) {
              var i2 = r2[2] - 1 || 0,
                  s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }

          return new Date(e2);
        }(t2), this.$x = t2.x || {}, this.init();
      }, m2.init = function () {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, m2.$utils = function () {
        return O;
      }, m2.isValid = function () {
        return !(this.$d.toString() === $);
      }, m2.isSame = function (t2, e2) {
        var n2 = w(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, m2.isAfter = function (t2, e2) {
        return w(t2) < this.startOf(e2);
      }, m2.isBefore = function (t2, e2) {
        return this.endOf(e2) < w(t2);
      }, m2.$g = function (t2, e2, n2) {
        return O.u(t2) ? this[e2] : this.set(n2, t2);
      }, m2.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function () {
        return this.$d.getTime();
      }, m2.startOf = function (t2, e2) {
        var n2 = this,
            r2 = !!O.u(e2) || e2,
            h2 = O.p(t2),
            $2 = function $2(t3, e3) {
          var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
          return r2 ? i2 : i2.endOf(a);
        },
            l2 = function l2(t3, e3) {
          return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
        },
            y2 = this.$W,
            M3 = this.$M,
            m3 = this.$D,
            g2 = "set" + (this.$u ? "UTC" : "");

        switch (h2) {
          case c:
            return r2 ? $2(1, 0) : $2(31, 11);

          case f:
            return r2 ? $2(1, M3) : $2(0, M3 + 1);

          case o:
            var v2 = this.$locale().weekStart || 0,
                D2 = (y2 < v2 ? y2 + 7 : y2) - v2;
            return $2(r2 ? m3 - D2 : m3 + (6 - D2), M3);

          case a:
          case d:
            return l2(g2 + "Hours", 0);

          case u:
            return l2(g2 + "Minutes", 1);

          case s:
            return l2(g2 + "Seconds", 2);

          case i:
            return l2(g2 + "Milliseconds", 3);

          default:
            return this.clone();
        }
      }, m2.endOf = function (t2) {
        return this.startOf(t2, false);
      }, m2.$set = function (t2, e2) {
        var n2,
            o2 = O.p(t2),
            h2 = "set" + (this.$u ? "UTC" : ""),
            $2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2],
            l2 = o2 === a ? this.$D + (e2 - this.$W) : e2;

        if (o2 === f || o2 === c) {
          var y2 = this.clone().set(d, 1);
          y2.$d[$2](l2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
        } else $2 && this.$d[$2](l2);

        return this.init(), this;
      }, m2.set = function (t2, e2) {
        return this.clone().$set(t2, e2);
      }, m2.get = function (t2) {
        return this[O.p(t2)]();
      }, m2.add = function (r2, h2) {
        var d2,
            $2 = this;
        r2 = Number(r2);

        var l2 = O.p(h2),
            y2 = function y2(t2) {
          var e2 = w($2);
          return O.w(e2.date(e2.date() + Math.round(t2 * r2)), $2);
        };

        if (l2 === f) return this.set(f, this.$M + r2);
        if (l2 === c) return this.set(c, this.$y + r2);
        if (l2 === a) return y2(1);
        if (l2 === o) return y2(7);
        var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[l2] || 1,
            m3 = this.$d.getTime() + r2 * M3;
        return O.w(m3, this);
      }, m2.subtract = function (t2, e2) {
        return this.add(-1 * t2, e2);
      }, m2.format = function (t2) {
        var e2 = this,
            n2 = this.$locale();
        if (!this.isValid()) return n2.invalidDate || $;

        var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ",
            i2 = O.z(this),
            s2 = this.$H,
            u2 = this.$m,
            a2 = this.$M,
            o2 = n2.weekdays,
            f2 = n2.months,
            h2 = function h2(t3, n3, i3, s3) {
          return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
        },
            c2 = function c2(t3) {
          return O.s(s2 % 12 || 12, t3, "0");
        },
            d2 = n2.meridiem || function (t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        },
            l2 = {
          YY: String(this.$y).slice(-2),
          YYYY: this.$y,
          M: a2 + 1,
          MM: O.s(a2 + 1, 2, "0"),
          MMM: h2(n2.monthsShort, a2, f2, 3),
          MMMM: h2(f2, a2),
          D: this.$D,
          DD: O.s(this.$D, 2, "0"),
          d: String(this.$W),
          dd: h2(n2.weekdaysMin, this.$W, o2, 2),
          ddd: h2(n2.weekdaysShort, this.$W, o2, 3),
          dddd: o2[this.$W],
          H: String(s2),
          HH: O.s(s2, 2, "0"),
          h: c2(1),
          hh: c2(2),
          a: d2(s2, u2, true),
          A: d2(s2, u2, false),
          m: String(u2),
          mm: O.s(u2, 2, "0"),
          s: String(this.$s),
          ss: O.s(this.$s, 2, "0"),
          SSS: O.s(this.$ms, 3, "0"),
          Z: i2
        };

        return r2.replace(y, function (t3, e3) {
          return e3 || l2[t3] || i2.replace(":", "");
        });
      }, m2.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function (r2, d2, $2) {
        var l2,
            y2 = O.p(d2),
            M3 = w(r2),
            m3 = (M3.utcOffset() - this.utcOffset()) * e,
            g2 = this - M3,
            v2 = O.m(this, M3);
        return v2 = (l2 = {}, l2[c] = v2 / 12, l2[f] = v2, l2[h] = v2 / 3, l2[o] = (g2 - m3) / 6048e5, l2[a] = (g2 - m3) / 864e5, l2[u] = g2 / n, l2[s] = g2 / e, l2[i] = g2 / t, l2)[y2] || g2, $2 ? v2 : O.a(v2);
      }, m2.daysInMonth = function () {
        return this.endOf(f).$D;
      }, m2.$locale = function () {
        return D[this.$L];
      }, m2.locale = function (t2, e2) {
        if (!t2) return this.$L;
        var n2 = this.clone(),
            r2 = S(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, m2.clone = function () {
        return O.w(this.$d, this);
      }, m2.toDate = function () {
        return new Date(this.valueOf());
      }, m2.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function () {
        return this.$d.toISOString();
      }, m2.toString = function () {
        return this.$d.toUTCString();
      }, M2;
    }(),
        T = _.prototype;

    return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t2) {
      T[t2[1]] = function (e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), w.extend = function (t2, e2) {
      return t2.$i || (t2(e2, _, w), t2.$i = true), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function (t2) {
      return w(1e3 * t2);
    }, w.en = D[v], w.Ls = D, w.p = {}, w;
  });
})(dayjs_min);

var dayjs = dayjs_min.exports;

function formatDatetime(_ref) {
  var _ref$datetime = _ref.datetime,
      datetime = _ref$datetime === void 0 ? new Date() : _ref$datetime,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "YYYY-MM-DD HH:mm:ss" : _ref$format;
  return dayjs(datetime).format(format);
}

function formatThousandSeparator() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  number = Number(number);

  if (isNaN(number)) {
    return "Invalid Number";
  }

  if (number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER) {
    return "Out of Range";
  }

  return number.toLocaleString("zh-CN", __spreadValues({
    maximumFractionDigits: 2
  }, options));
}

var formatter = /* @__PURE__ */Object.freeze( /* @__PURE__ */Object.defineProperty({
  __proto__: null,
  formatDatetime: formatDatetime,
  formatThousandSeparator: formatThousandSeparator
}, Symbol.toStringTag, {
  value: "Module"
}));
exports.formatter = formatter;
var FileExtMimeMap = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  apng: "image/apng",
  svg: "image/svg+xml",
  webp: "image/webp",
  gif: "image/gif",
  avif: "image/avif",
  bmp: "image/bmp",
  mp4: "video/mp4",
  mpeg: "video/mpeg",
  webm: "video/webm",
  avi: "video/x-msvideo",
  mp3: "audio/mpeg",
  wav: "audio/wav",
  weba: "audio/webm",
  pdf: "application/pdf",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  vsd: "application/vnd.visio",
  zip: "application/zip",
  "7z": "application/x-7z-compressed",
  rar: "application/vnd.rar",
  tar: "application/x-tar",
  swf: "application/x-shockwave-flash",
  json: "application/json",
  txt: "text/plain",
  xml: "text/xml",
  htm: "text/html",
  html: "text/html",
  js: "text/javascript",
  mjs: "text/javascript",
  css: "text/css",
  csv: "text/csv",
  ics: "text/calendar"
};
var enums = /* @__PURE__ */Object.freeze( /* @__PURE__ */Object.defineProperty({
  __proto__: null,
  FileExtMimeMap: FileExtMimeMap
}, Symbol.toStringTag, {
  value: "Module"
}));
exports.enums = enums;

function getFileExtension(filePath) {
  var _a;

  return (_a = fileExtExp.exec(String(filePath))) == null ? void 0 : _a[1];
}

function getMimeByFileExtension(ext) {
  return FileExtMimeMap[ext];
}

var getter = /* @__PURE__ */Object.freeze( /* @__PURE__ */Object.defineProperty({
  __proto__: null,
  getFileExtension: getFileExtension,
  getMimeByFileExtension: getMimeByFileExtension
}, Symbol.toStringTag, {
  value: "Module"
}));
exports.getter = getter;
var isElectron = window.navigator.userAgent.toLowerCase().includes("electron");
var isWindows = window.navigator.userAgent.toLowerCase().includes("windows nt");
var isMacOS = window.navigator.userAgent.toLowerCase().includes("macintosh");
var detector = /* @__PURE__ */Object.freeze( /* @__PURE__ */Object.defineProperty({
  __proto__: null,
  isElectron: isElectron,
  isWindows: isWindows,
  isMacOS: isMacOS
}, Symbol.toStringTag, {
  value: "Module"
}));
exports.detector = detector;