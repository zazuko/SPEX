import { g as z, m as O } from "./index-BhI9pmWG.js";
import { m as F } from "./main-DzboNW0Y.js";
function G(x, e) {
  for (var i = 0; i < e.length; i++) {
    const s = e[i];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const t in s)
        if (t !== "default" && !(t in x)) {
          const r = Object.getOwnPropertyDescriptor(s, t);
          r && Object.defineProperty(x, t, r.get ? r : {
            enumerable: !0,
            get: () => s[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(x, Symbol.toStringTag, { value: "Module" }));
}
if (typeof queueMicrotask != "function") {
  let x = Promise.resolve();
  try {
    queueMicrotask = (e) => x.then(e).catch((i) => setTimeout(() => {
      throw i;
    }, 0));
  } catch {
  }
}
const p = O, I = F, j = /^([A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}]([A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}.]*[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}])?)?$/u, k = 1, T = 2, C = 4;
class E extends I {
  constructor(e = {}) {
    super(e);
    let {
      prefixes: i = {},
      lists: s = null,
      debug: t = !1,
      style: r = null
    } = e;
    Object.assign(this, {
      _b_debug: t,
      _s_indent: "	",
      _b_simplify_default_graph: !1,
      _xc_directives: 0,
      _s_token_prefix: "@prefix"
    });
    let f = "";
    if (r) {
      let _ = r.graph_keyword || r.graphKeyword || r["graph-keyword"];
      if (_)
        if (_ === !0)
          f = "GRAPH ";
        else {
          if (typeof _ != "string")
            throw new TypeError(`Invalid argument type given for 'graph' token: ${_}`);
          if (/^graph$/i.test(_))
            f = _ + " ";
          else
            throw new Error(`Graph token must equal case-insensitive "GRAPH"; found: "${_}"`);
        }
      let d = r.simplify_default_graph || r.simplifyDefaultGraph || r["simplify-default-graph"];
      d && (this._b_simplify_default_graph = !!d), r.indent && (this._s_indent = r.indent.replace(/[^\s]/g, ""));
      let h = r.directives || r.directives;
      if (h)
        switch (h) {
          case "sparql": {
            this._xc_directives = k, this._s_token_prefix = "prefix";
            break;
          }
          case "Sparql": {
            this._xc_directives = k | T, this._s_token_prefix = "Prefix";
            break;
          }
          case "SPARQL": {
            this._xc_directives = k | C, this._s_token_prefix = "PREFIX";
            break;
          }
          case "turtle":
            break;
          case "Turtle": {
            this._xc_directives = T, this._s_token_prefix = "@Prefix";
            break;
          }
          case "TURTLE": {
            this._xc_directives = C, this._s_token_prefix = "@PREFIX";
            break;
          }
          default:
            throw new Error(`Value not understood for 'directives' option: ${h}`);
        }
    }
    this._s_graph_keyword = f, s && (this._serialize_list_object = function(_, d) {
      let h = this._transcode_list(_);
      return this._encode_objects(h, d);
    });
    let a = this._s_token_prefix, l = this._xc_directives & k ? `
` : ` .
`, n = "";
    try {
      for (let _ in i) {
        if (!j.test(_))
          throw new Error(`Invlalid prefix id for application/trig RDF serialization format: '${_}'`);
        n += `${a} ${_}: ${p.namedNode(i[_]).verbose()}${l}`;
      }
    } catch (_) {
      queueMicrotask(() => {
        this.emit("error", _);
      });
    }
    n && this.push(n);
  }
  // serialize prefixes
  _serialize_prefixes(e) {
    let i = this._xc_state === 2 ? `

` : "";
    this._xc_state = 0, this._h_prefixes = { ...this._h_prefixes };
    let s = this._s_token_prefix, t = this._xc_directives & k ? `
` : ` .
`;
    for (let r in e) {
      if (!j.test(r))
        throw new Error(`Invlalid prefix id for application/trig RDF serialization format: '${r}'`);
      i += `${s} ${r}: ${p.namedNode(e[r]).verbose()}${t}`, this._h_prefixes[r] = e[r];
    }
    return p.cache_prefixes(this._h_prefixes), i;
  }
  // serialize c3 hash
  _serialize_c3(e) {
    let {
      _h_prefixes: i,
      _s_indent: s
    } = this, t = this._xc_state !== 2 ? `
` : "";
    this._xc_state = 2;
    let r = "", f = null;
    for (let a in e) {
      if (a[0] === "`") {
        let c = this._apply_directive(a, e[a]);
        c.write && (t += r + c.write, r = ""), c.exit && (f = c.exit);
        continue;
      }
      let l = t.length;
      t += r + p.c1_node(a, i).terse(i) + " ";
      let n = "", _ = "", d = e[a], h = t.length, w = !0, o = null;
      for (let c in d) {
        if (c[0] === "`") {
          let m = this._apply_directive(c, d[c]);
          m.write && (t += (n ? _ : `
`) + s + m.write, _ = "", n = s), m.exit && (o = m.exit);
          continue;
        }
        let g = d[c], y = this._encode_objects(g);
        if (!y)
          continue;
        if (w = !1, c[0] === "_" && c[1] === ":")
          throw new Error(`Cannot use blank node in predicate position of c3 hash; subject:'${a}', predicate:'${c}'`);
        let b = p.c1_named_node(c, i), v = b.isRdfTypeAlias ? "a" : b.terse(i);
        t += _ + n + v + " " + y, this._xc_state = 2, _ = ` ;
`, n = s, o && o();
      }
      if (w) {
        t = t.slice(0, l) + t.slice(h);
        continue;
      }
      r = `
`, t += `${_ ? " " : n}.
`, f && f();
    }
    return t += `
`, t;
  }
  // serialize c4 hash
  _serialize_c4(e) {
    let {
      _h_prefixes: i,
      _s_indent: s
    } = this, t = this._xc_state !== 2 ? `
` : "";
    this._xc_state = 2;
    let r = this._b_simplify_default_graph, f = this._s_graph_keyword, a = null;
    for (let l in e) {
      if (l[0] === "`") {
        let o = this._apply_directive(l, e[l]);
        o.write && (t += o.write), o.exit && (a = o.exit);
        continue;
      }
      let n = p.c1_node(l, i).terse(i);
      t += n ? f + n + ` {
` : r ? "" : f + `{
`;
      let _ = !n && r ? "" : s;
      this._xc_state = 2;
      let d = e[l], h = "", w = null;
      for (let o in d) {
        if (o[0] === "`") {
          let u = this._apply_directive(o, d[o]);
          u.write && (t += h + _ + u.write, h = ""), u.exit && (w = u.exit);
          continue;
        }
        let c = t.length;
        t += h + _ + p.c1_node(o, i).terse(i) + " ";
        let g = "", y = "", b = d[o], v = t.length, m = !0, A = null;
        for (let u in b) {
          if (u[0] === "`") {
            let $ = this._apply_directive(u, b[u]);
            $.write && (t += (g ? y : `
`) + s + _ + $.write, y = "", g = s + _), $.exit && (A = $.exit);
            continue;
          }
          let D = b[u], R = this._encode_objects(D);
          if (!R)
            continue;
          if (m = !1, u[0] === "_" && u[1] === ":")
            throw new Error(`Cannot use blank node in predicate position of c4 hash; graph:'${l}', subject:'${o}', predicate:'${u}'`);
          let P = p.c1_named_node(u, i), q = P.isRdfTypeAlias ? "a" : P.terse(i);
          t += y + g + q + " " + R, this._xc_state = 2, y = ` ;
`, g = s + _, A && A();
        }
        if (m) {
          t = t.slice(0, c) + t.slice(v);
          continue;
        }
        h = `
`, t += `${y ? " " : g}.
`, w && w();
      }
      t += (n || !r ? `}
` : "") + `
`, a && a();
    }
    return t;
  }
  // write objects
  _encode_objects(e, i = 1) {
    let {
      _h_prefixes: s,
      _s_indent: t,
      _hm_coercions: r
    } = this;
    switch (typeof e) {
      case "string":
        return p.c1(e, s).terse(s);
      case "number":
        return p.number(e).terse(s);
      case "boolean":
        return p.boolean(e).terse(s);
      case "object": {
        if (e === null)
          throw new Error("Refusing to serialize null value given as an object of quad");
        if (Array.isArray(e) || e instanceof Set) {
          let f = "", a = "";
          for (let l of e)
            Array.isArray(l) ? f += a + this._serialize_list_object(l, i) : f += a + this._encode_objects(l, i), a = ", ";
          return f;
        } else if (Object === e.constructor) {
          let f = "[", a = !0, l = null;
          for (let n in e) {
            if (a = !1, f += `
` + t.repeat(2 + i), n[0] === "`") {
              let _ = this._apply_directive(n, e[n]);
              _.write && (f += _.write), _.exit && (l = _.exit);
              continue;
            }
            f += p.c1(n, s).terse(s) + " " + this._encode_objects(e[n], i + 1) + " ;";
          }
          return f += (a ? "" : `
` + t.repeat(1 + i)) + "]", l && l(), f;
        } else {
          if (r.has(e.constructor))
            return r.get(e.constructor).apply(this, [e, i]).terse(s);
          if (e.isGraphyTerm)
            return e.terse(s);
          if (e.termType)
            return p.from.term(e).terse(s);
        }
      }
      default:
        throw new Error(`Bad type for RDF object: [${typeof e}] ${e && e.constructor}`);
    }
  }
  // serialize collection object
  _serialize_collection_object(e, i) {
    let s = this._s_indent, t = "(";
    for (let r of e) {
      let f = "";
      Array.isArray(r) ? f = this._serialize_collection_object(r, i + 1) : f = this._encode_objects(r, i + 1), t += `
` + s.repeat(2 + i) + f;
    }
    return e.length && (t += `
` + s.repeat(1 + i)), t += ")", t;
  }
  // rdfjs quad
  _serialize_quad(e) {
    let i = this._h_prefixes, s = p.from.quad(e), t = s.graph.terse(i);
    this._s_push += (this._xc_state !== 2 ? `
` : "") + this._s_graph_keyword + (t ? t + " " : "") + `{
	` + s.subject.terse(i) + " " + s.predicate.terse(i) + " " + s.object.terse(i) + ` .
}

`, this._xc_state = 2;
  }
}
Object.assign(E.prototype, {
  anonymous_blank_nodes: !0,
  _serialize_c3r: E.prototype._serialize_c3,
  _serialize_c4r: E.prototype._serialize_c4,
  _serialize_comment: I.prototype._serialize_hash_comment,
  _serialize_list_object: E.prototype._serialize_collection_object
});
var S = function(x) {
  return new E(x);
};
const M = /* @__PURE__ */ z(S), N = /* @__PURE__ */ G({
  __proto__: null,
  default: M
}, [S]);
export {
  N as m
};
//# sourceMappingURL=main-DEjxPe0c.js.map
