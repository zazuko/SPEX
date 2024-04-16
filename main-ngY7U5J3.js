import { g as T, m as S } from "./index-CbPxOOAJ.js";
import { m as C } from "./main-43NHGzV_.js";
function I(l, e) {
  for (var t = 0; t < e.length; t++) {
    const i = e[t];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const r in i)
        if (r !== "default" && !(r in l)) {
          const s = Object.getOwnPropertyDescriptor(i, r);
          s && Object.defineProperty(l, r, s.get ? s : {
            enumerable: !0,
            get: () => i[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
}
if (typeof queueMicrotask != "function") {
  let l = Promise.resolve();
  try {
    queueMicrotask = (e) => l.then(e).catch((t) => setTimeout(() => {
      throw t;
    }, 0));
  } catch {
  }
}
const u = S, A = C, k = /^([A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}]([A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}.]*[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}])?)?$/u, p = 1, w = 2, E = 4;
class h extends A {
  constructor(e = {}) {
    super(e);
    let {
      prefixes: t = {},
      lists: i = null,
      debug: r = !1,
      style: s = null
    } = e;
    if (Object.assign(this, {
      _b_debug: r,
      _s_indent: "	",
      _b_simplify_default_graph: !1,
      _xc_directives: 0,
      _s_token_prefix: "@prefix"
    }), s) {
      s.indent && (this._s_indent = s.indent.replace(/[^\s]/g, ""));
      let f = s.directives || s.directives;
      if (f)
        switch (f) {
          case "sparql": {
            this._xc_directives = p, this._s_token_prefix = "prefix";
            break;
          }
          case "Sparql": {
            this._xc_directives = p | w, this._s_token_prefix = "Prefix";
            break;
          }
          case "SPARQL": {
            this._xc_directives = p | E, this._s_token_prefix = "PREFIX";
            break;
          }
          case "turtle":
            break;
          case "Turtle": {
            this._xc_directives = w, this._s_token_prefix = "@Prefix";
            break;
          }
          case "TURTLE": {
            this._xc_directives = E, this._s_token_prefix = "@PREFIX";
            break;
          }
          default:
            throw new Error(`Value not understood for 'directives' option: ${f}`);
        }
    }
    i && (this._serialize_list_object = function(f, a) {
      let d = this._transcode_list(f);
      return this._encode_objects(d, a);
    });
    let _ = this._s_token_prefix, n = this._xc_directives & p ? `
` : ` .
`, o = "";
    try {
      for (let f in t) {
        if (!k.test(f))
          throw new Error(`Invlalid prefix id for text/turtle RDF serialization format: '${f}'`);
        o += `${_} ${f}: ${u.namedNode(t[f]).verbose()}${n}`;
      }
    } catch (f) {
      queueMicrotask(() => {
        this.emit("error", f);
      });
    }
    o && this.push(o);
  }
  // serialize prefixes
  _serialize_prefixes(e) {
    let t = this._xc_state === 2 ? `

` : "";
    this._xc_state = 0, this._h_prefixes = { ...this._h_prefixes };
    let i = this._s_token_prefix, r = this._xc_directives & p ? `
` : ` .
`;
    for (let s in e) {
      if (!k.test(s))
        throw new Error(`Invlalid prefix id for text/turtle RDF serialization format: '${s}'`);
      t += `${i} ${s}: ${u.namedNode(e[s]).verbose()}${r}`, this._h_prefixes[s] = e[s];
    }
    return u.cache_prefixes(this._h_prefixes), t;
  }
  // serialize c3 hash
  _serialize_c3(e) {
    let {
      _h_prefixes: t,
      _s_indent: i
    } = this, r = this._xc_state !== 2 ? `
` : "";
    this._xc_state = 2;
    let s = "", _ = null;
    for (let n in e) {
      if (n[0] === "`") {
        let c = this._apply_directive(n, e[n]);
        c.write && (r += s + c.write, s = ""), c.exit && (_ = c.exit);
        continue;
      }
      let o = r.length;
      r += s + u.c1_node(n, t).terse(t) + " ";
      let f = "", a = "", d = e[n], $ = r.length, y = !0, m = null;
      for (let c in d) {
        if (c[0] === "`") {
          let x = this._apply_directive(c, d[c]);
          x.write && (r += (f ? a : `
`) + i + x.write, a = "", f = i), x.exit && (m = x.exit);
          continue;
        }
        let P = d[c], b = this._encode_objects(P);
        if (!b)
          continue;
        if (y = !1, c[0] === "_" && c[1] === ":")
          throw new Error(`Cannot use blank node in predicate position of c3 hash; subject:'${n}', predicate:'${c}'`);
        let g = u.c1_named_node(c, t), R = g.isRdfTypeAlias ? "a" : g.terse(t);
        r += a + f + R + " " + b, this._xc_state = 2, a = ` ;
`, f = i, m && m();
      }
      if (y) {
        r = r.slice(0, o) + r.slice($);
        continue;
      }
      s = `
`, r += `${a ? " " : f}.
`, _ && _();
    }
    return r += `
`, r;
  }
  // write objects
  _encode_objects(e, t = 1) {
    let {
      _h_prefixes: i,
      _s_indent: r,
      _hm_coercions: s
    } = this;
    switch (typeof e) {
      case "string":
        return u.c1(e, i).terse(i);
      case "number":
        return u.number(e).terse(i);
      case "boolean":
        return u.boolean(e).terse(i);
      case "object": {
        if (e === null)
          throw new Error("Refusing to serialize null value given as an object of quad");
        if (Array.isArray(e) || e instanceof Set) {
          let _ = "", n = "";
          for (let o of e)
            Array.isArray(o) ? _ += n + this._serialize_list_object(o, t) : _ += n + this._encode_objects(o, t), n = ", ";
          return _;
        } else if (Object === e.constructor) {
          let _ = "[", n = !0, o = null;
          for (let f in e) {
            if (n = !1, _ += `
` + r.repeat(1 + t), f[0] === "`") {
              let a = this._apply_directive(f, e[f]);
              a.write && (_ += a.write), a.exit && (o = a.exit);
              continue;
            }
            _ += u.c1(f, i).terse(i) + " " + this._encode_objects(e[f], t + 1) + " ;";
          }
          return _ += (n ? "" : `
` + r.repeat(t)) + "]", o && o(), _;
        } else {
          if (s.has(e.constructor))
            return s.get(e.constructor).apply(this, [e, t]).terse(i);
          if (e.isGraphyTerm)
            return e.terse(i);
          if (e.termType)
            return u.from.term(e).terse(i);
        }
      }
      default:
        throw new Error(`Bad type for RDF object: [${typeof e}] ${e && e.constructor}`);
    }
  }
  // serialize collection object
  _serialize_collection_object(e, t) {
    let i = this._s_indent, r = "(";
    for (let s of e) {
      let _ = "";
      Array.isArray(s) ? _ = this._serialize_collection_object(s, t + 1) : _ = this._encode_objects(s, t + 1), r += `
` + i.repeat(1 + t) + _;
    }
    return e.length && (r += `
` + i.repeat(t)), r += ")", r;
  }
  // rdfjs quad
  _serialize_quad(e) {
    let t = this._h_prefixes, i = u.from.quad(e);
    this._s_push += (this._xc_state !== 2 ? `
` : "") + i.subject.terse(t) + " " + i.predicate.terse(t) + " " + i.object.terse(t) + ` .

`, this._xc_state = 2;
  }
}
Object.assign(h.prototype, {
  anonymous_blank_nodes: !0,
  _serialize_c3r: h.prototype._serialize_c3,
  _serialize_c4r: h.prototype._serialize_c4,
  _serialize_comment: A.prototype._serialize_hash_comment,
  _serialize_list_object: h.prototype._serialize_collection_object
});
var v = function(l) {
  return new h(l);
};
const j = /* @__PURE__ */ T(v), O = /* @__PURE__ */ I({
  __proto__: null,
  default: j
}, [v]);
export {
  O as m
};
//# sourceMappingURL=main-ngY7U5J3.js.map
