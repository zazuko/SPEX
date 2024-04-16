import { a as Ye, e as lt, b as Ie, d as $e, f as hi, S as bi } from "./index-CbPxOOAJ.js";
var un = { exports: {} }, vt = { exports: {} }, H = {
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
}, dn = { exports: {} };
(function(e) {
  const t = Ie, { kResistStopPropagation: r, SymbolDispose: i } = H, l = globalThis.AbortSignal || Ye().AbortSignal, s = globalThis.AbortController || Ye().AbortController, d = Object.getPrototypeOf(async function() {
  }).constructor, g = globalThis.Blob || t.Blob, R = typeof g < "u" ? function(u) {
    return u instanceof g;
  } : function(u) {
    return !1;
  }, h = (c, u) => {
    if (c !== void 0 && (c === null || typeof c != "object" || !("aborted" in c)))
      throw new ERR_INVALID_ARG_TYPE(u, "AbortSignal", c);
  }, _ = (c, u) => {
    if (typeof c != "function")
      throw new ERR_INVALID_ARG_TYPE(u, "Function", c);
  };
  class v extends Error {
    constructor(u) {
      if (!Array.isArray(u))
        throw new TypeError(`Expected input to be an Array, got ${typeof u}`);
      let m = "";
      for (let b = 0; b < u.length; b++)
        m += `    ${u[b].stack}
`;
      super(m), this.name = "AggregateError", this.errors = u;
    }
  }
  e.exports = {
    AggregateError: v,
    kEmptyObject: Object.freeze({}),
    once(c) {
      let u = !1;
      return function(...m) {
        u || (u = !0, c.apply(this, m));
      };
    },
    createDeferredPromise: function() {
      let c, u;
      return {
        promise: new Promise((b, A) => {
          c = b, u = A;
        }),
        resolve: c,
        reject: u
      };
    },
    promisify(c) {
      return new Promise((u, m) => {
        c((b, ...A) => b ? m(b) : u(...A));
      });
    },
    debuglog() {
      return function() {
      };
    },
    format(c, ...u) {
      return c.replace(/%([sdifj])/g, function(...[m, b]) {
        const A = u.shift();
        return b === "f" ? A.toFixed(6) : b === "j" ? JSON.stringify(A) : b === "s" && typeof A == "object" ? `${A.constructor !== Object ? A.constructor.name : ""} {}`.trim() : A.toString();
      });
    },
    inspect(c) {
      switch (typeof c) {
        case "string":
          if (c.includes("'"))
            if (c.includes('"')) {
              if (!c.includes("`") && !c.includes("${"))
                return `\`${c}\``;
            } else
              return `"${c}"`;
          return `'${c}'`;
        case "number":
          return isNaN(c) ? "NaN" : Object.is(c, -0) ? String(c) : c;
        case "bigint":
          return `${String(c)}n`;
        case "boolean":
        case "undefined":
          return String(c);
        case "object":
          return "{}";
      }
    },
    types: {
      isAsyncFunction(c) {
        return c instanceof d;
      },
      isArrayBufferView(c) {
        return ArrayBuffer.isView(c);
      }
    },
    isBlob: R,
    deprecate(c, u) {
      return c;
    },
    addAbortListener: lt.addAbortListener || function(u, m) {
      if (u === void 0)
        throw new ERR_INVALID_ARG_TYPE("signal", "AbortSignal", u);
      h(u, "signal"), _(m, "listener");
      let b;
      return u.aborted ? queueMicrotask(() => m()) : (u.addEventListener("abort", m, {
        __proto__: null,
        once: !0,
        [r]: !0
      }), b = () => {
        u.removeEventListener("abort", m);
      }), {
        __proto__: null,
        [i]() {
          var A;
          (A = b) === null || A === void 0 || A();
        }
      };
    },
    AbortSignalAny: l.any || function(u) {
      if (u.length === 1)
        return u[0];
      const m = new s(), b = () => m.abort();
      return u.forEach((A) => {
        h(A, "signals"), A.addEventListener("abort", b, {
          once: !0
        });
      }), m.signal.addEventListener(
        "abort",
        () => {
          u.forEach((A) => A.removeEventListener("abort", b));
        },
        {
          once: !0
        }
      ), m.signal;
    }
  }, e.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
})(dn);
var te = dn.exports, er = {};
const { format: pi, inspect: nt, AggregateError: _i } = te, yi = globalThis.AggregateError || _i, wi = Symbol("kIsNodeError"), gi = [
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
], Si = /^([A-Z][a-z0-9]*)+$/, Ei = "__node_internal_", at = {};
function ve(e, t) {
  if (!e)
    throw new at.ERR_INTERNAL_ASSERTION(t);
}
function Rr(e) {
  let t = "", r = e.length;
  const i = e[0] === "-" ? 1 : 0;
  for (; r >= i + 4; r -= 3)
    t = `_${e.slice(r - 3, r)}${t}`;
  return `${e.slice(0, r)}${t}`;
}
function Ri(e, t, r) {
  if (typeof t == "function")
    return ve(
      t.length <= r.length,
      // Default options do not count.
      `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${t.length}).`
    ), t(...r);
  const i = (t.match(/%[dfijoOs]/g) || []).length;
  return ve(
    i === r.length,
    `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${i}).`
  ), r.length === 0 ? t : pi(t, ...r);
}
function Q(e, t, r) {
  r || (r = Error);
  class i extends r {
    constructor(...s) {
      super(Ri(e, t, s));
    }
    toString() {
      return `${this.name} [${e}]: ${this.message}`;
    }
  }
  Object.defineProperties(i.prototype, {
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
  }), i.prototype.code = e, i.prototype[wi] = !0, at[e] = i;
}
function Ar(e) {
  const t = Ei + e.name;
  return Object.defineProperty(e, "name", {
    value: t
  }), e;
}
function Ai(e, t) {
  if (e && t && e !== t) {
    if (Array.isArray(t.errors))
      return t.errors.push(e), t;
    const r = new yi([t, e], t.message);
    return r.code = t.code, r;
  }
  return e || t;
}
let mi = class extends Error {
  constructor(t = "The operation was aborted", r = void 0) {
    if (r !== void 0 && typeof r != "object")
      throw new at.ERR_INVALID_ARG_TYPE("options", "Object", r);
    super(t, r), this.code = "ABORT_ERR", this.name = "AbortError";
  }
};
Q("ERR_ASSERTION", "%s", Error);
Q(
  "ERR_INVALID_ARG_TYPE",
  (e, t, r) => {
    ve(typeof e == "string", "'name' must be a string"), Array.isArray(t) || (t = [t]);
    let i = "The ";
    e.endsWith(" argument") ? i += `${e} ` : i += `"${e}" ${e.includes(".") ? "property" : "argument"} `, i += "must be ";
    const l = [], s = [], d = [];
    for (const R of t)
      ve(typeof R == "string", "All expected entries have to be of type string"), gi.includes(R) ? l.push(R.toLowerCase()) : Si.test(R) ? s.push(R) : (ve(R !== "object", 'The value "object" should be written as "Object"'), d.push(R));
    if (s.length > 0) {
      const R = l.indexOf("object");
      R !== -1 && (l.splice(l, R, 1), s.push("Object"));
    }
    if (l.length > 0) {
      switch (l.length) {
        case 1:
          i += `of type ${l[0]}`;
          break;
        case 2:
          i += `one of type ${l[0]} or ${l[1]}`;
          break;
        default: {
          const R = l.pop();
          i += `one of type ${l.join(", ")}, or ${R}`;
        }
      }
      (s.length > 0 || d.length > 0) && (i += " or ");
    }
    if (s.length > 0) {
      switch (s.length) {
        case 1:
          i += `an instance of ${s[0]}`;
          break;
        case 2:
          i += `an instance of ${s[0]} or ${s[1]}`;
          break;
        default: {
          const R = s.pop();
          i += `an instance of ${s.join(", ")}, or ${R}`;
        }
      }
      d.length > 0 && (i += " or ");
    }
    switch (d.length) {
      case 0:
        break;
      case 1:
        d[0].toLowerCase() !== d[0] && (i += "an "), i += `${d[0]}`;
        break;
      case 2:
        i += `one of ${d[0]} or ${d[1]}`;
        break;
      default: {
        const R = d.pop();
        i += `one of ${d.join(", ")}, or ${R}`;
      }
    }
    if (r == null)
      i += `. Received ${r}`;
    else if (typeof r == "function" && r.name)
      i += `. Received function ${r.name}`;
    else if (typeof r == "object") {
      var g;
      if ((g = r.constructor) !== null && g !== void 0 && g.name)
        i += `. Received an instance of ${r.constructor.name}`;
      else {
        const R = nt(r, {
          depth: -1
        });
        i += `. Received ${R}`;
      }
    } else {
      let R = nt(r, {
        colors: !1
      });
      R.length > 25 && (R = `${R.slice(0, 25)}...`), i += `. Received type ${typeof r} (${R})`;
    }
    return i;
  },
  TypeError
);
Q(
  "ERR_INVALID_ARG_VALUE",
  (e, t, r = "is invalid") => {
    let i = nt(t);
    return i.length > 128 && (i = i.slice(0, 128) + "..."), `The ${e.includes(".") ? "property" : "argument"} '${e}' ${r}. Received ${i}`;
  },
  TypeError
);
Q(
  "ERR_INVALID_RETURN_VALUE",
  (e, t, r) => {
    var i;
    const l = r != null && (i = r.constructor) !== null && i !== void 0 && i.name ? `instance of ${r.constructor.name}` : `type ${typeof r}`;
    return `Expected ${e} to be returned from the "${t}" function but got ${l}.`;
  },
  TypeError
);
Q(
  "ERR_MISSING_ARGS",
  (...e) => {
    ve(e.length > 0, "At least one arg needs to be specified");
    let t;
    const r = e.length;
    switch (e = (Array.isArray(e) ? e : [e]).map((i) => `"${i}"`).join(" or "), r) {
      case 1:
        t += `The ${e[0]} argument`;
        break;
      case 2:
        t += `The ${e[0]} and ${e[1]} arguments`;
        break;
      default:
        {
          const i = e.pop();
          t += `The ${e.join(", ")}, and ${i} arguments`;
        }
        break;
    }
    return `${t} must be specified`;
  },
  TypeError
);
Q(
  "ERR_OUT_OF_RANGE",
  (e, t, r) => {
    ve(t, 'Missing "range" argument');
    let i;
    return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = Rr(String(r)) : typeof r == "bigint" ? (i = String(r), (r > 2n ** 32n || r < -(2n ** 32n)) && (i = Rr(i)), i += "n") : i = nt(r), `The value of "${e}" is out of range. It must be ${t}. Received ${i}`;
  },
  RangeError
);
Q("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
Q("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
Q("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
Q("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
Q("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
Q("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
Q("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
Q("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
Q("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
Q("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
Q("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
var ie = {
  AbortError: mi,
  aggregateTwoErrors: Ar(Ai),
  hideStackFrames: Ar,
  codes: at
};
const {
  ArrayIsArray: tr,
  ArrayPrototypeIncludes: cn,
  ArrayPrototypeJoin: hn,
  ArrayPrototypeMap: vi,
  NumberIsInteger: rr,
  NumberIsNaN: Ti,
  NumberMAX_SAFE_INTEGER: Ii,
  NumberMIN_SAFE_INTEGER: $i,
  NumberParseInt: Ni,
  ObjectPrototypeHasOwnProperty: Di,
  RegExpPrototypeExec: bn,
  String: Mi,
  StringPrototypeToUpperCase: ki,
  StringPrototypeTrim: Pi
} = H, {
  hideStackFrames: ae,
  codes: { ERR_SOCKET_BAD_PORT: Li, ERR_INVALID_ARG_TYPE: ee, ERR_INVALID_ARG_VALUE: Fe, ERR_OUT_OF_RANGE: Te, ERR_UNKNOWN_SIGNAL: mr }
} = ie, { normalizeEncoding: Oi } = te, { isAsyncFunction: xi, isArrayBufferView: Wi } = te.types, vr = {};
function Ci(e) {
  return e === (e | 0);
}
function Fi(e) {
  return e === e >>> 0;
}
const ji = /^[0-7]+$/, Ui = "must be a 32-bit unsigned integer or an octal string";
function Bi(e, t, r) {
  if (typeof e > "u" && (e = r), typeof e == "string") {
    if (bn(ji, e) === null)
      throw new Fe(t, e, Ui);
    e = Ni(e, 8);
  }
  return pn(e, t), e;
}
const Gi = ae((e, t, r = $i, i = Ii) => {
  if (typeof e != "number")
    throw new ee(t, "number", e);
  if (!rr(e))
    throw new Te(t, "an integer", e);
  if (e < r || e > i)
    throw new Te(t, `>= ${r} && <= ${i}`, e);
}), Vi = ae((e, t, r = -2147483648, i = 2147483647) => {
  if (typeof e != "number")
    throw new ee(t, "number", e);
  if (!rr(e))
    throw new Te(t, "an integer", e);
  if (e < r || e > i)
    throw new Te(t, `>= ${r} && <= ${i}`, e);
}), pn = ae((e, t, r = !1) => {
  if (typeof e != "number")
    throw new ee(t, "number", e);
  if (!rr(e))
    throw new Te(t, "an integer", e);
  const i = r ? 1 : 0, l = 4294967295;
  if (e < i || e > l)
    throw new Te(t, `>= ${i} && <= ${l}`, e);
});
function nr(e, t) {
  if (typeof e != "string")
    throw new ee(t, "string", e);
}
function Hi(e, t, r = void 0, i) {
  if (typeof e != "number")
    throw new ee(t, "number", e);
  if (r != null && e < r || i != null && e > i || (r != null || i != null) && Ti(e))
    throw new Te(
      t,
      `${r != null ? `>= ${r}` : ""}${r != null && i != null ? " && " : ""}${i != null ? `<= ${i}` : ""}`,
      e
    );
}
const qi = ae((e, t, r) => {
  if (!cn(r, e)) {
    const l = "must be one of: " + hn(
      vi(r, (s) => typeof s == "string" ? `'${s}'` : Mi(s)),
      ", "
    );
    throw new Fe(t, e, l);
  }
});
function _n(e, t) {
  if (typeof e != "boolean")
    throw new ee(t, "boolean", e);
}
function Tt(e, t, r) {
  return e == null || !Di(e, t) ? r : e[t];
}
const Yi = ae((e, t, r = null) => {
  const i = Tt(r, "allowArray", !1), l = Tt(r, "allowFunction", !1);
  if (!Tt(r, "nullable", !1) && e === null || !i && tr(e) || typeof e != "object" && (!l || typeof e != "function"))
    throw new ee(t, "Object", e);
}), Ki = ae((e, t) => {
  if (e != null && typeof e != "object" && typeof e != "function")
    throw new ee(t, "a dictionary", e);
}), st = ae((e, t, r = 0) => {
  if (!tr(e))
    throw new ee(t, "Array", e);
  if (e.length < r) {
    const i = `must be longer than ${r}`;
    throw new Fe(t, e, i);
  }
});
function zi(e, t) {
  st(e, t);
  for (let r = 0; r < e.length; r++)
    nr(e[r], `${t}[${r}]`);
}
function Ji(e, t) {
  st(e, t);
  for (let r = 0; r < e.length; r++)
    _n(e[r], `${t}[${r}]`);
}
function Xi(e, t) {
  st(e, t);
  for (let r = 0; r < e.length; r++) {
    const i = e[r], l = `${t}[${r}]`;
    if (i == null)
      throw new ee(l, "AbortSignal", i);
    yn(i, l);
  }
}
function Qi(e, t = "signal") {
  if (nr(e, t), vr[e] === void 0)
    throw vr[ki(e)] !== void 0 ? new mr(e + " (signals must use all capital letters)") : new mr(e);
}
const Zi = ae((e, t = "buffer") => {
  if (!Wi(e))
    throw new ee(t, ["Buffer", "TypedArray", "DataView"], e);
});
function eo(e, t) {
  const r = Oi(t), i = e.length;
  if (r === "hex" && i % 2 !== 0)
    throw new Fe("encoding", t, `is invalid for data of length ${i}`);
}
function to(e, t = "Port", r = !0) {
  if (typeof e != "number" && typeof e != "string" || typeof e == "string" && Pi(e).length === 0 || +e !== +e >>> 0 || e > 65535 || e === 0 && !r)
    throw new Li(t, e, r);
  return e | 0;
}
const yn = ae((e, t) => {
  if (e !== void 0 && (e === null || typeof e != "object" || !("aborted" in e)))
    throw new ee(t, "AbortSignal", e);
}), ro = ae((e, t) => {
  if (typeof e != "function")
    throw new ee(t, "Function", e);
}), no = ae((e, t) => {
  if (typeof e != "function" || xi(e))
    throw new ee(t, "Function", e);
}), io = ae((e, t) => {
  if (e !== void 0)
    throw new ee(t, "undefined", e);
});
function oo(e, t, r) {
  if (!cn(r, e))
    throw new ee(t, `('${hn(r, "|")}')`, e);
}
const lo = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
function Tr(e, t) {
  if (typeof e > "u" || !bn(lo, e))
    throw new Fe(
      t,
      e,
      'must be an array or string of format "</styles.css>; rel=preload; as=style"'
    );
}
function ao(e) {
  if (typeof e == "string")
    return Tr(e, "hints"), e;
  if (tr(e)) {
    const t = e.length;
    let r = "";
    if (t === 0)
      return r;
    for (let i = 0; i < t; i++) {
      const l = e[i];
      Tr(l, "hints"), r += l, i !== t - 1 && (r += ", ");
    }
    return r;
  }
  throw new Fe(
    "hints",
    e,
    'must be an array or string of format "</styles.css>; rel=preload; as=style"'
  );
}
var Ke = {
  isInt32: Ci,
  isUint32: Fi,
  parseFileMode: Bi,
  validateArray: st,
  validateStringArray: zi,
  validateBooleanArray: Ji,
  validateAbortSignalArray: Xi,
  validateBoolean: _n,
  validateBuffer: Zi,
  validateDictionary: Ki,
  validateEncoding: eo,
  validateFunction: ro,
  validateInt32: Vi,
  validateInteger: Gi,
  validateNumber: Hi,
  validateObject: Yi,
  validateOneOf: qi,
  validatePlainFunction: no,
  validatePort: to,
  validateSignalName: Qi,
  validateString: nr,
  validateUint32: pn,
  validateUndefined: io,
  validateUnion: oo,
  validateAbortSignal: yn,
  validateLinkHeaderValue: ao
}, ir = { exports: {} };
const { SymbolAsyncIterator: Ir, SymbolIterator: $r, SymbolFor: Ne } = H, wn = Ne("nodejs.stream.destroyed"), gn = Ne("nodejs.stream.errored"), Gt = Ne("nodejs.stream.readable"), Vt = Ne("nodejs.stream.writable"), Sn = Ne("nodejs.stream.disturbed"), so = Ne("nodejs.webstream.isClosedPromise"), fo = Ne("nodejs.webstream.controllerErrorFunction");
function ft(e, t = !1) {
  var r;
  return !!(e && typeof e.pipe == "function" && typeof e.on == "function" && (!t || typeof e.pause == "function" && typeof e.resume == "function") && (!e._writableState || ((r = e._readableState) === null || r === void 0 ? void 0 : r.readable) !== !1) && // Duplex
  (!e._writableState || e._readableState));
}
function ut(e) {
  var t;
  return !!(e && typeof e.write == "function" && typeof e.on == "function" && (!e._readableState || ((t = e._writableState) === null || t === void 0 ? void 0 : t.writable) !== !1));
}
function uo(e) {
  return !!(e && typeof e.pipe == "function" && e._readableState && typeof e.on == "function" && typeof e.write == "function");
}
function de(e) {
  return e && (e._readableState || e._writableState || typeof e.write == "function" && typeof e.on == "function" || typeof e.pipe == "function" && typeof e.on == "function");
}
function En(e) {
  return !!(e && !de(e) && typeof e.pipeThrough == "function" && typeof e.getReader == "function" && typeof e.cancel == "function");
}
function Rn(e) {
  return !!(e && !de(e) && typeof e.getWriter == "function" && typeof e.abort == "function");
}
function An(e) {
  return !!(e && !de(e) && typeof e.readable == "object" && typeof e.writable == "object");
}
function co(e) {
  return En(e) || Rn(e) || An(e);
}
function ho(e, t) {
  return e == null ? !1 : t === !0 ? typeof e[Ir] == "function" : t === !1 ? typeof e[$r] == "function" : typeof e[Ir] == "function" || typeof e[$r] == "function";
}
function dt(e) {
  if (!de(e))
    return null;
  const t = e._writableState, r = e._readableState, i = t || r;
  return !!(e.destroyed || e[wn] || i != null && i.destroyed);
}
function mn(e) {
  if (!ut(e))
    return null;
  if (e.writableEnded === !0)
    return !0;
  const t = e._writableState;
  return t != null && t.errored ? !1 : typeof (t == null ? void 0 : t.ended) != "boolean" ? null : t.ended;
}
function bo(e, t) {
  if (!ut(e))
    return null;
  if (e.writableFinished === !0)
    return !0;
  const r = e._writableState;
  return r != null && r.errored ? !1 : typeof (r == null ? void 0 : r.finished) != "boolean" ? null : !!(r.finished || t === !1 && r.ended === !0 && r.length === 0);
}
function po(e) {
  if (!ft(e))
    return null;
  if (e.readableEnded === !0)
    return !0;
  const t = e._readableState;
  return !t || t.errored ? !1 : typeof (t == null ? void 0 : t.ended) != "boolean" ? null : t.ended;
}
function vn(e, t) {
  if (!ft(e))
    return null;
  const r = e._readableState;
  return r != null && r.errored ? !1 : typeof (r == null ? void 0 : r.endEmitted) != "boolean" ? null : !!(r.endEmitted || t === !1 && r.ended === !0 && r.length === 0);
}
function Tn(e) {
  return e && e[Gt] != null ? e[Gt] : typeof (e == null ? void 0 : e.readable) != "boolean" ? null : dt(e) ? !1 : ft(e) && e.readable && !vn(e);
}
function In(e) {
  return e && e[Vt] != null ? e[Vt] : typeof (e == null ? void 0 : e.writable) != "boolean" ? null : dt(e) ? !1 : ut(e) && e.writable && !mn(e);
}
function _o(e, t) {
  return de(e) ? dt(e) ? !0 : !((t == null ? void 0 : t.readable) !== !1 && Tn(e) || (t == null ? void 0 : t.writable) !== !1 && In(e)) : null;
}
function yo(e) {
  var t, r;
  return de(e) ? e.writableErrored ? e.writableErrored : (t = (r = e._writableState) === null || r === void 0 ? void 0 : r.errored) !== null && t !== void 0 ? t : null : null;
}
function wo(e) {
  var t, r;
  return de(e) ? e.readableErrored ? e.readableErrored : (t = (r = e._readableState) === null || r === void 0 ? void 0 : r.errored) !== null && t !== void 0 ? t : null : null;
}
function go(e) {
  if (!de(e))
    return null;
  if (typeof e.closed == "boolean")
    return e.closed;
  const t = e._writableState, r = e._readableState;
  return typeof (t == null ? void 0 : t.closed) == "boolean" || typeof (r == null ? void 0 : r.closed) == "boolean" ? (t == null ? void 0 : t.closed) || (r == null ? void 0 : r.closed) : typeof e._closed == "boolean" && $n(e) ? e._closed : null;
}
function $n(e) {
  return typeof e._closed == "boolean" && typeof e._defaultKeepAlive == "boolean" && typeof e._removedConnection == "boolean" && typeof e._removedContLen == "boolean";
}
function Nn(e) {
  return typeof e._sent100 == "boolean" && $n(e);
}
function So(e) {
  var t;
  return typeof e._consuming == "boolean" && typeof e._dumped == "boolean" && ((t = e.req) === null || t === void 0 ? void 0 : t.upgradeOrConnect) === void 0;
}
function Eo(e) {
  if (!de(e))
    return null;
  const t = e._writableState, r = e._readableState, i = t || r;
  return !i && Nn(e) || !!(i && i.autoDestroy && i.emitClose && i.closed === !1);
}
function Ro(e) {
  var t;
  return !!(e && ((t = e[Sn]) !== null && t !== void 0 ? t : e.readableDidRead || e.readableAborted));
}
function Ao(e) {
  var t, r, i, l, s, d, g, R, h, _;
  return !!(e && ((t = (r = (i = (l = (s = (d = e[gn]) !== null && d !== void 0 ? d : e.readableErrored) !== null && s !== void 0 ? s : e.writableErrored) !== null && l !== void 0 ? l : (g = e._readableState) === null || g === void 0 ? void 0 : g.errorEmitted) !== null && i !== void 0 ? i : (R = e._writableState) === null || R === void 0 ? void 0 : R.errorEmitted) !== null && r !== void 0 ? r : (h = e._readableState) === null || h === void 0 ? void 0 : h.errored) !== null && t !== void 0 ? t : !((_ = e._writableState) === null || _ === void 0) && _.errored));
}
var ye = {
  isDestroyed: dt,
  kIsDestroyed: wn,
  isDisturbed: Ro,
  kIsDisturbed: Sn,
  isErrored: Ao,
  kIsErrored: gn,
  isReadable: Tn,
  kIsReadable: Gt,
  kIsClosedPromise: so,
  kControllerErrorFunction: fo,
  kIsWritable: Vt,
  isClosed: go,
  isDuplexNodeStream: uo,
  isFinished: _o,
  isIterable: ho,
  isReadableNodeStream: ft,
  isReadableStream: En,
  isReadableEnded: po,
  isReadableFinished: vn,
  isReadableErrored: wo,
  isNodeStream: de,
  isWebStream: co,
  isWritable: In,
  isWritableNodeStream: ut,
  isWritableStream: Rn,
  isWritableEnded: mn,
  isWritableFinished: bo,
  isWritableErrored: yo,
  isServerRequest: So,
  isServerResponse: Nn,
  willEmitClose: Eo,
  isTransformStream: An
};
const ge = $e, { AbortError: Dn, codes: mo } = ie, { ERR_INVALID_ARG_TYPE: vo, ERR_STREAM_PREMATURE_CLOSE: Nr } = mo, { kEmptyObject: Ht, once: qt } = te, { validateAbortSignal: To, validateFunction: Io, validateObject: $o, validateBoolean: No } = Ke, { Promise: Do, PromisePrototypeThen: Mo, SymbolDispose: Mn } = H, {
  isClosed: ko,
  isReadable: Dr,
  isReadableNodeStream: It,
  isReadableStream: Po,
  isReadableFinished: Mr,
  isReadableErrored: kr,
  isWritable: Pr,
  isWritableNodeStream: Lr,
  isWritableStream: Lo,
  isWritableFinished: Or,
  isWritableErrored: xr,
  isNodeStream: Oo,
  willEmitClose: xo,
  kIsClosedPromise: Wo
} = ye;
let We;
function Co(e) {
  return e.setHeader && typeof e.abort == "function";
}
const Yt = () => {
};
function kn(e, t, r) {
  var i, l;
  if (arguments.length === 2 ? (r = t, t = Ht) : t == null ? t = Ht : $o(t, "options"), Io(r, "callback"), To(t.signal, "options.signal"), r = qt(r), Po(e) || Lo(e))
    return Fo(e, t, r);
  if (!Oo(e))
    throw new vo("stream", ["ReadableStream", "WritableStream", "Stream"], e);
  const s = (i = t.readable) !== null && i !== void 0 ? i : It(e), d = (l = t.writable) !== null && l !== void 0 ? l : Lr(e), g = e._writableState, R = e._readableState, h = () => {
    e.writable || c();
  };
  let _ = xo(e) && It(e) === s && Lr(e) === d, v = Or(e, !1);
  const c = () => {
    v = !0, e.destroyed && (_ = !1), !(_ && (!e.readable || s)) && (!s || u) && r.call(e);
  };
  let u = Mr(e, !1);
  const m = () => {
    u = !0, e.destroyed && (_ = !1), !(_ && (!e.writable || d)) && (!d || v) && r.call(e);
  }, b = (P) => {
    r.call(e, P);
  };
  let A = ko(e);
  const k = () => {
    A = !0;
    const P = xr(e) || kr(e);
    if (P && typeof P != "boolean")
      return r.call(e, P);
    if (s && !u && It(e, !0) && !Mr(e, !1))
      return r.call(e, new Nr());
    if (d && !v && !Or(e, !1))
      return r.call(e, new Nr());
    r.call(e);
  }, M = () => {
    A = !0;
    const P = xr(e) || kr(e);
    if (P && typeof P != "boolean")
      return r.call(e, P);
    r.call(e);
  }, y = () => {
    e.req.on("finish", c);
  };
  Co(e) ? (e.on("complete", c), _ || e.on("abort", k), e.req ? y() : e.on("request", y)) : d && !g && (e.on("end", h), e.on("close", h)), !_ && typeof e.aborted == "boolean" && e.on("aborted", k), e.on("end", m), e.on("finish", c), t.error !== !1 && e.on("error", b), e.on("close", k), A ? ge.nextTick(k) : g != null && g.errorEmitted || R != null && R.errorEmitted ? _ || ge.nextTick(M) : (!s && (!_ || Dr(e)) && (v || Pr(e) === !1) || !d && (!_ || Pr(e)) && (u || Dr(e) === !1) || R && e.req && e.aborted) && ge.nextTick(M);
  const j = () => {
    r = Yt, e.removeListener("aborted", k), e.removeListener("complete", c), e.removeListener("abort", k), e.removeListener("request", y), e.req && e.req.removeListener("finish", c), e.removeListener("end", h), e.removeListener("close", h), e.removeListener("finish", c), e.removeListener("end", m), e.removeListener("error", b), e.removeListener("close", k);
  };
  if (t.signal && !A) {
    const P = () => {
      const J = r;
      j(), J.call(
        e,
        new Dn(void 0, {
          cause: t.signal.reason
        })
      );
    };
    if (t.signal.aborted)
      ge.nextTick(P);
    else {
      We = We || te.addAbortListener;
      const J = We(t.signal, P), oe = r;
      r = qt((...B) => {
        J[Mn](), oe.apply(e, B);
      });
    }
  }
  return j;
}
function Fo(e, t, r) {
  let i = !1, l = Yt;
  if (t.signal)
    if (l = () => {
      i = !0, r.call(
        e,
        new Dn(void 0, {
          cause: t.signal.reason
        })
      );
    }, t.signal.aborted)
      ge.nextTick(l);
    else {
      We = We || te.addAbortListener;
      const d = We(t.signal, l), g = r;
      r = qt((...R) => {
        d[Mn](), g.apply(e, R);
      });
    }
  const s = (...d) => {
    i || ge.nextTick(() => r.apply(e, d));
  };
  return Mo(e[Wo].promise, s, s), Yt;
}
function jo(e, t) {
  var r;
  let i = !1;
  return t === null && (t = Ht), (r = t) !== null && r !== void 0 && r.cleanup && (No(t.cleanup, "cleanup"), i = t.cleanup), new Do((l, s) => {
    const d = kn(e, t, (g) => {
      i && d(), g ? s(g) : l();
    });
  });
}
ir.exports = kn;
ir.exports.finished = jo;
var Se = ir.exports;
const fe = $e, {
  aggregateTwoErrors: Uo,
  codes: { ERR_MULTIPLE_CALLBACK: Bo },
  AbortError: Go
} = ie, { Symbol: Pn } = H, { kIsDestroyed: Vo, isDestroyed: Ho, isFinished: qo, isServerRequest: Yo } = ye, Ln = Pn("kDestroy"), Kt = Pn("kConstruct");
function On(e, t, r) {
  e && (e.stack, t && !t.errored && (t.errored = e), r && !r.errored && (r.errored = e));
}
function Ko(e, t) {
  const r = this._readableState, i = this._writableState, l = i || r;
  return i != null && i.destroyed || r != null && r.destroyed ? (typeof t == "function" && t(), this) : (On(e, i, r), i && (i.destroyed = !0), r && (r.destroyed = !0), l.constructed ? Wr(this, e, t) : this.once(Ln, function(s) {
    Wr(this, Uo(s, e), t);
  }), this);
}
function Wr(e, t, r) {
  let i = !1;
  function l(s) {
    if (i)
      return;
    i = !0;
    const d = e._readableState, g = e._writableState;
    On(s, g, d), g && (g.closed = !0), d && (d.closed = !0), typeof r == "function" && r(s), s ? fe.nextTick(zo, e, s) : fe.nextTick(xn, e);
  }
  try {
    e._destroy(t || null, l);
  } catch (s) {
    l(s);
  }
}
function zo(e, t) {
  zt(e, t), xn(e);
}
function xn(e) {
  const t = e._readableState, r = e._writableState;
  r && (r.closeEmitted = !0), t && (t.closeEmitted = !0), (r != null && r.emitClose || t != null && t.emitClose) && e.emit("close");
}
function zt(e, t) {
  const r = e._readableState, i = e._writableState;
  i != null && i.errorEmitted || r != null && r.errorEmitted || (i && (i.errorEmitted = !0), r && (r.errorEmitted = !0), e.emit("error", t));
}
function Jo() {
  const e = this._readableState, t = this._writableState;
  e && (e.constructed = !0, e.closed = !1, e.closeEmitted = !1, e.destroyed = !1, e.errored = null, e.errorEmitted = !1, e.reading = !1, e.ended = e.readable === !1, e.endEmitted = e.readable === !1), t && (t.constructed = !0, t.destroyed = !1, t.closed = !1, t.closeEmitted = !1, t.errored = null, t.errorEmitted = !1, t.finalCalled = !1, t.prefinished = !1, t.ended = t.writable === !1, t.ending = t.writable === !1, t.finished = t.writable === !1);
}
function Jt(e, t, r) {
  const i = e._readableState, l = e._writableState;
  if (l != null && l.destroyed || i != null && i.destroyed)
    return this;
  i != null && i.autoDestroy || l != null && l.autoDestroy ? e.destroy(t) : t && (t.stack, l && !l.errored && (l.errored = t), i && !i.errored && (i.errored = t), r ? fe.nextTick(zt, e, t) : zt(e, t));
}
function Xo(e, t) {
  if (typeof e._construct != "function")
    return;
  const r = e._readableState, i = e._writableState;
  r && (r.constructed = !1), i && (i.constructed = !1), e.once(Kt, t), !(e.listenerCount(Kt) > 1) && fe.nextTick(Qo, e);
}
function Qo(e) {
  let t = !1;
  function r(i) {
    if (t) {
      Jt(e, i ?? new Bo());
      return;
    }
    t = !0;
    const l = e._readableState, s = e._writableState, d = s || l;
    l && (l.constructed = !0), s && (s.constructed = !0), d.destroyed ? e.emit(Ln, i) : i ? Jt(e, i, !0) : fe.nextTick(Zo, e);
  }
  try {
    e._construct((i) => {
      fe.nextTick(r, i);
    });
  } catch (i) {
    fe.nextTick(r, i);
  }
}
function Zo(e) {
  e.emit(Kt);
}
function Cr(e) {
  return (e == null ? void 0 : e.setHeader) && typeof e.abort == "function";
}
function Wn(e) {
  e.emit("close");
}
function el(e, t) {
  e.emit("error", t), fe.nextTick(Wn, e);
}
function tl(e, t) {
  !e || Ho(e) || (!t && !qo(e) && (t = new Go()), Yo(e) ? (e.socket = null, e.destroy(t)) : Cr(e) ? e.abort() : Cr(e.req) ? e.req.abort() : typeof e.destroy == "function" ? e.destroy(t) : typeof e.close == "function" ? e.close() : t ? fe.nextTick(el, e, t) : fe.nextTick(Wn, e), e.destroyed || (e[Vo] = !0));
}
var je = {
  construct: Xo,
  destroyer: tl,
  destroy: Ko,
  undestroy: Jo,
  errorOrDestroy: Jt
};
const { ArrayIsArray: rl, ObjectSetPrototypeOf: Cn } = H, { EventEmitter: ct } = lt;
function ht(e) {
  ct.call(this, e);
}
Cn(ht.prototype, ct.prototype);
Cn(ht, ct);
ht.prototype.pipe = function(e, t) {
  const r = this;
  function i(_) {
    e.writable && e.write(_) === !1 && r.pause && r.pause();
  }
  r.on("data", i);
  function l() {
    r.readable && r.resume && r.resume();
  }
  e.on("drain", l), !e._isStdio && (!t || t.end !== !1) && (r.on("end", d), r.on("close", g));
  let s = !1;
  function d() {
    s || (s = !0, e.end());
  }
  function g() {
    s || (s = !0, typeof e.destroy == "function" && e.destroy());
  }
  function R(_) {
    h(), ct.listenerCount(this, "error") === 0 && this.emit("error", _);
  }
  Xt(r, "error", R), Xt(e, "error", R);
  function h() {
    r.removeListener("data", i), e.removeListener("drain", l), r.removeListener("end", d), r.removeListener("close", g), r.removeListener("error", R), e.removeListener("error", R), r.removeListener("end", h), r.removeListener("close", h), e.removeListener("close", h);
  }
  return r.on("end", h), r.on("close", h), e.on("close", h), e.emit("pipe", r), e;
};
function Xt(e, t, r) {
  if (typeof e.prependListener == "function")
    return e.prependListener(t, r);
  !e._events || !e._events[t] ? e.on(t, r) : rl(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]];
}
var or = {
  Stream: ht,
  prependListener: Xt
}, Fn = { exports: {} };
(function(e) {
  const { SymbolDispose: t } = H, { AbortError: r, codes: i } = ie, { isNodeStream: l, isWebStream: s, kControllerErrorFunction: d } = ye, g = Se, { ERR_INVALID_ARG_TYPE: R } = i;
  let h;
  const _ = (v, c) => {
    if (typeof v != "object" || !("aborted" in v))
      throw new R(c, "AbortSignal", v);
  };
  e.exports.addAbortSignal = function(c, u) {
    if (_(c, "signal"), !l(u) && !s(u))
      throw new R("stream", ["ReadableStream", "WritableStream", "Stream"], u);
    return e.exports.addAbortSignalNoValidate(c, u);
  }, e.exports.addAbortSignalNoValidate = function(v, c) {
    if (typeof v != "object" || !("aborted" in v))
      return c;
    const u = l(c) ? () => {
      c.destroy(
        new r(void 0, {
          cause: v.reason
        })
      );
    } : () => {
      c[d](
        new r(void 0, {
          cause: v.reason
        })
      );
    };
    if (v.aborted)
      u();
    else {
      h = h || te.addAbortListener;
      const m = h(v, u);
      g(c, m[t]);
    }
    return c;
  };
})(Fn);
var bt = Fn.exports;
const { StringPrototypeSlice: Fr, SymbolIterator: nl, TypedArrayPrototypeSet: Qe, Uint8Array: il } = H, { Buffer: $t } = Ie, { inspect: ol } = te;
var ll = class {
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
    let r = this.head, i = "" + r.data;
    for (; (r = r.next) !== null; )
      i += t + r.data;
    return i;
  }
  concat(t) {
    if (this.length === 0)
      return $t.alloc(0);
    const r = $t.allocUnsafe(t >>> 0);
    let i = this.head, l = 0;
    for (; i; )
      Qe(r, i.data, l), l += i.data.length, i = i.next;
    return r;
  }
  // Consumes a specified amount of bytes or characters from the buffered data.
  consume(t, r) {
    const i = this.head.data;
    if (t < i.length) {
      const l = i.slice(0, t);
      return this.head.data = i.slice(t), l;
    }
    return t === i.length ? this.shift() : r ? this._getString(t) : this._getBuffer(t);
  }
  first() {
    return this.head.data;
  }
  *[nl]() {
    for (let t = this.head; t; t = t.next)
      yield t.data;
  }
  // Consumes a specified amount of characters from the buffered data.
  _getString(t) {
    let r = "", i = this.head, l = 0;
    do {
      const s = i.data;
      if (t > s.length)
        r += s, t -= s.length;
      else {
        t === s.length ? (r += s, ++l, i.next ? this.head = i.next : this.head = this.tail = null) : (r += Fr(s, 0, t), this.head = i, i.data = Fr(s, t));
        break;
      }
      ++l;
    } while ((i = i.next) !== null);
    return this.length -= l, r;
  }
  // Consumes a specified amount of bytes from the buffered data.
  _getBuffer(t) {
    const r = $t.allocUnsafe(t), i = t;
    let l = this.head, s = 0;
    do {
      const d = l.data;
      if (t > d.length)
        Qe(r, d, i - t), t -= d.length;
      else {
        t === d.length ? (Qe(r, d, i - t), ++s, l.next ? this.head = l.next : this.head = this.tail = null) : (Qe(r, new il(d.buffer, d.byteOffset, t), i - t), this.head = l, l.data = d.slice(t));
        break;
      }
      ++s;
    } while ((l = l.next) !== null);
    return this.length -= s, r;
  }
  // Make sure the linked list only shows the minimal necessary information.
  [Symbol.for("nodejs.util.inspect.custom")](t, r) {
    return ol(this, {
      ...r,
      // Only inspect one level.
      depth: 0,
      // It should not recurse.
      customInspect: !1
    });
  }
};
const { MathFloor: al, NumberIsInteger: sl } = H, { validateInteger: fl } = Ke, { ERR_INVALID_ARG_VALUE: ul } = ie.codes;
let jn = 16 * 1024, Un = 16;
function dl(e, t, r) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
}
function Bn(e) {
  return e ? Un : jn;
}
function cl(e, t) {
  fl(t, "value", 0), e ? Un = t : jn = t;
}
function hl(e, t, r, i) {
  const l = dl(t, i, r);
  if (l != null) {
    if (!sl(l) || l < 0) {
      const s = i ? `options.${r}` : "options.highWaterMark";
      throw new ul(s, l);
    }
    return al(l);
  }
  return Bn(e.objectMode);
}
var pt = {
  getHighWaterMark: hl,
  getDefaultHighWaterMark: Bn,
  setDefaultHighWaterMark: cl
};
const jr = $e, { PromisePrototypeThen: bl, SymbolAsyncIterator: Ur, SymbolIterator: Br } = H, { Buffer: pl } = Ie, { ERR_INVALID_ARG_TYPE: _l, ERR_STREAM_NULL_VALUES: yl } = ie.codes;
function wl(e, t, r) {
  let i;
  if (typeof t == "string" || t instanceof pl)
    return new e({
      objectMode: !0,
      ...r,
      read() {
        this.push(t), this.push(null);
      }
    });
  let l;
  if (t && t[Ur])
    l = !0, i = t[Ur]();
  else if (t && t[Br])
    l = !1, i = t[Br]();
  else
    throw new _l("iterable", ["Iterable"], t);
  const s = new e({
    objectMode: !0,
    highWaterMark: 1,
    // TODO(ronag): What options should be allowed?
    ...r
  });
  let d = !1;
  s._read = function() {
    d || (d = !0, R());
  }, s._destroy = function(h, _) {
    bl(
      g(h),
      () => jr.nextTick(_, h),
      // nextTick is here in case cb throws
      (v) => jr.nextTick(_, v || h)
    );
  };
  async function g(h) {
    const _ = h != null, v = typeof i.throw == "function";
    if (_ && v) {
      const { value: c, done: u } = await i.throw(h);
      if (await c, u)
        return;
    }
    if (typeof i.return == "function") {
      const { value: c } = await i.return();
      await c;
    }
  }
  async function R() {
    for (; ; ) {
      try {
        const { value: h, done: _ } = l ? await i.next() : i.next();
        if (_)
          s.push(null);
        else {
          const v = h && typeof h.then == "function" ? await h : h;
          if (v === null)
            throw d = !1, new yl();
          if (s.push(v))
            continue;
          d = !1;
        }
      } catch (h) {
        s.destroy(h);
      }
      break;
    }
  }
  return s;
}
var Gn = wl, Nt, Gr;
function _t() {
  if (Gr)
    return Nt;
  Gr = 1;
  const e = $e, {
    ArrayPrototypeIndexOf: t,
    NumberIsInteger: r,
    NumberIsNaN: i,
    NumberParseInt: l,
    ObjectDefineProperties: s,
    ObjectKeys: d,
    ObjectSetPrototypeOf: g,
    Promise: R,
    SafeSet: h,
    SymbolAsyncDispose: _,
    SymbolAsyncIterator: v,
    Symbol: c
  } = H;
  Nt = D, D.ReadableState = he;
  const { EventEmitter: u } = lt, { Stream: m, prependListener: b } = or, { Buffer: A } = Ie, { addAbortSignal: k } = bt, M = Se;
  let y = te.debuglog("stream", (n) => {
    y = n;
  });
  const j = ll, P = je, { getHighWaterMark: J, getDefaultHighWaterMark: oe } = pt, {
    aggregateTwoErrors: B,
    codes: {
      ERR_INVALID_ARG_TYPE: q,
      ERR_METHOD_NOT_IMPLEMENTED: re,
      ERR_OUT_OF_RANGE: ne,
      ERR_STREAM_PUSH_AFTER_EOF: x,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT: w
    },
    AbortError: W
  } = ie, { validateObject: L } = Ke, O = c("kPaused"), { StringDecoder: Y } = hi(), K = Gn;
  g(D.prototype, m.prototype), g(D, m);
  const V = () => {
  }, { errorOrDestroy: z } = P, C = 1, ce = 2, N = 4, X = 8, se = 16, ke = 32, Pe = 64, Le = 128, Ue = 256, wt = 512, Be = 1024, Oe = 2048, a = 4096, f = 8192, p = 16384, I = 32768, $ = 65536, U = 1 << 17, G = 1 << 18;
  function F(n) {
    return {
      enumerable: !1,
      get() {
        return (this.state & n) !== 0;
      },
      set(o) {
        o ? this.state |= n : this.state &= ~n;
      }
    };
  }
  s(he.prototype, {
    objectMode: F(C),
    ended: F(ce),
    endEmitted: F(N),
    reading: F(X),
    // Stream is still being constructed and cannot be
    // destroyed until construction finished or failed.
    // Async construction is opt in, therefore we start as
    // constructed.
    constructed: F(se),
    // A flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    sync: F(ke),
    // Whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    needReadable: F(Pe),
    emittedReadable: F(Le),
    readableListening: F(Ue),
    resumeScheduled: F(wt),
    // True if the error was already emitted and should not be thrown again.
    errorEmitted: F(Be),
    emitClose: F(Oe),
    autoDestroy: F(a),
    // Has it been destroyed.
    destroyed: F(f),
    // Indicates whether the stream has finished destroying.
    closed: F(p),
    // True if close has been emitted or would have been emitted
    // depending on emitClose.
    closeEmitted: F(I),
    multiAwaitDrain: F($),
    // If true, a maybeReadMore has been scheduled.
    readingMore: F(U),
    dataEmitted: F(G)
  });
  function he(n, o, S) {
    typeof S != "boolean" && (S = o instanceof pe()), this.state = Oe | a | se | ke, n && n.objectMode && (this.state |= C), S && n && n.readableObjectMode && (this.state |= C), this.highWaterMark = n ? J(this, n, "readableHighWaterMark", S) : oe(!1), this.buffer = new j(), this.length = 0, this.pipes = [], this.flowing = null, this[O] = null, n && n.emitClose === !1 && (this.state &= ~Oe), n && n.autoDestroy === !1 && (this.state &= ~a), this.errored = null, this.defaultEncoding = n && n.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.decoder = null, this.encoding = null, n && n.encoding && (this.decoder = new Y(n.encoding), this.encoding = n.encoding);
  }
  function D(n) {
    if (!(this instanceof D))
      return new D(n);
    const o = this instanceof pe();
    this._readableState = new he(n, this, o), n && (typeof n.read == "function" && (this._read = n.read), typeof n.destroy == "function" && (this._destroy = n.destroy), typeof n.construct == "function" && (this._construct = n.construct), n.signal && !o && k(n.signal, this)), m.call(this, n), P.construct(this, () => {
      this._readableState.needReadable && Xe(this, this._readableState);
    });
  }
  D.prototype.destroy = P.destroy, D.prototype._undestroy = P.undestroy, D.prototype._destroy = function(n, o) {
    o(n);
  }, D.prototype[u.captureRejectionSymbol] = function(n) {
    this.destroy(n);
  }, D.prototype[_] = function() {
    let n;
    return this.destroyed || (n = this.readableEnded ? null : new W(), this.destroy(n)), new R((o, S) => M(this, (E) => E && E !== n ? S(E) : o(null)));
  }, D.prototype.push = function(n, o) {
    return we(this, n, o, !1);
  }, D.prototype.unshift = function(n, o) {
    return we(this, n, o, !0);
  };
  function we(n, o, S, E) {
    y("readableAddChunk", o);
    const T = n._readableState;
    let Z;
    if (T.state & C || (typeof o == "string" ? (S = S || T.defaultEncoding, T.encoding !== S && (E && T.encoding ? o = A.from(o, S).toString(T.encoding) : (o = A.from(o, S), S = ""))) : o instanceof A ? S = "" : m._isUint8Array(o) ? (o = m._uint8ArrayToBuffer(o), S = "") : o != null && (Z = new q("chunk", ["string", "Buffer", "Uint8Array"], o))), Z)
      z(n, Z);
    else if (o === null)
      T.state &= ~X, ni(n, T);
    else if (T.state & C || o && o.length > 0)
      if (E)
        if (T.state & N)
          z(n, new w());
        else {
          if (T.destroyed || T.errored)
            return !1;
          gt(n, T, o, !0);
        }
      else if (T.ended)
        z(n, new x());
      else {
        if (T.destroyed || T.errored)
          return !1;
        T.state &= ~X, T.decoder && !S ? (o = T.decoder.write(o), T.objectMode || o.length !== 0 ? gt(n, T, o, !1) : Xe(n, T)) : gt(n, T, o, !1);
      }
    else
      E || (T.state &= ~X, Xe(n, T));
    return !T.ended && (T.length < T.highWaterMark || T.length === 0);
  }
  function gt(n, o, S, E) {
    o.flowing && o.length === 0 && !o.sync && n.listenerCount("data") > 0 ? (o.state & $ ? o.awaitDrainWriters.clear() : o.awaitDrainWriters = null, o.dataEmitted = !0, n.emit("data", S)) : (o.length += o.objectMode ? 1 : S.length, E ? o.buffer.unshift(S) : o.buffer.push(S), o.state & Pe && Je(n)), Xe(n, o);
  }
  D.prototype.isPaused = function() {
    const n = this._readableState;
    return n[O] === !0 || n.flowing === !1;
  }, D.prototype.setEncoding = function(n) {
    const o = new Y(n);
    this._readableState.decoder = o, this._readableState.encoding = this._readableState.decoder.encoding;
    const S = this._readableState.buffer;
    let E = "";
    for (const T of S)
      E += o.write(T);
    return S.clear(), E !== "" && S.push(E), this._readableState.length = E.length, this;
  };
  const ti = 1073741824;
  function ri(n) {
    if (n > ti)
      throw new ne("size", "<= 1GiB", n);
    return n--, n |= n >>> 1, n |= n >>> 2, n |= n >>> 4, n |= n >>> 8, n |= n >>> 16, n++, n;
  }
  function dr(n, o) {
    return n <= 0 || o.length === 0 && o.ended ? 0 : o.state & C ? 1 : i(n) ? o.flowing && o.length ? o.buffer.first().length : o.length : n <= o.length ? n : o.ended ? o.length : 0;
  }
  D.prototype.read = function(n) {
    y("read", n), n === void 0 ? n = NaN : r(n) || (n = l(n, 10));
    const o = this._readableState, S = n;
    if (n > o.highWaterMark && (o.highWaterMark = ri(n)), n !== 0 && (o.state &= ~Le), n === 0 && o.needReadable && ((o.highWaterMark !== 0 ? o.length >= o.highWaterMark : o.length > 0) || o.ended))
      return y("read: emitReadable", o.length, o.ended), o.length === 0 && o.ended ? St(this) : Je(this), null;
    if (n = dr(n, o), n === 0 && o.ended)
      return o.length === 0 && St(this), null;
    let E = (o.state & Pe) !== 0;
    if (y("need readable", E), (o.length === 0 || o.length - n < o.highWaterMark) && (E = !0, y("length less than watermark", E)), o.ended || o.reading || o.destroyed || o.errored || !o.constructed)
      E = !1, y("reading, ended or constructing", E);
    else if (E) {
      y("do read"), o.state |= X | ke, o.length === 0 && (o.state |= Pe);
      try {
        this._read(o.highWaterMark);
      } catch (Z) {
        z(this, Z);
      }
      o.state &= ~ke, o.reading || (n = dr(S, o));
    }
    let T;
    return n > 0 ? T = _r(n, o) : T = null, T === null ? (o.needReadable = o.length <= o.highWaterMark, n = 0) : (o.length -= n, o.multiAwaitDrain ? o.awaitDrainWriters.clear() : o.awaitDrainWriters = null), o.length === 0 && (o.ended || (o.needReadable = !0), S !== n && o.ended && St(this)), T !== null && !o.errorEmitted && !o.closeEmitted && (o.dataEmitted = !0, this.emit("data", T)), T;
  };
  function ni(n, o) {
    if (y("onEofChunk"), !o.ended) {
      if (o.decoder) {
        const S = o.decoder.end();
        S && S.length && (o.buffer.push(S), o.length += o.objectMode ? 1 : S.length);
      }
      o.ended = !0, o.sync ? Je(n) : (o.needReadable = !1, o.emittedReadable = !0, cr(n));
    }
  }
  function Je(n) {
    const o = n._readableState;
    y("emitReadable", o.needReadable, o.emittedReadable), o.needReadable = !1, o.emittedReadable || (y("emitReadable", o.flowing), o.emittedReadable = !0, e.nextTick(cr, n));
  }
  function cr(n) {
    const o = n._readableState;
    y("emitReadable_", o.destroyed, o.length, o.ended), !o.destroyed && !o.errored && (o.length || o.ended) && (n.emit("readable"), o.emittedReadable = !1), o.needReadable = !o.flowing && !o.ended && o.length <= o.highWaterMark, br(n);
  }
  function Xe(n, o) {
    !o.readingMore && o.constructed && (o.readingMore = !0, e.nextTick(ii, n, o));
  }
  function ii(n, o) {
    for (; !o.reading && !o.ended && (o.length < o.highWaterMark || o.flowing && o.length === 0); ) {
      const S = o.length;
      if (y("maybeReadMore read 0"), n.read(0), S === o.length)
        break;
    }
    o.readingMore = !1;
  }
  D.prototype._read = function(n) {
    throw new re("_read()");
  }, D.prototype.pipe = function(n, o) {
    const S = this, E = this._readableState;
    E.pipes.length === 1 && (E.multiAwaitDrain || (E.multiAwaitDrain = !0, E.awaitDrainWriters = new h(E.awaitDrainWriters ? [E.awaitDrainWriters] : []))), E.pipes.push(n), y("pipe count=%d opts=%j", E.pipes.length, o);
    const Z = (!o || o.end !== !1) && n !== e.stdout && n !== e.stderr ? wr : Ge;
    E.endEmitted ? e.nextTick(Z) : S.once("end", Z), n.on("unpipe", le);
    function le(Re, be) {
      y("onunpipe"), Re === S && be && be.hasUnpiped === !1 && (be.hasUnpiped = !0, ci());
    }
    function wr() {
      y("onend"), n.end();
    }
    let Ee, gr = !1;
    function ci() {
      y("cleanup"), n.removeListener("close", At), n.removeListener("finish", mt), Ee && n.removeListener("drain", Ee), n.removeListener("error", Rt), n.removeListener("unpipe", le), S.removeListener("end", wr), S.removeListener("end", Ge), S.removeListener("data", Er), gr = !0, Ee && E.awaitDrainWriters && (!n._writableState || n._writableState.needDrain) && Ee();
    }
    function Sr() {
      gr || (E.pipes.length === 1 && E.pipes[0] === n ? (y("false write response, pause", 0), E.awaitDrainWriters = n, E.multiAwaitDrain = !1) : E.pipes.length > 1 && E.pipes.includes(n) && (y("false write response, pause", E.awaitDrainWriters.size), E.awaitDrainWriters.add(n)), S.pause()), Ee || (Ee = oi(S, n), n.on("drain", Ee));
    }
    S.on("data", Er);
    function Er(Re) {
      y("ondata");
      const be = n.write(Re);
      y("dest.write", be), be === !1 && Sr();
    }
    function Rt(Re) {
      if (y("onerror", Re), Ge(), n.removeListener("error", Rt), n.listenerCount("error") === 0) {
        const be = n._writableState || n._readableState;
        be && !be.errorEmitted ? z(n, Re) : n.emit("error", Re);
      }
    }
    b(n, "error", Rt);
    function At() {
      n.removeListener("finish", mt), Ge();
    }
    n.once("close", At);
    function mt() {
      y("onfinish"), n.removeListener("close", At), Ge();
    }
    n.once("finish", mt);
    function Ge() {
      y("unpipe"), S.unpipe(n);
    }
    return n.emit("pipe", S), n.writableNeedDrain === !0 ? Sr() : E.flowing || (y("pipe resume"), S.resume()), n;
  };
  function oi(n, o) {
    return function() {
      const E = n._readableState;
      E.awaitDrainWriters === o ? (y("pipeOnDrain", 1), E.awaitDrainWriters = null) : E.multiAwaitDrain && (y("pipeOnDrain", E.awaitDrainWriters.size), E.awaitDrainWriters.delete(o)), (!E.awaitDrainWriters || E.awaitDrainWriters.size === 0) && n.listenerCount("data") && n.resume();
    };
  }
  D.prototype.unpipe = function(n) {
    const o = this._readableState, S = {
      hasUnpiped: !1
    };
    if (o.pipes.length === 0)
      return this;
    if (!n) {
      const T = o.pipes;
      o.pipes = [], this.pause();
      for (let Z = 0; Z < T.length; Z++)
        T[Z].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    const E = t(o.pipes, n);
    return E === -1 ? this : (o.pipes.splice(E, 1), o.pipes.length === 0 && this.pause(), n.emit("unpipe", this, S), this);
  }, D.prototype.on = function(n, o) {
    const S = m.prototype.on.call(this, n, o), E = this._readableState;
    return n === "data" ? (E.readableListening = this.listenerCount("readable") > 0, E.flowing !== !1 && this.resume()) : n === "readable" && !E.endEmitted && !E.readableListening && (E.readableListening = E.needReadable = !0, E.flowing = !1, E.emittedReadable = !1, y("on readable", E.length, E.reading), E.length ? Je(this) : E.reading || e.nextTick(li, this)), S;
  }, D.prototype.addListener = D.prototype.on, D.prototype.removeListener = function(n, o) {
    const S = m.prototype.removeListener.call(this, n, o);
    return n === "readable" && e.nextTick(hr, this), S;
  }, D.prototype.off = D.prototype.removeListener, D.prototype.removeAllListeners = function(n) {
    const o = m.prototype.removeAllListeners.apply(this, arguments);
    return (n === "readable" || n === void 0) && e.nextTick(hr, this), o;
  };
  function hr(n) {
    const o = n._readableState;
    o.readableListening = n.listenerCount("readable") > 0, o.resumeScheduled && o[O] === !1 ? o.flowing = !0 : n.listenerCount("data") > 0 ? n.resume() : o.readableListening || (o.flowing = null);
  }
  function li(n) {
    y("readable nexttick read 0"), n.read(0);
  }
  D.prototype.resume = function() {
    const n = this._readableState;
    return n.flowing || (y("resume"), n.flowing = !n.readableListening, ai(this, n)), n[O] = !1, this;
  };
  function ai(n, o) {
    o.resumeScheduled || (o.resumeScheduled = !0, e.nextTick(si, n, o));
  }
  function si(n, o) {
    y("resume", o.reading), o.reading || n.read(0), o.resumeScheduled = !1, n.emit("resume"), br(n), o.flowing && !o.reading && n.read(0);
  }
  D.prototype.pause = function() {
    return y("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (y("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[O] = !0, this;
  };
  function br(n) {
    const o = n._readableState;
    for (y("flow", o.flowing); o.flowing && n.read() !== null; )
      ;
  }
  D.prototype.wrap = function(n) {
    let o = !1;
    n.on("data", (E) => {
      !this.push(E) && n.pause && (o = !0, n.pause());
    }), n.on("end", () => {
      this.push(null);
    }), n.on("error", (E) => {
      z(this, E);
    }), n.on("close", () => {
      this.destroy();
    }), n.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      o && n.resume && (o = !1, n.resume());
    };
    const S = d(n);
    for (let E = 1; E < S.length; E++) {
      const T = S[E];
      this[T] === void 0 && typeof n[T] == "function" && (this[T] = n[T].bind(n));
    }
    return this;
  }, D.prototype[v] = function() {
    return pr(this);
  }, D.prototype.iterator = function(n) {
    return n !== void 0 && L(n, "options"), pr(this, n);
  };
  function pr(n, o) {
    typeof n.read != "function" && (n = D.wrap(n, {
      objectMode: !0
    }));
    const S = fi(n, o);
    return S.stream = n, S;
  }
  async function* fi(n, o) {
    let S = V;
    function E(le) {
      this === n ? (S(), S = V) : S = le;
    }
    n.on("readable", E);
    let T;
    const Z = M(
      n,
      {
        writable: !1
      },
      (le) => {
        T = le ? B(T, le) : null, S(), S = V;
      }
    );
    try {
      for (; ; ) {
        const le = n.destroyed ? null : n.read();
        if (le !== null)
          yield le;
        else {
          if (T)
            throw T;
          if (T === null)
            return;
          await new R(E);
        }
      }
    } catch (le) {
      throw T = B(T, le), T;
    } finally {
      (T || (o == null ? void 0 : o.destroyOnReturn) !== !1) && (T === void 0 || n._readableState.autoDestroy) ? P.destroyer(n, null) : (n.off("readable", E), Z());
    }
  }
  s(D.prototype, {
    readable: {
      __proto__: null,
      get() {
        const n = this._readableState;
        return !!n && n.readable !== !1 && !n.destroyed && !n.errorEmitted && !n.endEmitted;
      },
      set(n) {
        this._readableState && (this._readableState.readable = !!n);
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
      set: function(n) {
        this._readableState && (this._readableState.flowing = n);
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
      set(n) {
        this._readableState && (this._readableState.destroyed = n);
      }
    },
    readableEnded: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.endEmitted : !1;
      }
    }
  }), s(he.prototype, {
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
        return this[O] !== !1;
      },
      set(n) {
        this[O] = !!n;
      }
    }
  }), D._fromList = _r;
  function _r(n, o) {
    if (o.length === 0)
      return null;
    let S;
    return o.objectMode ? S = o.buffer.shift() : !n || n >= o.length ? (o.decoder ? S = o.buffer.join("") : o.buffer.length === 1 ? S = o.buffer.first() : S = o.buffer.concat(o.length), o.buffer.clear()) : S = o.buffer.consume(n, o.decoder), S;
  }
  function St(n) {
    const o = n._readableState;
    y("endReadable", o.endEmitted), o.endEmitted || (o.ended = !0, e.nextTick(ui, o, n));
  }
  function ui(n, o) {
    if (y("endReadableNT", n.endEmitted, n.length), !n.errored && !n.closeEmitted && !n.endEmitted && n.length === 0) {
      if (n.endEmitted = !0, o.emit("end"), o.writable && o.allowHalfOpen === !1)
        e.nextTick(di, o);
      else if (n.autoDestroy) {
        const S = o._writableState;
        (!S || S.autoDestroy && // We don't expect the writable to ever 'finish'
        // if writable is explicitly set to false.
        (S.finished || S.writable === !1)) && o.destroy();
      }
    }
  }
  function di(n) {
    n.writable && !n.writableEnded && !n.destroyed && n.end();
  }
  D.from = function(n, o) {
    return K(D, n, o);
  };
  let Et;
  function yr() {
    return Et === void 0 && (Et = {}), Et;
  }
  return D.fromWeb = function(n, o) {
    return yr().newStreamReadableFromReadableStream(n, o);
  }, D.toWeb = function(n, o) {
    return yr().newReadableStreamFromStreamReadable(n, o);
  }, D.wrap = function(n, o) {
    var S, E;
    return new D({
      objectMode: (S = (E = n.readableObjectMode) !== null && E !== void 0 ? E : n.objectMode) !== null && S !== void 0 ? S : !0,
      ...o,
      destroy(T, Z) {
        P.destroyer(n, T), Z(T);
      }
    }).wrap(n);
  }, Nt;
}
var Dt, Vr;
function lr() {
  if (Vr)
    return Dt;
  Vr = 1;
  const e = $e, {
    ArrayPrototypeSlice: t,
    Error: r,
    FunctionPrototypeSymbolHasInstance: i,
    ObjectDefineProperty: l,
    ObjectDefineProperties: s,
    ObjectSetPrototypeOf: d,
    StringPrototypeToLowerCase: g,
    Symbol: R,
    SymbolHasInstance: h
  } = H;
  Dt = L, L.WritableState = w;
  const { EventEmitter: _ } = lt, v = or.Stream, { Buffer: c } = Ie, u = je, { addAbortSignal: m } = bt, { getHighWaterMark: b, getDefaultHighWaterMark: A } = pt, {
    ERR_INVALID_ARG_TYPE: k,
    ERR_METHOD_NOT_IMPLEMENTED: M,
    ERR_MULTIPLE_CALLBACK: y,
    ERR_STREAM_CANNOT_PIPE: j,
    ERR_STREAM_DESTROYED: P,
    ERR_STREAM_ALREADY_FINISHED: J,
    ERR_STREAM_NULL_VALUES: oe,
    ERR_STREAM_WRITE_AFTER_END: B,
    ERR_UNKNOWN_ENCODING: q
  } = ie.codes, { errorOrDestroy: re } = u;
  d(L.prototype, v.prototype), d(L, v);
  function ne() {
  }
  const x = R("kOnFinished");
  function w(a, f, p) {
    typeof p != "boolean" && (p = f instanceof pe()), this.objectMode = !!(a && a.objectMode), p && (this.objectMode = this.objectMode || !!(a && a.writableObjectMode)), this.highWaterMark = a ? b(this, a, "writableHighWaterMark", p) : A(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    const I = !!(a && a.decodeStrings === !1);
    this.decodeStrings = !I, this.defaultEncoding = a && a.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = z.bind(void 0, f), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, W(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !a || a.emitClose !== !1, this.autoDestroy = !a || a.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[x] = [];
  }
  function W(a) {
    a.buffered = [], a.bufferedIndex = 0, a.allBuffers = !0, a.allNoop = !0;
  }
  w.prototype.getBuffer = function() {
    return t(this.buffered, this.bufferedIndex);
  }, l(w.prototype, "bufferedRequestCount", {
    __proto__: null,
    get() {
      return this.buffered.length - this.bufferedIndex;
    }
  });
  function L(a) {
    const f = this instanceof pe();
    if (!f && !i(L, this))
      return new L(a);
    this._writableState = new w(a, this, f), a && (typeof a.write == "function" && (this._write = a.write), typeof a.writev == "function" && (this._writev = a.writev), typeof a.destroy == "function" && (this._destroy = a.destroy), typeof a.final == "function" && (this._final = a.final), typeof a.construct == "function" && (this._construct = a.construct), a.signal && m(a.signal, this)), v.call(this, a), u.construct(this, () => {
      const p = this._writableState;
      p.writing || X(this, p), Le(this, p);
    });
  }
  l(L, h, {
    __proto__: null,
    value: function(a) {
      return i(this, a) ? !0 : this !== L ? !1 : a && a._writableState instanceof w;
    }
  }), L.prototype.pipe = function() {
    re(this, new j());
  };
  function O(a, f, p, I) {
    const $ = a._writableState;
    if (typeof p == "function")
      I = p, p = $.defaultEncoding;
    else {
      if (!p)
        p = $.defaultEncoding;
      else if (p !== "buffer" && !c.isEncoding(p))
        throw new q(p);
      typeof I != "function" && (I = ne);
    }
    if (f === null)
      throw new oe();
    if (!$.objectMode)
      if (typeof f == "string")
        $.decodeStrings !== !1 && (f = c.from(f, p), p = "buffer");
      else if (f instanceof c)
        p = "buffer";
      else if (v._isUint8Array(f))
        f = v._uint8ArrayToBuffer(f), p = "buffer";
      else
        throw new k("chunk", ["string", "Buffer", "Uint8Array"], f);
    let U;
    return $.ending ? U = new B() : $.destroyed && (U = new P("write")), U ? (e.nextTick(I, U), re(a, U, !0), U) : ($.pendingcb++, Y(a, $, f, p, I));
  }
  L.prototype.write = function(a, f, p) {
    return O(this, a, f, p) === !0;
  }, L.prototype.cork = function() {
    this._writableState.corked++;
  }, L.prototype.uncork = function() {
    const a = this._writableState;
    a.corked && (a.corked--, a.writing || X(this, a));
  }, L.prototype.setDefaultEncoding = function(f) {
    if (typeof f == "string" && (f = g(f)), !c.isEncoding(f))
      throw new q(f);
    return this._writableState.defaultEncoding = f, this;
  };
  function Y(a, f, p, I, $) {
    const U = f.objectMode ? 1 : p.length;
    f.length += U;
    const G = f.length < f.highWaterMark;
    return G || (f.needDrain = !0), f.writing || f.corked || f.errored || !f.constructed ? (f.buffered.push({
      chunk: p,
      encoding: I,
      callback: $
    }), f.allBuffers && I !== "buffer" && (f.allBuffers = !1), f.allNoop && $ !== ne && (f.allNoop = !1)) : (f.writelen = U, f.writecb = $, f.writing = !0, f.sync = !0, a._write(p, I, f.onwrite), f.sync = !1), G && !f.errored && !f.destroyed;
  }
  function K(a, f, p, I, $, U, G) {
    f.writelen = I, f.writecb = G, f.writing = !0, f.sync = !0, f.destroyed ? f.onwrite(new P("write")) : p ? a._writev($, f.onwrite) : a._write($, U, f.onwrite), f.sync = !1;
  }
  function V(a, f, p, I) {
    --f.pendingcb, I(p), N(f), re(a, p);
  }
  function z(a, f) {
    const p = a._writableState, I = p.sync, $ = p.writecb;
    if (typeof $ != "function") {
      re(a, new y());
      return;
    }
    p.writing = !1, p.writecb = null, p.length -= p.writelen, p.writelen = 0, f ? (f.stack, p.errored || (p.errored = f), a._readableState && !a._readableState.errored && (a._readableState.errored = f), I ? e.nextTick(V, a, p, f, $) : V(a, p, f, $)) : (p.buffered.length > p.bufferedIndex && X(a, p), I ? p.afterWriteTickInfo !== null && p.afterWriteTickInfo.cb === $ ? p.afterWriteTickInfo.count++ : (p.afterWriteTickInfo = {
      count: 1,
      cb: $,
      stream: a,
      state: p
    }, e.nextTick(C, p.afterWriteTickInfo)) : ce(a, p, 1, $));
  }
  function C({ stream: a, state: f, count: p, cb: I }) {
    return f.afterWriteTickInfo = null, ce(a, f, p, I);
  }
  function ce(a, f, p, I) {
    for (!f.ending && !a.destroyed && f.length === 0 && f.needDrain && (f.needDrain = !1, a.emit("drain")); p-- > 0; )
      f.pendingcb--, I();
    f.destroyed && N(f), Le(a, f);
  }
  function N(a) {
    if (a.writing)
      return;
    for (let $ = a.bufferedIndex; $ < a.buffered.length; ++$) {
      var f;
      const { chunk: U, callback: G } = a.buffered[$], F = a.objectMode ? 1 : U.length;
      a.length -= F, G(
        (f = a.errored) !== null && f !== void 0 ? f : new P("write")
      );
    }
    const p = a[x].splice(0);
    for (let $ = 0; $ < p.length; $++) {
      var I;
      p[$](
        (I = a.errored) !== null && I !== void 0 ? I : new P("end")
      );
    }
    W(a);
  }
  function X(a, f) {
    if (f.corked || f.bufferProcessing || f.destroyed || !f.constructed)
      return;
    const { buffered: p, bufferedIndex: I, objectMode: $ } = f, U = p.length - I;
    if (!U)
      return;
    let G = I;
    if (f.bufferProcessing = !0, U > 1 && a._writev) {
      f.pendingcb -= U - 1;
      const F = f.allNoop ? ne : (D) => {
        for (let we = G; we < p.length; ++we)
          p[we].callback(D);
      }, he = f.allNoop && G === 0 ? p : t(p, G);
      he.allBuffers = f.allBuffers, K(a, f, !0, f.length, he, "", F), W(f);
    } else {
      do {
        const { chunk: F, encoding: he, callback: D } = p[G];
        p[G++] = null;
        const we = $ ? 1 : F.length;
        K(a, f, !1, we, F, he, D);
      } while (G < p.length && !f.writing);
      G === p.length ? W(f) : G > 256 ? (p.splice(0, G), f.bufferedIndex = 0) : f.bufferedIndex = G;
    }
    f.bufferProcessing = !1;
  }
  L.prototype._write = function(a, f, p) {
    if (this._writev)
      this._writev(
        [
          {
            chunk: a,
            encoding: f
          }
        ],
        p
      );
    else
      throw new M("_write()");
  }, L.prototype._writev = null, L.prototype.end = function(a, f, p) {
    const I = this._writableState;
    typeof a == "function" ? (p = a, a = null, f = null) : typeof f == "function" && (p = f, f = null);
    let $;
    if (a != null) {
      const U = O(this, a, f);
      U instanceof r && ($ = U);
    }
    return I.corked && (I.corked = 1, this.uncork()), $ || (!I.errored && !I.ending ? (I.ending = !0, Le(this, I, !0), I.ended = !0) : I.finished ? $ = new J("end") : I.destroyed && ($ = new P("end"))), typeof p == "function" && ($ || I.finished ? e.nextTick(p, $) : I[x].push(p)), this;
  };
  function se(a) {
    return a.ending && !a.destroyed && a.constructed && a.length === 0 && !a.errored && a.buffered.length === 0 && !a.finished && !a.writing && !a.errorEmitted && !a.closeEmitted;
  }
  function ke(a, f) {
    let p = !1;
    function I($) {
      if (p) {
        re(a, $ ?? y());
        return;
      }
      if (p = !0, f.pendingcb--, $) {
        const U = f[x].splice(0);
        for (let G = 0; G < U.length; G++)
          U[G]($);
        re(a, $, f.sync);
      } else
        se(f) && (f.prefinished = !0, a.emit("prefinish"), f.pendingcb++, e.nextTick(Ue, a, f));
    }
    f.sync = !0, f.pendingcb++;
    try {
      a._final(I);
    } catch ($) {
      I($);
    }
    f.sync = !1;
  }
  function Pe(a, f) {
    !f.prefinished && !f.finalCalled && (typeof a._final == "function" && !f.destroyed ? (f.finalCalled = !0, ke(a, f)) : (f.prefinished = !0, a.emit("prefinish")));
  }
  function Le(a, f, p) {
    se(f) && (Pe(a, f), f.pendingcb === 0 && (p ? (f.pendingcb++, e.nextTick(
      (I, $) => {
        se($) ? Ue(I, $) : $.pendingcb--;
      },
      a,
      f
    )) : se(f) && (f.pendingcb++, Ue(a, f))));
  }
  function Ue(a, f) {
    f.pendingcb--, f.finished = !0;
    const p = f[x].splice(0);
    for (let I = 0; I < p.length; I++)
      p[I]();
    if (a.emit("finish"), f.autoDestroy) {
      const I = a._readableState;
      (!I || I.autoDestroy && // We don't expect the readable to ever 'end'
      // if readable is explicitly set to false.
      (I.endEmitted || I.readable === !1)) && a.destroy();
    }
  }
  s(L.prototype, {
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
      set(a) {
        this._writableState && (this._writableState.destroyed = a);
      }
    },
    writable: {
      __proto__: null,
      get() {
        const a = this._writableState;
        return !!a && a.writable !== !1 && !a.destroyed && !a.errored && !a.ending && !a.ended;
      },
      set(a) {
        this._writableState && (this._writableState.writable = !!a);
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
        const a = this._writableState;
        return a ? !a.destroyed && !a.ending && a.needDrain : !1;
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
  const wt = u.destroy;
  L.prototype.destroy = function(a, f) {
    const p = this._writableState;
    return !p.destroyed && (p.bufferedIndex < p.buffered.length || p[x].length) && e.nextTick(N, p), wt.call(this, a, f), this;
  }, L.prototype._undestroy = u.undestroy, L.prototype._destroy = function(a, f) {
    f(a);
  }, L.prototype[_.captureRejectionSymbol] = function(a) {
    this.destroy(a);
  };
  let Be;
  function Oe() {
    return Be === void 0 && (Be = {}), Be;
  }
  return L.fromWeb = function(a, f) {
    return Oe().newStreamWritableFromWritableStream(a, f);
  }, L.toWeb = function(a) {
    return Oe().newWritableStreamFromStreamWritable(a);
  }, Dt;
}
var Mt, Hr;
function gl() {
  if (Hr)
    return Mt;
  Hr = 1;
  const e = $e, t = Ie, {
    isReadable: r,
    isWritable: i,
    isIterable: l,
    isNodeStream: s,
    isReadableNodeStream: d,
    isWritableNodeStream: g,
    isDuplexNodeStream: R,
    isReadableStream: h,
    isWritableStream: _
  } = ye, v = Se, {
    AbortError: c,
    codes: { ERR_INVALID_ARG_TYPE: u, ERR_INVALID_RETURN_VALUE: m }
  } = ie, { destroyer: b } = je, A = pe(), k = _t(), M = lr(), { createDeferredPromise: y } = te, j = Gn, P = globalThis.Blob || t.Blob, J = typeof P < "u" ? function(w) {
    return w instanceof P;
  } : function(w) {
    return !1;
  }, oe = globalThis.AbortController || Ye().AbortController, { FunctionPrototypeCall: B } = H;
  class q extends A {
    constructor(w) {
      super(w), (w == null ? void 0 : w.readable) === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), (w == null ? void 0 : w.writable) === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
    }
  }
  Mt = function x(w, W) {
    if (R(w))
      return w;
    if (d(w))
      return ne({
        readable: w
      });
    if (g(w))
      return ne({
        writable: w
      });
    if (s(w))
      return ne({
        writable: !1,
        readable: !1
      });
    if (h(w))
      return ne({
        readable: k.fromWeb(w)
      });
    if (_(w))
      return ne({
        writable: M.fromWeb(w)
      });
    if (typeof w == "function") {
      const { value: O, write: Y, final: K, destroy: V } = re(w);
      if (l(O))
        return j(q, O, {
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          write: Y,
          final: K,
          destroy: V
        });
      const z = O == null ? void 0 : O.then;
      if (typeof z == "function") {
        let C;
        const ce = B(
          z,
          O,
          (N) => {
            if (N != null)
              throw new m("nully", "body", N);
          },
          (N) => {
            b(C, N);
          }
        );
        return C = new q({
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          readable: !1,
          write: Y,
          final(N) {
            K(async () => {
              try {
                await ce, e.nextTick(N, null);
              } catch (X) {
                e.nextTick(N, X);
              }
            });
          },
          destroy: V
        });
      }
      throw new m("Iterable, AsyncIterable or AsyncFunction", W, O);
    }
    if (J(w))
      return x(w.arrayBuffer());
    if (l(w))
      return j(q, w, {
        // TODO (ronag): highWaterMark?
        objectMode: !0,
        writable: !1
      });
    if (h(w == null ? void 0 : w.readable) && _(w == null ? void 0 : w.writable))
      return q.fromWeb(w);
    if (typeof (w == null ? void 0 : w.writable) == "object" || typeof (w == null ? void 0 : w.readable) == "object") {
      const O = w != null && w.readable ? d(w == null ? void 0 : w.readable) ? w == null ? void 0 : w.readable : x(w.readable) : void 0, Y = w != null && w.writable ? g(w == null ? void 0 : w.writable) ? w == null ? void 0 : w.writable : x(w.writable) : void 0;
      return ne({
        readable: O,
        writable: Y
      });
    }
    const L = w == null ? void 0 : w.then;
    if (typeof L == "function") {
      let O;
      return B(
        L,
        w,
        (Y) => {
          Y != null && O.push(Y), O.push(null);
        },
        (Y) => {
          b(O, Y);
        }
      ), O = new q({
        objectMode: !0,
        writable: !1,
        read() {
        }
      });
    }
    throw new u(
      W,
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
      w
    );
  };
  function re(x) {
    let { promise: w, resolve: W } = y();
    const L = new oe(), O = L.signal;
    return {
      value: x(
        async function* () {
          for (; ; ) {
            const K = w;
            w = null;
            const { chunk: V, done: z, cb: C } = await K;
            if (e.nextTick(C), z)
              return;
            if (O.aborted)
              throw new c(void 0, {
                cause: O.reason
              });
            ({ promise: w, resolve: W } = y()), yield V;
          }
        }(),
        {
          signal: O
        }
      ),
      write(K, V, z) {
        const C = W;
        W = null, C({
          chunk: K,
          done: !1,
          cb: z
        });
      },
      final(K) {
        const V = W;
        W = null, V({
          done: !0,
          cb: K
        });
      },
      destroy(K, V) {
        L.abort(), V(K);
      }
    };
  }
  function ne(x) {
    const w = x.readable && typeof x.readable.read != "function" ? k.wrap(x.readable) : x.readable, W = x.writable;
    let L = !!r(w), O = !!i(W), Y, K, V, z, C;
    function ce(N) {
      const X = z;
      z = null, X ? X(N) : N && C.destroy(N);
    }
    return C = new q({
      // TODO (ronag): highWaterMark?
      readableObjectMode: !!(w != null && w.readableObjectMode),
      writableObjectMode: !!(W != null && W.writableObjectMode),
      readable: L,
      writable: O
    }), O && (v(W, (N) => {
      O = !1, N && b(w, N), ce(N);
    }), C._write = function(N, X, se) {
      W.write(N, X) ? se() : Y = se;
    }, C._final = function(N) {
      W.end(), K = N;
    }, W.on("drain", function() {
      if (Y) {
        const N = Y;
        Y = null, N();
      }
    }), W.on("finish", function() {
      if (K) {
        const N = K;
        K = null, N();
      }
    })), L && (v(w, (N) => {
      L = !1, N && b(w, N), ce(N);
    }), w.on("readable", function() {
      if (V) {
        const N = V;
        V = null, N();
      }
    }), w.on("end", function() {
      C.push(null);
    }), C._read = function() {
      for (; ; ) {
        const N = w.read();
        if (N === null) {
          V = C._read;
          return;
        }
        if (!C.push(N))
          return;
      }
    }), C._destroy = function(N, X) {
      !N && z !== null && (N = new c()), V = null, Y = null, K = null, z === null ? X(N) : (z = X, b(W, N), b(w, N));
    }, C;
  }
  return Mt;
}
var kt, qr;
function pe() {
  if (qr)
    return kt;
  qr = 1;
  const {
    ObjectDefineProperties: e,
    ObjectGetOwnPropertyDescriptor: t,
    ObjectKeys: r,
    ObjectSetPrototypeOf: i
  } = H;
  kt = d;
  const l = _t(), s = lr();
  i(d.prototype, l.prototype), i(d, l);
  {
    const _ = r(s.prototype);
    for (let v = 0; v < _.length; v++) {
      const c = _[v];
      d.prototype[c] || (d.prototype[c] = s.prototype[c]);
    }
  }
  function d(_) {
    if (!(this instanceof d))
      return new d(_);
    l.call(this, _), s.call(this, _), _ ? (this.allowHalfOpen = _.allowHalfOpen !== !1, _.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), _.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
  }
  e(d.prototype, {
    writable: {
      __proto__: null,
      ...t(s.prototype, "writable")
    },
    writableHighWaterMark: {
      __proto__: null,
      ...t(s.prototype, "writableHighWaterMark")
    },
    writableObjectMode: {
      __proto__: null,
      ...t(s.prototype, "writableObjectMode")
    },
    writableBuffer: {
      __proto__: null,
      ...t(s.prototype, "writableBuffer")
    },
    writableLength: {
      __proto__: null,
      ...t(s.prototype, "writableLength")
    },
    writableFinished: {
      __proto__: null,
      ...t(s.prototype, "writableFinished")
    },
    writableCorked: {
      __proto__: null,
      ...t(s.prototype, "writableCorked")
    },
    writableEnded: {
      __proto__: null,
      ...t(s.prototype, "writableEnded")
    },
    writableNeedDrain: {
      __proto__: null,
      ...t(s.prototype, "writableNeedDrain")
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
      },
      set(_) {
        this._readableState && this._writableState && (this._readableState.destroyed = _, this._writableState.destroyed = _);
      }
    }
  });
  let g;
  function R() {
    return g === void 0 && (g = {}), g;
  }
  d.fromWeb = function(_, v) {
    return R().newStreamDuplexFromReadableWritablePair(_, v);
  }, d.toWeb = function(_) {
    return R().newReadableWritablePairFromDuplex(_);
  };
  let h;
  return d.from = function(_) {
    return h || (h = gl()), h(_, "body");
  }, kt;
}
const { ObjectSetPrototypeOf: Vn, Symbol: Sl } = H;
var Hn = _e;
const { ERR_METHOD_NOT_IMPLEMENTED: El } = ie.codes, ar = pe(), { getHighWaterMark: Rl } = pt;
Vn(_e.prototype, ar.prototype);
Vn(_e, ar);
const He = Sl("kCallback");
function _e(e) {
  if (!(this instanceof _e))
    return new _e(e);
  const t = e ? Rl(this, e, "readableHighWaterMark", !0) : null;
  t === 0 && (e = {
    ...e,
    highWaterMark: null,
    readableHighWaterMark: t,
    // TODO (ronag): 0 is not optimal since we have
    // a "bug" where we check needDrain before calling _write and not after.
    // Refs: https://github.com/nodejs/node/pull/32887
    // Refs: https://github.com/nodejs/node/pull/35941
    writableHighWaterMark: e.writableHighWaterMark || 0
  }), ar.call(this, e), this._readableState.sync = !1, this[He] = null, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", Al);
}
function Qt(e) {
  typeof this._flush == "function" && !this.destroyed ? this._flush((t, r) => {
    if (t) {
      e ? e(t) : this.destroy(t);
      return;
    }
    r != null && this.push(r), this.push(null), e && e();
  }) : (this.push(null), e && e());
}
function Al() {
  this._final !== Qt && Qt.call(this);
}
_e.prototype._final = Qt;
_e.prototype._transform = function(e, t, r) {
  throw new El("_transform()");
};
_e.prototype._write = function(e, t, r) {
  const i = this._readableState, l = this._writableState, s = i.length;
  this._transform(e, t, (d, g) => {
    if (d) {
      r(d);
      return;
    }
    g != null && this.push(g), l.ended || // Backwards compat.
    s === i.length || // Backwards compat.
    i.length < i.highWaterMark ? r() : this[He] = r;
  });
};
_e.prototype._read = function() {
  if (this[He]) {
    const e = this[He];
    this[He] = null, e();
  }
};
const { ObjectSetPrototypeOf: qn } = H;
var Yn = Ce;
const sr = Hn;
qn(Ce.prototype, sr.prototype);
qn(Ce, sr);
function Ce(e) {
  if (!(this instanceof Ce))
    return new Ce(e);
  sr.call(this, e);
}
Ce.prototype._transform = function(e, t, r) {
  r(null, e);
};
const Ve = $e, { ArrayIsArray: ml, Promise: vl, SymbolAsyncIterator: Tl, SymbolDispose: Il } = H, it = Se, { once: $l } = te, Nl = je, Yr = pe(), {
  aggregateTwoErrors: Dl,
  codes: {
    ERR_INVALID_ARG_TYPE: Zt,
    ERR_INVALID_RETURN_VALUE: Pt,
    ERR_MISSING_ARGS: Ml,
    ERR_STREAM_DESTROYED: kl,
    ERR_STREAM_PREMATURE_CLOSE: Pl
  },
  AbortError: Ll
} = ie, { validateFunction: Ol, validateAbortSignal: xl } = Ke, {
  isIterable: me,
  isReadable: Lt,
  isReadableNodeStream: rt,
  isNodeStream: Kr,
  isTransformStream: xe,
  isWebStream: Wl,
  isReadableStream: Ot,
  isReadableFinished: Cl
} = ye, Fl = globalThis.AbortController || Ye().AbortController;
let xt, Wt, Ct;
function zr(e, t, r) {
  let i = !1;
  e.on("close", () => {
    i = !0;
  });
  const l = it(
    e,
    {
      readable: t,
      writable: r
    },
    (s) => {
      i = !s;
    }
  );
  return {
    destroy: (s) => {
      i || (i = !0, Nl.destroyer(e, s || new kl("pipe")));
    },
    cleanup: l
  };
}
function jl(e) {
  return Ol(e[e.length - 1], "streams[stream.length - 1]"), e.pop();
}
function Ft(e) {
  if (me(e))
    return e;
  if (rt(e))
    return Ul(e);
  throw new Zt("val", ["Readable", "Iterable", "AsyncIterable"], e);
}
async function* Ul(e) {
  Wt || (Wt = _t()), yield* Wt.prototype[Tl].call(e);
}
async function Ze(e, t, r, { end: i }) {
  let l, s = null;
  const d = (h) => {
    if (h && (l = h), s) {
      const _ = s;
      s = null, _();
    }
  }, g = () => new vl((h, _) => {
    l ? _(l) : s = () => {
      l ? _(l) : h();
    };
  });
  t.on("drain", d);
  const R = it(
    t,
    {
      readable: !1
    },
    d
  );
  try {
    t.writableNeedDrain && await g();
    for await (const h of e)
      t.write(h) || await g();
    i && (t.end(), await g()), r();
  } catch (h) {
    r(l !== h ? Dl(l, h) : h);
  } finally {
    R(), t.off("drain", d);
  }
}
async function jt(e, t, r, { end: i }) {
  xe(t) && (t = t.writable);
  const l = t.getWriter();
  try {
    for await (const s of e)
      await l.ready, l.write(s).catch(() => {
      });
    await l.ready, i && await l.close(), r();
  } catch (s) {
    try {
      await l.abort(s), r(s);
    } catch (d) {
      r(d);
    }
  }
}
function Bl(...e) {
  return Kn(e, $l(jl(e)));
}
function Kn(e, t, r) {
  if (e.length === 1 && ml(e[0]) && (e = e[0]), e.length < 2)
    throw new Ml("streams");
  const i = new Fl(), l = i.signal, s = r == null ? void 0 : r.signal, d = [];
  xl(s, "options.signal");
  function g() {
    m(new Ll());
  }
  Ct = Ct || te.addAbortListener;
  let R;
  s && (R = Ct(s, g));
  let h, _;
  const v = [];
  let c = 0;
  function u(M) {
    m(M, --c === 0);
  }
  function m(M, y) {
    var j;
    if (M && (!h || h.code === "ERR_STREAM_PREMATURE_CLOSE") && (h = M), !(!h && !y)) {
      for (; v.length; )
        v.shift()(h);
      (j = R) === null || j === void 0 || j[Il](), i.abort(), y && (h || d.forEach((P) => P()), Ve.nextTick(t, h, _));
    }
  }
  let b;
  for (let M = 0; M < e.length; M++) {
    const y = e[M], j = M < e.length - 1, P = M > 0, J = j || (r == null ? void 0 : r.end) !== !1, oe = M === e.length - 1;
    if (Kr(y)) {
      let B = function(q) {
        q && q.name !== "AbortError" && q.code !== "ERR_STREAM_PREMATURE_CLOSE" && u(q);
      };
      if (J) {
        const { destroy: q, cleanup: re } = zr(y, j, P);
        v.push(q), Lt(y) && oe && d.push(re);
      }
      y.on("error", B), Lt(y) && oe && d.push(() => {
        y.removeListener("error", B);
      });
    }
    if (M === 0)
      if (typeof y == "function") {
        if (b = y({
          signal: l
        }), !me(b))
          throw new Pt("Iterable, AsyncIterable or Stream", "source", b);
      } else
        me(y) || rt(y) || xe(y) ? b = y : b = Yr.from(y);
    else if (typeof y == "function") {
      if (xe(b)) {
        var A;
        b = Ft((A = b) === null || A === void 0 ? void 0 : A.readable);
      } else
        b = Ft(b);
      if (b = y(b, {
        signal: l
      }), j) {
        if (!me(b, !0))
          throw new Pt("AsyncIterable", `transform[${M - 1}]`, b);
      } else {
        var k;
        xt || (xt = Yn);
        const B = new xt({
          objectMode: !0
        }), q = (k = b) === null || k === void 0 ? void 0 : k.then;
        if (typeof q == "function")
          c++, q.call(
            b,
            (x) => {
              _ = x, x != null && B.write(x), J && B.end(), Ve.nextTick(u);
            },
            (x) => {
              B.destroy(x), Ve.nextTick(u, x);
            }
          );
        else if (me(b, !0))
          c++, Ze(b, B, u, {
            end: J
          });
        else if (Ot(b) || xe(b)) {
          const x = b.readable || b;
          c++, Ze(x, B, u, {
            end: J
          });
        } else
          throw new Pt("AsyncIterable or Promise", "destination", b);
        b = B;
        const { destroy: re, cleanup: ne } = zr(b, !1, !0);
        v.push(re), oe && d.push(ne);
      }
    } else if (Kr(y)) {
      if (rt(b)) {
        c += 2;
        const B = Gl(b, y, u, {
          end: J
        });
        Lt(y) && oe && d.push(B);
      } else if (xe(b) || Ot(b)) {
        const B = b.readable || b;
        c++, Ze(B, y, u, {
          end: J
        });
      } else if (me(b))
        c++, Ze(b, y, u, {
          end: J
        });
      else
        throw new Zt(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          b
        );
      b = y;
    } else if (Wl(y)) {
      if (rt(b))
        c++, jt(Ft(b), y, u, {
          end: J
        });
      else if (Ot(b) || me(b))
        c++, jt(b, y, u, {
          end: J
        });
      else if (xe(b))
        c++, jt(b.readable, y, u, {
          end: J
        });
      else
        throw new Zt(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          b
        );
      b = y;
    } else
      b = Yr.from(y);
  }
  return (l != null && l.aborted || s != null && s.aborted) && Ve.nextTick(g), b;
}
function Gl(e, t, r, { end: i }) {
  let l = !1;
  if (t.on("close", () => {
    l || r(new Pl());
  }), e.pipe(t, {
    end: !1
  }), i) {
    let s = function() {
      l = !0, t.end();
    };
    Cl(e) ? Ve.nextTick(s) : e.once("end", s);
  } else
    r();
  return it(
    e,
    {
      readable: !0,
      writable: !1
    },
    (s) => {
      const d = e._readableState;
      s && s.code === "ERR_STREAM_PREMATURE_CLOSE" && d && d.ended && !d.errored && !d.errorEmitted ? e.once("end", r).once("error", r) : r(s);
    }
  ), it(
    t,
    {
      readable: !1,
      writable: !0
    },
    r
  );
}
var fr = {
  pipelineImpl: Kn,
  pipeline: Bl
};
const { pipeline: Vl } = fr, et = pe(), { destroyer: Hl } = je, {
  isNodeStream: tt,
  isReadable: Jr,
  isWritable: Xr,
  isWebStream: Ut,
  isTransformStream: Ae,
  isWritableStream: Qr,
  isReadableStream: Zr
} = ye, {
  AbortError: ql,
  codes: { ERR_INVALID_ARG_VALUE: en, ERR_MISSING_ARGS: Yl }
} = ie, Kl = Se;
var zn = function(...t) {
  if (t.length === 0)
    throw new Yl("streams");
  if (t.length === 1)
    return et.from(t[0]);
  const r = [...t];
  if (typeof t[0] == "function" && (t[0] = et.from(t[0])), typeof t[t.length - 1] == "function") {
    const u = t.length - 1;
    t[u] = et.from(t[u]);
  }
  for (let u = 0; u < t.length; ++u)
    if (!(!tt(t[u]) && !Ut(t[u]))) {
      if (u < t.length - 1 && !(Jr(t[u]) || Zr(t[u]) || Ae(t[u])))
        throw new en(`streams[${u}]`, r[u], "must be readable");
      if (u > 0 && !(Xr(t[u]) || Qr(t[u]) || Ae(t[u])))
        throw new en(`streams[${u}]`, r[u], "must be writable");
    }
  let i, l, s, d, g;
  function R(u) {
    const m = d;
    d = null, m ? m(u) : u ? g.destroy(u) : !c && !v && g.destroy();
  }
  const h = t[0], _ = Vl(t, R), v = !!(Xr(h) || Qr(h) || Ae(h)), c = !!(Jr(_) || Zr(_) || Ae(_));
  if (g = new et({
    // TODO (ronag): highWaterMark?
    writableObjectMode: !!(h != null && h.writableObjectMode),
    readableObjectMode: !!(_ != null && _.readableObjectMode),
    writable: v,
    readable: c
  }), v) {
    if (tt(h))
      g._write = function(m, b, A) {
        h.write(m, b) ? A() : i = A;
      }, g._final = function(m) {
        h.end(), l = m;
      }, h.on("drain", function() {
        if (i) {
          const m = i;
          i = null, m();
        }
      });
    else if (Ut(h)) {
      const b = (Ae(h) ? h.writable : h).getWriter();
      g._write = async function(A, k, M) {
        try {
          await b.ready, b.write(A).catch(() => {
          }), M();
        } catch (y) {
          M(y);
        }
      }, g._final = async function(A) {
        try {
          await b.ready, b.close().catch(() => {
          }), l = A;
        } catch (k) {
          A(k);
        }
      };
    }
    const u = Ae(_) ? _.readable : _;
    Kl(u, () => {
      if (l) {
        const m = l;
        l = null, m();
      }
    });
  }
  if (c) {
    if (tt(_))
      _.on("readable", function() {
        if (s) {
          const u = s;
          s = null, u();
        }
      }), _.on("end", function() {
        g.push(null);
      }), g._read = function() {
        for (; ; ) {
          const u = _.read();
          if (u === null) {
            s = g._read;
            return;
          }
          if (!g.push(u))
            return;
        }
      };
    else if (Ut(_)) {
      const m = (Ae(_) ? _.readable : _).getReader();
      g._read = async function() {
        for (; ; )
          try {
            const { value: b, done: A } = await m.read();
            if (!g.push(b))
              return;
            if (A) {
              g.push(null);
              return;
            }
          } catch {
            return;
          }
      };
    }
  }
  return g._destroy = function(u, m) {
    !u && d !== null && (u = new ql()), s = null, i = null, l = null, d === null ? m(u) : (d = m, tt(_) && Hl(_, u));
  }, g;
};
const zl = globalThis.AbortController || Ye().AbortController, {
  codes: { ERR_INVALID_ARG_VALUE: Jl, ERR_INVALID_ARG_TYPE: ze, ERR_MISSING_ARGS: Xl, ERR_OUT_OF_RANGE: Ql },
  AbortError: ue
} = ie, { validateAbortSignal: De, validateInteger: tn, validateObject: Me } = Ke, Zl = H.Symbol("kWeak"), ea = H.Symbol("kResistStopPropagation"), { finished: ta } = Se, ra = zn, { addAbortSignalNoValidate: na } = bt, { isWritable: ia, isNodeStream: oa } = ye, { deprecate: la } = te, {
  ArrayPrototypePush: aa,
  Boolean: sa,
  MathFloor: rn,
  Number: fa,
  NumberIsNaN: ua,
  Promise: nn,
  PromiseReject: on,
  PromiseResolve: da,
  PromisePrototypeThen: ln,
  Symbol: Jn
} = H, ot = Jn("kEmpty"), an = Jn("kEof");
function ca(e, t) {
  if (t != null && Me(t, "options"), (t == null ? void 0 : t.signal) != null && De(t.signal, "options.signal"), oa(e) && !ia(e))
    throw new Jl("stream", e, "must be writable");
  const r = ra(this, e);
  return t != null && t.signal && na(t.signal, r), r;
}
function yt(e, t) {
  if (typeof e != "function")
    throw new ze("fn", ["Function", "AsyncFunction"], e);
  t != null && Me(t, "options"), (t == null ? void 0 : t.signal) != null && De(t.signal, "options.signal");
  let r = 1;
  (t == null ? void 0 : t.concurrency) != null && (r = rn(t.concurrency));
  let i = r - 1;
  return (t == null ? void 0 : t.highWaterMark) != null && (i = rn(t.highWaterMark)), tn(r, "options.concurrency", 1), tn(i, "options.highWaterMark", 0), i += r, (async function* () {
    const s = te.AbortSignalAny(
      [t == null ? void 0 : t.signal].filter(sa)
    ), d = this, g = [], R = {
      signal: s
    };
    let h, _, v = !1, c = 0;
    function u() {
      v = !0, m();
    }
    function m() {
      c -= 1, b();
    }
    function b() {
      _ && !v && c < r && g.length < i && (_(), _ = null);
    }
    async function A() {
      try {
        for await (let k of d) {
          if (v)
            return;
          if (s.aborted)
            throw new ue();
          try {
            if (k = e(k, R), k === ot)
              continue;
            k = da(k);
          } catch (M) {
            k = on(M);
          }
          c += 1, ln(k, m, u), g.push(k), h && (h(), h = null), !v && (g.length >= i || c >= r) && await new nn((M) => {
            _ = M;
          });
        }
        g.push(an);
      } catch (k) {
        const M = on(k);
        ln(M, m, u), g.push(M);
      } finally {
        v = !0, h && (h(), h = null);
      }
    }
    A();
    try {
      for (; ; ) {
        for (; g.length > 0; ) {
          const k = await g[0];
          if (k === an)
            return;
          if (s.aborted)
            throw new ue();
          k !== ot && (yield k), g.shift(), b();
        }
        await new nn((k) => {
          h = k;
        });
      }
    } finally {
      v = !0, _ && (_(), _ = null);
    }
  }).call(this);
}
function ha(e = void 0) {
  return e != null && Me(e, "options"), (e == null ? void 0 : e.signal) != null && De(e.signal, "options.signal"), (async function* () {
    let r = 0;
    for await (const l of this) {
      var i;
      if (e != null && (i = e.signal) !== null && i !== void 0 && i.aborted)
        throw new ue({
          cause: e.signal.reason
        });
      yield [r++, l];
    }
  }).call(this);
}
async function Xn(e, t = void 0) {
  for await (const r of ur.call(this, e, t))
    return !0;
  return !1;
}
async function ba(e, t = void 0) {
  if (typeof e != "function")
    throw new ze("fn", ["Function", "AsyncFunction"], e);
  return !await Xn.call(
    this,
    async (...r) => !await e(...r),
    t
  );
}
async function pa(e, t) {
  for await (const r of ur.call(this, e, t))
    return r;
}
async function _a(e, t) {
  if (typeof e != "function")
    throw new ze("fn", ["Function", "AsyncFunction"], e);
  async function r(i, l) {
    return await e(i, l), ot;
  }
  for await (const i of yt.call(this, r, t))
    ;
}
function ur(e, t) {
  if (typeof e != "function")
    throw new ze("fn", ["Function", "AsyncFunction"], e);
  async function r(i, l) {
    return await e(i, l) ? i : ot;
  }
  return yt.call(this, r, t);
}
class ya extends Xl {
  constructor() {
    super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
  }
}
async function wa(e, t, r) {
  var i;
  if (typeof e != "function")
    throw new ze("reducer", ["Function", "AsyncFunction"], e);
  r != null && Me(r, "options"), (r == null ? void 0 : r.signal) != null && De(r.signal, "options.signal");
  let l = arguments.length > 1;
  if (r != null && (i = r.signal) !== null && i !== void 0 && i.aborted) {
    const h = new ue(void 0, {
      cause: r.signal.reason
    });
    throw this.once("error", () => {
    }), await ta(this.destroy(h)), h;
  }
  const s = new zl(), d = s.signal;
  if (r != null && r.signal) {
    const h = {
      once: !0,
      [Zl]: this,
      [ea]: !0
    };
    r.signal.addEventListener("abort", () => s.abort(), h);
  }
  let g = !1;
  try {
    for await (const h of this) {
      var R;
      if (g = !0, r != null && (R = r.signal) !== null && R !== void 0 && R.aborted)
        throw new ue();
      l ? t = await e(t, h, {
        signal: d
      }) : (t = h, l = !0);
    }
    if (!g && !l)
      throw new ya();
  } finally {
    s.abort();
  }
  return t;
}
async function ga(e) {
  e != null && Me(e, "options"), (e == null ? void 0 : e.signal) != null && De(e.signal, "options.signal");
  const t = [];
  for await (const i of this) {
    var r;
    if (e != null && (r = e.signal) !== null && r !== void 0 && r.aborted)
      throw new ue(void 0, {
        cause: e.signal.reason
      });
    aa(t, i);
  }
  return t;
}
function Sa(e, t) {
  const r = yt.call(this, e, t);
  return (async function* () {
    for await (const l of r)
      yield* l;
  }).call(this);
}
function Qn(e) {
  if (e = fa(e), ua(e))
    return 0;
  if (e < 0)
    throw new Ql("number", ">= 0", e);
  return e;
}
function Ea(e, t = void 0) {
  return t != null && Me(t, "options"), (t == null ? void 0 : t.signal) != null && De(t.signal, "options.signal"), e = Qn(e), (async function* () {
    var i;
    if (t != null && (i = t.signal) !== null && i !== void 0 && i.aborted)
      throw new ue();
    for await (const s of this) {
      var l;
      if (t != null && (l = t.signal) !== null && l !== void 0 && l.aborted)
        throw new ue();
      e-- <= 0 && (yield s);
    }
  }).call(this);
}
function Ra(e, t = void 0) {
  return t != null && Me(t, "options"), (t == null ? void 0 : t.signal) != null && De(t.signal, "options.signal"), e = Qn(e), (async function* () {
    var i;
    if (t != null && (i = t.signal) !== null && i !== void 0 && i.aborted)
      throw new ue();
    for await (const s of this) {
      var l;
      if (t != null && (l = t.signal) !== null && l !== void 0 && l.aborted)
        throw new ue();
      if (e-- > 0 && (yield s), e <= 0)
        return;
    }
  }).call(this);
}
er.streamReturningOperators = {
  asIndexedPairs: la(ha, "readable.asIndexedPairs will be removed in a future version."),
  drop: Ea,
  filter: ur,
  flatMap: Sa,
  map: yt,
  take: Ra,
  compose: ca
};
er.promiseReturningOperators = {
  every: ba,
  forEach: _a,
  reduce: wa,
  toArray: ga,
  some: Xn,
  find: pa
};
var Bt, sn;
function Zn() {
  if (sn)
    return Bt;
  sn = 1;
  const { ArrayPrototypePop: e, Promise: t } = H, { isIterable: r, isNodeStream: i, isWebStream: l } = ye, { pipelineImpl: s } = fr, { finished: d } = Se;
  ei();
  function g(...R) {
    return new t((h, _) => {
      let v, c;
      const u = R[R.length - 1];
      if (u && typeof u == "object" && !i(u) && !r(u) && !l(u)) {
        const m = e(R);
        v = m.signal, c = m.end;
      }
      s(
        R,
        (m, b) => {
          m ? _(m) : h(b);
        },
        {
          signal: v,
          end: c
        }
      );
    });
  }
  return Bt = {
    finished: d,
    pipeline: g
  }, Bt;
}
var fn;
function ei() {
  if (fn)
    return vt.exports;
  fn = 1;
  const { Buffer: e } = Ie, { ObjectDefineProperty: t, ObjectKeys: r, ReflectApply: i } = H, {
    promisify: { custom: l }
  } = te, { streamReturningOperators: s, promiseReturningOperators: d } = er, {
    codes: { ERR_ILLEGAL_CONSTRUCTOR: g }
  } = ie, R = zn, { setDefaultHighWaterMark: h, getDefaultHighWaterMark: _ } = pt, { pipeline: v } = fr, { destroyer: c } = je, u = Se, m = Zn(), b = ye, A = vt.exports = or.Stream;
  A.isDestroyed = b.isDestroyed, A.isDisturbed = b.isDisturbed, A.isErrored = b.isErrored, A.isReadable = b.isReadable, A.isWritable = b.isWritable, A.Readable = _t();
  for (const M of r(s)) {
    let j = function(...P) {
      if (new.target)
        throw g();
      return A.Readable.from(i(y, this, P));
    };
    const y = s[M];
    t(j, "name", {
      __proto__: null,
      value: y.name
    }), t(j, "length", {
      __proto__: null,
      value: y.length
    }), t(A.Readable.prototype, M, {
      __proto__: null,
      value: j,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  for (const M of r(d)) {
    let j = function(...P) {
      if (new.target)
        throw g();
      return i(y, this, P);
    };
    const y = d[M];
    t(j, "name", {
      __proto__: null,
      value: y.name
    }), t(j, "length", {
      __proto__: null,
      value: y.length
    }), t(A.Readable.prototype, M, {
      __proto__: null,
      value: j,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  A.Writable = lr(), A.Duplex = pe(), A.Transform = Hn, A.PassThrough = Yn, A.pipeline = v;
  const { addAbortSignal: k } = bt;
  return A.addAbortSignal = k, A.finished = u, A.destroy = c, A.compose = R, A.setDefaultHighWaterMark = h, A.getDefaultHighWaterMark = _, t(A, "promises", {
    __proto__: null,
    configurable: !0,
    enumerable: !0,
    get() {
      return m;
    }
  }), t(v, l, {
    __proto__: null,
    enumerable: !0,
    get() {
      return m.pipeline;
    }
  }), t(u, l, {
    __proto__: null,
    enumerable: !0,
    get() {
      return m.finished;
    }
  }), A.Stream = A, A._isUint8Array = function(y) {
    return y instanceof Uint8Array;
  }, A._uint8ArrayToBuffer = function(y) {
    return e.from(y.buffer, y.byteOffset, y.byteLength);
  }, vt.exports;
}
(function(e) {
  const t = ei(), r = Zn(), i = t.Readable.destroy;
  e.exports = t.Readable, e.exports._uint8ArrayToBuffer = t._uint8ArrayToBuffer, e.exports._isUint8Array = t._isUint8Array, e.exports.isDisturbed = t.isDisturbed, e.exports.isErrored = t.isErrored, e.exports.isReadable = t.isReadable, e.exports.Readable = t.Readable, e.exports.Writable = t.Writable, e.exports.Duplex = t.Duplex, e.exports.Transform = t.Transform, e.exports.PassThrough = t.PassThrough, e.exports.addAbortSignal = t.addAbortSignal, e.exports.finished = t.finished, e.exports.destroy = t.destroy, e.exports.destroy = i, e.exports.pipeline = t.pipeline, e.exports.compose = t.compose, Object.defineProperty(t, "promises", {
    configurable: !0,
    enumerable: !0,
    get() {
      return r;
    }
  }), e.exports.Stream = t.Stream, e.exports.default = e.exports;
})(un);
var Aa = un.exports;
class ma {
  constructor(t) {
    this.stream = t, this.array = [];
  }
  push(t) {
    this.array.push(t);
  }
  end() {
    this.stream.push(this.array), this.stream.push(null);
  }
}
class va {
  constructor(t) {
    this.stream = t, this.first = !0, this.stream.push("[");
  }
  push(t) {
    this.first ? this.first = !1 : this.stream.push(","), this.stream.push(JSON.stringify(t));
  }
  end() {
    this.stream.push("]"), this.stream.push(null);
  }
}
class qe extends Aa.Readable {
  constructor(t, { encoding: r = "object" } = {}) {
    if (super({
      objectMode: !0,
      read: () => {
      }
    }), r === "object" && (this.encoder = new ma(this)), r === "string" && (this.encoder = new va(this)), !this.encoder)
      throw new Error(`unknown encoding: ${r}`);
    t.on("data", (i) => {
      const l = {};
      let s = l;
      i.graph.termType !== "DefaultGraph" && (l["@id"] = i.graph.value, l["@graph"] = {}, s = l["@graph"]), s["@id"] = qe.subjectValue(i.subject), i.predicate.value === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" ? s["@type"] = qe.subjectValue(i.object) : s[i.predicate.value] = qe.objectValue(i.object), this.encoder.push(l);
    }), t.on("end", () => this.encoder.end()), t.on("error", (i) => this.emit("error", i));
  }
  static subjectValue(t) {
    return t.termType === "BlankNode" ? "_:" + t.value : t.value;
  }
  static objectValue(t) {
    return t.termType === "NamedNode" ? { "@id": t.value } : t.termType === "BlankNode" ? { "@id": "_:" + t.value } : t.language ? { "@language": t.language, "@value": t.value } : t.datatype && t.datatype.value !== "http://www.w3.org/2001/XMLSchema#string" ? { "@type": t.datatype.value, "@value": t.value } : t.value;
  }
}
class Ta extends bi {
  constructor(t) {
    super(qe, t);
  }
}
class Da extends Ta {
  constructor({ ...t } = {}) {
    super({ encoding: "string", ...t });
  }
}
export {
  Da as default
};
//# sourceMappingURL=CustomJsonLdSerializer-DebgH90h.js.map
