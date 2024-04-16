import { g as P, m as U } from "./index-CbPxOOAJ.js";
import { m as z } from "./main--cltKM4X.js";
function M(o, e) {
  for (var t = 0; t < e.length; t++) {
    const s = e[t];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const a in s)
        if (a !== "default" && !(a in o)) {
          const n = Object.getOwnPropertyDescriptor(s, a);
          n && Object.defineProperty(o, a, n.get ? n : {
            enumerable: !0,
            get: () => s[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
if (typeof queueMicrotask != "function") {
  let o = Promise.resolve();
  try {
    queueMicrotask = (e) => o.then(e).catch((t) => setTimeout(() => {
      throw t;
    }, 0));
  } catch {
  }
}
const w = z, C = U, G = /^[a-z][a-z0-9+\-.]*:(?:[^\0-\x20<>"{}|^`\\]|\\u[A-Fa-f0-9]{4}|\\U[A-Fa-f0-9]{8})*$/, H = /^[a-z][a-z0-9+\-.]*:[^\0-\x20<>"{}|^`]*$/, B = /^([^\0-\x20<>"{}|^`\\]|\\u[A-Fa-f0-9]{4}|\\U[A-Fa-f0-9]{8})*$/, V = /^([^\0-\x20<>"{}|^`])*$/, b = /\\u([0-9A-Fa-f]{4})|\\U([0-9A-Fa-f]{8})/g, g = (o, e, t) => String.fromCodePoint(parseInt(e || t, 16)), W = /\s*(?:#[^\n]*\n\s*)*\s*/y, Z = /\s*(#[^\n]*\n\s*)*\s*/y, k = /[\\]/, j = /[^\n]+\n/y, Q = /^(?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_0-9])(?:(?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}.])*[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}])?$/u, J = /^[a-z]+(-[a-z0-9]+)*$/, S = /[ \t]*/y, T = /@([A-Za-z]+(?:-[A-Za-z0-9-]+)*)(?:\s+|(?=[.,;\])#]))/y, I = /<([^>]*)>\s*/y, $ = (o, e, t, s, a, n) => {
  if (e)
    switch (e) {
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
        console.assert(`bad regex escape char mapping: '${e}'`);
    }
  else {
    if (t)
      return t;
    if (s)
      return String.fromCodePoint(parseInt(s, 16));
    if (a)
      return String.fromCodePoint(parseInt(a, 16));
    if (n)
      throw n[0] === "\\" ? new Error(`expected string_literal but invalid escape sequence within contents: '${n}'. failed to parse a valid token`) : new Error(`expected string_literal but invalid whitespace character within contents: ${JSON.stringify(n)}. failed to parse a valid token`);
    console.assert("unexpected no match branch in escape sequence replace callback");
  }
}, K = /(?:\\(?:([tnrfb])|([\\"'])|u([0-9A-Fa-f]{4})|U([0-9A-Fa-f]{8}))|([\r\n]|\\.))/g, F = /(?:\\(?:([tnrfb])|([\\"'])|u([0-9A-Fa-f]{4})|U([0-9A-Fa-f]{8}))|([\r\n]|\\[^uU]|\\u[^]{4}|\\U[^]{8}))/g, v = (o) => o.replace(K, $), Y = (o) => {
  let e = X.exec(o);
  if (e) {
    let t = e.index;
    return [
      o.slice(0, t).replace(F, $),
      o.slice(t)
    ];
  } else
    return [
      o.replace(F, $),
      ""
    ];
}, [
  X,
  D
] = (() => {
  function o(t) {
    let s = RegExp.prototype.exec.call(this, t);
    if (s) {
      let a = s[0].length - s[1].length;
      s.index += a, s[0] = s[0].slice(a);
    }
    return s;
  }
  let e = (() => {
    try {
      new RegExp("(?<!h)i");
    } catch {
      return (s, a, n) => (a.exec = n, a);
    }
    return (t) => t();
  })();
  return [
    // R_STRLIT_ESCAPE_INCOMPLETE
    e(
      () => new RegExp("(?<!(?:[^\\\\]|^)(?:\\\\\\\\)*\\\\)\\\\(|u[0-9A-Fa-f]{0,3}|U[0-9A-Fa-f]{0,7})$"),
      /^(?:(?:[^\\]|\\.)*)(\\(?:|u[0-9A-Fa-f]{0,3}|U[0-9A-Fa-f]{0,7}))$/,
      function(s) {
        let a = RegExp.prototype.exec.call(this, s);
        return a && (a.index += a[0].length - a[1].length), a;
      }
    ),
    // R_STRLIT_SHORT_DOUBLE_TERM
    e(
      () => new RegExp('(?<!(?:[^\\\\]|^)(?:\\\\\\\\)*\\\\)"\\s*', "g"),
      /(?:[^\\"]|\\.)*("\s*)/y,
      o
    )
  ];
})(), L = /(?:<([^\\>]*)>|_:([^\x20\t<]+))[\x20\t]*<([^\\>]*)>[\x20\t]*(?:(?:(<[^\\>]*)>|_:([^\x20\t<]+))[\x20\t]*(?:<([^\\>]*)>|_:([^\x20\t<]+)|)[\x20\t]*\.\s*(#[^\n]*\n\s*|\n\s*)+|"([^"\\]*)(?:(")(?:\^\^<([^\\>]*)>|@([^\x20\t.]+)|)[\x20\t]*(?:<([^\\>]*)>|_:([^\x20\t<]+)|)[\x20\t]*\.\s*(#[^\n]*\n\s*|\n\s*)+)?)/y, N = /(?:<([^>]*)>|_:([^\x20\t<]+))[\x20\t]*<([^>]*)>[\x20\t]*(?:(?:(<[^>]*)>|_:([^\x20\t<]+))[\x20\t]*(?:<([^>]*)>|_:([^\x20\t<]+)|)[\x20\t]*\.\s*(#[^\n]*\n\s*|\n\s*)+|"((?:[^"\\]|\\.)*)(?:(")(?:\^\^<([^>]*)>|@([^\x20\t.]+)|)[\x20\t]*(?:<([^>]*)>|_:([^\x20\t<]+)|)[\x20\t]*\.\s*(#[^\n]*\n\s*|\n\s*)+)?)/y, O = /_:([^\x20\t<]+)/y;
class ee extends w.Transform {
  constructor(e) {
    super({
      // do not decode strings into buffers
      decodeStrings: !1,
      // accept strings as input on writable side
      writableObjectMode: !1,
      // output quad objects on readable side
      readableObjectMode: !0,
      // implementations
      flush: e.flush,
      transform: e.transform
    }), this.on("pipe", (t) => {
      this._ds_input = t, typeof t.setEncoding == "function" && t.setEncoding("utf8");
    });
  }
  // intercept pipe
  pipe(e) {
    let t = e;
    return t._writableState.objectMode ? e.isGraphyWritable && (e = w.quads_to_writable()) : e = w.quads_to_json(), e !== t ? (super.pipe(e), e.pipe(t)) : super.pipe(t);
  }
}
class te {
  constructor(e) {
    let {
      // input medium
      input: t = null,
      // relax validation
      relax: s = !1,
      // debug
      debug: a = !1
    } = e, n = e.allow_relative_iris || e.allowRelativeIRIs || e.allowRelativeIris || !1, d = this._dc_factory = C.adopt(e.dataFactory || e.data_factory || C.unfiltered), u = this._f_quad = d.quad;
    Object.assign(this, {
      // string buffer, accept left-over string from previous data chunk
      s: e.prepend || "",
      // string buffer length
      n: 0,
      _b_debug: a,
      _b_relax: s,
      _b_destroyed: !1,
      _b_trim_start: !0,
      _f_state: this.statement,
      _kt_subject: null,
      _kt_predicate: null,
      _kt_object: null,
      _s_literal: ""
    }), this._kt_default_graph = d.defaultGraph(), this._kt_rdfs_lang_string = d.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString");
    let x = this._r_clean = W;
    e.relaxed && console.warn(new Error("no such option 'relaxed'; did you mean 'relax' ?").stack.replace(/^Error:/, "Warning:")), "validate" in e && console.warn(new Error("option 'validate' has been removed and validation is now on by default. Use 'relax' option if you wish to disable validation.").stack.replace(/^Error:/, "Warning:"));
    let E = d.namedNode, A = d.blankNode, _ = d.languagedLiteral, l = n ? B : G, m = n ? V : H, p = this;
    Object.assign(this, s ? {
      create_named_node: E,
      create_named_node_escapeless: E,
      create_blank_node: A,
      create_languaged_literal: _
    } : {
      create_named_node(r) {
        return l.test(r) ? E(r) : p._error(`invalid IRI: "${r}"`);
      },
      create_named_node_escapeless(r) {
        return m.test(r) ? E(r) : p._error(`invalid IRI: "${r}"`);
      },
      create_blank_node(r) {
        return Q.test(r) ? A(r) : p._error(`Invalid blank node label: "${r}"`);
      },
      create_languaged_literal(r, i) {
        return J.test(i) ? _(r, i) : p._error(`Invalid literal language tag: ${i}`);
      }
    });
    let f, y = !1;
    if (f = this.transform = new ee({
      // on data event
      transform: (r, i, c) => {
        y || (f.emit("ready"), y = !1);
        let h = this.s += r;
        if (this._b_trim_start) {
          x.lastIndex = 0;
          let R = x.exec(h);
          this.emit_comments && this.emit_comments(R[1]), this.i = x.lastIndex;
        } else
          this.i = 0;
        this.n = h.length;
        try {
          this.parse(!0);
        } catch (R) {
          return f.destroy(R);
        }
        f.emit("progress", r.length), c();
      },
      // once there's no more data to consume, invoke eof
      flush: (r) => {
        if (this.s.length) {
          if (this.s += `
`, this._b_trim_start) {
            x.lastIndex = 0;
            let i = x.exec(this.s);
            this.emit_comments && this.emit_comments(i[1]), this.i = x.lastIndex;
          } else
            this.i = 0;
          try {
            this.parse();
          } catch (i) {
            return f.demolish(i);
          }
          if (this.s.length)
            return f.demolish(new Error(`parsing error occurred in state: statement
  ${this.s.substr(0, 50)}
  ^ starting here`));
        }
        if (this._f_state !== this.statement)
          return f.demolish(new Error(`parsing error occurred in state: ${this._f_state.name}
  ${this.s.substr(0, 50)}
  ^ starting here`));
        this.s = null, f.emit("progress", 0), f.emit("eof"), r();
      }
    }), f._destroy = (...r) => {
      this.destroy(...r);
    }, this._f_data_quad = (r, i, c, h) => f.push(u(r, i, c, h)), f.on("newListener", (r) => {
      r === "comment" && (x = Z, this.emit_comments = (i) => {
        if (!i)
          return;
        let c = i.slice(1).replace(/\n\s+$/, "").split(/\n+\s*#/g);
        for (let h of c)
          f.emit("comment", h);
      });
    }), this.bind(e), t)
      if (t.stream) {
        let r = t.stream;
        queueMicrotask(() => {
          r.pipe(f);
        });
      } else if (typeof t.string == "string") {
        let r = t.string;
        queueMicrotask(() => {
          f.end(r, "utf8");
        });
      } else
        throw new TypeError(`Invalid argument for input parameter: ${typeof t == "object" ? JSON.stringify(t) : t}`);
    f._graphy_reader = this;
  }
  _error(e) {
    throw this._b_destroyed = !0, new Error(e);
  }
  bind(e) {
    let t = this.transform;
    e.error && t.on("error", e.error), e.comment && t.on("comment", e.comment), e.read && t.once("read", e.read), e.progress && t.on("progress", e.progress), e.eof && t.once("eof", e.eof), e.end && t.once("end", e.end), e.finish && t.once("finish", e.finish), e.data && t.on("data", e.data);
  }
  // begin parsing, keep applying until no more stack bail-outs
  parse() {
    let e = this._f_state();
    for (; typeof e == "function"; )
      e = e.apply(this);
  }
  statement() {
    let e = this.s;
    this.n;
    let t = this.i, s = this._f_data_quad, a = this.create_named_node, n = this.create_named_node_escapeless, d = this.create_languaged_literal, u = this.create_blank_node, x = this._dc_factory.simpleLiteral, E = this._dc_factory.datatypedLiteral, A = this._kt_default_graph;
    for (; ; ) {
      L.lastIndex = t;
      let _ = L.exec(e);
      if (_) {
        t = L.lastIndex;
        let l, m = !1;
        if (_[4]) {
          let r = _[4].slice(1);
          l = n(r);
        } else if (_[5])
          l = u(_[5]);
        else {
          m = !0;
          let r = _[9];
          if (_[10])
            if (_[11]) {
              let i = this.create_named_node_escapeless(_[11]);
              l = E(r, i);
            } else if (_[12]) {
              let i = _[12].toLowerCase();
              l = d(r, i);
            } else
              l = x(r);
          else {
            this._s_literal = r, this.i = t;
            {
              let c = _[1];
              c || typeof c == "string" ? this._kt_subject = n(c) : this._kt_subject = u(_[2]);
            }
            this._kt_predicate = n(_[3]);
            let i = this.strlit_contents();
            if (i && this.statement !== i)
              return i;
            {
              let c = this._r_clean;
              c.lastIndex = this.i;
              let h = c.exec(e);
              this.emit_comments && this.emit_comments(h[1]), t = c.lastIndex;
              continue;
            }
          }
        }
        let p = A;
        if (m) {
          let r = _[13];
          r || typeof r == "string" ? p = n(r) : _[14] && (p = u(_[14]));
        } else {
          let r = _[6];
          r || typeof r == "string" ? p = n(r) : _[7] && (p = u(_[7]));
        }
        let f;
        {
          let r = _[1];
          r || typeof r == "string" ? f = n(r) : f = u(_[2]);
        }
        let y = _[3];
        s(
          f,
          n(y),
          l,
          p
        ), this.emit_comments && this.emit_comments(_[8] || _[15]);
      } else {
        N.lastIndex = t;
        let l = N.exec(e);
        if (l) {
          t = N.lastIndex;
          let m, p = !1;
          if (l[4]) {
            let i = l[4].slice(1);
            m = a(k.test(i) ? i.replace(b, g) : i);
          } else if (l[5])
            m = u(k.test(l[5]) ? l[5].replace(b, g) : l[5]);
          else {
            p = !0;
            let i = l[9];
            if (l[10])
              if (i = v(i), l[11]) {
                let c = this.create_named_node(l[11]);
                m = E(i, c);
              } else if (l[12]) {
                let c = l[12].toLowerCase();
                m = d(i, c);
              } else
                m = x(i);
            else {
              this._s_literal = i, this.i = t;
              {
                let h = l[1];
                h || typeof h == "string" ? this._kt_subject = a(k.test(h) ? h.replace(b, g) : h) : this._kt_subject = u(l[2]);
              }
              this._kt_predicate = a(k.test(l[3]) ? l[3].replace(b, g) : l[3]);
              let c = this.strlit_contents();
              if (c && this.statement !== c)
                return c;
              {
                let h = this._r_clean;
                h.lastIndex = this.i;
                let R = h.exec(e);
                this.emit_comments && this.emit_comments(R[1]), t = h.lastIndex;
                continue;
              }
            }
          }
          let f = A;
          if (p) {
            let i = l[13];
            i || typeof i == "string" ? f = a(k.test(i) ? i.replace(b, g) : i) : l[14] && (f = u(l[14]));
          } else {
            let i = l[6];
            i || typeof i == "string" ? f = a(k.test(i) ? i.replace(b, g) : i) : l[7] && (f = u(l[7]));
          }
          let y;
          {
            let i = l[1];
            i || typeof i == "string" ? y = a(k.test(i) ? i.replace(b, g) : i) : y = u(l[2]);
          }
          let r = l[3];
          s(
            y,
            a(k.test(r) ? r.replace(b, g) : r),
            m,
            f
          ), this.emit_comments && this.emit_comments(l[8] || l[15]);
        } else if (j.lastIndex = t, j.exec(e))
          t = j.lastIndex, this._error(`Failed to read statement:
\`${e.substr(t, 80).replace(/\n/g, "⏎")} [...]\`
 ^ starting here`);
        else
          break;
      }
    }
    return this.s = e.substr(t), this._f_state = this.statement, 1;
  }
  strlit_contents() {
    let { s: e, n: t, i: s } = this;
    D.lastIndex = s;
    let a = D.exec(e);
    if (a) {
      let n = a.index, d = e.slice(s, n);
      return this._s_literal += v(d), this.i = n + a[0].length, this._b_trim_start = !0, this.datatype_or_langtag() || this.statement;
    } else {
      let n = e.slice(s), [d, u] = Y(n);
      this._s_literal += d, this.i = s = t - u.length, this._b_trim_start = !1;
    }
    return s < this.n && s === 0 && this.n > this.max_token_length ? this.parse_error("strlit_contents") : (this._f_state = this.strlit_contents, this.s = e.slice(s), this.eos && this.eos(), 1);
  }
  // parse state for datatype_or_langtag
  datatype_or_langtag() {
    let { s: e, n: t, i: s } = this, a = e[s];
    for (; s < t; )
      if (a === "^")
        if (s + 2 < t)
          if (e[s + 1] === "^") {
            I.lastIndex = s + 2;
            let n = I.exec(e);
            if (n) {
              this.i = I.lastIndex;
              let d = n[1].replace(b, g), u = this.create_named_node(d);
              return this._kt_object = this._dc_factory.datatypedLiteral(this._s_literal, u), this._s_literal = "", this.post_object();
            } else
              break;
          } else
            this._error(`Failed to read token after literal:
\`${e.substr(s + 1, 80).replace(/\n/g, "⏎")} [...]\`
 ^ starting here`);
        else
          break;
      else if (a === "@") {
        T.lastIndex = s;
        let n = T.exec(e);
        if (n)
          return this.i = T.lastIndex, this._kt_object = this._dc_factory.languagedLiteral(this._s_literal, n[1]), this._s_literal = "", this.post_object();
        break;
      } else {
        if (a === "<" || a === "_")
          return this._kt_object = this._dc_factory.simpleLiteral(this._s_literal), this._s_literal = "", this.graph();
        if (a === ".") {
          let n = this._dc_factory.simpleLiteral(this._s_literal);
          return this._s_literal = "", this.i = s + 1, this._f_data_quad(this._kt_subject, this._kt_predicate, n, this._kt_default_graph), this.statement;
        } else
          break;
      }
    return this.i = s, s < this.n && s === 0 && this.n > this.max_token_length ? this.parse_error("datatype_or_langtag") : (this._f_state = this.datatype_or_langtag, this.s = e.slice(s), this.eos && this.eos(), 1);
  }
  statement_term() {
    let { s: e, n: t, i: s } = this, a = e.indexOf(".", s);
    return a > -1 ? (this._b_trim_start = !0, this.i = a + 1, this.statement) : (/^\s*$/.test(e.slice(s)) || this.parse_error("statement_term"), this._b_trim_start = !1, this._f_state = this.statement_term, this.s = e.slice(s), this.eos && this.eos(), 1);
  }
  post_object() {
    let { s: e, n: t, i: s } = this;
    if (S.lastIndex = s, S.exec(e), s = S.lastIndex, s >= t)
      return this._f_state = this.post_object, this.s = e.slice(s), this.eos && this.eos(), 1;
    switch (e[s]) {
      case ".":
        return this.i = s + 1, this._f_data_quad(this._kt_subject, this._kt_predicate, this._kt_object, this._kt_default_graph), this.statement;
      case "<":
      case "_":
        return this.i = s, this.graph();
      default:
        this.i = s, this.parse_error("post_object");
    }
  }
  graph() {
    let { s: e, n: t, i: s } = this;
    I.lastIndex = s;
    let a = I.exec(e);
    if (a) {
      this.i = I.lastIndex;
      let n = this.create_named_node(a[1]);
      return this._f_data_quad(this._kt_subject, this._kt_predicate, this._kt_object, n), this.statement_term();
    } else {
      O.lastIndex = s;
      let n = O.exec(e);
      if (n) {
        this.i = O.lastIndex;
        let d = this._dc_factory.blankNode(n[1]);
        return this._f_data_quad(this._kt_subject, this._kt_predicate, this._kt_object, d), this.statement_term();
      }
    }
    return this._f_state = this.graph, this.s = e.slice(s), this.eos && this.eos(), 1;
  }
  parse_error(e) {
    return this._error(`Failed to read ${e}:
\`${this.s.substr(this.i, 80).replace(/\n/g, "⏎")} [...]\`
 ^ starting here`);
  }
  destroy(e) {
    this._f_data_quad = () => {
    }, !e && this._ds_input && this._ds_input.destroy(e), this.transform.demolish(e);
  }
}
var q = function(...o) {
  let e = {};
  if (o.length) {
    let t = o[0];
    if (t && t.input && typeof t.input.string > "u" && !t.input.stream && (t = t.input), typeof t == "string")
      e.input = { string: t };
    else if (t === null)
      e.input = null;
    else if (typeof t.setEncoding == "function")
      e.input = { stream: t };
    else {
      if (typeof t.pipeTo == "function")
        throw new TypeError("Sorry, WHATWG streams are currently not supported :(");
      if (t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]") {
        if (e = t, o.length > 1)
          throw new TypeError(`unexpected argument(s) after config struct: ${o.slice(1)}`);
      } else
        throw new TypeError(`unexpected input type: ${t}`);
    }
    if (o.length > 1 && (Object.assign(e, o[1]), o.length > 2))
      throw new TypeError(`unexpected argument(s) after input and config struct: ${o.slice(2)}`);
  }
  return new te(e).transform;
};
const se = /* @__PURE__ */ P(q), ae = /* @__PURE__ */ M({
  __proto__: null,
  default: se
}, [q]);
export {
  ae as m
};
//# sourceMappingURL=main-DWr02UHk.js.map
