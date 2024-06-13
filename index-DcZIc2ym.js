import { c as Xe, b as ye, a as Ue, e as lt, d as Ae, f as il, j as Ys, h as zs, i as Xs, S as Qs } from "./index-BhI9pmWG.js";
import { r as Bi, a as Zs } from "./index-eQz6HOSp.js";
import { c as ed } from "./canonicalize-CTXFGn-Q.js";
var ol = {}, nr = {}, Ee = {}, Fr = {};
(function() {
  (function(e) {
    (function(t) {
      var r = {
        searchParams: "URLSearchParams" in e,
        iterable: "Symbol" in e && "iterator" in Symbol,
        blob: "FileReader" in e && "Blob" in e && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in e,
        arrayBuffer: "ArrayBuffer" in e
      };
      function n(I) {
        return I && DataView.prototype.isPrototypeOf(I);
      }
      if (r.arrayBuffer)
        var o = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], a = ArrayBuffer.isView || function(I) {
          return I && o.indexOf(Object.prototype.toString.call(I)) > -1;
        };
      function i(I) {
        if (typeof I != "string" && (I = String(I)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(I))
          throw new TypeError("Invalid character in header field name");
        return I.toLowerCase();
      }
      function s(I) {
        return typeof I != "string" && (I = String(I)), I;
      }
      function f(I) {
        var O = {
          next: function() {
            var U = I.shift();
            return { done: U === void 0, value: U };
          }
        };
        return r.iterable && (O[Symbol.iterator] = function() {
          return O;
        }), O;
      }
      function u(I) {
        this.map = {}, I instanceof u ? I.forEach(function(O, U) {
          this.append(U, O);
        }, this) : Array.isArray(I) ? I.forEach(function(O) {
          this.append(O[0], O[1]);
        }, this) : I && Object.getOwnPropertyNames(I).forEach(function(O) {
          this.append(O, I[O]);
        }, this);
      }
      u.prototype.append = function(I, O) {
        I = i(I), O = s(O);
        var U = this.map[I];
        this.map[I] = U ? U + ", " + O : O;
      }, u.prototype.delete = function(I) {
        delete this.map[i(I)];
      }, u.prototype.get = function(I) {
        return I = i(I), this.has(I) ? this.map[I] : null;
      }, u.prototype.has = function(I) {
        return this.map.hasOwnProperty(i(I));
      }, u.prototype.set = function(I, O) {
        this.map[i(I)] = s(O);
      }, u.prototype.forEach = function(I, O) {
        for (var U in this.map)
          this.map.hasOwnProperty(U) && I.call(O, this.map[U], U, this);
      }, u.prototype.keys = function() {
        var I = [];
        return this.forEach(function(O, U) {
          I.push(U);
        }), f(I);
      }, u.prototype.values = function() {
        var I = [];
        return this.forEach(function(O) {
          I.push(O);
        }), f(I);
      }, u.prototype.entries = function() {
        var I = [];
        return this.forEach(function(O, U) {
          I.push([U, O]);
        }), f(I);
      }, r.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
      function h(I) {
        if (I.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        I.bodyUsed = !0;
      }
      function w(I) {
        return new Promise(function(O, U) {
          I.onload = function() {
            O(I.result);
          }, I.onerror = function() {
            U(I.error);
          };
        });
      }
      function b(I) {
        var O = new FileReader(), U = w(O);
        return O.readAsArrayBuffer(I), U;
      }
      function c(I) {
        var O = new FileReader(), U = w(O);
        return O.readAsText(I), U;
      }
      function S(I) {
        for (var O = new Uint8Array(I), U = new Array(O.length), k = 0; k < O.length; k++)
          U[k] = String.fromCharCode(O[k]);
        return U.join("");
      }
      function _(I) {
        if (I.slice)
          return I.slice(0);
        var O = new Uint8Array(I.byteLength);
        return O.set(new Uint8Array(I)), O.buffer;
      }
      function R() {
        return this.bodyUsed = !1, this._initBody = function(I) {
          this._bodyInit = I, I ? typeof I == "string" ? this._bodyText = I : r.blob && Blob.prototype.isPrototypeOf(I) ? this._bodyBlob = I : r.formData && FormData.prototype.isPrototypeOf(I) ? this._bodyFormData = I : r.searchParams && URLSearchParams.prototype.isPrototypeOf(I) ? this._bodyText = I.toString() : r.arrayBuffer && r.blob && n(I) ? (this._bodyArrayBuffer = _(I.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : r.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(I) || a(I)) ? this._bodyArrayBuffer = _(I) : this._bodyText = I = Object.prototype.toString.call(I) : this._bodyText = "", this.headers.get("content-type") || (typeof I == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r.searchParams && URLSearchParams.prototype.isPrototypeOf(I) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, r.blob && (this.blob = function() {
          var I = h(this);
          if (I)
            return I;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? h(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(b);
        }), this.text = function() {
          var I = h(this);
          if (I)
            return I;
          if (this._bodyBlob)
            return c(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(S(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, r.formData && (this.formData = function() {
          return this.text().then(G);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var C = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function L(I) {
        var O = I.toUpperCase();
        return C.indexOf(O) > -1 ? O : I;
      }
      function g(I, O) {
        O = O || {};
        var U = O.body;
        if (I instanceof g) {
          if (I.bodyUsed)
            throw new TypeError("Already read");
          this.url = I.url, this.credentials = I.credentials, O.headers || (this.headers = new u(I.headers)), this.method = I.method, this.mode = I.mode, this.signal = I.signal, !U && I._bodyInit != null && (U = I._bodyInit, I.bodyUsed = !0);
        } else
          this.url = String(I);
        if (this.credentials = O.credentials || this.credentials || "same-origin", (O.headers || !this.headers) && (this.headers = new u(O.headers)), this.method = L(O.method || this.method || "GET"), this.mode = O.mode || this.mode || null, this.signal = O.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && U)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(U);
      }
      g.prototype.clone = function() {
        return new g(this, { body: this._bodyInit });
      };
      function G(I) {
        var O = new FormData();
        return I.trim().split("&").forEach(function(U) {
          if (U) {
            var k = U.split("="), E = k.shift().replace(/\+/g, " "), x = k.join("=").replace(/\+/g, " ");
            O.append(decodeURIComponent(E), decodeURIComponent(x));
          }
        }), O;
      }
      function T(I) {
        var O = new u(), U = I.replace(/\r?\n[\t ]+/g, " ");
        return U.split(/\r?\n/).forEach(function(k) {
          var E = k.split(":"), x = E.shift().trim();
          if (x) {
            var V = E.join(":").trim();
            O.append(x, V);
          }
        }), O;
      }
      R.call(g.prototype);
      function D(I, O) {
        O || (O = {}), this.type = "default", this.status = O.status === void 0 ? 200 : O.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in O ? O.statusText : "OK", this.headers = new u(O.headers), this.url = O.url || "", this._initBody(I);
      }
      R.call(D.prototype), D.prototype.clone = function() {
        return new D(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new u(this.headers),
          url: this.url
        });
      }, D.error = function() {
        var I = new D(null, { status: 0, statusText: "" });
        return I.type = "error", I;
      };
      var H = [301, 302, 303, 307, 308];
      D.redirect = function(I, O) {
        if (H.indexOf(O) === -1)
          throw new RangeError("Invalid status code");
        return new D(null, { status: O, headers: { location: I } });
      }, t.DOMException = e.DOMException;
      try {
        new t.DOMException();
      } catch {
        t.DOMException = function(O, U) {
          this.message = O, this.name = U;
          var k = Error(O);
          this.stack = k.stack;
        }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException;
      }
      function B(I, O) {
        return new Promise(function(U, k) {
          var E = new g(I, O);
          if (E.signal && E.signal.aborted)
            return k(new t.DOMException("Aborted", "AbortError"));
          var x = new XMLHttpRequest();
          function V() {
            x.abort();
          }
          x.onload = function() {
            var W = {
              status: x.status,
              statusText: x.statusText,
              headers: T(x.getAllResponseHeaders() || "")
            };
            W.url = "responseURL" in x ? x.responseURL : W.headers.get("X-Request-URL");
            var z = "response" in x ? x.response : x.responseText;
            U(new D(z, W));
          }, x.onerror = function() {
            k(new TypeError("Network request failed"));
          }, x.ontimeout = function() {
            k(new TypeError("Network request failed"));
          }, x.onabort = function() {
            k(new t.DOMException("Aborted", "AbortError"));
          }, x.open(E.method, E.url, !0), E.credentials === "include" ? x.withCredentials = !0 : E.credentials === "omit" && (x.withCredentials = !1), "responseType" in x && r.blob && (x.responseType = "blob"), E.headers.forEach(function(W, z) {
            x.setRequestHeader(z, W);
          }), E.signal && (E.signal.addEventListener("abort", V), x.onreadystatechange = function() {
            x.readyState === 4 && E.signal.removeEventListener("abort", V);
          }), x.send(typeof E._bodyInit > "u" ? null : E._bodyInit);
        });
      }
      return B.polyfill = !0, e.fetch || (e.fetch = B, e.Headers = u, e.Request = g, e.Response = D), t.Headers = u, t.Request = g, t.Response = D, t.fetch = B, Object.defineProperty(t, "__esModule", { value: !0 }), t;
    })({});
  })(typeof self < "u" ? self : Xe);
})();
var Ft = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ERROR_CODES = e.ErrorCoded = void 0;
  class t extends Error {
    /* istanbul ignore next */
    constructor(n, o) {
      super(n), this.code = o;
    }
  }
  e.ErrorCoded = t, function(r) {
    r.COLLIDING_KEYWORDS = "colliding keywords", r.CONFLICTING_INDEXES = "conflicting indexes", r.CYCLIC_IRI_MAPPING = "cyclic IRI mapping", r.INVALID_ID_VALUE = "invalid @id value", r.INVALID_INDEX_VALUE = "invalid @index value", r.INVALID_NEST_VALUE = "invalid @nest value", r.INVALID_PREFIX_VALUE = "invalid @prefix value", r.INVALID_PROPAGATE_VALUE = "invalid @propagate value", r.INVALID_REVERSE_VALUE = "invalid @reverse value", r.INVALID_IMPORT_VALUE = "invalid @import value", r.INVALID_VERSION_VALUE = "invalid @version value", r.INVALID_BASE_IRI = "invalid base IRI", r.INVALID_CONTAINER_MAPPING = "invalid container mapping", r.INVALID_CONTEXT_ENTRY = "invalid context entry", r.INVALID_CONTEXT_NULLIFICATION = "invalid context nullification", r.INVALID_DEFAULT_LANGUAGE = "invalid default language", r.INVALID_INCLUDED_VALUE = "invalid @included value", r.INVALID_IRI_MAPPING = "invalid IRI mapping", r.INVALID_JSON_LITERAL = "invalid JSON literal", r.INVALID_KEYWORD_ALIAS = "invalid keyword alias", r.INVALID_LANGUAGE_MAP_VALUE = "invalid language map value", r.INVALID_LANGUAGE_MAPPING = "invalid language mapping", r.INVALID_LANGUAGE_TAGGED_STRING = "invalid language-tagged string", r.INVALID_LANGUAGE_TAGGED_VALUE = "invalid language-tagged value", r.INVALID_LOCAL_CONTEXT = "invalid local context", r.INVALID_REMOTE_CONTEXT = "invalid remote context", r.INVALID_REVERSE_PROPERTY = "invalid reverse property", r.INVALID_REVERSE_PROPERTY_MAP = "invalid reverse property map", r.INVALID_REVERSE_PROPERTY_VALUE = "invalid reverse property value", r.INVALID_SCOPED_CONTEXT = "invalid scoped context", r.INVALID_SCRIPT_ELEMENT = "invalid script element", r.INVALID_SET_OR_LIST_OBJECT = "invalid set or list object", r.INVALID_TERM_DEFINITION = "invalid term definition", r.INVALID_TYPE_MAPPING = "invalid type mapping", r.INVALID_TYPE_VALUE = "invalid type value", r.INVALID_TYPED_VALUE = "invalid typed value", r.INVALID_VALUE_OBJECT = "invalid value object", r.INVALID_VALUE_OBJECT_VALUE = "invalid value object value", r.INVALID_VOCAB_MAPPING = "invalid vocab mapping", r.IRI_CONFUSED_WITH_PREFIX = "IRI confused with prefix", r.KEYWORD_REDEFINITION = "keyword redefinition", r.LOADING_DOCUMENT_FAILED = "loading document failed", r.LOADING_REMOTE_CONTEXT_FAILED = "loading remote context failed", r.MULTIPLE_CONTEXT_LINK_HEADERS = "multiple context link headers", r.PROCESSING_MODE_CONFLICT = "processing mode conflict", r.PROTECTED_TERM_REDEFINITION = "protected term redefinition", r.CONTEXT_OVERFLOW = "context overflow", r.INVALID_BASE_DIRECTION = "invalid base direction", r.RECURSIVE_CONTEXT_INCLUSION = "recursive context inclusion", r.INVALID_STREAMING_KEY_ORDER = "invalid streaming key order", r.INVALID_EMBEDDED_NODE = "invalid embedded node", r.INVALID_ANNOTATION = "invalid annotation";
  }(e.ERROR_CODES || (e.ERROR_CODES = {}));
})(Ft);
var pr = {}, td = /^utf-?8|ascii|utf-?16-?le|ucs-?2|base-?64|latin-?1$/i, rd = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, nd = /\s|\uFEFF|\xA0/, id = /\r?\n[\x20\x09]+/g, od = /[;,"]/, ad = /[;,"]|\s/, ld = /^[!#$%&'*+\-\.^_`|~\da-zA-Z]+$/, qe = {
  IDLE: 1,
  URI: 2,
  ATTR: 4
};
function yo(e) {
  return e.replace(rd, "");
}
function Dr(e) {
  return nd.test(e);
}
function sd(e, t) {
  for (; Dr(e[t]); )
    t++;
  return t;
}
function po(e) {
  return ad.test(e) || !ld.test(e);
}
function dd(e, t) {
  return Object.keys(e).length === Object.keys(t).length && Object.keys(e).every(
    (r) => r in t && e[r] === t[r]
  );
}
class oe {
  /**
   * Link
   * @constructor
   * @param {String} [value]
   * @returns {Link}
   */
  constructor(t) {
    this.refs = [], t && this.parse(t);
  }
  /**
   * Get refs with given relation type
   * @param {String} value
   * @returns {Array<Object>}
   */
  rel(t) {
    for (var r = [], n = t.toLowerCase(), o = 0; o < this.refs.length; o++)
      this.refs[o].rel.toLowerCase() === n && r.push(this.refs[o]);
    return r;
  }
  /**
   * Get refs where given attribute has a given value
   * @param {String} attr
   * @param {String} value
   * @returns {Array<Object>}
   */
  get(t, r) {
    t = t.toLowerCase();
    for (var n = [], o = 0; o < this.refs.length; o++)
      this.refs[o][t] === r && n.push(this.refs[o]);
    return n;
  }
  /** Sets a reference. */
  set(t) {
    return this.refs.push(t), this;
  }
  /**
   * Sets a reference if a reference with similar properties isn’t already set.
   */
  setUnique(t) {
    return this.refs.some((r) => dd(r, t)) || this.refs.push(t), this;
  }
  has(t, r) {
    t = t.toLowerCase();
    for (var n = 0; n < this.refs.length; n++)
      if (this.refs[n][t] === r)
        return !0;
    return !1;
  }
  parse(t, a) {
    a = a || 0, t = a ? t.slice(a) : t, t = yo(t).replace(id, "");
    for (var n = qe.IDLE, o = t.length, a = 0, i = null; a < o; )
      if (n === qe.IDLE) {
        if (Dr(t[a])) {
          a++;
          continue;
        } else if (t[a] === "<") {
          i != null && (i.rel != null ? this.refs.push(...oe.expandRelations(i)) : this.refs.push(i));
          var s = t.indexOf(">", a);
          if (s === -1)
            throw new Error("Expected end of URI delimiter at offset " + a);
          i = { uri: t.slice(a + 1, s) }, a = s, n = qe.URI;
        } else
          throw new Error('Unexpected character "' + t[a] + '" at offset ' + a);
        a++;
      } else if (n === qe.URI)
        if (Dr(t[a])) {
          a++;
          continue;
        } else if (t[a] === ";")
          n = qe.ATTR, a++;
        else if (t[a] === ",")
          n = qe.IDLE, a++;
        else
          throw new Error('Unexpected character "' + t[a] + '" at offset ' + a);
      else if (n === qe.ATTR) {
        if (t[a] === ";" || Dr(t[a])) {
          a++;
          continue;
        }
        var s = t.indexOf("=", a);
        s === -1 && (s = t.indexOf(";", a)), s === -1 && (s = t.length);
        var f = yo(t.slice(a, s)).toLowerCase(), u = "";
        if (a = s + 1, a = sd(t, a), t[a] === '"')
          for (a++; a < o; ) {
            if (t[a] === '"') {
              a++;
              break;
            }
            t[a] === "\\" && a++, u += t[a], a++;
          }
        else {
          for (var s = a + 1; !od.test(t[s]) && s < o; )
            s++;
          u = t.slice(a, s), a = s;
        }
        switch (i[f] && oe.isSingleOccurenceAttr(f) || (f[f.length - 1] === "*" ? i[f] = oe.parseExtendedValue(u) : (u = f === "type" ? u.toLowerCase() : u, i[f] != null ? Array.isArray(i[f]) ? i[f].push(u) : i[f] = [i[f], u] : i[f] = u)), t[a]) {
          case ",":
            n = qe.IDLE;
            break;
          case ";":
            n = qe.ATTR;
            break;
        }
        a++;
      } else
        throw new Error('Unknown parser state "' + n + '"');
    return i != null && (i.rel != null ? this.refs.push(...oe.expandRelations(i)) : this.refs.push(i)), i = null, this;
  }
  toString() {
    for (var t = [], r = "", n = null, o = 0; o < this.refs.length; o++)
      n = this.refs[o], r = Object.keys(this.refs[o]).reduce(function(a, i) {
        return i === "uri" ? a : a + "; " + oe.formatAttribute(i, n[i]);
      }, "<" + n.uri + ">"), t.push(r);
    return t.join(", ");
  }
}
oe.isCompatibleEncoding = function(e) {
  return td.test(e);
};
oe.parse = function(e, t) {
  return new oe().parse(e, t);
};
oe.isSingleOccurenceAttr = function(e) {
  return e === "rel" || e === "type" || e === "media" || e === "title" || e === "title*";
};
oe.isTokenAttr = function(e) {
  return e === "rel" || e === "type" || e === "anchor";
};
oe.escapeQuotes = function(e) {
  return e.replace(/"/g, '\\"');
};
oe.expandRelations = function(e) {
  var t = e.rel.split(" ");
  return t.map(function(r) {
    var n = Object.assign({}, e);
    return n.rel = r, n;
  });
};
oe.parseExtendedValue = function(e) {
  var t = /([^']+)?(?:'([^']*)')?(.+)/.exec(e);
  return {
    language: t[2].toLowerCase(),
    encoding: oe.isCompatibleEncoding(t[1]) ? null : t[1].toLowerCase(),
    value: oe.isCompatibleEncoding(t[1]) ? decodeURIComponent(t[3]) : t[3]
  };
};
oe.formatExtendedAttribute = function(e, t) {
  var r = (t.encoding || "utf-8").toUpperCase(), n = t.language || "en", o = "";
  return ye.Buffer.isBuffer(t.value) && oe.isCompatibleEncoding(r) ? o = t.value.toString(r) : ye.Buffer.isBuffer(t.value) ? o = t.value.toString("hex").replace(/[0-9a-f]{2}/gi, "%$1") : o = encodeURIComponent(t.value), e + "=" + r + "'" + n + "'" + o;
};
oe.formatAttribute = function(e, t) {
  return Array.isArray(t) ? t.map((r) => oe.formatAttribute(e, r)).join("; ") : e[e.length - 1] === "*" || typeof t != "string" ? oe.formatExtendedAttribute(e, t) : (oe.isTokenAttr(e) ? t = po(t) ? '"' + oe.escapeQuotes(t) + '"' : oe.escapeQuotes(t) : po(t) && (t = encodeURIComponent(t), t = t.replace(/%20/g, " ").replace(/%2C/g, ",").replace(/%3B/g, ";"), t = '"' + t + '"'), e + "=" + t);
};
var al = oe;
Object.defineProperty(pr, "__esModule", { value: !0 });
pr.FetchDocumentLoader = void 0;
const _o = Ft, fd = al, ud = Bi;
class cd {
  constructor(t) {
    this.fetcher = t;
  }
  async load(t) {
    const r = await (this.fetcher || fetch)(t, { headers: new Headers({ accept: "application/ld+json" }) });
    if (r.ok && r.headers) {
      let n = r.headers.get("Content-Type");
      if (n) {
        const o = n.indexOf(";");
        o > 0 && (n = n.substr(0, o));
      }
      if (n === "application/ld+json")
        return await r.json();
      if (r.headers.has("Link")) {
        let o;
        if (r.headers.forEach((a, i) => {
          if (i === "link") {
            const s = (0, fd.parse)(a);
            for (const f of s.get("type", "application/ld+json"))
              if (f.rel === "alternate") {
                if (o)
                  throw new Error("Multiple JSON-LD alternate links were found on " + t);
                o = (0, ud.resolve)(f.uri, t);
              }
          }
        }), o)
          return this.load(o);
      }
      throw new _o.ErrorCoded(`Unsupported JSON-LD media type ${n}`, _o.ERROR_CODES.LOADING_DOCUMENT_FAILED);
    } else
      throw new Error(r.statusText || `Status code: ${r.status}`);
  }
}
pr.FetchDocumentLoader = cd;
var Hi = {}, Ut = {};
Object.defineProperty(Ut, "__esModule", { value: !0 });
Ut.Util = void 0;
let Oe = class Ye {
  /**
   * Check if the given term is a valid compact IRI.
   * Otherwise, it may be an IRI.
   * @param {string} term A term.
   * @return {boolean} If it is a compact IRI.
   */
  static isCompactIri(t) {
    return t.indexOf(":") > 0 && !(t && t[0] === "#");
  }
  /**
   * Get the prefix from the given term.
   * @see https://json-ld.org/spec/latest/json-ld/#compact-iris
   * @param {string} term A term that is an URL or a prefixed URL.
   * @param {IJsonLdContextNormalizedRaw} context A context.
   * @return {string} The prefix or null.
   */
  static getPrefix(t, r) {
    if (t && t[0] === "#")
      return null;
    const n = t.indexOf(":");
    if (n >= 0) {
      if (t.length > n + 1 && t.charAt(n + 1) === "/" && t.charAt(n + 2) === "/")
        return null;
      const o = t.substr(0, n);
      if (o === "_")
        return null;
      if (r[o])
        return o;
    }
    return null;
  }
  /**
   * From a given context entry value, get the string value, or the @id field.
   * @param contextValue A value for a term in a context.
   * @return {string} The id value, or null.
   */
  static getContextValueId(t) {
    if (t === null || typeof t == "string")
      return t;
    const r = t["@id"];
    return r || null;
  }
  /**
   * Check if the given simple term definition (string-based value of a context term)
   * should be considered a prefix.
   * @param value A simple term definition value.
   * @param options Options that define the way how expansion must be done.
   */
  static isSimpleTermDefinitionPrefix(t, r) {
    return !Ye.isPotentialKeyword(t) && (r.allowPrefixNonGenDelims || typeof t == "string" && (t[0] === "_" || Ye.isPrefixIriEndingWithGenDelim(t)));
  }
  /**
   * Check if the given keyword is of the keyword format "@"1*ALPHA.
   * @param {string} keyword A potential keyword.
   * @return {boolean} If the given keyword is of the keyword format.
   */
  static isPotentialKeyword(t) {
    return typeof t == "string" && Ye.KEYWORD_REGEX.test(t);
  }
  /**
   * Check if the given prefix ends with a gen-delim character.
   * @param {string} prefixIri A prefix IRI.
   * @return {boolean} If the given prefix IRI is valid.
   */
  static isPrefixIriEndingWithGenDelim(t) {
    return Ye.ENDS_WITH_GEN_DELIM.test(t);
  }
  /**
   * Check if the given context value can be a prefix value.
   * @param value A context value.
   * @return {boolean} If it can be a prefix value.
   */
  static isPrefixValue(t) {
    return t && (typeof t == "string" || t && typeof t == "object");
  }
  /**
   * Check if the given IRI is valid.
   * @param {string} iri A potential IRI.
   * @return {boolean} If the given IRI is valid.
   */
  static isValidIri(t) {
    return !!(t && Ye.IRI_REGEX.test(t));
  }
  /**
   * Check if the given IRI is valid, this includes the possibility of being a relative IRI.
   * @param {string} iri A potential IRI.
   * @return {boolean} If the given IRI is valid.
   */
  static isValidIriWeak(t) {
    return !!t && t[0] !== ":" && Ye.IRI_REGEX_WEAK.test(t);
  }
  /**
   * Check if the given keyword is a defined according to the JSON-LD specification.
   * @param {string} keyword A potential keyword.
   * @return {boolean} If the given keyword is valid.
   */
  static isValidKeyword(t) {
    return Ye.VALID_KEYWORDS[t];
  }
  /**
   * Check if the given term is protected in the context.
   * @param {IJsonLdContextNormalizedRaw} context A context.
   * @param {string} key A context term.
   * @return {boolean} If the given term has an @protected flag.
   */
  static isTermProtected(t, r) {
    const n = t[r];
    return typeof n != "string" && n && n["@protected"];
  }
  /**
   * Check if the given context has at least one protected term.
   * @param context A context.
   * @return If the context has a protected term.
   */
  static hasProtectedTerms(t) {
    for (const r of Object.keys(t))
      if (Ye.isTermProtected(t, r))
        return !0;
    return !1;
  }
  /**
   * Check if the given key is an internal reserved keyword.
   * @param key A context key.
   */
  static isReservedInternalKeyword(t) {
    return t.startsWith("@__");
  }
  /**
   * Check if two objects are deepEqual to on another.
   * @param object1 The first object to test.
   * @param object2 The second object to test.
   */
  static deepEqual(t, r) {
    const n = Object.keys(t), o = Object.keys(r);
    return n.length !== o.length ? !1 : n.every((a) => {
      const i = t[a], s = r[a];
      return i === s || i !== null && s !== null && typeof i == "object" && typeof s == "object" && this.deepEqual(i, s);
    });
  }
};
Oe.IRI_REGEX = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^ "<>{}|\\\[\]`#]*(#[^#]*)?$/;
Oe.IRI_REGEX_WEAK = /(?::[^:])|\//;
Oe.KEYWORD_REGEX = /^@[a-z]+$/i;
Oe.ENDS_WITH_GEN_DELIM = /[:/?#\[\]@]$/;
Oe.REGEX_LANGUAGE_TAG = /^[a-zA-Z]+(-[a-zA-Z0-9]+)*$/;
Oe.REGEX_DIRECTION_TAG = /^(ltr)|(rtl)$/;
Oe.VALID_KEYWORDS = {
  "@annotation": !0,
  "@base": !0,
  "@container": !0,
  "@context": !0,
  "@direction": !0,
  "@graph": !0,
  "@id": !0,
  "@import": !0,
  "@included": !0,
  "@index": !0,
  "@json": !0,
  "@language": !0,
  "@list": !0,
  "@nest": !0,
  "@none": !0,
  "@prefix": !0,
  "@propagate": !0,
  "@protected": !0,
  "@reverse": !0,
  "@set": !0,
  "@type": !0,
  "@value": !0,
  "@version": !0,
  "@vocab": !0
};
Oe.EXPAND_KEYS_BLACKLIST = [
  "@base",
  "@vocab",
  "@language",
  "@version",
  "@direction"
];
Oe.ALIAS_DOMAIN_BLACKLIST = [
  "@container",
  "@graph",
  "@id",
  "@index",
  "@list",
  "@nest",
  "@none",
  "@prefix",
  "@reverse",
  "@set",
  "@type",
  "@value",
  "@version"
];
Oe.ALIAS_RANGE_BLACKLIST = [
  "@context",
  "@preserve"
];
Oe.CONTAINERS = [
  "@list",
  "@set",
  "@index",
  "@language",
  "@graph",
  "@id",
  "@type"
];
Oe.CONTAINERS_1_0 = [
  "@list",
  "@set",
  "@index"
];
Ut.Util = Oe;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.defaultExpandOptions = e.JsonLdContextNormalized = void 0;
  const t = Bi, r = Ft, n = Ut;
  class o {
    constructor(i) {
      this.contextRaw = i;
    }
    /**
     * @return The raw inner context.
     */
    getContextRaw() {
      return this.contextRaw;
    }
    /**
     * Expand the term or prefix of the given term if it has one,
     * otherwise return the term as-is.
     *
     * This will try to expand the IRI as much as possible.
     *
     * Iff in vocab-mode, then other references to other terms in the context can be used,
     * such as to `myTerm`:
     * ```
     * {
     *   "myTerm": "http://example.org/myLongTerm"
     * }
     * ```
     *
     * @param {string} term A term that is an URL or a prefixed URL.
     * @param {boolean} expandVocab If the term is a predicate or type and should be expanded based on @vocab,
     *                              otherwise it is considered a regular term that is expanded based on @base.
     * @param {IExpandOptions} options Options that define the way how expansion must be done.
     * @return {string} The expanded term, the term as-is, or null if it was explicitly disabled in the context.
     * @throws If the term is aliased to an invalid value (not a string, IRI or keyword).
     */
    expandTerm(i, s, f = e.defaultExpandOptions) {
      const u = this.contextRaw[i];
      if (u === null || u && u["@id"] === null)
        return null;
      let h = !0;
      if (u && s) {
        const R = n.Util.getContextValueId(u);
        if (R && R !== i)
          if (typeof R != "string" || !n.Util.isValidIri(R) && !n.Util.isValidKeyword(R))
            n.Util.isPotentialKeyword(R) || (h = !1);
          else
            return R;
      }
      const w = n.Util.getPrefix(i, this.contextRaw), b = this.contextRaw["@vocab"], c = (!!b || b === "") && b.indexOf(":") < 0, S = this.contextRaw["@base"], _ = n.Util.isPotentialKeyword(i);
      if (w) {
        const R = this.contextRaw[w], C = n.Util.getContextValueId(R);
        if (C) {
          if (typeof R == "string" || !f.allowPrefixForcing) {
            if (!n.Util.isSimpleTermDefinitionPrefix(C, f))
              return i;
          } else if (C[0] !== "_" && !_ && !R["@prefix"] && !(i in this.contextRaw))
            return i;
          return C + i.substr(w.length + 1);
        }
      } else if (s && (b || b === "" || f.allowVocabRelativeToBase && S && c) && !_ && !n.Util.isCompactIri(i))
        if (c) {
          if (f.allowVocabRelativeToBase)
            return (b || S ? (0, t.resolve)(b, S) : "") + i;
          throw new r.ErrorCoded(`Relative vocab expansion for term '${i}' with vocab '${b}' is not allowed.`, r.ERROR_CODES.INVALID_VOCAB_MAPPING);
        } else
          return b + i;
      else if (!s && S && !_ && !n.Util.isCompactIri(i))
        return (0, t.resolve)(i, S);
      if (h)
        return i;
      throw new r.ErrorCoded(`Invalid IRI mapping found for context entry '${i}': '${JSON.stringify(u)}'`, r.ERROR_CODES.INVALID_IRI_MAPPING);
    }
    /**
     * Compact the given term using @base, @vocab, an aliased term, or a prefixed term.
     *
     * This will try to compact the IRI as much as possible.
     *
     * @param {string} iri An IRI to compact.
     * @param {boolean} vocab If the term is a predicate or type and should be compacted based on @vocab,
     *                        otherwise it is considered a regular term that is compacted based on @base.
     * @return {string} The compacted term or the IRI as-is.
     */
    compactIri(i, s) {
      if (s && this.contextRaw["@vocab"] && i.startsWith(this.contextRaw["@vocab"]))
        return i.substr(this.contextRaw["@vocab"].length);
      if (!s && this.contextRaw["@base"] && i.startsWith(this.contextRaw["@base"]))
        return i.substr(this.contextRaw["@base"].length);
      const f = { prefix: "", suffix: i };
      for (const u in this.contextRaw) {
        const h = this.contextRaw[u];
        if (h && !n.Util.isPotentialKeyword(u)) {
          const w = n.Util.getContextValueId(h);
          if (i.startsWith(w)) {
            const b = i.substr(w.length);
            if (b)
              b.length < f.suffix.length && (f.prefix = u, f.suffix = b);
            else if (s)
              return u;
          }
        }
      }
      return f.prefix ? f.prefix + ":" + f.suffix : i;
    }
  }
  e.JsonLdContextNormalized = o, e.defaultExpandOptions = {
    allowPrefixForcing: !0,
    allowPrefixNonGenDelims: !1,
    allowVocabRelativeToBase: !0
  };
})(Hi);
Object.defineProperty(Fr, "__esModule", { value: !0 });
Fr.ContextParser = void 0;
const wo = Bi, M = Ft, hd = pr, ke = Hi, Y = Ut;
class ze {
  constructor(t) {
    t = t || {}, this.documentLoader = t.documentLoader || new hd.FetchDocumentLoader(), this.documentCache = {}, this.validateContext = !t.skipValidation, this.expandContentTypeToBase = !!t.expandContentTypeToBase, this.remoteContextsDepthLimit = t.remoteContextsDepthLimit || 32, this.redirectSchemaOrgHttps = "redirectSchemaOrgHttps" in t ? !!t.redirectSchemaOrgHttps : !0;
  }
  /**
   * Validate the given @language value.
   * An error will be thrown if it is invalid.
   * @param value An @language value.
   * @param {boolean} strictRange If the string value should be strictly checked against a regex.
   * @param {string} errorCode The error code to emit on errors.
   * @return {boolean} If validation passed.
   *                   Can only be false if strictRange is false and the string value did not pass the regex.
   */
  static validateLanguage(t, r, n) {
    if (typeof t != "string")
      throw new M.ErrorCoded(`The value of an '@language' must be a string, got '${JSON.stringify(t)}'`, n);
    if (!Y.Util.REGEX_LANGUAGE_TAG.test(t)) {
      if (r)
        throw new M.ErrorCoded(`The value of an '@language' must be a valid language tag, got '${JSON.stringify(t)}'`, n);
      return !1;
    }
    return !0;
  }
  /**
   * Validate the given @direction value.
   * An error will be thrown if it is invalid.
   * @param value An @direction value.
   * @param {boolean} strictValues If the string value should be strictly checked against a regex.
   * @return {boolean} If validation passed.
   *                   Can only be false if strictRange is false and the string value did not pass the regex.
   */
  static validateDirection(t, r) {
    if (typeof t != "string")
      throw new M.ErrorCoded(`The value of an '@direction' must be a string, got '${JSON.stringify(t)}'`, M.ERROR_CODES.INVALID_BASE_DIRECTION);
    if (!Y.Util.REGEX_DIRECTION_TAG.test(t)) {
      if (r)
        throw new M.ErrorCoded(`The value of an '@direction' must be 'ltr' or 'rtl', got '${JSON.stringify(t)}'`, M.ERROR_CODES.INVALID_BASE_DIRECTION);
      return !1;
    }
    return !0;
  }
  /**
   * Add an @id term for all @reverse terms.
   * @param {IJsonLdContextNormalizedRaw} context A context.
   * @return {IJsonLdContextNormalizedRaw} The mutated input context.
   */
  idifyReverseTerms(t) {
    for (const r of Object.keys(t)) {
      let n = t[r];
      if (n && typeof n == "object" && n["@reverse"] && !n["@id"]) {
        if (typeof n["@reverse"] != "string" || Y.Util.isValidKeyword(n["@reverse"]))
          throw new M.ErrorCoded(`Invalid @reverse value, must be absolute IRI or blank node: '${n["@reverse"]}'`, M.ERROR_CODES.INVALID_IRI_MAPPING);
        n = t[r] = Object.assign(Object.assign({}, n), { "@id": n["@reverse"] }), n["@id"] = n["@reverse"], Y.Util.isPotentialKeyword(n["@reverse"]) ? delete n["@reverse"] : n["@reverse"] = !0;
      }
    }
    return t;
  }
  /**
   * Expand all prefixed terms in the given context.
   * @param {IJsonLdContextNormalizedRaw} context A context.
   * @param {boolean} expandContentTypeToBase If @type inside the context may be expanded
   *                                          via @base if @vocab is set to null.
   * @param {string[]} keys Optional set of keys from the context to expand. If left undefined, all
   * keys in the context will be expanded.
   */
  expandPrefixedTerms(t, r, n) {
    const o = t.getContextRaw();
    for (const a of n || Object.keys(o))
      if (Y.Util.EXPAND_KEYS_BLACKLIST.indexOf(a) < 0 && !Y.Util.isReservedInternalKeyword(a)) {
        const i = o[a];
        if (Y.Util.isPotentialKeyword(a) && Y.Util.ALIAS_DOMAIN_BLACKLIST.indexOf(a) >= 0 && (a !== "@type" || typeof o[a] == "object" && !(o[a]["@protected"] || o[a]["@container"] === "@set")))
          throw new M.ErrorCoded(`Keywords can not be aliased to something else.
Tried mapping ${a} to ${JSON.stringify(i)}`, M.ERROR_CODES.KEYWORD_REDEFINITION);
        if (Y.Util.ALIAS_RANGE_BLACKLIST.indexOf(Y.Util.getContextValueId(i)) >= 0)
          throw new M.ErrorCoded(`Aliasing to certain keywords is not allowed.
Tried mapping ${a} to ${JSON.stringify(i)}`, M.ERROR_CODES.INVALID_KEYWORD_ALIAS);
        if (i && Y.Util.isPotentialKeyword(Y.Util.getContextValueId(i)) && i["@prefix"] === !0)
          throw new M.ErrorCoded(`Tried to use keyword aliases as prefix: '${a}': '${JSON.stringify(i)}'`, M.ERROR_CODES.INVALID_TERM_DEFINITION);
        for (; Y.Util.isPrefixValue(o[a]); ) {
          const s = o[a];
          let f = !1;
          if (typeof s == "string")
            o[a] = t.expandTerm(s, !0), f = f || s !== o[a];
          else {
            const u = s["@id"], h = s["@type"], w = !("@prefix" in s) || Y.Util.isValidIri(a);
            if ("@id" in s)
              u != null && typeof u == "string" && (o[a] = Object.assign(Object.assign({}, o[a]), { "@id": t.expandTerm(u, !0) }), f = f || u !== o[a]["@id"]);
            else if (!Y.Util.isPotentialKeyword(a) && w) {
              const b = t.expandTerm(a, !0);
              b !== a && (o[a] = Object.assign(Object.assign({}, o[a]), { "@id": b }), f = !0);
            }
            if (h && typeof h == "string" && h !== "@vocab" && (!s["@container"] || !s["@container"]["@type"]) && w) {
              let b = t.expandTerm(h, !0);
              r && h === b && (b = t.expandTerm(h, !1)), b !== h && (f = !0, o[a] = Object.assign(Object.assign({}, o[a]), { "@type": b }));
            }
          }
          if (!f)
            break;
        }
      }
  }
  /**
   * Normalize the @language entries in the given context to lowercase.
   * @param {IJsonLdContextNormalizedRaw} context A context.
   * @param {IParseOptions} parseOptions The parsing options.
   */
  normalize(t, { processingMode: r, normalizeLanguageTags: n }) {
    if (n || r === 1)
      for (const o of Object.keys(t))
        if (o === "@language" && typeof t[o] == "string")
          t[o] = t[o].toLowerCase();
        else {
          const a = t[o];
          if (a && typeof a == "object" && typeof a["@language"] == "string") {
            const i = a["@language"].toLowerCase();
            i !== a["@language"] && (t[o] = Object.assign(Object.assign({}, a), { "@language": i }));
          }
        }
  }
  /**
   * Convert all @container strings and array values to hash-based values.
   * @param {IJsonLdContextNormalizedRaw} context A context.
   */
  containersToHash(t) {
    for (const r of Object.keys(t)) {
      const n = t[r];
      if (n && typeof n == "object") {
        if (typeof n["@container"] == "string")
          t[r] = Object.assign(Object.assign({}, n), { "@container": { [n["@container"]]: !0 } });
        else if (Array.isArray(n["@container"])) {
          const o = {};
          for (const a of n["@container"])
            o[a] = !0;
          t[r] = Object.assign(Object.assign({}, n), { "@container": o });
        }
      }
    }
  }
  /**
   * Normalize and apply context-level @protected terms onto each term separately.
   * @param {IJsonLdContextNormalizedRaw} context A context.
   * @param {number} processingMode The processing mode.
   */
  applyScopedProtected(t, { processingMode: r }, n) {
    if (r && r >= 1.1 && t["@protected"]) {
      for (const o of Object.keys(t))
        if (!Y.Util.isReservedInternalKeyword(o) && !Y.Util.isPotentialKeyword(o) && !Y.Util.isTermProtected(t, o)) {
          const a = t[o];
          a && typeof a == "object" ? "@protected" in t[o] || (t[o] = Object.assign(Object.assign({}, t[o]), { "@protected": !0 })) : (t[o] = {
            "@id": a,
            "@protected": !0
          }, Y.Util.isSimpleTermDefinitionPrefix(a, n) && (t[o] = Object.assign(Object.assign({}, t[o]), { "@prefix": !0 })));
        }
      delete t["@protected"];
    }
  }
  /**
   * Check if the given context inheritance does not contain any overrides of protected terms.
   * @param {IJsonLdContextNormalizedRaw} contextBefore The context that may contain some protected terms.
   * @param {IJsonLdContextNormalizedRaw} contextAfter A new context that is being applied on the first one.
   * @param {IExpandOptions} expandOptions Options that are needed for any expansions during this validation.
   * @param {string[]} keys Optional set of keys from the context to validate. If left undefined, all
   * keys defined in contextAfter will be checked.
   */
  validateKeywordRedefinitions(t, r, n, o) {
    for (const a of o ?? Object.keys(r))
      if (Y.Util.isTermProtected(t, a) && (typeof r[a] == "string" ? r[a] = { "@id": r[a], "@protected": !0 } : r[a] = Object.assign(Object.assign({}, r[a]), { "@protected": !0 }), !Y.Util.deepEqual(t[a], r[a])))
        throw new M.ErrorCoded(`Attempted to override the protected keyword ${a} from ${JSON.stringify(Y.Util.getContextValueId(t[a]))} to ${JSON.stringify(Y.Util.getContextValueId(r[a]))}`, M.ERROR_CODES.PROTECTED_TERM_REDEFINITION);
  }
  /**
   * Validate the entries of the given context.
   * @param {IJsonLdContextNormalizedRaw} context A context.
   * @param {IParseOptions} options The parse options.
   */
  validate(t, { processingMode: r }) {
    for (const n of Object.keys(t)) {
      if (Y.Util.isReservedInternalKeyword(n))
        continue;
      if (n === "")
        throw new M.ErrorCoded(`The empty term is not allowed, got: '${n}': '${JSON.stringify(t[n])}'`, M.ERROR_CODES.INVALID_TERM_DEFINITION);
      const o = t[n], a = typeof o;
      if (Y.Util.isPotentialKeyword(n)) {
        switch (n.substr(1)) {
          case "vocab":
            if (o !== null && a !== "string")
              throw new M.ErrorCoded(`Found an invalid @vocab IRI: ${o}`, M.ERROR_CODES.INVALID_VOCAB_MAPPING);
            break;
          case "base":
            if (o !== null && a !== "string")
              throw new M.ErrorCoded(`Found an invalid @base IRI: ${t[n]}`, M.ERROR_CODES.INVALID_BASE_IRI);
            break;
          case "language":
            o !== null && ze.validateLanguage(o, !0, M.ERROR_CODES.INVALID_DEFAULT_LANGUAGE);
            break;
          case "version":
            if (o !== null && a !== "number")
              throw new M.ErrorCoded(`Found an invalid @version number: ${o}`, M.ERROR_CODES.INVALID_VERSION_VALUE);
            break;
          case "direction":
            o !== null && ze.validateDirection(o, !0);
            break;
          case "propagate":
            if (r === 1)
              throw new M.ErrorCoded(`Found an illegal @propagate keyword: ${o}`, M.ERROR_CODES.INVALID_CONTEXT_ENTRY);
            if (o !== null && a !== "boolean")
              throw new M.ErrorCoded(`Found an invalid @propagate value: ${o}`, M.ERROR_CODES.INVALID_PROPAGATE_VALUE);
            break;
        }
        if (Y.Util.isValidKeyword(n) && Y.Util.isValidKeyword(Y.Util.getContextValueId(o)))
          throw new M.ErrorCoded(`Illegal keyword alias in term value, found: '${n}': '${Y.Util.getContextValueId(o)}'`, M.ERROR_CODES.KEYWORD_REDEFINITION);
        continue;
      }
      if (o !== null)
        switch (a) {
          case "string":
            if (Y.Util.getPrefix(o, t) === n)
              throw new M.ErrorCoded(`Detected cyclical IRI mapping in context entry: '${n}': '${JSON.stringify(o)}'`, M.ERROR_CODES.CYCLIC_IRI_MAPPING);
            if (Y.Util.isValidIriWeak(n)) {
              if (o === "@type")
                throw new M.ErrorCoded(`IRIs can not be mapped to @type, found: '${n}': '${o}'`, M.ERROR_CODES.INVALID_IRI_MAPPING);
              if (Y.Util.isValidIri(o) && o !== new ke.JsonLdContextNormalized(t).expandTerm(n))
                throw new M.ErrorCoded(`IRIs can not be mapped to other IRIs, found: '${n}': '${o}'`, M.ERROR_CODES.INVALID_IRI_MAPPING);
            }
            break;
          case "object":
            if (!Y.Util.isCompactIri(n) && !("@id" in o) && (o["@type"] === "@id" ? !t["@base"] : !t["@vocab"]))
              throw new M.ErrorCoded(`Missing @id in context entry: '${n}': '${JSON.stringify(o)}'`, M.ERROR_CODES.INVALID_IRI_MAPPING);
            for (const i of Object.keys(o)) {
              const s = o[i];
              if (s)
                switch (i) {
                  case "@id":
                    if (Y.Util.isValidKeyword(s) && s !== "@type" && s !== "@id" && s !== "@graph" && s !== "@nest")
                      throw new M.ErrorCoded(`Illegal keyword alias in term value, found: '${n}': '${JSON.stringify(o)}'`, M.ERROR_CODES.INVALID_IRI_MAPPING);
                    if (Y.Util.isValidIriWeak(n)) {
                      if (s === "@type")
                        throw new M.ErrorCoded(`IRIs can not be mapped to @type, found: '${n}': '${JSON.stringify(o)}'`, M.ERROR_CODES.INVALID_IRI_MAPPING);
                      if (Y.Util.isValidIri(s) && s !== new ke.JsonLdContextNormalized(t).expandTerm(n))
                        throw new M.ErrorCoded(`IRIs can not be mapped to other IRIs, found: '${n}': '${JSON.stringify(o)}'`, M.ERROR_CODES.INVALID_IRI_MAPPING);
                    }
                    if (typeof s != "string")
                      throw new M.ErrorCoded(`Detected non-string @id in context entry: '${n}': '${JSON.stringify(o)}'`, M.ERROR_CODES.INVALID_IRI_MAPPING);
                    if (Y.Util.getPrefix(s, t) === n)
                      throw new M.ErrorCoded(`Detected cyclical IRI mapping in context entry: '${n}': '${JSON.stringify(o)}'`, M.ERROR_CODES.CYCLIC_IRI_MAPPING);
                    break;
                  case "@type":
                    if (o["@container"] === "@type" && s !== "@id" && s !== "@vocab")
                      throw new M.ErrorCoded(`@container: @type only allows @type: @id or @vocab, but got: '${n}': '${s}'`, M.ERROR_CODES.INVALID_TYPE_MAPPING);
                    if (typeof s != "string")
                      throw new M.ErrorCoded(`The value of an '@type' must be a string, got '${JSON.stringify(a)}'`, M.ERROR_CODES.INVALID_TYPE_MAPPING);
                    if (s !== "@id" && s !== "@vocab" && (r === 1 || s !== "@json") && (r === 1 || s !== "@none") && (s[0] === "_" || !Y.Util.isValidIri(s)))
                      throw new M.ErrorCoded(`A context @type must be an absolute IRI, found: '${n}': '${s}'`, M.ERROR_CODES.INVALID_TYPE_MAPPING);
                    break;
                  case "@reverse":
                    if (typeof s == "string" && o["@id"] && o["@id"] !== s)
                      throw new M.ErrorCoded(`Found non-matching @id and @reverse term values in '${n}':'${s}' and '${o["@id"]}'`, M.ERROR_CODES.INVALID_REVERSE_PROPERTY);
                    if ("@nest" in o)
                      throw new M.ErrorCoded(`@nest is not allowed in the reverse property '${n}'`, M.ERROR_CODES.INVALID_REVERSE_PROPERTY);
                    break;
                  case "@container":
                    if (r === 1 && (Object.keys(s).length > 1 || Y.Util.CONTAINERS_1_0.indexOf(Object.keys(s)[0]) < 0))
                      throw new M.ErrorCoded(`Invalid term @container for '${n}' ('${Object.keys(s)}') in 1.0, must be only one of ${Y.Util.CONTAINERS_1_0.join(", ")}`, M.ERROR_CODES.INVALID_CONTAINER_MAPPING);
                    for (const f of Object.keys(s)) {
                      if (f === "@list" && o["@reverse"])
                        throw new M.ErrorCoded(`Term value can not be @container: @list and @reverse at the same time on '${n}'`, M.ERROR_CODES.INVALID_REVERSE_PROPERTY);
                      if (Y.Util.CONTAINERS.indexOf(f) < 0)
                        throw new M.ErrorCoded(`Invalid term @container for '${n}' ('${f}'), must be one of ${Y.Util.CONTAINERS.join(", ")}`, M.ERROR_CODES.INVALID_CONTAINER_MAPPING);
                    }
                    break;
                  case "@language":
                    ze.validateLanguage(s, !0, M.ERROR_CODES.INVALID_LANGUAGE_MAPPING);
                    break;
                  case "@direction":
                    ze.validateDirection(s, !0);
                    break;
                  case "@prefix":
                    if (s !== null && typeof s != "boolean")
                      throw new M.ErrorCoded(`Found an invalid term @prefix boolean in: '${n}': '${JSON.stringify(o)}'`, M.ERROR_CODES.INVALID_PREFIX_VALUE);
                    if (!("@id" in o) && !Y.Util.isValidIri(n))
                      throw new M.ErrorCoded(`Invalid @prefix definition for '${n}' ('${JSON.stringify(o)}'`, M.ERROR_CODES.INVALID_TERM_DEFINITION);
                    break;
                  case "@index":
                    if (r === 1 || !o["@container"] || !o["@container"]["@index"])
                      throw new M.ErrorCoded(`Attempt to add illegal key to value object: '${n}': '${JSON.stringify(o)}'`, M.ERROR_CODES.INVALID_TERM_DEFINITION);
                    break;
                  case "@nest":
                    if (Y.Util.isPotentialKeyword(s) && s !== "@nest")
                      throw new M.ErrorCoded(`Found an invalid term @nest value in: '${n}': '${JSON.stringify(o)}'`, M.ERROR_CODES.INVALID_NEST_VALUE);
                }
            }
            break;
          default:
            throw new M.ErrorCoded(`Found an invalid term value: '${n}': '${o}'`, M.ERROR_CODES.INVALID_TERM_DEFINITION);
        }
    }
  }
  /**
   * Apply the @base context entry to the given context under certain circumstances.
   * @param context A context.
   * @param options Parsing options.
   * @param inheritFromParent If the @base value from the parent context can be inherited.
   * @return The given context.
   */
  applyBaseEntry(t, r, n) {
    return typeof t == "string" || (n && !("@base" in t) && r.parentContext && typeof r.parentContext == "object" && "@base" in r.parentContext && (t["@base"] = r.parentContext["@base"], r.parentContext["@__baseDocument"] && (t["@__baseDocument"] = !0)), r.baseIRI && !r.external && ("@base" in t ? t["@base"] !== null && typeof t["@base"] == "string" && !Y.Util.isValidIri(t["@base"]) && (t["@base"] = (0, wo.resolve)(t["@base"], r.parentContext && r.parentContext["@base"] || r.baseIRI)) : (t["@base"] = r.baseIRI, t["@__baseDocument"] = !0))), t;
  }
  /**
   * Resolve relative context IRIs, or return full IRIs as-is.
   * @param {string} contextIri A context IRI.
   * @param {string} baseIRI A base IRI.
   * @return {string} The normalized context IRI.
   */
  normalizeContextIri(t, r) {
    if (!Y.Util.isValidIri(t))
      try {
        t = (0, wo.resolve)(t, r);
      } catch {
        throw new Error(`Invalid context IRI: ${t}`);
      }
    return this.redirectSchemaOrgHttps && t.startsWith("http://schema.org") && (t = "https://schema.org/"), t;
  }
  /**
   * Parse scoped contexts in the given context.
   * @param {IJsonLdContextNormalizedRaw} context A context.
   * @param {IParseOptions} options Parsing options.
   * @return {IJsonLdContextNormalizedRaw} The mutated input context.
   * @param {string[]} keys Optional set of keys from the context to parseInnerContexts of. If left undefined, all
   * keys in the context will be iterated over.
   */
  async parseInnerContexts(t, r, n) {
    for (const o of n ?? Object.keys(t)) {
      const a = t[o];
      if (a && typeof a == "object" && "@context" in a && a["@context"] !== null && !r.ignoreScopedContexts) {
        if (this.validateContext)
          try {
            const i = Object.assign(Object.assign({}, t), { [o]: Object.assign({}, t[o]) });
            delete i[o]["@context"], await this.parse(a["@context"], Object.assign(Object.assign({}, r), { external: !1, parentContext: i, ignoreProtection: !0, ignoreRemoteScopedContexts: !0, ignoreScopedContexts: !0 }));
          } catch (i) {
            throw new M.ErrorCoded(i.message, M.ERROR_CODES.INVALID_SCOPED_CONTEXT);
          }
        t[o] = Object.assign(Object.assign({}, a), { "@context": (await this.parse(a["@context"], Object.assign(Object.assign({}, r), { external: !1, minimalProcessing: !0, ignoreRemoteScopedContexts: !0, parentContext: t }))).getContextRaw() });
      }
    }
    return t;
  }
  async parse(t, r = {}, n = {}) {
    const { baseIRI: o, parentContext: a, external: i, processingMode: s = ze.DEFAULT_PROCESSING_MODE, normalizeLanguageTags: f, ignoreProtection: u, minimalProcessing: h } = r, w = r.remoteContexts || {};
    if (Object.keys(w).length >= this.remoteContextsDepthLimit)
      throw new M.ErrorCoded("Detected an overflow in remote context inclusions: " + Object.keys(w), M.ERROR_CODES.CONTEXT_OVERFLOW);
    if (t == null) {
      if (!u && a && Y.Util.hasProtectedTerms(a))
        throw new M.ErrorCoded("Illegal context nullification when terms are protected", M.ERROR_CODES.INVALID_CONTEXT_NULLIFICATION);
      return new ke.JsonLdContextNormalized(this.applyBaseEntry({}, r, !1));
    } else if (typeof t == "string") {
      const b = this.normalizeContextIri(t, o), c = this.getOverriddenLoad(b, r);
      if (c)
        return new ke.JsonLdContextNormalized(c);
      const S = await this.parse(await this.load(b), Object.assign(Object.assign({}, r), { baseIRI: b, external: !0, remoteContexts: Object.assign(Object.assign({}, w), { [b]: !0 }) }));
      return this.applyBaseEntry(S.getContextRaw(), r, !0), S;
    } else if (Array.isArray(t)) {
      const b = [], c = await Promise.all(t.map((_, R) => {
        if (typeof _ == "string") {
          const C = this.normalizeContextIri(_, o);
          b[R] = C;
          const L = this.getOverriddenLoad(C, r);
          return L || this.load(C);
        } else
          return _;
      }));
      if (h)
        return new ke.JsonLdContextNormalized(c);
      const S = await c.reduce((_, R, C) => _.then((L) => this.parse(
        R,
        Object.assign(Object.assign({}, r), { baseIRI: b[C] || r.baseIRI, external: !!b[C] || r.external, parentContext: L.getContextRaw(), remoteContexts: b[C] ? Object.assign(Object.assign({}, w), { [b[C]]: !0 }) : w }),
        // @ts-expect-error: This third argument causes a type error because we have hidden it from consumers
        {
          skipValidation: C < c.length - 1
        }
      )), Promise.resolve(new ke.JsonLdContextNormalized(a || {})));
      return this.applyBaseEntry(S.getContextRaw(), r, !0), S;
    } else if (typeof t == "object") {
      if ("@context" in t)
        return await this.parse(t["@context"], r);
      if (t = Object.assign({}, t), i && delete t["@base"], this.applyBaseEntry(t, r, !0), this.containersToHash(t), h)
        return new ke.JsonLdContextNormalized(t);
      let b = {};
      if ("@import" in t)
        if (s >= 1.1) {
          if (typeof t["@import"] != "string")
            throw new M.ErrorCoded("An @import value must be a string, but got " + typeof t["@import"], M.ERROR_CODES.INVALID_IMPORT_VALUE);
          b = await this.loadImportContext(this.normalizeContextIri(t["@import"], o)), delete t["@import"];
        } else
          throw new M.ErrorCoded("Context importing is not supported in JSON-LD 1.0", M.ERROR_CODES.INVALID_CONTEXT_ENTRY);
      this.applyScopedProtected(b, { processingMode: s }, ke.defaultExpandOptions);
      const c = Object.assign(b, t);
      this.idifyReverseTerms(c), this.normalize(c, { processingMode: s, normalizeLanguageTags: f }), this.applyScopedProtected(c, { processingMode: s }, ke.defaultExpandOptions);
      const S = Object.keys(c), _ = [];
      if (typeof a == "object")
        for (const C in a)
          C in c ? _.push(C) : c[C] = a[C];
      await this.parseInnerContexts(c, r, S);
      const R = new ke.JsonLdContextNormalized(c);
      return (c && c["@version"] || ze.DEFAULT_PROCESSING_MODE) >= 1.1 && (t["@vocab"] && typeof t["@vocab"] == "string" || t["@vocab"] === "") && (a && "@vocab" in a && t["@vocab"].indexOf(":") < 0 ? c["@vocab"] = a["@vocab"] + t["@vocab"] : (Y.Util.isCompactIri(t["@vocab"]) || t["@vocab"] in c) && (c["@vocab"] = R.expandTerm(t["@vocab"], !0))), this.expandPrefixedTerms(R, this.expandContentTypeToBase, S), !u && a && s >= 1.1 && this.validateKeywordRedefinitions(a, c, ke.defaultExpandOptions, _), this.validateContext && !n.skipValidation && this.validate(c, { processingMode: s }), R;
    } else
      throw new M.ErrorCoded(`Tried parsing a context that is not a string, array or object, but got ${t}`, M.ERROR_CODES.INVALID_LOCAL_CONTEXT);
  }
  /**
   * Fetch the given URL as a raw JSON-LD context.
   * @param url An URL.
   * @return A promise resolving to a raw JSON-LD context.
   */
  async load(t) {
    const r = this.documentCache[t];
    if (r)
      return r;
    let n;
    try {
      n = await this.documentLoader.load(t);
    } catch (o) {
      throw new M.ErrorCoded(`Failed to load remote context ${t}: ${o.message}`, M.ERROR_CODES.LOADING_REMOTE_CONTEXT_FAILED);
    }
    if (!("@context" in n))
      throw new M.ErrorCoded(`Missing @context in remote context at ${t}`, M.ERROR_CODES.INVALID_REMOTE_CONTEXT);
    return this.documentCache[t] = n["@context"];
  }
  /**
   * Override the given context that may be loaded.
   *
   * This will check whether or not the url is recursively being loaded.
   * @param url An URL.
   * @param options Parsing options.
   * @return An overridden context, or null.
   *         Optionally an error can be thrown if a cyclic context is detected.
   */
  getOverriddenLoad(t, r) {
    if (t in (r.remoteContexts || {})) {
      if (r.ignoreRemoteScopedContexts)
        return t;
      throw new M.ErrorCoded("Detected a cyclic context inclusion of " + t, M.ERROR_CODES.RECURSIVE_CONTEXT_INCLUSION);
    }
    return null;
  }
  /**
   * Load an @import'ed context.
   * @param importContextIri The full URI of an @import value.
   */
  async loadImportContext(t) {
    let r = await this.load(t);
    if (typeof r != "object" || Array.isArray(r))
      throw new M.ErrorCoded("An imported context must be a single object: " + t, M.ERROR_CODES.INVALID_REMOTE_CONTEXT);
    if ("@import" in r)
      throw new M.ErrorCoded("An imported context can not import another context: " + t, M.ERROR_CODES.INVALID_CONTEXT_ENTRY);
    return r = Object.assign({}, r), this.containersToHash(r), r;
  }
}
ze.DEFAULT_PROCESSING_MODE = 1.1;
Fr.ContextParser = ze;
var ll = {};
Object.defineProperty(ll, "__esModule", { value: !0 });
var sl = {};
Object.defineProperty(sl, "__esModule", { value: !0 });
(function(e) {
  var t = Xe && Xe.__createBinding || (Object.create ? function(n, o, a, i) {
    i === void 0 && (i = a);
    var s = Object.getOwnPropertyDescriptor(o, a);
    (!s || ("get" in s ? !o.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
      return o[a];
    } }), Object.defineProperty(n, i, s);
  } : function(n, o, a, i) {
    i === void 0 && (i = a), n[i] = o[a];
  }), r = Xe && Xe.__exportStar || function(n, o) {
    for (var a in n)
      a !== "default" && !Object.prototype.hasOwnProperty.call(o, a) && t(o, n, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(Fr, e), r(Ft, e), r(pr, e), r(ll, e), r(sl, e), r(Hi, e), r(Ut, e);
})(Ee);
var dl = { exports: {} }, jn = { exports: {} }, ae = {
  ArrayIsArray(e) {
    return Array.isArray(e);
  },
  ArrayPrototypeIncludes(e, t) {
    return e.includes(t);
  },
  ArrayPrototypeIndexOf(e, t) {
    return e.indexOf(t);
  },
  ArrayPrototypeJoin(e, t) {
    return e.join(t);
  },
  ArrayPrototypeMap(e, t) {
    return e.map(t);
  },
  ArrayPrototypePop(e, t) {
    return e.pop(t);
  },
  ArrayPrototypePush(e, t) {
    return e.push(t);
  },
  ArrayPrototypeSlice(e, t, r) {
    return e.slice(t, r);
  },
  Error,
  FunctionPrototypeCall(e, t, ...r) {
    return e.call(t, ...r);
  },
  FunctionPrototypeSymbolHasInstance(e, t) {
    return Function.prototype[Symbol.hasInstance].call(e, t);
  },
  MathFloor: Math.floor,
  Number,
  NumberIsInteger: Number.isInteger,
  NumberIsNaN: Number.isNaN,
  NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
  NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
  NumberParseInt: Number.parseInt,
  ObjectDefineProperties(e, t) {
    return Object.defineProperties(e, t);
  },
  ObjectDefineProperty(e, t, r) {
    return Object.defineProperty(e, t, r);
  },
  ObjectGetOwnPropertyDescriptor(e, t) {
    return Object.getOwnPropertyDescriptor(e, t);
  },
  ObjectKeys(e) {
    return Object.keys(e);
  },
  ObjectSetPrototypeOf(e, t) {
    return Object.setPrototypeOf(e, t);
  },
  Promise,
  PromisePrototypeCatch(e, t) {
    return e.catch(t);
  },
  PromisePrototypeThen(e, t, r) {
    return e.then(t, r);
  },
  PromiseReject(e) {
    return Promise.reject(e);
  },
  PromiseResolve(e) {
    return Promise.resolve(e);
  },
  ReflectApply: Reflect.apply,
  RegExpPrototypeTest(e, t) {
    return e.test(t);
  },
  SafeSet: Set,
  String,
  StringPrototypeSlice(e, t, r) {
    return e.slice(t, r);
  },
  StringPrototypeToLowerCase(e) {
    return e.toLowerCase();
  },
  StringPrototypeToUpperCase(e) {
    return e.toUpperCase();
  },
  StringPrototypeTrim(e) {
    return e.trim();
  },
  Symbol,
  SymbolFor: Symbol.for,
  SymbolAsyncIterator: Symbol.asyncIterator,
  SymbolHasInstance: Symbol.hasInstance,
  SymbolIterator: Symbol.iterator,
  SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"),
  SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"),
  TypedArrayPrototypeSet(e, t, r) {
    return e.set(t, r);
  },
  Boolean,
  Uint8Array
}, fl = { exports: {} };
(function(e) {
  const t = ye, { kResistStopPropagation: r, SymbolDispose: n } = ae, o = globalThis.AbortSignal || Ue().AbortSignal, a = globalThis.AbortController || Ue().AbortController, i = Object.getPrototypeOf(async function() {
  }).constructor, s = globalThis.Blob || t.Blob, f = typeof s < "u" ? function(c) {
    return c instanceof s;
  } : function(c) {
    return !1;
  }, u = (b, c) => {
    if (b !== void 0 && (b === null || typeof b != "object" || !("aborted" in b)))
      throw new ERR_INVALID_ARG_TYPE(c, "AbortSignal", b);
  }, h = (b, c) => {
    if (typeof b != "function")
      throw new ERR_INVALID_ARG_TYPE(c, "Function", b);
  };
  class w extends Error {
    constructor(c) {
      if (!Array.isArray(c))
        throw new TypeError(`Expected input to be an Array, got ${typeof c}`);
      let S = "";
      for (let _ = 0; _ < c.length; _++)
        S += `    ${c[_].stack}
`;
      super(S), this.name = "AggregateError", this.errors = c;
    }
  }
  e.exports = {
    AggregateError: w,
    kEmptyObject: Object.freeze({}),
    once(b) {
      let c = !1;
      return function(...S) {
        c || (c = !0, b.apply(this, S));
      };
    },
    createDeferredPromise: function() {
      let b, c;
      return {
        promise: new Promise((_, R) => {
          b = _, c = R;
        }),
        resolve: b,
        reject: c
      };
    },
    promisify(b) {
      return new Promise((c, S) => {
        b((_, ...R) => _ ? S(_) : c(...R));
      });
    },
    debuglog() {
      return function() {
      };
    },
    format(b, ...c) {
      return b.replace(/%([sdifj])/g, function(...[S, _]) {
        const R = c.shift();
        return _ === "f" ? R.toFixed(6) : _ === "j" ? JSON.stringify(R) : _ === "s" && typeof R == "object" ? `${R.constructor !== Object ? R.constructor.name : ""} {}`.trim() : R.toString();
      });
    },
    inspect(b) {
      switch (typeof b) {
        case "string":
          if (b.includes("'"))
            if (b.includes('"')) {
              if (!b.includes("`") && !b.includes("${"))
                return `\`${b}\``;
            } else
              return `"${b}"`;
          return `'${b}'`;
        case "number":
          return isNaN(b) ? "NaN" : Object.is(b, -0) ? String(b) : b;
        case "bigint":
          return `${String(b)}n`;
        case "boolean":
        case "undefined":
          return String(b);
        case "object":
          return "{}";
      }
    },
    types: {
      isAsyncFunction(b) {
        return b instanceof i;
      },
      isArrayBufferView(b) {
        return ArrayBuffer.isView(b);
      }
    },
    isBlob: f,
    deprecate(b, c) {
      return b;
    },
    addAbortListener: lt.addAbortListener || function(c, S) {
      if (c === void 0)
        throw new ERR_INVALID_ARG_TYPE("signal", "AbortSignal", c);
      u(c, "signal"), h(S, "listener");
      let _;
      return c.aborted ? queueMicrotask(() => S()) : (c.addEventListener("abort", S, {
        __proto__: null,
        once: !0,
        [r]: !0
      }), _ = () => {
        c.removeEventListener("abort", S);
      }), {
        __proto__: null,
        [n]() {
          var R;
          (R = _) === null || R === void 0 || R();
        }
      };
    },
    AbortSignalAny: o.any || function(c) {
      if (c.length === 1)
        return c[0];
      const S = new a(), _ = () => S.abort();
      return c.forEach((R) => {
        u(R, "signals"), R.addEventListener("abort", _, {
          once: !0
        });
      }), S.signal.addEventListener(
        "abort",
        () => {
          c.forEach((R) => R.removeEventListener("abort", _));
        },
        {
          once: !0
        }
      ), S.signal;
    }
  }, e.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
})(fl);
var Se = fl.exports, Gi = {};
const { format: bd, inspect: Lr, AggregateError: yd } = Se, pd = globalThis.AggregateError || yd, _d = Symbol("kIsNodeError"), wd = [
  "string",
  "function",
  "number",
  "object",
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  "Function",
  "Object",
  "boolean",
  "bigint",
  "symbol"
], gd = /^([A-Z][a-z0-9]*)+$/, Ed = "__node_internal_", Ur = {};
function St(e, t) {
  if (!e)
    throw new Ur.ERR_INTERNAL_ASSERTION(t);
}
function go(e) {
  let t = "", r = e.length;
  const n = e[0] === "-" ? 1 : 0;
  for (; r >= n + 4; r -= 3)
    t = `_${e.slice(r - 3, r)}${t}`;
  return `${e.slice(0, r)}${t}`;
}
function Sd(e, t, r) {
  if (typeof t == "function")
    return St(
      t.length <= r.length,
      // Default options do not count.
      `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${t.length}).`
    ), t(...r);
  const n = (t.match(/%[dfijoOs]/g) || []).length;
  return St(
    n === r.length,
    `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${n}).`
  ), r.length === 0 ? t : bd(t, ...r);
}
function he(e, t, r) {
  r || (r = Error);
  class n extends r {
    constructor(...a) {
      super(Sd(e, t, a));
    }
    toString() {
      return `${this.name} [${e}]: ${this.message}`;
    }
  }
  Object.defineProperties(n.prototype, {
    name: {
      value: r.name,
      writable: !0,
      enumerable: !1,
      configurable: !0
    },
    toString: {
      value() {
        return `${this.name} [${e}]: ${this.message}`;
      },
      writable: !0,
      enumerable: !1,
      configurable: !0
    }
  }), n.prototype.code = e, n.prototype[_d] = !0, Ur[e] = n;
}
function Eo(e) {
  const t = Ed + e.name;
  return Object.defineProperty(e, "name", {
    value: t
  }), e;
}
function Rd(e, t) {
  if (e && t && e !== t) {
    if (Array.isArray(t.errors))
      return t.errors.push(e), t;
    const r = new pd([t, e], t.message);
    return r.code = t.code, r;
  }
  return e || t;
}
let Ad = class extends Error {
  constructor(t = "The operation was aborted", r = void 0) {
    if (r !== void 0 && typeof r != "object")
      throw new Ur.ERR_INVALID_ARG_TYPE("options", "Object", r);
    super(t, r), this.code = "ABORT_ERR", this.name = "AbortError";
  }
};
he("ERR_ASSERTION", "%s", Error);
he(
  "ERR_INVALID_ARG_TYPE",
  (e, t, r) => {
    St(typeof e == "string", "'name' must be a string"), Array.isArray(t) || (t = [t]);
    let n = "The ";
    e.endsWith(" argument") ? n += `${e} ` : n += `"${e}" ${e.includes(".") ? "property" : "argument"} `, n += "must be ";
    const o = [], a = [], i = [];
    for (const f of t)
      St(typeof f == "string", "All expected entries have to be of type string"), wd.includes(f) ? o.push(f.toLowerCase()) : gd.test(f) ? a.push(f) : (St(f !== "object", 'The value "object" should be written as "Object"'), i.push(f));
    if (a.length > 0) {
      const f = o.indexOf("object");
      f !== -1 && (o.splice(o, f, 1), a.push("Object"));
    }
    if (o.length > 0) {
      switch (o.length) {
        case 1:
          n += `of type ${o[0]}`;
          break;
        case 2:
          n += `one of type ${o[0]} or ${o[1]}`;
          break;
        default: {
          const f = o.pop();
          n += `one of type ${o.join(", ")}, or ${f}`;
        }
      }
      (a.length > 0 || i.length > 0) && (n += " or ");
    }
    if (a.length > 0) {
      switch (a.length) {
        case 1:
          n += `an instance of ${a[0]}`;
          break;
        case 2:
          n += `an instance of ${a[0]} or ${a[1]}`;
          break;
        default: {
          const f = a.pop();
          n += `an instance of ${a.join(", ")}, or ${f}`;
        }
      }
      i.length > 0 && (n += " or ");
    }
    switch (i.length) {
      case 0:
        break;
      case 1:
        i[0].toLowerCase() !== i[0] && (n += "an "), n += `${i[0]}`;
        break;
      case 2:
        n += `one of ${i[0]} or ${i[1]}`;
        break;
      default: {
        const f = i.pop();
        n += `one of ${i.join(", ")}, or ${f}`;
      }
    }
    if (r == null)
      n += `. Received ${r}`;
    else if (typeof r == "function" && r.name)
      n += `. Received function ${r.name}`;
    else if (typeof r == "object") {
      var s;
      if ((s = r.constructor) !== null && s !== void 0 && s.name)
        n += `. Received an instance of ${r.constructor.name}`;
      else {
        const f = Lr(r, {
          depth: -1
        });
        n += `. Received ${f}`;
      }
    } else {
      let f = Lr(r, {
        colors: !1
      });
      f.length > 25 && (f = `${f.slice(0, 25)}...`), n += `. Received type ${typeof r} (${f})`;
    }
    return n;
  },
  TypeError
);
he(
  "ERR_INVALID_ARG_VALUE",
  (e, t, r = "is invalid") => {
    let n = Lr(t);
    return n.length > 128 && (n = n.slice(0, 128) + "..."), `The ${e.includes(".") ? "property" : "argument"} '${e}' ${r}. Received ${n}`;
  },
  TypeError
);
he(
  "ERR_INVALID_RETURN_VALUE",
  (e, t, r) => {
    var n;
    const o = r != null && (n = r.constructor) !== null && n !== void 0 && n.name ? `instance of ${r.constructor.name}` : `type ${typeof r}`;
    return `Expected ${e} to be returned from the "${t}" function but got ${o}.`;
  },
  TypeError
);
he(
  "ERR_MISSING_ARGS",
  (...e) => {
    St(e.length > 0, "At least one arg needs to be specified");
    let t;
    const r = e.length;
    switch (e = (Array.isArray(e) ? e : [e]).map((n) => `"${n}"`).join(" or "), r) {
      case 1:
        t += `The ${e[0]} argument`;
        break;
      case 2:
        t += `The ${e[0]} and ${e[1]} arguments`;
        break;
      default:
        {
          const n = e.pop();
          t += `The ${e.join(", ")}, and ${n} arguments`;
        }
        break;
    }
    return `${t} must be specified`;
  },
  TypeError
);
he(
  "ERR_OUT_OF_RANGE",
  (e, t, r) => {
    St(t, 'Missing "range" argument');
    let n;
    return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? n = go(String(r)) : typeof r == "bigint" ? (n = String(r), (r > 2n ** 32n || r < -(2n ** 32n)) && (n = go(n)), n += "n") : n = Lr(r), `The value of "${e}" is out of range. It must be ${t}. Received ${n}`;
  },
  RangeError
);
he("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
he("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
he("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
he("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
he("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
he("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
he("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
he("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
he("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
he("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
he("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
var Ie = {
  AbortError: Ad,
  aggregateTwoErrors: Eo(Rd),
  hideStackFrames: Eo,
  codes: Ur
};
const {
  ArrayIsArray: Ki,
  ArrayPrototypeIncludes: ul,
  ArrayPrototypeJoin: cl,
  ArrayPrototypeMap: Id,
  NumberIsInteger: Ji,
  NumberIsNaN: md,
  NumberMAX_SAFE_INTEGER: vd,
  NumberMIN_SAFE_INTEGER: Td,
  NumberParseInt: Cd,
  ObjectPrototypeHasOwnProperty: Nd,
  RegExpPrototypeExec: hl,
  String: Od,
  StringPrototypeToUpperCase: Dd,
  StringPrototypeTrim: $d
} = ae, {
  hideStackFrames: De,
  codes: { ERR_SOCKET_BAD_PORT: Pd, ERR_INVALID_ARG_TYPE: pe, ERR_INVALID_ARG_VALUE: Wt, ERR_OUT_OF_RANGE: At, ERR_UNKNOWN_SIGNAL: So }
} = Ie, { normalizeEncoding: Ld } = Se, { isAsyncFunction: xd, isArrayBufferView: kd } = Se.types, Ro = {};
function Md(e) {
  return e === (e | 0);
}
function jd(e) {
  return e === e >>> 0;
}
const Vd = /^[0-7]+$/, Fd = "must be a 32-bit unsigned integer or an octal string";
function Ud(e, t, r) {
  if (typeof e > "u" && (e = r), typeof e == "string") {
    if (hl(Vd, e) === null)
      throw new Wt(t, e, Fd);
    e = Cd(e, 8);
  }
  return bl(e, t), e;
}
const Wd = De((e, t, r = Td, n = vd) => {
  if (typeof e != "number")
    throw new pe(t, "number", e);
  if (!Ji(e))
    throw new At(t, "an integer", e);
  if (e < r || e > n)
    throw new At(t, `>= ${r} && <= ${n}`, e);
}), Bd = De((e, t, r = -2147483648, n = 2147483647) => {
  if (typeof e != "number")
    throw new pe(t, "number", e);
  if (!Ji(e))
    throw new At(t, "an integer", e);
  if (e < r || e > n)
    throw new At(t, `>= ${r} && <= ${n}`, e);
}), bl = De((e, t, r = !1) => {
  if (typeof e != "number")
    throw new pe(t, "number", e);
  if (!Ji(e))
    throw new At(t, "an integer", e);
  const n = r ? 1 : 0, o = 4294967295;
  if (e < n || e > o)
    throw new At(t, `>= ${n} && <= ${o}`, e);
});
function qi(e, t) {
  if (typeof e != "string")
    throw new pe(t, "string", e);
}
function Hd(e, t, r = void 0, n) {
  if (typeof e != "number")
    throw new pe(t, "number", e);
  if (r != null && e < r || n != null && e > n || (r != null || n != null) && md(e))
    throw new At(
      t,
      `${r != null ? `>= ${r}` : ""}${r != null && n != null ? " && " : ""}${n != null ? `<= ${n}` : ""}`,
      e
    );
}
const Gd = De((e, t, r) => {
  if (!ul(r, e)) {
    const o = "must be one of: " + cl(
      Id(r, (a) => typeof a == "string" ? `'${a}'` : Od(a)),
      ", "
    );
    throw new Wt(t, e, o);
  }
});
function yl(e, t) {
  if (typeof e != "boolean")
    throw new pe(t, "boolean", e);
}
function Vn(e, t, r) {
  return e == null || !Nd(e, t) ? r : e[t];
}
const Kd = De((e, t, r = null) => {
  const n = Vn(r, "allowArray", !1), o = Vn(r, "allowFunction", !1);
  if (!Vn(r, "nullable", !1) && e === null || !n && Ki(e) || typeof e != "object" && (!o || typeof e != "function"))
    throw new pe(t, "Object", e);
}), Jd = De((e, t) => {
  if (e != null && typeof e != "object" && typeof e != "function")
    throw new pe(t, "a dictionary", e);
}), Wr = De((e, t, r = 0) => {
  if (!Ki(e))
    throw new pe(t, "Array", e);
  if (e.length < r) {
    const n = `must be longer than ${r}`;
    throw new Wt(t, e, n);
  }
});
function qd(e, t) {
  Wr(e, t);
  for (let r = 0; r < e.length; r++)
    qi(e[r], `${t}[${r}]`);
}
function Yd(e, t) {
  Wr(e, t);
  for (let r = 0; r < e.length; r++)
    yl(e[r], `${t}[${r}]`);
}
function zd(e, t) {
  Wr(e, t);
  for (let r = 0; r < e.length; r++) {
    const n = e[r], o = `${t}[${r}]`;
    if (n == null)
      throw new pe(o, "AbortSignal", n);
    pl(n, o);
  }
}
function Xd(e, t = "signal") {
  if (qi(e, t), Ro[e] === void 0)
    throw Ro[Dd(e)] !== void 0 ? new So(e + " (signals must use all capital letters)") : new So(e);
}
const Qd = De((e, t = "buffer") => {
  if (!kd(e))
    throw new pe(t, ["Buffer", "TypedArray", "DataView"], e);
});
function Zd(e, t) {
  const r = Ld(t), n = e.length;
  if (r === "hex" && n % 2 !== 0)
    throw new Wt("encoding", t, `is invalid for data of length ${n}`);
}
function ef(e, t = "Port", r = !0) {
  if (typeof e != "number" && typeof e != "string" || typeof e == "string" && $d(e).length === 0 || +e !== +e >>> 0 || e > 65535 || e === 0 && !r)
    throw new Pd(t, e, r);
  return e | 0;
}
const pl = De((e, t) => {
  if (e !== void 0 && (e === null || typeof e != "object" || !("aborted" in e)))
    throw new pe(t, "AbortSignal", e);
}), tf = De((e, t) => {
  if (typeof e != "function")
    throw new pe(t, "Function", e);
}), rf = De((e, t) => {
  if (typeof e != "function" || xd(e))
    throw new pe(t, "Function", e);
}), nf = De((e, t) => {
  if (e !== void 0)
    throw new pe(t, "undefined", e);
});
function of(e, t, r) {
  if (!ul(r, e))
    throw new pe(t, `('${cl(r, "|")}')`, e);
}
const af = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
function Ao(e, t) {
  if (typeof e > "u" || !hl(af, e))
    throw new Wt(
      t,
      e,
      'must be an array or string of format "</styles.css>; rel=preload; as=style"'
    );
}
function lf(e) {
  if (typeof e == "string")
    return Ao(e, "hints"), e;
  if (Ki(e)) {
    const t = e.length;
    let r = "";
    if (t === 0)
      return r;
    for (let n = 0; n < t; n++) {
      const o = e[n];
      Ao(o, "hints"), r += o, n !== t - 1 && (r += ", ");
    }
    return r;
  }
  throw new Wt(
    "hints",
    e,
    'must be an array or string of format "</styles.css>; rel=preload; as=style"'
  );
}
var _r = {
  isInt32: Md,
  isUint32: jd,
  parseFileMode: Ud,
  validateArray: Wr,
  validateStringArray: qd,
  validateBooleanArray: Yd,
  validateAbortSignalArray: zd,
  validateBoolean: yl,
  validateBuffer: Qd,
  validateDictionary: Jd,
  validateEncoding: Zd,
  validateFunction: tf,
  validateInt32: Bd,
  validateInteger: Wd,
  validateNumber: Hd,
  validateObject: Kd,
  validateOneOf: Gd,
  validatePlainFunction: rf,
  validatePort: ef,
  validateSignalName: Xd,
  validateString: qi,
  validateUint32: bl,
  validateUndefined: nf,
  validateUnion: of,
  validateAbortSignal: pl,
  validateLinkHeaderValue: lf
}, Yi = { exports: {} };
const { SymbolAsyncIterator: Io, SymbolIterator: mo, SymbolFor: mt } = ae, _l = mt("nodejs.stream.destroyed"), wl = mt("nodejs.stream.errored"), Ei = mt("nodejs.stream.readable"), Si = mt("nodejs.stream.writable"), gl = mt("nodejs.stream.disturbed"), sf = mt("nodejs.webstream.isClosedPromise"), df = mt("nodejs.webstream.controllerErrorFunction");
function Br(e, t = !1) {
  var r;
  return !!(e && typeof e.pipe == "function" && typeof e.on == "function" && (!t || typeof e.pause == "function" && typeof e.resume == "function") && (!e._writableState || ((r = e._readableState) === null || r === void 0 ? void 0 : r.readable) !== !1) && // Duplex
  (!e._writableState || e._readableState));
}
function Hr(e) {
  var t;
  return !!(e && typeof e.write == "function" && typeof e.on == "function" && (!e._readableState || ((t = e._writableState) === null || t === void 0 ? void 0 : t.writable) !== !1));
}
function ff(e) {
  return !!(e && typeof e.pipe == "function" && e._readableState && typeof e.on == "function" && typeof e.write == "function");
}
function He(e) {
  return e && (e._readableState || e._writableState || typeof e.write == "function" && typeof e.on == "function" || typeof e.pipe == "function" && typeof e.on == "function");
}
function El(e) {
  return !!(e && !He(e) && typeof e.pipeThrough == "function" && typeof e.getReader == "function" && typeof e.cancel == "function");
}
function Sl(e) {
  return !!(e && !He(e) && typeof e.getWriter == "function" && typeof e.abort == "function");
}
function Rl(e) {
  return !!(e && !He(e) && typeof e.readable == "object" && typeof e.writable == "object");
}
function uf(e) {
  return El(e) || Sl(e) || Rl(e);
}
function cf(e, t) {
  return e == null ? !1 : t === !0 ? typeof e[Io] == "function" : t === !1 ? typeof e[mo] == "function" : typeof e[Io] == "function" || typeof e[mo] == "function";
}
function Gr(e) {
  if (!He(e))
    return null;
  const t = e._writableState, r = e._readableState, n = t || r;
  return !!(e.destroyed || e[_l] || n != null && n.destroyed);
}
function Al(e) {
  if (!Hr(e))
    return null;
  if (e.writableEnded === !0)
    return !0;
  const t = e._writableState;
  return t != null && t.errored ? !1 : typeof (t == null ? void 0 : t.ended) != "boolean" ? null : t.ended;
}
function hf(e, t) {
  if (!Hr(e))
    return null;
  if (e.writableFinished === !0)
    return !0;
  const r = e._writableState;
  return r != null && r.errored ? !1 : typeof (r == null ? void 0 : r.finished) != "boolean" ? null : !!(r.finished || t === !1 && r.ended === !0 && r.length === 0);
}
function bf(e) {
  if (!Br(e))
    return null;
  if (e.readableEnded === !0)
    return !0;
  const t = e._readableState;
  return !t || t.errored ? !1 : typeof (t == null ? void 0 : t.ended) != "boolean" ? null : t.ended;
}
function Il(e, t) {
  if (!Br(e))
    return null;
  const r = e._readableState;
  return r != null && r.errored ? !1 : typeof (r == null ? void 0 : r.endEmitted) != "boolean" ? null : !!(r.endEmitted || t === !1 && r.ended === !0 && r.length === 0);
}
function ml(e) {
  return e && e[Ei] != null ? e[Ei] : typeof (e == null ? void 0 : e.readable) != "boolean" ? null : Gr(e) ? !1 : Br(e) && e.readable && !Il(e);
}
function vl(e) {
  return e && e[Si] != null ? e[Si] : typeof (e == null ? void 0 : e.writable) != "boolean" ? null : Gr(e) ? !1 : Hr(e) && e.writable && !Al(e);
}
function yf(e, t) {
  return He(e) ? Gr(e) ? !0 : !((t == null ? void 0 : t.readable) !== !1 && ml(e) || (t == null ? void 0 : t.writable) !== !1 && vl(e)) : null;
}
function pf(e) {
  var t, r;
  return He(e) ? e.writableErrored ? e.writableErrored : (t = (r = e._writableState) === null || r === void 0 ? void 0 : r.errored) !== null && t !== void 0 ? t : null : null;
}
function _f(e) {
  var t, r;
  return He(e) ? e.readableErrored ? e.readableErrored : (t = (r = e._readableState) === null || r === void 0 ? void 0 : r.errored) !== null && t !== void 0 ? t : null : null;
}
function wf(e) {
  if (!He(e))
    return null;
  if (typeof e.closed == "boolean")
    return e.closed;
  const t = e._writableState, r = e._readableState;
  return typeof (t == null ? void 0 : t.closed) == "boolean" || typeof (r == null ? void 0 : r.closed) == "boolean" ? (t == null ? void 0 : t.closed) || (r == null ? void 0 : r.closed) : typeof e._closed == "boolean" && Tl(e) ? e._closed : null;
}
function Tl(e) {
  return typeof e._closed == "boolean" && typeof e._defaultKeepAlive == "boolean" && typeof e._removedConnection == "boolean" && typeof e._removedContLen == "boolean";
}
function Cl(e) {
  return typeof e._sent100 == "boolean" && Tl(e);
}
function gf(e) {
  var t;
  return typeof e._consuming == "boolean" && typeof e._dumped == "boolean" && ((t = e.req) === null || t === void 0 ? void 0 : t.upgradeOrConnect) === void 0;
}
function Ef(e) {
  if (!He(e))
    return null;
  const t = e._writableState, r = e._readableState, n = t || r;
  return !n && Cl(e) || !!(n && n.autoDestroy && n.emitClose && n.closed === !1);
}
function Sf(e) {
  var t;
  return !!(e && ((t = e[gl]) !== null && t !== void 0 ? t : e.readableDidRead || e.readableAborted));
}
function Rf(e) {
  var t, r, n, o, a, i, s, f, u, h;
  return !!(e && ((t = (r = (n = (o = (a = (i = e[wl]) !== null && i !== void 0 ? i : e.readableErrored) !== null && a !== void 0 ? a : e.writableErrored) !== null && o !== void 0 ? o : (s = e._readableState) === null || s === void 0 ? void 0 : s.errorEmitted) !== null && n !== void 0 ? n : (f = e._writableState) === null || f === void 0 ? void 0 : f.errorEmitted) !== null && r !== void 0 ? r : (u = e._readableState) === null || u === void 0 ? void 0 : u.errored) !== null && t !== void 0 ? t : !((h = e._writableState) === null || h === void 0) && h.errored));
}
var rt = {
  isDestroyed: Gr,
  kIsDestroyed: _l,
  isDisturbed: Sf,
  kIsDisturbed: gl,
  isErrored: Rf,
  kIsErrored: wl,
  isReadable: ml,
  kIsReadable: Ei,
  kIsClosedPromise: sf,
  kControllerErrorFunction: df,
  kIsWritable: Si,
  isClosed: wf,
  isDuplexNodeStream: ff,
  isFinished: yf,
  isIterable: cf,
  isReadableNodeStream: Br,
  isReadableStream: El,
  isReadableEnded: bf,
  isReadableFinished: Il,
  isReadableErrored: _f,
  isNodeStream: He,
  isWebStream: uf,
  isWritable: vl,
  isWritableNodeStream: Hr,
  isWritableStream: Sl,
  isWritableEnded: Al,
  isWritableFinished: hf,
  isWritableErrored: pf,
  isServerRequest: gf,
  isServerResponse: Cl,
  willEmitClose: Ef,
  isTransformStream: Rl
};
const ot = Ae, { AbortError: Nl, codes: Af } = Ie, { ERR_INVALID_ARG_TYPE: If, ERR_STREAM_PREMATURE_CLOSE: vo } = Af, { kEmptyObject: Ri, once: Ai } = Se, { validateAbortSignal: mf, validateFunction: vf, validateObject: Tf, validateBoolean: Cf } = _r, { Promise: Nf, PromisePrototypeThen: Of, SymbolDispose: Ol } = ae, {
  isClosed: Df,
  isReadable: To,
  isReadableNodeStream: Fn,
  isReadableStream: $f,
  isReadableFinished: Co,
  isReadableErrored: No,
  isWritable: Oo,
  isWritableNodeStream: Do,
  isWritableStream: Pf,
  isWritableFinished: $o,
  isWritableErrored: Po,
  isNodeStream: Lf,
  willEmitClose: xf,
  kIsClosedPromise: kf
} = rt;
let kt;
function Mf(e) {
  return e.setHeader && typeof e.abort == "function";
}
const Ii = () => {
};
function Dl(e, t, r) {
  var n, o;
  if (arguments.length === 2 ? (r = t, t = Ri) : t == null ? t = Ri : Tf(t, "options"), vf(r, "callback"), mf(t.signal, "options.signal"), r = Ai(r), $f(e) || Pf(e))
    return jf(e, t, r);
  if (!Lf(e))
    throw new If("stream", ["ReadableStream", "WritableStream", "Stream"], e);
  const a = (n = t.readable) !== null && n !== void 0 ? n : Fn(e), i = (o = t.writable) !== null && o !== void 0 ? o : Do(e), s = e._writableState, f = e._readableState, u = () => {
    e.writable || b();
  };
  let h = xf(e) && Fn(e) === a && Do(e) === i, w = $o(e, !1);
  const b = () => {
    w = !0, e.destroyed && (h = !1), !(h && (!e.readable || a)) && (!a || c) && r.call(e);
  };
  let c = Co(e, !1);
  const S = () => {
    c = !0, e.destroyed && (h = !1), !(h && (!e.writable || i)) && (!i || w) && r.call(e);
  }, _ = (T) => {
    r.call(e, T);
  };
  let R = Df(e);
  const C = () => {
    R = !0;
    const T = Po(e) || No(e);
    if (T && typeof T != "boolean")
      return r.call(e, T);
    if (a && !c && Fn(e, !0) && !Co(e, !1))
      return r.call(e, new vo());
    if (i && !w && !$o(e, !1))
      return r.call(e, new vo());
    r.call(e);
  }, L = () => {
    R = !0;
    const T = Po(e) || No(e);
    if (T && typeof T != "boolean")
      return r.call(e, T);
    r.call(e);
  }, g = () => {
    e.req.on("finish", b);
  };
  Mf(e) ? (e.on("complete", b), h || e.on("abort", C), e.req ? g() : e.on("request", g)) : i && !s && (e.on("end", u), e.on("close", u)), !h && typeof e.aborted == "boolean" && e.on("aborted", C), e.on("end", S), e.on("finish", b), t.error !== !1 && e.on("error", _), e.on("close", C), R ? ot.nextTick(C) : s != null && s.errorEmitted || f != null && f.errorEmitted ? h || ot.nextTick(L) : (!a && (!h || To(e)) && (w || Oo(e) === !1) || !i && (!h || Oo(e)) && (c || To(e) === !1) || f && e.req && e.aborted) && ot.nextTick(L);
  const G = () => {
    r = Ii, e.removeListener("aborted", C), e.removeListener("complete", b), e.removeListener("abort", C), e.removeListener("request", g), e.req && e.req.removeListener("finish", b), e.removeListener("end", u), e.removeListener("close", u), e.removeListener("finish", b), e.removeListener("end", S), e.removeListener("error", _), e.removeListener("close", C);
  };
  if (t.signal && !R) {
    const T = () => {
      const D = r;
      G(), D.call(
        e,
        new Nl(void 0, {
          cause: t.signal.reason
        })
      );
    };
    if (t.signal.aborted)
      ot.nextTick(T);
    else {
      kt = kt || Se.addAbortListener;
      const D = kt(t.signal, T), H = r;
      r = Ai((...B) => {
        D[Ol](), H.apply(e, B);
      });
    }
  }
  return G;
}
function jf(e, t, r) {
  let n = !1, o = Ii;
  if (t.signal)
    if (o = () => {
      n = !0, r.call(
        e,
        new Nl(void 0, {
          cause: t.signal.reason
        })
      );
    }, t.signal.aborted)
      ot.nextTick(o);
    else {
      kt = kt || Se.addAbortListener;
      const i = kt(t.signal, o), s = r;
      r = Ai((...f) => {
        i[Ol](), s.apply(e, f);
      });
    }
  const a = (...i) => {
    n || ot.nextTick(() => r.apply(e, i));
  };
  return Of(e[kf].promise, a, a), Ii;
}
function Vf(e, t) {
  var r;
  let n = !1;
  return t === null && (t = Ri), (r = t) !== null && r !== void 0 && r.cleanup && (Cf(t.cleanup, "cleanup"), n = t.cleanup), new Nf((o, a) => {
    const i = Dl(e, t, (s) => {
      n && i(), s ? a(s) : o();
    });
  });
}
Yi.exports = Dl;
Yi.exports.finished = Vf;
var st = Yi.exports;
const Ve = Ae, {
  aggregateTwoErrors: Ff,
  codes: { ERR_MULTIPLE_CALLBACK: Uf },
  AbortError: Wf
} = Ie, { Symbol: $l } = ae, { kIsDestroyed: Bf, isDestroyed: Hf, isFinished: Gf, isServerRequest: Kf } = rt, Pl = $l("kDestroy"), mi = $l("kConstruct");
function Ll(e, t, r) {
  e && (e.stack, t && !t.errored && (t.errored = e), r && !r.errored && (r.errored = e));
}
function Jf(e, t) {
  const r = this._readableState, n = this._writableState, o = n || r;
  return n != null && n.destroyed || r != null && r.destroyed ? (typeof t == "function" && t(), this) : (Ll(e, n, r), n && (n.destroyed = !0), r && (r.destroyed = !0), o.constructed ? Lo(this, e, t) : this.once(Pl, function(a) {
    Lo(this, Ff(a, e), t);
  }), this);
}
function Lo(e, t, r) {
  let n = !1;
  function o(a) {
    if (n)
      return;
    n = !0;
    const i = e._readableState, s = e._writableState;
    Ll(a, s, i), s && (s.closed = !0), i && (i.closed = !0), typeof r == "function" && r(a), a ? Ve.nextTick(qf, e, a) : Ve.nextTick(xl, e);
  }
  try {
    e._destroy(t || null, o);
  } catch (a) {
    o(a);
  }
}
function qf(e, t) {
  vi(e, t), xl(e);
}
function xl(e) {
  const t = e._readableState, r = e._writableState;
  r && (r.closeEmitted = !0), t && (t.closeEmitted = !0), (r != null && r.emitClose || t != null && t.emitClose) && e.emit("close");
}
function vi(e, t) {
  const r = e._readableState, n = e._writableState;
  n != null && n.errorEmitted || r != null && r.errorEmitted || (n && (n.errorEmitted = !0), r && (r.errorEmitted = !0), e.emit("error", t));
}
function Yf() {
  const e = this._readableState, t = this._writableState;
  e && (e.constructed = !0, e.closed = !1, e.closeEmitted = !1, e.destroyed = !1, e.errored = null, e.errorEmitted = !1, e.reading = !1, e.ended = e.readable === !1, e.endEmitted = e.readable === !1), t && (t.constructed = !0, t.destroyed = !1, t.closed = !1, t.closeEmitted = !1, t.errored = null, t.errorEmitted = !1, t.finalCalled = !1, t.prefinished = !1, t.ended = t.writable === !1, t.ending = t.writable === !1, t.finished = t.writable === !1);
}
function Ti(e, t, r) {
  const n = e._readableState, o = e._writableState;
  if (o != null && o.destroyed || n != null && n.destroyed)
    return this;
  n != null && n.autoDestroy || o != null && o.autoDestroy ? e.destroy(t) : t && (t.stack, o && !o.errored && (o.errored = t), n && !n.errored && (n.errored = t), r ? Ve.nextTick(vi, e, t) : vi(e, t));
}
function zf(e, t) {
  if (typeof e._construct != "function")
    return;
  const r = e._readableState, n = e._writableState;
  r && (r.constructed = !1), n && (n.constructed = !1), e.once(mi, t), !(e.listenerCount(mi) > 1) && Ve.nextTick(Xf, e);
}
function Xf(e) {
  let t = !1;
  function r(n) {
    if (t) {
      Ti(e, n ?? new Uf());
      return;
    }
    t = !0;
    const o = e._readableState, a = e._writableState, i = a || o;
    o && (o.constructed = !0), a && (a.constructed = !0), i.destroyed ? e.emit(Pl, n) : n ? Ti(e, n, !0) : Ve.nextTick(Qf, e);
  }
  try {
    e._construct((n) => {
      Ve.nextTick(r, n);
    });
  } catch (n) {
    Ve.nextTick(r, n);
  }
}
function Qf(e) {
  e.emit(mi);
}
function xo(e) {
  return (e == null ? void 0 : e.setHeader) && typeof e.abort == "function";
}
function kl(e) {
  e.emit("close");
}
function Zf(e, t) {
  e.emit("error", t), Ve.nextTick(kl, e);
}
function eu(e, t) {
  !e || Hf(e) || (!t && !Gf(e) && (t = new Wf()), Kf(e) ? (e.socket = null, e.destroy(t)) : xo(e) ? e.abort() : xo(e.req) ? e.req.abort() : typeof e.destroy == "function" ? e.destroy(t) : typeof e.close == "function" ? e.close() : t ? Ve.nextTick(Zf, e, t) : Ve.nextTick(kl, e), e.destroyed || (e[Bf] = !0));
}
var Bt = {
  construct: zf,
  destroyer: eu,
  destroy: Jf,
  undestroy: Yf,
  errorOrDestroy: Ti
};
const { ArrayIsArray: tu, ObjectSetPrototypeOf: Ml } = ae, { EventEmitter: Kr } = lt;
function Jr(e) {
  Kr.call(this, e);
}
Ml(Jr.prototype, Kr.prototype);
Ml(Jr, Kr);
Jr.prototype.pipe = function(e, t) {
  const r = this;
  function n(h) {
    e.writable && e.write(h) === !1 && r.pause && r.pause();
  }
  r.on("data", n);
  function o() {
    r.readable && r.resume && r.resume();
  }
  e.on("drain", o), !e._isStdio && (!t || t.end !== !1) && (r.on("end", i), r.on("close", s));
  let a = !1;
  function i() {
    a || (a = !0, e.end());
  }
  function s() {
    a || (a = !0, typeof e.destroy == "function" && e.destroy());
  }
  function f(h) {
    u(), Kr.listenerCount(this, "error") === 0 && this.emit("error", h);
  }
  Ci(r, "error", f), Ci(e, "error", f);
  function u() {
    r.removeListener("data", n), e.removeListener("drain", o), r.removeListener("end", i), r.removeListener("close", s), r.removeListener("error", f), e.removeListener("error", f), r.removeListener("end", u), r.removeListener("close", u), e.removeListener("close", u);
  }
  return r.on("end", u), r.on("close", u), e.on("close", u), e.emit("pipe", r), e;
};
function Ci(e, t, r) {
  if (typeof e.prependListener == "function")
    return e.prependListener(t, r);
  !e._events || !e._events[t] ? e.on(t, r) : tu(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]];
}
var zi = {
  Stream: Jr,
  prependListener: Ci
}, jl = { exports: {} };
(function(e) {
  const { SymbolDispose: t } = ae, { AbortError: r, codes: n } = Ie, { isNodeStream: o, isWebStream: a, kControllerErrorFunction: i } = rt, s = st, { ERR_INVALID_ARG_TYPE: f } = n;
  let u;
  const h = (w, b) => {
    if (typeof w != "object" || !("aborted" in w))
      throw new f(b, "AbortSignal", w);
  };
  e.exports.addAbortSignal = function(b, c) {
    if (h(b, "signal"), !o(c) && !a(c))
      throw new f("stream", ["ReadableStream", "WritableStream", "Stream"], c);
    return e.exports.addAbortSignalNoValidate(b, c);
  }, e.exports.addAbortSignalNoValidate = function(w, b) {
    if (typeof w != "object" || !("aborted" in w))
      return b;
    const c = o(b) ? () => {
      b.destroy(
        new r(void 0, {
          cause: w.reason
        })
      );
    } : () => {
      b[i](
        new r(void 0, {
          cause: w.reason
        })
      );
    };
    if (w.aborted)
      c();
    else {
      u = u || Se.addAbortListener;
      const S = u(w, c);
      s(b, S[t]);
    }
    return b;
  };
})(jl);
var qr = jl.exports;
const { StringPrototypeSlice: ko, SymbolIterator: ru, TypedArrayPrototypeSet: Sr, Uint8Array: nu } = ae, { Buffer: Un } = ye, { inspect: iu } = Se;
var ou = class {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  push(t) {
    const r = {
      data: t,
      next: null
    };
    this.length > 0 ? this.tail.next = r : this.head = r, this.tail = r, ++this.length;
  }
  unshift(t) {
    const r = {
      data: t,
      next: this.head
    };
    this.length === 0 && (this.tail = r), this.head = r, ++this.length;
  }
  shift() {
    if (this.length === 0)
      return;
    const t = this.head.data;
    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
  }
  clear() {
    this.head = this.tail = null, this.length = 0;
  }
  join(t) {
    if (this.length === 0)
      return "";
    let r = this.head, n = "" + r.data;
    for (; (r = r.next) !== null; )
      n += t + r.data;
    return n;
  }
  concat(t) {
    if (this.length === 0)
      return Un.alloc(0);
    const r = Un.allocUnsafe(t >>> 0);
    let n = this.head, o = 0;
    for (; n; )
      Sr(r, n.data, o), o += n.data.length, n = n.next;
    return r;
  }
  // Consumes a specified amount of bytes or characters from the buffered data.
  consume(t, r) {
    const n = this.head.data;
    if (t < n.length) {
      const o = n.slice(0, t);
      return this.head.data = n.slice(t), o;
    }
    return t === n.length ? this.shift() : r ? this._getString(t) : this._getBuffer(t);
  }
  first() {
    return this.head.data;
  }
  *[ru]() {
    for (let t = this.head; t; t = t.next)
      yield t.data;
  }
  // Consumes a specified amount of characters from the buffered data.
  _getString(t) {
    let r = "", n = this.head, o = 0;
    do {
      const a = n.data;
      if (t > a.length)
        r += a, t -= a.length;
      else {
        t === a.length ? (r += a, ++o, n.next ? this.head = n.next : this.head = this.tail = null) : (r += ko(a, 0, t), this.head = n, n.data = ko(a, t));
        break;
      }
      ++o;
    } while ((n = n.next) !== null);
    return this.length -= o, r;
  }
  // Consumes a specified amount of bytes from the buffered data.
  _getBuffer(t) {
    const r = Un.allocUnsafe(t), n = t;
    let o = this.head, a = 0;
    do {
      const i = o.data;
      if (t > i.length)
        Sr(r, i, n - t), t -= i.length;
      else {
        t === i.length ? (Sr(r, i, n - t), ++a, o.next ? this.head = o.next : this.head = this.tail = null) : (Sr(r, new nu(i.buffer, i.byteOffset, t), n - t), this.head = o, o.data = i.slice(t));
        break;
      }
      ++a;
    } while ((o = o.next) !== null);
    return this.length -= a, r;
  }
  // Make sure the linked list only shows the minimal necessary information.
  [Symbol.for("nodejs.util.inspect.custom")](t, r) {
    return iu(this, {
      ...r,
      // Only inspect one level.
      depth: 0,
      // It should not recurse.
      customInspect: !1
    });
  }
};
const { MathFloor: au, NumberIsInteger: lu } = ae, { validateInteger: su } = _r, { ERR_INVALID_ARG_VALUE: du } = Ie.codes;
let Vl = 16 * 1024, Fl = 16;
function fu(e, t, r) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
}
function Ul(e) {
  return e ? Fl : Vl;
}
function uu(e, t) {
  su(t, "value", 0), e ? Fl = t : Vl = t;
}
function cu(e, t, r, n) {
  const o = fu(t, n, r);
  if (o != null) {
    if (!lu(o) || o < 0) {
      const a = n ? `options.${r}` : "options.highWaterMark";
      throw new du(a, o);
    }
    return au(o);
  }
  return Ul(e.objectMode);
}
var Yr = {
  getHighWaterMark: cu,
  getDefaultHighWaterMark: Ul,
  setDefaultHighWaterMark: uu
};
const Mo = Ae, { PromisePrototypeThen: hu, SymbolAsyncIterator: jo, SymbolIterator: Vo } = ae, { Buffer: bu } = ye, { ERR_INVALID_ARG_TYPE: yu, ERR_STREAM_NULL_VALUES: pu } = Ie.codes;
function _u(e, t, r) {
  let n;
  if (typeof t == "string" || t instanceof bu)
    return new e({
      objectMode: !0,
      ...r,
      read() {
        this.push(t), this.push(null);
      }
    });
  let o;
  if (t && t[jo])
    o = !0, n = t[jo]();
  else if (t && t[Vo])
    o = !1, n = t[Vo]();
  else
    throw new yu("iterable", ["Iterable"], t);
  const a = new e({
    objectMode: !0,
    highWaterMark: 1,
    // TODO(ronag): What options should be allowed?
    ...r
  });
  let i = !1;
  a._read = function() {
    i || (i = !0, f());
  }, a._destroy = function(u, h) {
    hu(
      s(u),
      () => Mo.nextTick(h, u),
      // nextTick is here in case cb throws
      (w) => Mo.nextTick(h, w || u)
    );
  };
  async function s(u) {
    const h = u != null, w = typeof n.throw == "function";
    if (h && w) {
      const { value: b, done: c } = await n.throw(u);
      if (await b, c)
        return;
    }
    if (typeof n.return == "function") {
      const { value: b } = await n.return();
      await b;
    }
  }
  async function f() {
    for (; ; ) {
      try {
        const { value: u, done: h } = o ? await n.next() : n.next();
        if (h)
          a.push(null);
        else {
          const w = u && typeof u.then == "function" ? await u : u;
          if (w === null)
            throw i = !1, new pu();
          if (a.push(w))
            continue;
          i = !1;
        }
      } catch (u) {
        a.destroy(u);
      }
      break;
    }
  }
  return a;
}
var Wl = _u, Wn, Fo;
function zr() {
  if (Fo)
    return Wn;
  Fo = 1;
  const e = Ae, {
    ArrayPrototypeIndexOf: t,
    NumberIsInteger: r,
    NumberIsNaN: n,
    NumberParseInt: o,
    ObjectDefineProperties: a,
    ObjectKeys: i,
    ObjectSetPrototypeOf: s,
    Promise: f,
    SafeSet: u,
    SymbolAsyncDispose: h,
    SymbolAsyncIterator: w,
    Symbol: b
  } = ae;
  Wn = F, F.ReadableState = fe;
  const { EventEmitter: c } = lt, { Stream: S, prependListener: _ } = zi, { Buffer: R } = ye, { addAbortSignal: C } = qr, L = st;
  let g = Se.debuglog("stream", (l) => {
    g = l;
  });
  const G = ou, T = Bt, { getHighWaterMark: D, getDefaultHighWaterMark: H } = Yr, {
    aggregateTwoErrors: B,
    codes: {
      ERR_INVALID_ARG_TYPE: I,
      ERR_METHOD_NOT_IMPLEMENTED: O,
      ERR_OUT_OF_RANGE: U,
      ERR_STREAM_PUSH_AFTER_EOF: k,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT: E
    },
    AbortError: x
  } = Ie, { validateObject: V } = _r, W = b("kPaused"), { StringDecoder: z } = il(), Z = Wl;
  s(F.prototype, S.prototype), s(F, S);
  const Q = () => {
  }, { errorOrDestroy: ee } = T, K = 1, de = 2, j = 4, te = 8, se = 16, ve = 32, Te = 64, Ce = 128, Pe = 256, ft = 512, Le = 1024, Ne = 2048, y = 4096, p = 8192, A = 16384, $ = 32768, P = 65536, q = 1 << 17, X = 1 << 18;
  function J(l) {
    return {
      enumerable: !1,
      get() {
        return (this.state & l) !== 0;
      },
      set(d) {
        d ? this.state |= l : this.state &= ~l;
      }
    };
  }
  a(fe.prototype, {
    objectMode: J(K),
    ended: J(de),
    endEmitted: J(j),
    reading: J(te),
    // Stream is still being constructed and cannot be
    // destroyed until construction finished or failed.
    // Async construction is opt in, therefore we start as
    // constructed.
    constructed: J(se),
    // A flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    sync: J(ve),
    // Whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    needReadable: J(Te),
    emittedReadable: J(Ce),
    readableListening: J(Pe),
    resumeScheduled: J(ft),
    // True if the error was already emitted and should not be thrown again.
    errorEmitted: J(Le),
    emitClose: J(Ne),
    autoDestroy: J(y),
    // Has it been destroyed.
    destroyed: J(p),
    // Indicates whether the stream has finished destroying.
    closed: J(A),
    // True if close has been emitted or would have been emitted
    // depending on emitClose.
    closeEmitted: J($),
    multiAwaitDrain: J(P),
    // If true, a maybeReadMore has been scheduled.
    readingMore: J(q),
    dataEmitted: J(X)
  });
  function fe(l, d, m) {
    typeof m != "boolean" && (m = d instanceof Qe()), this.state = Ne | y | se | ve, l && l.objectMode && (this.state |= K), m && l && l.readableObjectMode && (this.state |= K), this.highWaterMark = l ? D(this, l, "readableHighWaterMark", m) : H(!1), this.buffer = new G(), this.length = 0, this.pipes = [], this.flowing = null, this[W] = null, l && l.emitClose === !1 && (this.state &= ~Ne), l && l.autoDestroy === !1 && (this.state &= ~y), this.errored = null, this.defaultEncoding = l && l.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.decoder = null, this.encoding = null, l && l.encoding && (this.decoder = new z(l.encoding), this.encoding = l.encoding);
  }
  function F(l) {
    if (!(this instanceof F))
      return new F(l);
    const d = this instanceof Qe();
    this._readableState = new fe(l, this, d), l && (typeof l.read == "function" && (this._read = l.read), typeof l.destroy == "function" && (this._destroy = l.destroy), typeof l.construct == "function" && (this._construct = l.construct), l.signal && !d && C(l.signal, this)), S.call(this, l), T.construct(this, () => {
      this._readableState.needReadable && Je(this, this._readableState);
    });
  }
  F.prototype.destroy = T.destroy, F.prototype._undestroy = T.undestroy, F.prototype._destroy = function(l, d) {
    d(l);
  }, F.prototype[c.captureRejectionSymbol] = function(l) {
    this.destroy(l);
  }, F.prototype[h] = function() {
    let l;
    return this.destroyed || (l = this.readableEnded ? null : new x(), this.destroy(l)), new f((d, m) => L(this, (v) => v && v !== l ? m(v) : d(null)));
  }, F.prototype.push = function(l, d) {
    return ce(this, l, d, !1);
  }, F.prototype.unshift = function(l, d) {
    return ce(this, l, d, !0);
  };
  function ce(l, d, m, v) {
    g("readableAddChunk", d);
    const N = l._readableState;
    let re;
    if (N.state & K || (typeof d == "string" ? (m = m || N.defaultEncoding, N.encoding !== m && (v && N.encoding ? d = R.from(d, m).toString(N.encoding) : (d = R.from(d, m), m = ""))) : d instanceof R ? m = "" : S._isUint8Array(d) ? (d = S._uint8ArrayToBuffer(d), m = "") : d != null && (re = new I("chunk", ["string", "Buffer", "Uint8Array"], d))), re)
      ee(l, re);
    else if (d === null)
      N.state &= ~te, Cn(l, N);
    else if (N.state & K || d && d.length > 0)
      if (v)
        if (N.state & j)
          ee(l, new E());
        else {
          if (N.destroyed || N.errored)
            return !1;
          ut(l, N, d, !0);
        }
      else if (N.ended)
        ee(l, new k());
      else {
        if (N.destroyed || N.errored)
          return !1;
        N.state &= ~te, N.decoder && !m ? (d = N.decoder.write(d), N.objectMode || d.length !== 0 ? ut(l, N, d, !1) : Je(l, N)) : ut(l, N, d, !1);
      }
    else
      v || (N.state &= ~te, Je(l, N));
    return !N.ended && (N.length < N.highWaterMark || N.length === 0);
  }
  function ut(l, d, m, v) {
    d.flowing && d.length === 0 && !d.sync && l.listenerCount("data") > 0 ? (d.state & P ? d.awaitDrainWriters.clear() : d.awaitDrainWriters = null, d.dataEmitted = !0, l.emit("data", m)) : (d.length += d.objectMode ? 1 : m.length, v ? d.buffer.unshift(m) : d.buffer.push(m), d.state & Te && Ke(l)), Je(l, d);
  }
  F.prototype.isPaused = function() {
    const l = this._readableState;
    return l[W] === !0 || l.flowing === !1;
  }, F.prototype.setEncoding = function(l) {
    const d = new z(l);
    this._readableState.decoder = d, this._readableState.encoding = this._readableState.decoder.encoding;
    const m = this._readableState.buffer;
    let v = "";
    for (const N of m)
      v += d.write(N);
    return m.clear(), v !== "" && m.push(v), this._readableState.length = v.length, this;
  };
  const vn = 1073741824;
  function Tn(l) {
    if (l > vn)
      throw new U("size", "<= 1GiB", l);
    return l--, l |= l >>> 1, l |= l >>> 2, l |= l >>> 4, l |= l >>> 8, l |= l >>> 16, l++, l;
  }
  function Kt(l, d) {
    return l <= 0 || d.length === 0 && d.ended ? 0 : d.state & K ? 1 : n(l) ? d.flowing && d.length ? d.buffer.first().length : d.length : l <= d.length ? l : d.ended ? d.length : 0;
  }
  F.prototype.read = function(l) {
    g("read", l), l === void 0 ? l = NaN : r(l) || (l = o(l, 10));
    const d = this._readableState, m = l;
    if (l > d.highWaterMark && (d.highWaterMark = Tn(l)), l !== 0 && (d.state &= ~Ce), l === 0 && d.needReadable && ((d.highWaterMark !== 0 ? d.length >= d.highWaterMark : d.length > 0) || d.ended))
      return g("read: emitReadable", d.length, d.ended), d.length === 0 && d.ended ? ct(this) : Ke(this), null;
    if (l = Kt(l, d), l === 0 && d.ended)
      return d.length === 0 && ct(this), null;
    let v = (d.state & Te) !== 0;
    if (g("need readable", v), (d.length === 0 || d.length - l < d.highWaterMark) && (v = !0, g("length less than watermark", v)), d.ended || d.reading || d.destroyed || d.errored || !d.constructed)
      v = !1, g("reading, ended or constructing", v);
    else if (v) {
      g("do read"), d.state |= te | ve, d.length === 0 && (d.state |= Te);
      try {
        this._read(d.highWaterMark);
      } catch (re) {
        ee(this, re);
      }
      d.state &= ~ve, d.reading || (l = Kt(m, d));
    }
    let N;
    return l > 0 ? N = Xt(l, d) : N = null, N === null ? (d.needReadable = d.length <= d.highWaterMark, l = 0) : (d.length -= l, d.multiAwaitDrain ? d.awaitDrainWriters.clear() : d.awaitDrainWriters = null), d.length === 0 && (d.ended || (d.needReadable = !0), m !== l && d.ended && ct(this)), N !== null && !d.errorEmitted && !d.closeEmitted && (d.dataEmitted = !0, this.emit("data", N)), N;
  };
  function Cn(l, d) {
    if (g("onEofChunk"), !d.ended) {
      if (d.decoder) {
        const m = d.decoder.end();
        m && m.length && (d.buffer.push(m), d.length += d.objectMode ? 1 : m.length);
      }
      d.ended = !0, d.sync ? Ke(l) : (d.needReadable = !1, d.emittedReadable = !0, Jt(l));
    }
  }
  function Ke(l) {
    const d = l._readableState;
    g("emitReadable", d.needReadable, d.emittedReadable), d.needReadable = !1, d.emittedReadable || (g("emitReadable", d.flowing), d.emittedReadable = !0, e.nextTick(Jt, l));
  }
  function Jt(l) {
    const d = l._readableState;
    g("emitReadable_", d.destroyed, d.length, d.ended), !d.destroyed && !d.errored && (d.length || d.ended) && (l.emit("readable"), d.emittedReadable = !1), d.needReadable = !d.flowing && !d.ended && d.length <= d.highWaterMark, Yt(l);
  }
  function Je(l, d) {
    !d.readingMore && d.constructed && (d.readingMore = !0, e.nextTick(Nn, l, d));
  }
  function Nn(l, d) {
    for (; !d.reading && !d.ended && (d.length < d.highWaterMark || d.flowing && d.length === 0); ) {
      const m = d.length;
      if (g("maybeReadMore read 0"), l.read(0), m === d.length)
        break;
    }
    d.readingMore = !1;
  }
  F.prototype._read = function(l) {
    throw new O("_read()");
  }, F.prototype.pipe = function(l, d) {
    const m = this, v = this._readableState;
    v.pipes.length === 1 && (v.multiAwaitDrain || (v.multiAwaitDrain = !0, v.awaitDrainWriters = new u(v.awaitDrainWriters ? [v.awaitDrainWriters] : []))), v.pipes.push(l), g("pipe count=%d opts=%j", v.pipes.length, d);
    const re = (!d || d.end !== !1) && l !== e.stdout && l !== e.stderr ? Zt : xe;
    v.endEmitted ? e.nextTick(re) : m.once("end", re), l.on("unpipe", ie);
    function ie(ge, ue) {
      g("onunpipe"), ge === m && ue && ue.hasUnpiped === !1 && (ue.hasUnpiped = !0, Mn());
    }
    function Zt() {
      g("onend"), l.end();
    }
    let we, er = !1;
    function Mn() {
      g("cleanup"), l.removeListener("close", yt), l.removeListener("finish", pt), we && l.removeListener("drain", we), l.removeListener("error", bt), l.removeListener("unpipe", ie), m.removeListener("end", Zt), m.removeListener("end", xe), m.removeListener("data", rr), er = !0, we && v.awaitDrainWriters && (!l._writableState || l._writableState.needDrain) && we();
    }
    function tr() {
      er || (v.pipes.length === 1 && v.pipes[0] === l ? (g("false write response, pause", 0), v.awaitDrainWriters = l, v.multiAwaitDrain = !1) : v.pipes.length > 1 && v.pipes.includes(l) && (g("false write response, pause", v.awaitDrainWriters.size), v.awaitDrainWriters.add(l)), m.pause()), we || (we = On(m, l), l.on("drain", we));
    }
    m.on("data", rr);
    function rr(ge) {
      g("ondata");
      const ue = l.write(ge);
      g("dest.write", ue), ue === !1 && tr();
    }
    function bt(ge) {
      if (g("onerror", ge), xe(), l.removeListener("error", bt), l.listenerCount("error") === 0) {
        const ue = l._writableState || l._readableState;
        ue && !ue.errorEmitted ? ee(l, ge) : l.emit("error", ge);
      }
    }
    _(l, "error", bt);
    function yt() {
      l.removeListener("finish", pt), xe();
    }
    l.once("close", yt);
    function pt() {
      g("onfinish"), l.removeListener("close", yt), xe();
    }
    l.once("finish", pt);
    function xe() {
      g("unpipe"), m.unpipe(l);
    }
    return l.emit("pipe", m), l.writableNeedDrain === !0 ? tr() : v.flowing || (g("pipe resume"), m.resume()), l;
  };
  function On(l, d) {
    return function() {
      const v = l._readableState;
      v.awaitDrainWriters === d ? (g("pipeOnDrain", 1), v.awaitDrainWriters = null) : v.multiAwaitDrain && (g("pipeOnDrain", v.awaitDrainWriters.size), v.awaitDrainWriters.delete(d)), (!v.awaitDrainWriters || v.awaitDrainWriters.size === 0) && l.listenerCount("data") && l.resume();
    };
  }
  F.prototype.unpipe = function(l) {
    const d = this._readableState, m = {
      hasUnpiped: !1
    };
    if (d.pipes.length === 0)
      return this;
    if (!l) {
      const N = d.pipes;
      d.pipes = [], this.pause();
      for (let re = 0; re < N.length; re++)
        N[re].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    const v = t(d.pipes, l);
    return v === -1 ? this : (d.pipes.splice(v, 1), d.pipes.length === 0 && this.pause(), l.emit("unpipe", this, m), this);
  }, F.prototype.on = function(l, d) {
    const m = S.prototype.on.call(this, l, d), v = this._readableState;
    return l === "data" ? (v.readableListening = this.listenerCount("readable") > 0, v.flowing !== !1 && this.resume()) : l === "readable" && !v.endEmitted && !v.readableListening && (v.readableListening = v.needReadable = !0, v.flowing = !1, v.emittedReadable = !1, g("on readable", v.length, v.reading), v.length ? Ke(this) : v.reading || e.nextTick(Dn, this)), m;
  }, F.prototype.addListener = F.prototype.on, F.prototype.removeListener = function(l, d) {
    const m = S.prototype.removeListener.call(this, l, d);
    return l === "readable" && e.nextTick(qt, this), m;
  }, F.prototype.off = F.prototype.removeListener, F.prototype.removeAllListeners = function(l) {
    const d = S.prototype.removeAllListeners.apply(this, arguments);
    return (l === "readable" || l === void 0) && e.nextTick(qt, this), d;
  };
  function qt(l) {
    const d = l._readableState;
    d.readableListening = l.listenerCount("readable") > 0, d.resumeScheduled && d[W] === !1 ? d.flowing = !0 : l.listenerCount("data") > 0 ? l.resume() : d.readableListening || (d.flowing = null);
  }
  function Dn(l) {
    g("readable nexttick read 0"), l.read(0);
  }
  F.prototype.resume = function() {
    const l = this._readableState;
    return l.flowing || (g("resume"), l.flowing = !l.readableListening, $n(this, l)), l[W] = !1, this;
  };
  function $n(l, d) {
    d.resumeScheduled || (d.resumeScheduled = !0, e.nextTick(Pn, l, d));
  }
  function Pn(l, d) {
    g("resume", d.reading), d.reading || l.read(0), d.resumeScheduled = !1, l.emit("resume"), Yt(l), d.flowing && !d.reading && l.read(0);
  }
  F.prototype.pause = function() {
    return g("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (g("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[W] = !0, this;
  };
  function Yt(l) {
    const d = l._readableState;
    for (g("flow", d.flowing); d.flowing && l.read() !== null; )
      ;
  }
  F.prototype.wrap = function(l) {
    let d = !1;
    l.on("data", (v) => {
      !this.push(v) && l.pause && (d = !0, l.pause());
    }), l.on("end", () => {
      this.push(null);
    }), l.on("error", (v) => {
      ee(this, v);
    }), l.on("close", () => {
      this.destroy();
    }), l.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      d && l.resume && (d = !1, l.resume());
    };
    const m = i(l);
    for (let v = 1; v < m.length; v++) {
      const N = m[v];
      this[N] === void 0 && typeof l[N] == "function" && (this[N] = l[N].bind(l));
    }
    return this;
  }, F.prototype[w] = function() {
    return zt(this);
  }, F.prototype.iterator = function(l) {
    return l !== void 0 && V(l, "options"), zt(this, l);
  };
  function zt(l, d) {
    typeof l.read != "function" && (l = F.wrap(l, {
      objectMode: !0
    }));
    const m = Ln(l, d);
    return m.stream = l, m;
  }
  async function* Ln(l, d) {
    let m = Q;
    function v(ie) {
      this === l ? (m(), m = Q) : m = ie;
    }
    l.on("readable", v);
    let N;
    const re = L(
      l,
      {
        writable: !1
      },
      (ie) => {
        N = ie ? B(N, ie) : null, m(), m = Q;
      }
    );
    try {
      for (; ; ) {
        const ie = l.destroyed ? null : l.read();
        if (ie !== null)
          yield ie;
        else {
          if (N)
            throw N;
          if (N === null)
            return;
          await new f(v);
        }
      }
    } catch (ie) {
      throw N = B(N, ie), N;
    } finally {
      (N || (d == null ? void 0 : d.destroyOnReturn) !== !1) && (N === void 0 || l._readableState.autoDestroy) ? T.destroyer(l, null) : (l.off("readable", v), re());
    }
  }
  a(F.prototype, {
    readable: {
      __proto__: null,
      get() {
        const l = this._readableState;
        return !!l && l.readable !== !1 && !l.destroyed && !l.errorEmitted && !l.endEmitted;
      },
      set(l) {
        this._readableState && (this._readableState.readable = !!l);
      }
    },
    readableDidRead: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.dataEmitted;
      }
    },
    readableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._readableState.readable !== !1 && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
      }
    },
    readableHighWaterMark: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.highWaterMark;
      }
    },
    readableBuffer: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState && this._readableState.buffer;
      }
    },
    readableFlowing: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.flowing;
      },
      set: function(l) {
        this._readableState && (this._readableState.flowing = l);
      }
    },
    readableLength: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState.length;
      }
    },
    readableObjectMode: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.objectMode : !1;
      }
    },
    readableEncoding: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.encoding : null;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.errored : null;
      }
    },
    closed: {
      __proto__: null,
      get() {
        return this._readableState ? this._readableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.destroyed : !1;
      },
      set(l) {
        this._readableState && (this._readableState.destroyed = l);
      }
    },
    readableEnded: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.endEmitted : !1;
      }
    }
  }), a(fe.prototype, {
    // Legacy getter for `pipesCount`.
    pipesCount: {
      __proto__: null,
      get() {
        return this.pipes.length;
      }
    },
    // Legacy property for `paused`.
    paused: {
      __proto__: null,
      get() {
        return this[W] !== !1;
      },
      set(l) {
        this[W] = !!l;
      }
    }
  }), F._fromList = Xt;
  function Xt(l, d) {
    if (d.length === 0)
      return null;
    let m;
    return d.objectMode ? m = d.buffer.shift() : !l || l >= d.length ? (d.decoder ? m = d.buffer.join("") : d.buffer.length === 1 ? m = d.buffer.first() : m = d.buffer.concat(d.length), d.buffer.clear()) : m = d.buffer.consume(l, d.decoder), m;
  }
  function ct(l) {
    const d = l._readableState;
    g("endReadable", d.endEmitted), d.endEmitted || (d.ended = !0, e.nextTick(xn, d, l));
  }
  function xn(l, d) {
    if (g("endReadableNT", l.endEmitted, l.length), !l.errored && !l.closeEmitted && !l.endEmitted && l.length === 0) {
      if (l.endEmitted = !0, d.emit("end"), d.writable && d.allowHalfOpen === !1)
        e.nextTick(kn, d);
      else if (l.autoDestroy) {
        const m = d._writableState;
        (!m || m.autoDestroy && // We don't expect the writable to ever 'finish'
        // if writable is explicitly set to false.
        (m.finished || m.writable === !1)) && d.destroy();
      }
    }
  }
  function kn(l) {
    l.writable && !l.writableEnded && !l.destroyed && l.end();
  }
  F.from = function(l, d) {
    return Z(F, l, d);
  };
  let ht;
  function Qt() {
    return ht === void 0 && (ht = {}), ht;
  }
  return F.fromWeb = function(l, d) {
    return Qt().newStreamReadableFromReadableStream(l, d);
  }, F.toWeb = function(l, d) {
    return Qt().newReadableStreamFromStreamReadable(l, d);
  }, F.wrap = function(l, d) {
    var m, v;
    return new F({
      objectMode: (m = (v = l.readableObjectMode) !== null && v !== void 0 ? v : l.objectMode) !== null && m !== void 0 ? m : !0,
      ...d,
      destroy(N, re) {
        T.destroyer(l, N), re(N);
      }
    }).wrap(l);
  }, Wn;
}
var Bn, Uo;
function Xi() {
  if (Uo)
    return Bn;
  Uo = 1;
  const e = Ae, {
    ArrayPrototypeSlice: t,
    Error: r,
    FunctionPrototypeSymbolHasInstance: n,
    ObjectDefineProperty: o,
    ObjectDefineProperties: a,
    ObjectSetPrototypeOf: i,
    StringPrototypeToLowerCase: s,
    Symbol: f,
    SymbolHasInstance: u
  } = ae;
  Bn = V, V.WritableState = E;
  const { EventEmitter: h } = lt, w = zi.Stream, { Buffer: b } = ye, c = Bt, { addAbortSignal: S } = qr, { getHighWaterMark: _, getDefaultHighWaterMark: R } = Yr, {
    ERR_INVALID_ARG_TYPE: C,
    ERR_METHOD_NOT_IMPLEMENTED: L,
    ERR_MULTIPLE_CALLBACK: g,
    ERR_STREAM_CANNOT_PIPE: G,
    ERR_STREAM_DESTROYED: T,
    ERR_STREAM_ALREADY_FINISHED: D,
    ERR_STREAM_NULL_VALUES: H,
    ERR_STREAM_WRITE_AFTER_END: B,
    ERR_UNKNOWN_ENCODING: I
  } = Ie.codes, { errorOrDestroy: O } = c;
  i(V.prototype, w.prototype), i(V, w);
  function U() {
  }
  const k = f("kOnFinished");
  function E(y, p, A) {
    typeof A != "boolean" && (A = p instanceof Qe()), this.objectMode = !!(y && y.objectMode), A && (this.objectMode = this.objectMode || !!(y && y.writableObjectMode)), this.highWaterMark = y ? _(this, y, "writableHighWaterMark", A) : R(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    const $ = !!(y && y.decodeStrings === !1);
    this.decodeStrings = !$, this.defaultEncoding = y && y.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = ee.bind(void 0, p), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, x(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !y || y.emitClose !== !1, this.autoDestroy = !y || y.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[k] = [];
  }
  function x(y) {
    y.buffered = [], y.bufferedIndex = 0, y.allBuffers = !0, y.allNoop = !0;
  }
  E.prototype.getBuffer = function() {
    return t(this.buffered, this.bufferedIndex);
  }, o(E.prototype, "bufferedRequestCount", {
    __proto__: null,
    get() {
      return this.buffered.length - this.bufferedIndex;
    }
  });
  function V(y) {
    const p = this instanceof Qe();
    if (!p && !n(V, this))
      return new V(y);
    this._writableState = new E(y, this, p), y && (typeof y.write == "function" && (this._write = y.write), typeof y.writev == "function" && (this._writev = y.writev), typeof y.destroy == "function" && (this._destroy = y.destroy), typeof y.final == "function" && (this._final = y.final), typeof y.construct == "function" && (this._construct = y.construct), y.signal && S(y.signal, this)), w.call(this, y), c.construct(this, () => {
      const A = this._writableState;
      A.writing || te(this, A), Ce(this, A);
    });
  }
  o(V, u, {
    __proto__: null,
    value: function(y) {
      return n(this, y) ? !0 : this !== V ? !1 : y && y._writableState instanceof E;
    }
  }), V.prototype.pipe = function() {
    O(this, new G());
  };
  function W(y, p, A, $) {
    const P = y._writableState;
    if (typeof A == "function")
      $ = A, A = P.defaultEncoding;
    else {
      if (!A)
        A = P.defaultEncoding;
      else if (A !== "buffer" && !b.isEncoding(A))
        throw new I(A);
      typeof $ != "function" && ($ = U);
    }
    if (p === null)
      throw new H();
    if (!P.objectMode)
      if (typeof p == "string")
        P.decodeStrings !== !1 && (p = b.from(p, A), A = "buffer");
      else if (p instanceof b)
        A = "buffer";
      else if (w._isUint8Array(p))
        p = w._uint8ArrayToBuffer(p), A = "buffer";
      else
        throw new C("chunk", ["string", "Buffer", "Uint8Array"], p);
    let q;
    return P.ending ? q = new B() : P.destroyed && (q = new T("write")), q ? (e.nextTick($, q), O(y, q, !0), q) : (P.pendingcb++, z(y, P, p, A, $));
  }
  V.prototype.write = function(y, p, A) {
    return W(this, y, p, A) === !0;
  }, V.prototype.cork = function() {
    this._writableState.corked++;
  }, V.prototype.uncork = function() {
    const y = this._writableState;
    y.corked && (y.corked--, y.writing || te(this, y));
  }, V.prototype.setDefaultEncoding = function(p) {
    if (typeof p == "string" && (p = s(p)), !b.isEncoding(p))
      throw new I(p);
    return this._writableState.defaultEncoding = p, this;
  };
  function z(y, p, A, $, P) {
    const q = p.objectMode ? 1 : A.length;
    p.length += q;
    const X = p.length < p.highWaterMark;
    return X || (p.needDrain = !0), p.writing || p.corked || p.errored || !p.constructed ? (p.buffered.push({
      chunk: A,
      encoding: $,
      callback: P
    }), p.allBuffers && $ !== "buffer" && (p.allBuffers = !1), p.allNoop && P !== U && (p.allNoop = !1)) : (p.writelen = q, p.writecb = P, p.writing = !0, p.sync = !0, y._write(A, $, p.onwrite), p.sync = !1), X && !p.errored && !p.destroyed;
  }
  function Z(y, p, A, $, P, q, X) {
    p.writelen = $, p.writecb = X, p.writing = !0, p.sync = !0, p.destroyed ? p.onwrite(new T("write")) : A ? y._writev(P, p.onwrite) : y._write(P, q, p.onwrite), p.sync = !1;
  }
  function Q(y, p, A, $) {
    --p.pendingcb, $(A), j(p), O(y, A);
  }
  function ee(y, p) {
    const A = y._writableState, $ = A.sync, P = A.writecb;
    if (typeof P != "function") {
      O(y, new g());
      return;
    }
    A.writing = !1, A.writecb = null, A.length -= A.writelen, A.writelen = 0, p ? (p.stack, A.errored || (A.errored = p), y._readableState && !y._readableState.errored && (y._readableState.errored = p), $ ? e.nextTick(Q, y, A, p, P) : Q(y, A, p, P)) : (A.buffered.length > A.bufferedIndex && te(y, A), $ ? A.afterWriteTickInfo !== null && A.afterWriteTickInfo.cb === P ? A.afterWriteTickInfo.count++ : (A.afterWriteTickInfo = {
      count: 1,
      cb: P,
      stream: y,
      state: A
    }, e.nextTick(K, A.afterWriteTickInfo)) : de(y, A, 1, P));
  }
  function K({ stream: y, state: p, count: A, cb: $ }) {
    return p.afterWriteTickInfo = null, de(y, p, A, $);
  }
  function de(y, p, A, $) {
    for (!p.ending && !y.destroyed && p.length === 0 && p.needDrain && (p.needDrain = !1, y.emit("drain")); A-- > 0; )
      p.pendingcb--, $();
    p.destroyed && j(p), Ce(y, p);
  }
  function j(y) {
    if (y.writing)
      return;
    for (let P = y.bufferedIndex; P < y.buffered.length; ++P) {
      var p;
      const { chunk: q, callback: X } = y.buffered[P], J = y.objectMode ? 1 : q.length;
      y.length -= J, X(
        (p = y.errored) !== null && p !== void 0 ? p : new T("write")
      );
    }
    const A = y[k].splice(0);
    for (let P = 0; P < A.length; P++) {
      var $;
      A[P](
        ($ = y.errored) !== null && $ !== void 0 ? $ : new T("end")
      );
    }
    x(y);
  }
  function te(y, p) {
    if (p.corked || p.bufferProcessing || p.destroyed || !p.constructed)
      return;
    const { buffered: A, bufferedIndex: $, objectMode: P } = p, q = A.length - $;
    if (!q)
      return;
    let X = $;
    if (p.bufferProcessing = !0, q > 1 && y._writev) {
      p.pendingcb -= q - 1;
      const J = p.allNoop ? U : (F) => {
        for (let ce = X; ce < A.length; ++ce)
          A[ce].callback(F);
      }, fe = p.allNoop && X === 0 ? A : t(A, X);
      fe.allBuffers = p.allBuffers, Z(y, p, !0, p.length, fe, "", J), x(p);
    } else {
      do {
        const { chunk: J, encoding: fe, callback: F } = A[X];
        A[X++] = null;
        const ce = P ? 1 : J.length;
        Z(y, p, !1, ce, J, fe, F);
      } while (X < A.length && !p.writing);
      X === A.length ? x(p) : X > 256 ? (A.splice(0, X), p.bufferedIndex = 0) : p.bufferedIndex = X;
    }
    p.bufferProcessing = !1;
  }
  V.prototype._write = function(y, p, A) {
    if (this._writev)
      this._writev(
        [
          {
            chunk: y,
            encoding: p
          }
        ],
        A
      );
    else
      throw new L("_write()");
  }, V.prototype._writev = null, V.prototype.end = function(y, p, A) {
    const $ = this._writableState;
    typeof y == "function" ? (A = y, y = null, p = null) : typeof p == "function" && (A = p, p = null);
    let P;
    if (y != null) {
      const q = W(this, y, p);
      q instanceof r && (P = q);
    }
    return $.corked && ($.corked = 1, this.uncork()), P || (!$.errored && !$.ending ? ($.ending = !0, Ce(this, $, !0), $.ended = !0) : $.finished ? P = new D("end") : $.destroyed && (P = new T("end"))), typeof A == "function" && (P || $.finished ? e.nextTick(A, P) : $[k].push(A)), this;
  };
  function se(y) {
    return y.ending && !y.destroyed && y.constructed && y.length === 0 && !y.errored && y.buffered.length === 0 && !y.finished && !y.writing && !y.errorEmitted && !y.closeEmitted;
  }
  function ve(y, p) {
    let A = !1;
    function $(P) {
      if (A) {
        O(y, P ?? g());
        return;
      }
      if (A = !0, p.pendingcb--, P) {
        const q = p[k].splice(0);
        for (let X = 0; X < q.length; X++)
          q[X](P);
        O(y, P, p.sync);
      } else
        se(p) && (p.prefinished = !0, y.emit("prefinish"), p.pendingcb++, e.nextTick(Pe, y, p));
    }
    p.sync = !0, p.pendingcb++;
    try {
      y._final($);
    } catch (P) {
      $(P);
    }
    p.sync = !1;
  }
  function Te(y, p) {
    !p.prefinished && !p.finalCalled && (typeof y._final == "function" && !p.destroyed ? (p.finalCalled = !0, ve(y, p)) : (p.prefinished = !0, y.emit("prefinish")));
  }
  function Ce(y, p, A) {
    se(p) && (Te(y, p), p.pendingcb === 0 && (A ? (p.pendingcb++, e.nextTick(
      ($, P) => {
        se(P) ? Pe($, P) : P.pendingcb--;
      },
      y,
      p
    )) : se(p) && (p.pendingcb++, Pe(y, p))));
  }
  function Pe(y, p) {
    p.pendingcb--, p.finished = !0;
    const A = p[k].splice(0);
    for (let $ = 0; $ < A.length; $++)
      A[$]();
    if (y.emit("finish"), p.autoDestroy) {
      const $ = y._readableState;
      (!$ || $.autoDestroy && // We don't expect the readable to ever 'end'
      // if readable is explicitly set to false.
      ($.endEmitted || $.readable === !1)) && y.destroy();
    }
  }
  a(V.prototype, {
    closed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.destroyed : !1;
      },
      set(y) {
        this._writableState && (this._writableState.destroyed = y);
      }
    },
    writable: {
      __proto__: null,
      get() {
        const y = this._writableState;
        return !!y && y.writable !== !1 && !y.destroyed && !y.errored && !y.ending && !y.ended;
      },
      set(y) {
        this._writableState && (this._writableState.writable = !!y);
      }
    },
    writableFinished: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.finished : !1;
      }
    },
    writableObjectMode: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.objectMode : !1;
      }
    },
    writableBuffer: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.getBuffer();
      }
    },
    writableEnded: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.ending : !1;
      }
    },
    writableNeedDrain: {
      __proto__: null,
      get() {
        const y = this._writableState;
        return y ? !y.destroyed && !y.ending && y.needDrain : !1;
      }
    },
    writableHighWaterMark: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.highWaterMark;
      }
    },
    writableCorked: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.corked : 0;
      }
    },
    writableLength: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.length;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._writableState ? this._writableState.errored : null;
      }
    },
    writableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._writableState.writable !== !1 && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
      }
    }
  });
  const ft = c.destroy;
  V.prototype.destroy = function(y, p) {
    const A = this._writableState;
    return !A.destroyed && (A.bufferedIndex < A.buffered.length || A[k].length) && e.nextTick(j, A), ft.call(this, y, p), this;
  }, V.prototype._undestroy = c.undestroy, V.prototype._destroy = function(y, p) {
    p(y);
  }, V.prototype[h.captureRejectionSymbol] = function(y) {
    this.destroy(y);
  };
  let Le;
  function Ne() {
    return Le === void 0 && (Le = {}), Le;
  }
  return V.fromWeb = function(y, p) {
    return Ne().newStreamWritableFromWritableStream(y, p);
  }, V.toWeb = function(y) {
    return Ne().newWritableStreamFromStreamWritable(y);
  }, Bn;
}
var Hn, Wo;
function wu() {
  if (Wo)
    return Hn;
  Wo = 1;
  const e = Ae, t = ye, {
    isReadable: r,
    isWritable: n,
    isIterable: o,
    isNodeStream: a,
    isReadableNodeStream: i,
    isWritableNodeStream: s,
    isDuplexNodeStream: f,
    isReadableStream: u,
    isWritableStream: h
  } = rt, w = st, {
    AbortError: b,
    codes: { ERR_INVALID_ARG_TYPE: c, ERR_INVALID_RETURN_VALUE: S }
  } = Ie, { destroyer: _ } = Bt, R = Qe(), C = zr(), L = Xi(), { createDeferredPromise: g } = Se, G = Wl, T = globalThis.Blob || t.Blob, D = typeof T < "u" ? function(E) {
    return E instanceof T;
  } : function(E) {
    return !1;
  }, H = globalThis.AbortController || Ue().AbortController, { FunctionPrototypeCall: B } = ae;
  class I extends R {
    constructor(E) {
      super(E), (E == null ? void 0 : E.readable) === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), (E == null ? void 0 : E.writable) === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
    }
  }
  Hn = function k(E, x) {
    if (f(E))
      return E;
    if (i(E))
      return U({
        readable: E
      });
    if (s(E))
      return U({
        writable: E
      });
    if (a(E))
      return U({
        writable: !1,
        readable: !1
      });
    if (u(E))
      return U({
        readable: C.fromWeb(E)
      });
    if (h(E))
      return U({
        writable: L.fromWeb(E)
      });
    if (typeof E == "function") {
      const { value: W, write: z, final: Z, destroy: Q } = O(E);
      if (o(W))
        return G(I, W, {
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          write: z,
          final: Z,
          destroy: Q
        });
      const ee = W == null ? void 0 : W.then;
      if (typeof ee == "function") {
        let K;
        const de = B(
          ee,
          W,
          (j) => {
            if (j != null)
              throw new S("nully", "body", j);
          },
          (j) => {
            _(K, j);
          }
        );
        return K = new I({
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          readable: !1,
          write: z,
          final(j) {
            Z(async () => {
              try {
                await de, e.nextTick(j, null);
              } catch (te) {
                e.nextTick(j, te);
              }
            });
          },
          destroy: Q
        });
      }
      throw new S("Iterable, AsyncIterable or AsyncFunction", x, W);
    }
    if (D(E))
      return k(E.arrayBuffer());
    if (o(E))
      return G(I, E, {
        // TODO (ronag): highWaterMark?
        objectMode: !0,
        writable: !1
      });
    if (u(E == null ? void 0 : E.readable) && h(E == null ? void 0 : E.writable))
      return I.fromWeb(E);
    if (typeof (E == null ? void 0 : E.writable) == "object" || typeof (E == null ? void 0 : E.readable) == "object") {
      const W = E != null && E.readable ? i(E == null ? void 0 : E.readable) ? E == null ? void 0 : E.readable : k(E.readable) : void 0, z = E != null && E.writable ? s(E == null ? void 0 : E.writable) ? E == null ? void 0 : E.writable : k(E.writable) : void 0;
      return U({
        readable: W,
        writable: z
      });
    }
    const V = E == null ? void 0 : E.then;
    if (typeof V == "function") {
      let W;
      return B(
        V,
        E,
        (z) => {
          z != null && W.push(z), W.push(null);
        },
        (z) => {
          _(W, z);
        }
      ), W = new I({
        objectMode: !0,
        writable: !1,
        read() {
        }
      });
    }
    throw new c(
      x,
      [
        "Blob",
        "ReadableStream",
        "WritableStream",
        "Stream",
        "Iterable",
        "AsyncIterable",
        "Function",
        "{ readable, writable } pair",
        "Promise"
      ],
      E
    );
  };
  function O(k) {
    let { promise: E, resolve: x } = g();
    const V = new H(), W = V.signal;
    return {
      value: k(
        async function* () {
          for (; ; ) {
            const Z = E;
            E = null;
            const { chunk: Q, done: ee, cb: K } = await Z;
            if (e.nextTick(K), ee)
              return;
            if (W.aborted)
              throw new b(void 0, {
                cause: W.reason
              });
            ({ promise: E, resolve: x } = g()), yield Q;
          }
        }(),
        {
          signal: W
        }
      ),
      write(Z, Q, ee) {
        const K = x;
        x = null, K({
          chunk: Z,
          done: !1,
          cb: ee
        });
      },
      final(Z) {
        const Q = x;
        x = null, Q({
          done: !0,
          cb: Z
        });
      },
      destroy(Z, Q) {
        V.abort(), Q(Z);
      }
    };
  }
  function U(k) {
    const E = k.readable && typeof k.readable.read != "function" ? C.wrap(k.readable) : k.readable, x = k.writable;
    let V = !!r(E), W = !!n(x), z, Z, Q, ee, K;
    function de(j) {
      const te = ee;
      ee = null, te ? te(j) : j && K.destroy(j);
    }
    return K = new I({
      // TODO (ronag): highWaterMark?
      readableObjectMode: !!(E != null && E.readableObjectMode),
      writableObjectMode: !!(x != null && x.writableObjectMode),
      readable: V,
      writable: W
    }), W && (w(x, (j) => {
      W = !1, j && _(E, j), de(j);
    }), K._write = function(j, te, se) {
      x.write(j, te) ? se() : z = se;
    }, K._final = function(j) {
      x.end(), Z = j;
    }, x.on("drain", function() {
      if (z) {
        const j = z;
        z = null, j();
      }
    }), x.on("finish", function() {
      if (Z) {
        const j = Z;
        Z = null, j();
      }
    })), V && (w(E, (j) => {
      V = !1, j && _(E, j), de(j);
    }), E.on("readable", function() {
      if (Q) {
        const j = Q;
        Q = null, j();
      }
    }), E.on("end", function() {
      K.push(null);
    }), K._read = function() {
      for (; ; ) {
        const j = E.read();
        if (j === null) {
          Q = K._read;
          return;
        }
        if (!K.push(j))
          return;
      }
    }), K._destroy = function(j, te) {
      !j && ee !== null && (j = new b()), Q = null, z = null, Z = null, ee === null ? te(j) : (ee = te, _(x, j), _(E, j));
    }, K;
  }
  return Hn;
}
var Gn, Bo;
function Qe() {
  if (Bo)
    return Gn;
  Bo = 1;
  const {
    ObjectDefineProperties: e,
    ObjectGetOwnPropertyDescriptor: t,
    ObjectKeys: r,
    ObjectSetPrototypeOf: n
  } = ae;
  Gn = i;
  const o = zr(), a = Xi();
  n(i.prototype, o.prototype), n(i, o);
  {
    const h = r(a.prototype);
    for (let w = 0; w < h.length; w++) {
      const b = h[w];
      i.prototype[b] || (i.prototype[b] = a.prototype[b]);
    }
  }
  function i(h) {
    if (!(this instanceof i))
      return new i(h);
    o.call(this, h), a.call(this, h), h ? (this.allowHalfOpen = h.allowHalfOpen !== !1, h.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), h.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
  }
  e(i.prototype, {
    writable: {
      __proto__: null,
      ...t(a.prototype, "writable")
    },
    writableHighWaterMark: {
      __proto__: null,
      ...t(a.prototype, "writableHighWaterMark")
    },
    writableObjectMode: {
      __proto__: null,
      ...t(a.prototype, "writableObjectMode")
    },
    writableBuffer: {
      __proto__: null,
      ...t(a.prototype, "writableBuffer")
    },
    writableLength: {
      __proto__: null,
      ...t(a.prototype, "writableLength")
    },
    writableFinished: {
      __proto__: null,
      ...t(a.prototype, "writableFinished")
    },
    writableCorked: {
      __proto__: null,
      ...t(a.prototype, "writableCorked")
    },
    writableEnded: {
      __proto__: null,
      ...t(a.prototype, "writableEnded")
    },
    writableNeedDrain: {
      __proto__: null,
      ...t(a.prototype, "writableNeedDrain")
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
      },
      set(h) {
        this._readableState && this._writableState && (this._readableState.destroyed = h, this._writableState.destroyed = h);
      }
    }
  });
  let s;
  function f() {
    return s === void 0 && (s = {}), s;
  }
  i.fromWeb = function(h, w) {
    return f().newStreamDuplexFromReadableWritablePair(h, w);
  }, i.toWeb = function(h) {
    return f().newReadableWritablePairFromDuplex(h);
  };
  let u;
  return i.from = function(h) {
    return u || (u = wu()), u(h, "body");
  }, Gn;
}
const { ObjectSetPrototypeOf: Bl, Symbol: gu } = ae;
var Hl = Ze;
const { ERR_METHOD_NOT_IMPLEMENTED: Eu } = Ie.codes, Qi = Qe(), { getHighWaterMark: Su } = Yr;
Bl(Ze.prototype, Qi.prototype);
Bl(Ze, Qi);
const hr = gu("kCallback");
function Ze(e) {
  if (!(this instanceof Ze))
    return new Ze(e);
  const t = e ? Su(this, e, "readableHighWaterMark", !0) : null;
  t === 0 && (e = {
    ...e,
    highWaterMark: null,
    readableHighWaterMark: t,
    // TODO (ronag): 0 is not optimal since we have
    // a "bug" where we check needDrain before calling _write and not after.
    // Refs: https://github.com/nodejs/node/pull/32887
    // Refs: https://github.com/nodejs/node/pull/35941
    writableHighWaterMark: e.writableHighWaterMark || 0
  }), Qi.call(this, e), this._readableState.sync = !1, this[hr] = null, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", Ru);
}
function Ni(e) {
  typeof this._flush == "function" && !this.destroyed ? this._flush((t, r) => {
    if (t) {
      e ? e(t) : this.destroy(t);
      return;
    }
    r != null && this.push(r), this.push(null), e && e();
  }) : (this.push(null), e && e());
}
function Ru() {
  this._final !== Ni && Ni.call(this);
}
Ze.prototype._final = Ni;
Ze.prototype._transform = function(e, t, r) {
  throw new Eu("_transform()");
};
Ze.prototype._write = function(e, t, r) {
  const n = this._readableState, o = this._writableState, a = n.length;
  this._transform(e, t, (i, s) => {
    if (i) {
      r(i);
      return;
    }
    s != null && this.push(s), o.ended || // Backwards compat.
    a === n.length || // Backwards compat.
    n.length < n.highWaterMark ? r() : this[hr] = r;
  });
};
Ze.prototype._read = function() {
  if (this[hr]) {
    const e = this[hr];
    this[hr] = null, e();
  }
};
const { ObjectSetPrototypeOf: Gl } = ae;
var Kl = jt;
const Zi = Hl;
Gl(jt.prototype, Zi.prototype);
Gl(jt, Zi);
function jt(e) {
  if (!(this instanceof jt))
    return new jt(e);
  Zi.call(this, e);
}
jt.prototype._transform = function(e, t, r) {
  r(null, e);
};
const ur = Ae, { ArrayIsArray: Au, Promise: Iu, SymbolAsyncIterator: mu, SymbolDispose: vu } = ae, xr = st, { once: Tu } = Se, Cu = Bt, Ho = Qe(), {
  aggregateTwoErrors: Nu,
  codes: {
    ERR_INVALID_ARG_TYPE: Oi,
    ERR_INVALID_RETURN_VALUE: Kn,
    ERR_MISSING_ARGS: Ou,
    ERR_STREAM_DESTROYED: Du,
    ERR_STREAM_PREMATURE_CLOSE: $u
  },
  AbortError: Pu
} = Ie, { validateFunction: Lu, validateAbortSignal: xu } = _r, {
  isIterable: gt,
  isReadable: Jn,
  isReadableNodeStream: $r,
  isNodeStream: Go,
  isTransformStream: Pt,
  isWebStream: ku,
  isReadableStream: qn,
  isReadableFinished: Mu
} = rt, ju = globalThis.AbortController || Ue().AbortController;
let Yn, zn, Xn;
function Ko(e, t, r) {
  let n = !1;
  e.on("close", () => {
    n = !0;
  });
  const o = xr(
    e,
    {
      readable: t,
      writable: r
    },
    (a) => {
      n = !a;
    }
  );
  return {
    destroy: (a) => {
      n || (n = !0, Cu.destroyer(e, a || new Du("pipe")));
    },
    cleanup: o
  };
}
function Vu(e) {
  return Lu(e[e.length - 1], "streams[stream.length - 1]"), e.pop();
}
function Qn(e) {
  if (gt(e))
    return e;
  if ($r(e))
    return Fu(e);
  throw new Oi("val", ["Readable", "Iterable", "AsyncIterable"], e);
}
async function* Fu(e) {
  zn || (zn = zr()), yield* zn.prototype[mu].call(e);
}
async function Rr(e, t, r, { end: n }) {
  let o, a = null;
  const i = (u) => {
    if (u && (o = u), a) {
      const h = a;
      a = null, h();
    }
  }, s = () => new Iu((u, h) => {
    o ? h(o) : a = () => {
      o ? h(o) : u();
    };
  });
  t.on("drain", i);
  const f = xr(
    t,
    {
      readable: !1
    },
    i
  );
  try {
    t.writableNeedDrain && await s();
    for await (const u of e)
      t.write(u) || await s();
    n && (t.end(), await s()), r();
  } catch (u) {
    r(o !== u ? Nu(o, u) : u);
  } finally {
    f(), t.off("drain", i);
  }
}
async function Zn(e, t, r, { end: n }) {
  Pt(t) && (t = t.writable);
  const o = t.getWriter();
  try {
    for await (const a of e)
      await o.ready, o.write(a).catch(() => {
      });
    await o.ready, n && await o.close(), r();
  } catch (a) {
    try {
      await o.abort(a), r(a);
    } catch (i) {
      r(i);
    }
  }
}
function Uu(...e) {
  return Jl(e, Tu(Vu(e)));
}
function Jl(e, t, r) {
  if (e.length === 1 && Au(e[0]) && (e = e[0]), e.length < 2)
    throw new Ou("streams");
  const n = new ju(), o = n.signal, a = r == null ? void 0 : r.signal, i = [];
  xu(a, "options.signal");
  function s() {
    S(new Pu());
  }
  Xn = Xn || Se.addAbortListener;
  let f;
  a && (f = Xn(a, s));
  let u, h;
  const w = [];
  let b = 0;
  function c(L) {
    S(L, --b === 0);
  }
  function S(L, g) {
    var G;
    if (L && (!u || u.code === "ERR_STREAM_PREMATURE_CLOSE") && (u = L), !(!u && !g)) {
      for (; w.length; )
        w.shift()(u);
      (G = f) === null || G === void 0 || G[vu](), n.abort(), g && (u || i.forEach((T) => T()), ur.nextTick(t, u, h));
    }
  }
  let _;
  for (let L = 0; L < e.length; L++) {
    const g = e[L], G = L < e.length - 1, T = L > 0, D = G || (r == null ? void 0 : r.end) !== !1, H = L === e.length - 1;
    if (Go(g)) {
      let B = function(I) {
        I && I.name !== "AbortError" && I.code !== "ERR_STREAM_PREMATURE_CLOSE" && c(I);
      };
      if (D) {
        const { destroy: I, cleanup: O } = Ko(g, G, T);
        w.push(I), Jn(g) && H && i.push(O);
      }
      g.on("error", B), Jn(g) && H && i.push(() => {
        g.removeListener("error", B);
      });
    }
    if (L === 0)
      if (typeof g == "function") {
        if (_ = g({
          signal: o
        }), !gt(_))
          throw new Kn("Iterable, AsyncIterable or Stream", "source", _);
      } else
        gt(g) || $r(g) || Pt(g) ? _ = g : _ = Ho.from(g);
    else if (typeof g == "function") {
      if (Pt(_)) {
        var R;
        _ = Qn((R = _) === null || R === void 0 ? void 0 : R.readable);
      } else
        _ = Qn(_);
      if (_ = g(_, {
        signal: o
      }), G) {
        if (!gt(_, !0))
          throw new Kn("AsyncIterable", `transform[${L - 1}]`, _);
      } else {
        var C;
        Yn || (Yn = Kl);
        const B = new Yn({
          objectMode: !0
        }), I = (C = _) === null || C === void 0 ? void 0 : C.then;
        if (typeof I == "function")
          b++, I.call(
            _,
            (k) => {
              h = k, k != null && B.write(k), D && B.end(), ur.nextTick(c);
            },
            (k) => {
              B.destroy(k), ur.nextTick(c, k);
            }
          );
        else if (gt(_, !0))
          b++, Rr(_, B, c, {
            end: D
          });
        else if (qn(_) || Pt(_)) {
          const k = _.readable || _;
          b++, Rr(k, B, c, {
            end: D
          });
        } else
          throw new Kn("AsyncIterable or Promise", "destination", _);
        _ = B;
        const { destroy: O, cleanup: U } = Ko(_, !1, !0);
        w.push(O), H && i.push(U);
      }
    } else if (Go(g)) {
      if ($r(_)) {
        b += 2;
        const B = Wu(_, g, c, {
          end: D
        });
        Jn(g) && H && i.push(B);
      } else if (Pt(_) || qn(_)) {
        const B = _.readable || _;
        b++, Rr(B, g, c, {
          end: D
        });
      } else if (gt(_))
        b++, Rr(_, g, c, {
          end: D
        });
      else
        throw new Oi(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          _
        );
      _ = g;
    } else if (ku(g)) {
      if ($r(_))
        b++, Zn(Qn(_), g, c, {
          end: D
        });
      else if (qn(_) || gt(_))
        b++, Zn(_, g, c, {
          end: D
        });
      else if (Pt(_))
        b++, Zn(_.readable, g, c, {
          end: D
        });
      else
        throw new Oi(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          _
        );
      _ = g;
    } else
      _ = Ho.from(g);
  }
  return (o != null && o.aborted || a != null && a.aborted) && ur.nextTick(s), _;
}
function Wu(e, t, r, { end: n }) {
  let o = !1;
  if (t.on("close", () => {
    o || r(new $u());
  }), e.pipe(t, {
    end: !1
  }), n) {
    let a = function() {
      o = !0, t.end();
    };
    Mu(e) ? ur.nextTick(a) : e.once("end", a);
  } else
    r();
  return xr(
    e,
    {
      readable: !0,
      writable: !1
    },
    (a) => {
      const i = e._readableState;
      a && a.code === "ERR_STREAM_PREMATURE_CLOSE" && i && i.ended && !i.errored && !i.errorEmitted ? e.once("end", r).once("error", r) : r(a);
    }
  ), xr(
    t,
    {
      readable: !1,
      writable: !0
    },
    r
  );
}
var eo = {
  pipelineImpl: Jl,
  pipeline: Uu
};
const { pipeline: Bu } = eo, Ar = Qe(), { destroyer: Hu } = Bt, {
  isNodeStream: Ir,
  isReadable: Jo,
  isWritable: qo,
  isWebStream: ei,
  isTransformStream: _t,
  isWritableStream: Yo,
  isReadableStream: zo
} = rt, {
  AbortError: Gu,
  codes: { ERR_INVALID_ARG_VALUE: Xo, ERR_MISSING_ARGS: Ku }
} = Ie, Ju = st;
var ql = function(...t) {
  if (t.length === 0)
    throw new Ku("streams");
  if (t.length === 1)
    return Ar.from(t[0]);
  const r = [...t];
  if (typeof t[0] == "function" && (t[0] = Ar.from(t[0])), typeof t[t.length - 1] == "function") {
    const c = t.length - 1;
    t[c] = Ar.from(t[c]);
  }
  for (let c = 0; c < t.length; ++c)
    if (!(!Ir(t[c]) && !ei(t[c]))) {
      if (c < t.length - 1 && !(Jo(t[c]) || zo(t[c]) || _t(t[c])))
        throw new Xo(`streams[${c}]`, r[c], "must be readable");
      if (c > 0 && !(qo(t[c]) || Yo(t[c]) || _t(t[c])))
        throw new Xo(`streams[${c}]`, r[c], "must be writable");
    }
  let n, o, a, i, s;
  function f(c) {
    const S = i;
    i = null, S ? S(c) : c ? s.destroy(c) : !b && !w && s.destroy();
  }
  const u = t[0], h = Bu(t, f), w = !!(qo(u) || Yo(u) || _t(u)), b = !!(Jo(h) || zo(h) || _t(h));
  if (s = new Ar({
    // TODO (ronag): highWaterMark?
    writableObjectMode: !!(u != null && u.writableObjectMode),
    readableObjectMode: !!(h != null && h.readableObjectMode),
    writable: w,
    readable: b
  }), w) {
    if (Ir(u))
      s._write = function(S, _, R) {
        u.write(S, _) ? R() : n = R;
      }, s._final = function(S) {
        u.end(), o = S;
      }, u.on("drain", function() {
        if (n) {
          const S = n;
          n = null, S();
        }
      });
    else if (ei(u)) {
      const _ = (_t(u) ? u.writable : u).getWriter();
      s._write = async function(R, C, L) {
        try {
          await _.ready, _.write(R).catch(() => {
          }), L();
        } catch (g) {
          L(g);
        }
      }, s._final = async function(R) {
        try {
          await _.ready, _.close().catch(() => {
          }), o = R;
        } catch (C) {
          R(C);
        }
      };
    }
    const c = _t(h) ? h.readable : h;
    Ju(c, () => {
      if (o) {
        const S = o;
        o = null, S();
      }
    });
  }
  if (b) {
    if (Ir(h))
      h.on("readable", function() {
        if (a) {
          const c = a;
          a = null, c();
        }
      }), h.on("end", function() {
        s.push(null);
      }), s._read = function() {
        for (; ; ) {
          const c = h.read();
          if (c === null) {
            a = s._read;
            return;
          }
          if (!s.push(c))
            return;
        }
      };
    else if (ei(h)) {
      const S = (_t(h) ? h.readable : h).getReader();
      s._read = async function() {
        for (; ; )
          try {
            const { value: _, done: R } = await S.read();
            if (!s.push(_))
              return;
            if (R) {
              s.push(null);
              return;
            }
          } catch {
            return;
          }
      };
    }
  }
  return s._destroy = function(c, S) {
    !c && i !== null && (c = new Gu()), a = null, n = null, o = null, i === null ? S(c) : (i = S, Ir(h) && Hu(h, c));
  }, s;
};
const qu = globalThis.AbortController || Ue().AbortController, {
  codes: { ERR_INVALID_ARG_VALUE: Yu, ERR_INVALID_ARG_TYPE: wr, ERR_MISSING_ARGS: zu, ERR_OUT_OF_RANGE: Xu },
  AbortError: We
} = Ie, { validateAbortSignal: vt, validateInteger: Qo, validateObject: Tt } = _r, Qu = ae.Symbol("kWeak"), Zu = ae.Symbol("kResistStopPropagation"), { finished: ec } = st, tc = ql, { addAbortSignalNoValidate: rc } = qr, { isWritable: nc, isNodeStream: ic } = rt, { deprecate: oc } = Se, {
  ArrayPrototypePush: ac,
  Boolean: lc,
  MathFloor: Zo,
  Number: sc,
  NumberIsNaN: dc,
  Promise: ea,
  PromiseReject: ta,
  PromiseResolve: fc,
  PromisePrototypeThen: ra,
  Symbol: Yl
} = ae, kr = Yl("kEmpty"), na = Yl("kEof");
function uc(e, t) {
  if (t != null && Tt(t, "options"), (t == null ? void 0 : t.signal) != null && vt(t.signal, "options.signal"), ic(e) && !nc(e))
    throw new Yu("stream", e, "must be writable");
  const r = tc(this, e);
  return t != null && t.signal && rc(t.signal, r), r;
}
function Xr(e, t) {
  if (typeof e != "function")
    throw new wr("fn", ["Function", "AsyncFunction"], e);
  t != null && Tt(t, "options"), (t == null ? void 0 : t.signal) != null && vt(t.signal, "options.signal");
  let r = 1;
  (t == null ? void 0 : t.concurrency) != null && (r = Zo(t.concurrency));
  let n = r - 1;
  return (t == null ? void 0 : t.highWaterMark) != null && (n = Zo(t.highWaterMark)), Qo(r, "options.concurrency", 1), Qo(n, "options.highWaterMark", 0), n += r, (async function* () {
    const a = Se.AbortSignalAny(
      [t == null ? void 0 : t.signal].filter(lc)
    ), i = this, s = [], f = {
      signal: a
    };
    let u, h, w = !1, b = 0;
    function c() {
      w = !0, S();
    }
    function S() {
      b -= 1, _();
    }
    function _() {
      h && !w && b < r && s.length < n && (h(), h = null);
    }
    async function R() {
      try {
        for await (let C of i) {
          if (w)
            return;
          if (a.aborted)
            throw new We();
          try {
            if (C = e(C, f), C === kr)
              continue;
            C = fc(C);
          } catch (L) {
            C = ta(L);
          }
          b += 1, ra(C, S, c), s.push(C), u && (u(), u = null), !w && (s.length >= n || b >= r) && await new ea((L) => {
            h = L;
          });
        }
        s.push(na);
      } catch (C) {
        const L = ta(C);
        ra(L, S, c), s.push(L);
      } finally {
        w = !0, u && (u(), u = null);
      }
    }
    R();
    try {
      for (; ; ) {
        for (; s.length > 0; ) {
          const C = await s[0];
          if (C === na)
            return;
          if (a.aborted)
            throw new We();
          C !== kr && (yield C), s.shift(), _();
        }
        await new ea((C) => {
          u = C;
        });
      }
    } finally {
      w = !0, h && (h(), h = null);
    }
  }).call(this);
}
function cc(e = void 0) {
  return e != null && Tt(e, "options"), (e == null ? void 0 : e.signal) != null && vt(e.signal, "options.signal"), (async function* () {
    let r = 0;
    for await (const o of this) {
      var n;
      if (e != null && (n = e.signal) !== null && n !== void 0 && n.aborted)
        throw new We({
          cause: e.signal.reason
        });
      yield [r++, o];
    }
  }).call(this);
}
async function zl(e, t = void 0) {
  for await (const r of to.call(this, e, t))
    return !0;
  return !1;
}
async function hc(e, t = void 0) {
  if (typeof e != "function")
    throw new wr("fn", ["Function", "AsyncFunction"], e);
  return !await zl.call(
    this,
    async (...r) => !await e(...r),
    t
  );
}
async function bc(e, t) {
  for await (const r of to.call(this, e, t))
    return r;
}
async function yc(e, t) {
  if (typeof e != "function")
    throw new wr("fn", ["Function", "AsyncFunction"], e);
  async function r(n, o) {
    return await e(n, o), kr;
  }
  for await (const n of Xr.call(this, r, t))
    ;
}
function to(e, t) {
  if (typeof e != "function")
    throw new wr("fn", ["Function", "AsyncFunction"], e);
  async function r(n, o) {
    return await e(n, o) ? n : kr;
  }
  return Xr.call(this, r, t);
}
let pc = class extends zu {
  constructor() {
    super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
  }
};
async function _c(e, t, r) {
  var n;
  if (typeof e != "function")
    throw new wr("reducer", ["Function", "AsyncFunction"], e);
  r != null && Tt(r, "options"), (r == null ? void 0 : r.signal) != null && vt(r.signal, "options.signal");
  let o = arguments.length > 1;
  if (r != null && (n = r.signal) !== null && n !== void 0 && n.aborted) {
    const u = new We(void 0, {
      cause: r.signal.reason
    });
    throw this.once("error", () => {
    }), await ec(this.destroy(u)), u;
  }
  const a = new qu(), i = a.signal;
  if (r != null && r.signal) {
    const u = {
      once: !0,
      [Qu]: this,
      [Zu]: !0
    };
    r.signal.addEventListener("abort", () => a.abort(), u);
  }
  let s = !1;
  try {
    for await (const u of this) {
      var f;
      if (s = !0, r != null && (f = r.signal) !== null && f !== void 0 && f.aborted)
        throw new We();
      o ? t = await e(t, u, {
        signal: i
      }) : (t = u, o = !0);
    }
    if (!s && !o)
      throw new pc();
  } finally {
    a.abort();
  }
  return t;
}
async function wc(e) {
  e != null && Tt(e, "options"), (e == null ? void 0 : e.signal) != null && vt(e.signal, "options.signal");
  const t = [];
  for await (const n of this) {
    var r;
    if (e != null && (r = e.signal) !== null && r !== void 0 && r.aborted)
      throw new We(void 0, {
        cause: e.signal.reason
      });
    ac(t, n);
  }
  return t;
}
function gc(e, t) {
  const r = Xr.call(this, e, t);
  return (async function* () {
    for await (const o of r)
      yield* o;
  }).call(this);
}
function Xl(e) {
  if (e = sc(e), dc(e))
    return 0;
  if (e < 0)
    throw new Xu("number", ">= 0", e);
  return e;
}
function Ec(e, t = void 0) {
  return t != null && Tt(t, "options"), (t == null ? void 0 : t.signal) != null && vt(t.signal, "options.signal"), e = Xl(e), (async function* () {
    var n;
    if (t != null && (n = t.signal) !== null && n !== void 0 && n.aborted)
      throw new We();
    for await (const a of this) {
      var o;
      if (t != null && (o = t.signal) !== null && o !== void 0 && o.aborted)
        throw new We();
      e-- <= 0 && (yield a);
    }
  }).call(this);
}
function Sc(e, t = void 0) {
  return t != null && Tt(t, "options"), (t == null ? void 0 : t.signal) != null && vt(t.signal, "options.signal"), e = Xl(e), (async function* () {
    var n;
    if (t != null && (n = t.signal) !== null && n !== void 0 && n.aborted)
      throw new We();
    for await (const a of this) {
      var o;
      if (t != null && (o = t.signal) !== null && o !== void 0 && o.aborted)
        throw new We();
      if (e-- > 0 && (yield a), e <= 0)
        return;
    }
  }).call(this);
}
Gi.streamReturningOperators = {
  asIndexedPairs: oc(cc, "readable.asIndexedPairs will be removed in a future version."),
  drop: Ec,
  filter: to,
  flatMap: gc,
  map: Xr,
  take: Sc,
  compose: uc
};
Gi.promiseReturningOperators = {
  every: hc,
  forEach: yc,
  reduce: _c,
  toArray: wc,
  some: zl,
  find: bc
};
var ti, ia;
function Ql() {
  if (ia)
    return ti;
  ia = 1;
  const { ArrayPrototypePop: e, Promise: t } = ae, { isIterable: r, isNodeStream: n, isWebStream: o } = rt, { pipelineImpl: a } = eo, { finished: i } = st;
  Zl();
  function s(...f) {
    return new t((u, h) => {
      let w, b;
      const c = f[f.length - 1];
      if (c && typeof c == "object" && !n(c) && !r(c) && !o(c)) {
        const S = e(f);
        w = S.signal, b = S.end;
      }
      a(
        f,
        (S, _) => {
          S ? h(S) : u(_);
        },
        {
          signal: w,
          end: b
        }
      );
    });
  }
  return ti = {
    finished: i,
    pipeline: s
  }, ti;
}
var oa;
function Zl() {
  if (oa)
    return jn.exports;
  oa = 1;
  const { Buffer: e } = ye, { ObjectDefineProperty: t, ObjectKeys: r, ReflectApply: n } = ae, {
    promisify: { custom: o }
  } = Se, { streamReturningOperators: a, promiseReturningOperators: i } = Gi, {
    codes: { ERR_ILLEGAL_CONSTRUCTOR: s }
  } = Ie, f = ql, { setDefaultHighWaterMark: u, getDefaultHighWaterMark: h } = Yr, { pipeline: w } = eo, { destroyer: b } = Bt, c = st, S = Ql(), _ = rt, R = jn.exports = zi.Stream;
  R.isDestroyed = _.isDestroyed, R.isDisturbed = _.isDisturbed, R.isErrored = _.isErrored, R.isReadable = _.isReadable, R.isWritable = _.isWritable, R.Readable = zr();
  for (const L of r(a)) {
    let G = function(...T) {
      if (new.target)
        throw s();
      return R.Readable.from(n(g, this, T));
    };
    const g = a[L];
    t(G, "name", {
      __proto__: null,
      value: g.name
    }), t(G, "length", {
      __proto__: null,
      value: g.length
    }), t(R.Readable.prototype, L, {
      __proto__: null,
      value: G,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  for (const L of r(i)) {
    let G = function(...T) {
      if (new.target)
        throw s();
      return n(g, this, T);
    };
    const g = i[L];
    t(G, "name", {
      __proto__: null,
      value: g.name
    }), t(G, "length", {
      __proto__: null,
      value: g.length
    }), t(R.Readable.prototype, L, {
      __proto__: null,
      value: G,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  R.Writable = Xi(), R.Duplex = Qe(), R.Transform = Hl, R.PassThrough = Kl, R.pipeline = w;
  const { addAbortSignal: C } = qr;
  return R.addAbortSignal = C, R.finished = c, R.destroy = b, R.compose = f, R.setDefaultHighWaterMark = u, R.getDefaultHighWaterMark = h, t(R, "promises", {
    __proto__: null,
    configurable: !0,
    enumerable: !0,
    get() {
      return S;
    }
  }), t(w, o, {
    __proto__: null,
    enumerable: !0,
    get() {
      return S.pipeline;
    }
  }), t(c, o, {
    __proto__: null,
    enumerable: !0,
    get() {
      return S.finished;
    }
  }), R.Stream = R, R._isUint8Array = function(g) {
    return g instanceof Uint8Array;
  }, R._uint8ArrayToBuffer = function(g) {
    return e.from(g.buffer, g.byteOffset, g.byteLength);
  }, jn.exports;
}
(function(e) {
  const t = Zl(), r = Ql(), n = t.Readable.destroy;
  e.exports = t.Readable, e.exports._uint8ArrayToBuffer = t._uint8ArrayToBuffer, e.exports._isUint8Array = t._isUint8Array, e.exports.isDisturbed = t.isDisturbed, e.exports.isErrored = t.isErrored, e.exports.isReadable = t.isReadable, e.exports.Readable = t.Readable, e.exports.Writable = t.Writable, e.exports.Duplex = t.Duplex, e.exports.Transform = t.Transform, e.exports.PassThrough = t.PassThrough, e.exports.addAbortSignal = t.addAbortSignal, e.exports.finished = t.finished, e.exports.destroy = t.destroy, e.exports.destroy = n, e.exports.pipeline = t.pipeline, e.exports.compose = t.compose, Object.defineProperty(t, "promises", {
    configurable: !0,
    enumerable: !0,
    get() {
      return r;
    }
  }), e.exports.Stream = t.Stream, e.exports.default = e.exports;
})(dl);
var Rc = dl.exports, Qr = {}, ir = {}, or = {}, Zr = {};
Object.defineProperty(Zr, "__esModule", { value: !0 });
Zr.ContainerHandlerIdentifier = void 0;
class Ac {
  canCombineWithGraph() {
    return !0;
  }
  async handle(t, r, n, o, a, i) {
    let s;
    if (r.emittedStack[i + 1] && r.idStack[i + 1])
      s = r.idStack[i + 1][0];
    else {
      const h = await n.getContainerKey(o[i], o, i) !== null ? await n.resourceToTerm(await r.getContext(o), o[i]) : n.dataFactory.blankNode();
      if (!h) {
        r.emittedStack[i] = !1;
        return;
      }
      s = h, r.idStack[i + 1] = [s];
    }
    let f = r.idStack[i];
    f || (f = r.idStack[i] = []), f.some((u) => u.equals(s)) || f.push(s), await r.handlePendingContainerFlushBuffers() || (r.emittedStack[i] = !1);
  }
}
Zr.ContainerHandlerIdentifier = Ac;
var ar = {}, lr = {}, aa;
function en() {
  if (aa)
    return lr;
  aa = 1, Object.defineProperty(lr, "__esModule", { value: !0 }), lr.EntryHandlerPredicate = void 0;
  const e = Ee, t = Ct();
  let r = class es {
    /**
     * Handle the given predicate-object by either emitting it,
     * or by placing it in the appropriate stack for later emission when no @graph and/or @id has been defined.
     * @param {ParsingContext} parsingContext A parsing context.
     * @param {Util} util A utility instance.
     * @param {any[]} keys A stack of keys.
     * @param {number} depth The current depth.
     * @param {Term} predicate The predicate.
     * @param {Term} object The object.
     * @param {boolean} reverse If the property is reversed.
     * @param {boolean} isEmbedded If the property exists in an embedded node as direct child.
     * @param {boolean} isAnnotation If the property exists in an annotation object.
     * @return {Promise<void>} A promise resolving when handling is done.
     */
    static async handlePredicateObject(o, a, i, s, f, u, h, w, b) {
      const c = await a.getPropertiesDepth(i, s), S = await a.getDepthOffsetGraph(s, i), _ = s - S, R = o.idStack[c];
      if (R && !b)
        for (const C of R)
          if (S >= 0) {
            const g = o.idStack[_ - 1];
            if (g)
              for (const G of g)
                a.emitQuadChecked(s, C, f, u, G, h, w);
            else
              h ? (a.validateReverseSubject(u), o.getUnidentifiedGraphBufferSafe(_ - 1).push({ subject: u, predicate: f, object: C, isEmbedded: w })) : o.getUnidentifiedGraphBufferSafe(_ - 1).push({ subject: C, predicate: f, object: u, isEmbedded: w });
          } else {
            const g = await a.getGraphContainerValue(i, c);
            a.emitQuadChecked(s, C, f, u, g, h, w);
          }
      else if (h && a.validateReverseSubject(u), b) {
        if (o.rdfstar) {
          o.idStack[s] && o.emitError(new e.ErrorCoded(`Found an illegal @id inside an annotation: ${o.idStack[s][0].value}`, e.ERROR_CODES.INVALID_ANNOTATION));
          for (let g = 0; g < s; g++)
            await a.unaliasKeyword(i[g], i, g) === "@id" && o.emitError(new e.ErrorCoded("Found an illegal annotation inside an embedded node", e.ERROR_CODES.INVALID_ANNOTATION));
          const C = o.getAnnotationsBufferSafe(c), L = { predicate: f, object: u, reverse: h, nestedAnnotations: [], depth: c };
          C.push(L);
          for (let g = C.length - 2; g >= 0; g--) {
            const G = C[g];
            G.depth > c && (L.nestedAnnotations.push(G), C.splice(g, 1));
          }
        }
      } else
        o.getUnidentifiedValueBufferSafe(c).push({ predicate: f, object: u, reverse: h, isEmbedded: w });
    }
    isPropertyHandler() {
      return !0;
    }
    isStackProcessor() {
      return !0;
    }
    async validate(o, a, i, s, f) {
      const u = i[s];
      if (u) {
        const h = await o.getContext(i);
        if (!o.jsonLiteralStack[s] && await a.predicateToTerm(h, i[s]))
          return t.Util.getContextValueType(h, u) === "@json" && (o.jsonLiteralStack[s + 1] = !0), !0;
      }
      return !1;
    }
    async test(o, a, i, s, f) {
      return s[f];
    }
    async handle(o, a, i, s, f, u, h) {
      const w = s[u], b = await o.getContext(s), c = await a.predicateToTerm(b, i);
      if (c) {
        const S = await a.valueToTerm(b, i, f, u, s);
        if (S.length)
          for (let _ of S) {
            let R = await a.unaliasKeywordParent(s, u);
            const C = t.Util.isPropertyReverse(b, w, R);
            let L = 0;
            for (; R === "@reverse" || typeof R == "number"; )
              typeof R == "number" ? L++ : u--, R = await a.unaliasKeywordParent(s, u - L);
            const g = t.Util.isPropertyInEmbeddedNode(R);
            a.validateReverseInEmbeddedNode(i, C, g);
            const G = t.Util.isPropertyInAnnotationObject(R);
            if (f) {
              const T = "@list" in t.Util.getContextValueContainer(b, i);
              if (T || f["@list"]) {
                if ((T && !Array.isArray(f) && !f["@list"] || f["@list"] && !Array.isArray(f["@list"])) && _ !== a.rdfNil) {
                  const D = a.dataFactory.blankNode();
                  o.emitQuad(u, a.dataFactory.quad(D, a.rdfRest, a.rdfNil, a.getDefaultGraph())), o.emitQuad(u, a.dataFactory.quad(D, a.rdfFirst, _, a.getDefaultGraph())), _ = D;
                }
                if (C && !o.allowSubjectList)
                  throw new e.ErrorCoded(`Found illegal list value in subject position at ${i}`, e.ERROR_CODES.INVALID_REVERSE_PROPERTY_VALUE);
              }
            }
            await es.handlePredicateObject(o, a, s, u, c, _, C, g, G);
          }
      }
    }
  };
  return lr.EntryHandlerPredicate = r, lr;
}
var la;
function Ic() {
  if (la)
    return ar;
  la = 1, Object.defineProperty(ar, "__esModule", { value: !0 }), ar.ContainerHandlerIndex = void 0;
  const e = Ee, t = en(), r = Ct();
  let n = class {
    canCombineWithGraph() {
      return !0;
    }
    async handle(a, i, s, f, u, h) {
      if (!Array.isArray(u)) {
        const w = "@graph" in a, b = await i.getContext(f), c = f[h - 1], S = r.Util.getContextValueIndex(b, c);
        if (S) {
          if (e.Util.isPotentialKeyword(S))
            throw new e.ErrorCoded(`Keywords can not be used as @index value, got: ${S}`, e.ERROR_CODES.INVALID_TERM_DEFINITION);
          if (typeof S != "string")
            throw new e.ErrorCoded(`@index values must be strings, got: ${S}`, e.ERROR_CODES.INVALID_TERM_DEFINITION);
          if (typeof u != "object") {
            if (r.Util.getContextValueType(b, c) !== "@id")
              throw new e.ErrorCoded(`Property-based index containers require nodes as values or strings with @type: @id, but got: ${u}`, e.ERROR_CODES.INVALID_VALUE_OBJECT);
            const C = s.resourceToTerm(b, u);
            C && (i.idStack[h + 1] = [C]);
          }
          const R = s.createVocabOrBaseTerm(b, S);
          if (R) {
            const C = await s.valueToTerm(b, S, await s.getContainerKey(f[h], f, h), h, f);
            if (w) {
              const L = await s.getGraphContainerValue(f, h + 1);
              for (const g of C)
                i.emitQuad(h, s.dataFactory.quad(L, R, g, s.getDefaultGraph()));
            } else
              for (const L of C)
                await t.EntryHandlerPredicate.handlePredicateObject(i, s, f, h + 1, R, L, !1, !1, !1);
          }
        }
        const _ = w ? 2 : 1;
        await i.newOnValueJob(f.slice(0, f.length - _), u, h - _, !0), await i.handlePendingContainerFlushBuffers();
      }
      i.emittedStack[h] = !1;
    }
  };
  return ar.ContainerHandlerIndex = n, ar;
}
var tn = {};
Object.defineProperty(tn, "__esModule", { value: !0 });
tn.ContainerHandlerLanguage = void 0;
const sa = Ee;
class mc {
  canCombineWithGraph() {
    return !1;
  }
  async handle(t, r, n, o, a, i) {
    const s = await n.getContainerKey(o[i], o, i);
    if (Array.isArray(a))
      a = a.map((f) => ({ "@value": f, "@language": s }));
    else {
      if (typeof a != "string")
        throw new sa.ErrorCoded(`Got invalid language map value, got '${JSON.stringify(a)}', but expected string`, sa.ERROR_CODES.INVALID_LANGUAGE_MAP_VALUE);
      a = { "@value": a, "@language": s };
    }
    await r.newOnValueJob(o.slice(0, o.length - 1), a, i - 1, !0), r.emittedStack[i] = !1;
  }
}
tn.ContainerHandlerLanguage = mc;
var sr = {}, da;
function vc() {
  if (da)
    return sr;
  da = 1, Object.defineProperty(sr, "__esModule", { value: !0 }), sr.ContainerHandlerType = void 0;
  const e = en(), t = Ct();
  let r = class {
    canCombineWithGraph() {
      return !1;
    }
    async handle(o, a, i, s, f, u) {
      if (!Array.isArray(f)) {
        if (typeof f == "string") {
          const b = await a.getContext(s), S = t.Util.getContextValueType(b, s[u - 1]) === "@vocab" ? await i.createVocabOrBaseTerm(b, f) : await i.resourceToTerm(b, f);
          if (S) {
            const _ = { "@id": S.termType === "NamedNode" ? S.value : f };
            await a.newOnValueJob(s.slice(0, s.length - 1), _, u - 1, !0), a.idStack[u + 1] = [S];
          }
        } else {
          const b = !!a.idStack[u + 1];
          b || delete a.idStack[u], await a.newOnValueJob(s.slice(0, s.length - 1), f, u - 1, !0), b || (a.idStack[u + 1] = a.idStack[u]);
        }
        const h = await i.getContainerKey(s[u], s, u), w = h !== null ? i.createVocabOrBaseTerm(await a.getContext(s), h) : null;
        w && await e.EntryHandlerPredicate.handlePredicateObject(a, i, s, u + 1, i.rdfType, w, !1, !1, !1), await a.handlePendingContainerFlushBuffers();
      }
      a.emittedStack[u] = !1;
    }
  };
  return sr.ContainerHandlerType = r, sr;
}
var fa;
function ts() {
  if (fa)
    return or;
  fa = 1, Object.defineProperty(or, "__esModule", { value: !0 }), or.EntryHandlerContainer = void 0;
  const e = Zr, t = Ic(), r = tn, n = vc(), o = Ct();
  let a = class it {
    /**
     * Check fit the given container is a simple @graph container.
     * Concretely, it will check if no @index or @id is active as well.
     * @param containers A container hash.
     */
    static isSimpleGraphContainer(s) {
      return "@graph" in s && ("@set" in s && Object.keys(s).length === 2 || Object.keys(s).length === 1);
    }
    /**
     * Check fit the given container is a complex @graph container.
     * Concretely, it will check if @index or @id is active as well next to @graph.
     * @param containers A container hash.
     */
    static isComplexGraphContainer(s) {
      return "@graph" in s && ("@set" in s && Object.keys(s).length > 2 || !("@set" in s) && Object.keys(s).length > 1);
    }
    /**
     * Create an graph container index that can be used for identifying a graph term inside the graphContainerTermStack.
     * @param containers The applicable containers.
     * @param depth The container depth.
     * @param keys The array of keys.
     * @return The graph index.
     */
    static getContainerGraphIndex(s, f, u) {
      let h = it.isSimpleGraphContainer(s), w = "";
      for (let b = f; b < u.length; b++)
        (!h || typeof u[b] == "number") && (w += ":" + u[b]), !h && typeof u[b] != "number" && (h = !0);
      return w;
    }
    /**
     * Return the applicable container type at the given depth.
     *
     * This will ignore any arrays in the key chain.
     *
     * @param {ParsingContext} parsingContext A parsing context.
     * @param {any[]} keys The array of keys.
     * @param {number} depth The current depth.
     * @return {Promise<{ containers: {[typeName: string]: boolean}, depth: number, fallback: boolean }>}
     *          All applicable containers for the given depth,
     *          the `depth` of the container root (can change when arrays are in the key chain),
     *          and the `fallback` flag that indicates if the default container type was returned
     *            (i.e., no dedicated container type is defined).
     */
    static async getContainerHandler(s, f, u) {
      const h = {
        containers: { "@set": !0 },
        depth: u,
        fallback: !0
      };
      let w = !1;
      const b = await s.getContext(f, 2);
      for (let c = u - 1; c >= 0; c--)
        if (typeof f[c] != "number") {
          const S = o.Util.getContextValue(b, "@container", f[c], !1);
          if (S && it.isSimpleGraphContainer(S))
            return {
              containers: S,
              depth: c + 1,
              fallback: !1
            };
          const _ = o.Util.getContextValue(b, "@container", f[c - 1], !1);
          if (_) {
            const R = "@graph" in _;
            for (const C in it.CONTAINER_HANDLERS)
              if (_[C])
                return R ? it.CONTAINER_HANDLERS[C].canCombineWithGraph() ? {
                  containers: _,
                  depth: c,
                  fallback: !1
                } : h : w ? h : {
                  containers: _,
                  depth: c,
                  fallback: !1
                };
            return h;
          } else {
            if (w)
              return h;
            w = !0;
          }
        }
      return h;
    }
    /**
     * Check if we are handling a value at the given depth
     * that is part of something that should be handled as a container,
     * AND if this container should be buffered, so that it can be handled by a dedicated container handler.
     *
     * For instance, any container with @graph will NOT be buffered.
     *
     * This will ignore any arrays in the key chain.
     *
     * @param {ParsingContext} parsingContext A parsing context.
     * @param {any[]} keys The array of keys.
     * @param {number} depth The current depth.
     * @return {Promise<boolean>} If we are in the scope of a container handler.
     */
    static async isBufferableContainerHandler(s, f, u) {
      const h = await it.getContainerHandler(s, f, u);
      return !h.fallback && !("@graph" in h.containers);
    }
    isPropertyHandler() {
      return !1;
    }
    isStackProcessor() {
      return !0;
    }
    async validate(s, f, u, h, w) {
      return !!await this.test(s, f, null, u, h);
    }
    async test(s, f, u, h, w) {
      const b = o.Util.getContextValueContainer(await s.getContext(h, 2), h[w - 1]);
      for (const c in it.CONTAINER_HANDLERS)
        if (b[c])
          return {
            containers: b,
            handler: it.CONTAINER_HANDLERS[c]
          };
      return null;
    }
    async handle(s, f, u, h, w, b, c) {
      return c.handler.handle(c.containers, s, f, h, w, b);
    }
  };
  return a.CONTAINER_HANDLERS = {
    "@id": new e.ContainerHandlerIdentifier(),
    "@index": new t.ContainerHandlerIndex(),
    "@language": new r.ContainerHandlerLanguage(),
    "@type": new n.ContainerHandlerType()
  }, or.EntryHandlerContainer = a, or;
}
var ua;
function Ct() {
  if (ua)
    return ir;
  ua = 1, Object.defineProperty(ir, "__esModule", { value: !0 }), ir.Util = void 0;
  const e = Ee, t = Zs, r = ts(), n = ed;
  let o = class ne {
    constructor(i) {
      this.parsingContext = i.parsingContext, this.dataFactory = i.dataFactory || new t.DataFactory(), this.rdfFirst = this.dataFactory.namedNode(ne.RDF + "first"), this.rdfRest = this.dataFactory.namedNode(ne.RDF + "rest"), this.rdfNil = this.dataFactory.namedNode(ne.RDF + "nil"), this.rdfType = this.dataFactory.namedNode(ne.RDF + "type"), this.rdfJson = this.dataFactory.namedNode(ne.RDF + "JSON");
    }
    /**
     * Helper function to get the value of a context entry,
     * or fallback to a certain value.
     * @param {JsonLdContextNormalized} context A JSON-LD context.
     * @param {string} contextKey A pre-defined JSON-LD key in context entries.
     * @param {string} key A context entry key.
     * @param {string} fallback A fallback value for when the given contextKey
     *                          could not be found in the value with the given key.
     * @return {string} The value of the given contextKey in the entry behind key in the given context,
     *                  or the given fallback value.
     */
    static getContextValue(i, s, f, u) {
      const h = i.getContextRaw()[f];
      if (!h)
        return u;
      const w = h[s];
      return w === void 0 ? u : w;
    }
    /**
     * Get the container type of the given key in the context.
     *
     * Should any context-scoping bugs should occur related to this in the future,
     * it may be required to increase the offset from the depth at which the context is retrieved by one (to 2).
     * This is because containers act 2 levels deep.
     *
     * @param {JsonLdContextNormalized} context A JSON-LD context.
     * @param {string} key A context entry key.
     * @return {string} The container type.
     */
    static getContextValueContainer(i, s) {
      return ne.getContextValue(i, "@container", s, { "@set": !0 });
    }
    /**
     * Get the value type of the given key in the context.
     * @param {JsonLdContextNormalized} context A JSON-LD context.
     * @param {string} key A context entry key.
     * @return {string} The node type.
     */
    static getContextValueType(i, s) {
      const f = ne.getContextValue(i, "@type", s, null);
      return f === "@none" ? null : f;
    }
    /**
     * Get the language of the given key in the context.
     * @param {JsonLdContextNormalized} context A JSON-LD context.
     * @param {string} key A context entry key.
     * @return {string} The node type.
     */
    static getContextValueLanguage(i, s) {
      return ne.getContextValue(i, "@language", s, i.getContextRaw()["@language"] || null);
    }
    /**
     * Get the direction of the given key in the context.
     * @param {JsonLdContextNormalized} context A JSON-LD context.
     * @param {string} key A context entry key.
     * @return {string} The node type.
     */
    static getContextValueDirection(i, s) {
      return ne.getContextValue(i, "@direction", s, i.getContextRaw()["@direction"] || null);
    }
    /**
     * Check if the given key in the context is a reversed property.
     * @param {JsonLdContextNormalized} context A JSON-LD context.
     * @param {string} key A context entry key.
     * @return {boolean} If the context value has a @reverse key.
     */
    static isContextValueReverse(i, s) {
      return !!ne.getContextValue(i, "@reverse", s, null);
    }
    /**
     * Get the @index of the given key in the context.
     * @param {JsonLdContextNormalized} context A JSON-LD context.
     * @param {string} key A context entry key.
     * @return {string} The index.
     */
    static getContextValueIndex(i, s) {
      return ne.getContextValue(i, "@index", s, i.getContextRaw()["@index"] || null);
    }
    /**
     * Check if the given key refers to a reversed property.
     * @param {JsonLdContextNormalized} context A JSON-LD context.
     * @param {string} key The property key.
     * @param {string} parentKey The parent key.
     * @return {boolean} If the property must be reversed.
     */
    static isPropertyReverse(i, s, f) {
      return f === "@reverse" !== ne.isContextValueReverse(i, s);
    }
    /**
     * Check if the given key exists inside an embedded node as direct child.
     * @param {string} parentKey The parent key.
     * @return {boolean} If the property is embedded.
     */
    static isPropertyInEmbeddedNode(i) {
      return i === "@id";
    }
    /**
     * Check if the given key exists inside an annotation object as direct child.
     * @param {string} parentKey The parent key.
     * @return {boolean} If the property is an annotation.
     */
    static isPropertyInAnnotationObject(i) {
      return i === "@annotation";
    }
    /**
     * Check if the given IRI is valid.
     * @param {string} iri A potential IRI.
     * @return {boolean} If the given IRI is valid.
     */
    static isValidIri(i) {
      return i !== null && e.Util.isValidIri(i);
    }
    /**
     * Check if the given first array (needle) is a prefix of the given second array (haystack).
     * @param needle An array to check if it is a prefix.
     * @param haystack An array to look in.
     */
    static isPrefixArray(i, s) {
      if (i.length > s.length)
        return !1;
      for (let f = 0; f < i.length; f++)
        if (i[f] !== s[f])
          return !1;
      return !0;
    }
    /**
     * Make sure that @id-@index pairs are equal over all array values.
     * Reject otherwise.
     * @param {any[]} value An array value.
     * @return {Promise<void>} A promise rejecting if conflicts are present.
     */
    async validateValueIndexes(i) {
      if (this.parsingContext.validateValueIndexes) {
        const s = {};
        for (const f of i)
          if (f && typeof f == "object") {
            const u = f["@id"], h = f["@index"];
            if (u && h) {
              const w = s[u];
              if (w && w !== h)
                throw new e.ErrorCoded(`Conflicting @index value for ${u}`, e.ERROR_CODES.CONFLICTING_INDEXES);
              s[u] = h;
            }
          }
      }
    }
    /**
     * Convert a given JSON value to an RDF term.
     * @param {JsonLdContextNormalized} context A JSON-LD context.
     * @param {string} key The current JSON key.
     * @param value A JSON value.
     * @param {number} depth The depth the value is at.
     * @param {string[]} keys The path of keys.
     * @return {Promise<RDF.Term[]>} An RDF term array.
     */
    async valueToTerm(i, s, f, u, h) {
      if (ne.getContextValueType(i, s) === "@json")
        return [this.dataFactory.literal(this.valueToJsonString(f), this.rdfJson)];
      const w = typeof f;
      switch (w) {
        case "object":
          if (f == null)
            return [];
          if (Array.isArray(f))
            return "@list" in ne.getContextValueContainer(i, s) ? f.length === 0 ? [this.rdfNil] : this.parsingContext.idStack[u + 1] || [] : (await this.validateValueIndexes(f), []);
          if (i = await this.getContextSelfOrPropertyScoped(i, s), "@context" in f && (i = await this.parsingContext.parseContext(f["@context"], (await this.parsingContext.getContext(h, 0)).getContextRaw())), f = await this.unaliasKeywords(f, h, u, i), "@value" in f) {
            let b, c, S, _, R;
            for (s in f) {
              const C = f[s];
              switch (s) {
                case "@value":
                  b = C;
                  break;
                case "@language":
                  c = C;
                  break;
                case "@direction":
                  S = C;
                  break;
                case "@type":
                  _ = C;
                  break;
                case "@index":
                  R = C;
                  break;
                case "@annotation":
                  break;
                default:
                  throw new e.ErrorCoded(`Unknown value entry '${s}' in @value: ${JSON.stringify(f)}`, e.ERROR_CODES.INVALID_VALUE_OBJECT);
              }
            }
            if (await this.unaliasKeyword(_, h, u, !0, i) === "@json")
              return [this.dataFactory.literal(this.valueToJsonString(b), this.rdfJson)];
            if (b === null)
              return [];
            if (typeof b == "object")
              throw new e.ErrorCoded(`The value of an '@value' can not be an object, got '${JSON.stringify(b)}'`, e.ERROR_CODES.INVALID_VALUE_OBJECT_VALUE);
            if (this.parsingContext.validateValueIndexes && R && typeof R != "string")
              throw new e.ErrorCoded(`The value of an '@index' must be a string, got '${JSON.stringify(R)}'`, e.ERROR_CODES.INVALID_INDEX_VALUE);
            if (c) {
              if (typeof b != "string")
                throw new e.ErrorCoded(`When an '@language' is set, the value of '@value' must be a string, got '${JSON.stringify(b)}'`, e.ERROR_CODES.INVALID_LANGUAGE_TAGGED_VALUE);
              if (!e.ContextParser.validateLanguage(c, this.parsingContext.strictValues, e.ERROR_CODES.INVALID_LANGUAGE_TAGGED_STRING))
                return [];
              (this.parsingContext.normalizeLanguageTags || this.parsingContext.activeProcessingMode === 1) && (c = c.toLowerCase());
            }
            if (S) {
              if (typeof b != "string")
                throw new Error(`When an '@direction' is set, the value of '@value' must be a string, got '${JSON.stringify(b)}'`);
              if (!e.ContextParser.validateDirection(S, this.parsingContext.strictValues))
                return [];
            }
            if (c && S && this.parsingContext.rdfDirection) {
              if (_)
                throw new e.ErrorCoded(`Can not have '@language', '@direction' and '@type' in a value: '${JSON.stringify(f)}'`, e.ERROR_CODES.INVALID_VALUE_OBJECT);
              return this.nullableTermToArray(this.createLanguageDirectionLiteral(u, b, c, S));
            } else if (c) {
              if (_)
                throw new e.ErrorCoded(`Can not have both '@language' and '@type' in a value: '${JSON.stringify(f)}'`, e.ERROR_CODES.INVALID_VALUE_OBJECT);
              return [this.dataFactory.literal(b, c)];
            } else if (S && this.parsingContext.rdfDirection) {
              if (_)
                throw new e.ErrorCoded(`Can not have both '@direction' and '@type' in a value: '${JSON.stringify(f)}'`, e.ERROR_CODES.INVALID_VALUE_OBJECT);
              return this.nullableTermToArray(this.createLanguageDirectionLiteral(u, b, c, S));
            } else if (_) {
              if (typeof _ != "string")
                throw new e.ErrorCoded(`The value of an '@type' must be a string, got '${JSON.stringify(_)}'`, e.ERROR_CODES.INVALID_TYPED_VALUE);
              const C = this.createVocabOrBaseTerm(i, _);
              if (!C)
                throw new e.ErrorCoded(`Invalid '@type' value, got '${JSON.stringify(_)}'`, e.ERROR_CODES.INVALID_TYPED_VALUE);
              if (C.termType !== "NamedNode")
                throw new e.ErrorCoded(`Illegal value type (${C.termType}): ${_}`, e.ERROR_CODES.INVALID_TYPED_VALUE);
              return [this.dataFactory.literal(b, C)];
            }
            return await this.valueToTerm(new e.JsonLdContextNormalized({}), s, b, u, h);
          } else if ("@set" in f) {
            if (Object.keys(f).length > 1)
              throw new e.ErrorCoded(`Found illegal neighbouring entries next to @set for key: '${s}'`, e.ERROR_CODES.INVALID_SET_OR_LIST_OBJECT);
            return [];
          } else if ("@list" in f) {
            if (Object.keys(f).length > 1)
              throw new e.ErrorCoded(`Found illegal neighbouring entries next to @list for key: '${s}'`, e.ERROR_CODES.INVALID_SET_OR_LIST_OBJECT);
            const b = f["@list"];
            return Array.isArray(b) ? b.length === 0 ? [this.rdfNil] : this.parsingContext.idStack[u + 1] || [] : await this.valueToTerm(await this.parsingContext.getContext(h), s, b, u - 1, h.slice(0, -1));
          } else {
            if ("@reverse" in f && typeof f["@reverse"] == "boolean")
              return [];
            if ("@graph" in ne.getContextValueContainer(await this.parsingContext.getContext(h), s)) {
              const b = this.parsingContext.graphContainerTermStack[u + 1];
              return b ? Object.values(b) : [this.dataFactory.blankNode()];
            } else if ("@id" in f) {
              if (Object.keys(f).length > 1 && (i = await this.parsingContext.getContext(h, 0)), "@context" in f && (i = await this.parsingContext.parseContext(f["@context"], i.getContextRaw())), f["@type"] === "@vocab")
                return this.nullableTermToArray(this.createVocabOrBaseTerm(i, f["@id"]));
              {
                const b = f["@id"];
                let c;
                if (typeof b == "object")
                  if (this.parsingContext.rdfstar)
                    c = this.parsingContext.idStack[u + 1][0];
                  else
                    throw new e.ErrorCoded(`Found illegal @id '${f}'`, e.ERROR_CODES.INVALID_ID_VALUE);
                else
                  c = this.resourceToTerm(i, b);
                return this.nullableTermToArray(c);
              }
            } else
              return this.parsingContext.emittedStack[u + 1] || f && typeof f == "object" && Object.keys(f).length === 0 ? this.parsingContext.idStack[u + 1] || (this.parsingContext.idStack[u + 1] = [this.dataFactory.blankNode()]) : [];
          }
        case "string":
          return this.nullableTermToArray(this.stringValueToTerm(u, await this.getContextSelfOrPropertyScoped(i, s), s, f, null));
        case "boolean":
          return this.nullableTermToArray(this.stringValueToTerm(u, await this.getContextSelfOrPropertyScoped(i, s), s, (!!f).toString(), this.dataFactory.namedNode(ne.XSD_BOOLEAN)));
        case "number":
          return this.nullableTermToArray(this.stringValueToTerm(u, await this.getContextSelfOrPropertyScoped(i, s), s, f, this.dataFactory.namedNode(f % 1 === 0 && f < 1e21 ? ne.XSD_INTEGER : ne.XSD_DOUBLE)));
        default:
          return this.parsingContext.emitError(new Error(`Could not determine the RDF type of a ${w}`)), [];
      }
    }
    /**
     * If the context defines a property-scoped context for the given key,
     * that context will be returned.
     * Otherwise, the given context will be returned as-is.
     *
     * This should be used for valueToTerm cases that are not objects.
     * @param context A context.
     * @param key A JSON key.
     */
    async getContextSelfOrPropertyScoped(i, s) {
      const f = i.getContextRaw()[s];
      return f && typeof f == "object" && "@context" in f && (i = await this.parsingContext.parseContext(f, i.getContextRaw(), !0)), i;
    }
    /**
     * If the given term is null, return an empty array, otherwise return an array with the single given term.
     * @param term A term.
     */
    nullableTermToArray(i) {
      return i ? [i] : [];
    }
    /**
     * Convert a given JSON key to an RDF predicate term,
     * based on @vocab.
     * @param {JsonLdContextNormalized} context A JSON-LD context.
     * @param key A JSON key.
     * @return {RDF.NamedNode} An RDF named node.
     */
    predicateToTerm(i, s) {
      const f = i.expandTerm(s, !0, this.parsingContext.getExpandOptions());
      if (!f)
        return null;
      if (f[0] === "_" && f[1] === ":")
        return this.parsingContext.produceGeneralizedRdf ? this.dataFactory.blankNode(f.substr(2)) : null;
      if (ne.isValidIri(f))
        return this.dataFactory.namedNode(f);
      if (f && this.parsingContext.strictValues)
        this.parsingContext.emitError(new e.ErrorCoded(`Invalid predicate IRI: ${f}`, e.ERROR_CODES.INVALID_IRI_MAPPING));
      else
        return null;
      return null;
    }
    /**
     * Convert a given JSON key to an RDF resource term or blank node,
     * based on @base.
     * @param {JsonLdContextNormalized} context A JSON-LD context.
     * @param key A JSON key.
     * @return {RDF.NamedNode} An RDF named node or null.
     */
    resourceToTerm(i, s) {
      if (s.startsWith("_:"))
        return this.dataFactory.blankNode(s.substr(2));
      const f = i.expandTerm(s, !1, this.parsingContext.getExpandOptions());
      if (!ne.isValidIri(f))
        if (f && this.parsingContext.strictValues)
          this.parsingContext.emitError(new Error(`Invalid resource IRI: ${f}`));
        else
          return null;
      return this.dataFactory.namedNode(f);
    }
    /**
     * Convert a given JSON key to an RDF resource term.
     * It will do this based on the @vocab,
     * and fallback to @base.
     * @param {JsonLdContextNormalized} context A JSON-LD context.
     * @param key A JSON key.
     * @return {RDF.NamedNode} An RDF named node or null.
     */
    createVocabOrBaseTerm(i, s) {
      if (s.startsWith("_:"))
        return this.dataFactory.blankNode(s.substr(2));
      const f = this.parsingContext.getExpandOptions();
      let u = i.expandTerm(s, !0, f);
      if (u === s && (u = i.expandTerm(s, !1, f)), !ne.isValidIri(u))
        if (u && this.parsingContext.strictValues && !u.startsWith("@"))
          this.parsingContext.emitError(new Error(`Invalid term IRI: ${u}`));
        else
          return null;
      return this.dataFactory.namedNode(u);
    }
    /**
     * Ensure that the given value becomes a string.
     * @param {string | number} value A string or number.
     * @param {NamedNode} datatype The intended datatype.
     * @return {string} The returned string.
     */
    intToString(i, s) {
      return typeof i == "number" ? Number.isFinite(i) ? i % 1 === 0 && (!s || s.value !== ne.XSD_DOUBLE) ? Number(i).toString() : i.toExponential(15).replace(/(\d)0*e\+?/, "$1E") : i > 0 ? "INF" : "-INF" : i;
    }
    /**
     * Convert a given JSON string value to an RDF term.
     * @param {number} depth The current stack depth.
     * @param {JsonLdContextNormalized} context A JSON-LD context.
     * @param {string} key The current JSON key.
     * @param {string} value A JSON value.
     * @param {NamedNode} defaultDatatype The default datatype for the given value.
     * @return {RDF.Term} An RDF term or null.
     */
    stringValueToTerm(i, s, f, u, h) {
      const w = ne.getContextValueType(s, f);
      if (w)
        if (w === "@id") {
          if (!h)
            return this.resourceToTerm(s, this.intToString(u, h));
        } else if (w === "@vocab") {
          if (!h)
            return this.createVocabOrBaseTerm(s, this.intToString(u, h));
        } else
          h = this.dataFactory.namedNode(w);
      if (!h) {
        const b = ne.getContextValueLanguage(s, f), c = ne.getContextValueDirection(s, f);
        return c && this.parsingContext.rdfDirection ? this.createLanguageDirectionLiteral(i, this.intToString(u, h), b, c) : this.dataFactory.literal(this.intToString(u, h), b);
      }
      return this.dataFactory.literal(this.intToString(u, h), h);
    }
    /**
     * Create a literal for the given value with the given language and direction.
     * Auxiliary quads may be emitted.
     * @param {number} depth The current stack depth.
     * @param {string} value A string value.
     * @param {string} language A language tag.
     * @param {string} direction A direction.
     * @return {Term} An RDF term.
     */
    createLanguageDirectionLiteral(i, s, f, u) {
      if (this.parsingContext.rdfDirection === "i18n-datatype")
        return f || (f = ""), this.dataFactory.literal(s, this.dataFactory.namedNode(`https://www.w3.org/ns/i18n#${f}_${u}`));
      {
        const h = this.dataFactory.blankNode(), w = this.getDefaultGraph();
        return this.parsingContext.emitQuad(i, this.dataFactory.quad(h, this.dataFactory.namedNode(ne.RDF + "value"), this.dataFactory.literal(s), w)), f && this.parsingContext.emitQuad(i, this.dataFactory.quad(h, this.dataFactory.namedNode(ne.RDF + "language"), this.dataFactory.literal(f), w)), this.parsingContext.emitQuad(i, this.dataFactory.quad(h, this.dataFactory.namedNode(ne.RDF + "direction"), this.dataFactory.literal(u), w)), h;
      }
    }
    /**
     * Stringify the given JSON object to a canonical JSON string.
     * @param value Any valid JSON value.
     * @return {string} A canonical JSON string.
     */
    valueToJsonString(i) {
      return n(i);
    }
    /**
     * If the key is not a keyword, try to check if it is an alias for a keyword,
     * and if so, un-alias it.
     * @param {string} key A key, can be falsy.
     * @param {string[]} keys The path of keys.
     * @param {number} depth The depth to
     * @param {boolean} disableCache If the cache should be disabled
     * @param {JsonLdContextNormalized} context A context to unalias with,
     *                                           will fallback to retrieving the context for the given keys.
     * @return {Promise<string>} A promise resolving to the key itself, or another key.
     */
    async unaliasKeyword(i, s, f, u, h) {
      if (Number.isInteger(i))
        return i;
      if (!u) {
        const w = this.parsingContext.unaliasedKeywordCacheStack[f];
        if (w)
          return w;
      }
      if (!e.Util.isPotentialKeyword(i)) {
        h = h || await this.parsingContext.getContext(s);
        let w = h.getContextRaw()[i];
        w && typeof w == "object" && (w = w["@id"]), e.Util.isValidKeyword(w) && (i = w);
      }
      return u ? i : this.parsingContext.unaliasedKeywordCacheStack[f] = i;
    }
    /**
     * Unalias the keyword of the parent.
     * This adds a safety check if no parent exist.
     * @param {any[]} keys A stack of keys.
     * @param {number} depth The current depth.
     * @return {Promise<any>} A promise resolving to the parent key, or another key.
     */
    async unaliasKeywordParent(i, s) {
      return await this.unaliasKeyword(s > 0 && i[s - 1], i, s - 1);
    }
    /**
     * Un-alias all keywords in the given hash.
     * @param {{[p: string]: any}} hash A hash object.
     * @param {string[]} keys The path of keys.
     * @param {number} depth The depth.
     * @param {JsonLdContextNormalized} context A context to unalias with,
     *                                           will fallback to retrieving the context for the given keys.
     * @return {Promise<{[p: string]: any}>} A promise resolving to the new hash.
     */
    async unaliasKeywords(i, s, f, u) {
      const h = {};
      for (const w in i)
        h[await this.unaliasKeyword(w, s, f + 1, !0, u)] = i[w];
      return h;
    }
    /**
     * Check if we are processing a literal (including JSON literals) at the given depth.
     * This will also check higher levels,
     * because if a parent is a literal,
     * then the deeper levels are definitely a literal as well.
     * @param {any[]} keys The keys.
     * @param {number} depth The depth.
     * @return {boolean} If we are processing a literal.
     */
    async isLiteral(i, s) {
      for (let f = s; f >= 0; f--) {
        if (await this.unaliasKeyword(i[f], i, f) === "@annotation")
          return !1;
        if (this.parsingContext.literalStack[f] || this.parsingContext.jsonLiteralStack[f])
          return !0;
      }
      return !1;
    }
    /**
     * Check how many parents should be skipped for checking the @graph for the given node.
     *
     * @param {number} depth The depth of the node.
     * @param {any[]} keys An array of keys.
     * @return {number} The graph depth offset.
     */
    async getDepthOffsetGraph(i, s) {
      for (let f = i - 1; f > 0; f--)
        if (await this.unaliasKeyword(s[f], s, f) === "@graph") {
          const u = (await r.EntryHandlerContainer.getContainerHandler(this.parsingContext, s, f)).containers;
          return r.EntryHandlerContainer.isComplexGraphContainer(u) ? -1 : i - f - 1;
        }
      return -1;
    }
    /**
     * Check if the given subject is of a valid type.
     * This should be called when applying @reverse'd properties.
     * @param {Term} subject A subject.
     */
    validateReverseSubject(i) {
      if (i.termType === "Literal")
        throw new e.ErrorCoded(`Found illegal literal in subject position: ${i.value}`, e.ERROR_CODES.INVALID_REVERSE_PROPERTY_VALUE);
    }
    /**
     * Get the default graph.
     * @return {Term} An RDF term.
     */
    getDefaultGraph() {
      return this.parsingContext.defaultGraph || this.dataFactory.defaultGraph();
    }
    /**
     * Get the current graph, while taking into account a graph that can be defined via @container: @graph.
     * If not within a graph container, the default graph will be returned.
     * @param keys The current keys.
     * @param depth The current depth.
     */
    async getGraphContainerValue(i, s) {
      let f = this.getDefaultGraph();
      const { containers: u, depth: h } = await r.EntryHandlerContainer.getContainerHandler(this.parsingContext, i, s);
      if ("@graph" in u) {
        const w = r.EntryHandlerContainer.getContainerGraphIndex(u, h, i), b = this.parsingContext.graphContainerTermStack[h];
        if (f = b ? b[w] : null, !f) {
          let c = null;
          if ("@id" in u) {
            const S = await this.getContainerKey(i[h], i, h);
            S !== null && (c = await this.resourceToTerm(await this.parsingContext.getContext(i), S));
          }
          c || (c = this.dataFactory.blankNode()), this.parsingContext.graphContainerTermStack[h] || (this.parsingContext.graphContainerTermStack[h] = {}), f = this.parsingContext.graphContainerTermStack[h][w] = c;
        }
      }
      return f;
    }
    /**
     * Get the properties depth for retrieving properties.
     *
     * Typically, the properties depth will be identical to the given depth.
     *
     * The following exceptions apply:
     * * When the parent is @reverse, the depth is decremented by one.
     * * When @nest parents are found, the depth is decremented by the number of @nest parents.
     * If in combination with the exceptions above an intermediary array is discovered,
     * the depth is also decremented by this number of arrays.
     *
     * @param keys The current key chain.
     * @param depth The current depth.
     */
    async getPropertiesDepth(i, s) {
      let f = s;
      for (let u = s - 1; u > 0; u--)
        if (typeof i[u] != "number") {
          const h = await this.unaliasKeyword(i[u], i, u);
          if (h === "@reverse")
            return u;
          if (h === "@nest")
            f = u;
          else
            return f;
        }
      return f;
    }
    /**
     * Get the key for the current container entry.
     * @param key A key, can be falsy.
     * @param keys The key chain.
     * @param depth The current depth to get the key from.
     * @return Promise resolving to the key.
     *         Null will be returned for @none entries, with aliasing taken into account.
     */
    async getContainerKey(i, s, f) {
      const u = await this.unaliasKeyword(i, s, f);
      return u === "@none" ? null : u;
    }
    /**
     * Check if no reverse properties are present in embedded nodes.
     * @param key The current key.
     * @param reverse If a reverse property is active.
     * @param isEmbedded If we're in an embedded node.
     */
    validateReverseInEmbeddedNode(i, s, f) {
      if (f && s && !this.parsingContext.rdfstarReverseInEmbedded)
        throw new e.ErrorCoded(`Illegal reverse property in embedded node in ${i}`, e.ERROR_CODES.INVALID_EMBEDDED_NODE);
    }
    /**
     * Emit a quad, with checks.
     * @param depth The current depth.
     * @param subject S
     * @param predicate P
     * @param object O
     * @param graph G
     * @param reverse If a reverse property is active.
     * @param isEmbedded If we're in an embedded node.
     */
    emitQuadChecked(i, s, f, u, h, w, b) {
      let c;
      if (w ? (this.validateReverseSubject(u), c = this.dataFactory.quad(u, f, s, h)) : c = this.dataFactory.quad(s, f, u, h), b) {
        if (c.graph.termType !== "DefaultGraph" && (c = this.dataFactory.quad(c.subject, c.predicate, c.object)), this.parsingContext.idStack[i - 1])
          throw new e.ErrorCoded("Illegal multiple properties in an embedded node", e.ERROR_CODES.INVALID_EMBEDDED_NODE);
        this.parsingContext.idStack[i - 1] = [c];
      } else
        this.parsingContext.emitQuad(i, c);
      const S = this.parsingContext.annotationsBuffer[i];
      if (S) {
        for (const _ of S)
          this.emitAnnotation(i, c, _);
        delete this.parsingContext.annotationsBuffer[i];
      }
    }
    // This is a separate function to enable recursion
    emitAnnotation(i, s, f) {
      let u;
      f.reverse ? (this.validateReverseSubject(f.object), u = this.dataFactory.quad(f.object, f.predicate, s)) : u = this.dataFactory.quad(s, f.predicate, f.object), this.parsingContext.emitQuad(i, u);
      for (const h of f.nestedAnnotations)
        this.emitAnnotation(i, u, h);
    }
  };
  return o.XSD = "http://www.w3.org/2001/XMLSchema#", o.XSD_BOOLEAN = o.XSD + "boolean", o.XSD_INTEGER = o.XSD + "integer", o.XSD_DOUBLE = o.XSD + "double", o.RDF = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", ir.Util = o, ir;
}
Object.defineProperty(Qr, "__esModule", { value: !0 });
Qr.EntryHandlerArrayValue = void 0;
const Tc = Ct(), ca = Ee;
class Cc {
  isPropertyHandler() {
    return !1;
  }
  isStackProcessor() {
    return !0;
  }
  async validate(t, r, n, o, a) {
    return this.test(t, r, null, n, o);
  }
  async test(t, r, n, o, a) {
    return typeof o[a] == "number";
  }
  async handle(t, r, n, o, a, i) {
    let s = await r.unaliasKeywordParent(o, i);
    if (s === "@list") {
      let f = null, u = 0;
      for (let h = i - 2; h > 0; h--) {
        const w = o[h];
        if (typeof w == "string" || typeof w == "number") {
          u = h, f = w;
          break;
        }
      }
      if (f !== null) {
        const h = await r.valueToTerm(await t.getContext(o), f, a, i, o);
        for (const w of h)
          await this.handleListElement(t, r, w, a, i, o.slice(0, u), u);
        h.length === 0 && await this.handleListElement(t, r, null, a, i, o.slice(0, u), u);
      }
    } else if (s === "@set")
      await t.newOnValueJob(o.slice(0, -2), a, i - 2, !1);
    else if (s !== void 0 && s !== "@type") {
      for (let u = i - 1; u > 0; u--)
        if (typeof o[u] != "number") {
          s = await r.unaliasKeyword(o[u], o, u);
          break;
        }
      const f = await t.getContext(o.slice(0, -1));
      if ("@list" in Tc.Util.getContextValueContainer(f, s)) {
        t.emittedStack[i + 1] = !0;
        const u = await r.valueToTerm(await t.getContext(o), s, a, i, o);
        for (const h of u)
          await this.handleListElement(t, r, h, a, i, o.slice(0, -1), i - 1);
        u.length === 0 && await this.handleListElement(t, r, null, a, i, o.slice(0, -1), i - 1);
      } else
        t.shiftStack(i, 1), await t.newOnValueJob(o.slice(0, -1), a, i - 1, !1), t.contextTree.removeContext(o.slice(0, -1));
    }
  }
  async handleListElement(t, r, n, o, a, i, s) {
    let f = t.listPointerStack[a];
    if (o !== null && (await r.unaliasKeywords(o, i, a))["@value"] !== null) {
      if (!f || !f.value) {
        const u = r.dataFactory.blankNode();
        f = { value: u, listRootDepth: s, listId: u };
      } else {
        const u = r.dataFactory.blankNode();
        t.emitQuad(a, r.dataFactory.quad(f.value, r.rdfRest, u, r.getDefaultGraph())), f.value = u;
      }
      n && t.emitQuad(a, r.dataFactory.quad(f.value, r.rdfFirst, n, r.getDefaultGraph()));
    } else
      f || (f = { listRootDepth: s, listId: r.rdfNil });
    t.listPointerStack[a] = f, t.rdfstar && t.annotationsBuffer[a] && t.emitError(new ca.ErrorCoded("Found an illegal annotation inside a list", ca.ERROR_CODES.INVALID_ANNOTATION));
  }
}
Qr.EntryHandlerArrayValue = Cc;
var rn = {};
Object.defineProperty(rn, "__esModule", { value: !0 });
rn.EntryHandlerInvalidFallback = void 0;
class Nc {
  isPropertyHandler() {
    return !1;
  }
  isStackProcessor() {
    return !0;
  }
  async validate(t, r, n, o, a) {
    return !1;
  }
  async test(t, r, n, o, a) {
    return !0;
  }
  async handle(t, r, n, o, a, i) {
    t.emittedStack[i] = !1;
  }
}
rn.EntryHandlerInvalidFallback = Nc;
var nn = {}, Me = {};
Object.defineProperty(Me, "__esModule", { value: !0 });
Me.EntryHandlerKeyword = void 0;
class Oc {
  constructor(t) {
    this.keyword = t;
  }
  isPropertyHandler() {
    return !1;
  }
  isStackProcessor() {
    return !0;
  }
  async validate(t, r, n, o, a) {
    return !1;
  }
  async test(t, r, n, o, a) {
    return n === this.keyword;
  }
}
Me.EntryHandlerKeyword = Oc;
Object.defineProperty(nn, "__esModule", { value: !0 });
nn.EntryHandlerKeywordContext = void 0;
const ha = Ee, Dc = Me;
class $c extends Dc.EntryHandlerKeyword {
  constructor() {
    super("@context");
  }
  isStackProcessor() {
    return !1;
  }
  async handle(t, r, n, o, a, i) {
    t.streamingProfile && (t.processingStack[i] || t.processingType[i] || t.idStack[i] !== void 0) && t.emitError(new ha.ErrorCoded("Found an out-of-order context, while streaming is enabled.(disable `streamingProfile`)", ha.ERROR_CODES.INVALID_STREAMING_KEY_ORDER));
    const s = t.getContext(o), f = t.parseContext(a, (await s).getContextRaw());
    t.contextTree.setContext(o.slice(0, -1), f), t.emitContext(a), await t.validateContext(await f);
  }
}
nn.EntryHandlerKeywordContext = $c;
var on = {};
Object.defineProperty(on, "__esModule", { value: !0 });
on.EntryHandlerKeywordGraph = void 0;
const Pc = Me;
class Lc extends Pc.EntryHandlerKeyword {
  constructor() {
    super("@graph");
  }
  async handle(t, r, n, o, a, i) {
    t.graphStack[i + 1] = !0;
  }
}
on.EntryHandlerKeywordGraph = Lc;
var an = {};
Object.defineProperty(an, "__esModule", { value: !0 });
an.EntryHandlerKeywordId = void 0;
const je = Ee, xc = Me;
class kc extends xc.EntryHandlerKeyword {
  constructor() {
    super("@id");
  }
  isStackProcessor() {
    return !1;
  }
  async handle(t, r, n, o, a, i) {
    if (typeof a != "string") {
      if (t.rdfstar && typeof a == "object") {
        const f = Object.keys(a);
        f.length === 1 && f[0] === "@id" && t.emitError(new je.ErrorCoded(`Invalid embedded node without property with @id ${a["@id"]}`, je.ERROR_CODES.INVALID_EMBEDDED_NODE));
      } else
        t.emitError(new je.ErrorCoded(`Found illegal @id '${a}'`, je.ERROR_CODES.INVALID_ID_VALUE));
      return;
    }
    const s = await r.getPropertiesDepth(o, i);
    if (t.idStack[s] !== void 0 && (t.idStack[s][0].listHead ? t.emitError(new je.ErrorCoded(`Found illegal neighbouring entries next to @list for key: '${o[i - 1]}'`, je.ERROR_CODES.INVALID_SET_OR_LIST_OBJECT)) : t.emitError(new je.ErrorCoded(`Found duplicate @ids '${t.idStack[s][0].value}' and '${a}'`, je.ERROR_CODES.COLLIDING_KEYWORDS))), t.rdfstar && t.annotationsBuffer[i])
      for (const f of t.annotationsBuffer[i])
        f.depth === i && t.emitError(new je.ErrorCoded(`Found an illegal @id inside an annotation: ${a}`, je.ERROR_CODES.INVALID_ANNOTATION));
    t.idStack[s] = r.nullableTermToArray(await r.resourceToTerm(await t.getContext(o), a));
  }
}
an.EntryHandlerKeywordId = kc;
var ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.EntryHandlerKeywordIncluded = void 0;
const $t = Ee, Mc = Me;
class jc extends Mc.EntryHandlerKeyword {
  constructor() {
    super("@included");
  }
  async handle(t, r, n, o, a, i) {
    typeof a != "object" && t.emitError(new $t.ErrorCoded(`Found illegal @included '${a}'`, $t.ERROR_CODES.INVALID_INCLUDED_VALUE));
    const s = await r.unaliasKeywords(a, o, i, await t.getContext(o));
    "@value" in s && t.emitError(new $t.ErrorCoded(`Found an illegal @included @value node '${JSON.stringify(a)}'`, $t.ERROR_CODES.INVALID_INCLUDED_VALUE)), "@list" in s && t.emitError(new $t.ErrorCoded(`Found an illegal @included @list node '${JSON.stringify(a)}'`, $t.ERROR_CODES.INVALID_INCLUDED_VALUE)), t.emittedStack[i] = !1;
  }
}
ln.EntryHandlerKeywordIncluded = jc;
var sn = {};
Object.defineProperty(sn, "__esModule", { value: !0 });
sn.EntryHandlerKeywordNest = void 0;
const mr = Ee, Vc = Me;
class Fc extends Vc.EntryHandlerKeyword {
  constructor() {
    super("@nest");
  }
  async handle(t, r, n, o, a, i) {
    typeof a != "object" && t.emitError(new mr.ErrorCoded(`Found invalid @nest entry for '${n}': '${a}'`, mr.ERROR_CODES.INVALID_NEST_VALUE)), "@value" in await r.unaliasKeywords(a, o, i, await t.getContext(o)) && t.emitError(new mr.ErrorCoded(`Found an invalid @value node for '${n}'`, mr.ERROR_CODES.INVALID_NEST_VALUE)), t.emittedStack[i] = !1;
  }
}
sn.EntryHandlerKeywordNest = Fc;
var dn = {};
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.EntryHandlerKeywordType = void 0;
const dr = Ee, vr = Ct(), Uc = en(), Wc = Me;
class Bc extends Wc.EntryHandlerKeyword {
  constructor() {
    super("@type");
  }
  isStackProcessor() {
    return !1;
  }
  async handle(t, r, n, o, a, i) {
    const s = o[i], f = await t.getContext(o), u = r.rdfType, h = await r.unaliasKeywordParent(o, i), w = vr.Util.isPropertyReverse(f, s, h), b = vr.Util.isPropertyInEmbeddedNode(h);
    r.validateReverseInEmbeddedNode(n, w, b);
    const c = vr.Util.isPropertyInAnnotationObject(h), S = Array.isArray(a) ? a : [a];
    for (const C of S) {
      typeof C != "string" && t.emitError(new dr.ErrorCoded(`Found illegal @type '${C}'`, dr.ERROR_CODES.INVALID_TYPE_VALUE));
      const L = r.createVocabOrBaseTerm(f, C);
      L && await Uc.EntryHandlerPredicate.handlePredicateObject(t, r, o, i, u, L, w, b, c);
    }
    let _ = Promise.resolve(f), R = !1;
    for (const C of S.sort()) {
      const L = vr.Util.getContextValue(f, "@context", C, null);
      L && (R = !0, _ = _.then((g) => t.parseContext(L, g.getContextRaw())));
    }
    t.streamingProfile && (R || !t.streamingProfileAllowOutOfOrderPlainType) && (t.processingStack[i] || t.idStack[i]) && t.emitError(new dr.ErrorCoded("Found an out-of-order type-scoped context, while streaming is enabled.(disable `streamingProfile`)", dr.ERROR_CODES.INVALID_STREAMING_KEY_ORDER)), R && (_ = _.then((C) => C.getContextRaw()["@propagate"] !== !0 ? new dr.JsonLdContextNormalized(Object.assign(Object.assign({}, C.getContextRaw()), { "@propagate": !1, "@__propagateFallback": f.getContextRaw() })) : C), t.contextTree.setContext(o.slice(0, o.length - 1), _)), t.processingType[i] = !0;
  }
}
dn.EntryHandlerKeywordType = Bc;
var fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.EntryHandlerKeywordUnknownFallback = void 0;
const br = Ee;
class un {
  isPropertyHandler() {
    return !1;
  }
  isStackProcessor() {
    return !0;
  }
  async validate(t, r, n, o, a) {
    const i = await r.unaliasKeyword(n[o], n, o);
    return br.Util.isPotentialKeyword(i) ? !(!a && i === "@list") : !1;
  }
  async test(t, r, n, o, a) {
    return br.Util.isPotentialKeyword(n);
  }
  async handle(t, r, n, o, a, i) {
    const s = un.VALID_KEYWORDS_TYPES[n];
    s !== void 0 ? s && typeof a !== s.type && t.emitError(new br.ErrorCoded(`Invalid value type for '${n}' with value '${a}'`, s.errorCode)) : t.strictValues && t.emitError(new Error(`Unknown keyword '${n}' with value '${a}'`)), t.emittedStack[i] = !1;
  }
}
un.VALID_KEYWORDS_TYPES = {
  "@index": { type: "string", errorCode: br.ERROR_CODES.INVALID_INDEX_VALUE },
  "@list": null,
  "@reverse": { type: "object", errorCode: br.ERROR_CODES.INVALID_REVERSE_VALUE },
  "@set": null,
  "@value": null
};
fn.EntryHandlerKeywordUnknownFallback = un;
var cn = {};
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.EntryHandlerKeywordValue = void 0;
const Hc = Me;
class Gc extends Hc.EntryHandlerKeyword {
  constructor() {
    super("@value");
  }
  async validate(t, r, n, o, a) {
    const i = n[o];
    return i && !t.literalStack[o] && await this.test(t, r, i, n, o) && (t.literalStack[o] = !0), super.validate(t, r, n, o, a);
  }
  async test(t, r, n, o, a) {
    return await r.unaliasKeyword(o[a], o.slice(0, o.length - 1), a - 1, !0) === "@value";
  }
  async handle(t, r, n, o, a, i) {
    t.literalStack[i] = !0, delete t.unidentifiedValuesBuffer[i], delete t.unidentifiedGraphsBuffer[i], t.emittedStack[i] = !1;
  }
}
cn.EntryHandlerKeywordValue = Gc;
var fr = {}, hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.ContextTree = void 0;
class ro {
  constructor() {
    this.subTrees = {};
  }
  getContext(t) {
    if (t.length > 0) {
      const [r, ...n] = t, o = this.subTrees[r];
      if (o) {
        const a = o.getContext(n);
        if (a)
          return a.then(({ context: i, depth: s }) => ({ context: i, depth: s + 1 }));
      }
    }
    return this.context ? this.context.then((r) => ({ context: r, depth: 0 })) : null;
  }
  setContext(t, r) {
    if (t.length === 0)
      this.context = r;
    else {
      const [n, ...o] = t;
      let a = this.subTrees[n];
      a || (a = this.subTrees[n] = new ro()), a.setContext(o, r);
    }
  }
  removeContext(t) {
    this.setContext(t, null);
  }
}
hn.ContextTree = ro;
var ba;
function Kc() {
  if (ba)
    return fr;
  ba = 1, Object.defineProperty(fr, "__esModule", { value: !0 }), fr.ParsingContext = void 0;
  const e = Ee, t = Ft, r = hn, n = ns();
  let o = class rs {
    constructor(i) {
      this.contextParser = new e.ContextParser({ documentLoader: i.documentLoader, skipValidation: i.skipContextValidation }), this.streamingProfile = !!i.streamingProfile, this.baseIRI = i.baseIRI, this.produceGeneralizedRdf = !!i.produceGeneralizedRdf, this.allowSubjectList = !!i.allowSubjectList, this.processingMode = i.processingMode || n.JsonLdParser.DEFAULT_PROCESSING_MODE, this.strictValues = !!i.strictValues, this.validateValueIndexes = !!i.validateValueIndexes, this.defaultGraph = i.defaultGraph, this.rdfDirection = i.rdfDirection, this.normalizeLanguageTags = i.normalizeLanguageTags, this.streamingProfileAllowOutOfOrderPlainType = i.streamingProfileAllowOutOfOrderPlainType, this.rdfstar = i.rdfstar !== !1, this.rdfstarReverseInEmbedded = i.rdfstarReverseInEmbedded, this.topLevelProperties = !1, this.activeProcessingMode = parseFloat(this.processingMode), this.processingStack = [], this.processingType = [], this.emittedStack = [], this.idStack = [], this.graphStack = [], this.graphContainerTermStack = [], this.listPointerStack = [], this.contextTree = new r.ContextTree(), this.literalStack = [], this.validationStack = [], this.unaliasedKeywordCacheStack = [], this.jsonLiteralStack = [], this.unidentifiedValuesBuffer = [], this.unidentifiedGraphsBuffer = [], this.annotationsBuffer = [], this.pendingContainerFlushBuffers = [], this.parser = i.parser, i.context ? (this.rootContext = this.parseContext(i.context), this.rootContext.then((s) => this.validateContext(s))) : this.rootContext = Promise.resolve(new e.JsonLdContextNormalized(this.baseIRI ? { "@base": this.baseIRI, "@__baseDocument": !0 } : {}));
    }
    /**
     * Parse the given context with the configured options.
     * @param {JsonLdContext} context A context to parse.
     * @param {JsonLdContextNormalized} parentContext An optional parent context.
     * @param {boolean} ignoreProtection If @protected term checks should be ignored.
     * @return {Promise<JsonLdContextNormalized>} A promise resolving to the parsed context.
     */
    async parseContext(i, s, f) {
      return this.contextParser.parse(i, {
        baseIRI: this.baseIRI,
        ignoreProtection: f,
        normalizeLanguageTags: this.normalizeLanguageTags,
        parentContext: s,
        processingMode: this.activeProcessingMode
      });
    }
    /**
     * Check if the given context is valid.
     * If not, an error will be thrown.
     * @param {JsonLdContextNormalized} context A context.
     */
    validateContext(i) {
      const s = i.getContextRaw()["@version"];
      if (s) {
        if (this.activeProcessingMode && s > this.activeProcessingMode)
          throw new t.ErrorCoded(`Unsupported JSON-LD version '${s}' under active processing mode ${this.activeProcessingMode}.`, t.ERROR_CODES.PROCESSING_MODE_CONFLICT);
        if (this.activeProcessingMode && s < this.activeProcessingMode)
          throw new t.ErrorCoded(`Invalid JSON-LD version ${s} under active processing mode ${this.activeProcessingMode}.`, t.ERROR_CODES.INVALID_VERSION_VALUE);
        this.activeProcessingMode = s;
      }
    }
    /**
     * Get the context at the given path.
     * @param {keys} keys The path of keys to get the context at.
     * @param {number} offset The path offset, defaults to 1.
     * @return {Promise<JsonLdContextNormalized>} A promise resolving to a context.
     */
    async getContext(i, s = 1) {
      const f = i;
      for (; typeof i[i.length - 1] == "number"; )
        i = i.slice(0, i.length - 1);
      s && (i = i.slice(0, -s));
      const u = await this.getContextPropagationAware(i);
      let w = u.context.getContextRaw();
      for (let b = u.depth; b < f.length - s; b++) {
        const c = f[b], S = w[c];
        if (S && typeof S == "object" && "@context" in S) {
          const _ = (await this.parseContext(S, w, !0)).getContextRaw(), R = !(c in _) || _[c]["@context"]["@propagate"];
          (R !== !1 || b === f.length - 1 - s) && (w = Object.assign({}, _), delete w["@propagate"], w[c] = Object.assign({}, w[c]), "@id" in S && (w[c]["@id"] = S["@id"]), delete w[c]["@context"], R !== !1 && this.contextTree.setContext(f.slice(0, b + s), Promise.resolve(new e.JsonLdContextNormalized(w))));
        }
      }
      return new e.JsonLdContextNormalized(w);
    }
    /**
     * Get the context at the given path.
     * Non-propagating contexts will be skipped,
     * unless the context at that exact depth is retrieved.
     *
     * This ONLY takes into account context propagation logic,
     * so this should usually not be called directly,
     * call {@link #getContext} instead.
     *
     * @param keys The path of keys to get the context at.
     * @return {Promise<{ context: JsonLdContextNormalized, depth: number }>} A context and its depth.
     */
    async getContextPropagationAware(i) {
      const s = i.length;
      let f = null, u;
      do {
        u = !1, f && "@__propagateFallback" in f.context.getContextRaw() ? f.context = new e.JsonLdContextNormalized(f.context.getContextRaw()["@__propagateFallback"]) : (f && (i = i.slice(0, f.depth - 1)), f = await this.contextTree.getContext(i) || { context: await this.rootContext, depth: 0 });
        const h = i[i.length - 1];
        if (h in f.context.getContextRaw()) {
          const w = f.context.getContextRaw()[h];
          w && typeof w == "object" && "@context" in w && (u = !0);
        }
      } while (f.depth > 0 && f.context.getContextRaw()["@propagate"] === !1 && f.depth !== s && !u);
      return f.depth === 0 && f.context.getContextRaw()["@propagate"] === !1 && f.depth !== s && (f.context = new e.JsonLdContextNormalized({})), f;
    }
    /**
     * Start a new job for parsing the given value.
     * @param {any[]} keys The stack of keys.
     * @param value The value to parse.
     * @param {number} depth The depth to parse at.
     * @param {boolean} lastDepthCheck If the lastDepth check should be done for buffer draining.
     * @return {Promise<void>} A promise resolving when the job is done.
     */
    async newOnValueJob(i, s, f, u) {
      await this.parser.newOnValueJob(i, s, f, u);
    }
    /**
     * Flush the pending container flush buffers
     * @return {boolean} If any pending buffers were flushed.
     */
    async handlePendingContainerFlushBuffers() {
      if (this.pendingContainerFlushBuffers.length > 0) {
        for (const i of this.pendingContainerFlushBuffers)
          await this.parser.flushBuffer(i.depth, i.keys), this.parser.flushStacks(i.depth);
        return this.pendingContainerFlushBuffers.splice(0, this.pendingContainerFlushBuffers.length), !0;
      } else
        return !1;
    }
    /**
     * Emit the given quad into the output stream.
     * @param {number} depth The depth the quad was generated at.
     * @param {Quad} quad A quad to emit.
     */
    emitQuad(i, s) {
      i === 1 && (this.topLevelProperties = !0), this.parser.push(s);
    }
    /**
     * Emit the given error into the output stream.
     * @param {Error} error An error to emit.
     */
    emitError(i) {
      this.parser.emit("error", i);
    }
    /**
     * Emit the given context into the output stream under the 'context' event.
     * @param {JsonLdContext} context A context to emit.
     */
    emitContext(i) {
      this.parser.emit("context", i);
    }
    /**
     * Safely get or create the depth value of {@link ParsingContext.unidentifiedValuesBuffer}.
     * @param {number} depth A depth.
     * @return {{predicate: Term; object: Term; reverse: boolean}[]} An element of
     *                                                               {@link ParsingContext.unidentifiedValuesBuffer}.
     */
    getUnidentifiedValueBufferSafe(i) {
      let s = this.unidentifiedValuesBuffer[i];
      return s || (s = [], this.unidentifiedValuesBuffer[i] = s), s;
    }
    /**
     * Safely get or create the depth value of {@link ParsingContext.unidentifiedGraphsBuffer}.
     * @param {number} depth A depth.
     * @return {{predicate: Term; object: Term; reverse: boolean}[]} An element of
     *                                                               {@link ParsingContext.unidentifiedGraphsBuffer}.
     */
    getUnidentifiedGraphBufferSafe(i) {
      let s = this.unidentifiedGraphsBuffer[i];
      return s || (s = [], this.unidentifiedGraphsBuffer[i] = s), s;
    }
    /**
     * Safely get or create the depth value of {@link ParsingContext.annotationsBuffer}.
     * @param {number} depth A depth.
     * @return {} An element of {@link ParsingContext.annotationsBuffer}.
     */
    getAnnotationsBufferSafe(i) {
      let s = this.annotationsBuffer[i];
      return s || (s = [], this.annotationsBuffer[i] = s), s;
    }
    /**
     * @return IExpandOptions The expand options for the active processing mode.
     */
    getExpandOptions() {
      return rs.EXPAND_OPTIONS[this.activeProcessingMode];
    }
    /**
     * Shift the stack at the given offset to the given depth.
     *
     * This will override anything in the stack at `depth`,
     * and this will remove anything at `depth + depthOffset`
     *
     * @param depth The target depth.
     * @param depthOffset The origin depth, relative to `depth`.
     */
    shiftStack(i, s) {
      const f = this.idStack[i + s];
      if (f && (this.idStack[i] = f, this.emittedStack[i] = !0, delete this.idStack[i + s]), this.pendingContainerFlushBuffers.length)
        for (const u of this.pendingContainerFlushBuffers)
          u.depth >= i + s && (u.depth -= s, u.keys.splice(i, s));
      this.unidentifiedValuesBuffer[i + s] && (this.unidentifiedValuesBuffer[i] = this.unidentifiedValuesBuffer[i + s], delete this.unidentifiedValuesBuffer[i + s]), this.annotationsBuffer[i + s - 1] && (this.annotationsBuffer[i - 1] || (this.annotationsBuffer[i - 1] = []), this.annotationsBuffer[i - 1] = [
        ...this.annotationsBuffer[i - 1],
        ...this.annotationsBuffer[i + s - 1]
      ], delete this.annotationsBuffer[i + s - 1]);
    }
  };
  return o.EXPAND_OPTIONS = {
    1: {
      allowPrefixForcing: !1,
      allowPrefixNonGenDelims: !1,
      allowVocabRelativeToBase: !1
    },
    1.1: {
      allowPrefixForcing: !0,
      allowPrefixNonGenDelims: !1,
      allowVocabRelativeToBase: !0
    }
  }, fr.ParsingContext = o, fr;
}
var bn = {};
Object.defineProperty(bn, "__esModule", { value: !0 });
bn.EntryHandlerKeywordAnnotation = void 0;
const Jc = Me, ya = Ee;
class qc extends Jc.EntryHandlerKeyword {
  constructor() {
    super("@annotation");
  }
  async handle(t, r, n, o, a, i) {
    (typeof a == "string" || typeof a == "object" && a["@value"]) && t.emitError(new ya.ErrorCoded(`Found illegal annotation value: ${JSON.stringify(a)}`, ya.ERROR_CODES.INVALID_ANNOTATION));
  }
}
bn.EntryHandlerKeywordAnnotation = qc;
var pa;
function ns() {
  if (pa)
    return nr;
  pa = 1, Object.defineProperty(nr, "__esModule", { value: !0 }), nr.JsonLdParser = void 0;
  const e = Ys, t = Ee, r = Rc, n = Qr, o = ts(), a = rn, i = en(), s = nn, f = on, u = an, h = ln, w = sn, b = dn, c = fn, S = cn, _ = Kc(), R = Ct(), C = al, L = bn;
  let g = class Lt extends r.Transform {
    constructor(T) {
      super({ readableObjectMode: !0 }), T = T || {}, this.options = T, this.parsingContext = new _.ParsingContext(Object.assign({ parser: this }, T)), this.util = new R.Util({ dataFactory: T.dataFactory, parsingContext: this.parsingContext }), this.jsonParser = new e(), this.contextJobs = [], this.typeJobs = [], this.contextAwaitingJobs = [], this.lastDepth = 0, this.lastKeys = [], this.lastOnValueJob = Promise.resolve(), this.attachJsonParserListeners(), this.on("end", () => {
        typeof this.jsonParser.mode < "u" && this.emit("error", new Error("Unclosed document"));
      });
    }
    /**
     * Construct a JsonLdParser from the given HTTP response.
     *
     * This will throw an error if no valid JSON response is received
     * (application/ld+json, application/json, or something+json).
     *
     * For raw JSON responses, exactly one link header pointing to a JSON-LD context is required.
     *
     * This method is not responsible for handling redirects.
     *
     * @param baseIRI The URI of the received response.
     * @param mediaType The received content type.
     * @param headers Optional HTTP headers.
     * @param options Optional parser options.
     */
    static fromHttpResponse(T, D, H, B) {
      let I, O = ["application/activity+json"];
      if (B && B.wellKnownMediaTypes && (O = B.wellKnownMediaTypes), D !== "application/ld+json" && !O.includes(D)) {
        if (D !== "application/json" && !D.endsWith("+json"))
          throw new t.ErrorCoded(`Unsupported JSON-LD media type ${D}`, t.ERROR_CODES.LOADING_DOCUMENT_FAILED);
        if (H && H.has("Link") && H.forEach((k, E) => {
          if (E === "link") {
            const x = (0, C.parse)(k);
            for (const V of x.get("rel", "http://www.w3.org/ns/json-ld#context")) {
              if (I)
                throw new t.ErrorCoded("Multiple JSON-LD context link headers were found on " + T, t.ERROR_CODES.MULTIPLE_CONTEXT_LINK_HEADERS);
              I = V.uri;
            }
          }
        }), !I && !(B != null && B.ignoreMissingContextLinkHeader))
          throw new t.ErrorCoded(`Missing context link header for media type ${D} on ${T}`, t.ERROR_CODES.LOADING_DOCUMENT_FAILED);
      }
      let U;
      if (H && H.has("Content-Type")) {
        const k = H.get("Content-Type"), E = /; *profile=([^"]*)/.exec(k);
        E && E[1] === "http://www.w3.org/ns/json-ld#streaming" && (U = !0);
      }
      return new Lt(Object.assign({
        baseIRI: T,
        context: I,
        streamingProfile: U
      }, B || {}));
    }
    /**
     * Parses the given text stream into a quad stream.
     * @param {NodeJS.EventEmitter} stream A text stream.
     * @return {RDF.Stream} A quad stream.
     */
    import(T) {
      if ("pipe" in T) {
        T.on("error", (H) => D.emit("error", H));
        const D = T.pipe(new Lt(this.options));
        return D;
      } else {
        const D = new r.PassThrough({ readableObjectMode: !0 });
        T.on("error", (B) => H.emit("error", B)), T.on("data", (B) => D.push(B)), T.on("end", () => D.push(null));
        const H = D.pipe(new Lt(this.options));
        return H;
      }
    }
    _transform(T, D, H) {
      this.jsonParser.write(T), this.lastOnValueJob.then(() => H(), (B) => H(B));
    }
    /**
     * Start a new job for parsing the given value.
     *
     * This will let the first valid {@link IEntryHandler} handle the entry.
     *
     * @param {any[]} keys The stack of keys.
     * @param value The value to parse.
     * @param {number} depth The depth to parse at.
     * @param {boolean} lastDepthCheck If the lastDepth check should be done for buffer draining.
     * @return {Promise<void>} A promise resolving when the job is done.
     */
    async newOnValueJob(T, D, H, B) {
      let I = !0;
      if (B && H < this.lastDepth) {
        const x = this.parsingContext.listPointerStack[this.lastDepth];
        x && (x.value && this.push(this.util.dataFactory.quad(x.value, this.util.rdfRest, this.util.rdfNil, this.util.getDefaultGraph())), x.listId.listHead = !0, this.parsingContext.idStack[x.listRootDepth + 1] = [x.listId], this.parsingContext.listPointerStack.splice(this.lastDepth, 1)), await o.EntryHandlerContainer.isBufferableContainerHandler(this.parsingContext, this.lastKeys, this.lastDepth) ? (this.parsingContext.pendingContainerFlushBuffers.push({ depth: this.lastDepth, keys: this.lastKeys.slice(0, this.lastKeys.length) }), I = !1) : await this.flushBuffer(this.lastDepth, this.lastKeys);
      }
      const O = await this.util.unaliasKeyword(T[H], T, H), U = await this.util.unaliasKeywordParent(T, H);
      this.parsingContext.emittedStack[H] = !0;
      let k = !0;
      t.Util.isValidKeyword(O) && U === "@reverse" && O !== "@context" && this.emit("error", new t.ErrorCoded(`Found the @id '${D}' inside an @reverse property`, t.ERROR_CODES.INVALID_REVERSE_PROPERTY_MAP));
      let E = !1;
      this.parsingContext.validationStack.length > 1 && (E = this.parsingContext.validationStack[this.parsingContext.validationStack.length - 1].property);
      for (let x = Math.max(1, this.parsingContext.validationStack.length - 1); x < T.length - 1; x++) {
        const V = this.parsingContext.validationStack[x] || (this.parsingContext.validationStack[x] = await this.validateKey(T.slice(0, x + 1), x, E));
        if (V.valid)
          !E && V.property && (E = !0);
        else {
          this.parsingContext.emittedStack[H] = !1, k = !1;
          break;
        }
      }
      if (await this.util.isLiteral(T, H) && (k = !1), k)
        for (const x of Lt.ENTRY_HANDLERS) {
          const V = await x.test(this.parsingContext, this.util, O, T, H);
          if (V) {
            await x.handle(this.parsingContext, this.util, O, T, D, H, V), x.isStackProcessor() && (this.parsingContext.processingStack[H] = !0);
            break;
          }
        }
      H === 0 && Array.isArray(D) && await this.util.validateValueIndexes(D), I && H < this.lastDepth && this.flushStacks(this.lastDepth), this.lastDepth = H, this.lastKeys = T, this.parsingContext.unaliasedKeywordCacheStack.splice(H - 1);
    }
    /**
     * Flush the processing stacks at the given depth.
     * @param {number} depth A depth.
     */
    flushStacks(T) {
      this.parsingContext.processingStack.splice(T, 1), this.parsingContext.processingType.splice(T, 1), this.parsingContext.emittedStack.splice(T, 1), this.parsingContext.idStack.splice(T, 1), this.parsingContext.graphStack.splice(T + 1, 1), this.parsingContext.graphContainerTermStack.splice(T, 1), this.parsingContext.jsonLiteralStack.splice(T, 1), this.parsingContext.validationStack.splice(T - 1, 2), this.parsingContext.literalStack.splice(T, this.parsingContext.literalStack.length - T), this.parsingContext.annotationsBuffer.splice(T, 1);
    }
    /**
     * Flush buffers for the given depth.
     *
     * This should be called after the last entry at a given depth was processed.
     *
     * @param {number} depth A depth.
     * @param {any[]} keys A stack of keys.
     * @return {Promise<void>} A promise resolving if flushing is done.
     */
    async flushBuffer(T, D) {
      let H = this.parsingContext.idStack[T];
      !!H || (H = this.parsingContext.idStack[T] = [this.util.dataFactory.blankNode()]);
      const I = this.parsingContext.unidentifiedValuesBuffer[T];
      if (I) {
        for (const k of H) {
          const E = await this.util.getDepthOffsetGraph(T, D), x = this.parsingContext.graphStack[T] || E >= 0 ? this.parsingContext.idStack[T - E - 1] : [await this.util.getGraphContainerValue(D, T)];
          if (x)
            for (const V of x) {
              this.parsingContext.emittedStack[T] = !0;
              for (const W of I)
                this.util.emitQuadChecked(T, k, W.predicate, W.object, V, W.reverse, W.isEmbedded);
            }
          else {
            const V = this.parsingContext.getUnidentifiedGraphBufferSafe(T - await this.util.getDepthOffsetGraph(T, D) - 1);
            for (const W of I)
              W.reverse ? V.push({
                object: k,
                predicate: W.predicate,
                subject: W.object,
                isEmbedded: W.isEmbedded
              }) : V.push({
                object: W.object,
                predicate: W.predicate,
                subject: k,
                isEmbedded: W.isEmbedded
              });
          }
        }
        this.parsingContext.unidentifiedValuesBuffer.splice(T, 1), this.parsingContext.literalStack.splice(T, 1), this.parsingContext.jsonLiteralStack.splice(T, 1);
      }
      const O = this.parsingContext.unidentifiedGraphsBuffer[T];
      if (O) {
        for (const k of H) {
          const E = T === 1 && k.termType === "BlankNode" && !this.parsingContext.topLevelProperties ? this.util.getDefaultGraph() : k;
          this.parsingContext.emittedStack[T] = !0;
          for (const x of O)
            this.parsingContext.emitQuad(T, this.util.dataFactory.quad(x.subject, x.predicate, x.object, E));
        }
        this.parsingContext.unidentifiedGraphsBuffer.splice(T, 1);
      }
      const U = this.parsingContext.annotationsBuffer[T];
      if (U) {
        U.length > 0 && T === 1 && this.parsingContext.emitError(new t.ErrorCoded("Annotations can not be made on top-level nodes", t.ERROR_CODES.INVALID_ANNOTATION));
        const k = this.parsingContext.getAnnotationsBufferSafe(T - 1);
        for (const E of U)
          k.push(E);
        delete this.parsingContext.annotationsBuffer[T];
      }
    }
    /**
     * Check if at least one {@link IEntryHandler} validates the entry to true.
     * @param {any[]} keys A stack of keys.
     * @param {number} depth A depth.
     * @param {boolean} inProperty If the current depth is part of a valid property node.
     * @return {Promise<{ valid: boolean, property: boolean }>} A promise resolving to true or false.
     */
    async validateKey(T, D, H) {
      for (const B of Lt.ENTRY_HANDLERS)
        if (await B.validate(this.parsingContext, this.util, T, D, H))
          return { valid: !0, property: H || B.isPropertyHandler() };
      return { valid: !1, property: !1 };
    }
    /**
     * Attach all required listeners to the JSON parser.
     *
     * This should only be called once.
     */
    attachJsonParserListeners() {
      this.jsonParser.onValue = (T) => {
        const D = this.jsonParser.stack.length, H = new Array(D + 1).fill(0).map((B, I) => I === D ? this.jsonParser.key : this.jsonParser.stack[I].key);
        if (!this.isParsingContextInner(D)) {
          const B = () => this.newOnValueJob(H, T, D, !0);
          if (!this.parsingContext.streamingProfile && !this.parsingContext.contextTree.getContext(H.slice(0, -1)))
            if (H[D] === "@context") {
              let I = this.contextJobs[D];
              I || (I = this.contextJobs[D] = []), I.push(B);
            } else
              this.contextAwaitingJobs.push({ job: B, keys: H, depth: D });
          else
            this.lastOnValueJob = this.lastOnValueJob.then(B);
          !this.parsingContext.streamingProfile && D === 0 && (this.lastOnValueJob = this.lastOnValueJob.then(() => this.executeBufferedJobs()));
        }
      }, this.jsonParser.onError = (T) => {
        this.emit("error", T);
      };
    }
    /**
     * Check if the parser is currently parsing an element that is part of an @context entry.
     * @param {number} depth A depth.
     * @return {boolean} A boolean.
     */
    isParsingContextInner(T) {
      for (let D = T; D > 0; D--)
        if (this.jsonParser.stack[D - 1].key === "@context")
          return !0;
      return !1;
    }
    /**
     * Execute all buffered jobs.
     * @return {Promise<void>} A promise resolving if all jobs are finished.
     */
    async executeBufferedJobs() {
      for (const D of this.contextJobs)
        if (D)
          for (const H of D)
            await H();
      this.parsingContext.unaliasedKeywordCacheStack.splice(0);
      const T = [];
      for (const D of this.contextAwaitingJobs)
        await this.util.unaliasKeyword(D.keys[D.depth], D.keys, D.depth, !0) === "@type" || typeof D.keys[D.depth] == "number" && await this.util.unaliasKeyword(D.keys[D.depth - 1], D.keys, D.depth - 1, !0) === "@type" ? this.typeJobs.push({ job: D.job, keys: D.keys.slice(0, D.keys.length - 1) }) : T.push(D);
      for (const D of T) {
        if (this.typeJobs.length > 0) {
          const H = [], B = [];
          for (let U = 0; U < this.typeJobs.length; U++) {
            const k = this.typeJobs[U];
            R.Util.isPrefixArray(k.keys, D.keys) && (H.push(k), B.push(U));
          }
          const I = H.sort((U, k) => U.keys.length - k.keys.length);
          for (const U of I)
            await U.job();
          const O = B.sort().reverse();
          for (const U of O)
            this.typeJobs.splice(U, 1);
        }
        await D.job();
      }
    }
  };
  return g.DEFAULT_PROCESSING_MODE = "1.1", g.ENTRY_HANDLERS = [
    new n.EntryHandlerArrayValue(),
    new s.EntryHandlerKeywordContext(),
    new u.EntryHandlerKeywordId(),
    new h.EntryHandlerKeywordIncluded(),
    new f.EntryHandlerKeywordGraph(),
    new w.EntryHandlerKeywordNest(),
    new b.EntryHandlerKeywordType(),
    new S.EntryHandlerKeywordValue(),
    new L.EntryHandlerKeywordAnnotation(),
    new o.EntryHandlerContainer(),
    new c.EntryHandlerKeywordUnknownFallback(),
    new i.EntryHandlerPredicate(),
    new a.EntryHandlerInvalidFallback()
  ], nr.JsonLdParser = g, nr;
}
(function(e) {
  var t = Xe && Xe.__createBinding || (Object.create ? function(n, o, a, i) {
    i === void 0 && (i = a);
    var s = Object.getOwnPropertyDescriptor(o, a);
    (!s || ("get" in s ? !o.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
      return o[a];
    } }), Object.defineProperty(n, i, s);
  } : function(n, o, a, i) {
    i === void 0 && (i = a), n[i] = o[a];
  }), r = Xe && Xe.__exportStar || function(n, o) {
    for (var a in n)
      a !== "default" && !Object.prototype.hasOwnProperty.call(o, a) && t(o, n, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(ns(), e);
})(ol);
var is = { exports: {} }, ri = { exports: {} }, le = {
  ArrayIsArray(e) {
    return Array.isArray(e);
  },
  ArrayPrototypeIncludes(e, t) {
    return e.includes(t);
  },
  ArrayPrototypeIndexOf(e, t) {
    return e.indexOf(t);
  },
  ArrayPrototypeJoin(e, t) {
    return e.join(t);
  },
  ArrayPrototypeMap(e, t) {
    return e.map(t);
  },
  ArrayPrototypePop(e, t) {
    return e.pop(t);
  },
  ArrayPrototypePush(e, t) {
    return e.push(t);
  },
  ArrayPrototypeSlice(e, t, r) {
    return e.slice(t, r);
  },
  Error,
  FunctionPrototypeCall(e, t, ...r) {
    return e.call(t, ...r);
  },
  FunctionPrototypeSymbolHasInstance(e, t) {
    return Function.prototype[Symbol.hasInstance].call(e, t);
  },
  MathFloor: Math.floor,
  Number,
  NumberIsInteger: Number.isInteger,
  NumberIsNaN: Number.isNaN,
  NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
  NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
  NumberParseInt: Number.parseInt,
  ObjectDefineProperties(e, t) {
    return Object.defineProperties(e, t);
  },
  ObjectDefineProperty(e, t, r) {
    return Object.defineProperty(e, t, r);
  },
  ObjectGetOwnPropertyDescriptor(e, t) {
    return Object.getOwnPropertyDescriptor(e, t);
  },
  ObjectKeys(e) {
    return Object.keys(e);
  },
  ObjectSetPrototypeOf(e, t) {
    return Object.setPrototypeOf(e, t);
  },
  Promise,
  PromisePrototypeCatch(e, t) {
    return e.catch(t);
  },
  PromisePrototypeThen(e, t, r) {
    return e.then(t, r);
  },
  PromiseReject(e) {
    return Promise.reject(e);
  },
  PromiseResolve(e) {
    return Promise.resolve(e);
  },
  ReflectApply: Reflect.apply,
  RegExpPrototypeTest(e, t) {
    return e.test(t);
  },
  SafeSet: Set,
  String,
  StringPrototypeSlice(e, t, r) {
    return e.slice(t, r);
  },
  StringPrototypeToLowerCase(e) {
    return e.toLowerCase();
  },
  StringPrototypeToUpperCase(e) {
    return e.toUpperCase();
  },
  StringPrototypeTrim(e) {
    return e.trim();
  },
  Symbol,
  SymbolFor: Symbol.for,
  SymbolAsyncIterator: Symbol.asyncIterator,
  SymbolHasInstance: Symbol.hasInstance,
  SymbolIterator: Symbol.iterator,
  SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"),
  SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"),
  TypedArrayPrototypeSet(e, t, r) {
    return e.set(t, r);
  },
  Boolean,
  Uint8Array
}, os = { exports: {} };
(function(e) {
  const t = ye, { kResistStopPropagation: r, SymbolDispose: n } = le, o = globalThis.AbortSignal || Ue().AbortSignal, a = globalThis.AbortController || Ue().AbortController, i = Object.getPrototypeOf(async function() {
  }).constructor, s = globalThis.Blob || t.Blob, f = typeof s < "u" ? function(c) {
    return c instanceof s;
  } : function(c) {
    return !1;
  }, u = (b, c) => {
    if (b !== void 0 && (b === null || typeof b != "object" || !("aborted" in b)))
      throw new ERR_INVALID_ARG_TYPE(c, "AbortSignal", b);
  }, h = (b, c) => {
    if (typeof b != "function")
      throw new ERR_INVALID_ARG_TYPE(c, "Function", b);
  };
  class w extends Error {
    constructor(c) {
      if (!Array.isArray(c))
        throw new TypeError(`Expected input to be an Array, got ${typeof c}`);
      let S = "";
      for (let _ = 0; _ < c.length; _++)
        S += `    ${c[_].stack}
`;
      super(S), this.name = "AggregateError", this.errors = c;
    }
  }
  e.exports = {
    AggregateError: w,
    kEmptyObject: Object.freeze({}),
    once(b) {
      let c = !1;
      return function(...S) {
        c || (c = !0, b.apply(this, S));
      };
    },
    createDeferredPromise: function() {
      let b, c;
      return {
        promise: new Promise((_, R) => {
          b = _, c = R;
        }),
        resolve: b,
        reject: c
      };
    },
    promisify(b) {
      return new Promise((c, S) => {
        b((_, ...R) => _ ? S(_) : c(...R));
      });
    },
    debuglog() {
      return function() {
      };
    },
    format(b, ...c) {
      return b.replace(/%([sdifj])/g, function(...[S, _]) {
        const R = c.shift();
        return _ === "f" ? R.toFixed(6) : _ === "j" ? JSON.stringify(R) : _ === "s" && typeof R == "object" ? `${R.constructor !== Object ? R.constructor.name : ""} {}`.trim() : R.toString();
      });
    },
    inspect(b) {
      switch (typeof b) {
        case "string":
          if (b.includes("'"))
            if (b.includes('"')) {
              if (!b.includes("`") && !b.includes("${"))
                return `\`${b}\``;
            } else
              return `"${b}"`;
          return `'${b}'`;
        case "number":
          return isNaN(b) ? "NaN" : Object.is(b, -0) ? String(b) : b;
        case "bigint":
          return `${String(b)}n`;
        case "boolean":
        case "undefined":
          return String(b);
        case "object":
          return "{}";
      }
    },
    types: {
      isAsyncFunction(b) {
        return b instanceof i;
      },
      isArrayBufferView(b) {
        return ArrayBuffer.isView(b);
      }
    },
    isBlob: f,
    deprecate(b, c) {
      return b;
    },
    addAbortListener: lt.addAbortListener || function(c, S) {
      if (c === void 0)
        throw new ERR_INVALID_ARG_TYPE("signal", "AbortSignal", c);
      u(c, "signal"), h(S, "listener");
      let _;
      return c.aborted ? queueMicrotask(() => S()) : (c.addEventListener("abort", S, {
        __proto__: null,
        once: !0,
        [r]: !0
      }), _ = () => {
        c.removeEventListener("abort", S);
      }), {
        __proto__: null,
        [n]() {
          var R;
          (R = _) === null || R === void 0 || R();
        }
      };
    },
    AbortSignalAny: o.any || function(c) {
      if (c.length === 1)
        return c[0];
      const S = new a(), _ = () => S.abort();
      return c.forEach((R) => {
        u(R, "signals"), R.addEventListener("abort", _, {
          once: !0
        });
      }), S.signal.addEventListener(
        "abort",
        () => {
          c.forEach((R) => R.removeEventListener("abort", _));
        },
        {
          once: !0
        }
      ), S.signal;
    }
  }, e.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
})(os);
var Re = os.exports, no = {};
const { format: Yc, inspect: Mr, AggregateError: zc } = Re, Xc = globalThis.AggregateError || zc, Qc = Symbol("kIsNodeError"), Zc = [
  "string",
  "function",
  "number",
  "object",
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  "Function",
  "Object",
  "boolean",
  "bigint",
  "symbol"
], eh = /^([A-Z][a-z0-9]*)+$/, th = "__node_internal_", yn = {};
function Rt(e, t) {
  if (!e)
    throw new yn.ERR_INTERNAL_ASSERTION(t);
}
function _a(e) {
  let t = "", r = e.length;
  const n = e[0] === "-" ? 1 : 0;
  for (; r >= n + 4; r -= 3)
    t = `_${e.slice(r - 3, r)}${t}`;
  return `${e.slice(0, r)}${t}`;
}
function rh(e, t, r) {
  if (typeof t == "function")
    return Rt(
      t.length <= r.length,
      // Default options do not count.
      `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${t.length}).`
    ), t(...r);
  const n = (t.match(/%[dfijoOs]/g) || []).length;
  return Rt(
    n === r.length,
    `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${n}).`
  ), r.length === 0 ? t : Yc(t, ...r);
}
function be(e, t, r) {
  r || (r = Error);
  class n extends r {
    constructor(...a) {
      super(rh(e, t, a));
    }
    toString() {
      return `${this.name} [${e}]: ${this.message}`;
    }
  }
  Object.defineProperties(n.prototype, {
    name: {
      value: r.name,
      writable: !0,
      enumerable: !1,
      configurable: !0
    },
    toString: {
      value() {
        return `${this.name} [${e}]: ${this.message}`;
      },
      writable: !0,
      enumerable: !1,
      configurable: !0
    }
  }), n.prototype.code = e, n.prototype[Qc] = !0, yn[e] = n;
}
function wa(e) {
  const t = th + e.name;
  return Object.defineProperty(e, "name", {
    value: t
  }), e;
}
function nh(e, t) {
  if (e && t && e !== t) {
    if (Array.isArray(t.errors))
      return t.errors.push(e), t;
    const r = new Xc([t, e], t.message);
    return r.code = t.code, r;
  }
  return e || t;
}
let ih = class extends Error {
  constructor(t = "The operation was aborted", r = void 0) {
    if (r !== void 0 && typeof r != "object")
      throw new yn.ERR_INVALID_ARG_TYPE("options", "Object", r);
    super(t, r), this.code = "ABORT_ERR", this.name = "AbortError";
  }
};
be("ERR_ASSERTION", "%s", Error);
be(
  "ERR_INVALID_ARG_TYPE",
  (e, t, r) => {
    Rt(typeof e == "string", "'name' must be a string"), Array.isArray(t) || (t = [t]);
    let n = "The ";
    e.endsWith(" argument") ? n += `${e} ` : n += `"${e}" ${e.includes(".") ? "property" : "argument"} `, n += "must be ";
    const o = [], a = [], i = [];
    for (const f of t)
      Rt(typeof f == "string", "All expected entries have to be of type string"), Zc.includes(f) ? o.push(f.toLowerCase()) : eh.test(f) ? a.push(f) : (Rt(f !== "object", 'The value "object" should be written as "Object"'), i.push(f));
    if (a.length > 0) {
      const f = o.indexOf("object");
      f !== -1 && (o.splice(o, f, 1), a.push("Object"));
    }
    if (o.length > 0) {
      switch (o.length) {
        case 1:
          n += `of type ${o[0]}`;
          break;
        case 2:
          n += `one of type ${o[0]} or ${o[1]}`;
          break;
        default: {
          const f = o.pop();
          n += `one of type ${o.join(", ")}, or ${f}`;
        }
      }
      (a.length > 0 || i.length > 0) && (n += " or ");
    }
    if (a.length > 0) {
      switch (a.length) {
        case 1:
          n += `an instance of ${a[0]}`;
          break;
        case 2:
          n += `an instance of ${a[0]} or ${a[1]}`;
          break;
        default: {
          const f = a.pop();
          n += `an instance of ${a.join(", ")}, or ${f}`;
        }
      }
      i.length > 0 && (n += " or ");
    }
    switch (i.length) {
      case 0:
        break;
      case 1:
        i[0].toLowerCase() !== i[0] && (n += "an "), n += `${i[0]}`;
        break;
      case 2:
        n += `one of ${i[0]} or ${i[1]}`;
        break;
      default: {
        const f = i.pop();
        n += `one of ${i.join(", ")}, or ${f}`;
      }
    }
    if (r == null)
      n += `. Received ${r}`;
    else if (typeof r == "function" && r.name)
      n += `. Received function ${r.name}`;
    else if (typeof r == "object") {
      var s;
      if ((s = r.constructor) !== null && s !== void 0 && s.name)
        n += `. Received an instance of ${r.constructor.name}`;
      else {
        const f = Mr(r, {
          depth: -1
        });
        n += `. Received ${f}`;
      }
    } else {
      let f = Mr(r, {
        colors: !1
      });
      f.length > 25 && (f = `${f.slice(0, 25)}...`), n += `. Received type ${typeof r} (${f})`;
    }
    return n;
  },
  TypeError
);
be(
  "ERR_INVALID_ARG_VALUE",
  (e, t, r = "is invalid") => {
    let n = Mr(t);
    return n.length > 128 && (n = n.slice(0, 128) + "..."), `The ${e.includes(".") ? "property" : "argument"} '${e}' ${r}. Received ${n}`;
  },
  TypeError
);
be(
  "ERR_INVALID_RETURN_VALUE",
  (e, t, r) => {
    var n;
    const o = r != null && (n = r.constructor) !== null && n !== void 0 && n.name ? `instance of ${r.constructor.name}` : `type ${typeof r}`;
    return `Expected ${e} to be returned from the "${t}" function but got ${o}.`;
  },
  TypeError
);
be(
  "ERR_MISSING_ARGS",
  (...e) => {
    Rt(e.length > 0, "At least one arg needs to be specified");
    let t;
    const r = e.length;
    switch (e = (Array.isArray(e) ? e : [e]).map((n) => `"${n}"`).join(" or "), r) {
      case 1:
        t += `The ${e[0]} argument`;
        break;
      case 2:
        t += `The ${e[0]} and ${e[1]} arguments`;
        break;
      default:
        {
          const n = e.pop();
          t += `The ${e.join(", ")}, and ${n} arguments`;
        }
        break;
    }
    return `${t} must be specified`;
  },
  TypeError
);
be(
  "ERR_OUT_OF_RANGE",
  (e, t, r) => {
    Rt(t, 'Missing "range" argument');
    let n;
    return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? n = _a(String(r)) : typeof r == "bigint" ? (n = String(r), (r > 2n ** 32n || r < -(2n ** 32n)) && (n = _a(n)), n += "n") : n = Mr(r), `The value of "${e}" is out of range. It must be ${t}. Received ${n}`;
  },
  RangeError
);
be("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
be("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
be("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
be("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
be("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
be("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
be("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
be("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
be("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
be("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
be("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
var me = {
  AbortError: ih,
  aggregateTwoErrors: wa(nh),
  hideStackFrames: wa,
  codes: yn
};
const {
  ArrayIsArray: io,
  ArrayPrototypeIncludes: as,
  ArrayPrototypeJoin: ls,
  ArrayPrototypeMap: oh,
  NumberIsInteger: oo,
  NumberIsNaN: ah,
  NumberMAX_SAFE_INTEGER: lh,
  NumberMIN_SAFE_INTEGER: sh,
  NumberParseInt: dh,
  ObjectPrototypeHasOwnProperty: fh,
  RegExpPrototypeExec: ss,
  String: uh,
  StringPrototypeToUpperCase: ch,
  StringPrototypeTrim: hh
} = le, {
  hideStackFrames: $e,
  codes: { ERR_SOCKET_BAD_PORT: bh, ERR_INVALID_ARG_TYPE: _e, ERR_INVALID_ARG_VALUE: Ht, ERR_OUT_OF_RANGE: It, ERR_UNKNOWN_SIGNAL: ga }
} = me, { normalizeEncoding: yh } = Re, { isAsyncFunction: ph, isArrayBufferView: _h } = Re.types, Ea = {};
function wh(e) {
  return e === (e | 0);
}
function gh(e) {
  return e === e >>> 0;
}
const Eh = /^[0-7]+$/, Sh = "must be a 32-bit unsigned integer or an octal string";
function Rh(e, t, r) {
  if (typeof e > "u" && (e = r), typeof e == "string") {
    if (ss(Eh, e) === null)
      throw new Ht(t, e, Sh);
    e = dh(e, 8);
  }
  return ds(e, t), e;
}
const Ah = $e((e, t, r = sh, n = lh) => {
  if (typeof e != "number")
    throw new _e(t, "number", e);
  if (!oo(e))
    throw new It(t, "an integer", e);
  if (e < r || e > n)
    throw new It(t, `>= ${r} && <= ${n}`, e);
}), Ih = $e((e, t, r = -2147483648, n = 2147483647) => {
  if (typeof e != "number")
    throw new _e(t, "number", e);
  if (!oo(e))
    throw new It(t, "an integer", e);
  if (e < r || e > n)
    throw new It(t, `>= ${r} && <= ${n}`, e);
}), ds = $e((e, t, r = !1) => {
  if (typeof e != "number")
    throw new _e(t, "number", e);
  if (!oo(e))
    throw new It(t, "an integer", e);
  const n = r ? 1 : 0, o = 4294967295;
  if (e < n || e > o)
    throw new It(t, `>= ${n} && <= ${o}`, e);
});
function ao(e, t) {
  if (typeof e != "string")
    throw new _e(t, "string", e);
}
function mh(e, t, r = void 0, n) {
  if (typeof e != "number")
    throw new _e(t, "number", e);
  if (r != null && e < r || n != null && e > n || (r != null || n != null) && ah(e))
    throw new It(
      t,
      `${r != null ? `>= ${r}` : ""}${r != null && n != null ? " && " : ""}${n != null ? `<= ${n}` : ""}`,
      e
    );
}
const vh = $e((e, t, r) => {
  if (!as(r, e)) {
    const o = "must be one of: " + ls(
      oh(r, (a) => typeof a == "string" ? `'${a}'` : uh(a)),
      ", "
    );
    throw new Ht(t, e, o);
  }
});
function fs(e, t) {
  if (typeof e != "boolean")
    throw new _e(t, "boolean", e);
}
function ni(e, t, r) {
  return e == null || !fh(e, t) ? r : e[t];
}
const Th = $e((e, t, r = null) => {
  const n = ni(r, "allowArray", !1), o = ni(r, "allowFunction", !1);
  if (!ni(r, "nullable", !1) && e === null || !n && io(e) || typeof e != "object" && (!o || typeof e != "function"))
    throw new _e(t, "Object", e);
}), Ch = $e((e, t) => {
  if (e != null && typeof e != "object" && typeof e != "function")
    throw new _e(t, "a dictionary", e);
}), pn = $e((e, t, r = 0) => {
  if (!io(e))
    throw new _e(t, "Array", e);
  if (e.length < r) {
    const n = `must be longer than ${r}`;
    throw new Ht(t, e, n);
  }
});
function Nh(e, t) {
  pn(e, t);
  for (let r = 0; r < e.length; r++)
    ao(e[r], `${t}[${r}]`);
}
function Oh(e, t) {
  pn(e, t);
  for (let r = 0; r < e.length; r++)
    fs(e[r], `${t}[${r}]`);
}
function Dh(e, t) {
  pn(e, t);
  for (let r = 0; r < e.length; r++) {
    const n = e[r], o = `${t}[${r}]`;
    if (n == null)
      throw new _e(o, "AbortSignal", n);
    us(n, o);
  }
}
function $h(e, t = "signal") {
  if (ao(e, t), Ea[e] === void 0)
    throw Ea[ch(e)] !== void 0 ? new ga(e + " (signals must use all capital letters)") : new ga(e);
}
const Ph = $e((e, t = "buffer") => {
  if (!_h(e))
    throw new _e(t, ["Buffer", "TypedArray", "DataView"], e);
});
function Lh(e, t) {
  const r = yh(t), n = e.length;
  if (r === "hex" && n % 2 !== 0)
    throw new Ht("encoding", t, `is invalid for data of length ${n}`);
}
function xh(e, t = "Port", r = !0) {
  if (typeof e != "number" && typeof e != "string" || typeof e == "string" && hh(e).length === 0 || +e !== +e >>> 0 || e > 65535 || e === 0 && !r)
    throw new bh(t, e, r);
  return e | 0;
}
const us = $e((e, t) => {
  if (e !== void 0 && (e === null || typeof e != "object" || !("aborted" in e)))
    throw new _e(t, "AbortSignal", e);
}), kh = $e((e, t) => {
  if (typeof e != "function")
    throw new _e(t, "Function", e);
}), Mh = $e((e, t) => {
  if (typeof e != "function" || ph(e))
    throw new _e(t, "Function", e);
}), jh = $e((e, t) => {
  if (e !== void 0)
    throw new _e(t, "undefined", e);
});
function Vh(e, t, r) {
  if (!as(r, e))
    throw new _e(t, `('${ls(r, "|")}')`, e);
}
const Fh = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
function Sa(e, t) {
  if (typeof e > "u" || !ss(Fh, e))
    throw new Ht(
      t,
      e,
      'must be an array or string of format "</styles.css>; rel=preload; as=style"'
    );
}
function Uh(e) {
  if (typeof e == "string")
    return Sa(e, "hints"), e;
  if (io(e)) {
    const t = e.length;
    let r = "";
    if (t === 0)
      return r;
    for (let n = 0; n < t; n++) {
      const o = e[n];
      Sa(o, "hints"), r += o, n !== t - 1 && (r += ", ");
    }
    return r;
  }
  throw new Ht(
    "hints",
    e,
    'must be an array or string of format "</styles.css>; rel=preload; as=style"'
  );
}
var gr = {
  isInt32: wh,
  isUint32: gh,
  parseFileMode: Rh,
  validateArray: pn,
  validateStringArray: Nh,
  validateBooleanArray: Oh,
  validateAbortSignalArray: Dh,
  validateBoolean: fs,
  validateBuffer: Ph,
  validateDictionary: Ch,
  validateEncoding: Lh,
  validateFunction: kh,
  validateInt32: Ih,
  validateInteger: Ah,
  validateNumber: mh,
  validateObject: Th,
  validateOneOf: vh,
  validatePlainFunction: Mh,
  validatePort: xh,
  validateSignalName: $h,
  validateString: ao,
  validateUint32: ds,
  validateUndefined: jh,
  validateUnion: Vh,
  validateAbortSignal: us,
  validateLinkHeaderValue: Uh
}, lo = { exports: {} };
const { SymbolAsyncIterator: Ra, SymbolIterator: Aa, SymbolFor: Nt } = le, cs = Nt("nodejs.stream.destroyed"), hs = Nt("nodejs.stream.errored"), Di = Nt("nodejs.stream.readable"), $i = Nt("nodejs.stream.writable"), bs = Nt("nodejs.stream.disturbed"), Wh = Nt("nodejs.webstream.isClosedPromise"), Bh = Nt("nodejs.webstream.controllerErrorFunction");
function _n(e, t = !1) {
  var r;
  return !!(e && typeof e.pipe == "function" && typeof e.on == "function" && (!t || typeof e.pause == "function" && typeof e.resume == "function") && (!e._writableState || ((r = e._readableState) === null || r === void 0 ? void 0 : r.readable) !== !1) && // Duplex
  (!e._writableState || e._readableState));
}
function wn(e) {
  var t;
  return !!(e && typeof e.write == "function" && typeof e.on == "function" && (!e._readableState || ((t = e._writableState) === null || t === void 0 ? void 0 : t.writable) !== !1));
}
function Hh(e) {
  return !!(e && typeof e.pipe == "function" && e._readableState && typeof e.on == "function" && typeof e.write == "function");
}
function Ge(e) {
  return e && (e._readableState || e._writableState || typeof e.write == "function" && typeof e.on == "function" || typeof e.pipe == "function" && typeof e.on == "function");
}
function ys(e) {
  return !!(e && !Ge(e) && typeof e.pipeThrough == "function" && typeof e.getReader == "function" && typeof e.cancel == "function");
}
function ps(e) {
  return !!(e && !Ge(e) && typeof e.getWriter == "function" && typeof e.abort == "function");
}
function _s(e) {
  return !!(e && !Ge(e) && typeof e.readable == "object" && typeof e.writable == "object");
}
function Gh(e) {
  return ys(e) || ps(e) || _s(e);
}
function Kh(e, t) {
  return e == null ? !1 : t === !0 ? typeof e[Ra] == "function" : t === !1 ? typeof e[Aa] == "function" : typeof e[Ra] == "function" || typeof e[Aa] == "function";
}
function gn(e) {
  if (!Ge(e))
    return null;
  const t = e._writableState, r = e._readableState, n = t || r;
  return !!(e.destroyed || e[cs] || n != null && n.destroyed);
}
function ws(e) {
  if (!wn(e))
    return null;
  if (e.writableEnded === !0)
    return !0;
  const t = e._writableState;
  return t != null && t.errored ? !1 : typeof (t == null ? void 0 : t.ended) != "boolean" ? null : t.ended;
}
function Jh(e, t) {
  if (!wn(e))
    return null;
  if (e.writableFinished === !0)
    return !0;
  const r = e._writableState;
  return r != null && r.errored ? !1 : typeof (r == null ? void 0 : r.finished) != "boolean" ? null : !!(r.finished || t === !1 && r.ended === !0 && r.length === 0);
}
function qh(e) {
  if (!_n(e))
    return null;
  if (e.readableEnded === !0)
    return !0;
  const t = e._readableState;
  return !t || t.errored ? !1 : typeof (t == null ? void 0 : t.ended) != "boolean" ? null : t.ended;
}
function gs(e, t) {
  if (!_n(e))
    return null;
  const r = e._readableState;
  return r != null && r.errored ? !1 : typeof (r == null ? void 0 : r.endEmitted) != "boolean" ? null : !!(r.endEmitted || t === !1 && r.ended === !0 && r.length === 0);
}
function Es(e) {
  return e && e[Di] != null ? e[Di] : typeof (e == null ? void 0 : e.readable) != "boolean" ? null : gn(e) ? !1 : _n(e) && e.readable && !gs(e);
}
function Ss(e) {
  return e && e[$i] != null ? e[$i] : typeof (e == null ? void 0 : e.writable) != "boolean" ? null : gn(e) ? !1 : wn(e) && e.writable && !ws(e);
}
function Yh(e, t) {
  return Ge(e) ? gn(e) ? !0 : !((t == null ? void 0 : t.readable) !== !1 && Es(e) || (t == null ? void 0 : t.writable) !== !1 && Ss(e)) : null;
}
function zh(e) {
  var t, r;
  return Ge(e) ? e.writableErrored ? e.writableErrored : (t = (r = e._writableState) === null || r === void 0 ? void 0 : r.errored) !== null && t !== void 0 ? t : null : null;
}
function Xh(e) {
  var t, r;
  return Ge(e) ? e.readableErrored ? e.readableErrored : (t = (r = e._readableState) === null || r === void 0 ? void 0 : r.errored) !== null && t !== void 0 ? t : null : null;
}
function Qh(e) {
  if (!Ge(e))
    return null;
  if (typeof e.closed == "boolean")
    return e.closed;
  const t = e._writableState, r = e._readableState;
  return typeof (t == null ? void 0 : t.closed) == "boolean" || typeof (r == null ? void 0 : r.closed) == "boolean" ? (t == null ? void 0 : t.closed) || (r == null ? void 0 : r.closed) : typeof e._closed == "boolean" && Rs(e) ? e._closed : null;
}
function Rs(e) {
  return typeof e._closed == "boolean" && typeof e._defaultKeepAlive == "boolean" && typeof e._removedConnection == "boolean" && typeof e._removedContLen == "boolean";
}
function As(e) {
  return typeof e._sent100 == "boolean" && Rs(e);
}
function Zh(e) {
  var t;
  return typeof e._consuming == "boolean" && typeof e._dumped == "boolean" && ((t = e.req) === null || t === void 0 ? void 0 : t.upgradeOrConnect) === void 0;
}
function eb(e) {
  if (!Ge(e))
    return null;
  const t = e._writableState, r = e._readableState, n = t || r;
  return !n && As(e) || !!(n && n.autoDestroy && n.emitClose && n.closed === !1);
}
function tb(e) {
  var t;
  return !!(e && ((t = e[bs]) !== null && t !== void 0 ? t : e.readableDidRead || e.readableAborted));
}
function rb(e) {
  var t, r, n, o, a, i, s, f, u, h;
  return !!(e && ((t = (r = (n = (o = (a = (i = e[hs]) !== null && i !== void 0 ? i : e.readableErrored) !== null && a !== void 0 ? a : e.writableErrored) !== null && o !== void 0 ? o : (s = e._readableState) === null || s === void 0 ? void 0 : s.errorEmitted) !== null && n !== void 0 ? n : (f = e._writableState) === null || f === void 0 ? void 0 : f.errorEmitted) !== null && r !== void 0 ? r : (u = e._readableState) === null || u === void 0 ? void 0 : u.errored) !== null && t !== void 0 ? t : !((h = e._writableState) === null || h === void 0) && h.errored));
}
var nt = {
  isDestroyed: gn,
  kIsDestroyed: cs,
  isDisturbed: tb,
  kIsDisturbed: bs,
  isErrored: rb,
  kIsErrored: hs,
  isReadable: Es,
  kIsReadable: Di,
  kIsClosedPromise: Wh,
  kControllerErrorFunction: Bh,
  kIsWritable: $i,
  isClosed: Qh,
  isDuplexNodeStream: Hh,
  isFinished: Yh,
  isIterable: Kh,
  isReadableNodeStream: _n,
  isReadableStream: ys,
  isReadableEnded: qh,
  isReadableFinished: gs,
  isReadableErrored: Xh,
  isNodeStream: Ge,
  isWebStream: Gh,
  isWritable: Ss,
  isWritableNodeStream: wn,
  isWritableStream: ps,
  isWritableEnded: ws,
  isWritableFinished: Jh,
  isWritableErrored: zh,
  isServerRequest: Zh,
  isServerResponse: As,
  willEmitClose: eb,
  isTransformStream: _s
};
const at = Ae, { AbortError: Is, codes: nb } = me, { ERR_INVALID_ARG_TYPE: ib, ERR_STREAM_PREMATURE_CLOSE: Ia } = nb, { kEmptyObject: Pi, once: Li } = Re, { validateAbortSignal: ob, validateFunction: ab, validateObject: lb, validateBoolean: sb } = gr, { Promise: db, PromisePrototypeThen: fb, SymbolDispose: ms } = le, {
  isClosed: ub,
  isReadable: ma,
  isReadableNodeStream: ii,
  isReadableStream: cb,
  isReadableFinished: va,
  isReadableErrored: Ta,
  isWritable: Ca,
  isWritableNodeStream: Na,
  isWritableStream: hb,
  isWritableFinished: Oa,
  isWritableErrored: Da,
  isNodeStream: bb,
  willEmitClose: yb,
  kIsClosedPromise: pb
} = nt;
let Mt;
function _b(e) {
  return e.setHeader && typeof e.abort == "function";
}
const xi = () => {
};
function vs(e, t, r) {
  var n, o;
  if (arguments.length === 2 ? (r = t, t = Pi) : t == null ? t = Pi : lb(t, "options"), ab(r, "callback"), ob(t.signal, "options.signal"), r = Li(r), cb(e) || hb(e))
    return wb(e, t, r);
  if (!bb(e))
    throw new ib("stream", ["ReadableStream", "WritableStream", "Stream"], e);
  const a = (n = t.readable) !== null && n !== void 0 ? n : ii(e), i = (o = t.writable) !== null && o !== void 0 ? o : Na(e), s = e._writableState, f = e._readableState, u = () => {
    e.writable || b();
  };
  let h = yb(e) && ii(e) === a && Na(e) === i, w = Oa(e, !1);
  const b = () => {
    w = !0, e.destroyed && (h = !1), !(h && (!e.readable || a)) && (!a || c) && r.call(e);
  };
  let c = va(e, !1);
  const S = () => {
    c = !0, e.destroyed && (h = !1), !(h && (!e.writable || i)) && (!i || w) && r.call(e);
  }, _ = (T) => {
    r.call(e, T);
  };
  let R = ub(e);
  const C = () => {
    R = !0;
    const T = Da(e) || Ta(e);
    if (T && typeof T != "boolean")
      return r.call(e, T);
    if (a && !c && ii(e, !0) && !va(e, !1))
      return r.call(e, new Ia());
    if (i && !w && !Oa(e, !1))
      return r.call(e, new Ia());
    r.call(e);
  }, L = () => {
    R = !0;
    const T = Da(e) || Ta(e);
    if (T && typeof T != "boolean")
      return r.call(e, T);
    r.call(e);
  }, g = () => {
    e.req.on("finish", b);
  };
  _b(e) ? (e.on("complete", b), h || e.on("abort", C), e.req ? g() : e.on("request", g)) : i && !s && (e.on("end", u), e.on("close", u)), !h && typeof e.aborted == "boolean" && e.on("aborted", C), e.on("end", S), e.on("finish", b), t.error !== !1 && e.on("error", _), e.on("close", C), R ? at.nextTick(C) : s != null && s.errorEmitted || f != null && f.errorEmitted ? h || at.nextTick(L) : (!a && (!h || ma(e)) && (w || Ca(e) === !1) || !i && (!h || Ca(e)) && (c || ma(e) === !1) || f && e.req && e.aborted) && at.nextTick(L);
  const G = () => {
    r = xi, e.removeListener("aborted", C), e.removeListener("complete", b), e.removeListener("abort", C), e.removeListener("request", g), e.req && e.req.removeListener("finish", b), e.removeListener("end", u), e.removeListener("close", u), e.removeListener("finish", b), e.removeListener("end", S), e.removeListener("error", _), e.removeListener("close", C);
  };
  if (t.signal && !R) {
    const T = () => {
      const D = r;
      G(), D.call(
        e,
        new Is(void 0, {
          cause: t.signal.reason
        })
      );
    };
    if (t.signal.aborted)
      at.nextTick(T);
    else {
      Mt = Mt || Re.addAbortListener;
      const D = Mt(t.signal, T), H = r;
      r = Li((...B) => {
        D[ms](), H.apply(e, B);
      });
    }
  }
  return G;
}
function wb(e, t, r) {
  let n = !1, o = xi;
  if (t.signal)
    if (o = () => {
      n = !0, r.call(
        e,
        new Is(void 0, {
          cause: t.signal.reason
        })
      );
    }, t.signal.aborted)
      at.nextTick(o);
    else {
      Mt = Mt || Re.addAbortListener;
      const i = Mt(t.signal, o), s = r;
      r = Li((...f) => {
        i[ms](), s.apply(e, f);
      });
    }
  const a = (...i) => {
    n || at.nextTick(() => r.apply(e, i));
  };
  return fb(e[pb].promise, a, a), xi;
}
function gb(e, t) {
  var r;
  let n = !1;
  return t === null && (t = Pi), (r = t) !== null && r !== void 0 && r.cleanup && (sb(t.cleanup, "cleanup"), n = t.cleanup), new db((o, a) => {
    const i = vs(e, t, (s) => {
      n && i(), s ? a(s) : o();
    });
  });
}
lo.exports = vs;
lo.exports.finished = gb;
var dt = lo.exports;
const Fe = Ae, {
  aggregateTwoErrors: Eb,
  codes: { ERR_MULTIPLE_CALLBACK: Sb },
  AbortError: Rb
} = me, { Symbol: Ts } = le, { kIsDestroyed: Ab, isDestroyed: Ib, isFinished: mb, isServerRequest: vb } = nt, Cs = Ts("kDestroy"), ki = Ts("kConstruct");
function Ns(e, t, r) {
  e && (e.stack, t && !t.errored && (t.errored = e), r && !r.errored && (r.errored = e));
}
function Tb(e, t) {
  const r = this._readableState, n = this._writableState, o = n || r;
  return n != null && n.destroyed || r != null && r.destroyed ? (typeof t == "function" && t(), this) : (Ns(e, n, r), n && (n.destroyed = !0), r && (r.destroyed = !0), o.constructed ? $a(this, e, t) : this.once(Cs, function(a) {
    $a(this, Eb(a, e), t);
  }), this);
}
function $a(e, t, r) {
  let n = !1;
  function o(a) {
    if (n)
      return;
    n = !0;
    const i = e._readableState, s = e._writableState;
    Ns(a, s, i), s && (s.closed = !0), i && (i.closed = !0), typeof r == "function" && r(a), a ? Fe.nextTick(Cb, e, a) : Fe.nextTick(Os, e);
  }
  try {
    e._destroy(t || null, o);
  } catch (a) {
    o(a);
  }
}
function Cb(e, t) {
  Mi(e, t), Os(e);
}
function Os(e) {
  const t = e._readableState, r = e._writableState;
  r && (r.closeEmitted = !0), t && (t.closeEmitted = !0), (r != null && r.emitClose || t != null && t.emitClose) && e.emit("close");
}
function Mi(e, t) {
  const r = e._readableState, n = e._writableState;
  n != null && n.errorEmitted || r != null && r.errorEmitted || (n && (n.errorEmitted = !0), r && (r.errorEmitted = !0), e.emit("error", t));
}
function Nb() {
  const e = this._readableState, t = this._writableState;
  e && (e.constructed = !0, e.closed = !1, e.closeEmitted = !1, e.destroyed = !1, e.errored = null, e.errorEmitted = !1, e.reading = !1, e.ended = e.readable === !1, e.endEmitted = e.readable === !1), t && (t.constructed = !0, t.destroyed = !1, t.closed = !1, t.closeEmitted = !1, t.errored = null, t.errorEmitted = !1, t.finalCalled = !1, t.prefinished = !1, t.ended = t.writable === !1, t.ending = t.writable === !1, t.finished = t.writable === !1);
}
function ji(e, t, r) {
  const n = e._readableState, o = e._writableState;
  if (o != null && o.destroyed || n != null && n.destroyed)
    return this;
  n != null && n.autoDestroy || o != null && o.autoDestroy ? e.destroy(t) : t && (t.stack, o && !o.errored && (o.errored = t), n && !n.errored && (n.errored = t), r ? Fe.nextTick(Mi, e, t) : Mi(e, t));
}
function Ob(e, t) {
  if (typeof e._construct != "function")
    return;
  const r = e._readableState, n = e._writableState;
  r && (r.constructed = !1), n && (n.constructed = !1), e.once(ki, t), !(e.listenerCount(ki) > 1) && Fe.nextTick(Db, e);
}
function Db(e) {
  let t = !1;
  function r(n) {
    if (t) {
      ji(e, n ?? new Sb());
      return;
    }
    t = !0;
    const o = e._readableState, a = e._writableState, i = a || o;
    o && (o.constructed = !0), a && (a.constructed = !0), i.destroyed ? e.emit(Cs, n) : n ? ji(e, n, !0) : Fe.nextTick($b, e);
  }
  try {
    e._construct((n) => {
      Fe.nextTick(r, n);
    });
  } catch (n) {
    Fe.nextTick(r, n);
  }
}
function $b(e) {
  e.emit(ki);
}
function Pa(e) {
  return (e == null ? void 0 : e.setHeader) && typeof e.abort == "function";
}
function Ds(e) {
  e.emit("close");
}
function Pb(e, t) {
  e.emit("error", t), Fe.nextTick(Ds, e);
}
function Lb(e, t) {
  !e || Ib(e) || (!t && !mb(e) && (t = new Rb()), vb(e) ? (e.socket = null, e.destroy(t)) : Pa(e) ? e.abort() : Pa(e.req) ? e.req.abort() : typeof e.destroy == "function" ? e.destroy(t) : typeof e.close == "function" ? e.close() : t ? Fe.nextTick(Pb, e, t) : Fe.nextTick(Ds, e), e.destroyed || (e[Ab] = !0));
}
var Gt = {
  construct: Ob,
  destroyer: Lb,
  destroy: Tb,
  undestroy: Nb,
  errorOrDestroy: ji
};
const { ArrayIsArray: xb, ObjectSetPrototypeOf: $s } = le, { EventEmitter: En } = lt;
function Sn(e) {
  En.call(this, e);
}
$s(Sn.prototype, En.prototype);
$s(Sn, En);
Sn.prototype.pipe = function(e, t) {
  const r = this;
  function n(h) {
    e.writable && e.write(h) === !1 && r.pause && r.pause();
  }
  r.on("data", n);
  function o() {
    r.readable && r.resume && r.resume();
  }
  e.on("drain", o), !e._isStdio && (!t || t.end !== !1) && (r.on("end", i), r.on("close", s));
  let a = !1;
  function i() {
    a || (a = !0, e.end());
  }
  function s() {
    a || (a = !0, typeof e.destroy == "function" && e.destroy());
  }
  function f(h) {
    u(), En.listenerCount(this, "error") === 0 && this.emit("error", h);
  }
  Vi(r, "error", f), Vi(e, "error", f);
  function u() {
    r.removeListener("data", n), e.removeListener("drain", o), r.removeListener("end", i), r.removeListener("close", s), r.removeListener("error", f), e.removeListener("error", f), r.removeListener("end", u), r.removeListener("close", u), e.removeListener("close", u);
  }
  return r.on("end", u), r.on("close", u), e.on("close", u), e.emit("pipe", r), e;
};
function Vi(e, t, r) {
  if (typeof e.prependListener == "function")
    return e.prependListener(t, r);
  !e._events || !e._events[t] ? e.on(t, r) : xb(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]];
}
var so = {
  Stream: Sn,
  prependListener: Vi
}, Ps = { exports: {} };
(function(e) {
  const { SymbolDispose: t } = le, { AbortError: r, codes: n } = me, { isNodeStream: o, isWebStream: a, kControllerErrorFunction: i } = nt, s = dt, { ERR_INVALID_ARG_TYPE: f } = n;
  let u;
  const h = (w, b) => {
    if (typeof w != "object" || !("aborted" in w))
      throw new f(b, "AbortSignal", w);
  };
  e.exports.addAbortSignal = function(b, c) {
    if (h(b, "signal"), !o(c) && !a(c))
      throw new f("stream", ["ReadableStream", "WritableStream", "Stream"], c);
    return e.exports.addAbortSignalNoValidate(b, c);
  }, e.exports.addAbortSignalNoValidate = function(w, b) {
    if (typeof w != "object" || !("aborted" in w))
      return b;
    const c = o(b) ? () => {
      b.destroy(
        new r(void 0, {
          cause: w.reason
        })
      );
    } : () => {
      b[i](
        new r(void 0, {
          cause: w.reason
        })
      );
    };
    if (w.aborted)
      c();
    else {
      u = u || Re.addAbortListener;
      const S = u(w, c);
      s(b, S[t]);
    }
    return b;
  };
})(Ps);
var Rn = Ps.exports;
const { StringPrototypeSlice: La, SymbolIterator: kb, TypedArrayPrototypeSet: Tr, Uint8Array: Mb } = le, { Buffer: oi } = ye, { inspect: jb } = Re;
var Vb = class {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  push(t) {
    const r = {
      data: t,
      next: null
    };
    this.length > 0 ? this.tail.next = r : this.head = r, this.tail = r, ++this.length;
  }
  unshift(t) {
    const r = {
      data: t,
      next: this.head
    };
    this.length === 0 && (this.tail = r), this.head = r, ++this.length;
  }
  shift() {
    if (this.length === 0)
      return;
    const t = this.head.data;
    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
  }
  clear() {
    this.head = this.tail = null, this.length = 0;
  }
  join(t) {
    if (this.length === 0)
      return "";
    let r = this.head, n = "" + r.data;
    for (; (r = r.next) !== null; )
      n += t + r.data;
    return n;
  }
  concat(t) {
    if (this.length === 0)
      return oi.alloc(0);
    const r = oi.allocUnsafe(t >>> 0);
    let n = this.head, o = 0;
    for (; n; )
      Tr(r, n.data, o), o += n.data.length, n = n.next;
    return r;
  }
  // Consumes a specified amount of bytes or characters from the buffered data.
  consume(t, r) {
    const n = this.head.data;
    if (t < n.length) {
      const o = n.slice(0, t);
      return this.head.data = n.slice(t), o;
    }
    return t === n.length ? this.shift() : r ? this._getString(t) : this._getBuffer(t);
  }
  first() {
    return this.head.data;
  }
  *[kb]() {
    for (let t = this.head; t; t = t.next)
      yield t.data;
  }
  // Consumes a specified amount of characters from the buffered data.
  _getString(t) {
    let r = "", n = this.head, o = 0;
    do {
      const a = n.data;
      if (t > a.length)
        r += a, t -= a.length;
      else {
        t === a.length ? (r += a, ++o, n.next ? this.head = n.next : this.head = this.tail = null) : (r += La(a, 0, t), this.head = n, n.data = La(a, t));
        break;
      }
      ++o;
    } while ((n = n.next) !== null);
    return this.length -= o, r;
  }
  // Consumes a specified amount of bytes from the buffered data.
  _getBuffer(t) {
    const r = oi.allocUnsafe(t), n = t;
    let o = this.head, a = 0;
    do {
      const i = o.data;
      if (t > i.length)
        Tr(r, i, n - t), t -= i.length;
      else {
        t === i.length ? (Tr(r, i, n - t), ++a, o.next ? this.head = o.next : this.head = this.tail = null) : (Tr(r, new Mb(i.buffer, i.byteOffset, t), n - t), this.head = o, o.data = i.slice(t));
        break;
      }
      ++a;
    } while ((o = o.next) !== null);
    return this.length -= a, r;
  }
  // Make sure the linked list only shows the minimal necessary information.
  [Symbol.for("nodejs.util.inspect.custom")](t, r) {
    return jb(this, {
      ...r,
      // Only inspect one level.
      depth: 0,
      // It should not recurse.
      customInspect: !1
    });
  }
};
const { MathFloor: Fb, NumberIsInteger: Ub } = le, { validateInteger: Wb } = gr, { ERR_INVALID_ARG_VALUE: Bb } = me.codes;
let Ls = 16 * 1024, xs = 16;
function Hb(e, t, r) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
}
function ks(e) {
  return e ? xs : Ls;
}
function Gb(e, t) {
  Wb(t, "value", 0), e ? xs = t : Ls = t;
}
function Kb(e, t, r, n) {
  const o = Hb(t, n, r);
  if (o != null) {
    if (!Ub(o) || o < 0) {
      const a = n ? `options.${r}` : "options.highWaterMark";
      throw new Bb(a, o);
    }
    return Fb(o);
  }
  return ks(e.objectMode);
}
var An = {
  getHighWaterMark: Kb,
  getDefaultHighWaterMark: ks,
  setDefaultHighWaterMark: Gb
};
const xa = Ae, { PromisePrototypeThen: Jb, SymbolAsyncIterator: ka, SymbolIterator: Ma } = le, { Buffer: qb } = ye, { ERR_INVALID_ARG_TYPE: Yb, ERR_STREAM_NULL_VALUES: zb } = me.codes;
function Xb(e, t, r) {
  let n;
  if (typeof t == "string" || t instanceof qb)
    return new e({
      objectMode: !0,
      ...r,
      read() {
        this.push(t), this.push(null);
      }
    });
  let o;
  if (t && t[ka])
    o = !0, n = t[ka]();
  else if (t && t[Ma])
    o = !1, n = t[Ma]();
  else
    throw new Yb("iterable", ["Iterable"], t);
  const a = new e({
    objectMode: !0,
    highWaterMark: 1,
    // TODO(ronag): What options should be allowed?
    ...r
  });
  let i = !1;
  a._read = function() {
    i || (i = !0, f());
  }, a._destroy = function(u, h) {
    Jb(
      s(u),
      () => xa.nextTick(h, u),
      // nextTick is here in case cb throws
      (w) => xa.nextTick(h, w || u)
    );
  };
  async function s(u) {
    const h = u != null, w = typeof n.throw == "function";
    if (h && w) {
      const { value: b, done: c } = await n.throw(u);
      if (await b, c)
        return;
    }
    if (typeof n.return == "function") {
      const { value: b } = await n.return();
      await b;
    }
  }
  async function f() {
    for (; ; ) {
      try {
        const { value: u, done: h } = o ? await n.next() : n.next();
        if (h)
          a.push(null);
        else {
          const w = u && typeof u.then == "function" ? await u : u;
          if (w === null)
            throw i = !1, new zb();
          if (a.push(w))
            continue;
          i = !1;
        }
      } catch (u) {
        a.destroy(u);
      }
      break;
    }
  }
  return a;
}
var Ms = Xb, ai, ja;
function In() {
  if (ja)
    return ai;
  ja = 1;
  const e = Ae, {
    ArrayPrototypeIndexOf: t,
    NumberIsInteger: r,
    NumberIsNaN: n,
    NumberParseInt: o,
    ObjectDefineProperties: a,
    ObjectKeys: i,
    ObjectSetPrototypeOf: s,
    Promise: f,
    SafeSet: u,
    SymbolAsyncDispose: h,
    SymbolAsyncIterator: w,
    Symbol: b
  } = le;
  ai = F, F.ReadableState = fe;
  const { EventEmitter: c } = lt, { Stream: S, prependListener: _ } = so, { Buffer: R } = ye, { addAbortSignal: C } = Rn, L = dt;
  let g = Re.debuglog("stream", (l) => {
    g = l;
  });
  const G = Vb, T = Gt, { getHighWaterMark: D, getDefaultHighWaterMark: H } = An, {
    aggregateTwoErrors: B,
    codes: {
      ERR_INVALID_ARG_TYPE: I,
      ERR_METHOD_NOT_IMPLEMENTED: O,
      ERR_OUT_OF_RANGE: U,
      ERR_STREAM_PUSH_AFTER_EOF: k,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT: E
    },
    AbortError: x
  } = me, { validateObject: V } = gr, W = b("kPaused"), { StringDecoder: z } = il(), Z = Ms;
  s(F.prototype, S.prototype), s(F, S);
  const Q = () => {
  }, { errorOrDestroy: ee } = T, K = 1, de = 2, j = 4, te = 8, se = 16, ve = 32, Te = 64, Ce = 128, Pe = 256, ft = 512, Le = 1024, Ne = 2048, y = 4096, p = 8192, A = 16384, $ = 32768, P = 65536, q = 1 << 17, X = 1 << 18;
  function J(l) {
    return {
      enumerable: !1,
      get() {
        return (this.state & l) !== 0;
      },
      set(d) {
        d ? this.state |= l : this.state &= ~l;
      }
    };
  }
  a(fe.prototype, {
    objectMode: J(K),
    ended: J(de),
    endEmitted: J(j),
    reading: J(te),
    // Stream is still being constructed and cannot be
    // destroyed until construction finished or failed.
    // Async construction is opt in, therefore we start as
    // constructed.
    constructed: J(se),
    // A flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    sync: J(ve),
    // Whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    needReadable: J(Te),
    emittedReadable: J(Ce),
    readableListening: J(Pe),
    resumeScheduled: J(ft),
    // True if the error was already emitted and should not be thrown again.
    errorEmitted: J(Le),
    emitClose: J(Ne),
    autoDestroy: J(y),
    // Has it been destroyed.
    destroyed: J(p),
    // Indicates whether the stream has finished destroying.
    closed: J(A),
    // True if close has been emitted or would have been emitted
    // depending on emitClose.
    closeEmitted: J($),
    multiAwaitDrain: J(P),
    // If true, a maybeReadMore has been scheduled.
    readingMore: J(q),
    dataEmitted: J(X)
  });
  function fe(l, d, m) {
    typeof m != "boolean" && (m = d instanceof et()), this.state = Ne | y | se | ve, l && l.objectMode && (this.state |= K), m && l && l.readableObjectMode && (this.state |= K), this.highWaterMark = l ? D(this, l, "readableHighWaterMark", m) : H(!1), this.buffer = new G(), this.length = 0, this.pipes = [], this.flowing = null, this[W] = null, l && l.emitClose === !1 && (this.state &= ~Ne), l && l.autoDestroy === !1 && (this.state &= ~y), this.errored = null, this.defaultEncoding = l && l.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.decoder = null, this.encoding = null, l && l.encoding && (this.decoder = new z(l.encoding), this.encoding = l.encoding);
  }
  function F(l) {
    if (!(this instanceof F))
      return new F(l);
    const d = this instanceof et();
    this._readableState = new fe(l, this, d), l && (typeof l.read == "function" && (this._read = l.read), typeof l.destroy == "function" && (this._destroy = l.destroy), typeof l.construct == "function" && (this._construct = l.construct), l.signal && !d && C(l.signal, this)), S.call(this, l), T.construct(this, () => {
      this._readableState.needReadable && Je(this, this._readableState);
    });
  }
  F.prototype.destroy = T.destroy, F.prototype._undestroy = T.undestroy, F.prototype._destroy = function(l, d) {
    d(l);
  }, F.prototype[c.captureRejectionSymbol] = function(l) {
    this.destroy(l);
  }, F.prototype[h] = function() {
    let l;
    return this.destroyed || (l = this.readableEnded ? null : new x(), this.destroy(l)), new f((d, m) => L(this, (v) => v && v !== l ? m(v) : d(null)));
  }, F.prototype.push = function(l, d) {
    return ce(this, l, d, !1);
  }, F.prototype.unshift = function(l, d) {
    return ce(this, l, d, !0);
  };
  function ce(l, d, m, v) {
    g("readableAddChunk", d);
    const N = l._readableState;
    let re;
    if (N.state & K || (typeof d == "string" ? (m = m || N.defaultEncoding, N.encoding !== m && (v && N.encoding ? d = R.from(d, m).toString(N.encoding) : (d = R.from(d, m), m = ""))) : d instanceof R ? m = "" : S._isUint8Array(d) ? (d = S._uint8ArrayToBuffer(d), m = "") : d != null && (re = new I("chunk", ["string", "Buffer", "Uint8Array"], d))), re)
      ee(l, re);
    else if (d === null)
      N.state &= ~te, Cn(l, N);
    else if (N.state & K || d && d.length > 0)
      if (v)
        if (N.state & j)
          ee(l, new E());
        else {
          if (N.destroyed || N.errored)
            return !1;
          ut(l, N, d, !0);
        }
      else if (N.ended)
        ee(l, new k());
      else {
        if (N.destroyed || N.errored)
          return !1;
        N.state &= ~te, N.decoder && !m ? (d = N.decoder.write(d), N.objectMode || d.length !== 0 ? ut(l, N, d, !1) : Je(l, N)) : ut(l, N, d, !1);
      }
    else
      v || (N.state &= ~te, Je(l, N));
    return !N.ended && (N.length < N.highWaterMark || N.length === 0);
  }
  function ut(l, d, m, v) {
    d.flowing && d.length === 0 && !d.sync && l.listenerCount("data") > 0 ? (d.state & P ? d.awaitDrainWriters.clear() : d.awaitDrainWriters = null, d.dataEmitted = !0, l.emit("data", m)) : (d.length += d.objectMode ? 1 : m.length, v ? d.buffer.unshift(m) : d.buffer.push(m), d.state & Te && Ke(l)), Je(l, d);
  }
  F.prototype.isPaused = function() {
    const l = this._readableState;
    return l[W] === !0 || l.flowing === !1;
  }, F.prototype.setEncoding = function(l) {
    const d = new z(l);
    this._readableState.decoder = d, this._readableState.encoding = this._readableState.decoder.encoding;
    const m = this._readableState.buffer;
    let v = "";
    for (const N of m)
      v += d.write(N);
    return m.clear(), v !== "" && m.push(v), this._readableState.length = v.length, this;
  };
  const vn = 1073741824;
  function Tn(l) {
    if (l > vn)
      throw new U("size", "<= 1GiB", l);
    return l--, l |= l >>> 1, l |= l >>> 2, l |= l >>> 4, l |= l >>> 8, l |= l >>> 16, l++, l;
  }
  function Kt(l, d) {
    return l <= 0 || d.length === 0 && d.ended ? 0 : d.state & K ? 1 : n(l) ? d.flowing && d.length ? d.buffer.first().length : d.length : l <= d.length ? l : d.ended ? d.length : 0;
  }
  F.prototype.read = function(l) {
    g("read", l), l === void 0 ? l = NaN : r(l) || (l = o(l, 10));
    const d = this._readableState, m = l;
    if (l > d.highWaterMark && (d.highWaterMark = Tn(l)), l !== 0 && (d.state &= ~Ce), l === 0 && d.needReadable && ((d.highWaterMark !== 0 ? d.length >= d.highWaterMark : d.length > 0) || d.ended))
      return g("read: emitReadable", d.length, d.ended), d.length === 0 && d.ended ? ct(this) : Ke(this), null;
    if (l = Kt(l, d), l === 0 && d.ended)
      return d.length === 0 && ct(this), null;
    let v = (d.state & Te) !== 0;
    if (g("need readable", v), (d.length === 0 || d.length - l < d.highWaterMark) && (v = !0, g("length less than watermark", v)), d.ended || d.reading || d.destroyed || d.errored || !d.constructed)
      v = !1, g("reading, ended or constructing", v);
    else if (v) {
      g("do read"), d.state |= te | ve, d.length === 0 && (d.state |= Te);
      try {
        this._read(d.highWaterMark);
      } catch (re) {
        ee(this, re);
      }
      d.state &= ~ve, d.reading || (l = Kt(m, d));
    }
    let N;
    return l > 0 ? N = Xt(l, d) : N = null, N === null ? (d.needReadable = d.length <= d.highWaterMark, l = 0) : (d.length -= l, d.multiAwaitDrain ? d.awaitDrainWriters.clear() : d.awaitDrainWriters = null), d.length === 0 && (d.ended || (d.needReadable = !0), m !== l && d.ended && ct(this)), N !== null && !d.errorEmitted && !d.closeEmitted && (d.dataEmitted = !0, this.emit("data", N)), N;
  };
  function Cn(l, d) {
    if (g("onEofChunk"), !d.ended) {
      if (d.decoder) {
        const m = d.decoder.end();
        m && m.length && (d.buffer.push(m), d.length += d.objectMode ? 1 : m.length);
      }
      d.ended = !0, d.sync ? Ke(l) : (d.needReadable = !1, d.emittedReadable = !0, Jt(l));
    }
  }
  function Ke(l) {
    const d = l._readableState;
    g("emitReadable", d.needReadable, d.emittedReadable), d.needReadable = !1, d.emittedReadable || (g("emitReadable", d.flowing), d.emittedReadable = !0, e.nextTick(Jt, l));
  }
  function Jt(l) {
    const d = l._readableState;
    g("emitReadable_", d.destroyed, d.length, d.ended), !d.destroyed && !d.errored && (d.length || d.ended) && (l.emit("readable"), d.emittedReadable = !1), d.needReadable = !d.flowing && !d.ended && d.length <= d.highWaterMark, Yt(l);
  }
  function Je(l, d) {
    !d.readingMore && d.constructed && (d.readingMore = !0, e.nextTick(Nn, l, d));
  }
  function Nn(l, d) {
    for (; !d.reading && !d.ended && (d.length < d.highWaterMark || d.flowing && d.length === 0); ) {
      const m = d.length;
      if (g("maybeReadMore read 0"), l.read(0), m === d.length)
        break;
    }
    d.readingMore = !1;
  }
  F.prototype._read = function(l) {
    throw new O("_read()");
  }, F.prototype.pipe = function(l, d) {
    const m = this, v = this._readableState;
    v.pipes.length === 1 && (v.multiAwaitDrain || (v.multiAwaitDrain = !0, v.awaitDrainWriters = new u(v.awaitDrainWriters ? [v.awaitDrainWriters] : []))), v.pipes.push(l), g("pipe count=%d opts=%j", v.pipes.length, d);
    const re = (!d || d.end !== !1) && l !== e.stdout && l !== e.stderr ? Zt : xe;
    v.endEmitted ? e.nextTick(re) : m.once("end", re), l.on("unpipe", ie);
    function ie(ge, ue) {
      g("onunpipe"), ge === m && ue && ue.hasUnpiped === !1 && (ue.hasUnpiped = !0, Mn());
    }
    function Zt() {
      g("onend"), l.end();
    }
    let we, er = !1;
    function Mn() {
      g("cleanup"), l.removeListener("close", yt), l.removeListener("finish", pt), we && l.removeListener("drain", we), l.removeListener("error", bt), l.removeListener("unpipe", ie), m.removeListener("end", Zt), m.removeListener("end", xe), m.removeListener("data", rr), er = !0, we && v.awaitDrainWriters && (!l._writableState || l._writableState.needDrain) && we();
    }
    function tr() {
      er || (v.pipes.length === 1 && v.pipes[0] === l ? (g("false write response, pause", 0), v.awaitDrainWriters = l, v.multiAwaitDrain = !1) : v.pipes.length > 1 && v.pipes.includes(l) && (g("false write response, pause", v.awaitDrainWriters.size), v.awaitDrainWriters.add(l)), m.pause()), we || (we = On(m, l), l.on("drain", we));
    }
    m.on("data", rr);
    function rr(ge) {
      g("ondata");
      const ue = l.write(ge);
      g("dest.write", ue), ue === !1 && tr();
    }
    function bt(ge) {
      if (g("onerror", ge), xe(), l.removeListener("error", bt), l.listenerCount("error") === 0) {
        const ue = l._writableState || l._readableState;
        ue && !ue.errorEmitted ? ee(l, ge) : l.emit("error", ge);
      }
    }
    _(l, "error", bt);
    function yt() {
      l.removeListener("finish", pt), xe();
    }
    l.once("close", yt);
    function pt() {
      g("onfinish"), l.removeListener("close", yt), xe();
    }
    l.once("finish", pt);
    function xe() {
      g("unpipe"), m.unpipe(l);
    }
    return l.emit("pipe", m), l.writableNeedDrain === !0 ? tr() : v.flowing || (g("pipe resume"), m.resume()), l;
  };
  function On(l, d) {
    return function() {
      const v = l._readableState;
      v.awaitDrainWriters === d ? (g("pipeOnDrain", 1), v.awaitDrainWriters = null) : v.multiAwaitDrain && (g("pipeOnDrain", v.awaitDrainWriters.size), v.awaitDrainWriters.delete(d)), (!v.awaitDrainWriters || v.awaitDrainWriters.size === 0) && l.listenerCount("data") && l.resume();
    };
  }
  F.prototype.unpipe = function(l) {
    const d = this._readableState, m = {
      hasUnpiped: !1
    };
    if (d.pipes.length === 0)
      return this;
    if (!l) {
      const N = d.pipes;
      d.pipes = [], this.pause();
      for (let re = 0; re < N.length; re++)
        N[re].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    const v = t(d.pipes, l);
    return v === -1 ? this : (d.pipes.splice(v, 1), d.pipes.length === 0 && this.pause(), l.emit("unpipe", this, m), this);
  }, F.prototype.on = function(l, d) {
    const m = S.prototype.on.call(this, l, d), v = this._readableState;
    return l === "data" ? (v.readableListening = this.listenerCount("readable") > 0, v.flowing !== !1 && this.resume()) : l === "readable" && !v.endEmitted && !v.readableListening && (v.readableListening = v.needReadable = !0, v.flowing = !1, v.emittedReadable = !1, g("on readable", v.length, v.reading), v.length ? Ke(this) : v.reading || e.nextTick(Dn, this)), m;
  }, F.prototype.addListener = F.prototype.on, F.prototype.removeListener = function(l, d) {
    const m = S.prototype.removeListener.call(this, l, d);
    return l === "readable" && e.nextTick(qt, this), m;
  }, F.prototype.off = F.prototype.removeListener, F.prototype.removeAllListeners = function(l) {
    const d = S.prototype.removeAllListeners.apply(this, arguments);
    return (l === "readable" || l === void 0) && e.nextTick(qt, this), d;
  };
  function qt(l) {
    const d = l._readableState;
    d.readableListening = l.listenerCount("readable") > 0, d.resumeScheduled && d[W] === !1 ? d.flowing = !0 : l.listenerCount("data") > 0 ? l.resume() : d.readableListening || (d.flowing = null);
  }
  function Dn(l) {
    g("readable nexttick read 0"), l.read(0);
  }
  F.prototype.resume = function() {
    const l = this._readableState;
    return l.flowing || (g("resume"), l.flowing = !l.readableListening, $n(this, l)), l[W] = !1, this;
  };
  function $n(l, d) {
    d.resumeScheduled || (d.resumeScheduled = !0, e.nextTick(Pn, l, d));
  }
  function Pn(l, d) {
    g("resume", d.reading), d.reading || l.read(0), d.resumeScheduled = !1, l.emit("resume"), Yt(l), d.flowing && !d.reading && l.read(0);
  }
  F.prototype.pause = function() {
    return g("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (g("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[W] = !0, this;
  };
  function Yt(l) {
    const d = l._readableState;
    for (g("flow", d.flowing); d.flowing && l.read() !== null; )
      ;
  }
  F.prototype.wrap = function(l) {
    let d = !1;
    l.on("data", (v) => {
      !this.push(v) && l.pause && (d = !0, l.pause());
    }), l.on("end", () => {
      this.push(null);
    }), l.on("error", (v) => {
      ee(this, v);
    }), l.on("close", () => {
      this.destroy();
    }), l.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      d && l.resume && (d = !1, l.resume());
    };
    const m = i(l);
    for (let v = 1; v < m.length; v++) {
      const N = m[v];
      this[N] === void 0 && typeof l[N] == "function" && (this[N] = l[N].bind(l));
    }
    return this;
  }, F.prototype[w] = function() {
    return zt(this);
  }, F.prototype.iterator = function(l) {
    return l !== void 0 && V(l, "options"), zt(this, l);
  };
  function zt(l, d) {
    typeof l.read != "function" && (l = F.wrap(l, {
      objectMode: !0
    }));
    const m = Ln(l, d);
    return m.stream = l, m;
  }
  async function* Ln(l, d) {
    let m = Q;
    function v(ie) {
      this === l ? (m(), m = Q) : m = ie;
    }
    l.on("readable", v);
    let N;
    const re = L(
      l,
      {
        writable: !1
      },
      (ie) => {
        N = ie ? B(N, ie) : null, m(), m = Q;
      }
    );
    try {
      for (; ; ) {
        const ie = l.destroyed ? null : l.read();
        if (ie !== null)
          yield ie;
        else {
          if (N)
            throw N;
          if (N === null)
            return;
          await new f(v);
        }
      }
    } catch (ie) {
      throw N = B(N, ie), N;
    } finally {
      (N || (d == null ? void 0 : d.destroyOnReturn) !== !1) && (N === void 0 || l._readableState.autoDestroy) ? T.destroyer(l, null) : (l.off("readable", v), re());
    }
  }
  a(F.prototype, {
    readable: {
      __proto__: null,
      get() {
        const l = this._readableState;
        return !!l && l.readable !== !1 && !l.destroyed && !l.errorEmitted && !l.endEmitted;
      },
      set(l) {
        this._readableState && (this._readableState.readable = !!l);
      }
    },
    readableDidRead: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.dataEmitted;
      }
    },
    readableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._readableState.readable !== !1 && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
      }
    },
    readableHighWaterMark: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.highWaterMark;
      }
    },
    readableBuffer: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState && this._readableState.buffer;
      }
    },
    readableFlowing: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.flowing;
      },
      set: function(l) {
        this._readableState && (this._readableState.flowing = l);
      }
    },
    readableLength: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState.length;
      }
    },
    readableObjectMode: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.objectMode : !1;
      }
    },
    readableEncoding: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.encoding : null;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.errored : null;
      }
    },
    closed: {
      __proto__: null,
      get() {
        return this._readableState ? this._readableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.destroyed : !1;
      },
      set(l) {
        this._readableState && (this._readableState.destroyed = l);
      }
    },
    readableEnded: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.endEmitted : !1;
      }
    }
  }), a(fe.prototype, {
    // Legacy getter for `pipesCount`.
    pipesCount: {
      __proto__: null,
      get() {
        return this.pipes.length;
      }
    },
    // Legacy property for `paused`.
    paused: {
      __proto__: null,
      get() {
        return this[W] !== !1;
      },
      set(l) {
        this[W] = !!l;
      }
    }
  }), F._fromList = Xt;
  function Xt(l, d) {
    if (d.length === 0)
      return null;
    let m;
    return d.objectMode ? m = d.buffer.shift() : !l || l >= d.length ? (d.decoder ? m = d.buffer.join("") : d.buffer.length === 1 ? m = d.buffer.first() : m = d.buffer.concat(d.length), d.buffer.clear()) : m = d.buffer.consume(l, d.decoder), m;
  }
  function ct(l) {
    const d = l._readableState;
    g("endReadable", d.endEmitted), d.endEmitted || (d.ended = !0, e.nextTick(xn, d, l));
  }
  function xn(l, d) {
    if (g("endReadableNT", l.endEmitted, l.length), !l.errored && !l.closeEmitted && !l.endEmitted && l.length === 0) {
      if (l.endEmitted = !0, d.emit("end"), d.writable && d.allowHalfOpen === !1)
        e.nextTick(kn, d);
      else if (l.autoDestroy) {
        const m = d._writableState;
        (!m || m.autoDestroy && // We don't expect the writable to ever 'finish'
        // if writable is explicitly set to false.
        (m.finished || m.writable === !1)) && d.destroy();
      }
    }
  }
  function kn(l) {
    l.writable && !l.writableEnded && !l.destroyed && l.end();
  }
  F.from = function(l, d) {
    return Z(F, l, d);
  };
  let ht;
  function Qt() {
    return ht === void 0 && (ht = {}), ht;
  }
  return F.fromWeb = function(l, d) {
    return Qt().newStreamReadableFromReadableStream(l, d);
  }, F.toWeb = function(l, d) {
    return Qt().newReadableStreamFromStreamReadable(l, d);
  }, F.wrap = function(l, d) {
    var m, v;
    return new F({
      objectMode: (m = (v = l.readableObjectMode) !== null && v !== void 0 ? v : l.objectMode) !== null && m !== void 0 ? m : !0,
      ...d,
      destroy(N, re) {
        T.destroyer(l, N), re(N);
      }
    }).wrap(l);
  }, ai;
}
var li, Va;
function fo() {
  if (Va)
    return li;
  Va = 1;
  const e = Ae, {
    ArrayPrototypeSlice: t,
    Error: r,
    FunctionPrototypeSymbolHasInstance: n,
    ObjectDefineProperty: o,
    ObjectDefineProperties: a,
    ObjectSetPrototypeOf: i,
    StringPrototypeToLowerCase: s,
    Symbol: f,
    SymbolHasInstance: u
  } = le;
  li = V, V.WritableState = E;
  const { EventEmitter: h } = lt, w = so.Stream, { Buffer: b } = ye, c = Gt, { addAbortSignal: S } = Rn, { getHighWaterMark: _, getDefaultHighWaterMark: R } = An, {
    ERR_INVALID_ARG_TYPE: C,
    ERR_METHOD_NOT_IMPLEMENTED: L,
    ERR_MULTIPLE_CALLBACK: g,
    ERR_STREAM_CANNOT_PIPE: G,
    ERR_STREAM_DESTROYED: T,
    ERR_STREAM_ALREADY_FINISHED: D,
    ERR_STREAM_NULL_VALUES: H,
    ERR_STREAM_WRITE_AFTER_END: B,
    ERR_UNKNOWN_ENCODING: I
  } = me.codes, { errorOrDestroy: O } = c;
  i(V.prototype, w.prototype), i(V, w);
  function U() {
  }
  const k = f("kOnFinished");
  function E(y, p, A) {
    typeof A != "boolean" && (A = p instanceof et()), this.objectMode = !!(y && y.objectMode), A && (this.objectMode = this.objectMode || !!(y && y.writableObjectMode)), this.highWaterMark = y ? _(this, y, "writableHighWaterMark", A) : R(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    const $ = !!(y && y.decodeStrings === !1);
    this.decodeStrings = !$, this.defaultEncoding = y && y.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = ee.bind(void 0, p), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, x(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !y || y.emitClose !== !1, this.autoDestroy = !y || y.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[k] = [];
  }
  function x(y) {
    y.buffered = [], y.bufferedIndex = 0, y.allBuffers = !0, y.allNoop = !0;
  }
  E.prototype.getBuffer = function() {
    return t(this.buffered, this.bufferedIndex);
  }, o(E.prototype, "bufferedRequestCount", {
    __proto__: null,
    get() {
      return this.buffered.length - this.bufferedIndex;
    }
  });
  function V(y) {
    const p = this instanceof et();
    if (!p && !n(V, this))
      return new V(y);
    this._writableState = new E(y, this, p), y && (typeof y.write == "function" && (this._write = y.write), typeof y.writev == "function" && (this._writev = y.writev), typeof y.destroy == "function" && (this._destroy = y.destroy), typeof y.final == "function" && (this._final = y.final), typeof y.construct == "function" && (this._construct = y.construct), y.signal && S(y.signal, this)), w.call(this, y), c.construct(this, () => {
      const A = this._writableState;
      A.writing || te(this, A), Ce(this, A);
    });
  }
  o(V, u, {
    __proto__: null,
    value: function(y) {
      return n(this, y) ? !0 : this !== V ? !1 : y && y._writableState instanceof E;
    }
  }), V.prototype.pipe = function() {
    O(this, new G());
  };
  function W(y, p, A, $) {
    const P = y._writableState;
    if (typeof A == "function")
      $ = A, A = P.defaultEncoding;
    else {
      if (!A)
        A = P.defaultEncoding;
      else if (A !== "buffer" && !b.isEncoding(A))
        throw new I(A);
      typeof $ != "function" && ($ = U);
    }
    if (p === null)
      throw new H();
    if (!P.objectMode)
      if (typeof p == "string")
        P.decodeStrings !== !1 && (p = b.from(p, A), A = "buffer");
      else if (p instanceof b)
        A = "buffer";
      else if (w._isUint8Array(p))
        p = w._uint8ArrayToBuffer(p), A = "buffer";
      else
        throw new C("chunk", ["string", "Buffer", "Uint8Array"], p);
    let q;
    return P.ending ? q = new B() : P.destroyed && (q = new T("write")), q ? (e.nextTick($, q), O(y, q, !0), q) : (P.pendingcb++, z(y, P, p, A, $));
  }
  V.prototype.write = function(y, p, A) {
    return W(this, y, p, A) === !0;
  }, V.prototype.cork = function() {
    this._writableState.corked++;
  }, V.prototype.uncork = function() {
    const y = this._writableState;
    y.corked && (y.corked--, y.writing || te(this, y));
  }, V.prototype.setDefaultEncoding = function(p) {
    if (typeof p == "string" && (p = s(p)), !b.isEncoding(p))
      throw new I(p);
    return this._writableState.defaultEncoding = p, this;
  };
  function z(y, p, A, $, P) {
    const q = p.objectMode ? 1 : A.length;
    p.length += q;
    const X = p.length < p.highWaterMark;
    return X || (p.needDrain = !0), p.writing || p.corked || p.errored || !p.constructed ? (p.buffered.push({
      chunk: A,
      encoding: $,
      callback: P
    }), p.allBuffers && $ !== "buffer" && (p.allBuffers = !1), p.allNoop && P !== U && (p.allNoop = !1)) : (p.writelen = q, p.writecb = P, p.writing = !0, p.sync = !0, y._write(A, $, p.onwrite), p.sync = !1), X && !p.errored && !p.destroyed;
  }
  function Z(y, p, A, $, P, q, X) {
    p.writelen = $, p.writecb = X, p.writing = !0, p.sync = !0, p.destroyed ? p.onwrite(new T("write")) : A ? y._writev(P, p.onwrite) : y._write(P, q, p.onwrite), p.sync = !1;
  }
  function Q(y, p, A, $) {
    --p.pendingcb, $(A), j(p), O(y, A);
  }
  function ee(y, p) {
    const A = y._writableState, $ = A.sync, P = A.writecb;
    if (typeof P != "function") {
      O(y, new g());
      return;
    }
    A.writing = !1, A.writecb = null, A.length -= A.writelen, A.writelen = 0, p ? (p.stack, A.errored || (A.errored = p), y._readableState && !y._readableState.errored && (y._readableState.errored = p), $ ? e.nextTick(Q, y, A, p, P) : Q(y, A, p, P)) : (A.buffered.length > A.bufferedIndex && te(y, A), $ ? A.afterWriteTickInfo !== null && A.afterWriteTickInfo.cb === P ? A.afterWriteTickInfo.count++ : (A.afterWriteTickInfo = {
      count: 1,
      cb: P,
      stream: y,
      state: A
    }, e.nextTick(K, A.afterWriteTickInfo)) : de(y, A, 1, P));
  }
  function K({ stream: y, state: p, count: A, cb: $ }) {
    return p.afterWriteTickInfo = null, de(y, p, A, $);
  }
  function de(y, p, A, $) {
    for (!p.ending && !y.destroyed && p.length === 0 && p.needDrain && (p.needDrain = !1, y.emit("drain")); A-- > 0; )
      p.pendingcb--, $();
    p.destroyed && j(p), Ce(y, p);
  }
  function j(y) {
    if (y.writing)
      return;
    for (let P = y.bufferedIndex; P < y.buffered.length; ++P) {
      var p;
      const { chunk: q, callback: X } = y.buffered[P], J = y.objectMode ? 1 : q.length;
      y.length -= J, X(
        (p = y.errored) !== null && p !== void 0 ? p : new T("write")
      );
    }
    const A = y[k].splice(0);
    for (let P = 0; P < A.length; P++) {
      var $;
      A[P](
        ($ = y.errored) !== null && $ !== void 0 ? $ : new T("end")
      );
    }
    x(y);
  }
  function te(y, p) {
    if (p.corked || p.bufferProcessing || p.destroyed || !p.constructed)
      return;
    const { buffered: A, bufferedIndex: $, objectMode: P } = p, q = A.length - $;
    if (!q)
      return;
    let X = $;
    if (p.bufferProcessing = !0, q > 1 && y._writev) {
      p.pendingcb -= q - 1;
      const J = p.allNoop ? U : (F) => {
        for (let ce = X; ce < A.length; ++ce)
          A[ce].callback(F);
      }, fe = p.allNoop && X === 0 ? A : t(A, X);
      fe.allBuffers = p.allBuffers, Z(y, p, !0, p.length, fe, "", J), x(p);
    } else {
      do {
        const { chunk: J, encoding: fe, callback: F } = A[X];
        A[X++] = null;
        const ce = P ? 1 : J.length;
        Z(y, p, !1, ce, J, fe, F);
      } while (X < A.length && !p.writing);
      X === A.length ? x(p) : X > 256 ? (A.splice(0, X), p.bufferedIndex = 0) : p.bufferedIndex = X;
    }
    p.bufferProcessing = !1;
  }
  V.prototype._write = function(y, p, A) {
    if (this._writev)
      this._writev(
        [
          {
            chunk: y,
            encoding: p
          }
        ],
        A
      );
    else
      throw new L("_write()");
  }, V.prototype._writev = null, V.prototype.end = function(y, p, A) {
    const $ = this._writableState;
    typeof y == "function" ? (A = y, y = null, p = null) : typeof p == "function" && (A = p, p = null);
    let P;
    if (y != null) {
      const q = W(this, y, p);
      q instanceof r && (P = q);
    }
    return $.corked && ($.corked = 1, this.uncork()), P || (!$.errored && !$.ending ? ($.ending = !0, Ce(this, $, !0), $.ended = !0) : $.finished ? P = new D("end") : $.destroyed && (P = new T("end"))), typeof A == "function" && (P || $.finished ? e.nextTick(A, P) : $[k].push(A)), this;
  };
  function se(y) {
    return y.ending && !y.destroyed && y.constructed && y.length === 0 && !y.errored && y.buffered.length === 0 && !y.finished && !y.writing && !y.errorEmitted && !y.closeEmitted;
  }
  function ve(y, p) {
    let A = !1;
    function $(P) {
      if (A) {
        O(y, P ?? g());
        return;
      }
      if (A = !0, p.pendingcb--, P) {
        const q = p[k].splice(0);
        for (let X = 0; X < q.length; X++)
          q[X](P);
        O(y, P, p.sync);
      } else
        se(p) && (p.prefinished = !0, y.emit("prefinish"), p.pendingcb++, e.nextTick(Pe, y, p));
    }
    p.sync = !0, p.pendingcb++;
    try {
      y._final($);
    } catch (P) {
      $(P);
    }
    p.sync = !1;
  }
  function Te(y, p) {
    !p.prefinished && !p.finalCalled && (typeof y._final == "function" && !p.destroyed ? (p.finalCalled = !0, ve(y, p)) : (p.prefinished = !0, y.emit("prefinish")));
  }
  function Ce(y, p, A) {
    se(p) && (Te(y, p), p.pendingcb === 0 && (A ? (p.pendingcb++, e.nextTick(
      ($, P) => {
        se(P) ? Pe($, P) : P.pendingcb--;
      },
      y,
      p
    )) : se(p) && (p.pendingcb++, Pe(y, p))));
  }
  function Pe(y, p) {
    p.pendingcb--, p.finished = !0;
    const A = p[k].splice(0);
    for (let $ = 0; $ < A.length; $++)
      A[$]();
    if (y.emit("finish"), p.autoDestroy) {
      const $ = y._readableState;
      (!$ || $.autoDestroy && // We don't expect the readable to ever 'end'
      // if readable is explicitly set to false.
      ($.endEmitted || $.readable === !1)) && y.destroy();
    }
  }
  a(V.prototype, {
    closed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.destroyed : !1;
      },
      set(y) {
        this._writableState && (this._writableState.destroyed = y);
      }
    },
    writable: {
      __proto__: null,
      get() {
        const y = this._writableState;
        return !!y && y.writable !== !1 && !y.destroyed && !y.errored && !y.ending && !y.ended;
      },
      set(y) {
        this._writableState && (this._writableState.writable = !!y);
      }
    },
    writableFinished: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.finished : !1;
      }
    },
    writableObjectMode: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.objectMode : !1;
      }
    },
    writableBuffer: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.getBuffer();
      }
    },
    writableEnded: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.ending : !1;
      }
    },
    writableNeedDrain: {
      __proto__: null,
      get() {
        const y = this._writableState;
        return y ? !y.destroyed && !y.ending && y.needDrain : !1;
      }
    },
    writableHighWaterMark: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.highWaterMark;
      }
    },
    writableCorked: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.corked : 0;
      }
    },
    writableLength: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.length;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._writableState ? this._writableState.errored : null;
      }
    },
    writableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._writableState.writable !== !1 && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
      }
    }
  });
  const ft = c.destroy;
  V.prototype.destroy = function(y, p) {
    const A = this._writableState;
    return !A.destroyed && (A.bufferedIndex < A.buffered.length || A[k].length) && e.nextTick(j, A), ft.call(this, y, p), this;
  }, V.prototype._undestroy = c.undestroy, V.prototype._destroy = function(y, p) {
    p(y);
  }, V.prototype[h.captureRejectionSymbol] = function(y) {
    this.destroy(y);
  };
  let Le;
  function Ne() {
    return Le === void 0 && (Le = {}), Le;
  }
  return V.fromWeb = function(y, p) {
    return Ne().newStreamWritableFromWritableStream(y, p);
  }, V.toWeb = function(y) {
    return Ne().newWritableStreamFromStreamWritable(y);
  }, li;
}
var si, Fa;
function Qb() {
  if (Fa)
    return si;
  Fa = 1;
  const e = Ae, t = ye, {
    isReadable: r,
    isWritable: n,
    isIterable: o,
    isNodeStream: a,
    isReadableNodeStream: i,
    isWritableNodeStream: s,
    isDuplexNodeStream: f,
    isReadableStream: u,
    isWritableStream: h
  } = nt, w = dt, {
    AbortError: b,
    codes: { ERR_INVALID_ARG_TYPE: c, ERR_INVALID_RETURN_VALUE: S }
  } = me, { destroyer: _ } = Gt, R = et(), C = In(), L = fo(), { createDeferredPromise: g } = Re, G = Ms, T = globalThis.Blob || t.Blob, D = typeof T < "u" ? function(E) {
    return E instanceof T;
  } : function(E) {
    return !1;
  }, H = globalThis.AbortController || Ue().AbortController, { FunctionPrototypeCall: B } = le;
  class I extends R {
    constructor(E) {
      super(E), (E == null ? void 0 : E.readable) === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), (E == null ? void 0 : E.writable) === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
    }
  }
  si = function k(E, x) {
    if (f(E))
      return E;
    if (i(E))
      return U({
        readable: E
      });
    if (s(E))
      return U({
        writable: E
      });
    if (a(E))
      return U({
        writable: !1,
        readable: !1
      });
    if (u(E))
      return U({
        readable: C.fromWeb(E)
      });
    if (h(E))
      return U({
        writable: L.fromWeb(E)
      });
    if (typeof E == "function") {
      const { value: W, write: z, final: Z, destroy: Q } = O(E);
      if (o(W))
        return G(I, W, {
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          write: z,
          final: Z,
          destroy: Q
        });
      const ee = W == null ? void 0 : W.then;
      if (typeof ee == "function") {
        let K;
        const de = B(
          ee,
          W,
          (j) => {
            if (j != null)
              throw new S("nully", "body", j);
          },
          (j) => {
            _(K, j);
          }
        );
        return K = new I({
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          readable: !1,
          write: z,
          final(j) {
            Z(async () => {
              try {
                await de, e.nextTick(j, null);
              } catch (te) {
                e.nextTick(j, te);
              }
            });
          },
          destroy: Q
        });
      }
      throw new S("Iterable, AsyncIterable or AsyncFunction", x, W);
    }
    if (D(E))
      return k(E.arrayBuffer());
    if (o(E))
      return G(I, E, {
        // TODO (ronag): highWaterMark?
        objectMode: !0,
        writable: !1
      });
    if (u(E == null ? void 0 : E.readable) && h(E == null ? void 0 : E.writable))
      return I.fromWeb(E);
    if (typeof (E == null ? void 0 : E.writable) == "object" || typeof (E == null ? void 0 : E.readable) == "object") {
      const W = E != null && E.readable ? i(E == null ? void 0 : E.readable) ? E == null ? void 0 : E.readable : k(E.readable) : void 0, z = E != null && E.writable ? s(E == null ? void 0 : E.writable) ? E == null ? void 0 : E.writable : k(E.writable) : void 0;
      return U({
        readable: W,
        writable: z
      });
    }
    const V = E == null ? void 0 : E.then;
    if (typeof V == "function") {
      let W;
      return B(
        V,
        E,
        (z) => {
          z != null && W.push(z), W.push(null);
        },
        (z) => {
          _(W, z);
        }
      ), W = new I({
        objectMode: !0,
        writable: !1,
        read() {
        }
      });
    }
    throw new c(
      x,
      [
        "Blob",
        "ReadableStream",
        "WritableStream",
        "Stream",
        "Iterable",
        "AsyncIterable",
        "Function",
        "{ readable, writable } pair",
        "Promise"
      ],
      E
    );
  };
  function O(k) {
    let { promise: E, resolve: x } = g();
    const V = new H(), W = V.signal;
    return {
      value: k(
        async function* () {
          for (; ; ) {
            const Z = E;
            E = null;
            const { chunk: Q, done: ee, cb: K } = await Z;
            if (e.nextTick(K), ee)
              return;
            if (W.aborted)
              throw new b(void 0, {
                cause: W.reason
              });
            ({ promise: E, resolve: x } = g()), yield Q;
          }
        }(),
        {
          signal: W
        }
      ),
      write(Z, Q, ee) {
        const K = x;
        x = null, K({
          chunk: Z,
          done: !1,
          cb: ee
        });
      },
      final(Z) {
        const Q = x;
        x = null, Q({
          done: !0,
          cb: Z
        });
      },
      destroy(Z, Q) {
        V.abort(), Q(Z);
      }
    };
  }
  function U(k) {
    const E = k.readable && typeof k.readable.read != "function" ? C.wrap(k.readable) : k.readable, x = k.writable;
    let V = !!r(E), W = !!n(x), z, Z, Q, ee, K;
    function de(j) {
      const te = ee;
      ee = null, te ? te(j) : j && K.destroy(j);
    }
    return K = new I({
      // TODO (ronag): highWaterMark?
      readableObjectMode: !!(E != null && E.readableObjectMode),
      writableObjectMode: !!(x != null && x.writableObjectMode),
      readable: V,
      writable: W
    }), W && (w(x, (j) => {
      W = !1, j && _(E, j), de(j);
    }), K._write = function(j, te, se) {
      x.write(j, te) ? se() : z = se;
    }, K._final = function(j) {
      x.end(), Z = j;
    }, x.on("drain", function() {
      if (z) {
        const j = z;
        z = null, j();
      }
    }), x.on("finish", function() {
      if (Z) {
        const j = Z;
        Z = null, j();
      }
    })), V && (w(E, (j) => {
      V = !1, j && _(E, j), de(j);
    }), E.on("readable", function() {
      if (Q) {
        const j = Q;
        Q = null, j();
      }
    }), E.on("end", function() {
      K.push(null);
    }), K._read = function() {
      for (; ; ) {
        const j = E.read();
        if (j === null) {
          Q = K._read;
          return;
        }
        if (!K.push(j))
          return;
      }
    }), K._destroy = function(j, te) {
      !j && ee !== null && (j = new b()), Q = null, z = null, Z = null, ee === null ? te(j) : (ee = te, _(x, j), _(E, j));
    }, K;
  }
  return si;
}
var di, Ua;
function et() {
  if (Ua)
    return di;
  Ua = 1;
  const {
    ObjectDefineProperties: e,
    ObjectGetOwnPropertyDescriptor: t,
    ObjectKeys: r,
    ObjectSetPrototypeOf: n
  } = le;
  di = i;
  const o = In(), a = fo();
  n(i.prototype, o.prototype), n(i, o);
  {
    const h = r(a.prototype);
    for (let w = 0; w < h.length; w++) {
      const b = h[w];
      i.prototype[b] || (i.prototype[b] = a.prototype[b]);
    }
  }
  function i(h) {
    if (!(this instanceof i))
      return new i(h);
    o.call(this, h), a.call(this, h), h ? (this.allowHalfOpen = h.allowHalfOpen !== !1, h.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), h.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
  }
  e(i.prototype, {
    writable: {
      __proto__: null,
      ...t(a.prototype, "writable")
    },
    writableHighWaterMark: {
      __proto__: null,
      ...t(a.prototype, "writableHighWaterMark")
    },
    writableObjectMode: {
      __proto__: null,
      ...t(a.prototype, "writableObjectMode")
    },
    writableBuffer: {
      __proto__: null,
      ...t(a.prototype, "writableBuffer")
    },
    writableLength: {
      __proto__: null,
      ...t(a.prototype, "writableLength")
    },
    writableFinished: {
      __proto__: null,
      ...t(a.prototype, "writableFinished")
    },
    writableCorked: {
      __proto__: null,
      ...t(a.prototype, "writableCorked")
    },
    writableEnded: {
      __proto__: null,
      ...t(a.prototype, "writableEnded")
    },
    writableNeedDrain: {
      __proto__: null,
      ...t(a.prototype, "writableNeedDrain")
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
      },
      set(h) {
        this._readableState && this._writableState && (this._readableState.destroyed = h, this._writableState.destroyed = h);
      }
    }
  });
  let s;
  function f() {
    return s === void 0 && (s = {}), s;
  }
  i.fromWeb = function(h, w) {
    return f().newStreamDuplexFromReadableWritablePair(h, w);
  }, i.toWeb = function(h) {
    return f().newReadableWritablePairFromDuplex(h);
  };
  let u;
  return i.from = function(h) {
    return u || (u = Qb()), u(h, "body");
  }, di;
}
const { ObjectSetPrototypeOf: js, Symbol: Zb } = le;
var Vs = tt;
const { ERR_METHOD_NOT_IMPLEMENTED: ey } = me.codes, uo = et(), { getHighWaterMark: ty } = An;
js(tt.prototype, uo.prototype);
js(tt, uo);
const yr = Zb("kCallback");
function tt(e) {
  if (!(this instanceof tt))
    return new tt(e);
  const t = e ? ty(this, e, "readableHighWaterMark", !0) : null;
  t === 0 && (e = {
    ...e,
    highWaterMark: null,
    readableHighWaterMark: t,
    // TODO (ronag): 0 is not optimal since we have
    // a "bug" where we check needDrain before calling _write and not after.
    // Refs: https://github.com/nodejs/node/pull/32887
    // Refs: https://github.com/nodejs/node/pull/35941
    writableHighWaterMark: e.writableHighWaterMark || 0
  }), uo.call(this, e), this._readableState.sync = !1, this[yr] = null, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", ry);
}
function Fi(e) {
  typeof this._flush == "function" && !this.destroyed ? this._flush((t, r) => {
    if (t) {
      e ? e(t) : this.destroy(t);
      return;
    }
    r != null && this.push(r), this.push(null), e && e();
  }) : (this.push(null), e && e());
}
function ry() {
  this._final !== Fi && Fi.call(this);
}
tt.prototype._final = Fi;
tt.prototype._transform = function(e, t, r) {
  throw new ey("_transform()");
};
tt.prototype._write = function(e, t, r) {
  const n = this._readableState, o = this._writableState, a = n.length;
  this._transform(e, t, (i, s) => {
    if (i) {
      r(i);
      return;
    }
    s != null && this.push(s), o.ended || // Backwards compat.
    a === n.length || // Backwards compat.
    n.length < n.highWaterMark ? r() : this[yr] = r;
  });
};
tt.prototype._read = function() {
  if (this[yr]) {
    const e = this[yr];
    this[yr] = null, e();
  }
};
const { ObjectSetPrototypeOf: Fs } = le;
var Us = Vt;
const co = Vs;
Fs(Vt.prototype, co.prototype);
Fs(Vt, co);
function Vt(e) {
  if (!(this instanceof Vt))
    return new Vt(e);
  co.call(this, e);
}
Vt.prototype._transform = function(e, t, r) {
  r(null, e);
};
const cr = Ae, { ArrayIsArray: ny, Promise: iy, SymbolAsyncIterator: oy, SymbolDispose: ay } = le, jr = dt, { once: ly } = Re, sy = Gt, Wa = et(), {
  aggregateTwoErrors: dy,
  codes: {
    ERR_INVALID_ARG_TYPE: Ui,
    ERR_INVALID_RETURN_VALUE: fi,
    ERR_MISSING_ARGS: fy,
    ERR_STREAM_DESTROYED: uy,
    ERR_STREAM_PREMATURE_CLOSE: cy
  },
  AbortError: hy
} = me, { validateFunction: by, validateAbortSignal: yy } = gr, {
  isIterable: Et,
  isReadable: ui,
  isReadableNodeStream: Pr,
  isNodeStream: Ba,
  isTransformStream: xt,
  isWebStream: py,
  isReadableStream: ci,
  isReadableFinished: _y
} = nt, wy = globalThis.AbortController || Ue().AbortController;
let hi, bi, yi;
function Ha(e, t, r) {
  let n = !1;
  e.on("close", () => {
    n = !0;
  });
  const o = jr(
    e,
    {
      readable: t,
      writable: r
    },
    (a) => {
      n = !a;
    }
  );
  return {
    destroy: (a) => {
      n || (n = !0, sy.destroyer(e, a || new uy("pipe")));
    },
    cleanup: o
  };
}
function gy(e) {
  return by(e[e.length - 1], "streams[stream.length - 1]"), e.pop();
}
function pi(e) {
  if (Et(e))
    return e;
  if (Pr(e))
    return Ey(e);
  throw new Ui("val", ["Readable", "Iterable", "AsyncIterable"], e);
}
async function* Ey(e) {
  bi || (bi = In()), yield* bi.prototype[oy].call(e);
}
async function Cr(e, t, r, { end: n }) {
  let o, a = null;
  const i = (u) => {
    if (u && (o = u), a) {
      const h = a;
      a = null, h();
    }
  }, s = () => new iy((u, h) => {
    o ? h(o) : a = () => {
      o ? h(o) : u();
    };
  });
  t.on("drain", i);
  const f = jr(
    t,
    {
      readable: !1
    },
    i
  );
  try {
    t.writableNeedDrain && await s();
    for await (const u of e)
      t.write(u) || await s();
    n && (t.end(), await s()), r();
  } catch (u) {
    r(o !== u ? dy(o, u) : u);
  } finally {
    f(), t.off("drain", i);
  }
}
async function _i(e, t, r, { end: n }) {
  xt(t) && (t = t.writable);
  const o = t.getWriter();
  try {
    for await (const a of e)
      await o.ready, o.write(a).catch(() => {
      });
    await o.ready, n && await o.close(), r();
  } catch (a) {
    try {
      await o.abort(a), r(a);
    } catch (i) {
      r(i);
    }
  }
}
function Sy(...e) {
  return Ws(e, ly(gy(e)));
}
function Ws(e, t, r) {
  if (e.length === 1 && ny(e[0]) && (e = e[0]), e.length < 2)
    throw new fy("streams");
  const n = new wy(), o = n.signal, a = r == null ? void 0 : r.signal, i = [];
  yy(a, "options.signal");
  function s() {
    S(new hy());
  }
  yi = yi || Re.addAbortListener;
  let f;
  a && (f = yi(a, s));
  let u, h;
  const w = [];
  let b = 0;
  function c(L) {
    S(L, --b === 0);
  }
  function S(L, g) {
    var G;
    if (L && (!u || u.code === "ERR_STREAM_PREMATURE_CLOSE") && (u = L), !(!u && !g)) {
      for (; w.length; )
        w.shift()(u);
      (G = f) === null || G === void 0 || G[ay](), n.abort(), g && (u || i.forEach((T) => T()), cr.nextTick(t, u, h));
    }
  }
  let _;
  for (let L = 0; L < e.length; L++) {
    const g = e[L], G = L < e.length - 1, T = L > 0, D = G || (r == null ? void 0 : r.end) !== !1, H = L === e.length - 1;
    if (Ba(g)) {
      let B = function(I) {
        I && I.name !== "AbortError" && I.code !== "ERR_STREAM_PREMATURE_CLOSE" && c(I);
      };
      if (D) {
        const { destroy: I, cleanup: O } = Ha(g, G, T);
        w.push(I), ui(g) && H && i.push(O);
      }
      g.on("error", B), ui(g) && H && i.push(() => {
        g.removeListener("error", B);
      });
    }
    if (L === 0)
      if (typeof g == "function") {
        if (_ = g({
          signal: o
        }), !Et(_))
          throw new fi("Iterable, AsyncIterable or Stream", "source", _);
      } else
        Et(g) || Pr(g) || xt(g) ? _ = g : _ = Wa.from(g);
    else if (typeof g == "function") {
      if (xt(_)) {
        var R;
        _ = pi((R = _) === null || R === void 0 ? void 0 : R.readable);
      } else
        _ = pi(_);
      if (_ = g(_, {
        signal: o
      }), G) {
        if (!Et(_, !0))
          throw new fi("AsyncIterable", `transform[${L - 1}]`, _);
      } else {
        var C;
        hi || (hi = Us);
        const B = new hi({
          objectMode: !0
        }), I = (C = _) === null || C === void 0 ? void 0 : C.then;
        if (typeof I == "function")
          b++, I.call(
            _,
            (k) => {
              h = k, k != null && B.write(k), D && B.end(), cr.nextTick(c);
            },
            (k) => {
              B.destroy(k), cr.nextTick(c, k);
            }
          );
        else if (Et(_, !0))
          b++, Cr(_, B, c, {
            end: D
          });
        else if (ci(_) || xt(_)) {
          const k = _.readable || _;
          b++, Cr(k, B, c, {
            end: D
          });
        } else
          throw new fi("AsyncIterable or Promise", "destination", _);
        _ = B;
        const { destroy: O, cleanup: U } = Ha(_, !1, !0);
        w.push(O), H && i.push(U);
      }
    } else if (Ba(g)) {
      if (Pr(_)) {
        b += 2;
        const B = Ry(_, g, c, {
          end: D
        });
        ui(g) && H && i.push(B);
      } else if (xt(_) || ci(_)) {
        const B = _.readable || _;
        b++, Cr(B, g, c, {
          end: D
        });
      } else if (Et(_))
        b++, Cr(_, g, c, {
          end: D
        });
      else
        throw new Ui(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          _
        );
      _ = g;
    } else if (py(g)) {
      if (Pr(_))
        b++, _i(pi(_), g, c, {
          end: D
        });
      else if (ci(_) || Et(_))
        b++, _i(_, g, c, {
          end: D
        });
      else if (xt(_))
        b++, _i(_.readable, g, c, {
          end: D
        });
      else
        throw new Ui(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          _
        );
      _ = g;
    } else
      _ = Wa.from(g);
  }
  return (o != null && o.aborted || a != null && a.aborted) && cr.nextTick(s), _;
}
function Ry(e, t, r, { end: n }) {
  let o = !1;
  if (t.on("close", () => {
    o || r(new cy());
  }), e.pipe(t, {
    end: !1
  }), n) {
    let a = function() {
      o = !0, t.end();
    };
    _y(e) ? cr.nextTick(a) : e.once("end", a);
  } else
    r();
  return jr(
    e,
    {
      readable: !0,
      writable: !1
    },
    (a) => {
      const i = e._readableState;
      a && a.code === "ERR_STREAM_PREMATURE_CLOSE" && i && i.ended && !i.errored && !i.errorEmitted ? e.once("end", r).once("error", r) : r(a);
    }
  ), jr(
    t,
    {
      readable: !1,
      writable: !0
    },
    r
  );
}
var ho = {
  pipelineImpl: Ws,
  pipeline: Sy
};
const { pipeline: Ay } = ho, Nr = et(), { destroyer: Iy } = Gt, {
  isNodeStream: Or,
  isReadable: Ga,
  isWritable: Ka,
  isWebStream: wi,
  isTransformStream: wt,
  isWritableStream: Ja,
  isReadableStream: qa
} = nt, {
  AbortError: my,
  codes: { ERR_INVALID_ARG_VALUE: Ya, ERR_MISSING_ARGS: vy }
} = me, Ty = dt;
var Bs = function(...t) {
  if (t.length === 0)
    throw new vy("streams");
  if (t.length === 1)
    return Nr.from(t[0]);
  const r = [...t];
  if (typeof t[0] == "function" && (t[0] = Nr.from(t[0])), typeof t[t.length - 1] == "function") {
    const c = t.length - 1;
    t[c] = Nr.from(t[c]);
  }
  for (let c = 0; c < t.length; ++c)
    if (!(!Or(t[c]) && !wi(t[c]))) {
      if (c < t.length - 1 && !(Ga(t[c]) || qa(t[c]) || wt(t[c])))
        throw new Ya(`streams[${c}]`, r[c], "must be readable");
      if (c > 0 && !(Ka(t[c]) || Ja(t[c]) || wt(t[c])))
        throw new Ya(`streams[${c}]`, r[c], "must be writable");
    }
  let n, o, a, i, s;
  function f(c) {
    const S = i;
    i = null, S ? S(c) : c ? s.destroy(c) : !b && !w && s.destroy();
  }
  const u = t[0], h = Ay(t, f), w = !!(Ka(u) || Ja(u) || wt(u)), b = !!(Ga(h) || qa(h) || wt(h));
  if (s = new Nr({
    // TODO (ronag): highWaterMark?
    writableObjectMode: !!(u != null && u.writableObjectMode),
    readableObjectMode: !!(h != null && h.readableObjectMode),
    writable: w,
    readable: b
  }), w) {
    if (Or(u))
      s._write = function(S, _, R) {
        u.write(S, _) ? R() : n = R;
      }, s._final = function(S) {
        u.end(), o = S;
      }, u.on("drain", function() {
        if (n) {
          const S = n;
          n = null, S();
        }
      });
    else if (wi(u)) {
      const _ = (wt(u) ? u.writable : u).getWriter();
      s._write = async function(R, C, L) {
        try {
          await _.ready, _.write(R).catch(() => {
          }), L();
        } catch (g) {
          L(g);
        }
      }, s._final = async function(R) {
        try {
          await _.ready, _.close().catch(() => {
          }), o = R;
        } catch (C) {
          R(C);
        }
      };
    }
    const c = wt(h) ? h.readable : h;
    Ty(c, () => {
      if (o) {
        const S = o;
        o = null, S();
      }
    });
  }
  if (b) {
    if (Or(h))
      h.on("readable", function() {
        if (a) {
          const c = a;
          a = null, c();
        }
      }), h.on("end", function() {
        s.push(null);
      }), s._read = function() {
        for (; ; ) {
          const c = h.read();
          if (c === null) {
            a = s._read;
            return;
          }
          if (!s.push(c))
            return;
        }
      };
    else if (wi(h)) {
      const S = (wt(h) ? h.readable : h).getReader();
      s._read = async function() {
        for (; ; )
          try {
            const { value: _, done: R } = await S.read();
            if (!s.push(_))
              return;
            if (R) {
              s.push(null);
              return;
            }
          } catch {
            return;
          }
      };
    }
  }
  return s._destroy = function(c, S) {
    !c && i !== null && (c = new my()), a = null, n = null, o = null, i === null ? S(c) : (i = S, Or(h) && Iy(h, c));
  }, s;
};
const Cy = globalThis.AbortController || Ue().AbortController, {
  codes: { ERR_INVALID_ARG_VALUE: Ny, ERR_INVALID_ARG_TYPE: Er, ERR_MISSING_ARGS: Oy, ERR_OUT_OF_RANGE: Dy },
  AbortError: Be
} = me, { validateAbortSignal: Ot, validateInteger: za, validateObject: Dt } = gr, $y = le.Symbol("kWeak"), Py = le.Symbol("kResistStopPropagation"), { finished: Ly } = dt, xy = Bs, { addAbortSignalNoValidate: ky } = Rn, { isWritable: My, isNodeStream: jy } = nt, { deprecate: Vy } = Re, {
  ArrayPrototypePush: Fy,
  Boolean: Uy,
  MathFloor: Xa,
  Number: Wy,
  NumberIsNaN: By,
  Promise: Qa,
  PromiseReject: Za,
  PromiseResolve: Hy,
  PromisePrototypeThen: el,
  Symbol: Hs
} = le, Vr = Hs("kEmpty"), tl = Hs("kEof");
function Gy(e, t) {
  if (t != null && Dt(t, "options"), (t == null ? void 0 : t.signal) != null && Ot(t.signal, "options.signal"), jy(e) && !My(e))
    throw new Ny("stream", e, "must be writable");
  const r = xy(this, e);
  return t != null && t.signal && ky(t.signal, r), r;
}
function mn(e, t) {
  if (typeof e != "function")
    throw new Er("fn", ["Function", "AsyncFunction"], e);
  t != null && Dt(t, "options"), (t == null ? void 0 : t.signal) != null && Ot(t.signal, "options.signal");
  let r = 1;
  (t == null ? void 0 : t.concurrency) != null && (r = Xa(t.concurrency));
  let n = r - 1;
  return (t == null ? void 0 : t.highWaterMark) != null && (n = Xa(t.highWaterMark)), za(r, "options.concurrency", 1), za(n, "options.highWaterMark", 0), n += r, (async function* () {
    const a = Re.AbortSignalAny(
      [t == null ? void 0 : t.signal].filter(Uy)
    ), i = this, s = [], f = {
      signal: a
    };
    let u, h, w = !1, b = 0;
    function c() {
      w = !0, S();
    }
    function S() {
      b -= 1, _();
    }
    function _() {
      h && !w && b < r && s.length < n && (h(), h = null);
    }
    async function R() {
      try {
        for await (let C of i) {
          if (w)
            return;
          if (a.aborted)
            throw new Be();
          try {
            if (C = e(C, f), C === Vr)
              continue;
            C = Hy(C);
          } catch (L) {
            C = Za(L);
          }
          b += 1, el(C, S, c), s.push(C), u && (u(), u = null), !w && (s.length >= n || b >= r) && await new Qa((L) => {
            h = L;
          });
        }
        s.push(tl);
      } catch (C) {
        const L = Za(C);
        el(L, S, c), s.push(L);
      } finally {
        w = !0, u && (u(), u = null);
      }
    }
    R();
    try {
      for (; ; ) {
        for (; s.length > 0; ) {
          const C = await s[0];
          if (C === tl)
            return;
          if (a.aborted)
            throw new Be();
          C !== Vr && (yield C), s.shift(), _();
        }
        await new Qa((C) => {
          u = C;
        });
      }
    } finally {
      w = !0, h && (h(), h = null);
    }
  }).call(this);
}
function Ky(e = void 0) {
  return e != null && Dt(e, "options"), (e == null ? void 0 : e.signal) != null && Ot(e.signal, "options.signal"), (async function* () {
    let r = 0;
    for await (const o of this) {
      var n;
      if (e != null && (n = e.signal) !== null && n !== void 0 && n.aborted)
        throw new Be({
          cause: e.signal.reason
        });
      yield [r++, o];
    }
  }).call(this);
}
async function Gs(e, t = void 0) {
  for await (const r of bo.call(this, e, t))
    return !0;
  return !1;
}
async function Jy(e, t = void 0) {
  if (typeof e != "function")
    throw new Er("fn", ["Function", "AsyncFunction"], e);
  return !await Gs.call(
    this,
    async (...r) => !await e(...r),
    t
  );
}
async function qy(e, t) {
  for await (const r of bo.call(this, e, t))
    return r;
}
async function Yy(e, t) {
  if (typeof e != "function")
    throw new Er("fn", ["Function", "AsyncFunction"], e);
  async function r(n, o) {
    return await e(n, o), Vr;
  }
  for await (const n of mn.call(this, r, t))
    ;
}
function bo(e, t) {
  if (typeof e != "function")
    throw new Er("fn", ["Function", "AsyncFunction"], e);
  async function r(n, o) {
    return await e(n, o) ? n : Vr;
  }
  return mn.call(this, r, t);
}
class zy extends Oy {
  constructor() {
    super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
  }
}
async function Xy(e, t, r) {
  var n;
  if (typeof e != "function")
    throw new Er("reducer", ["Function", "AsyncFunction"], e);
  r != null && Dt(r, "options"), (r == null ? void 0 : r.signal) != null && Ot(r.signal, "options.signal");
  let o = arguments.length > 1;
  if (r != null && (n = r.signal) !== null && n !== void 0 && n.aborted) {
    const u = new Be(void 0, {
      cause: r.signal.reason
    });
    throw this.once("error", () => {
    }), await Ly(this.destroy(u)), u;
  }
  const a = new Cy(), i = a.signal;
  if (r != null && r.signal) {
    const u = {
      once: !0,
      [$y]: this,
      [Py]: !0
    };
    r.signal.addEventListener("abort", () => a.abort(), u);
  }
  let s = !1;
  try {
    for await (const u of this) {
      var f;
      if (s = !0, r != null && (f = r.signal) !== null && f !== void 0 && f.aborted)
        throw new Be();
      o ? t = await e(t, u, {
        signal: i
      }) : (t = u, o = !0);
    }
    if (!s && !o)
      throw new zy();
  } finally {
    a.abort();
  }
  return t;
}
async function Qy(e) {
  e != null && Dt(e, "options"), (e == null ? void 0 : e.signal) != null && Ot(e.signal, "options.signal");
  const t = [];
  for await (const n of this) {
    var r;
    if (e != null && (r = e.signal) !== null && r !== void 0 && r.aborted)
      throw new Be(void 0, {
        cause: e.signal.reason
      });
    Fy(t, n);
  }
  return t;
}
function Zy(e, t) {
  const r = mn.call(this, e, t);
  return (async function* () {
    for await (const o of r)
      yield* o;
  }).call(this);
}
function Ks(e) {
  if (e = Wy(e), By(e))
    return 0;
  if (e < 0)
    throw new Dy("number", ">= 0", e);
  return e;
}
function ep(e, t = void 0) {
  return t != null && Dt(t, "options"), (t == null ? void 0 : t.signal) != null && Ot(t.signal, "options.signal"), e = Ks(e), (async function* () {
    var n;
    if (t != null && (n = t.signal) !== null && n !== void 0 && n.aborted)
      throw new Be();
    for await (const a of this) {
      var o;
      if (t != null && (o = t.signal) !== null && o !== void 0 && o.aborted)
        throw new Be();
      e-- <= 0 && (yield a);
    }
  }).call(this);
}
function tp(e, t = void 0) {
  return t != null && Dt(t, "options"), (t == null ? void 0 : t.signal) != null && Ot(t.signal, "options.signal"), e = Ks(e), (async function* () {
    var n;
    if (t != null && (n = t.signal) !== null && n !== void 0 && n.aborted)
      throw new Be();
    for await (const a of this) {
      var o;
      if (t != null && (o = t.signal) !== null && o !== void 0 && o.aborted)
        throw new Be();
      if (e-- > 0 && (yield a), e <= 0)
        return;
    }
  }).call(this);
}
no.streamReturningOperators = {
  asIndexedPairs: Vy(Ky, "readable.asIndexedPairs will be removed in a future version."),
  drop: ep,
  filter: bo,
  flatMap: Zy,
  map: mn,
  take: tp,
  compose: Gy
};
no.promiseReturningOperators = {
  every: Jy,
  forEach: Yy,
  reduce: Xy,
  toArray: Qy,
  some: Gs,
  find: qy
};
var gi, rl;
function Js() {
  if (rl)
    return gi;
  rl = 1;
  const { ArrayPrototypePop: e, Promise: t } = le, { isIterable: r, isNodeStream: n, isWebStream: o } = nt, { pipelineImpl: a } = ho, { finished: i } = dt;
  qs();
  function s(...f) {
    return new t((u, h) => {
      let w, b;
      const c = f[f.length - 1];
      if (c && typeof c == "object" && !n(c) && !r(c) && !o(c)) {
        const S = e(f);
        w = S.signal, b = S.end;
      }
      a(
        f,
        (S, _) => {
          S ? h(S) : u(_);
        },
        {
          signal: w,
          end: b
        }
      );
    });
  }
  return gi = {
    finished: i,
    pipeline: s
  }, gi;
}
var nl;
function qs() {
  if (nl)
    return ri.exports;
  nl = 1;
  const { Buffer: e } = ye, { ObjectDefineProperty: t, ObjectKeys: r, ReflectApply: n } = le, {
    promisify: { custom: o }
  } = Re, { streamReturningOperators: a, promiseReturningOperators: i } = no, {
    codes: { ERR_ILLEGAL_CONSTRUCTOR: s }
  } = me, f = Bs, { setDefaultHighWaterMark: u, getDefaultHighWaterMark: h } = An, { pipeline: w } = ho, { destroyer: b } = Gt, c = dt, S = Js(), _ = nt, R = ri.exports = so.Stream;
  R.isDestroyed = _.isDestroyed, R.isDisturbed = _.isDisturbed, R.isErrored = _.isErrored, R.isReadable = _.isReadable, R.isWritable = _.isWritable, R.Readable = In();
  for (const L of r(a)) {
    let G = function(...T) {
      if (new.target)
        throw s();
      return R.Readable.from(n(g, this, T));
    };
    const g = a[L];
    t(G, "name", {
      __proto__: null,
      value: g.name
    }), t(G, "length", {
      __proto__: null,
      value: g.length
    }), t(R.Readable.prototype, L, {
      __proto__: null,
      value: G,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  for (const L of r(i)) {
    let G = function(...T) {
      if (new.target)
        throw s();
      return n(g, this, T);
    };
    const g = i[L];
    t(G, "name", {
      __proto__: null,
      value: g.name
    }), t(G, "length", {
      __proto__: null,
      value: g.length
    }), t(R.Readable.prototype, L, {
      __proto__: null,
      value: G,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  R.Writable = fo(), R.Duplex = et(), R.Transform = Vs, R.PassThrough = Us, R.pipeline = w;
  const { addAbortSignal: C } = Rn;
  return R.addAbortSignal = C, R.finished = c, R.destroy = b, R.compose = f, R.setDefaultHighWaterMark = u, R.getDefaultHighWaterMark = h, t(R, "promises", {
    __proto__: null,
    configurable: !0,
    enumerable: !0,
    get() {
      return S;
    }
  }), t(w, o, {
    __proto__: null,
    enumerable: !0,
    get() {
      return S.pipeline;
    }
  }), t(c, o, {
    __proto__: null,
    enumerable: !0,
    get() {
      return S.finished;
    }
  }), R.Stream = R, R._isUint8Array = function(g) {
    return g instanceof Uint8Array;
  }, R._uint8ArrayToBuffer = function(g) {
    return e.from(g.buffer, g.byteOffset, g.byteLength);
  }, ri.exports;
}
(function(e) {
  const t = qs(), r = Js(), n = t.Readable.destroy;
  e.exports = t.Readable, e.exports._uint8ArrayToBuffer = t._uint8ArrayToBuffer, e.exports._isUint8Array = t._isUint8Array, e.exports.isDisturbed = t.isDisturbed, e.exports.isErrored = t.isErrored, e.exports.isReadable = t.isReadable, e.exports.Readable = t.Readable, e.exports.Writable = t.Writable, e.exports.Duplex = t.Duplex, e.exports.Transform = t.Transform, e.exports.PassThrough = t.PassThrough, e.exports.addAbortSignal = t.addAbortSignal, e.exports.finished = t.finished, e.exports.destroy = t.destroy, e.exports.destroy = n, e.exports.pipeline = t.pipeline, e.exports.compose = t.compose, Object.defineProperty(t, "promises", {
    configurable: !0,
    enumerable: !0,
    get() {
      return r;
    }
  }), e.exports.Stream = t.Stream, e.exports.default = e.exports;
})(is);
var rp = is.exports;
const Wi = "null:";
function np(e) {
  return (t) => t.termType !== "NamedNode" || !t.value.startsWith(Wi) ? null : e.namedNode(t.value.slice(Wi.length));
}
function ip(e) {
  const t = np(e);
  return (r) => {
    const n = t(r.subject), o = t(r.predicate), a = t(r.object), i = t(r.graph);
    return n || o || a || i ? e.quad(
      n || r.subject,
      o || r.predicate,
      a || r.object,
      i || r.graph
    ) : r;
  };
}
class op {
  constructor(t, { baseIRI: r = Wi, context: n = null, documentLoader: o, factory: a = Xs } = {}) {
    const i = new ol.JsonLdParser({
      baseIRI: r,
      context: n,
      dataFactory: a,
      documentLoader: o,
      streamingProfile: !1
    });
    t.pipe(i);
    const s = ip(a), f = new rp.Transform({
      objectMode: !0,
      transform: (u, h, w) => {
        w(null, s(u));
      }
    });
    return i.on("context", (u) => {
      Object.entries(u).forEach(([h, w]) => {
        f.emit("prefix", h, a.namedNode(w));
      });
    }), i.on("error", (u) => f.destroy(u)), i.pipe(f), zs(f);
  }
}
class pp extends Qs {
  constructor(t) {
    super(op, t);
  }
}
export {
  pp as default
};
//# sourceMappingURL=index-DcZIc2ym.js.map
