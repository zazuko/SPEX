import { c as As, g as ws, f as Ds, b as Pt, m as Ts } from "./index-BhI9pmWG.js";
import { m as $s } from "./main-DH1xp4kk.js";
function Ns(v, t) {
  for (var n = 0; n < t.length; n++) {
    const e = t[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const _ in e)
        if (_ !== "default" && !(_ in v)) {
          const a = Object.getOwnPropertyDescriptor(e, _);
          a && Object.defineProperty(v, _, a.get ? a : {
            enumerable: !0,
            get: () => e[_]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(v, Symbol.toStringTag, { value: "Module" }));
}
var ut = { exports: {} };
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
(function(v, t) {
  (function(n, e) {
    e(t);
  })(As, function(n) {
    function e() {
      for (var i = arguments.length, s = Array(i), r = 0; r < i; r++)
        s[r] = arguments[r];
      if (s.length > 1) {
        s[0] = s[0].slice(0, -1);
        for (var h = s.length - 1, l = 1; l < h; ++l)
          s[l] = s[l].slice(1, -1);
        return s[h] = s[h].slice(1), s.join("");
      } else
        return s[0];
    }
    function _(i) {
      return "(?:" + i + ")";
    }
    function a(i) {
      return i === void 0 ? "undefined" : i === null ? "null" : Object.prototype.toString.call(i).split(" ").pop().split("]").shift().toLowerCase();
    }
    function c(i) {
      return i.toUpperCase();
    }
    function o(i) {
      return i != null ? i instanceof Array ? i : typeof i.length != "number" || i.split || i.setInterval || i.call ? [i] : Array.prototype.slice.call(i) : [];
    }
    function d(i, s) {
      var r = i;
      if (s)
        for (var h in s)
          r[h] = s[h];
      return r;
    }
    function u(i) {
      var s = "[A-Za-z]", r = "[0-9]", h = e(r, "[A-Fa-f]"), l = _(_("%[EFef]" + h + "%" + h + h + "%" + h + h) + "|" + _("%[89A-Fa-f]" + h + "%" + h + h) + "|" + _("%" + h + h)), g = "[\\:\\/\\?\\#\\[\\]\\@]", I = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", w = e(g, I), N = i ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", U = i ? "[\\uE000-\\uF8FF]" : "[]", A = e(s, r, "[\\-\\.\\_\\~]", N);
      _(s + e(s, r, "[\\+\\-\\.]") + "*"), _(_(l + "|" + e(A, I, "[\\:]")) + "*");
      var $ = _(_("25[0-5]") + "|" + _("2[0-4]" + r) + "|" + _("1" + r + r) + "|" + _("0?[1-9]" + r) + "|0?0?" + r), M = _($ + "\\." + $ + "\\." + $ + "\\." + $), j = _(h + "{1,4}"), C = _(_(j + "\\:" + j) + "|" + M), H = _(_(j + "\\:") + "{6}" + C), L = _("\\:\\:" + _(j + "\\:") + "{5}" + C), de = _(_(j) + "?\\:\\:" + _(j + "\\:") + "{4}" + C), re = _(_(_(j + "\\:") + "{0,1}" + j) + "?\\:\\:" + _(j + "\\:") + "{3}" + C), _e = _(_(_(j + "\\:") + "{0,2}" + j) + "?\\:\\:" + _(j + "\\:") + "{2}" + C), ye = _(_(_(j + "\\:") + "{0,3}" + j) + "?\\:\\:" + j + "\\:" + C), me = _(_(_(j + "\\:") + "{0,4}" + j) + "?\\:\\:" + C), Y = _(_(_(j + "\\:") + "{0,5}" + j) + "?\\:\\:" + j), ae = _(_(_(j + "\\:") + "{0,6}" + j) + "?\\:\\:"), be = _([H, L, de, re, _e, ye, me, Y, ae].join("|")), he = _(_(A + "|" + l) + "+");
      _("[vV]" + h + "+\\." + e(A, I, "[\\:]") + "+"), _(_(l + "|" + e(A, I)) + "*");
      var De = _(l + "|" + e(A, I, "[\\:\\@]"));
      return _(_(l + "|" + e(A, I, "[\\@]")) + "+"), _(_(De + "|" + e("[\\/\\?]", U)) + "*"), {
        NOT_SCHEME: new RegExp(e("[^]", s, r, "[\\+\\-\\.]"), "g"),
        NOT_USERINFO: new RegExp(e("[^\\%\\:]", A, I), "g"),
        NOT_HOST: new RegExp(e("[^\\%\\[\\]\\:]", A, I), "g"),
        NOT_PATH: new RegExp(e("[^\\%\\/\\:\\@]", A, I), "g"),
        NOT_PATH_NOSCHEME: new RegExp(e("[^\\%\\/\\@]", A, I), "g"),
        NOT_QUERY: new RegExp(e("[^\\%]", A, I, "[\\:\\@\\/\\?]", U), "g"),
        NOT_FRAGMENT: new RegExp(e("[^\\%]", A, I, "[\\:\\@\\/\\?]"), "g"),
        ESCAPE: new RegExp(e("[^]", A, I), "g"),
        UNRESERVED: new RegExp(A, "g"),
        OTHER_CHARS: new RegExp(e("[^\\%]", A, w), "g"),
        PCT_ENCODED: new RegExp(l, "g"),
        IPV4ADDRESS: new RegExp("^(" + M + ")$"),
        IPV6ADDRESS: new RegExp("^\\[?(" + be + ")" + _(_("\\%25|\\%(?!" + h + "{2})") + "(" + he + ")") + "?\\]?$")
        //RFC 6874, with relaxed parsing rules
      };
    }
    var b = u(!1), R = u(!0), p = /* @__PURE__ */ function() {
      function i(s, r) {
        var h = [], l = !0, g = !1, I = void 0;
        try {
          for (var w = s[Symbol.iterator](), N; !(l = (N = w.next()).done) && (h.push(N.value), !(r && h.length === r)); l = !0)
            ;
        } catch (U) {
          g = !0, I = U;
        } finally {
          try {
            !l && w.return && w.return();
          } finally {
            if (g)
              throw I;
          }
        }
        return h;
      }
      return function(s, r) {
        if (Array.isArray(s))
          return s;
        if (Symbol.iterator in Object(s))
          return i(s, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), E = function(i) {
      if (Array.isArray(i)) {
        for (var s = 0, r = Array(i.length); s < i.length; s++)
          r[s] = i[s];
        return r;
      } else
        return Array.from(i);
    }, f = 2147483647, x = 36, y = 1, S = 26, Q = 38, O = 700, B = 72, V = 128, K = "-", X = /^xn--/, ke = /[^\0-\x7E]/, ss = /[\x2E\u3002\uFF0E\uFF61]/g, is = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, Le = x - y, ee = Math.floor, Pe = String.fromCharCode;
    function xe(i) {
      throw new RangeError(is[i]);
    }
    function rs(i, s) {
      for (var r = [], h = i.length; h--; )
        r[h] = s(i[h]);
      return r;
    }
    function dt(i, s) {
      var r = i.split("@"), h = "";
      r.length > 1 && (h = r[0] + "@", i = r[1]), i = i.replace(ss, ".");
      var l = i.split("."), g = rs(l, s).join(".");
      return h + g;
    }
    function pt(i) {
      for (var s = [], r = 0, h = i.length; r < h; ) {
        var l = i.charCodeAt(r++);
        if (l >= 55296 && l <= 56319 && r < h) {
          var g = i.charCodeAt(r++);
          (g & 64512) == 56320 ? s.push(((l & 1023) << 10) + (g & 1023) + 65536) : (s.push(l), r--);
        } else
          s.push(l);
      }
      return s;
    }
    var _s = function(s) {
      return String.fromCodePoint.apply(String, E(s));
    }, as = function(s) {
      return s - 48 < 10 ? s - 22 : s - 65 < 26 ? s - 65 : s - 97 < 26 ? s - 97 : x;
    }, xt = function(s, r) {
      return s + 22 + 75 * (s < 26) - ((r != 0) << 5);
    }, mt = function(s, r, h) {
      var l = 0;
      for (
        s = h ? ee(s / O) : s >> 1, s += ee(s / r);
        /* no initialization */
        s > Le * S >> 1;
        l += x
      )
        s = ee(s / Le);
      return ee(l + (Le + 1) * s / (s + Q));
    }, bt = function(s) {
      var r = [], h = s.length, l = 0, g = V, I = B, w = s.lastIndexOf(K);
      w < 0 && (w = 0);
      for (var N = 0; N < w; ++N)
        s.charCodeAt(N) >= 128 && xe("not-basic"), r.push(s.charCodeAt(N));
      for (var U = w > 0 ? w + 1 : 0; U < h; ) {
        for (
          var A = l, $ = 1, M = x;
          ;
          /* no condition */
          M += x
        ) {
          U >= h && xe("invalid-input");
          var j = as(s.charCodeAt(U++));
          (j >= x || j > ee((f - l) / $)) && xe("overflow"), l += j * $;
          var C = M <= I ? y : M >= I + S ? S : M - I;
          if (j < C)
            break;
          var H = x - C;
          $ > ee(f / H) && xe("overflow"), $ *= H;
        }
        var L = r.length + 1;
        I = mt(l - A, L, A == 0), ee(l / L) > f - g && xe("overflow"), g += ee(l / L), l %= L, r.splice(l++, 0, g);
      }
      return String.fromCodePoint.apply(String, r);
    }, kt = function(s) {
      var r = [];
      s = pt(s);
      var h = s.length, l = V, g = 0, I = B, w = !0, N = !1, U = void 0;
      try {
        for (var A = s[Symbol.iterator](), $; !(w = ($ = A.next()).done); w = !0) {
          var M = $.value;
          M < 128 && r.push(Pe(M));
        }
      } catch (Te) {
        N = !0, U = Te;
      } finally {
        try {
          !w && A.return && A.return();
        } finally {
          if (N)
            throw U;
        }
      }
      var j = r.length, C = j;
      for (j && r.push(K); C < h; ) {
        var H = f, L = !0, de = !1, re = void 0;
        try {
          for (var _e = s[Symbol.iterator](), ye; !(L = (ye = _e.next()).done); L = !0) {
            var me = ye.value;
            me >= l && me < H && (H = me);
          }
        } catch (Te) {
          de = !0, re = Te;
        } finally {
          try {
            !L && _e.return && _e.return();
          } finally {
            if (de)
              throw re;
          }
        }
        var Y = C + 1;
        H - l > ee((f - g) / Y) && xe("overflow"), g += (H - l) * Y, l = H;
        var ae = !0, be = !1, he = void 0;
        try {
          for (var De = s[Symbol.iterator](), Nt; !(ae = (Nt = De.next()).done); ae = !0) {
            var Ot = Nt.value;
            if (Ot < l && ++g > f && xe("overflow"), Ot == l) {
              for (
                var Ne = g, Oe = x;
                ;
                /* no condition */
                Oe += x
              ) {
                var Ce = Oe <= I ? y : Oe >= I + S ? S : Oe - I;
                if (Ne < Ce)
                  break;
                var Ct = Ne - Ce, Lt = x - Ce;
                r.push(Pe(xt(Ce + Ct % Lt, 0))), Ne = ee(Ct / Lt);
              }
              r.push(Pe(xt(Ne, 0))), I = mt(g, Y, C == j), g = 0, ++C;
            }
          }
        } catch (Te) {
          be = !0, he = Te;
        } finally {
          try {
            !ae && De.return && De.return();
          } finally {
            if (be)
              throw he;
          }
        }
        ++g, ++l;
      }
      return r.join("");
    }, ns = function(s) {
      return dt(s, function(r) {
        return X.test(r) ? bt(r.slice(4).toLowerCase()) : r;
      });
    }, ls = function(s) {
      return dt(s, function(r) {
        return ke.test(r) ? "xn--" + kt(r) : r;
      });
    }, ge = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      version: "2.1.0",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      ucs2: {
        decode: pt,
        encode: _s
      },
      decode: bt,
      encode: kt,
      toASCII: ls,
      toUnicode: ns
    }, W = {};
    function te(i) {
      var s = i.charCodeAt(0), r = void 0;
      return s < 16 ? r = "%0" + s.toString(16).toUpperCase() : s < 128 ? r = "%" + s.toString(16).toUpperCase() : s < 2048 ? r = "%" + (s >> 6 | 192).toString(16).toUpperCase() + "%" + (s & 63 | 128).toString(16).toUpperCase() : r = "%" + (s >> 12 | 224).toString(16).toUpperCase() + "%" + (s >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (s & 63 | 128).toString(16).toUpperCase(), r;
    }
    function Ie(i) {
      for (var s = "", r = 0, h = i.length; r < h; ) {
        var l = parseInt(i.substr(r + 1, 2), 16);
        if (l < 128)
          s += String.fromCharCode(l), r += 3;
        else if (l >= 194 && l < 224) {
          if (h - r >= 6) {
            var g = parseInt(i.substr(r + 4, 2), 16);
            s += String.fromCharCode((l & 31) << 6 | g & 63);
          } else
            s += i.substr(r, 6);
          r += 6;
        } else if (l >= 224) {
          if (h - r >= 9) {
            var I = parseInt(i.substr(r + 4, 2), 16), w = parseInt(i.substr(r + 7, 2), 16);
            s += String.fromCharCode((l & 15) << 12 | (I & 63) << 6 | w & 63);
          } else
            s += i.substr(r, 9);
          r += 9;
        } else
          s += i.substr(r, 3), r += 3;
      }
      return s;
    }
    function Fe(i, s) {
      function r(h) {
        var l = Ie(h);
        return l.match(s.UNRESERVED) ? l : h;
      }
      return i.scheme && (i.scheme = String(i.scheme).replace(s.PCT_ENCODED, r).toLowerCase().replace(s.NOT_SCHEME, "")), i.userinfo !== void 0 && (i.userinfo = String(i.userinfo).replace(s.PCT_ENCODED, r).replace(s.NOT_USERINFO, te).replace(s.PCT_ENCODED, c)), i.host !== void 0 && (i.host = String(i.host).replace(s.PCT_ENCODED, r).toLowerCase().replace(s.NOT_HOST, te).replace(s.PCT_ENCODED, c)), i.path !== void 0 && (i.path = String(i.path).replace(s.PCT_ENCODED, r).replace(i.scheme ? s.NOT_PATH : s.NOT_PATH_NOSCHEME, te).replace(s.PCT_ENCODED, c)), i.query !== void 0 && (i.query = String(i.query).replace(s.PCT_ENCODED, r).replace(s.NOT_QUERY, te).replace(s.PCT_ENCODED, c)), i.fragment !== void 0 && (i.fragment = String(i.fragment).replace(s.PCT_ENCODED, r).replace(s.NOT_FRAGMENT, te).replace(s.PCT_ENCODED, c)), i;
    }
    function Ue(i) {
      return i.replace(/^0*(.*)/, "$1") || "0";
    }
    function Me(i, s) {
      var r = i.match(s.IPV4ADDRESS) || [], h = p(r, 2), l = h[1];
      return l ? l.split(".").map(Ue).join(".") : i;
    }
    function gt(i, s) {
      var r = i.match(s.IPV6ADDRESS) || [], h = p(r, 3), l = h[1], g = h[2];
      if (l) {
        for (var I = l.toLowerCase().split("::").reverse(), w = p(I, 2), N = w[0], U = w[1], A = U ? U.split(":").map(Ue) : [], $ = N.split(":").map(Ue), M = s.IPV4ADDRESS.test($[$.length - 1]), j = M ? 7 : 8, C = $.length - j, H = Array(j), L = 0; L < j; ++L)
          H[L] = A[L] || $[C + L] || "";
        M && (H[j - 1] = Me(H[j - 1], s));
        var de = H.reduce(function(Y, ae, be) {
          if (!ae || ae === "0") {
            var he = Y[Y.length - 1];
            he && he.index + he.length === be ? he.length++ : Y.push({ index: be, length: 1 });
          }
          return Y;
        }, []), re = de.sort(function(Y, ae) {
          return ae.length - Y.length;
        })[0], _e = void 0;
        if (re && re.length > 1) {
          var ye = H.slice(0, re.index), me = H.slice(re.index + re.length);
          _e = ye.join(":") + "::" + me.join(":");
        } else
          _e = H.join(":");
        return g && (_e += "%" + g), _e;
      } else
        return i;
    }
    var hs = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, fs = "".match(/(){0}/)[1] === void 0;
    function ne(i) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = {}, h = s.iri !== !1 ? R : b;
      s.reference === "suffix" && (i = (s.scheme ? s.scheme + ":" : "") + "//" + i);
      var l = i.match(hs);
      if (l) {
        fs ? (r.scheme = l[1], r.userinfo = l[3], r.host = l[4], r.port = parseInt(l[5], 10), r.path = l[6] || "", r.query = l[7], r.fragment = l[8], isNaN(r.port) && (r.port = l[5])) : (r.scheme = l[1] || void 0, r.userinfo = i.indexOf("@") !== -1 ? l[3] : void 0, r.host = i.indexOf("//") !== -1 ? l[4] : void 0, r.port = parseInt(l[5], 10), r.path = l[6] || "", r.query = i.indexOf("?") !== -1 ? l[7] : void 0, r.fragment = i.indexOf("#") !== -1 ? l[8] : void 0, isNaN(r.port) && (r.port = i.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? l[4] : void 0)), r.host && (r.host = gt(Me(r.host, h), h)), r.scheme === void 0 && r.userinfo === void 0 && r.host === void 0 && r.port === void 0 && !r.path && r.query === void 0 ? r.reference = "same-document" : r.scheme === void 0 ? r.reference = "relative" : r.fragment === void 0 ? r.reference = "absolute" : r.reference = "uri", s.reference && s.reference !== "suffix" && s.reference !== r.reference && (r.error = r.error || "URI is not a " + s.reference + " reference.");
        var g = W[(s.scheme || r.scheme || "").toLowerCase()];
        if (!s.unicodeSupport && (!g || !g.unicodeSupport)) {
          if (r.host && (s.domainHost || g && g.domainHost))
            try {
              r.host = ge.toASCII(r.host.replace(h.PCT_ENCODED, Ie).toLowerCase());
            } catch (I) {
              r.error = r.error || "Host's domain name can not be converted to ASCII via punycode: " + I;
            }
          Fe(r, b);
        } else
          Fe(r, h);
        g && g.parse && g.parse(r, s);
      } else
        r.error = r.error || "URI can not be parsed.";
      return r;
    }
    function cs(i, s) {
      var r = s.iri !== !1 ? R : b, h = [];
      return i.userinfo !== void 0 && (h.push(i.userinfo), h.push("@")), i.host !== void 0 && h.push(gt(Me(String(i.host), r), r).replace(r.IPV6ADDRESS, function(l, g, I) {
        return "[" + g + (I ? "%25" + I : "") + "]";
      })), (typeof i.port == "number" || typeof i.port == "string") && (h.push(":"), h.push(String(i.port))), h.length ? h.join("") : void 0;
    }
    var It = /^\.\.?\//, vt = /^\/\.(\/|$)/, Et = /^\/\.\.(\/|$)/, os = /^\/?(?:.|\n)*?(?=\/|$)/;
    function ve(i) {
      for (var s = []; i.length; )
        if (i.match(It))
          i = i.replace(It, "");
        else if (i.match(vt))
          i = i.replace(vt, "/");
        else if (i.match(Et))
          i = i.replace(Et, "/"), s.pop();
        else if (i === "." || i === "..")
          i = "";
        else {
          var r = i.match(os);
          if (r) {
            var h = r[0];
            i = i.slice(h.length), s.push(h);
          } else
            throw new Error("Unexpected dot segment condition");
        }
      return s.join("");
    }
    function se(i) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = s.iri ? R : b, h = [], l = W[(s.scheme || i.scheme || "").toLowerCase()];
      if (l && l.serialize && l.serialize(i, s), i.host && !r.IPV6ADDRESS.test(i.host)) {
        if (s.domainHost || l && l.domainHost)
          try {
            i.host = s.iri ? ge.toUnicode(i.host) : ge.toASCII(i.host.replace(r.PCT_ENCODED, Ie).toLowerCase());
          } catch (w) {
            i.error = i.error || "Host's domain name can not be converted to " + (s.iri ? "Unicode" : "ASCII") + " via punycode: " + w;
          }
      }
      Fe(i, r), s.reference !== "suffix" && i.scheme && (h.push(i.scheme), h.push(":"));
      var g = cs(i, s);
      if (g !== void 0 && (s.reference !== "suffix" && h.push("//"), h.push(g), i.path && i.path.charAt(0) !== "/" && h.push("/")), i.path !== void 0) {
        var I = i.path;
        !s.absolutePath && (!l || !l.absolutePath) && (I = ve(I)), g === void 0 && (I = I.replace(/^\/\//, "/%2F")), h.push(I);
      }
      return i.query !== void 0 && (h.push("?"), h.push(i.query)), i.fragment !== void 0 && (h.push("#"), h.push(i.fragment)), h.join("");
    }
    function yt(i, s) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, h = arguments[3], l = {};
      return h || (i = ne(se(i, r), r), s = ne(se(s, r), r)), r = r || {}, !r.tolerant && s.scheme ? (l.scheme = s.scheme, l.userinfo = s.userinfo, l.host = s.host, l.port = s.port, l.path = ve(s.path || ""), l.query = s.query) : (s.userinfo !== void 0 || s.host !== void 0 || s.port !== void 0 ? (l.userinfo = s.userinfo, l.host = s.host, l.port = s.port, l.path = ve(s.path || ""), l.query = s.query) : (s.path ? (s.path.charAt(0) === "/" ? l.path = ve(s.path) : ((i.userinfo !== void 0 || i.host !== void 0 || i.port !== void 0) && !i.path ? l.path = "/" + s.path : i.path ? l.path = i.path.slice(0, i.path.lastIndexOf("/") + 1) + s.path : l.path = s.path, l.path = ve(l.path)), l.query = s.query) : (l.path = i.path, s.query !== void 0 ? l.query = s.query : l.query = i.query), l.userinfo = i.userinfo, l.host = i.host, l.port = i.port), l.scheme = i.scheme), l.fragment = s.fragment, l;
    }
    function us(i, s, r) {
      var h = d({ scheme: "null" }, r);
      return se(yt(ne(i, h), ne(s, h), h, !0), h);
    }
    function ds(i, s) {
      return typeof i == "string" ? i = se(ne(i, s), s) : a(i) === "object" && (i = ne(se(i, s), s)), i;
    }
    function ps(i, s, r) {
      return typeof i == "string" ? i = se(ne(i, r), r) : a(i) === "object" && (i = se(i, r)), typeof s == "string" ? s = se(ne(s, r), r) : a(s) === "object" && (s = se(s, r)), i === s;
    }
    function xs(i, s) {
      return i && i.toString().replace(!s || !s.iri ? b.ESCAPE : R.ESCAPE, te);
    }
    function le(i, s) {
      return i && i.toString().replace(!s || !s.iri ? b.PCT_ENCODED : R.PCT_ENCODED, Ie);
    }
    var Ae = {
      scheme: "http",
      domainHost: !0,
      parse: function(s, r) {
        return s.host || (s.error = s.error || "HTTP URIs must have a host."), s;
      },
      serialize: function(s, r) {
        var h = String(s.scheme).toLowerCase() === "https";
        return (s.port === (h ? 443 : 80) || s.port === "") && (s.port = void 0), s.path || (s.path = "/"), s;
      }
    }, jt = {
      scheme: "https",
      domainHost: Ae.domainHost,
      parse: Ae.parse,
      serialize: Ae.serialize
    };
    function Rt(i) {
      return typeof i.secure == "boolean" ? i.secure : String(i.scheme).toLowerCase() === "wss";
    }
    var we = {
      scheme: "ws",
      domainHost: !0,
      parse: function(s, r) {
        var h = s;
        return h.secure = Rt(h), h.resourceName = (h.path || "/") + (h.query ? "?" + h.query : ""), h.path = void 0, h.query = void 0, h;
      },
      serialize: function(s, r) {
        if ((s.port === (Rt(s) ? 443 : 80) || s.port === "") && (s.port = void 0), typeof s.secure == "boolean" && (s.scheme = s.secure ? "wss" : "ws", s.secure = void 0), s.resourceName) {
          var h = s.resourceName.split("?"), l = p(h, 2), g = l[0], I = l[1];
          s.path = g && g !== "/" ? g : void 0, s.query = I, s.resourceName = void 0;
        }
        return s.fragment = void 0, s;
      }
    }, St = {
      scheme: "wss",
      domainHost: we.domainHost,
      parse: we.parse,
      serialize: we.serialize
    }, ms = {}, At = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", ie = "[0-9A-Fa-f]", bs = _(_("%[EFef]" + ie + "%" + ie + ie + "%" + ie + ie) + "|" + _("%[89A-Fa-f]" + ie + "%" + ie + ie) + "|" + _("%" + ie + ie)), ks = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", gs = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", Is = e(gs, '[\\"\\\\]'), vs = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", Es = new RegExp(At, "g"), Ee = new RegExp(bs, "g"), ys = new RegExp(e("[^]", ks, "[\\.]", '[\\"]', Is), "g"), wt = new RegExp(e("[^]", At, vs), "g"), js = wt;
    function He(i) {
      var s = Ie(i);
      return s.match(Es) ? s : i;
    }
    var Dt = {
      scheme: "mailto",
      parse: function(s, r) {
        var h = s, l = h.to = h.path ? h.path.split(",") : [];
        if (h.path = void 0, h.query) {
          for (var g = !1, I = {}, w = h.query.split("&"), N = 0, U = w.length; N < U; ++N) {
            var A = w[N].split("=");
            switch (A[0]) {
              case "to":
                for (var $ = A[1].split(","), M = 0, j = $.length; M < j; ++M)
                  l.push($[M]);
                break;
              case "subject":
                h.subject = le(A[1], r);
                break;
              case "body":
                h.body = le(A[1], r);
                break;
              default:
                g = !0, I[le(A[0], r)] = le(A[1], r);
                break;
            }
          }
          g && (h.headers = I);
        }
        h.query = void 0;
        for (var C = 0, H = l.length; C < H; ++C) {
          var L = l[C].split("@");
          if (L[0] = le(L[0]), r.unicodeSupport)
            L[1] = le(L[1], r).toLowerCase();
          else
            try {
              L[1] = ge.toASCII(le(L[1], r).toLowerCase());
            } catch (de) {
              h.error = h.error || "Email address's domain name can not be converted to ASCII via punycode: " + de;
            }
          l[C] = L.join("@");
        }
        return h;
      },
      serialize: function(s, r) {
        var h = s, l = o(s.to);
        if (l) {
          for (var g = 0, I = l.length; g < I; ++g) {
            var w = String(l[g]), N = w.lastIndexOf("@"), U = w.slice(0, N).replace(Ee, He).replace(Ee, c).replace(ys, te), A = w.slice(N + 1);
            try {
              A = r.iri ? ge.toUnicode(A) : ge.toASCII(le(A, r).toLowerCase());
            } catch (C) {
              h.error = h.error || "Email address's domain name can not be converted to " + (r.iri ? "Unicode" : "ASCII") + " via punycode: " + C;
            }
            l[g] = U + "@" + A;
          }
          h.path = l.join(",");
        }
        var $ = s.headers = s.headers || {};
        s.subject && ($.subject = s.subject), s.body && ($.body = s.body);
        var M = [];
        for (var j in $)
          $[j] !== ms[j] && M.push(j.replace(Ee, He).replace(Ee, c).replace(wt, te) + "=" + $[j].replace(Ee, He).replace(Ee, c).replace(js, te));
        return M.length && (h.query = M.join("&")), h;
      }
    }, Rs = /^([^\:]+)\:(.*)/, Tt = {
      scheme: "urn",
      parse: function(s, r) {
        var h = s.path && s.path.match(Rs), l = s;
        if (h) {
          var g = r.scheme || l.scheme || "urn", I = h[1].toLowerCase(), w = h[2], N = g + ":" + (r.nid || I), U = W[N];
          l.nid = I, l.nss = w, l.path = void 0, U && (l = U.parse(l, r));
        } else
          l.error = l.error || "URN can not be parsed.";
        return l;
      },
      serialize: function(s, r) {
        var h = r.scheme || s.scheme || "urn", l = s.nid, g = h + ":" + (r.nid || l), I = W[g];
        I && (s = I.serialize(s, r));
        var w = s, N = s.nss;
        return w.path = (l || r.nid) + ":" + N, w;
      }
    }, Ss = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, $t = {
      scheme: "urn:uuid",
      parse: function(s, r) {
        var h = s;
        return h.uuid = h.nss, h.nss = void 0, !r.tolerant && (!h.uuid || !h.uuid.match(Ss)) && (h.error = h.error || "UUID is not valid."), h;
      },
      serialize: function(s, r) {
        var h = s;
        return h.nss = (s.uuid || "").toLowerCase(), h;
      }
    };
    W[Ae.scheme] = Ae, W[jt.scheme] = jt, W[we.scheme] = we, W[St.scheme] = St, W[Dt.scheme] = Dt, W[Tt.scheme] = Tt, W[$t.scheme] = $t, n.SCHEMES = W, n.pctEncChar = te, n.pctDecChars = Ie, n.parse = ne, n.removeDotSegments = ve, n.serialize = se, n.resolveComponents = yt, n.resolve = us, n.normalize = ds, n.equal = ps, n.escapeComponent = xs, n.unescapeComponent = le, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(ut, ut.exports);
var Os = ut.exports;
if (typeof queueMicrotask != "function") {
  let v = Promise.resolve();
  try {
    queueMicrotask = (t) => v.then(t).catch((n) => setTimeout(() => {
      throw n;
    }, 0));
  } catch {
  }
}
const P = Os, Cs = Ds(), qe = $s, $e = Ts, Ls = (v) => $e.quad(v._kt_subject, v._kt_predicate, v._kt_object, v._kt_graph), Ft = /^([A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}]([A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}.]*[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}])?)?$/u, Ut = /^([A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_:0-9]|%[A-Fa-f0-9]{2}|\\[_~.\-!$&'()*+,;=/?#@%])(([A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}.:]|%[A-Fa-f0-9]{2}|\\[_~.\-!$&'()*+,;=/?#@%])*([A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}:]|%[A-Fa-f0-9]{2}|\\[_~.\-!$&'()*+,;=/?#@%]))?$/u, Ps = /^[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_0-9]([A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}.]*[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}])?$/u, ze = /^([^\0-\x20<>"{}|^`\\]|\\u[A-Fa-f0-9]{4}|\\U[A-Fa-f0-9]{8})*$/, Fs = /^([^\0-\x20<>"{}|^`])*$/, z = /\\u([0-9A-Fa-f]{4})|\\U([0-9A-Fa-f]{8})/g, G = (v, t, n) => String.fromCodePoint(parseInt(t || n, 16)), q = Object.prototype.hasOwnProperty, J = /([A-Za-z][A-Za-z0-9_-]*)?:([A-Za-z_0-9:][A-Za-z0-9_:-]*)(?:\s+|(?=\.?[<[("';,)\]#{}]|\.[\s\0]))/y, Ge = /([^\s#@<[("':_{}][^\s#@<[("':{}]*)?:((?:[^\s#@<[("'.;,{})\]\\](?:[^\s#@<[("';,{})\]\\]*[^\s#@<[("'.;,{})\]\\])?)?)(?:\s+|(?=\.?[<[("';,)\]#{}]|\.[\s\0]))/y, Ve = /([^\s#@<[("':_{}][^\s#@<[("':{}]*)?:((?:(?:[^\s#@<[("'.;,{})\]\\]|\\(?:%[0-9A-Fa-f][0-9A-Fa-f]|[^\s"]))(?:(?:[^\s#@<[("';,{})\]\\]|\\(?:%[0-9A-Fa-f][0-9A-Fa-f]|[^\s"]))*(?:[^\s#@<[("'.;,{})\]\\]|\\(?:%[0-9A-Fa-f][0-9A-Fa-f]|[^\s"])))?)?)(?:\s+|(?=\.?[<[("';,)\]#{}]|\.[\s\0]))/y, pe = /\\(.)/g, Z = /_:(.(?:[^\s:<;,)\]#}]*[^\s:<.;,)\]#}])?)(?:\s+|(?=[<:{,;\])#]))/y, Be = /_:(.(?:[^\s:<;,)\]#}]*[^\s:<.;,)\]#}])?)(?:\s+|(?=\.?[<:{,;\])#])|(?=\.[\s@#<({[}]))/y, D = /<([^\\>]*)>\s*/y, T = /<([^>]*)>\s*/y, fe = /([+-]?(?:[0-9]+(\.[0-9]+)?|(\.[0-9]+))(\.?[eE][+-]?[0-9]+)?)(?:\s+|(?=\.[^eE0-9]|[;,)\]]))/y, ce = /(?:(true|TRUE)|false|FALSE)\s*/y, Ze = /a(?:\s+|(?=[[("'<#]))/y, Ke = /\^\^/y, m = /\s*/y, Xe = /@([A-Za-z]+(?:-[A-Za-z0-9-]+)*)(?:\s+|(?=[.},;\])#]))/y, We = /(?:(@prefix)|[pP][rR][eE][fF][iI][xX])\s*/y, Ye = /([^#:]*):\s*/iy, Je = /(?:(@base)|[bB][aA][sS][eE])\s*/y, Qe = /(?:graph)?\s*<([^\\>]*)>\s*\{\s*/iy, et = /(?:graph)?\s*([^\s#@<[("':_{}][^\s#@<[("':{}]*)?:((?:(?:[^\s#@<[("'.;,{})\]\\]|\\(?:%[0-9A-Fa-f][0-9A-Fa-f]|[^\s"]))(?:(?:[^\s#@<[("';,{})\]\\]|\\(?:%[0-9A-Fa-f][0-9A-Fa-f]|[^\s"]))*(?:[^\s#@<[("'.;,{})\]\\]|\\(?:%[0-9A-Fa-f][0-9A-Fa-f]|[^\s"])))?)?)\s*\{\s*/iy, tt = /(?:graph)?\s*_:(.(?:[^\s:<;,)\]#}]*[^\s:<.;,)\]#}])?)\s*\{\s*/iy, st = /(?:graph)?\s*\[\s*\]\s*\{\s*/iy, it = /(?:graph)?\s*<([^>]*)>\s*\{\s*/iy, rt = /graph(?:\s+|(?=[#<[{]))/iy, k = /(#[^\n]*\n\s*)+/y, F = /^[A-Za-z][A-Za-z0-9.\-+]*:/, _t = /^((([A-Za-z0-9.\-+]*:\/)?\/[^/>]*)?(\/(?:[^/>]*\/)*)?[^>]*)$/, oe = /\[\s*\]\s*/y, je = /\[(?:\s+|(?=[^\]]))/y, Re = /\(\s*/y, at = /\]\s*/y, nt = /\{\s*/y, ue = /\}\s*/y, lt = /\.\s*/y, ht = /[\\"\r\n]/g, ft = /[\\'\r\n]/g, Mt = /"{1,2}$/g, Ht = /'{1,2}$/g, ct = /(\\|""")/g, ot = /(\\|''')/g, Se = (v, t, n, e, _, a) => {
  if (t)
    switch (t) {
      case "t":
        return "	";
      case "n":
        return `
`;
      case "r":
        return "\r";
      case "f":
        return "\f";
      case "b":
        return "\b";
      default:
        console.assert(`bad regex escape char mapping: '${t}'`);
    }
  else {
    if (n)
      return n;
    if (e)
      return String.fromCodePoint(parseInt(e, 16));
    if (_)
      return String.fromCodePoint(parseInt(_, 16));
    if (a)
      throw a[0] === "\\" ? new Error(`expected string_literal but invalid escape sequence within contents: '${a}'. failed to parse a valid token`) : new Error(`expected string_literal but invalid whitespace character within contents: ${JSON.stringify(a)}. failed to parse a valid token`);
    console.assert("unexpected no match branch in escape sequence replace callback");
  }
}, Us = /(?:\\(?:([tnrfb])|([\\"'])|u([0-9A-Fa-f]{4})|U([0-9A-Fa-f]{8}))|([\r\n]|\\.))/g, qt = /(?:\\(?:([tnrfb])|([\\"'])|u([0-9A-Fa-f]{4})|U([0-9A-Fa-f]{8}))|([\r\n]|\\[^uU]|\\u[^]{4}|\\U[^]{8}))/g, zt = (v) => v.replace(Us, Se), Gt = (v) => {
  let t = es.exec(v);
  if (t) {
    let n = t.index;
    return [
      v.slice(0, n).replace(qt, Se),
      v.slice(n)
    ];
  } else
    return [
      v.replace(qt, Se),
      ""
    ];
}, Ms = /(?:\\(?:([tnrfb])|([\\"'])|u([0-9A-Fa-f]{4})|U([0-9A-Fa-f]{8}))|(\\.))/g, Vt = /(?:\\(?:([tnrfb])|([\\"'])|u([0-9A-Fa-f]{4})|U([0-9A-Fa-f]{8}))|(\\[^uU]|\\u[^]{4}|\\U[^]{8}))/g, Bt = (v) => v.replace(Ms, Se), Zt = (v) => {
  let t = es.exec(v);
  if (t) {
    let n = t.index;
    return [
      v.slice(0, n).replace(Vt, Se),
      v.slice(n)
    ];
  } else
    return [
      v.replace(Vt, Se),
      ""
    ];
}, [
  es,
  Kt,
  Xt,
  Wt,
  Yt
] = (() => {
  function v(n) {
    let e = RegExp.prototype.exec.call(this, n);
    if (e) {
      let _ = e[0].length - e[1].length;
      e.index += _, e[0] = e[0].slice(_);
    }
    return e;
  }
  let t = (() => {
    try {
      new RegExp("(?<!h)i");
    } catch {
      return (e, _, a) => (_.exec = a, _);
    }
    return (n) => n();
  })();
  return [
    // R_STRLIT_ESCAPE_INCOMPLETE
    t(
      () => new RegExp("(?<!(?:[^\\\\]|^)(?:\\\\\\\\)*\\\\)\\\\(|u[0-9A-Fa-f]{0,3}|U[0-9A-Fa-f]{0,7})$"),
      /^(?:(?:[^\\]|\\.)*)(\\(?:|u[0-9A-Fa-f]{0,3}|U[0-9A-Fa-f]{0,7}))$/,
      function(e) {
        let _ = RegExp.prototype.exec.call(this, e);
        return _ && (_.index += _[0].length - _[1].length), _;
      }
    ),
    // R_STRLIT_SHORT_DOUBLE_TERM
    t(
      () => new RegExp('(?<!(?:[^\\\\]|^)(?:\\\\\\\\)*\\\\)"\\s*', "g"),
      /(?:[^\\"]|\\.)*("\s*)/y,
      v
    ),
    // R_STRLIT_SHORT_SINGLE_TERM
    t(
      () => new RegExp("(?<!(?:[^\\\\]|^)(?:\\\\\\\\)*\\\\)'\\s*", "g"),
      /(?:[^\\']|\\.)*('\s*)/y,
      v
    ),
    // R_STRLIT_LONG_DOUBLE_TERM
    t(
      () => new RegExp('(?<!(?:[^\\\\]|^)(?:\\\\\\\\)*\\\\)"""\\s*', "g"),
      /(?:[^\\"]|\\.|""?(?!"))*("""\s*)/y,
      v
    ),
    // R_STRLIT_LONG_SINGLE_TERM
    t(
      () => new RegExp("(?<!(?:[^\\\\]|^)(?:\\\\\\\\)*\\\\)'''\\s*", "g"),
      /(?:[^\\']|\\.|''?(?!'))*('''\s*)/y,
      v
    )
  ];
})(), Jt = (v, t) => (Ge.lastIndex = t, [Ge.exec(v), Ge.lastIndex]), Qt = (v, t) => (Ve.lastIndex = t, [Ve.exec(v), Ve.lastIndex]);
function Hs(v, t, n, e) {
  let _ = Math.min(t, Math.abs(t - 15)), a = v.s;
  return v.error(`
\`${a.substr(_, _ + 90).replace(/[\n\t]/g, " ")}\`
 ${" ".repeat(t - _)}^
expected ${n} ${e || ""}.  failed to parse a valid token starting at ${a[t] ? '"' + a[t] + '"' : "<<EOF>>"}`);
}
class qs extends qe.Transform {
  constructor(t) {
    super({
      // do not decode strings into buffers
      decodeStrings: !1,
      // accept strings as input on writable side
      writableObjectMode: !1,
      // output quad objects on readable side
      readableObjectMode: !0,
      // implementations
      flush: t.flush,
      transform: t.transform
    });
  }
  // intercept pipe
  pipe(t) {
    let n = t;
    return n._writableState.objectMode ? t.isGraphyWritable && (t = qe.quads_to_writable()) : t = qe.quads_to_json(), t !== n ? (super.pipe(t), t.pipe(n)) : super.pipe(n);
  }
}
class zs {
  constructor(t = {}) {
    let {
      // input medium
      input: n = null,
      // a state to inherit
      state: e = {}
    } = t, {
      // index for anonymous blank node labels
      blank_node_index: _ = 0,
      // prefix map
      prefixes: a = {},
      // blank node label map
      labels: c = {}
    } = e, o = $e.adopt(t.dataFactory || t.data_factory || $e.unfiltered), d = o.defaultGraph();
    o !== $e.unfiltered && (d = Object.create(d));
    let u = o.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#first"), b = o.blankNode, R = o.namedNode;
    if (this.emit_data = $e.unfiltered === o ? function() {
      E.push(Ls(this));
    } : function() {
      let f = o.quad(this._kt_subject, this._kt_predicate, this._kt_object, this._kt_graph);
      E.push(f);
    }, Object.assign(this, {
      // read index
      i: 0,
      // string buffer
      s: "",
      // string buffer length
      n: 0,
      // left-over string from previous data chunk
      pre: t.prepend || "",
      // debug state
      _b_debug: t.debug || !1,
      // relax
      _b_relax: t.relax || !1,
      // factory
      _dc_factory: o,
      // current reader state
      _f_state: this.block,
      // map of current prefix ids => iris
      _h_prefixes: a,
      // reader was destroyed by an error
      _b_destroyed: !1,
      // current @base url
      _s_base_url: "",
      _s_base_url_scheme: "",
      _s_base_url_root: "",
      _s_base_url_path: "",
      // current data
      _kt_subject: null,
      _kt_predicate: u,
      _kt_object: null,
      _kt_graph: d,
      _s_literal: "",
      // static terms
      _kt_rdf_type: o.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
      _kt_rdf_first: u,
      _kt_rdf_rest: o.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#rest"),
      _kt_rdf_nil: o.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"),
      _kt_default_graph: d,
      // queue of nested subject, predicate, state for blanknodes and collections
      _a_nested: [],
      // hash to keep track of all blank node labels in use
      _h_labels: c,
      // event routing
      event: this.emit,
      data: this.emit_data,
      // for restoring the original event callback when resuming paused stream
      restore_data: this.emit_data,
      // keep a queue of data events to hold onto until stream resumes (only happens in rare conditions)
      _a_queue_event: [],
      // helper states
      _b_expecting_full_stop: !1,
      _s_temp_prefix_id: null,
      _b_trim_start: !0,
      anonymous_blank_node: (f) => b(f, !0),
      // finds the next non-conflicting blank node label
      next_label() {
        let f = "";
        do
          f = "g" + _++;
        while (this._h_labels[f]);
        return this._h_labels[f] = 2, f;
      },
      // what to do when reach eos
      eos: null,
      // which state to go to after end of statement
      after_end_of_statement: this.post_object,
      // maximum length of a token: defaults to 2048 => http://stackoverflow.com/a/417184/1641160
      _n_max_token_length: t.max_token_length || t.maxTokenLength || 2048,
      // maximum length of a string (overrides max_token_length): defaults to Infinity
      _n_max_string_length: t.max_string_length || t.maxStringLength || 1 / 0,
      // byte tracking
      _b_byte_tracking: t.byte_tracking || t.byteTracking || !1,
      _nb_seen: 0,
      _nb_last: 0,
      _nb_curr: 0
    }), t.relaxed && console.warn(new Error("no such option 'relaxed'; did you mean 'relax' ?").stack.replace(/^Error:/, "Warning:")), "validate" in t && console.warn(new Error("option 'validate' has been deprecated. Validation is now enabled by default. Use the 'relax' option if you wish to disable validation.").stack.replace(/^Error:/, "Warning:")), Object.assign(this, t.relax ? {
      // term constructors
      blank_node(f) {
        let x = this._h_labels[f];
        return x ? x === 1 || (x === 2 ? f = this._h_labels[f] = this.next_label() : f = this._h_labels[f]) : this._h_labels[f] = 1, b(f);
      },
      check_named_node: R,
      check_named_node_escapeless: R,
      match_prefixed_name_escapeless: Jt,
      match_prefixed_name: Qt
    } : {
      blank_node(f) {
        if (!Ps.test(f))
          return this.error(`invalid blank node label: "${f}"`);
        let x = this._h_labels[f];
        return x ? x === 1 || (x === 2 ? f = this._h_labels[f] = this.next_label() : f = this._h_labels[f]) : this._h_labels[f] = 1, b(f);
      },
      check_named_node(f) {
        return ze.test(f) ? R(f) : this.error(`invalid IRI: "${f}"`);
      },
      check_named_node_escapeless(f) {
        return Fs.test(f) ? R(f) : this.error(`invalid IRI: "${f}"`);
      },
      match_prefixed_name_quick(f, x) {
        return J.lastIndex = x, [J.exec(f), J.lastIndex];
      },
      match_prefixed_name_escapeless(f, x) {
        let [y, S] = Jt(f, x);
        if (y && !Ut.test(y[2]) && y[2]) {
          this.error(`invalid prefixed name local name: "${y[2]}:"`);
          return;
        }
        return [y, S];
      },
      match_prefixed_name(f, x) {
        let [y, S] = Qt(f, x);
        if (y && !Ut.test(y[2])) {
          this.error(`invalid prefixed name local name: "${y[2]}:"`);
          return;
        }
        return [y, S];
      }
    }), this.named_node = R, this.prefixed_name = function(f, x) {
      return R(a[f] + x);
    }, typeof t.base == "string")
      throw new TypeError(`invalid type 'string' was given for 'base' event listener: '${t.base}'
did you mean to use the 'base_uri' key instead?`);
    let p = t.base_uri || t.baseUri || t.baseURI || t.base_iri || t.baseIri || t.baseIRI;
    if (p) {
      let f = _t.exec(p);
      this._s_base_url = f[1], this._s_base_url_root = f[2] || "", this._s_base_url_scheme = f[3] || "", this._s_base_url_path = f[4] || "";
    } else if (t.base_url || t.baseUrl || t.baseURL)
      throw new Error(`invalid option: .base${t.base_url ? "_url" : t.baseUrl ? "Url" : t.baseURL ? "URL" : ""}; use the '.base_uri' key instead`);
    let E = this.transform = new qs({
      // on data event
      transform: (f, x, y) => {
        let S = this.s = this.pre + f;
        this.n = S.length, this._b_trim_start ? (m.lastIndex = 0, m.exec(S), this.i = m.lastIndex) : this.i = 0, this.safe_parse(!0) && (E.emit("progress", f.length), y());
      },
      // once there's no more data to consume, invoke eof
      flush: (f) => {
        try {
          this.eof(1);
        } catch (x) {
          this.destroy(x);
          return;
        }
        f();
      }
    });
    if (E.on("pipe", (f) => {
      this._ds_input = f;
      let x = this._b_byte_tracking;
      if (!x && typeof f.setEncoding == "function")
        f.setEncoding("utf8");
      else {
        let y = E.write, S = new Cs.StringDecoder("utf8"), Q = (V, K, X) => {
          let ke = Pt.Buffer.from(V, "utf8").length;
          return this._nb_seen += ke, this._nb_last = ke, y.call(E, V, K, X);
        }, O = (V, K, X) => {
          let ke = this._nb_last = V.length;
          return this._nb_seen += ke, y.call(E, S.write(V), K, X);
        }, B = (V, K, X) => y.call(E, S.write(V), K, X);
        E.write = function(V, K, X) {
          return V !== null ? (typeof V == "string" ? E.write = x ? Q : y : E.write = x ? O : B, E.write(V, K, X)) : y.call(E, V, K, X);
        }, x && (this.emit_data = this.data = this.restore_data = function() {
          let V = this._dc_factory.quad(this._kt_subject, this._kt_predicate, this._kt_object, this._kt_graph), K = Pt.Buffer.from(this.s.slice(this.i)).length, X = this._nb_seen - K;
          V.byteRange = [this._nb_curr, X], this._nb_curr = X, this.transform.push(V);
        });
      }
    }), E.on("newListener", (f) => {
      f === "comment" && (this.emit_comments = (x) => {
        let y = x.slice(1).replace(/\n\s+$/, "").split(/\n+\s*#/g);
        for (let S of y)
          E.emit("comment", S);
      });
    }), E._destroy = (...f) => {
      this.destroy(...f);
    }, this.bind(t), n)
      if (n.stream) {
        let f = n.stream;
        queueMicrotask(() => {
          f.pipe(E);
        });
      } else if (typeof n.string == "string") {
        let f = n.string;
        queueMicrotask(() => {
          E.end(f, "utf8");
        });
      } else
        throw new TypeError(`Invalid argument for input parameter: ${typeof n == "object" ? JSON.stringify(n) : n}`);
  }
  // begin parsing, keep applying until no more stack bail-outs
  safe_parse() {
    try {
      let t = this._f_state();
      for (; typeof t == "function"; )
        t = t.apply(this);
    } catch (t) {
      return this.destroy(t), !1;
    }
    return !0;
  }
  emit(t, ...n) {
    this.transform.emit(t, ...n);
  }
  queue(t, ...n) {
    this._a_queue_event.push({
      event: t,
      args: n
    });
  }
  error(t) {
    throw new Error(t);
  }
  // parse_error (not meant to be an event callback)
  parse_error(t, n = !1) {
    let e = this.i, _ = Math.min(e, Math.abs(e - 15)), a = this.s;
    return this.error(`
\`${a.substr(_, _ + 90).replace(/[\n\t]/g, " ")}\`
 ${" ".repeat(e - _)}^
expected ${t} ${n ? "but encountered <<EOF>>" : ""}.  failed to parse a valid token starting at ${a[e] ? '"' + a[e] + '"' : "<<EOF>>"}`);
  }
  info_error(t) {
    let n = this.i, e = Math.min(n, Math.abs(n - 15)), _ = this.s;
    this.error(`
\`${_.substr(e, e + 90).replace(/[\n\t]/g, " ")}\`
 ${" ".repeat(n - e)}^
` + t);
  }
  // end of file
  eof() {
    if (this._a_queue_event.length) {
      let n = this._a_queue_event;
      for (; n.length; ) {
        let e = n.shift();
        this[e.event](e.data);
      }
    }
    if (this.block !== this._f_state && (this.s += "\0", this.n = this.s.length, this.safe_parse())) {
      if (this.s === null)
        return;
      if (this.block !== this._f_state)
        return this.parse_error(this._f_state.name, !0);
    }
    if (this.i < this.n) {
      let n = this.s, e = this.i;
      m.lastIndex = e, m.exec(n), e = m.lastIndex, k.lastIndex = e;
      let _ = k.exec(n);
      if (k.lastIndex > e && (this.i = e = k.lastIndex, this.emit_comments && this.emit_comments(_[0])), e < this.n && !(e === this.n - 1 && n[e] === "\0"))
        return this.parse_error(this._f_state.name);
    }
    this.s = null;
    let t = this.transform;
    t.emit("progress", 0), t.emit("eof", this._h_prefixes), t.push(null);
  }
  // bind event listeners to transform stream
  bind(t) {
    let n = this.transform;
    t.base && n.on("base", t.base), t.prefix && n.on("prefix", t.prefix), t.enter && n.on("enter", t.enter), t.exit && n.on("exit", t.exit), t.comment && n.on("comment", t.comment), t.error && n.on("error", t.error), t.read && n.once("read", t.read), t.progress && n.on("progress", t.progress), t.eof && n.once("eof", t.eof), t.end && n.once("end", t.end), t.finish && n.once("finish", t.finish), t.data && n.on("data", t.data);
  }
  // after a blank node subject (either property-list or colleciton)
  post_blank_subject() {
    let { s: t, i: n } = this;
    return t[n] === "." ? (m.lastIndex = n + 1, m.exec(t), this.i = m.lastIndex, this._kt_default_graph === this._kt_graph ? this.block() : this.statement()) : (ue.lastIndex = n, ue.exec(t) ? (this.i = ue.lastIndex, this._kt_rdf_nil.equals(this._kt_subject) ? this.error("empty collection") : (this.emit("exit", this._kt_graph), this._kt_graph = this._kt_default_graph, this.block())) : this.pairs());
  }
  // parse state for statement
  statement() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      J.lastIndex = e;
      let _ = J.exec(t);
      if (_) {
        this.i = J.lastIndex;
        let a = _[1] || "";
        return q.call(this._h_prefixes, a) ? (this._kt_subject = this.prefixed_name(a, _[2]), this.pairs()) : this.error(`no such prefix "${a}"`);
      } else {
        D.lastIndex = e;
        let a = D.exec(t);
        if (a) {
          this.i = D.lastIndex;
          let c = a[1];
          return !this._s_base_url || F.test(c) ? this._kt_subject = this.check_named_node_escapeless(c) : this._kt_subject = this.check_named_node_escapeless(P.resolve(this._s_base_url, c)), this.pairs();
        } else {
          let c = this.match_prefixed_name_escapeless(t, e);
          if (!c)
            return !0;
          let [o, d] = c;
          if (o) {
            this.i = d;
            let u = o[1] || "";
            return q.call(this._h_prefixes, u) ? (this._kt_subject = this.prefixed_name(u, o[2]), this.pairs()) : this.error(`no such prefix "${u}"`);
          } else {
            Z.lastIndex = e;
            let u = Z.exec(t);
            if (u) {
              this.i = Z.lastIndex;
              let b = u[1];
              return this._kt_subject = this.blank_node(b), this.pairs();
            } else {
              if (oe.lastIndex = e, oe.exec(t))
                return this.i = oe.lastIndex, this._kt_subject = this.anonymous_blank_node(this.next_label()), this.pairs();
              if (je.lastIndex = e, je.exec(t))
                return this.i = je.lastIndex, this._kt_subject = this.anonymous_blank_node(this.next_label()), this._a_nested.push([this._kt_subject, this._kt_predicate, "post_blank_subject"]), this.pairs();
              if (Re.lastIndex = e, Re.exec(t))
                return this.i = Re.lastIndex, this._kt_subject = null, this.collection_subject();
              if (ue.lastIndex = e, ue.exec(t))
                return this.i = ue.lastIndex, this.emit("exit", this._kt_graph), this._kt_graph = this._kt_default_graph, this.block();
              {
                T.lastIndex = e;
                let b = T.exec(t);
                if (b) {
                  this.i = T.lastIndex;
                  let R = b[1].replace(z, G);
                  return !this._s_base_url || F.test(R) ? this._kt_subject = this.check_named_node(R) : this._kt_subject = this.check_named_node(P.resolve(this._s_base_url, R)), this.pairs();
                } else {
                  let R = this.match_prefixed_name(t, e);
                  if (!R)
                    return !0;
                  let [p, E] = R;
                  if (p) {
                    this.i = E;
                    let f = p[1] || "";
                    if (!q.call(this._h_prefixes, f))
                      return this.error(`no such prefix "${f}"`);
                    let x = p[2].replace(z, G).replace(pe, "$1");
                    return this._kt_subject = this.prefixed_name(f, x), this.pairs();
                  } else {
                    k.lastIndex = e;
                    let f = k.exec(t);
                    if (f) {
                      e = k.lastIndex, this.emit_comments && this.emit_comments(f[0]);
                      continue;
                    } else
                      break;
                  }
                }
              }
            }
          }
        }
      }
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("statement");
    this._f_state = this.statement, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for block
  block() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      Qe.lastIndex = e;
      let _ = Qe.exec(t);
      if (_) {
        this.i = Qe.lastIndex;
        let a = _[1];
        return !this._s_base_url || F.test(a) ? this._kt_graph = this.check_named_node_escapeless(a) : this._kt_graph = this.check_named_node_escapeless(P.resolve(this._s_base_url, a)), this.emit("enter", this._kt_graph), this.statement();
      } else {
        et.lastIndex = e;
        let a = et.exec(t);
        if (a) {
          this.i = et.lastIndex;
          let c = a[1] || "";
          return q.call(this._h_prefixes, c) ? (this._kt_graph = this.prefixed_name(c, a[2]), this.emit("enter", this._kt_graph), this.statement()) : this.error(`no such prefix "${c}"`);
        } else {
          if (nt.lastIndex = e, nt.exec(t))
            return this.i = nt.lastIndex, this._kt_graph = this._dc_factory.defaultGraph(), this.emit("enter", this._kt_graph), this.statement();
          if (st.lastIndex = e, st.exec(t))
            return this.i = st.lastIndex, this._kt_graph = this.anonymous_blank_node(this.next_label()), this.emit("enter", this._kt_graph), this.statement();
          {
            tt.lastIndex = e;
            let o = tt.exec(t);
            if (o) {
              this.i = tt.lastIndex;
              let d = o[1];
              return this._kt_graph = this.blank_node(d), this.emit("enter", this._kt_graph), this.statement();
            } else {
              D.lastIndex = e;
              let d = D.exec(t);
              if (d) {
                this.i = D.lastIndex;
                let u = d[1];
                return !this._s_base_url || F.test(u) ? this._kt_subject = this.check_named_node_escapeless(u) : this._kt_subject = this.check_named_node_escapeless(P.resolve(this._s_base_url, u)), this.graph_or_subject();
              } else {
                let u = this.match_prefixed_name_escapeless(t, e);
                if (!u)
                  return !0;
                let [b, R] = u;
                if (b) {
                  this.i = R;
                  let p = b[1] || "";
                  return q.call(this._h_prefixes, p) ? (this._kt_subject = this.prefixed_name(p, b[2]), this.graph_or_subject()) : this.error(`no such prefix "${p}"`);
                } else {
                  Z.lastIndex = e;
                  let p = Z.exec(t);
                  if (p) {
                    this.i = Z.lastIndex;
                    let E = p[1];
                    return this._kt_subject = this.blank_node(E), this.graph_or_subject();
                  } else {
                    if (oe.lastIndex = e, oe.exec(t))
                      return this.i = oe.lastIndex, this._kt_subject = this.anonymous_blank_node(this.next_label()), this.graph_or_subject();
                    if (je.lastIndex = e, je.exec(t))
                      return this.i = je.lastIndex, this._kt_subject = this.anonymous_blank_node(this.next_label()), this._a_nested.push([this._kt_subject, this._kt_predicate, "post_blank_subject"]), this.graph_or_subject_property_list();
                    if (Re.lastIndex = e, Re.exec(t))
                      return this.i = Re.lastIndex, this._kt_subject = null, this.collection_subject();
                    {
                      We.lastIndex = e;
                      let E = We.exec(t);
                      if (E)
                        return this.i = We.lastIndex, this._b_expecting_full_stop = !!E[1], this.prefix_id();
                      {
                        Je.lastIndex = e;
                        let f = Je.exec(t);
                        if (f)
                          return this.i = Je.lastIndex, this._b_expecting_full_stop = !!f[1], this.base_iri();
                        {
                          T.lastIndex = e;
                          let x = T.exec(t);
                          if (x) {
                            this.i = T.lastIndex;
                            let y = x[1].replace(z, G);
                            return !this._s_base_url || F.test(y) ? this._kt_subject = this.check_named_node(y) : this._kt_subject = this.check_named_node(P.resolve(this._s_base_url, y)), this.graph_or_subject();
                          } else {
                            let y = this.match_prefixed_name(t, e);
                            if (!y)
                              return !0;
                            let [S, Q] = y;
                            if (S) {
                              this.i = Q;
                              let O = S[1] || "";
                              if (!q.call(this._h_prefixes, O))
                                return this.error(`no such prefix "${O}"`);
                              let B = S[2].replace(z, G).replace(pe, "$1");
                              return this._kt_subject = this.prefixed_name(O, B), this.graph_or_subject();
                            } else {
                              it.lastIndex = e;
                              let O = it.exec(t);
                              if (O) {
                                this.i = it.lastIndex;
                                let B = O[1].replace(z, G);
                                return !this._s_base_url || F.test(B) ? this._kt_graph = this.check_named_node(B) : this._kt_graph = this.check_named_node(P.resolve(this._s_base_url, B)), this.emit("enter", this._kt_graph), this.statement();
                              } else {
                                k.lastIndex = e;
                                let B = k.exec(t);
                                if (B) {
                                  e = k.lastIndex, this.emit_comments && this.emit_comments(B[0]);
                                  continue;
                                } else {
                                  if (rt.lastIndex = e, rt.exec(t))
                                    return this.i = rt.lastIndex, this.graph_keyword();
                                  break;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("block");
    this._f_state = this.block, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for graph_or_subject
  graph_or_subject() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      let _ = t[e];
      if (_ === "{")
        return m.lastIndex = e + 1, m.exec(t), this.i = m.lastIndex, this._kt_graph = this._kt_subject, this.emit("enter", this._kt_graph), this._kt_subject = null, this.statement();
      if (_ !== "#")
        return this.pairs();
      {
        k.lastIndex = e;
        let a = k.exec(t);
        if (a) {
          e = k.lastIndex, this.emit_comments && this.emit_comments(a[0]);
          continue;
        } else
          break;
      }
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("graph_or_subject");
    this._f_state = this.graph_or_subject, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for graph_or_subject_property_list
  graph_or_subject_property_list() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      let _ = t[e];
      if (_ === "]")
        return m.lastIndex = e + 1, m.exec(t), this.i = m.lastIndex, this.graph_or_subject_anon();
      if (_ !== "#")
        return this.pairs();
      {
        k.lastIndex = e;
        let a = k.exec(t);
        if (a) {
          e = k.lastIndex, this.emit_comments && this.emit_comments(a[0]);
          continue;
        } else
          break;
      }
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("graph_or_subject_property_list");
    this._f_state = this.graph_or_subject_property_list, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for graph_or_subject_anon
  graph_or_subject_anon() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      let _ = t[e];
      if (_ === "{")
        return m.lastIndex = e + 1, m.exec(t), this.i = m.lastIndex, this._kt_graph = this._kt_subject, this.emit("enter", this._kt_graph), this._kt_subject = null, this._a_nested.pop(), this.statement();
      if (_ !== "#")
        return this.pairs();
      {
        k.lastIndex = e;
        let a = k.exec(t);
        if (a) {
          e = k.lastIndex, this.emit_comments && this.emit_comments(a[0]);
          continue;
        } else
          break;
      }
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("graph_or_subject_anon");
    this._f_state = this.graph_or_subject_anon, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for graph_keyword
  graph_keyword() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      let _ = this.match_prefixed_name_escapeless(t, e);
      if (!_)
        return !0;
      let [a, c] = _;
      if (a) {
        this.i = c;
        let o = a[1] || "";
        return q.call(this._h_prefixes, o) ? (this._kt_graph = this.prefixed_name(o, a[2]), this.graph_post_name()) : this.error(`no such prefix "${o}"`);
      } else {
        D.lastIndex = e;
        let o = D.exec(t);
        if (o) {
          this.i = D.lastIndex;
          let d = o[1];
          return !this._s_base_url || F.test(d) ? this._kt_graph = this.check_named_node_escapeless(d) : this._kt_graph = this.check_named_node_escapeless(P.resolve(this._s_base_url, d)), this.graph_post_name();
        } else {
          Z.lastIndex = e;
          let d = Z.exec(t);
          if (d) {
            this.i = Z.lastIndex;
            let u = d[1];
            return this._kt_graph = this.blank_node(u), this.graph_post_name();
          } else {
            if (oe.lastIndex = e, oe.exec(t))
              return this.i = oe.lastIndex, this._kt_graph = this.anonymous_blank_node(this.next_label()), this.graph_post_name();
            {
              T.lastIndex = e;
              let u = T.exec(t);
              if (u) {
                this.i = T.lastIndex;
                let b = u[1].replace(z, G);
                return !this._s_base_url || F.test(b) ? this._kt_graph = this.check_named_node(b) : this._kt_graph = this.check_named_node(P.resolve(this._s_base_url, b)), this.graph_post_name();
              } else {
                let b = this.match_prefixed_name(t, e);
                if (!b)
                  return !0;
                let [R, p] = b;
                if (R) {
                  this.i = p;
                  let E = R[1] || "";
                  if (!q.call(this._h_prefixes, E))
                    return this.error(`no such prefix "${E}"`);
                  let f = R[2].replace(z, G).replace(pe, "$1");
                  return this._kt_graph = this.prefixed_name(E, f), this.graph_post_name();
                } else {
                  k.lastIndex = e;
                  let E = k.exec(t);
                  if (E) {
                    e = k.lastIndex, this.emit_comments && this.emit_comments(E[0]);
                    continue;
                  } else
                    break;
                }
              }
            }
          }
        }
      }
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("graph_keyword");
    this._f_state = this.graph_keyword, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for graph_post_name
  graph_post_name() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      if (t[e] === "{")
        return m.lastIndex = e + 1, m.exec(t), this.i = m.lastIndex, this.emit("enter", this._kt_graph), this.statement();
      {
        k.lastIndex = e;
        let a = k.exec(t);
        if (a) {
          e = k.lastIndex, this.emit_comments && this.emit_comments(a[0]);
          continue;
        } else
          break;
      }
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("graph_post_name");
    this._f_state = this.graph_post_name, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for pairs
  pairs() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      D.lastIndex = e;
      let _ = D.exec(t);
      if (_) {
        this.i = D.lastIndex;
        let a = _[1];
        return !this._s_base_url || F.test(a) ? this._kt_predicate = this.check_named_node_escapeless(a) : this._kt_predicate = this.check_named_node_escapeless(P.resolve(this._s_base_url, a)), this.object_list();
      } else {
        let a = this.match_prefixed_name_escapeless(t, e);
        if (!a)
          return !0;
        let [c, o] = a;
        if (c) {
          this.i = o;
          let d = c[1] || "";
          return q.call(this._h_prefixes, d) ? (this._kt_predicate = this.prefixed_name(d, c[2]), this.object_list()) : this.error(`no such prefix "${d}"`);
        } else {
          if (Ze.lastIndex = e, Ze.exec(t))
            return this.i = Ze.lastIndex, this._kt_predicate = this._kt_rdf_type, this.object_list();
          if (at.lastIndex = e, at.exec(t)) {
            this.i = at.lastIndex;
            let d;
            return [this._kt_subject, this._kt_predicate, d] = this._a_nested.pop(), this[d]();
          } else {
            T.lastIndex = e;
            let d = T.exec(t);
            if (d) {
              this.i = T.lastIndex;
              let u = d[1].replace(z, G);
              return !this._s_base_url || F.test(u) ? this._kt_predicate = this.check_named_node(u) : this._kt_predicate = this.check_named_node(P.resolve(this._s_base_url, u)), this.object_list();
            } else {
              let u = this.match_prefixed_name(t, e);
              if (!u)
                return !0;
              let [b, R] = u;
              if (b) {
                this.i = R;
                let p = b[1] || "";
                if (!q.call(this._h_prefixes, p))
                  return this.error(`no such prefix "${p}"`);
                let E = b[2].replace(z, G).replace(pe, "$1");
                return this._kt_predicate = this.prefixed_name(p, E), this.object_list();
              } else {
                k.lastIndex = e;
                let p = k.exec(t);
                if (p) {
                  e = k.lastIndex, this.emit_comments && this.emit_comments(p[0]);
                  continue;
                } else
                  break;
              }
            }
          }
        }
      }
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("pairs");
    this._f_state = this.pairs, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for object_list
  object_list() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      let _ = t[e];
      if (_ === '"') {
        if (e + 2 < n)
          return t[e + 1] === '"' && t[e + 2] === '"' ? (this.i = e + 3, this.string_literal_long_double()) : (this.i = e + 1, this.string_literal_short_double());
        if (e + 1 < n && t[e + 1] !== '"')
          return this.i = e + 1, this.string_literal_short_double();
        break;
      } else {
        J.lastIndex = e;
        let a = J.exec(t);
        if (a) {
          this.i = J.lastIndex;
          let c = a[1] || "";
          if (!q.call(this._h_prefixes, c))
            return this.error(`no such prefix "${c}"`);
          this._kt_object = this.prefixed_name(c, a[2]);
        } else {
          D.lastIndex = e;
          let c = D.exec(t);
          if (c) {
            this.i = D.lastIndex;
            let o = c[1];
            !this._s_base_url || F.test(o) ? this._kt_object = this.check_named_node_escapeless(o) : this._kt_object = this.check_named_node_escapeless(P.resolve(this._s_base_url, o));
          } else {
            let o = this.match_prefixed_name_escapeless(t, e);
            if (!o)
              return !0;
            let [d, u] = o;
            if (d) {
              this.i = u;
              let b = d[1] || "";
              if (!q.call(this._h_prefixes, b))
                return this.error(`no such prefix "${b}"`);
              this._kt_object = this.prefixed_name(b, d[2]);
            } else if (_ === "'") {
              if (e + 2 < n)
                return t[e + 1] === "'" && t[e + 2] === "'" ? (this.i = e + 3, this.string_literal_long_single()) : (this.i = e + 1, this.string_literal_short_single());
              if (e + 1 < n && t[e + 1] !== "'")
                return this.i = e + 1, this.string_literal_short_single();
              break;
            } else {
              fe.lastIndex = e;
              let b = fe.exec(t);
              if (b)
                this.i = fe.lastIndex, b[4] ? this._kt_object = this._dc_factory.double(b[1]) : b[2] || b[3] ? this._kt_object = this._dc_factory.decimal(b[1]) : this._kt_object = this._dc_factory.integer(b[1]);
              else {
                ce.lastIndex = e;
                let R = ce.exec(t);
                if (R)
                  this.i = ce.lastIndex, this._kt_object = this._dc_factory.boolean(!!R[1]);
                else if (_ === "[") {
                  m.lastIndex = e + 1, m.exec(t), this.i = m.lastIndex;
                  let p = this._kt_object = this.anonymous_blank_node(this.next_label());
                  return this.data(), this._a_nested.push([this._kt_subject, this._kt_predicate, "post_object"]), this._kt_subject = p, this.pairs();
                } else {
                  Be.lastIndex = e;
                  let p = Be.exec(t);
                  if (p) {
                    this.i = Be.lastIndex;
                    let E = p[1];
                    this._kt_object = this.blank_node(E);
                  } else {
                    if (_ === "(")
                      return m.lastIndex = e + 1, m.exec(t), this.i = m.lastIndex, this._a_nested.push([this._kt_subject, this._kt_predicate, "post_object"]), this.collection_object();
                    {
                      T.lastIndex = e;
                      let E = T.exec(t);
                      if (E) {
                        this.i = T.lastIndex;
                        let f = E[1].replace(z, G);
                        !this._s_base_url || F.test(f) ? this._kt_object = this.check_named_node(f) : this._kt_object = this.check_named_node(P.resolve(this._s_base_url, f));
                      } else {
                        let f = this.match_prefixed_name(t, e);
                        if (!f)
                          return !0;
                        let [x, y] = f;
                        if (x) {
                          this.i = y;
                          let S = x[1] || "";
                          if (!q.call(this._h_prefixes, S))
                            return this.error(`no such prefix "${S}"`);
                          let Q = x[2].replace(z, G).replace(pe, "$1");
                          this._kt_object = this.prefixed_name(S, Q);
                        } else {
                          k.lastIndex = e;
                          let S = k.exec(t);
                          if (S) {
                            e = k.lastIndex, this.emit_comments && this.emit_comments(S[0]);
                            continue;
                          } else
                            break;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return this.data(), this.after_end_of_statement;
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("object_list");
    this._f_state = this.object_list, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for string_literal_short_double
  string_literal_short_double() {
    let { s: t, n, i: e } = this;
    e:
      for (; e < n; ) {
        ht.lastIndex = e;
        let _ = ht.exec(t);
        if (_) {
          this.i = ht.lastIndex;
          let a = _.index;
          switch (this._s_literal += t.slice(e, a), t[a]) {
            case '"':
              return m.lastIndex = a + 1, m.exec(t), this.i = m.lastIndex, this._b_trim_start = !0, this.datatype_or_langtag();
            case "\\": {
              Kt.lastIndex = a;
              let c = Kt.exec(t);
              if (c) {
                let o = c.index, d = t.slice(a, o);
                return this._s_literal += zt(d), this.i = o + c[0].length, this._b_trim_start = !0, this.datatype_or_langtag();
              } else {
                let o = t.slice(a), [d, u] = Gt(o);
                this._s_literal += d, e = n - u.length;
                break e;
              }
            }
            case `
`:
              return this.info_error("expected string_literal_short_double but invalid line feed character '\\n' (newline) within contents. failed to parse a valid token");
            case "\r":
              return this.info_error("expected string_literal_short_double but invalid form feed character '\\r' (carriage return) within contents. failed to parse a valid token");
            default:
              console.assert(`Unhandle invalid character ${JSON.stringify(t[a])} case for string_literal_short_double`);
          }
        } else {
          this._s_literal += e ? t.slice(e) : t, e = n;
          break;
        }
      }
    if (this._b_trim_start = !1, this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("string_literal_short_double");
    this._f_state = this.string_literal_short_double, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for string_literal_short_single
  string_literal_short_single() {
    let { s: t, n, i: e } = this;
    e:
      for (; e < n; ) {
        ft.lastIndex = e;
        let _ = ft.exec(t);
        if (_) {
          this.i = ft.lastIndex;
          let a = _.index;
          switch (this._s_literal += t.slice(e, a), t[a]) {
            case "'":
              return m.lastIndex = a + 1, m.exec(t), this.i = m.lastIndex, this._b_trim_start = !0, this.datatype_or_langtag();
            case "\\": {
              Xt.lastIndex = a;
              let c = Xt.exec(t);
              if (c) {
                let o = c.index, d = t.slice(a, o);
                return this._s_literal += zt(d), this.i = o + c[0].length, this._b_trim_start = !0, this.datatype_or_langtag();
              } else {
                let o = t.slice(a), [d, u] = Gt(o);
                this._s_literal += d, e = n - u.length;
                break e;
              }
            }
            case `
`:
              return this.info_error("expected string_literal_short_single but invalid line feed character '\\n' (newline) within contents. failed to parse a valid token");
            case "\r":
              return this.info_error("expected string_literal_short_single but invalid form feed character '\\r' (carriage return) within contents. failed to parse a valid token");
            default:
              console.assert(`Unhandle invalid character ${JSON.stringify(t[a])} case for string_literal_short_single`);
          }
        } else {
          this._s_literal += e ? t.slice(e) : t, e = n;
          break;
        }
      }
    if (this._b_trim_start = !1, this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("string_literal_short_single");
    this._f_state = this.string_literal_short_single, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for string_literal_long_double
  string_literal_long_double() {
    let { s: t, n, i: e } = this;
    e:
      for (; e < n; ) {
        ct.lastIndex = e;
        let _ = ct.exec(t);
        if (_) {
          this.i = ct.lastIndex;
          let a = _.index;
          switch (this._s_literal += t.slice(e, a), t[a]) {
            case '"':
              return m.lastIndex = a + 3, m.exec(t), this.i = m.lastIndex, this._b_trim_start = !0, this.datatype_or_langtag();
            case "\\": {
              Wt.lastIndex = a;
              let c = Wt.exec(t);
              if (c) {
                let o = c.index, d = t.slice(a, o);
                return this._s_literal += Bt(d), this.i = o + c[0].length, this._b_trim_start = !0, this.datatype_or_langtag();
              } else {
                let o = t.slice(a), [d, u] = Zt(o);
                this._s_literal += d, e = n - u.length;
                break e;
              }
            }
            default:
              console.assert(`Unhandle invalid character ${JSON.stringify(t[a])} case for string_literal_long_double`);
          }
        } else {
          Mt.lastIndex = e;
          let a = Mt.exec(t);
          a ? (this._s_literal += t.slice(e, a.index), e = a.index) : (this._s_literal += e ? t.slice(e) : t, e = n);
          break;
        }
      }
    if (this._b_trim_start = !1, this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("string_literal_long_double");
    this._f_state = this.string_literal_long_double, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for string_literal_long_single
  string_literal_long_single() {
    let { s: t, n, i: e } = this;
    e:
      for (; e < n; ) {
        ot.lastIndex = e;
        let _ = ot.exec(t);
        if (_) {
          this.i = ot.lastIndex;
          let a = _.index;
          switch (this._s_literal += t.slice(e, a), t[a]) {
            case "'":
              return m.lastIndex = a + 3, m.exec(t), this.i = m.lastIndex, this._b_trim_start = !0, this.datatype_or_langtag();
            case "\\": {
              Yt.lastIndex = a;
              let c = Yt.exec(t);
              if (c) {
                let o = c.index, d = t.slice(a, o);
                return this._s_literal += Bt(d), this.i = o + c[0].length, this._b_trim_start = !0, this.datatype_or_langtag();
              } else {
                let o = t.slice(a), [d, u] = Zt(o);
                this._s_literal += d, e = n - u.length;
                break e;
              }
            }
            default:
              console.assert(`Unhandle invalid character ${JSON.stringify(t[a])} case for string_literal_long_single`);
          }
        } else {
          Ht.lastIndex = e;
          let a = Ht.exec(t);
          a ? (this._s_literal += t.slice(e, a.index), e = a.index) : (this._s_literal += e ? t.slice(e) : t, e = n);
          break;
        }
      }
    if (this._b_trim_start = !1, this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("string_literal_long_single");
    this._f_state = this.string_literal_long_single, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for string_literal
  string_literal() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      let _ = t[e];
      if (_ === '"') {
        if (e + 2 < n)
          return t[e + 1] === '"' && t[e + 2] === '"' ? (this.i = e + 3, this.string_literal_long_double()) : (this.i = e + 1, this.string_literal_short_double());
        if (e + 1 < n && t[e + 1] !== '"')
          return this.i = e + 1, this.string_literal_short_double();
        break;
      } else if (_ === "'") {
        if (e + 2 < n)
          return t[e + 1] === "'" && t[e + 2] === "'" ? (this.i = e + 3, this.string_literal_long_single()) : (this.i = e + 1, this.string_literal_short_single());
        if (e + 1 < n && t[e + 1] !== "'")
          return this.i = e + 1, this.string_literal_short_single();
        break;
      } else
        break;
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_string_length)
      return this.parse_error("string_literal");
    this._f_state = this.string_literal, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for datatype_or_langtag
  datatype_or_langtag() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      let _ = t[e];
      if (_ === "^" || _ === "@") {
        if (Ke.lastIndex = e, Ke.exec(t))
          return this.i = Ke.lastIndex, this.datatype();
        {
          Xe.lastIndex = e;
          let a = Xe.exec(t);
          if (a)
            this.i = Xe.lastIndex, this._kt_object = this._dc_factory.languagedLiteral(this._s_literal, a[1]), this._s_literal = "";
          else
            break;
        }
      } else {
        k.lastIndex = e;
        let a = k.exec(t);
        if (a) {
          e = k.lastIndex, this.emit_comments && this.emit_comments(a[0]);
          continue;
        } else
          this._kt_object = this._dc_factory.simpleLiteral(this._s_literal), this._s_literal = "";
      }
      return this.data(), this.after_end_of_statement;
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("datatype_or_langtag");
    this._f_state = this.datatype_or_langtag, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for datatype
  datatype() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      let _ = null;
      J.lastIndex = e;
      let a = J.exec(t);
      if (a) {
        this.i = J.lastIndex;
        let c = a[1] || "";
        if (!q.call(this._h_prefixes, c))
          return this.error(`no such prefix "${c}"`);
        _ = this.prefixed_name(c, a[2]);
      } else {
        D.lastIndex = e;
        let c = D.exec(t);
        if (c) {
          this.i = D.lastIndex;
          let o, d = c[1];
          !this._s_base_url || F.test(d) ? o = d : o = P.resolve(this._s_base_url, d), _ = this.check_named_node_escapeless(o);
        } else {
          let o = this.match_prefixed_name_escapeless(t, e);
          if (!o)
            return !0;
          let [d, u] = o;
          if (d) {
            this.i = u;
            let b = d[1] || "";
            if (!q.call(this._h_prefixes, b))
              return this.error(`no such prefix "${b}"`);
            _ = this.prefixed_name(b, d[2]);
          } else if (T.lastIndex = e, T.exec(t)) {
            this.i = T.lastIndex;
            let R, p = c[1].replace(z, G);
            !this._s_base_url || F.test(p) ? R = p : R = P.resolve(this._s_base_url, p), _ = this.check_named_node(R);
          } else {
            let R = this.match_prefixed_name(t, e);
            if (!R)
              return !0;
            let [p, E] = R;
            if (p) {
              this.i = E;
              let f = p[1] || "";
              if (!q.call(this._h_prefixes, f))
                return this.error(`no such prefix "${f}"`);
              let x = p[2].replace(z, G).replace(pe, "$1");
              _ = this.prefixed_name(f, x);
            } else
              break;
          }
        }
      }
      return this._kt_object = this._dc_factory.datatypedLiteral(this._s_literal, _), this._s_literal = "", this.data(), this.after_end_of_statement;
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("datatype");
    this._f_state = this.datatype, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for post_object
  post_object() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      let _ = e, a = t[e];
      if (m.lastIndex = e + 1, m.exec(t), this.i = m.lastIndex, a === ",")
        return this.object_list();
      if (a === ";") {
        for (; ; ) {
          let c = t[this.i];
          if (c === "." || c === "]" || c === ";" || c === "}")
            return this.post_object();
          if (c === "#") {
            e = this.i, k.lastIndex = e;
            let o = k.exec(t);
            if (o) {
              this.i = k.lastIndex, this.emit_comments && this.emit_comments(o[0]);
              continue;
            } else
              break;
          } else {
            if (this.i === n)
              break;
            return this.pairs();
          }
        }
        e = _;
        break;
      } else {
        if (a === ".")
          return this._a_nested.length ? (this.i = e, this.parse_error("end_of_property_list")) : this._kt_default_graph === this._kt_graph ? this.block() : this.statement();
        if (a === "]") {
          let c;
          return [this._kt_subject, this._kt_predicate, c] = this._a_nested.pop(), this[c]();
        } else {
          if (a === ")")
            return Hs(this, e, "post_object", "but encountered end of collection");
          if (ue.lastIndex = e, ue.exec(t))
            return this.i = ue.lastIndex, this.emit("exit", this._kt_graph), this._kt_graph = this._kt_default_graph, this.block();
          {
            k.lastIndex = e;
            let c = k.exec(t);
            if (c) {
              e = k.lastIndex, this.emit_comments && this.emit_comments(c[0]);
              continue;
            } else
              break;
          }
        }
      }
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("post_object");
    this._f_state = this.post_object, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for base_iri
  base_iri() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      D.lastIndex = e;
      let _ = D.exec(t);
      if (_) {
        this.i = D.lastIndex;
        let a = _[1];
        !this._s_base_url || F.test(a) ? this._s_base_url = a : this._s_base_url = P.resolve(this._s_base_url, a);
        let c = _t.exec(this._s_base_url);
        return this._s_base_url = c[1], this._s_base_url_root = c[2] || "", this._s_base_url_scheme = c[3] || "", this._s_base_url_path = c[4] || "", this.emit("base", this._s_base_url), this._b_expecting_full_stop ? this.full_stop() : this.block();
      } else {
        T.lastIndex = e;
        let a = T.exec(t);
        if (a) {
          this.i = T.lastIndex;
          let c = a[1].replace(z, G);
          !this._s_base_url || F.test(c) ? this._s_base_url = c : this._s_base_url = P.resolve(this._s_base_url, c);
          let o = _t.exec(this._s_base_url);
          return this._s_base_url = o[1], this._s_base_url_root = o[2] || "", this._s_base_url_scheme = o[3] || "", this._s_base_url_path = o[4] || "", this.emit("base", this._s_base_url), this._b_expecting_full_stop ? this.full_stop() : this.block();
        } else {
          k.lastIndex = e;
          let c = k.exec(t);
          if (c) {
            e = k.lastIndex, this.emit_comments && this.emit_comments(c[0]);
            continue;
          } else
            break;
        }
      }
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("base_iri");
    this._f_state = this.base_iri, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for prefix_id
  prefix_id() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      Ye.lastIndex = e;
      let _ = Ye.exec(t);
      if (_)
        return this.i = Ye.lastIndex, this._s_temp_prefix_id = _[1], this.prefix_iri();
      {
        k.lastIndex = e;
        let a = k.exec(t);
        if (a) {
          e = k.lastIndex, this.emit_comments && this.emit_comments(a[0]);
          continue;
        } else
          break;
      }
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("prefix_id");
    this._f_state = this.prefix_id, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for prefix_iri
  prefix_iri() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      let _ = this._h_prefixes, a = this._s_temp_prefix_id, c;
      D.lastIndex = e;
      let o = D.exec(t);
      if (o) {
        this.i = D.lastIndex;
        let d = o[1];
        !this._s_base_url || F.test(d) ? c = d : c = P.resolve(this._s_base_url, d);
        let u = this._b_relax;
        if (a in _)
          c !== _[a] && (this.prefix_change && this.prefix_change(a, _[a], c), _[a] = c);
        else {
          if (!u && !Ft.test(a))
            return this.error(`Invalid namespace for prefixed name: "${a}:"`);
          _[a] = c;
        }
        return !u && !ze.test(c) ? this.error(`Invalid IRI found in prefix delcaration: "${d}"`) : (this.event("prefix", a, c), this._b_expecting_full_stop ? this.full_stop() : this.block());
      } else {
        T.lastIndex = e;
        let d = T.exec(t);
        if (d) {
          this.i = T.lastIndex;
          let u = d[1].replace(z, G);
          !this._s_base_url || F.test(u) ? c = u : c = P.resolve(this._s_base_url, u);
          let b = this._b_relax;
          if (a in _)
            c !== _[a] && (this.prefix_change && this.prefix_change(a, _[a], c), _[a] = c);
          else {
            if (!b && !Ft.test(a))
              return this.error(`Invalid namespace for prefixed name: "${a}:"`);
            _[a] = c;
          }
          return !b && !ze.test(c) ? this.error(`Invalid IRI found in prefix delcaration: "${u}"`) : (this.event("prefix", a, c), this._b_expecting_full_stop ? this.full_stop() : this.block());
        } else {
          k.lastIndex = e;
          let u = k.exec(t);
          if (u) {
            e = k.lastIndex, this.emit_comments && this.emit_comments(u[0]);
            continue;
          } else
            break;
        }
      }
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("prefix_iri");
    this._f_state = this.prefix_iri, this.pre = t.slice(e), this.eos && this.eos();
  }
  // in case eos happens twice during prefix / base (extremely unlikely)
  // parse state for full_stop
  full_stop() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      if (lt.lastIndex = e, lt.exec(t))
        return this.i = lt.lastIndex, this.block();
      {
        k.lastIndex = e;
        let _ = k.exec(t);
        if (_) {
          e = k.lastIndex, this.emit_comments && this.emit_comments(_[0]);
          continue;
        } else
          break;
      }
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("full_stop");
    this._f_state = this.full_stop, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for collection_subject
  collection_subject() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      let _ = t[e];
      if (_ === ")") {
        if (m.lastIndex = e + 1, m.exec(t), this.i = m.lastIndex, this._kt_subject === null)
          return this._kt_subject = this._kt_rdf_nil, this.post_blank_subject();
        this._kt_object = this._kt_rdf_nil, this.data();
        let u;
        return [this._kt_subject, this._kt_predicate, u] = this._a_nested.pop(), this[u]();
      }
      let a, c = !1;
      this._kt_subject === null && (a = this.next_label(), this._kt_subject = this.anonymous_blank_node(a), this._a_nested.push([this._kt_subject, this._kt_predicate, "pairs"]), this._kt_subject = null, c = !0), D.lastIndex = e;
      let o = D.exec(t);
      if (o) {
        e = D.lastIndex;
        let u = o[1];
        !this._s_base_url || F.test(u) ? this._kt_object = this.check_named_node_escapeless(u) : this._kt_object = this.check_named_node_escapeless(P.resolve(this._s_base_url, u));
      } else {
        let u = this.match_prefixed_name_escapeless(t, e);
        if (!u)
          return !0;
        let [b, R] = u;
        if (b) {
          e = R;
          let p = b[1] || "";
          if (!q.call(this._h_prefixes, p))
            return this.error(`no such prefix "${p}"`);
          this._kt_object = this.prefixed_name(p, b[2]);
        } else if (_ === '"' || _ === "'") {
          if (this._kt_subject === null)
            a = this.next_label(), this._kt_subject = this.anonymous_blank_node(a), this._kt_predicate = this._kt_rdf_first;
          else {
            a = this.next_label();
            let p = this._kt_object = this.anonymous_blank_node(a);
            this.data(), this._kt_subject = p, this._kt_predicate = this._kt_rdf_first;
          }
          return this.after_end_of_statement = function() {
            return this._kt_predicate = this._kt_rdf_rest, this.after_end_of_statement = this.post_object, this.collection_subject();
          }, this.string_literal();
        } else {
          fe.lastIndex = e;
          let p = fe.exec(t);
          if (p)
            e = fe.lastIndex, p[4] ? this._kt_object = this._dc_factory.double(p[1]) : p[2] || p[3] ? this._kt_object = this._dc_factory.decimal(p[1]) : this._kt_object = this._dc_factory.integer(p[1]);
          else {
            ce.lastIndex = e;
            let E = ce.exec(t);
            if (E)
              e = ce.lastIndex, this._kt_object = this._dc_factory.boolean(!!E[1]);
            else if (_ === "[") {
              m.lastIndex = e + 1, m.exec(t), this.i = m.lastIndex, a = this.next_label();
              let f;
              this._kt_subject !== null && (f = this._kt_object = this.anonymous_blank_node(a), this.data()), this._kt_subject = f || this.anonymous_blank_node(a), this._kt_predicate = this._kt_rdf_first;
              let x = this.next_label();
              return f = this._kt_object = this.anonymous_blank_node(x), this.data(), this._kt_predicate = this._kt_rdf_rest, this._a_nested.push([this._kt_subject, this._kt_predicate, "collection_subject"]), this._kt_subject = f, this.pairs();
            } else if (_ === "(") {
              if (m.lastIndex = e + 1, m.exec(t), e = m.lastIndex, t[e] === ")")
                return this.i = e, this._kt_subject = this._a_nested[this._a_nested.length - 1][0], this._kt_predicate = this._kt_rdf_first, this._a_nested.push([
                  this._kt_subject,
                  this._kt_rdf_rest,
                  "collection_subject"
                ]), this.collection_object();
              a = this.next_label();
              let f = this._kt_object = this.anonymous_blank_node(a);
              this.data(), this._kt_subject = f, this._kt_predicate = this._kt_rdf_rest, this._a_nested.push([this._kt_subject, this._kt_predicate, "collection_object"]), this._kt_predicate = this._kt_rdf_first;
              continue;
            } else {
              Z.lastIndex = e;
              let f = Z.exec(t);
              if (f) {
                e = Z.lastIndex;
                let x = f[1];
                this._kt_object = this.blank_node(x);
              } else {
                T.lastIndex = e;
                let x = T.exec(t);
                if (x) {
                  e = T.lastIndex;
                  let y = x[1].replace(z, G);
                  !this._s_base_url || F.test(y) ? this._kt_object = this.check_named_node(y) : this._kt_object = this.check_named_node(P.resolve(this._s_base_url, y));
                } else {
                  let y = this.match_prefixed_name(t, e);
                  if (!y)
                    return !0;
                  let [S, Q] = y;
                  if (S) {
                    e = Q;
                    let O = S[1] || "";
                    if (!q.call(this._h_prefixes, O))
                      return this.error(`no such prefix "${O}"`);
                    let B = S[2].replace(z, G).replace(pe, "$1");
                    this._kt_object = this.prefixed_name(O, B);
                  } else {
                    k.lastIndex = e;
                    let O = k.exec(t);
                    if (O) {
                      e = k.lastIndex, this.emit_comments && this.emit_comments(O[0]);
                      continue;
                    } else {
                      c && this._a_nested.pop();
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      }
      let d;
      if (a || (a = this.next_label()), this._kt_subject !== null) {
        let u = this._kt_object;
        d = this._kt_object = this.anonymous_blank_node(a), this.data(), this._kt_object = u;
      }
      this._kt_subject = d || this.anonymous_blank_node(a), this._kt_predicate = this._kt_rdf_first, this.data(), this._kt_predicate = this._kt_rdf_rest;
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("collection_subject");
    this._f_state = this.collection_subject, this.pre = t.slice(e), this.eos && this.eos();
  }
  // parse state for collection_object
  collection_object() {
    let { s: t, n, i: e } = this;
    for (; e < n; ) {
      let _ = t[e];
      if (_ === ")") {
        m.lastIndex = e + 1, m.exec(t), this.i = m.lastIndex, this._kt_object = this._kt_rdf_nil, this.data();
        let u;
        return [this._kt_subject, this._kt_predicate, u] = this._a_nested.pop(), this[u]();
      }
      let a;
      D.lastIndex = e;
      let c = D.exec(t);
      if (c) {
        e = D.lastIndex;
        let u = c[1];
        !this._s_base_url || F.test(u) ? this._kt_object = this.check_named_node_escapeless(u) : this._kt_object = this.check_named_node_escapeless(P.resolve(this._s_base_url, u));
      } else {
        let u = this.match_prefixed_name_escapeless(t, e);
        if (!u)
          return !0;
        let [b, R] = u;
        if (b) {
          e = R;
          let p = b[1] || "";
          if (!q.call(this._h_prefixes, p))
            return this.error(`no such prefix "${p}"`);
          this._kt_object = this.prefixed_name(p, b[2]);
        } else if (_ === '"' || _ === "'") {
          this.i = e;
          let p = this._kt_object = this.anonymous_blank_node(this.next_label());
          return this.data(), this._kt_subject = p, this._kt_predicate = this._kt_rdf_first, this.after_end_of_statement = function() {
            return this._kt_predicate = this._kt_rdf_rest, this.after_end_of_statement = this.post_object, this.collection_object();
          }, this.string_literal();
        } else {
          fe.lastIndex = e;
          let p = fe.exec(t);
          if (p)
            e = fe.lastIndex, p[4] ? this._kt_object = this._dc_factory.double(p[1]) : p[2] || p[3] ? this._kt_object = this._dc_factory.decimal(p[1]) : this._kt_object = this._dc_factory.integer(p[1]);
          else {
            ce.lastIndex = e;
            let E = ce.exec(t);
            if (E)
              e = ce.lastIndex, this._kt_object = this._dc_factory.boolean(!!E[1]);
            else if (_ === "[") {
              m.lastIndex = e + 1, m.exec(t), this.i = m.lastIndex;
              let f = this._kt_object = this.anonymous_blank_node(this.next_label());
              return this.data(), this._kt_subject = f, this._kt_predicate = this._kt_rdf_rest, this._a_nested.push([this._kt_subject, this._kt_predicate, "collection_object"]), this._kt_predicate = this._kt_rdf_first, f = this._kt_object = this.anonymous_blank_node(this.next_label()), this.data(), this._kt_subject = f, this._kt_predicate = this._kt_rdf_first, this.pairs();
            } else if (_ === "(") {
              m.lastIndex = e + 1, m.exec(t), e = m.lastIndex, a = this.next_label();
              let f = this._kt_object = this.anonymous_blank_node(a);
              if (this._kt_subject === null) {
                let x = this._a_nested[this._a_nested.length - 1];
                this._kt_subject = x[0], this._kt_predicate = x[1];
              }
              this.data(), this._kt_subject = f, this._kt_predicate = this._kt_rdf_rest, this._a_nested.push([this._kt_subject, this._kt_predicate, "collection_object"]), this._kt_predicate = this._kt_rdf_first;
              continue;
            } else {
              Z.lastIndex = e;
              let f = Z.exec(t);
              if (f) {
                e = Z.lastIndex;
                let x = f[1];
                a = this.next_label(), this._kt_object = this.blank_node(x);
              } else {
                T.lastIndex = e;
                let x = T.exec(t);
                if (x) {
                  e = T.lastIndex;
                  let y = x[1].replace(z, G);
                  !this._s_base_url || F.test(y) ? this._kt_object = this.check_named_node(y) : this._kt_object = this.check_named_node(P.resolve(this._s_base_url, y));
                } else {
                  let y = this.match_prefixed_name(t, e);
                  if (!y)
                    return !0;
                  let [S, Q] = y;
                  if (S) {
                    e = Q;
                    let O = S[1] || "";
                    if (!q.call(this._h_prefixes, O))
                      return this.error(`no such prefix "${O}"`);
                    let B = S[2].replace(z, G).replace(pe, "$1");
                    this._kt_object = this.prefixed_name(O, B);
                  } else {
                    k.lastIndex = e;
                    let O = k.exec(t);
                    if (O) {
                      e = k.lastIndex, this.emit_comments && this.emit_comments(O[0]);
                      continue;
                    } else
                      break;
                  }
                }
              }
            }
          }
        }
      }
      let o = this._kt_object;
      a || (a = this.next_label());
      let d = this._kt_object = this.anonymous_blank_node(a);
      this.data(), this._kt_subject = d, this._kt_predicate = this._kt_rdf_first, this._kt_object = o, this.data(), this._kt_predicate = this._kt_rdf_rest;
    }
    if (this.i = e, e < this.n && e === 0 && this.n > this.max_token_length)
      return this.parse_error("collection_object");
    this._f_state = this.collection_object, this.pre = t.slice(e), this.eos && this.eos();
  }
  destroy(t) {
    this.post_blank_subject = () => {
    }, this.statement = () => {
    }, this.block = () => {
    }, this.graph_or_subject = () => {
    }, this.graph_or_subject_property_list = () => {
    }, this.graph_or_subject_anon = () => {
    }, this.graph_keyword = () => {
    }, this.graph_post_name = () => {
    }, this.pairs = () => {
    }, this.object_list = () => {
    }, this.string_literal_short_double = () => {
    }, this.string_literal_short_single = () => {
    }, this.string_literal_long_double = () => {
    }, this.string_literal_long_single = () => {
    }, this.string_literal = () => {
    }, this.datatype_or_langtag = () => {
    }, this.datatype = () => {
    }, this.post_object = () => {
    }, this.base_iri = () => {
    }, this.prefix_id = () => {
    }, this.prefix_iri = () => {
    }, this.full_stop = () => {
    }, this.collection_subject = () => {
    }, this.collection_object = () => {
    }, this.eof = () => {
      this.s = null;
    }, this._b_destroyed = !0, !t && this._ds_input && this._ds_input.destroy(t), this.transform.demolish(t);
  }
}
var ts = function(...v) {
  let t = {};
  if (v.length) {
    let n = v[0];
    if (n && n.input && typeof n.input.string > "u" && !n.input.stream && (n = n.input), typeof n == "string")
      t.input = { string: n };
    else if (n === null)
      t.input = null;
    else if (typeof n.setEncoding == "function")
      t.input = { stream: n };
    else {
      if (typeof n.pipeTo == "function")
        throw new TypeError("Sorry, WHATWG streams are currently not supported :(");
      if (n && typeof n == "object" && Object.prototype.toString.call(n) === "[object Object]") {
        if (t = n, v.length > 1)
          throw new TypeError(`unexpected argument(s) after config struct: ${v.slice(1)}`);
      } else
        throw new TypeError(`unexpected input type: ${n}`);
    }
    if (v.length > 1 && (Object.assign(t, v[1]), v.length > 2))
      throw new TypeError(`unexpected argument(s) after input and config struct: ${v.slice(2)}`);
  }
  return new zs(t).transform;
};
const Gs = /* @__PURE__ */ ws(ts), Zs = /* @__PURE__ */ Ns({
  __proto__: null,
  default: Gs
}, [ts]);
export {
  Zs as m
};
//# sourceMappingURL=main-DVOEbC02.js.map
