import { c as Qs, p as Ys, k as Zs, g as el, a as yn, e as zn, b as jt, d as Lt, f as tl, l as nl, S as rl } from "./index-CbPxOOAJ.js";
import { c as il } from "./canonicalize-CTXFGn-Q.js";
var va = {}, Ri = class _a {
  /**
   * Creates a new IdentifierIssuer. A IdentifierIssuer issues unique
   * identifiers, keeping track of any previously issued identifiers.
   *
   * @param prefix the prefix to use ('<prefix><counter>').
   * @param existing an existing Map to use.
   * @param counter the counter to use.
   */
  constructor(t, n = /* @__PURE__ */ new Map(), r = 0) {
    this.prefix = t, this._existing = n, this.counter = r;
  }
  /**
   * Copies this IdentifierIssuer.
   *
   * @return a copy of this IdentifierIssuer.
   */
  clone() {
    const { prefix: t, _existing: n, counter: r } = this;
    return new _a(t, new Map(n), r);
  }
  /**
   * Gets the new identifier for the given old identifier, where if no old
   * identifier is given a new identifier will be generated.
   *
   * @param [old] the old identifier to get the new identifier for.
   *
   * @return the new identifier.
   */
  getId(t) {
    const n = t && this._existing.get(t);
    if (n)
      return n;
    const r = this.prefix + this.counter;
    return this.counter++, t && this._existing.set(t, r), r;
  }
  /**
   * Returns true if the given old identifer has already been assigned a new
   * identifier.
   *
   * @param old the old identifier to check.
   *
   * @return true if the old identifier has been assigned a new identifier,
   *   false if not.
   */
  hasId(t) {
    return this._existing.has(t);
  }
  /**
   * Returns all of the IDs that have been issued new IDs in the order in
   * which they were issued new IDs.
   *
   * @return the list of old IDs that has been issued new IDs in order.
   */
  getOldIds() {
    return [...this._existing.keys()];
  }
};
(function(e, t) {
  if (e.setImmediate)
    return;
  var n = 1, r = {}, i = !1, a = e.document, o;
  function s(S) {
    typeof S != "function" && (S = new Function("" + S));
    for (var v = new Array(arguments.length - 1), R = 0; R < v.length; R++)
      v[R] = arguments[R + 1];
    var x = { callback: S, args: v };
    return r[n] = x, o(n), n++;
  }
  function d(S) {
    delete r[S];
  }
  function c(S) {
    var v = S.callback, R = S.args;
    switch (R.length) {
      case 0:
        v();
        break;
      case 1:
        v(R[0]);
        break;
      case 2:
        v(R[0], R[1]);
        break;
      case 3:
        v(R[0], R[1], R[2]);
        break;
      default:
        v.apply(t, R);
        break;
    }
  }
  function h(S) {
    if (i)
      setTimeout(h, 0, S);
    else {
      var v = r[S];
      if (v) {
        i = !0;
        try {
          c(v);
        } finally {
          d(S), i = !1;
        }
      }
    }
  }
  function p() {
    o = function(S) {
      Ys.nextTick(function() {
        h(S);
      });
    };
  }
  function u() {
    if (e.postMessage && !e.importScripts) {
      var S = !0, v = e.onmessage;
      return e.onmessage = function() {
        S = !1;
      }, e.postMessage("", "*"), e.onmessage = v, S;
    }
  }
  function l() {
    var S = "setImmediate$" + Math.random() + "$", v = function(R) {
      R.source === e && typeof R.data == "string" && R.data.indexOf(S) === 0 && h(+R.data.slice(S.length));
    };
    e.addEventListener ? e.addEventListener("message", v, !1) : e.attachEvent("onmessage", v), o = function(R) {
      e.postMessage(S + R, "*");
    };
  }
  function f() {
    var S = new MessageChannel();
    S.port1.onmessage = function(v) {
      var R = v.data;
      h(R);
    }, o = function(v) {
      S.port2.postMessage(v);
    };
  }
  function y() {
    var S = a.documentElement;
    o = function(v) {
      var R = a.createElement("script");
      R.onreadystatechange = function() {
        h(v), R.onreadystatechange = null, S.removeChild(R), R = null;
      }, S.appendChild(R);
    };
  }
  function b() {
    o = function(S) {
      setTimeout(h, 0, S);
    };
  }
  var m = Object.getPrototypeOf && Object.getPrototypeOf(e);
  m = m && m.setTimeout ? m : e, {}.toString.call(e.process) === "[object process]" ? p() : u() ? l() : e.MessageChannel ? f() : a && "onreadystatechange" in a.createElement("script") ? y() : b(), m.setImmediate = s, m.clearImmediate = d;
})(typeof self > "u" ? typeof window > "u" ? Qs : window : self);
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
const yr = self.crypto || self.msCrypto;
var Xn = class {
  /**
   * Creates a new MessageDigest.
   *
   * @param algorithm the algorithm to use.
   */
  constructor(t) {
    if (!(yr && yr.subtle))
      throw new Error("crypto.subtle not found.");
    if (t === "sha256")
      this.algorithm = { name: "SHA-256" };
    else if (t === "sha1")
      this.algorithm = { name: "SHA-1" };
    else
      throw new Error(`Unsupported algorithm "${t}".`);
    this._content = "";
  }
  update(t) {
    this._content += t;
  }
  async digest() {
    const t = new TextEncoder().encode(this._content), n = new Uint8Array(
      await yr.subtle.digest(this.algorithm, t)
    );
    let r = "";
    for (let i = 0; i < n.length; ++i)
      r += n[i].toString(16).padStart(2, "0");
    return r;
  }
};
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Sa = class {
  /**
   * A Permuter iterates over all possible permutations of the given array
   * of elements.
   *
   * @param list the array of elements to iterate over.
   */
  constructor(t) {
    this.current = t.sort(), this.done = !1, this.dir = /* @__PURE__ */ new Map();
    for (let n = 0; n < t.length; ++n)
      this.dir.set(t[n], !0);
  }
  /**
   * Returns true if there is another permutation.
   *
   * @return true if there is another permutation, false if not.
   */
  hasNext() {
    return !this.done;
  }
  /**
   * Gets the next permutation. Call hasNext() to ensure there is another one
   * first.
   *
   * @return the next permutation.
   */
  next() {
    const { current: t, dir: n } = this, r = t.slice();
    let i = null, a = 0;
    const o = t.length;
    for (let s = 0; s < o; ++s) {
      const d = t[s], c = n.get(d);
      (i === null || d > i) && (c && s > 0 && d > t[s - 1] || !c && s < o - 1 && d > t[s + 1]) && (i = d, a = s);
    }
    if (i === null)
      this.done = !0;
    else {
      const s = n.get(i) ? a - 1 : a + 1;
      t[a] = t[s], t[s] = i;
      for (const d of t)
        d > i && n.set(d, !n.get(d));
    }
    return r;
  }
};
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
const ol = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", br = ol + "langString", wr = "http://www.w3.org/2001/XMLSchema#string", Pe = "NamedNode", wt = "BlankNode", Ln = "Literal", eo = "DefaultGraph", Vt = {};
(() => {
  const e = "(?:<([^:]+:[^>]*)>)", n = "A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�" + "_", r = n + "0-9-·̀-ͯ‿-⁀", a = "(_:(?:[" + n + "0-9])(?:(?:[" + r + ".])*(?:[" + r + "]))?)", o = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"', s = "(?:\\^\\^" + e + ")", c = "(?:" + o + "(?:" + s + "|" + "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))" + ")?)", h = "[ \\t]+", p = "[ \\t]*", u = "(?:" + e + "|" + a + ")" + h, l = e + h, f = "(?:" + e + "|" + a + "|" + c + ")" + p, y = "(?:\\.|(?:(?:" + e + "|" + a + ")" + p + "\\.))";
  Vt.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, Vt.empty = new RegExp("^" + p + "$"), Vt.quad = new RegExp(
    "^" + p + u + l + f + y + p + "$"
  );
})();
var Ii = class kn {
  /**
   * Parses RDF in the form of N-Quads.
   *
   * @param input the N-Quads input to parse.
   *
   * @return an RDF dataset (an array of quads per http://rdf.js.org/).
   */
  static parse(t) {
    const n = [], r = {}, i = t.split(Vt.eoln);
    let a = 0;
    for (const o of i) {
      if (a++, Vt.empty.test(o))
        continue;
      const s = o.match(Vt.quad);
      if (s === null)
        throw new Error("N-Quads parse error on line " + a + ".");
      const d = { subject: null, predicate: null, object: null, graph: null };
      if (s[1] !== void 0 ? d.subject = { termType: Pe, value: s[1] } : d.subject = { termType: wt, value: s[2] }, d.predicate = { termType: Pe, value: s[3] }, s[4] !== void 0 ? d.object = { termType: Pe, value: s[4] } : s[5] !== void 0 ? d.object = { termType: wt, value: s[5] } : (d.object = {
        termType: Ln,
        value: void 0,
        datatype: {
          termType: Pe
        }
      }, s[7] !== void 0 ? d.object.datatype.value = s[7] : s[8] !== void 0 ? (d.object.datatype.value = br, d.object.language = s[8]) : d.object.datatype.value = wr, d.object.value = dl(s[6])), s[9] !== void 0 ? d.graph = {
        termType: Pe,
        value: s[9]
      } : s[10] !== void 0 ? d.graph = {
        termType: wt,
        value: s[10]
      } : d.graph = {
        termType: eo,
        value: ""
      }, !(d.graph.value in r))
        r[d.graph.value] = [d], n.push(d);
      else {
        let c = !0;
        const h = r[d.graph.value];
        for (const p of h)
          if (al(p, d)) {
            c = !1;
            break;
          }
        c && (h.push(d), n.push(d));
      }
    }
    return n;
  }
  /**
   * Converts an RDF dataset to N-Quads.
   *
   * @param dataset (array of quads) the RDF dataset to convert.
   *
   * @return the N-Quads string.
   */
  static serialize(t) {
    Array.isArray(t) || (t = kn.legacyDatasetToQuads(t));
    const n = [];
    for (const r of t)
      n.push(kn.serializeQuad(r));
    return n.sort().join("");
  }
  /**
   * Converts RDF quad components to an N-Quad string (a single quad).
   *
   * @param {Object} s - N-Quad subject component.
   * @param {Object} p - N-Quad predicate component.
   * @param {Object} o - N-Quad object component.
   * @param {Object} g - N-Quad graph component.
   *
   * @return {string} the N-Quad.
   */
  static serializeQuadComponents(t, n, r, i) {
    let a = "";
    return t.termType === Pe ? a += `<${t.value}>` : a += `${t.value}`, a += ` <${n.value}> `, r.termType === Pe ? a += `<${r.value}>` : r.termType === wt ? a += r.value : (a += `"${ll(r.value)}"`, r.datatype.value === br ? r.language && (a += `@${r.language}`) : r.datatype.value !== wr && (a += `^^<${r.datatype.value}>`)), i.termType === Pe ? a += ` <${i.value}>` : i.termType === wt && (a += ` ${i.value}`), a += ` .
`, a;
  }
  /**
   * Converts an RDF quad to an N-Quad string (a single quad).
   *
   * @param quad the RDF quad convert.
   *
   * @return the N-Quad string.
   */
  static serializeQuad(t) {
    return kn.serializeQuadComponents(
      t.subject,
      t.predicate,
      t.object,
      t.graph
    );
  }
  /**
   * Converts a legacy-formatted dataset to an array of quads dataset per
   * http://rdf.js.org/.
   *
   * @param dataset the legacy dataset to convert.
   *
   * @return the array of quads dataset.
   */
  static legacyDatasetToQuads(t) {
    const n = [], r = {
      "blank node": wt,
      IRI: Pe,
      literal: Ln
    };
    for (const i in t)
      t[i].forEach((o) => {
        const s = {};
        for (const d in o) {
          const c = o[d], h = {
            termType: r[c.type],
            value: c.value
          };
          h.termType === Ln && (h.datatype = {
            termType: Pe
          }, "datatype" in c && (h.datatype.value = c.datatype), "language" in c ? ("datatype" in c || (h.datatype.value = br), h.language = c.language) : "datatype" in c || (h.datatype.value = wr)), s[d] = h;
        }
        i === "@default" ? s.graph = {
          termType: eo,
          value: ""
        } : s.graph = {
          termType: i.startsWith("_:") ? wt : Pe,
          value: i
        }, n.push(s);
      });
    return n;
  }
};
function al(e, t) {
  return !(e.subject.termType === t.subject.termType && e.object.termType === t.object.termType) || !(e.subject.value === t.subject.value && e.predicate.value === t.predicate.value && e.object.value === t.object.value) ? !1 : e.object.termType !== Ln ? !0 : e.object.datatype.termType === t.object.datatype.termType && e.object.language === t.object.language && e.object.datatype.value === t.object.datatype.value;
}
const sl = /["\\\n\r]/g;
function ll(e) {
  return e.replace(sl, function(t) {
    switch (t) {
      case '"':
        return '\\"';
      case "\\":
        return "\\\\";
      case `
`:
        return "\\n";
      case "\r":
        return "\\r";
    }
  });
}
const cl = /(?:\\([tbnrf"'\\]))|(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;
function dl(e) {
  return e.replace(cl, function(t, n, r, i) {
    if (n)
      switch (n) {
        case "t":
          return "	";
        case "b":
          return "\b";
        case "n":
          return `
`;
        case "r":
          return "\r";
        case "f":
          return "\f";
        case '"':
          return '"';
        case "'":
          return "'";
        case "\\":
          return "\\";
      }
    if (r)
      return String.fromCharCode(parseInt(r, 16));
    if (i)
      throw new Error("Unsupported U escape");
  });
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
const to = Ri, ul = Xn, fl = Sa, no = Ii;
var Ea = class {
  constructor({
    createMessageDigest: t = () => new ul("sha256"),
    canonicalIdMap: n = /* @__PURE__ */ new Map(),
    maxDeepIterations: r = 1 / 0
  } = {}) {
    this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new to("_:c14n", n), this.createMessageDigest = t, this.maxDeepIterations = r, this.quads = null, this.deepIterations = null;
  }
  // 4.4) Normalization Algorithm
  async main(t) {
    this.deepIterations = /* @__PURE__ */ new Map(), this.quads = t;
    for (const d of t)
      this._addBlankNodeQuadInfo({ quad: d, component: d.subject }), this._addBlankNodeQuadInfo({ quad: d, component: d.object }), this._addBlankNodeQuadInfo({ quad: d, component: d.graph });
    const n = /* @__PURE__ */ new Map(), r = [...this.blankNodeInfo.keys()];
    let i = 0;
    for (const d of r)
      ++i % 100 === 0 && await this._yield(), await this._hashAndTrackBlankNode({ id: d, hashToBlankNodes: n });
    const a = [...n.keys()].sort(), o = [];
    for (const d of a) {
      const c = n.get(d);
      if (c.length > 1) {
        o.push(c);
        continue;
      }
      const h = c[0];
      this.canonicalIssuer.getId(h);
    }
    for (const d of o) {
      const c = [];
      for (const h of d) {
        if (this.canonicalIssuer.hasId(h))
          continue;
        const p = new to("_:b");
        p.getId(h);
        const u = await this.hashNDegreeQuads(h, p);
        c.push(u);
      }
      c.sort(hl);
      for (const h of c) {
        const p = h.issuer.getOldIds();
        for (const u of p)
          this.canonicalIssuer.getId(u);
      }
    }
    const s = [];
    for (const d of this.quads) {
      const c = no.serializeQuadComponents(
        this._componentWithCanonicalId(d.subject),
        d.predicate,
        this._componentWithCanonicalId(d.object),
        this._componentWithCanonicalId(d.graph)
      );
      s.push(c);
    }
    return s.sort(), s.join("");
  }
  // 4.6) Hash First Degree Quads
  async hashFirstDegreeQuads(t) {
    const n = [], r = this.blankNodeInfo.get(t), i = r.quads;
    for (const o of i) {
      const s = {
        subject: null,
        predicate: o.predicate,
        object: null,
        graph: null
      };
      s.subject = this.modifyFirstDegreeComponent(
        t,
        o.subject,
        "subject"
      ), s.object = this.modifyFirstDegreeComponent(
        t,
        o.object,
        "object"
      ), s.graph = this.modifyFirstDegreeComponent(
        t,
        o.graph,
        "graph"
      ), n.push(no.serializeQuad(s));
    }
    n.sort();
    const a = this.createMessageDigest();
    for (const o of n)
      a.update(o);
    return r.hash = await a.digest(), r.hash;
  }
  // 4.7) Hash Related Blank Node
  async hashRelatedBlankNode(t, n, r, i) {
    let a;
    this.canonicalIssuer.hasId(t) ? a = this.canonicalIssuer.getId(t) : r.hasId(t) ? a = r.getId(t) : a = this.blankNodeInfo.get(t).hash;
    const o = this.createMessageDigest();
    return o.update(i), i !== "g" && o.update(this.getRelatedPredicate(n)), o.update(a), o.digest();
  }
  // 4.8) Hash N-Degree Quads
  async hashNDegreeQuads(t, n) {
    const r = this.deepIterations.get(t) || 0;
    if (r > this.maxDeepIterations)
      throw new Error(
        `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
      );
    this.deepIterations.set(t, r + 1);
    const i = this.createMessageDigest(), a = await this.createHashToRelated(t, n), o = [...a.keys()].sort();
    for (const s of o) {
      i.update(s);
      let d = "", c;
      const h = new fl(a.get(s));
      let p = 0;
      for (; h.hasNext(); ) {
        const u = h.next();
        ++p % 3 === 0 && await this._yield();
        let l = n.clone(), f = "";
        const y = [];
        let b = !1;
        for (const m of u)
          if (this.canonicalIssuer.hasId(m) ? f += this.canonicalIssuer.getId(m) : (l.hasId(m) || y.push(m), f += l.getId(m)), d.length !== 0 && f > d) {
            b = !0;
            break;
          }
        if (!b) {
          for (const m of y) {
            const S = await this.hashNDegreeQuads(m, l);
            if (f += l.getId(m), f += `<${S.hash}>`, l = S.issuer, d.length !== 0 && f > d) {
              b = !0;
              break;
            }
          }
          b || (d.length === 0 || f < d) && (d = f, c = l);
        }
      }
      i.update(d), n = c;
    }
    return { hash: await i.digest(), issuer: n };
  }
  // helper for modifying component during Hash First Degree Quads
  modifyFirstDegreeComponent(t, n) {
    return n.termType !== "BlankNode" ? n : {
      termType: "BlankNode",
      value: n.value === t ? "_:a" : "_:z"
    };
  }
  // helper for getting a related predicate
  getRelatedPredicate(t) {
    return `<${t.predicate.value}>`;
  }
  // helper for creating hash to related blank nodes map
  async createHashToRelated(t, n) {
    const r = /* @__PURE__ */ new Map(), i = this.blankNodeInfo.get(t).quads;
    let a = 0;
    for (const o of i)
      ++a % 100 === 0 && await this._yield(), await Promise.all([
        this._addRelatedBlankNodeHash({
          quad: o,
          component: o.subject,
          position: "s",
          id: t,
          issuer: n,
          hashToRelated: r
        }),
        this._addRelatedBlankNodeHash({
          quad: o,
          component: o.object,
          position: "o",
          id: t,
          issuer: n,
          hashToRelated: r
        }),
        this._addRelatedBlankNodeHash({
          quad: o,
          component: o.graph,
          position: "g",
          id: t,
          issuer: n,
          hashToRelated: r
        })
      ]);
    return r;
  }
  async _hashAndTrackBlankNode({ id: t, hashToBlankNodes: n }) {
    const r = await this.hashFirstDegreeQuads(t), i = n.get(r);
    i ? i.push(t) : n.set(r, [t]);
  }
  _addBlankNodeQuadInfo({ quad: t, component: n }) {
    if (n.termType !== "BlankNode")
      return;
    const r = n.value, i = this.blankNodeInfo.get(r);
    i ? i.quads.add(t) : this.blankNodeInfo.set(r, { quads: /* @__PURE__ */ new Set([t]), hash: null });
  }
  async _addRelatedBlankNodeHash({ quad: t, component: n, position: r, id: i, issuer: a, hashToRelated: o }) {
    if (!(n.termType === "BlankNode" && n.value !== i))
      return;
    const s = n.value, d = await this.hashRelatedBlankNode(
      s,
      t,
      a,
      r
    ), c = o.get(d);
    c ? c.push(s) : o.set(d, [s]);
  }
  // canonical ids for 7.1
  _componentWithCanonicalId(t) {
    return t.termType === "BlankNode" && !t.value.startsWith(this.canonicalIssuer.prefix) ? {
      termType: "BlankNode",
      value: this.canonicalIssuer.getId(t.value)
    } : t;
  }
  async _yield() {
    return new Promise((t) => setImmediate(t));
  }
};
function hl(e, t) {
  return e.hash < t.hash ? -1 : e.hash > t.hash ? 1 : 0;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
const pl = Xn, gl = Ea;
var yl = class extends gl {
  constructor() {
    super(), this.name = "URGNA2012", this.createMessageDigest = () => new pl("sha1");
  }
  // helper for modifying component during Hash First Degree Quads
  modifyFirstDegreeComponent(t, n, r) {
    return n.termType !== "BlankNode" ? n : r === "graph" ? {
      termType: "BlankNode",
      value: "_:g"
    } : {
      termType: "BlankNode",
      value: n.value === t ? "_:a" : "_:z"
    };
  }
  // helper for getting a related predicate
  getRelatedPredicate(t) {
    return t.predicate.value;
  }
  // helper for creating hash to related blank nodes map
  async createHashToRelated(t, n) {
    const r = /* @__PURE__ */ new Map(), i = this.blankNodeInfo.get(t).quads;
    let a = 0;
    for (const o of i) {
      let s, d;
      if (o.subject.termType === "BlankNode" && o.subject.value !== t)
        d = o.subject.value, s = "p";
      else if (o.object.termType === "BlankNode" && o.object.value !== t)
        d = o.object.value, s = "r";
      else
        continue;
      ++a % 100 === 0 && await this._yield();
      const c = await this.hashRelatedBlankNode(
        d,
        o,
        n,
        s
      ), h = r.get(c);
      h ? h.push(d) : r.set(c, [d]);
    }
    return r;
  }
};
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
const ro = Ri, bl = Xn, wl = Sa, io = Ii;
var Ra = class {
  constructor({
    createMessageDigest: t = () => new bl("sha256"),
    canonicalIdMap: n = /* @__PURE__ */ new Map(),
    maxDeepIterations: r = 1 / 0
  } = {}) {
    this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new ro("_:c14n", n), this.createMessageDigest = t, this.maxDeepIterations = r, this.quads = null, this.deepIterations = null;
  }
  // 4.4) Normalization Algorithm
  main(t) {
    this.deepIterations = /* @__PURE__ */ new Map(), this.quads = t;
    for (const s of t)
      this._addBlankNodeQuadInfo({ quad: s, component: s.subject }), this._addBlankNodeQuadInfo({ quad: s, component: s.object }), this._addBlankNodeQuadInfo({ quad: s, component: s.graph });
    const n = /* @__PURE__ */ new Map(), r = [...this.blankNodeInfo.keys()];
    for (const s of r)
      this._hashAndTrackBlankNode({ id: s, hashToBlankNodes: n });
    const i = [...n.keys()].sort(), a = [];
    for (const s of i) {
      const d = n.get(s);
      if (d.length > 1) {
        a.push(d);
        continue;
      }
      const c = d[0];
      this.canonicalIssuer.getId(c);
    }
    for (const s of a) {
      const d = [];
      for (const c of s) {
        if (this.canonicalIssuer.hasId(c))
          continue;
        const h = new ro("_:b");
        h.getId(c);
        const p = this.hashNDegreeQuads(c, h);
        d.push(p);
      }
      d.sort(ml);
      for (const c of d) {
        const h = c.issuer.getOldIds();
        for (const p of h)
          this.canonicalIssuer.getId(p);
      }
    }
    const o = [];
    for (const s of this.quads) {
      const d = io.serializeQuadComponents(
        this._componentWithCanonicalId({ component: s.subject }),
        s.predicate,
        this._componentWithCanonicalId({ component: s.object }),
        this._componentWithCanonicalId({ component: s.graph })
      );
      o.push(d);
    }
    return o.sort(), o.join("");
  }
  // 4.6) Hash First Degree Quads
  hashFirstDegreeQuads(t) {
    const n = [], r = this.blankNodeInfo.get(t), i = r.quads;
    for (const o of i) {
      const s = {
        subject: null,
        predicate: o.predicate,
        object: null,
        graph: null
      };
      s.subject = this.modifyFirstDegreeComponent(
        t,
        o.subject,
        "subject"
      ), s.object = this.modifyFirstDegreeComponent(
        t,
        o.object,
        "object"
      ), s.graph = this.modifyFirstDegreeComponent(
        t,
        o.graph,
        "graph"
      ), n.push(io.serializeQuad(s));
    }
    n.sort();
    const a = this.createMessageDigest();
    for (const o of n)
      a.update(o);
    return r.hash = a.digest(), r.hash;
  }
  // 4.7) Hash Related Blank Node
  hashRelatedBlankNode(t, n, r, i) {
    let a;
    this.canonicalIssuer.hasId(t) ? a = this.canonicalIssuer.getId(t) : r.hasId(t) ? a = r.getId(t) : a = this.blankNodeInfo.get(t).hash;
    const o = this.createMessageDigest();
    return o.update(i), i !== "g" && o.update(this.getRelatedPredicate(n)), o.update(a), o.digest();
  }
  // 4.8) Hash N-Degree Quads
  hashNDegreeQuads(t, n) {
    const r = this.deepIterations.get(t) || 0;
    if (r > this.maxDeepIterations)
      throw new Error(
        `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
      );
    this.deepIterations.set(t, r + 1);
    const i = this.createMessageDigest(), a = this.createHashToRelated(t, n), o = [...a.keys()].sort();
    for (const s of o) {
      i.update(s);
      let d = "", c;
      const h = new wl(a.get(s));
      for (; h.hasNext(); ) {
        const p = h.next();
        let u = n.clone(), l = "";
        const f = [];
        let y = !1;
        for (const b of p)
          if (this.canonicalIssuer.hasId(b) ? l += this.canonicalIssuer.getId(b) : (u.hasId(b) || f.push(b), l += u.getId(b)), d.length !== 0 && l > d) {
            y = !0;
            break;
          }
        if (!y) {
          for (const b of f) {
            const m = this.hashNDegreeQuads(b, u);
            if (l += u.getId(b), l += `<${m.hash}>`, u = m.issuer, d.length !== 0 && l > d) {
              y = !0;
              break;
            }
          }
          y || (d.length === 0 || l < d) && (d = l, c = u);
        }
      }
      i.update(d), n = c;
    }
    return { hash: i.digest(), issuer: n };
  }
  // helper for modifying component during Hash First Degree Quads
  modifyFirstDegreeComponent(t, n) {
    return n.termType !== "BlankNode" ? n : {
      termType: "BlankNode",
      value: n.value === t ? "_:a" : "_:z"
    };
  }
  // helper for getting a related predicate
  getRelatedPredicate(t) {
    return `<${t.predicate.value}>`;
  }
  // helper for creating hash to related blank nodes map
  createHashToRelated(t, n) {
    const r = /* @__PURE__ */ new Map(), i = this.blankNodeInfo.get(t).quads;
    for (const a of i)
      this._addRelatedBlankNodeHash({
        quad: a,
        component: a.subject,
        position: "s",
        id: t,
        issuer: n,
        hashToRelated: r
      }), this._addRelatedBlankNodeHash({
        quad: a,
        component: a.object,
        position: "o",
        id: t,
        issuer: n,
        hashToRelated: r
      }), this._addRelatedBlankNodeHash({
        quad: a,
        component: a.graph,
        position: "g",
        id: t,
        issuer: n,
        hashToRelated: r
      });
    return r;
  }
  _hashAndTrackBlankNode({ id: t, hashToBlankNodes: n }) {
    const r = this.hashFirstDegreeQuads(t), i = n.get(r);
    i ? i.push(t) : n.set(r, [t]);
  }
  _addBlankNodeQuadInfo({ quad: t, component: n }) {
    if (n.termType !== "BlankNode")
      return;
    const r = n.value, i = this.blankNodeInfo.get(r);
    i ? i.quads.add(t) : this.blankNodeInfo.set(r, { quads: /* @__PURE__ */ new Set([t]), hash: null });
  }
  _addRelatedBlankNodeHash({ quad: t, component: n, position: r, id: i, issuer: a, hashToRelated: o }) {
    if (!(n.termType === "BlankNode" && n.value !== i))
      return;
    const s = n.value, d = this.hashRelatedBlankNode(s, t, a, r), c = o.get(d);
    c ? c.push(s) : o.set(d, [s]);
  }
  // canonical ids for 7.1
  _componentWithCanonicalId({ component: t }) {
    return t.termType === "BlankNode" && !t.value.startsWith(this.canonicalIssuer.prefix) ? {
      termType: "BlankNode",
      value: this.canonicalIssuer.getId(t.value)
    } : t;
  }
};
function ml(e, t) {
  return e.hash < t.hash ? -1 : e.hash > t.hash ? 1 : 0;
}
/*!
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */
const vl = Xn, _l = Ra;
var Sl = class extends _l {
  constructor() {
    super(), this.name = "URGNA2012", this.createMessageDigest = () => new vl("sha1");
  }
  // helper for modifying component during Hash First Degree Quads
  modifyFirstDegreeComponent(t, n, r) {
    return n.termType !== "BlankNode" ? n : r === "graph" ? {
      termType: "BlankNode",
      value: "_:g"
    } : {
      termType: "BlankNode",
      value: n.value === t ? "_:a" : "_:z"
    };
  }
  // helper for getting a related predicate
  getRelatedPredicate(t) {
    return t.predicate.value;
  }
  // helper for creating hash to related blank nodes map
  createHashToRelated(t, n) {
    const r = /* @__PURE__ */ new Map(), i = this.blankNodeInfo.get(t).quads;
    for (const a of i) {
      let o, s;
      if (a.subject.termType === "BlankNode" && a.subject.value !== t)
        s = a.subject.value, o = "p";
      else if (a.object.termType === "BlankNode" && a.object.value !== t)
        s = a.object.value, o = "r";
      else
        continue;
      const d = this.hashRelatedBlankNode(s, a, n, o), c = r.get(d);
      c ? c.push(s) : r.set(d, [s]);
    }
    return r;
  }
};
(function(e) {
  const t = Ea, n = yl, r = Ra, i = Sl;
  let a;
  try {
    a = Zs;
  } catch {
  }
  function o(s) {
    return Array.isArray(s) ? s : e.NQuads.legacyDatasetToQuads(s);
  }
  e.NQuads = Ii, e.IdentifierIssuer = Ri, e._rdfCanonizeNative = function(s) {
    return s && (a = s), a;
  }, e.canonize = async function(s, d) {
    const c = o(s);
    if (d.useNative) {
      if (!a)
        throw new Error("rdf-canonize-native not available");
      if (d.createMessageDigest)
        throw new Error(
          '"createMessageDigest" cannot be used with "useNative".'
        );
      return new Promise((h, p) => a.canonize(c, d, (u, l) => u ? p(u) : h(l)));
    }
    if (d.algorithm === "URDNA2015")
      return new t(d).main(c);
    if (d.algorithm === "URGNA2012") {
      if (d.createMessageDigest)
        throw new Error(
          '"createMessageDigest" cannot be used with "URGNA2012".'
        );
      return new n(d).main(c);
    }
    throw "algorithm" in d ? new Error(
      "Invalid RDF Dataset Canonicalization algorithm: " + d.algorithm
    ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
  }, e._canonizeSync = function(s, d) {
    const c = o(s);
    if (d.useNative) {
      if (!a)
        throw new Error("rdf-canonize-native not available");
      if (d.createMessageDigest)
        throw new Error(
          '"createMessageDigest" cannot be used with "useNative".'
        );
      return a.canonizeSync(c, d);
    }
    if (d.algorithm === "URDNA2015")
      return new r(d).main(c);
    if (d.algorithm === "URGNA2012") {
      if (d.createMessageDigest)
        throw new Error(
          '"createMessageDigest" cannot be used with "URGNA2012".'
        );
      return new i(d).main(c);
    }
    throw "algorithm" in d ? new Error(
      "Invalid RDF Dataset Canonicalization algorithm: " + d.algorithm
    ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
  };
})(va);
var Ai = va;
const Le = {};
var Ae = Le;
Le.isArray = Array.isArray;
Le.isBoolean = (e) => typeof e == "boolean" || Object.prototype.toString.call(e) === "[object Boolean]";
Le.isDouble = (e) => Le.isNumber(e) && (String(e).indexOf(".") !== -1 || Math.abs(e) >= 1e21);
Le.isEmptyObject = (e) => Le.isObject(e) && Object.keys(e).length === 0;
Le.isNumber = (e) => typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
Le.isNumeric = (e) => !isNaN(parseFloat(e)) && isFinite(e);
Le.isObject = (e) => Object.prototype.toString.call(e) === "[object Object]";
Le.isString = (e) => typeof e == "string" || Object.prototype.toString.call(e) === "[object String]";
Le.isUndefined = (e) => typeof e > "u";
const Dt = Ae, nt = {};
var ot = nt;
nt.isSubject = (e) => Dt.isObject(e) && !("@value" in e || "@set" in e || "@list" in e) ? Object.keys(e).length > 1 || !("@id" in e) : !1;
nt.isSubjectReference = (e) => (
  // Note: A value is a subject reference if all of these hold true:
  // 1. It is an Object.
  // 2. It has a single key: @id.
  Dt.isObject(e) && Object.keys(e).length === 1 && "@id" in e
);
nt.isValue = (e) => (
  // Note: A value is a @value if all of these hold true:
  // 1. It is an Object.
  // 2. It has the @value property.
  Dt.isObject(e) && "@value" in e
);
nt.isList = (e) => (
  // Note: A value is a @list if all of these hold true:
  // 1. It is an Object.
  // 2. It has the @list property.
  Dt.isObject(e) && "@list" in e
);
nt.isGraph = (e) => Dt.isObject(e) && "@graph" in e && Object.keys(e).filter((t) => t !== "@id" && t !== "@index").length === 1;
nt.isSimpleGraph = (e) => nt.isGraph(e) && !("@id" in e);
nt.isBlankNode = (e) => {
  if (Dt.isObject(e)) {
    if ("@id" in e) {
      const t = e["@id"];
      return !Dt.isString(t) || t.indexOf("_:") === 0;
    }
    return Object.keys(e).length === 0 || !("@value" in e || "@set" in e || "@list" in e);
  }
  return !1;
};
var ke = class extends Error {
  /**
   * Creates a JSON-LD Error.
   *
   * @param msg the error message.
   * @param type the error type.
   * @param details the error details.
   */
  constructor(t = "An unspecified JSON-LD error occurred.", n = "jsonld.Error", r = {}) {
    super(t), this.name = n, this.message = t, this.details = r;
  }
};
const bn = ot, pe = Ae, Ia = Ai.IdentifierIssuer, El = ke, Rl = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, Il = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, Al = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, xl = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, Nl = /^@[a-zA-Z]+$/, oo = {
  headers: {
    accept: "application/ld+json, application/json"
  }
}, q = {};
var $e = q;
q.IdentifierIssuer = Ia;
q.REGEX_BCP47 = Rl;
q.REGEX_KEYWORD = Nl;
q.clone = function(e) {
  if (e && typeof e == "object") {
    let t;
    if (pe.isArray(e)) {
      t = [];
      for (let n = 0; n < e.length; ++n)
        t[n] = q.clone(e[n]);
    } else if (e instanceof Map) {
      t = /* @__PURE__ */ new Map();
      for (const [n, r] of e)
        t.set(n, q.clone(r));
    } else if (e instanceof Set) {
      t = /* @__PURE__ */ new Set();
      for (const n of e)
        t.add(q.clone(n));
    } else if (pe.isObject(e)) {
      t = {};
      for (const n in e)
        t[n] = q.clone(e[n]);
    } else
      t = e.toString();
    return t;
  }
  return e;
};
q.asArray = function(e) {
  return Array.isArray(e) ? e : [e];
};
q.buildHeaders = (e = {}) => {
  if (Object.keys(e).some(
    (n) => n.toLowerCase() === "accept"
  ))
    throw new RangeError(
      'Accept header may not be specified; only "' + oo.headers.accept + '" is supported.'
    );
  return Object.assign({ Accept: oo.headers.accept }, e);
};
q.parseLinkHeader = (e) => {
  const t = {}, n = e.match(Il);
  for (let r = 0; r < n.length; ++r) {
    let i = n[r].match(Al);
    if (!i)
      continue;
    const a = { target: i[1] }, o = i[2];
    for (; i = xl.exec(o); )
      a[i[1]] = i[2] === void 0 ? i[3] : i[2];
    const s = a.rel || "";
    Array.isArray(t[s]) ? t[s].push(a) : t.hasOwnProperty(s) ? t[s] = [t[s], a] : t[s] = a;
  }
  return t;
};
q.validateTypeValue = (e, t) => {
  if (!pe.isString(e) && !(pe.isArray(e) && e.every((n) => pe.isString(n)))) {
    if (t && pe.isObject(e))
      switch (Object.keys(e).length) {
        case 0:
          return;
        case 1:
          if ("@default" in e && q.asArray(e["@default"]).every((n) => pe.isString(n)))
            return;
      }
    throw new El(
      'Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.',
      "jsonld.SyntaxError",
      { code: "invalid type value", value: e }
    );
  }
};
q.hasProperty = (e, t) => {
  if (e.hasOwnProperty(t)) {
    const n = e[t];
    return !pe.isArray(n) || n.length > 0;
  }
  return !1;
};
q.hasValue = (e, t, n) => {
  if (q.hasProperty(e, t)) {
    let r = e[t];
    const i = bn.isList(r);
    if (pe.isArray(r) || i) {
      i && (r = r["@list"]);
      for (let a = 0; a < r.length; ++a)
        if (q.compareValues(n, r[a]))
          return !0;
    } else if (!pe.isArray(n))
      return q.compareValues(n, r);
  }
  return !1;
};
q.addValue = (e, t, n, r) => {
  if (r = r || {}, "propertyIsArray" in r || (r.propertyIsArray = !1), "valueIsArray" in r || (r.valueIsArray = !1), "allowDuplicate" in r || (r.allowDuplicate = !0), "prependValue" in r || (r.prependValue = !1), r.valueIsArray)
    e[t] = n;
  else if (pe.isArray(n)) {
    n.length === 0 && r.propertyIsArray && !e.hasOwnProperty(t) && (e[t] = []), r.prependValue && (n = n.concat(e[t]), e[t] = []);
    for (let i = 0; i < n.length; ++i)
      q.addValue(e, t, n[i], r);
  } else if (e.hasOwnProperty(t)) {
    const i = !r.allowDuplicate && q.hasValue(e, t, n);
    !pe.isArray(e[t]) && (!i || r.propertyIsArray) && (e[t] = [e[t]]), i || (r.prependValue ? e[t].unshift(n) : e[t].push(n));
  } else
    e[t] = r.propertyIsArray ? [n] : n;
};
q.getValues = (e, t) => [].concat(e[t] || []);
q.removeProperty = (e, t) => {
  delete e[t];
};
q.removeValue = (e, t, n, r) => {
  r = r || {}, "propertyIsArray" in r || (r.propertyIsArray = !1);
  const i = q.getValues(e, t).filter(
    (a) => !q.compareValues(a, n)
  );
  i.length === 0 ? q.removeProperty(e, t) : i.length === 1 && !r.propertyIsArray ? e[t] = i[0] : e[t] = i;
};
q.relabelBlankNodes = (e, t) => {
  t = t || {};
  const n = t.issuer || new Ia("_:b");
  return $n(n, e);
};
q.compareValues = (e, t) => e === t || bn.isValue(e) && bn.isValue(t) && e["@value"] === t["@value"] && e["@type"] === t["@type"] && e["@language"] === t["@language"] && e["@index"] === t["@index"] ? !0 : pe.isObject(e) && "@id" in e && pe.isObject(t) && "@id" in t ? e["@id"] === t["@id"] : !1;
q.compareShortestLeast = (e, t) => e.length < t.length ? -1 : t.length < e.length ? 1 : e === t ? 0 : e < t ? -1 : 1;
function $n(e, t) {
  if (pe.isArray(t))
    for (let n = 0; n < t.length; ++n)
      t[n] = $n(e, t[n]);
  else if (bn.isList(t))
    t["@list"] = $n(e, t["@list"]);
  else if (pe.isObject(t)) {
    bn.isBlankNode(t) && (t["@id"] = e.getId(t["@id"]));
    const n = Object.keys(t).sort();
    for (let r = 0; r < n.length; ++r) {
      const i = n[r];
      i !== "@id" && (t[i] = $n(e, t[i]));
    }
  }
  return t;
}
const Fe = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", nn = "http://www.w3.org/2001/XMLSchema#";
var xi = {
  // TODO: Deprecated and will be removed later. Use LINK_HEADER_CONTEXT.
  LINK_HEADER_REL: "http://www.w3.org/ns/json-ld#context",
  LINK_HEADER_CONTEXT: "http://www.w3.org/ns/json-ld#context",
  RDF: Fe,
  RDF_LIST: Fe + "List",
  RDF_FIRST: Fe + "first",
  RDF_REST: Fe + "rest",
  RDF_NIL: Fe + "nil",
  RDF_TYPE: Fe + "type",
  RDF_PLAIN_LITERAL: Fe + "PlainLiteral",
  RDF_XML_LITERAL: Fe + "XMLLiteral",
  RDF_JSON_LITERAL: Fe + "JSON",
  RDF_OBJECT: Fe + "object",
  RDF_LANGSTRING: Fe + "langString",
  XSD: nn,
  XSD_BOOLEAN: nn + "boolean",
  XSD_DOUBLE: nn + "double",
  XSD_INTEGER: nn + "integer",
  XSD_STRING: nn + "string"
}, mr, ao;
function Aa() {
  return ao || (ao = 1, mr = class {
    /**
     * Creates a simple queue for requesting documents.
     */
    constructor() {
      this._requests = {};
    }
    wrapLoader(t) {
      const n = this;
      return n._loader = t, function() {
        return n.add.apply(n, arguments);
      };
    }
    async add(t) {
      let n = this._requests[t];
      if (n)
        return Promise.resolve(n);
      n = this._requests[t] = this._loader(t);
      try {
        return await n;
      } finally {
        delete this._requests[t];
      }
    }
  }), mr;
}
const Kn = Ae, ge = {};
var pt = ge;
ge.parsers = {
  simple: {
    // RFC 3986 basic parts
    keys: [
      "href",
      "scheme",
      "authority",
      "path",
      "query",
      "fragment"
    ],
    /* eslint-disable-next-line max-len */
    regex: /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/
  },
  full: {
    keys: [
      "href",
      "protocol",
      "scheme",
      "authority",
      "auth",
      "user",
      "password",
      "hostname",
      "port",
      "path",
      "directory",
      "file",
      "query",
      "fragment"
    ],
    /* eslint-disable-next-line max-len */
    regex: /^(([a-zA-Z][a-zA-Z0-9+-.]*):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?(?:(((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/
  }
};
ge.parse = (e, t) => {
  const n = {}, r = ge.parsers[t || "full"], i = r.regex.exec(e);
  let a = r.keys.length;
  for (; a--; )
    n[r.keys[a]] = i[a] === void 0 ? null : i[a];
  return (n.scheme === "https" && n.port === "443" || n.scheme === "http" && n.port === "80") && (n.href = n.href.replace(":" + n.port, ""), n.authority = n.authority.replace(":" + n.port, ""), n.port = null), n.normalizedPath = ge.removeDotSegments(n.path), n;
};
ge.prependBase = (e, t) => {
  if (e === null || ge.isAbsolute(t))
    return t;
  (!e || Kn.isString(e)) && (e = ge.parse(e || ""));
  const n = ge.parse(t), r = {
    protocol: e.protocol || ""
  };
  if (n.authority !== null)
    r.authority = n.authority, r.path = n.path, r.query = n.query;
  else if (r.authority = e.authority, n.path === "")
    r.path = e.path, n.query !== null ? r.query = n.query : r.query = e.query;
  else {
    if (n.path.indexOf("/") === 0)
      r.path = n.path;
    else {
      let a = e.path;
      a = a.substr(0, a.lastIndexOf("/") + 1), (a.length > 0 || e.authority) && a.substr(-1) !== "/" && (a += "/"), a += n.path, r.path = a;
    }
    r.query = n.query;
  }
  n.path !== "" && (r.path = ge.removeDotSegments(r.path));
  let i = r.protocol;
  return r.authority !== null && (i += "//" + r.authority), i += r.path, r.query !== null && (i += "?" + r.query), n.fragment !== null && (i += "#" + n.fragment), i === "" && (i = "./"), i;
};
ge.removeBase = (e, t) => {
  if (e === null)
    return t;
  (!e || Kn.isString(e)) && (e = ge.parse(e || ""));
  let n = "";
  if (e.href !== "" ? n += (e.protocol || "") + "//" + (e.authority || "") : t.indexOf("//") && (n += "//"), t.indexOf(n) !== 0)
    return t;
  const r = ge.parse(t.substr(n.length)), i = e.normalizedPath.split("/"), a = r.normalizedPath.split("/"), o = r.fragment || r.query ? 0 : 1;
  for (; i.length > 0 && a.length > o && i[0] === a[0]; )
    i.shift(), a.shift();
  let s = "";
  if (i.length > 0) {
    i.pop();
    for (let d = 0; d < i.length; ++d)
      s += "../";
  }
  return s += a.join("/"), r.query !== null && (s += "?" + r.query), r.fragment !== null && (s += "#" + r.fragment), s === "" && (s = "./"), s;
};
ge.removeDotSegments = (e) => {
  if (e.length === 0)
    return "";
  const t = e.split("/"), n = [];
  for (; t.length > 0; ) {
    const r = t.shift(), i = t.length === 0;
    if (r === ".") {
      i && n.push("");
      continue;
    }
    if (r === "..") {
      n.pop(), i && n.push("");
      continue;
    }
    n.push(r);
  }
  return e[0] === "/" && n.length > 0 && n[0] !== "" && n.unshift(""), n.length === 1 && n[0] === "" ? "/" : n.join("/");
};
const Dl = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^\s]*$/;
ge.isAbsolute = (e) => Kn.isString(e) && Dl.test(e);
ge.isRelative = (e) => Kn.isString(e);
const { parseLinkHeader: Tl, buildHeaders: Ol } = $e, { LINK_HEADER_CONTEXT: jl } = xi, rn = ke, Ll = Aa(), { prependBase: kl } = pt, $l = /(^|(\r\n))link:/i;
var Ml = ({
  secure: e,
  headers: t = {},
  xhr: n
} = { headers: {} }) => {
  return t = Ol(t), new Ll().wrapLoader(i);
  async function i(a) {
    if (a.indexOf("http:") !== 0 && a.indexOf("https:") !== 0)
      throw new rn(
        'URL could not be dereferenced; only "http" and "https" URLs are supported.',
        "jsonld.InvalidUrl",
        { code: "loading document failed", url: a }
      );
    if (e && a.indexOf("https") !== 0)
      throw new rn(
        `URL could not be dereferenced; secure mode is enabled and the URL's scheme is not "https".`,
        "jsonld.InvalidUrl",
        { code: "loading document failed", url: a }
      );
    let o;
    try {
      o = await Pl(n, a, t);
    } catch (p) {
      throw new rn(
        "URL could not be dereferenced, an error occurred.",
        "jsonld.LoadDocumentError",
        { code: "loading document failed", url: a, cause: p }
      );
    }
    if (o.status >= 400)
      throw new rn(
        "URL could not be dereferenced: " + o.statusText,
        "jsonld.LoadDocumentError",
        {
          code: "loading document failed",
          url: a,
          httpStatusCode: o.status
        }
      );
    let s = { contextUrl: null, documentUrl: a, document: o.response }, d = null;
    const c = o.getResponseHeader("Content-Type");
    let h;
    if ($l.test(o.getAllResponseHeaders()) && (h = o.getResponseHeader("Link")), h && c !== "application/ld+json") {
      const p = Tl(h), u = p[jl];
      if (Array.isArray(u))
        throw new rn(
          "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
          "jsonld.InvalidUrl",
          { code: "multiple context link headers", url: a }
        );
      u && (s.contextUrl = u.target), d = p.alternate, d && d.type == "application/ld+json" && !(c || "").match(/^application\/(\w*\+)?json$/) && (s = await i(kl(a, d.target)));
    }
    return s;
  }
};
function Pl(e, t, n) {
  e = e || XMLHttpRequest;
  const r = new e();
  return new Promise((i, a) => {
    r.onload = () => i(r), r.onerror = (o) => a(o), r.open("GET", t, !0);
    for (const o in n)
      r.setRequestHeader(o, n[o]);
    r.send();
  });
}
const Fl = Ml, Ni = {};
var Wl = Ni;
Ni.setupDocumentLoaders = function(e) {
  typeof XMLHttpRequest < "u" && (e.documentLoaders.xhr = Fl, e.useDocumentLoader("xhr"));
};
Ni.setupGlobals = function(e) {
  typeof globalThis.JsonLdProcessor > "u" && Object.defineProperty(globalThis, "JsonLdProcessor", {
    writable: !0,
    enumerable: !1,
    configurable: !0,
    value: e.JsonLdProcessor
  });
};
var vr, so;
function Bl() {
  return so || (so = 1, vr = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next)
        yield t.value;
    };
  }), vr;
}
var Hl = J;
J.Node = Tt;
J.create = J;
function J(e) {
  var t = this;
  if (t instanceof J || (t = new J()), t.tail = null, t.head = null, t.length = 0, e && typeof e.forEach == "function")
    e.forEach(function(i) {
      t.push(i);
    });
  else if (arguments.length > 0)
    for (var n = 0, r = arguments.length; n < r; n++)
      t.push(arguments[n]);
  return t;
}
J.prototype.removeNode = function(e) {
  if (e.list !== this)
    throw new Error("removing node which does not belong to this list");
  var t = e.next, n = e.prev;
  return t && (t.prev = n), n && (n.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = n), e.list.length--, e.next = null, e.prev = null, e.list = null, t;
};
J.prototype.unshiftNode = function(e) {
  if (e !== this.head) {
    e.list && e.list.removeNode(e);
    var t = this.head;
    e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++;
  }
};
J.prototype.pushNode = function(e) {
  if (e !== this.tail) {
    e.list && e.list.removeNode(e);
    var t = this.tail;
    e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++;
  }
};
J.prototype.push = function() {
  for (var e = 0, t = arguments.length; e < t; e++)
    Jl(this, arguments[e]);
  return this.length;
};
J.prototype.unshift = function() {
  for (var e = 0, t = arguments.length; e < t; e++)
    Gl(this, arguments[e]);
  return this.length;
};
J.prototype.pop = function() {
  if (this.tail) {
    var e = this.tail.value;
    return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e;
  }
};
J.prototype.shift = function() {
  if (this.head) {
    var e = this.head.value;
    return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e;
  }
};
J.prototype.forEach = function(e, t) {
  t = t || this;
  for (var n = this.head, r = 0; n !== null; r++)
    e.call(t, n.value, r, this), n = n.next;
};
J.prototype.forEachReverse = function(e, t) {
  t = t || this;
  for (var n = this.tail, r = this.length - 1; n !== null; r--)
    e.call(t, n.value, r, this), n = n.prev;
};
J.prototype.get = function(e) {
  for (var t = 0, n = this.head; n !== null && t < e; t++)
    n = n.next;
  if (t === e && n !== null)
    return n.value;
};
J.prototype.getReverse = function(e) {
  for (var t = 0, n = this.tail; n !== null && t < e; t++)
    n = n.prev;
  if (t === e && n !== null)
    return n.value;
};
J.prototype.map = function(e, t) {
  t = t || this;
  for (var n = new J(), r = this.head; r !== null; )
    n.push(e.call(t, r.value, this)), r = r.next;
  return n;
};
J.prototype.mapReverse = function(e, t) {
  t = t || this;
  for (var n = new J(), r = this.tail; r !== null; )
    n.push(e.call(t, r.value, this)), r = r.prev;
  return n;
};
J.prototype.reduce = function(e, t) {
  var n, r = this.head;
  if (arguments.length > 1)
    n = t;
  else if (this.head)
    r = this.head.next, n = this.head.value;
  else
    throw new TypeError("Reduce of empty list with no initial value");
  for (var i = 0; r !== null; i++)
    n = e(n, r.value, i), r = r.next;
  return n;
};
J.prototype.reduceReverse = function(e, t) {
  var n, r = this.tail;
  if (arguments.length > 1)
    n = t;
  else if (this.tail)
    r = this.tail.prev, n = this.tail.value;
  else
    throw new TypeError("Reduce of empty list with no initial value");
  for (var i = this.length - 1; r !== null; i--)
    n = e(n, r.value, i), r = r.prev;
  return n;
};
J.prototype.toArray = function() {
  for (var e = new Array(this.length), t = 0, n = this.head; n !== null; t++)
    e[t] = n.value, n = n.next;
  return e;
};
J.prototype.toArrayReverse = function() {
  for (var e = new Array(this.length), t = 0, n = this.tail; n !== null; t++)
    e[t] = n.value, n = n.prev;
  return e;
};
J.prototype.slice = function(e, t) {
  t = t || this.length, t < 0 && (t += this.length), e = e || 0, e < 0 && (e += this.length);
  var n = new J();
  if (t < e || t < 0)
    return n;
  e < 0 && (e = 0), t > this.length && (t = this.length);
  for (var r = 0, i = this.head; i !== null && r < e; r++)
    i = i.next;
  for (; i !== null && r < t; r++, i = i.next)
    n.push(i.value);
  return n;
};
J.prototype.sliceReverse = function(e, t) {
  t = t || this.length, t < 0 && (t += this.length), e = e || 0, e < 0 && (e += this.length);
  var n = new J();
  if (t < e || t < 0)
    return n;
  e < 0 && (e = 0), t > this.length && (t = this.length);
  for (var r = this.length, i = this.tail; i !== null && r > t; r--)
    i = i.prev;
  for (; i !== null && r > e; r--, i = i.prev)
    n.push(i.value);
  return n;
};
J.prototype.splice = function(e, t, ...n) {
  e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
  for (var r = 0, i = this.head; i !== null && r < e; r++)
    i = i.next;
  for (var a = [], r = 0; i && r < t; r++)
    a.push(i.value), i = this.removeNode(i);
  i === null && (i = this.tail), i !== this.head && i !== this.tail && (i = i.prev);
  for (var r = 0; r < n.length; r++)
    i = Ul(this, i, n[r]);
  return a;
};
J.prototype.reverse = function() {
  for (var e = this.head, t = this.tail, n = e; n !== null; n = n.prev) {
    var r = n.prev;
    n.prev = n.next, n.next = r;
  }
  return this.head = t, this.tail = e, this;
};
function Ul(e, t, n) {
  var r = t === e.head ? new Tt(n, null, t, e) : new Tt(n, t, t.next, e);
  return r.next === null && (e.tail = r), r.prev === null && (e.head = r), e.length++, r;
}
function Jl(e, t) {
  e.tail = new Tt(t, e.tail, null, e), e.head || (e.head = e.tail), e.length++;
}
function Gl(e, t) {
  e.head = new Tt(t, null, e.head, e), e.tail || (e.tail = e.head), e.length++;
}
function Tt(e, t, n, r) {
  if (!(this instanceof Tt))
    return new Tt(e, t, n, r);
  this.list = r, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, n ? (n.prev = this, this.next = n) : this.next = null;
}
try {
  Bl()(J);
} catch {
}
const ql = Hl, Et = Symbol("max"), et = Symbol("length"), Ut = Symbol("lengthCalculator"), dn = Symbol("allowStale"), It = Symbol("maxAge"), Ze = Symbol("dispose"), lo = Symbol("noDisposeOnSet"), ce = Symbol("lruList"), Be = Symbol("cache"), xa = Symbol("updateAgeOnGet"), _r = () => 1;
class Vl {
  constructor(t) {
    if (typeof t == "number" && (t = { max: t }), t || (t = {}), t.max && (typeof t.max != "number" || t.max < 0))
      throw new TypeError("max must be a non-negative number");
    this[Et] = t.max || 1 / 0;
    const n = t.length || _r;
    if (this[Ut] = typeof n != "function" ? _r : n, this[dn] = t.stale || !1, t.maxAge && typeof t.maxAge != "number")
      throw new TypeError("maxAge must be a number");
    this[It] = t.maxAge || 0, this[Ze] = t.dispose, this[lo] = t.noDisposeOnSet || !1, this[xa] = t.updateAgeOnGet || !1, this.reset();
  }
  // resize the cache when the max changes.
  set max(t) {
    if (typeof t != "number" || t < 0)
      throw new TypeError("max must be a non-negative number");
    this[Et] = t || 1 / 0, on(this);
  }
  get max() {
    return this[Et];
  }
  set allowStale(t) {
    this[dn] = !!t;
  }
  get allowStale() {
    return this[dn];
  }
  set maxAge(t) {
    if (typeof t != "number")
      throw new TypeError("maxAge must be a non-negative number");
    this[It] = t, on(this);
  }
  get maxAge() {
    return this[It];
  }
  // resize the cache when the lengthCalculator changes.
  set lengthCalculator(t) {
    typeof t != "function" && (t = _r), t !== this[Ut] && (this[Ut] = t, this[et] = 0, this[ce].forEach((n) => {
      n.length = this[Ut](n.value, n.key), this[et] += n.length;
    })), on(this);
  }
  get lengthCalculator() {
    return this[Ut];
  }
  get length() {
    return this[et];
  }
  get itemCount() {
    return this[ce].length;
  }
  rforEach(t, n) {
    n = n || this;
    for (let r = this[ce].tail; r !== null; ) {
      const i = r.prev;
      co(this, t, r, n), r = i;
    }
  }
  forEach(t, n) {
    n = n || this;
    for (let r = this[ce].head; r !== null; ) {
      const i = r.next;
      co(this, t, r, n), r = i;
    }
  }
  keys() {
    return this[ce].toArray().map((t) => t.key);
  }
  values() {
    return this[ce].toArray().map((t) => t.value);
  }
  reset() {
    this[Ze] && this[ce] && this[ce].length && this[ce].forEach((t) => this[Ze](t.key, t.value)), this[Be] = /* @__PURE__ */ new Map(), this[ce] = new ql(), this[et] = 0;
  }
  dump() {
    return this[ce].map((t) => Hn(this, t) ? !1 : {
      k: t.key,
      v: t.value,
      e: t.now + (t.maxAge || 0)
    }).toArray().filter((t) => t);
  }
  dumpLru() {
    return this[ce];
  }
  set(t, n, r) {
    if (r = r || this[It], r && typeof r != "number")
      throw new TypeError("maxAge must be a number");
    const i = r ? Date.now() : 0, a = this[Ut](n, t);
    if (this[Be].has(t)) {
      if (a > this[Et])
        return Ct(this, this[Be].get(t)), !1;
      const d = this[Be].get(t).value;
      return this[Ze] && (this[lo] || this[Ze](t, d.value)), d.now = i, d.maxAge = r, d.value = n, this[et] += a - d.length, d.length = a, this.get(t), on(this), !0;
    }
    const o = new Cl(t, n, a, i, r);
    return o.length > this[Et] ? (this[Ze] && this[Ze](t, n), !1) : (this[et] += o.length, this[ce].unshift(o), this[Be].set(t, this[ce].head), on(this), !0);
  }
  has(t) {
    if (!this[Be].has(t))
      return !1;
    const n = this[Be].get(t).value;
    return !Hn(this, n);
  }
  get(t) {
    return Sr(this, t, !0);
  }
  peek(t) {
    return Sr(this, t, !1);
  }
  pop() {
    const t = this[ce].tail;
    return t ? (Ct(this, t), t.value) : null;
  }
  del(t) {
    Ct(this, this[Be].get(t));
  }
  load(t) {
    this.reset();
    const n = Date.now();
    for (let r = t.length - 1; r >= 0; r--) {
      const i = t[r], a = i.e || 0;
      if (a === 0)
        this.set(i.k, i.v);
      else {
        const o = a - n;
        o > 0 && this.set(i.k, i.v, o);
      }
    }
  }
  prune() {
    this[Be].forEach((t, n) => Sr(this, n, !1));
  }
}
const Sr = (e, t, n) => {
  const r = e[Be].get(t);
  if (r) {
    const i = r.value;
    if (Hn(e, i)) {
      if (Ct(e, r), !e[dn])
        return;
    } else
      n && (e[xa] && (r.value.now = Date.now()), e[ce].unshiftNode(r));
    return i.value;
  }
}, Hn = (e, t) => {
  if (!t || !t.maxAge && !e[It])
    return !1;
  const n = Date.now() - t.now;
  return t.maxAge ? n > t.maxAge : e[It] && n > e[It];
}, on = (e) => {
  if (e[et] > e[Et])
    for (let t = e[ce].tail; e[et] > e[Et] && t !== null; ) {
      const n = t.prev;
      Ct(e, t), t = n;
    }
}, Ct = (e, t) => {
  if (t) {
    const n = t.value;
    e[Ze] && e[Ze](n.key, n.value), e[et] -= n.length, e[Be].delete(n.key), e[ce].removeNode(t);
  }
};
class Cl {
  constructor(t, n, r, i, a) {
    this.key = t, this.value = n, this.length = r, this.now = i, this.maxAge = a || 0;
  }
}
const co = (e, t, n, r) => {
  let i = n.value;
  Hn(e, i) && (Ct(e, n), e[dn] || (i = void 0)), i && t.call(r, i.value, i.key, e);
};
var Na = Vl;
const zl = Na, Xl = 10;
var Kl = class {
  /**
   * Creates a ResolvedContext.
   *
   * @param document the context document.
   */
  constructor({ document: t }) {
    this.document = t, this.cache = new zl({ max: Xl });
  }
  getProcessed(t) {
    return this.cache.get(t);
  }
  setProcessed(t, n) {
    this.cache.set(t, n);
  }
};
const {
  isArray: ti,
  isObject: un,
  isString: Un
} = Ae, {
  asArray: Ql
} = $e, { prependBase: ni } = pt, sn = ke, uo = Kl, fo = 10;
var Yl = class {
  /**
   * Creates a ContextResolver.
   *
   * @param sharedCache a shared LRU cache with `get` and `set` APIs.
   */
  constructor({ sharedCache: t }) {
    this.perOpCache = /* @__PURE__ */ new Map(), this.sharedCache = t;
  }
  async resolve({
    activeCtx: t,
    context: n,
    documentLoader: r,
    base: i,
    cycles: a = /* @__PURE__ */ new Set()
  }) {
    n && un(n) && n["@context"] && (n = n["@context"]), n = Ql(n);
    const o = [];
    for (const s of n) {
      if (Un(s)) {
        let h = this._get(s);
        h || (h = await this._resolveRemoteContext(
          { activeCtx: t, url: s, documentLoader: r, base: i, cycles: a }
        )), ti(h) ? o.push(...h) : o.push(h);
        continue;
      }
      if (s === null) {
        o.push(new uo({ document: null }));
        continue;
      }
      un(s) || Zl(n);
      const d = JSON.stringify(s);
      let c = this._get(d);
      c || (c = new uo({ document: s }), this._cacheResolvedContext({ key: d, resolved: c, tag: "static" })), o.push(c);
    }
    return o;
  }
  _get(t) {
    let n = this.perOpCache.get(t);
    if (!n) {
      const r = this.sharedCache.get(t);
      r && (n = r.get("static"), n && this.perOpCache.set(t, n));
    }
    return n;
  }
  _cacheResolvedContext({ key: t, resolved: n, tag: r }) {
    if (this.perOpCache.set(t, n), r !== void 0) {
      let i = this.sharedCache.get(t);
      i || (i = /* @__PURE__ */ new Map(), this.sharedCache.set(t, i)), i.set(r, n);
    }
    return n;
  }
  async _resolveRemoteContext({ activeCtx: t, url: n, documentLoader: r, base: i, cycles: a }) {
    n = ni(i, n);
    const { context: o, remoteDoc: s } = await this._fetchContext(
      { activeCtx: t, url: n, documentLoader: r, cycles: a }
    );
    i = s.documentUrl || n, ri({ context: o, base: i });
    const d = await this.resolve(
      { activeCtx: t, context: o, documentLoader: r, base: i, cycles: a }
    );
    return this._cacheResolvedContext({ key: n, resolved: d, tag: s.tag }), d;
  }
  async _fetchContext({ activeCtx: t, url: n, documentLoader: r, cycles: i }) {
    if (i.size > fo)
      throw new sn(
        "Maximum number of @context URLs exceeded.",
        "jsonld.ContextUrlError",
        {
          code: t.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
          max: fo
        }
      );
    if (i.has(n))
      throw new sn(
        "Cyclical @context URLs detected.",
        "jsonld.ContextUrlError",
        {
          code: t.processingMode === "json-ld-1.0" ? "recursive context inclusion" : "context overflow",
          url: n
        }
      );
    i.add(n);
    let a, o;
    try {
      o = await r(n), a = o.document || null, Un(a) && (a = JSON.parse(a));
    } catch (s) {
      throw new sn(
        "Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context.",
        "jsonld.InvalidUrl",
        { code: "loading remote context failed", url: n, cause: s }
      );
    }
    if (!un(a))
      throw new sn(
        "Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object.",
        "jsonld.InvalidUrl",
        { code: "invalid remote context", url: n }
      );
    return "@context" in a ? a = { "@context": a["@context"] } : a = { "@context": {} }, o.contextUrl && (ti(a["@context"]) || (a["@context"] = [a["@context"]]), a["@context"].push(o.contextUrl)), { context: a, remoteDoc: o };
  }
};
function Zl(e) {
  throw new sn(
    "Invalid JSON-LD syntax; @context must be an object.",
    "jsonld.SyntaxError",
    {
      code: "invalid local context",
      context: e
    }
  );
}
function ri({ context: e, base: t }) {
  if (!e)
    return;
  const n = e["@context"];
  if (Un(n)) {
    e["@context"] = ni(t, n);
    return;
  }
  if (ti(n)) {
    for (let r = 0; r < n.length; ++r) {
      const i = n[r];
      if (Un(i)) {
        n[r] = ni(t, i);
        continue;
      }
      un(i) && ri({ context: { "@context": i }, base: t });
    }
    return;
  }
  if (un(n))
    for (const r in n)
      ri({ context: n[r], base: t });
}
var ec = Ai.NQuads;
const Di = ke, {
  isArray: tc
} = Ae, {
  asArray: Da
} = $e, Ie = {};
var wn = Ie;
Ie.defaultEventHandler = null;
Ie.setupEventHandler = ({ options: e = {} }) => {
  const t = [].concat(
    e.safe ? Ie.safeEventHandler : [],
    e.eventHandler ? Da(e.eventHandler) : [],
    Ie.defaultEventHandler ? Ie.defaultEventHandler : []
  );
  return t.length === 0 ? null : t;
};
Ie.handleEvent = ({
  event: e,
  options: t
}) => {
  Ta({ event: e, handlers: t.eventHandler });
};
function Ta({ event: e, handlers: t }) {
  let n = !0;
  for (let r = 0; n && r < t.length; ++r) {
    n = !1;
    const i = t[r];
    if (tc(i))
      n = Ta({ event: e, handlers: i });
    else if (typeof i == "function")
      i({ event: e, next: () => {
        n = !0;
      } });
    else if (typeof i == "object")
      e.code in i ? i[e.code]({ event: e, next: () => {
        n = !0;
      } }) : n = !0;
    else
      throw new Di(
        "Invalid event handler.",
        "jsonld.InvalidEventHandler",
        { event: e }
      );
  }
  return n;
}
const nc = /* @__PURE__ */ new Set([
  "empty object",
  "free-floating scalar",
  "invalid @language value",
  "invalid property",
  // NOTE: spec edge case
  "null @id value",
  "null @value value",
  "object with only @id",
  "object with only @language",
  "object with only @list",
  "object with only @value",
  "relative @id reference",
  "relative @type reference",
  "relative @vocab reference",
  "reserved @id value",
  "reserved @reverse value",
  "reserved term",
  // toRDF
  "blank node predicate",
  "relative graph reference",
  "relative object reference",
  "relative predicate reference",
  "relative subject reference",
  // toRDF / fromRDF
  "rdfDirection not set"
]);
Ie.safeEventHandler = function({ event: t, next: n }) {
  if (t.level === "warning" && nc.has(t.code))
    throw new Di(
      "Safe mode validation error.",
      "jsonld.ValidationError",
      { event: t }
    );
  n();
};
Ie.logEventHandler = function({ event: t, next: n }) {
  console.log(`EVENT: ${t.message}`, { event: t }), n();
};
Ie.logWarningEventHandler = function({ event: t, next: n }) {
  t.level === "warning" && console.warn(`WARNING: ${t.message}`, { event: t }), n();
};
Ie.unhandledEventHandler = function({ event: t }) {
  throw new Di(
    "No handler for event.",
    "jsonld.UnhandledEvent",
    { event: t }
  );
};
Ie.setDefaultEventHandler = function({ eventHandler: e } = {}) {
  Ie.defaultEventHandler = e ? Da(e) : null;
};
const ho = $e, $ = ke, {
  isArray: Oa,
  isObject: ut,
  isString: ve,
  isUndefined: rc
} = Ae, {
  isAbsolute: At,
  isRelative: ic,
  prependBase: fn
} = pt, {
  handleEvent: zt
} = wn, {
  REGEX_BCP47: oc,
  REGEX_KEYWORD: Mn,
  asArray: ja,
  compareShortestLeast: ac
} = $e, En = /* @__PURE__ */ new Map(), sc = 1e4, Q = {};
var kt = Q;
Q.process = async ({
  activeCtx: e,
  localCtx: t,
  options: n,
  propagate: r = !0,
  overrideProtected: i = !1,
  cycles: a = /* @__PURE__ */ new Set()
}) => {
  if (ut(t) && "@context" in t && Oa(t["@context"]) && (t = t["@context"]), ja(t).length === 0)
    return e;
  const s = [], d = [
    ({ event: u, next: l }) => {
      s.push(u), l();
    }
  ];
  n.eventHandler && d.push(n.eventHandler);
  const c = n;
  n = { ...n, eventHandler: d };
  const h = await n.contextResolver.resolve({
    activeCtx: e,
    context: t,
    documentLoader: n.documentLoader,
    base: n.base
  });
  ut(h[0].document) && typeof h[0].document["@propagate"] == "boolean" && (r = h[0].document["@propagate"]);
  let p = e;
  !r && !p.previousContext && (p = p.clone(), p.previousContext = e);
  for (const u of h) {
    let { document: l } = u;
    if (e = p, l === null) {
      if (!i && Object.keys(e.protected).length !== 0)
        throw new $(
          "Tried to nullify a context with protected terms outside of a term definition.",
          "jsonld.SyntaxError",
          { code: "invalid context nullification" }
        );
      p = e = Q.getInitialContext(n).clone();
      continue;
    }
    const f = u.getProcessed(e);
    if (f) {
      if (c.eventHandler)
        for (const b of f.events)
          zt({ event: b, options: c });
      p = e = f.context;
      continue;
    }
    if (ut(l) && "@context" in l && (l = l["@context"]), !ut(l))
      throw new $(
        "Invalid JSON-LD syntax; @context must be an object.",
        "jsonld.SyntaxError",
        { code: "invalid local context", context: l }
      );
    p = p.clone();
    const y = /* @__PURE__ */ new Map();
    if ("@version" in l) {
      if (l["@version"] !== 1.1)
        throw new $(
          "Unsupported JSON-LD version: " + l["@version"],
          "jsonld.UnsupportedVersion",
          { code: "invalid @version value", context: l }
        );
      if (e.processingMode && e.processingMode === "json-ld-1.0")
        throw new $(
          "@version: " + l["@version"] + " not compatible with " + e.processingMode,
          "jsonld.ProcessingModeConflict",
          { code: "processing mode conflict", context: l }
        );
      p.processingMode = "json-ld-1.1", p["@version"] = l["@version"], y.set("@version", !0);
    }
    if (p.processingMode = p.processingMode || e.processingMode, "@base" in l) {
      let b = l["@base"];
      if (!(b === null || At(b)))
        if (ic(b))
          b = fn(p["@base"], b);
        else
          throw new $(
            'Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',
            "jsonld.SyntaxError",
            { code: "invalid base IRI", context: l }
          );
      p["@base"] = b, y.set("@base", !0);
    }
    if ("@vocab" in l) {
      const b = l["@vocab"];
      if (b === null)
        delete p["@vocab"];
      else if (ve(b)) {
        if (!At(b) && Q.processingMode(p, 1))
          throw new $(
            'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',
            "jsonld.SyntaxError",
            { code: "invalid vocab mapping", context: l }
          );
        {
          const m = qt(
            p,
            b,
            { vocab: !0, base: !0 },
            void 0,
            void 0,
            n
          );
          At(m) || n.eventHandler && zt({
            event: {
              type: ["JsonLdEvent"],
              code: "relative @vocab reference",
              level: "warning",
              message: "Relative @vocab reference found.",
              details: {
                vocab: m
              }
            },
            options: n
          }), p["@vocab"] = m;
        }
      } else
        throw new $(
          'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.',
          "jsonld.SyntaxError",
          { code: "invalid vocab mapping", context: l }
        );
      y.set("@vocab", !0);
    }
    if ("@language" in l) {
      const b = l["@language"];
      if (b === null)
        delete p["@language"];
      else if (ve(b))
        b.match(oc) || n.eventHandler && zt({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: b
            }
          },
          options: n
        }), p["@language"] = b.toLowerCase();
      else
        throw new $(
          'Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.',
          "jsonld.SyntaxError",
          { code: "invalid default language", context: l }
        );
      y.set("@language", !0);
    }
    if ("@direction" in l) {
      const b = l["@direction"];
      if (e.processingMode === "json-ld-1.0")
        throw new $(
          "Invalid JSON-LD syntax; @direction not compatible with " + e.processingMode,
          "jsonld.SyntaxError",
          { code: "invalid context member", context: l }
        );
      if (b === null)
        delete p["@direction"];
      else {
        if (b !== "ltr" && b !== "rtl")
          throw new $(
            'Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',
            "jsonld.SyntaxError",
            { code: "invalid base direction", context: l }
          );
        p["@direction"] = b;
      }
      y.set("@direction", !0);
    }
    if ("@propagate" in l) {
      const b = l["@propagate"];
      if (e.processingMode === "json-ld-1.0")
        throw new $(
          "Invalid JSON-LD syntax; @propagate not compatible with " + e.processingMode,
          "jsonld.SyntaxError",
          { code: "invalid context entry", context: l }
        );
      if (typeof b != "boolean")
        throw new $(
          "Invalid JSON-LD syntax; @propagate value must be a boolean.",
          "jsonld.SyntaxError",
          { code: "invalid @propagate value", context: t }
        );
      y.set("@propagate", !0);
    }
    if ("@import" in l) {
      const b = l["@import"];
      if (e.processingMode === "json-ld-1.0")
        throw new $(
          "Invalid JSON-LD syntax; @import not compatible with " + e.processingMode,
          "jsonld.SyntaxError",
          { code: "invalid context entry", context: l }
        );
      if (!ve(b))
        throw new $(
          "Invalid JSON-LD syntax; @import must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid @import value", context: t }
        );
      const m = await n.contextResolver.resolve({
        activeCtx: e,
        context: b,
        documentLoader: n.documentLoader,
        base: n.base
      });
      if (m.length !== 1)
        throw new $(
          "Invalid JSON-LD syntax; @import must reference a single context.",
          "jsonld.SyntaxError",
          { code: "invalid remote context", context: t }
        );
      const S = m[0].getProcessed(e);
      if (S)
        l = S;
      else {
        const v = m[0].document;
        if ("@import" in v)
          throw new $(
            "Invalid JSON-LD syntax: imported context must not include @import.",
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: t }
          );
        for (const R in v)
          l.hasOwnProperty(R) || (l[R] = v[R]);
        m[0].setProcessed(e, l);
      }
      y.set("@import", !0);
    }
    y.set("@protected", l["@protected"] || !1);
    for (const b in l)
      if (Q.createTermDefinition({
        activeCtx: p,
        localCtx: l,
        term: b,
        defined: y,
        options: n,
        overrideProtected: i
      }), ut(l[b]) && "@context" in l[b]) {
        const m = l[b]["@context"];
        let S = !0;
        if (ve(m)) {
          const v = fn(n.base, m);
          a.has(v) ? S = !1 : a.add(v);
        }
        if (S)
          try {
            await Q.process({
              activeCtx: p.clone(),
              localCtx: l[b]["@context"],
              overrideProtected: !0,
              options: n,
              cycles: a
            });
          } catch {
            throw new $(
              "Invalid JSON-LD syntax; invalid scoped context.",
              "jsonld.SyntaxError",
              {
                code: "invalid scoped context",
                context: l[b]["@context"],
                term: b
              }
            );
          }
      }
    u.setProcessed(e, {
      context: p,
      events: s
    });
  }
  return p;
};
Q.createTermDefinition = ({
  activeCtx: e,
  localCtx: t,
  term: n,
  defined: r,
  options: i,
  overrideProtected: a = !1
}) => {
  if (r.has(n)) {
    if (r.get(n))
      return;
    throw new $(
      "Cyclical context definition detected.",
      "jsonld.CyclicalContext",
      { code: "cyclic IRI mapping", context: t, term: n }
    );
  }
  r.set(n, !1);
  let o;
  if (t.hasOwnProperty(n) && (o = t[n]), n === "@type" && ut(o) && (o["@container"] || "@set") === "@set" && Q.processingMode(e, 1.1)) {
    const l = ["@container", "@id", "@protected"], f = Object.keys(o);
    if (f.length === 0 || f.some((y) => !l.includes(y)))
      throw new $(
        "Invalid JSON-LD syntax; keywords cannot be overridden.",
        "jsonld.SyntaxError",
        { code: "keyword redefinition", context: t, term: n }
      );
  } else {
    if (Q.isKeyword(n))
      throw new $(
        "Invalid JSON-LD syntax; keywords cannot be overridden.",
        "jsonld.SyntaxError",
        { code: "keyword redefinition", context: t, term: n }
      );
    if (n.match(Mn)) {
      i.eventHandler && zt({
        event: {
          type: ["JsonLdEvent"],
          code: "reserved term",
          level: "warning",
          message: 'Terms beginning with "@" are reserved for future use and dropped.',
          details: {
            term: n
          }
        },
        options: i
      });
      return;
    } else if (n === "")
      throw new $(
        "Invalid JSON-LD syntax; a term cannot be an empty string.",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: t }
      );
  }
  const s = e.mappings.get(n);
  e.mappings.has(n) && e.mappings.delete(n);
  let d = !1;
  if ((ve(o) || o === null) && (d = !0, o = { "@id": o }), !ut(o))
    throw new $(
      "Invalid JSON-LD syntax; @context term values must be strings or objects.",
      "jsonld.SyntaxError",
      { code: "invalid term definition", context: t }
    );
  const c = {};
  e.mappings.set(n, c), c.reverse = !1;
  const h = ["@container", "@id", "@language", "@reverse", "@type"];
  Q.processingMode(e, 1.1) && h.push(
    "@context",
    "@direction",
    "@index",
    "@nest",
    "@prefix",
    "@protected"
  );
  for (const l in o)
    if (!h.includes(l))
      throw new $(
        "Invalid JSON-LD syntax; a term definition must not contain " + l,
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: t }
      );
  const p = n.indexOf(":");
  if (c._termHasColon = p > 0, "@reverse" in o) {
    if ("@id" in o)
      throw new $(
        "Invalid JSON-LD syntax; a @reverse term definition must not contain @id.",
        "jsonld.SyntaxError",
        { code: "invalid reverse property", context: t }
      );
    if ("@nest" in o)
      throw new $(
        "Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.",
        "jsonld.SyntaxError",
        { code: "invalid reverse property", context: t }
      );
    const l = o["@reverse"];
    if (!ve(l))
      throw new $(
        "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
        "jsonld.SyntaxError",
        { code: "invalid IRI mapping", context: t }
      );
    if (l.match(Mn)) {
      i.eventHandler && zt({
        event: {
          type: ["JsonLdEvent"],
          code: "reserved @reverse value",
          level: "warning",
          message: '@reverse values beginning with "@" are reserved for future use and dropped.',
          details: {
            reverse: l
          }
        },
        options: i
      }), s ? e.mappings.set(n, s) : e.mappings.delete(n);
      return;
    }
    const f = qt(
      e,
      l,
      { vocab: !0, base: !1 },
      t,
      r,
      i
    );
    if (!At(f))
      throw new $(
        "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
        "jsonld.SyntaxError",
        { code: "invalid IRI mapping", context: t }
      );
    c["@id"] = f, c.reverse = !0;
  } else if ("@id" in o) {
    let l = o["@id"];
    if (l && !ve(l))
      throw new $(
        "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
        "jsonld.SyntaxError",
        { code: "invalid IRI mapping", context: t }
      );
    if (l === null)
      c["@id"] = null;
    else if (!Q.isKeyword(l) && l.match(Mn)) {
      i.eventHandler && zt({
        event: {
          type: ["JsonLdEvent"],
          code: "reserved @id value",
          level: "warning",
          message: '@id values beginning with "@" are reserved for future use and dropped.',
          details: {
            id: l
          }
        },
        options: i
      }), s ? e.mappings.set(n, s) : e.mappings.delete(n);
      return;
    } else if (l !== n) {
      if (l = qt(
        e,
        l,
        { vocab: !0, base: !1 },
        t,
        r,
        i
      ), !At(l) && !Q.isKeyword(l))
        throw new $(
          "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: t }
        );
      if (n.match(/(?::[^:])|\//)) {
        const f = new Map(r).set(n, !0);
        if (qt(
          e,
          n,
          { vocab: !0, base: !1 },
          t,
          f,
          i
        ) !== l)
          throw new $(
            "Invalid JSON-LD syntax; term in form of IRI must expand to definition.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: t }
          );
      }
      c["@id"] = l, c._prefix = d && !c._termHasColon && l.match(/[:\/\?#\[\]@]$/) !== null;
    }
  }
  if (!("@id" in c))
    if (c._termHasColon) {
      const l = n.substr(0, p);
      if (t.hasOwnProperty(l) && Q.createTermDefinition({
        activeCtx: e,
        localCtx: t,
        term: l,
        defined: r,
        options: i
      }), e.mappings.has(l)) {
        const f = n.substr(p + 1);
        c["@id"] = e.mappings.get(l)["@id"] + f;
      } else
        c["@id"] = n;
    } else if (n === "@type")
      c["@id"] = n;
    else {
      if (!("@vocab" in e))
        throw new $(
          "Invalid JSON-LD syntax; @context terms must define an @id.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: t, term: n }
        );
      c["@id"] = e["@vocab"] + n;
    }
  if ((o["@protected"] === !0 || r.get("@protected") === !0 && o["@protected"] !== !1) && (e.protected[n] = !0, c.protected = !0), r.set(n, !0), "@type" in o) {
    let l = o["@type"];
    if (!ve(l))
      throw new $(
        "Invalid JSON-LD syntax; an @context @type value must be a string.",
        "jsonld.SyntaxError",
        { code: "invalid type mapping", context: t }
      );
    if (l === "@json" || l === "@none") {
      if (Q.processingMode(e, 1))
        throw new $(
          `Invalid JSON-LD syntax; an @context @type value must not be "${l}" in JSON-LD 1.0 mode.`,
          "jsonld.SyntaxError",
          { code: "invalid type mapping", context: t }
        );
    } else if (l !== "@id" && l !== "@vocab") {
      if (l = qt(
        e,
        l,
        { vocab: !0, base: !1 },
        t,
        r,
        i
      ), !At(l))
        throw new $(
          "Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.",
          "jsonld.SyntaxError",
          { code: "invalid type mapping", context: t }
        );
      if (l.indexOf("_:") === 0)
        throw new $(
          "Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.",
          "jsonld.SyntaxError",
          { code: "invalid type mapping", context: t }
        );
    }
    c["@type"] = l;
  }
  if ("@container" in o) {
    const l = ve(o["@container"]) ? [o["@container"]] : o["@container"] || [], f = ["@list", "@set", "@index", "@language"];
    let y = !0;
    const b = l.includes("@set");
    if (Q.processingMode(e, 1.1)) {
      if (f.push("@graph", "@id", "@type"), l.includes("@list")) {
        if (l.length !== 1)
          throw new $(
            "Invalid JSON-LD syntax; @context @container with @list must have no other values",
            "jsonld.SyntaxError",
            { code: "invalid container mapping", context: t }
          );
      } else if (l.includes("@graph")) {
        if (l.some((m) => m !== "@graph" && m !== "@id" && m !== "@index" && m !== "@set"))
          throw new $(
            "Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set",
            "jsonld.SyntaxError",
            { code: "invalid container mapping", context: t }
          );
      } else
        y &= l.length <= (b ? 2 : 1);
      if (l.includes("@type") && (c["@type"] = c["@type"] || "@id", !["@id", "@vocab"].includes(c["@type"])))
        throw new $(
          "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
          "jsonld.SyntaxError",
          { code: "invalid type mapping", context: t }
        );
    } else
      y &= !Oa(o["@container"]), y &= l.length <= 1;
    if (y &= l.every((m) => f.includes(m)), y &= !(b && l.includes("@list")), !y)
      throw new $(
        "Invalid JSON-LD syntax; @context @container value must be one of the following: " + f.join(", "),
        "jsonld.SyntaxError",
        { code: "invalid container mapping", context: t }
      );
    if (c.reverse && !l.every((m) => ["@index", "@set"].includes(m)))
      throw new $(
        "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
        "jsonld.SyntaxError",
        { code: "invalid reverse property", context: t }
      );
    c["@container"] = l;
  }
  if ("@index" in o) {
    if (!("@container" in o) || !c["@container"].includes("@index"))
      throw new $(
        `Invalid JSON-LD syntax; @index without @index in @container: "${o["@index"]}" on term "${n}".`,
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: t }
      );
    if (!ve(o["@index"]) || o["@index"].indexOf("@") === 0)
      throw new $(
        `Invalid JSON-LD syntax; @index must expand to an IRI: "${o["@index"]}" on term "${n}".`,
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: t }
      );
    c["@index"] = o["@index"];
  }
  if ("@context" in o && (c["@context"] = o["@context"]), "@language" in o && !("@type" in o)) {
    let l = o["@language"];
    if (l !== null && !ve(l))
      throw new $(
        "Invalid JSON-LD syntax; @context @language value must be a string or null.",
        "jsonld.SyntaxError",
        { code: "invalid language mapping", context: t }
      );
    l !== null && (l = l.toLowerCase()), c["@language"] = l;
  }
  if ("@prefix" in o) {
    if (n.match(/:|\//))
      throw new $(
        "Invalid JSON-LD syntax; @context @prefix used on a compact IRI term",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: t }
      );
    if (Q.isKeyword(c["@id"]))
      throw new $(
        "Invalid JSON-LD syntax; keywords may not be used as prefixes",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: t }
      );
    if (typeof o["@prefix"] == "boolean")
      c._prefix = o["@prefix"] === !0;
    else
      throw new $(
        "Invalid JSON-LD syntax; @context value for @prefix must be boolean",
        "jsonld.SyntaxError",
        { code: "invalid @prefix value", context: t }
      );
  }
  if ("@direction" in o) {
    const l = o["@direction"];
    if (l !== null && l !== "ltr" && l !== "rtl")
      throw new $(
        'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
        "jsonld.SyntaxError",
        { code: "invalid base direction", context: t }
      );
    c["@direction"] = l;
  }
  if ("@nest" in o) {
    const l = o["@nest"];
    if (!ve(l) || l !== "@nest" && l.indexOf("@") === 0)
      throw new $(
        "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
        "jsonld.SyntaxError",
        { code: "invalid @nest value", context: t }
      );
    c["@nest"] = l;
  }
  // disallow aliasing @context and @preserve
  const u = c["@id"];
  if (u === "@context" || u === "@preserve")
    throw new $(
      "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
      "jsonld.SyntaxError",
      { code: "invalid keyword alias", context: t }
    );
  if (s && s.protected && !a && (e.protected[n] = !0, c.protected = !0, !ii(s, c)))
    throw new $(
      "Invalid JSON-LD syntax; tried to redefine a protected term.",
      "jsonld.SyntaxError",
      { code: "protected term redefinition", context: t, term: n }
    );
};
Q.expandIri = (e, t, n, r) => qt(
  e,
  t,
  n,
  void 0,
  void 0,
  r
);
function qt(e, t, n, r, i, a) {
  if (t === null || !ve(t) || Q.isKeyword(t))
    return t;
  if (t.match(Mn))
    return null;
  if (r && r.hasOwnProperty(t) && i.get(t) !== !0 && Q.createTermDefinition({
    activeCtx: e,
    localCtx: r,
    term: t,
    defined: i,
    options: a
  }), n = n || {}, n.vocab) {
    const s = e.mappings.get(t);
    if (s === null)
      return null;
    if (ut(s) && "@id" in s)
      return s["@id"];
  }
  const o = t.indexOf(":");
  if (o > 0) {
    const s = t.substr(0, o), d = t.substr(o + 1);
    if (s === "_" || d.indexOf("//") === 0)
      return t;
    r && r.hasOwnProperty(s) && Q.createTermDefinition({
      activeCtx: e,
      localCtx: r,
      term: s,
      defined: i,
      options: a
    });
    const c = e.mappings.get(s);
    if (c && c._prefix)
      return c["@id"] + d;
    if (At(t))
      return t;
  }
  if (n.vocab && "@vocab" in e)
    t = e["@vocab"] + t;
  else if (n.base) {
    let s, d;
    "@base" in e ? e["@base"] ? (d = fn(a.base, e["@base"]), s = fn(d, t)) : (d = e["@base"], s = t) : (d = a.base, s = fn(a.base, t)), t = s;
  }
  return t;
}
Q.getInitialContext = (e) => {
  const t = JSON.stringify({ processingMode: e.processingMode }), n = En.get(t);
  if (n)
    return n;
  const r = {
    processingMode: e.processingMode,
    mappings: /* @__PURE__ */ new Map(),
    inverse: null,
    getInverse: i,
    clone: s,
    revertToPreviousContext: d,
    protected: {}
  };
  return En.size === sc && En.clear(), En.set(t, r), r;
  function i() {
    const c = this;
    if (c.inverse)
      return c.inverse;
    const h = c.inverse = {}, p = c.fastCurieMap = {}, u = {}, l = (c["@language"] || "@none").toLowerCase(), f = c["@direction"], y = c.mappings, b = [...y.keys()].sort(ac);
    for (const m of b) {
      const S = y.get(m);
      if (S === null)
        continue;
      let v = S["@container"] || "@none";
      if (v = [].concat(v).sort().join(""), S["@id"] === null)
        continue;
      const R = ja(S["@id"]);
      for (const x of R) {
        let I = h[x];
        const G = Q.isKeyword(x);
        if (I)
          !G && !S._termHasColon && u[x].push(m);
        else if (h[x] = I = {}, !G && !S._termHasColon) {
          u[x] = [m];
          const k = { iri: x, terms: u[x] };
          x[0] in p ? p[x[0]].push(k) : p[x[0]] = [k];
        }
        if (I[v] || (I[v] = {
          "@language": {},
          "@type": {},
          "@any": {}
        }), I = I[v], o(m, I["@any"], "@none"), S.reverse)
          o(m, I["@type"], "@reverse");
        else if (S["@type"] === "@none")
          o(m, I["@any"], "@none"), o(m, I["@language"], "@none"), o(m, I["@type"], "@none");
        else if ("@type" in S)
          o(m, I["@type"], S["@type"]);
        else if ("@language" in S && "@direction" in S) {
          const k = S["@language"], F = S["@direction"];
          k && F ? o(
            m,
            I["@language"],
            `${k}_${F}`.toLowerCase()
          ) : k ? o(m, I["@language"], k.toLowerCase()) : F ? o(m, I["@language"], `_${F}`) : o(m, I["@language"], "@null");
        } else
          "@language" in S ? o(
            m,
            I["@language"],
            (S["@language"] || "@null").toLowerCase()
          ) : "@direction" in S ? S["@direction"] ? o(
            m,
            I["@language"],
            `_${S["@direction"]}`
          ) : o(m, I["@language"], "@none") : f ? (o(m, I["@language"], `_${f}`), o(m, I["@language"], "@none"), o(m, I["@type"], "@none")) : (o(m, I["@language"], l), o(m, I["@language"], "@none"), o(m, I["@type"], "@none"));
      }
    }
    for (const m in p)
      a(p, m, 1);
    return h;
  }
  function a(c, h, p) {
    const u = c[h], l = c[h] = {};
    let f, y;
    for (const b of u)
      f = b.iri, p >= f.length ? y = "" : y = f[p], y in l ? l[y].push(b) : l[y] = [b];
    for (const b in l)
      b !== "" && a(l, b, p + 1);
  }
  function o(c, h, p) {
    h.hasOwnProperty(p) || (h[p] = c);
  }
  function s() {
    const c = {};
    return c.mappings = ho.clone(this.mappings), c.clone = this.clone, c.inverse = null, c.getInverse = this.getInverse, c.protected = ho.clone(this.protected), this.previousContext && (c.previousContext = this.previousContext.clone()), c.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (c["@base"] = this["@base"]), "@language" in this && (c["@language"] = this["@language"]), "@vocab" in this && (c["@vocab"] = this["@vocab"]), c;
  }
  function d() {
    return this.previousContext ? this.previousContext.clone() : this;
  }
};
Q.getContextValue = (e, t, n) => {
  if (t === null)
    return n === "@context" ? void 0 : null;
  if (e.mappings.has(t)) {
    const r = e.mappings.get(t);
    if (rc(n))
      return r;
    if (r.hasOwnProperty(n))
      return r[n];
  }
  if (n === "@language" && n in e || n === "@direction" && n in e)
    return e[n];
  if (n !== "@context")
    return null;
};
Q.processingMode = (e, t) => t.toString() >= "1.1" ? !e.processingMode || e.processingMode >= "json-ld-" + t.toString() : e.processingMode === "json-ld-1.0";
Q.isKeyword = (e) => {
  if (!ve(e) || e[0] !== "@")
    return !1;
  switch (e) {
    case "@base":
    case "@container":
    case "@context":
    case "@default":
    case "@direction":
    case "@embed":
    case "@explicit":
    case "@graph":
    case "@id":
    case "@included":
    case "@index":
    case "@json":
    case "@language":
    case "@list":
    case "@nest":
    case "@none":
    case "@omitDefault":
    case "@prefix":
    case "@preserve":
    case "@protected":
    case "@requireAll":
    case "@reverse":
    case "@set":
    case "@type":
    case "@value":
    case "@version":
    case "@vocab":
      return !0;
  }
  return !1;
};
function ii(e, t) {
  if (!(e && typeof e == "object") || !(t && typeof t == "object"))
    return e === t;
  const n = Array.isArray(e);
  if (n !== Array.isArray(t))
    return !1;
  if (n) {
    if (e.length !== t.length)
      return !1;
    for (let a = 0; a < e.length; ++a)
      if (!ii(e[a], t[a]))
        return !1;
    return !0;
  }
  const r = Object.keys(e), i = Object.keys(t);
  if (r.length !== i.length)
    return !1;
  for (const a in e) {
    let o = e[a], s = t[a];
    if (a === "@container" && Array.isArray(o) && Array.isArray(s) && (o = o.slice().sort(), s = s.slice().sort()), !ii(o, s))
      return !1;
  }
  return !0;
}
const Y = ke, {
  isArray: je,
  isObject: Ne,
  isEmptyObject: oi,
  isString: he,
  isUndefined: Jn
} = Ae, {
  isList: Er,
  isValue: ai,
  isGraph: lc,
  isSubject: cc
} = ot, {
  expandIri: ae,
  getContextValue: Re,
  isKeyword: si,
  process: hn,
  processingMode: Pn
} = kt, {
  isAbsolute: Fn
} = pt, {
  REGEX_BCP47: La,
  REGEX_KEYWORD: dc,
  addValue: Ee,
  asArray: We,
  getValues: uc,
  validateTypeValue: fc
} = $e, {
  handleEvent: Te
} = wn, ft = {};
var hc = ft;
ft.expand = async ({
  activeCtx: e,
  activeProperty: t = null,
  element: n,
  options: r = {},
  insideList: i = !1,
  insideIndex: a = !1,
  typeScopedContext: o = null
}) => {
  if (n == null)
    return null;
  if (t === "@default" && (r = Object.assign({}, r, { isFrame: !1 })), !je(n) && !Ne(n))
    return !i && (t === null || ae(
      e,
      t,
      { vocab: !0 },
      r
    ) === "@graph") ? (r.eventHandler && Te({
      event: {
        type: ["JsonLdEvent"],
        code: "free-floating scalar",
        level: "warning",
        message: "Dropping free-floating scalar not in a list.",
        details: {
          value: n
          //activeProperty
          //insideList
        }
      },
      options: r
    }), null) : Ma({ activeCtx: e, activeProperty: t, value: n, options: r });
  if (je(n)) {
    let f = [];
    const y = Re(
      e,
      t,
      "@container"
    ) || [];
    i = i || y.includes("@list");
    for (let b = 0; b < n.length; ++b) {
      let m = await ft.expand({
        activeCtx: e,
        activeProperty: t,
        element: n[b],
        options: r,
        insideIndex: a,
        typeScopedContext: o
      });
      i && je(m) && (m = { "@list": m }), m !== null && (je(m) ? f = f.concat(m) : f.push(m));
    }
    return f;
  }
  const s = ae(
    e,
    t,
    { vocab: !0 },
    r
  ), d = Re(e, t, "@context");
  o = o || (e.previousContext ? e : null);
  let c = Object.keys(n).sort(), h = !a;
  if (h && o && c.length <= 2 && !c.includes("@context"))
    for (const f of c) {
      const y = ae(
        o,
        f,
        { vocab: !0 },
        r
      );
      if (y === "@value") {
        h = !1, e = o;
        break;
      }
      if (y === "@id" && c.length === 1) {
        h = !1;
        break;
      }
    }
  h && (e = e.revertToPreviousContext()), Jn(d) || (e = await hn({
    activeCtx: e,
    localCtx: d,
    propagate: !0,
    overrideProtected: !0,
    options: r
  })), "@context" in n && (e = await hn(
    { activeCtx: e, localCtx: n["@context"], options: r }
  )), o = e;
  let p = null;
  for (const f of c)
    if (ae(e, f, { vocab: !0 }, r) === "@type") {
      p = p || f;
      const b = n[f], m = Array.isArray(b) ? b.length > 1 ? b.slice().sort() : b : [b];
      for (const S of m) {
        const v = Re(o, S, "@context");
        Jn(v) || (e = await hn({
          activeCtx: e,
          localCtx: v,
          options: r,
          propagate: !1
        }));
      }
    }
  let u = {};
  await $a({
    activeCtx: e,
    activeProperty: t,
    expandedActiveProperty: s,
    element: n,
    expandedParent: u,
    options: r,
    insideList: i,
    typeKey: p,
    typeScopedContext: o
  }), c = Object.keys(u);
  let l = c.length;
  if ("@value" in u) {
    if ("@type" in u && ("@language" in u || "@direction" in u))
      throw new Y(
        'Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".',
        "jsonld.SyntaxError",
        { code: "invalid value object", element: u }
      );
    let f = l - 1;
    if ("@type" in u && (f -= 1), "@index" in u && (f -= 1), "@language" in u && (f -= 1), "@direction" in u && (f -= 1), f !== 0)
      throw new Y(
        'Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".',
        "jsonld.SyntaxError",
        { code: "invalid value object", element: u }
      );
    const y = u["@value"] === null ? [] : We(u["@value"]), b = uc(u, "@type");
    if (!(Pn(e, 1.1) && b.includes("@json") && b.length === 1))
      if (y.length === 0)
        r.eventHandler && Te({
          event: {
            type: ["JsonLdEvent"],
            code: "null @value value",
            level: "warning",
            message: "Dropping null @value value.",
            details: {
              value: u
            }
          },
          options: r
        }), u = null;
      else {
        if (!y.every((m) => he(m) || oi(m)) && "@language" in u)
          throw new Y(
            "Invalid JSON-LD syntax; only strings may be language-tagged.",
            "jsonld.SyntaxError",
            { code: "invalid language-tagged value", element: u }
          );
        if (!b.every((m) => Fn(m) && !(he(m) && m.indexOf("_:") === 0) || oi(m)))
          throw new Y(
            'Invalid JSON-LD syntax; an element containing "@value" and "@type" must have an absolute IRI for the value of "@type".',
            "jsonld.SyntaxError",
            { code: "invalid typed value", element: u }
          );
      }
  } else if ("@type" in u && !je(u["@type"]))
    u["@type"] = [u["@type"]];
  else if ("@set" in u || "@list" in u) {
    if (l > 1 && !(l === 2 && "@index" in u))
      throw new Y(
        'Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".',
        "jsonld.SyntaxError",
        { code: "invalid set or list object", element: u }
      );
    "@set" in u && (u = u["@set"], c = Object.keys(u), l = c.length);
  } else
    l === 1 && "@language" in u && (r.eventHandler && Te({
      event: {
        type: ["JsonLdEvent"],
        code: "object with only @language",
        level: "warning",
        message: "Dropping object with only @language.",
        details: {
          value: u
        }
      },
      options: r
    }), u = null);
  return Ne(u) && !r.keepFreeFloatingNodes && !i && (t === null || s === "@graph" || (Re(e, t, "@container") || []).includes("@graph")) && (u = ka({ value: u, count: l, options: r })), u;
};
function ka({
  value: e,
  count: t,
  options: n
}) {
  if (t === 0 || "@value" in e || "@list" in e || t === 1 && "@id" in e) {
    if (n.eventHandler) {
      let r, i;
      t === 0 ? (r = "empty object", i = "Dropping empty object.") : "@value" in e ? (r = "object with only @value", i = "Dropping object with only @value.") : "@list" in e ? (r = "object with only @list", i = "Dropping object with only @list.") : t === 1 && "@id" in e && (r = "object with only @id", i = "Dropping object with only @id."), Te({
        event: {
          type: ["JsonLdEvent"],
          code: r,
          level: "warning",
          message: i,
          details: {
            value: e
          }
        },
        options: n
      });
    }
    return null;
  }
  return e;
}
async function $a({
  activeCtx: e,
  activeProperty: t,
  expandedActiveProperty: n,
  element: r,
  expandedParent: i,
  options: a = {},
  insideList: o,
  typeKey: s,
  typeScopedContext: d
}) {
  const c = Object.keys(r).sort(), h = [];
  let p;
  const u = r[s] && ae(
    e,
    je(r[s]) ? r[s][0] : r[s],
    { vocab: !0 },
    {
      ...a,
      typeExpansion: !0
    }
  ) === "@json";
  for (const l of c) {
    let f = r[l], y;
    if (l === "@context")
      continue;
    const b = ae(e, l, { vocab: !0 }, a);
    if (b === null || !(Fn(b) || si(b))) {
      a.eventHandler && Te({
        event: {
          type: ["JsonLdEvent"],
          code: "invalid property",
          level: "warning",
          message: "Dropping property that did not expand into an absolute IRI or keyword.",
          details: {
            property: l,
            expandedProperty: b
          }
        },
        options: a
      });
      continue;
    }
    if (si(b)) {
      if (n === "@reverse")
        throw new Y(
          "Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property map", value: f }
        );
      if (b in i && b !== "@included" && b !== "@type")
        throw new Y(
          "Invalid JSON-LD syntax; colliding keywords detected.",
          "jsonld.SyntaxError",
          { code: "colliding keywords", keyword: b }
        );
    }
    if (b === "@id") {
      if (!he(f)) {
        if (!a.isFrame)
          throw new Y(
            'Invalid JSON-LD syntax; "@id" value must a string.',
            "jsonld.SyntaxError",
            { code: "invalid @id value", value: f }
          );
        if (Ne(f)) {
          if (!oi(f))
            throw new Y(
              'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
              "jsonld.SyntaxError",
              { code: "invalid @id value", value: f }
            );
        } else if (je(f)) {
          if (!f.every((R) => he(R)))
            throw new Y(
              'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
              "jsonld.SyntaxError",
              { code: "invalid @id value", value: f }
            );
        } else
          throw new Y(
            'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
            "jsonld.SyntaxError",
            { code: "invalid @id value", value: f }
          );
      }
      Ee(
        i,
        "@id",
        We(f).map((R) => {
          if (he(R)) {
            const x = ae(e, R, { base: !0 }, a);
            return a.eventHandler && (x === null ? Te(R === null ? {
              event: {
                type: ["JsonLdEvent"],
                code: "null @id value",
                level: "warning",
                message: "Null @id found.",
                details: {
                  id: R
                }
              },
              options: a
            } : {
              event: {
                type: ["JsonLdEvent"],
                code: "reserved @id value",
                level: "warning",
                message: "Reserved @id found.",
                details: {
                  id: R
                }
              },
              options: a
            }) : Fn(x) || Te({
              event: {
                type: ["JsonLdEvent"],
                code: "relative @id reference",
                level: "warning",
                message: "Relative @id reference found.",
                details: {
                  id: R,
                  expandedId: x
                }
              },
              options: a
            })), x;
          }
          return R;
        }),
        { propertyIsArray: a.isFrame }
      );
      continue;
    }
    if (b === "@type") {
      Ne(f) && (f = Object.fromEntries(Object.entries(f).map(([R, x]) => [
        ae(d, R, { vocab: !0 }),
        We(x).map(
          (I) => ae(
            d,
            I,
            { base: !0, vocab: !0 },
            { ...a, typeExpansion: !0 }
          )
        )
      ]))), fc(f, a.isFrame), Ee(
        i,
        "@type",
        We(f).map((R) => {
          if (he(R)) {
            const x = ae(
              d,
              R,
              { base: !0, vocab: !0 },
              { ...a, typeExpansion: !0 }
            );
            return x !== "@json" && !Fn(x) && a.eventHandler && Te({
              event: {
                type: ["JsonLdEvent"],
                code: "relative @type reference",
                level: "warning",
                message: "Relative @type reference found.",
                details: {
                  type: R
                }
              },
              options: a
            }), x;
          }
          return R;
        }),
        { propertyIsArray: !!a.isFrame }
      );
      continue;
    }
    if (b === "@included" && Pn(e, 1.1)) {
      const R = We(await ft.expand({
        activeCtx: e,
        activeProperty: t,
        element: f,
        options: a
      }));
      if (!R.every((x) => cc(x)))
        throw new Y(
          "Invalid JSON-LD syntax; values of @included must expand to node objects.",
          "jsonld.SyntaxError",
          { code: "invalid @included value", value: f }
        );
      Ee(
        i,
        "@included",
        R,
        { propertyIsArray: !0 }
      );
      continue;
    }
    if (b === "@graph" && !(Ne(f) || je(f)))
      throw new Y(
        'Invalid JSON-LD syntax; "@graph" value must not be an object or an array.',
        "jsonld.SyntaxError",
        { code: "invalid @graph value", value: f }
      );
    if (b === "@value") {
      p = f, u && Pn(e, 1.1) ? i["@value"] = f : Ee(
        i,
        "@value",
        f,
        { propertyIsArray: a.isFrame }
      );
      continue;
    }
    if (b === "@language") {
      if (f === null)
        continue;
      if (!he(f) && !a.isFrame)
        throw new Y(
          'Invalid JSON-LD syntax; "@language" value must be a string.',
          "jsonld.SyntaxError",
          { code: "invalid language-tagged string", value: f }
        );
      f = We(f).map((R) => he(R) ? R.toLowerCase() : R);
      for (const R of f)
        he(R) && !R.match(La) && a.eventHandler && Te({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: R
            }
          },
          options: a
        });
      Ee(
        i,
        "@language",
        f,
        { propertyIsArray: a.isFrame }
      );
      continue;
    }
    if (b === "@direction") {
      if (!he(f) && !a.isFrame)
        throw new Y(
          'Invalid JSON-LD syntax; "@direction" value must be a string.',
          "jsonld.SyntaxError",
          { code: "invalid base direction", value: f }
        );
      f = We(f);
      for (const R of f)
        if (he(R) && R !== "ltr" && R !== "rtl")
          throw new Y(
            'Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".',
            "jsonld.SyntaxError",
            { code: "invalid base direction", value: f }
          );
      Ee(
        i,
        "@direction",
        f,
        { propertyIsArray: a.isFrame }
      );
      continue;
    }
    if (b === "@index") {
      if (!he(f))
        throw new Y(
          'Invalid JSON-LD syntax; "@index" value must be a string.',
          "jsonld.SyntaxError",
          { code: "invalid @index value", value: f }
        );
      Ee(i, "@index", f);
      continue;
    }
    if (b === "@reverse") {
      if (!Ne(f))
        throw new Y(
          'Invalid JSON-LD syntax; "@reverse" value must be an object.',
          "jsonld.SyntaxError",
          { code: "invalid @reverse value", value: f }
        );
      if (y = await ft.expand({
        activeCtx: e,
        activeProperty: "@reverse",
        element: f,
        options: a
      }), "@reverse" in y)
        for (const x in y["@reverse"])
          Ee(
            i,
            x,
            y["@reverse"][x],
            { propertyIsArray: !0 }
          );
      let R = i["@reverse"] || null;
      for (const x in y) {
        if (x === "@reverse")
          continue;
        R === null && (R = i["@reverse"] = {}), Ee(R, x, [], { propertyIsArray: !0 });
        const I = y[x];
        for (let G = 0; G < I.length; ++G) {
          const k = I[G];
          if (ai(k) || Er(k))
            throw new Y(
              'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
              "jsonld.SyntaxError",
              { code: "invalid reverse property value", value: y }
            );
          Ee(R, x, k, { propertyIsArray: !0 });
        }
      }
      continue;
    }
    if (b === "@nest") {
      h.push(l);
      continue;
    }
    let m = e;
    const S = Re(e, l, "@context");
    Jn(S) || (m = await hn({
      activeCtx: e,
      localCtx: S,
      propagate: !0,
      overrideProtected: !0,
      options: a
    }));
    const v = Re(e, l, "@container") || [];
    if (v.includes("@language") && Ne(f)) {
      const R = Re(m, l, "@direction");
      y = pc(m, f, R, a);
    } else if (v.includes("@index") && Ne(f)) {
      const R = v.includes("@graph"), x = Re(m, l, "@index") || "@index", I = x !== "@index" && ae(e, x, { vocab: !0 }, a);
      y = await Rr({
        activeCtx: m,
        options: a,
        activeProperty: l,
        value: f,
        asGraph: R,
        indexKey: x,
        propertyIndex: I
      });
    } else if (v.includes("@id") && Ne(f)) {
      const R = v.includes("@graph");
      y = await Rr({
        activeCtx: m,
        options: a,
        activeProperty: l,
        value: f,
        asGraph: R,
        indexKey: "@id"
      });
    } else if (v.includes("@type") && Ne(f))
      y = await Rr({
        // since container is `@type`, revert type scoped context when expanding
        activeCtx: m.revertToPreviousContext(),
        options: a,
        activeProperty: l,
        value: f,
        asGraph: !1,
        indexKey: "@type"
      });
    else {
      const R = b === "@list";
      if (R || b === "@set") {
        let x = t;
        R && n === "@graph" && (x = null), y = await ft.expand({
          activeCtx: m,
          activeProperty: x,
          element: f,
          options: a,
          insideList: R
        });
      } else
        Re(e, l, "@type") === "@json" ? y = {
          "@type": "@json",
          "@value": f
        } : y = await ft.expand({
          activeCtx: m,
          activeProperty: l,
          element: f,
          options: a,
          insideList: !1
        });
    }
    if (!(y === null && b !== "@value")) {
      if (b !== "@list" && !Er(y) && v.includes("@list") && (y = { "@list": We(y) }), v.includes("@graph") && !v.some((R) => R === "@id" || R === "@index")) {
        if (y = We(y), a.isFrame || (y = y.filter((R) => {
          const x = Object.keys(R).length;
          return ka({ value: R, count: x, options: a }) !== null;
        })), y.length === 0)
          continue;
        y = y.map((R) => ({ "@graph": We(R) }));
      }
      if (m.mappings.has(l) && m.mappings.get(l).reverse) {
        const R = i["@reverse"] = i["@reverse"] || {};
        y = We(y);
        for (let x = 0; x < y.length; ++x) {
          const I = y[x];
          if (ai(I) || Er(I))
            throw new Y(
              'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
              "jsonld.SyntaxError",
              { code: "invalid reverse property value", value: y }
            );
          Ee(R, b, I, { propertyIsArray: !0 });
        }
        continue;
      }
      Ee(i, b, y, {
        propertyIsArray: !0
      });
    }
  }
  if ("@value" in i && !(i["@type"] === "@json" && Pn(e, 1.1))) {
    if ((Ne(p) || je(p)) && !a.isFrame)
      throw new Y(
        'Invalid JSON-LD syntax; "@value" value must not be an object or an array.',
        "jsonld.SyntaxError",
        { code: "invalid value object value", value: p }
      );
  }
  for (const l of h) {
    const f = je(r[l]) ? r[l] : [r[l]];
    for (const y of f) {
      if (!Ne(y) || Object.keys(y).some((b) => ae(e, b, { vocab: !0 }, a) === "@value"))
        throw new Y(
          "Invalid JSON-LD syntax; nested value must be a node object.",
          "jsonld.SyntaxError",
          { code: "invalid @nest value", value: y }
        );
      await $a({
        activeCtx: e,
        activeProperty: t,
        expandedActiveProperty: n,
        element: y,
        expandedParent: i,
        options: a,
        insideList: o,
        typeScopedContext: d,
        typeKey: s
      });
    }
  }
}
function Ma({ activeCtx: e, activeProperty: t, value: n, options: r }) {
  if (n == null)
    return null;
  const i = ae(
    e,
    t,
    { vocab: !0 },
    r
  );
  if (i === "@id")
    return ae(e, n, { base: !0 }, r);
  if (i === "@type")
    return ae(
      e,
      n,
      { vocab: !0, base: !0 },
      { ...r, typeExpansion: !0 }
    );
  const a = Re(e, t, "@type");
  if ((a === "@id" || i === "@graph") && he(n)) {
    const s = ae(e, n, { base: !0 }, r);
    return s === null && n.match(dc) && r.eventHandler && Te({
      event: {
        type: ["JsonLdEvent"],
        code: "reserved @id value",
        level: "warning",
        message: "Reserved @id found.",
        details: {
          id: t
        }
      },
      options: r
    }), { "@id": s };
  }
  if (a === "@vocab" && he(n))
    return {
      "@id": ae(e, n, { vocab: !0, base: !0 }, r)
    };
  if (si(i))
    return n;
  const o = {};
  if (a && !["@id", "@vocab", "@none"].includes(a))
    o["@type"] = a;
  else if (he(n)) {
    const s = Re(e, t, "@language");
    s !== null && (o["@language"] = s);
    const d = Re(e, t, "@direction");
    d !== null && (o["@direction"] = d);
  }
  return ["boolean", "number", "string"].includes(typeof n) || (n = n.toString()), o["@value"] = n, o;
}
function pc(e, t, n, r) {
  const i = [], a = Object.keys(t).sort();
  for (const o of a) {
    const s = ae(e, o, { vocab: !0 }, r);
    let d = t[o];
    je(d) || (d = [d]);
    for (const c of d) {
      if (c === null)
        continue;
      if (!he(c))
        throw new Y(
          "Invalid JSON-LD syntax; language map values must be strings.",
          "jsonld.SyntaxError",
          { code: "invalid language map value", languageMap: t }
        );
      const h = { "@value": c };
      s !== "@none" && (o.match(La) || r.eventHandler && Te({
        event: {
          type: ["JsonLdEvent"],
          code: "invalid @language value",
          level: "warning",
          message: "@language value must be valid BCP47.",
          details: {
            language: o
          }
        },
        options: r
      }), h["@language"] = o.toLowerCase()), n && (h["@direction"] = n), i.push(h);
    }
  }
  return i;
}
async function Rr({
  activeCtx: e,
  options: t,
  activeProperty: n,
  value: r,
  asGraph: i,
  indexKey: a,
  propertyIndex: o
}) {
  const s = [], d = Object.keys(r).sort(), c = a === "@type";
  for (let h of d) {
    if (c) {
      const l = Re(e, h, "@context");
      Jn(l) || (e = await hn({
        activeCtx: e,
        localCtx: l,
        propagate: !1,
        options: t
      }));
    }
    let p = r[h];
    je(p) || (p = [p]), p = await ft.expand({
      activeCtx: e,
      activeProperty: n,
      element: p,
      options: t,
      insideList: !1,
      insideIndex: !0
    });
    let u;
    o ? h === "@none" ? u = "@none" : u = Ma(
      { activeCtx: e, activeProperty: a, value: h, options: t }
    ) : u = ae(e, h, { vocab: !0 }, t), a === "@id" ? h = ae(e, h, { base: !0 }, t) : c && (h = u);
    for (let l of p) {
      if (i && !lc(l) && (l = { "@graph": [l] }), a === "@type")
        u === "@none" || (l["@type"] ? l["@type"] = [h].concat(l["@type"]) : l["@type"] = [h]);
      else {
        if (ai(l) && !["@language", "@type", "@index"].includes(a))
          throw new Y(
            `Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${a}".`,
            "jsonld.SyntaxError",
            { code: "invalid value object", value: l }
          );
        o ? u !== "@none" && Ee(l, o, u, {
          propertyIsArray: !0,
          prependValue: !0
        }) : u !== "@none" && !(a in l) && (l[a] = h);
      }
      s.push(l);
    }
  }
  return s;
}
const { isKeyword: Pa } = kt, Ge = ot, Ir = Ae, qe = $e, gc = ke, we = {};
var Qn = we;
we.createMergedNodeMap = (e, t) => {
  t = t || {};
  const n = t.issuer || new qe.IdentifierIssuer("_:b"), r = { "@default": {} };
  return we.createNodeMap(e, r, "@default", n), we.mergeNodeMaps(r);
};
we.createNodeMap = (e, t, n, r, i, a) => {
  if (Ir.isArray(e)) {
    for (const c of e)
      we.createNodeMap(c, t, n, r, void 0, a);
    return;
  }
  if (!Ir.isObject(e)) {
    a && a.push(e);
    return;
  }
  if (Ge.isValue(e)) {
    if ("@type" in e) {
      let c = e["@type"];
      c.indexOf("_:") === 0 && (e["@type"] = c = r.getId(c));
    }
    a && a.push(e);
    return;
  } else if (a && Ge.isList(e)) {
    const c = [];
    we.createNodeMap(e["@list"], t, n, r, i, c), a.push({ "@list": c });
    return;
  }
  if ("@type" in e) {
    const c = e["@type"];
    for (const h of c)
      h.indexOf("_:") === 0 && r.getId(h);
  }
  Ir.isUndefined(i) && (i = Ge.isBlankNode(e) ? r.getId(e["@id"]) : e["@id"]), a && a.push({ "@id": i });
  const o = t[n], s = o[i] = o[i] || {};
  s["@id"] = i;
  const d = Object.keys(e).sort();
  for (let c of d) {
    if (c === "@id")
      continue;
    if (c === "@reverse") {
      const p = { "@id": i }, u = e["@reverse"];
      for (const l in u) {
        const f = u[l];
        for (const y of f) {
          let b = y["@id"];
          Ge.isBlankNode(y) && (b = r.getId(b)), we.createNodeMap(y, t, n, r, b), qe.addValue(
            o[b],
            l,
            p,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        }
      }
      continue;
    }
    if (c === "@graph") {
      i in t || (t[i] = {}), we.createNodeMap(e[c], t, i, r);
      continue;
    }
    if (c === "@included") {
      we.createNodeMap(e[c], t, n, r);
      continue;
    }
    if (c !== "@type" && Pa(c)) {
      if (c === "@index" && c in s && (e[c] !== s[c] || e[c]["@id"] !== s[c]["@id"]))
        throw new gc(
          "Invalid JSON-LD syntax; conflicting @index property detected.",
          "jsonld.SyntaxError",
          { code: "conflicting indexes", subject: s }
        );
      s[c] = e[c];
      continue;
    }
    const h = e[c];
    if (c.indexOf("_:") === 0 && (c = r.getId(c)), h.length === 0) {
      qe.addValue(s, c, [], { propertyIsArray: !0 });
      continue;
    }
    for (let p of h)
      if (c === "@type" && (p = p.indexOf("_:") === 0 ? r.getId(p) : p), Ge.isSubject(p) || Ge.isSubjectReference(p)) {
        if ("@id" in p && !p["@id"])
          continue;
        const u = Ge.isBlankNode(p) ? r.getId(p["@id"]) : p["@id"];
        qe.addValue(
          s,
          c,
          { "@id": u },
          { propertyIsArray: !0, allowDuplicate: !1 }
        ), we.createNodeMap(p, t, n, r, u);
      } else if (Ge.isValue(p))
        qe.addValue(
          s,
          c,
          p,
          { propertyIsArray: !0, allowDuplicate: !1 }
        );
      else if (Ge.isList(p)) {
        const u = [];
        we.createNodeMap(p["@list"], t, n, r, i, u), p = { "@list": u }, qe.addValue(
          s,
          c,
          p,
          { propertyIsArray: !0, allowDuplicate: !1 }
        );
      } else
        we.createNodeMap(p, t, n, r, i), qe.addValue(
          s,
          c,
          p,
          { propertyIsArray: !0, allowDuplicate: !1 }
        );
  }
};
we.mergeNodeMapGraphs = (e) => {
  const t = {};
  for (const n of Object.keys(e).sort())
    for (const r of Object.keys(e[n]).sort()) {
      const i = e[n][r];
      r in t || (t[r] = { "@id": r });
      const a = t[r];
      for (const o of Object.keys(i).sort())
        if (Pa(o) && o !== "@type")
          a[o] = qe.clone(i[o]);
        else
          for (const s of i[o])
            qe.addValue(
              a,
              o,
              qe.clone(s),
              { propertyIsArray: !0, allowDuplicate: !1 }
            );
    }
  return t;
};
we.mergeNodeMaps = (e) => {
  const t = e["@default"], n = Object.keys(e).sort();
  for (const r of n) {
    if (r === "@default")
      continue;
    const i = e[r];
    let a = t[r];
    a ? "@graph" in a || (a["@graph"] = []) : t[r] = a = {
      "@id": r,
      "@graph": []
    };
    const o = a["@graph"];
    for (const s of Object.keys(i).sort()) {
      const d = i[s];
      Ge.isSubjectReference(d) || o.push(d);
    }
  }
  return t;
};
const {
  isSubjectReference: yc
} = ot, {
  createMergedNodeMap: bc
} = Qn, Fa = {};
var wc = Fa;
Fa.flatten = (e) => {
  const t = bc(e), n = [], r = Object.keys(t).sort();
  for (let i = 0; i < r.length; ++i) {
    const a = t[r[i]];
    yc(a) || n.push(a);
  }
  return n;
};
const li = ke, Ar = ot, ln = Ae, {
  REGEX_BCP47: po,
  addValue: go
} = $e, {
  handleEvent: yo
} = wn, {
  // RDF,
  RDF_LIST: mc,
  RDF_FIRST: xr,
  RDF_REST: Nr,
  RDF_NIL: Dr,
  RDF_TYPE: vc,
  // RDF_PLAIN_LITERAL,
  // RDF_XML_LITERAL,
  RDF_JSON_LITERAL: _c,
  // RDF_OBJECT,
  // RDF_LANGSTRING,
  // XSD,
  XSD_BOOLEAN: bo,
  XSD_DOUBLE: wo,
  XSD_INTEGER: mo,
  XSD_STRING: Tr
} = xi, Wa = {};
var Sc = Wa;
Wa.fromRDF = async (e, t) => {
  const {
    useRdfType: n = !1,
    useNativeTypes: r = !1,
    rdfDirection: i = null
  } = t, a = {}, o = { "@default": a }, s = {};
  if (i) {
    if (i === "compound-literal")
      throw new li(
        "Unsupported rdfDirection value.",
        "jsonld.InvalidRdfDirection",
        { value: i }
      );
    if (i !== "i18n-datatype")
      throw new li(
        "Unknown rdfDirection value.",
        "jsonld.InvalidRdfDirection",
        { value: i }
      );
  }
  for (const h of e) {
    const p = h.graph.termType === "DefaultGraph" ? "@default" : h.graph.value;
    p in o || (o[p] = {}), p !== "@default" && !(p in a) && (a[p] = { "@id": p });
    const u = o[p], l = h.subject.value, f = h.predicate.value, y = h.object;
    l in u || (u[l] = { "@id": l });
    const b = u[l], m = y.termType.endsWith("Node");
    if (m && !(y.value in u) && (u[y.value] = { "@id": y.value }), f === vc && !n && m) {
      go(b, "@type", y.value, { propertyIsArray: !0 });
      continue;
    }
    const S = Ec(y, r, i, t);
    if (go(b, f, S, { propertyIsArray: !0 }), m)
      if (y.value === Dr) {
        const v = u[y.value];
        "usages" in v || (v.usages = []), v.usages.push({
          node: b,
          property: f,
          value: S
        });
      } else
        y.value in s ? s[y.value] = !1 : s[y.value] = {
          node: b,
          property: f,
          value: S
        };
  }
  for (const h in o) {
    const p = o[h];
    if (!(Dr in p))
      continue;
    const u = p[Dr];
    if (u.usages) {
      for (let l of u.usages) {
        let f = l.node, y = l.property, b = l.value;
        const m = [], S = [];
        let v = Object.keys(f).length;
        for (; y === Nr && ln.isObject(s[f["@id"]]) && ln.isArray(f[xr]) && f[xr].length === 1 && ln.isArray(f[Nr]) && f[Nr].length === 1 && (v === 3 || v === 4 && ln.isArray(f["@type"]) && f["@type"].length === 1 && f["@type"][0] === mc) && (m.push(f[xr][0]), S.push(f["@id"]), l = s[f["@id"]], f = l.node, y = l.property, b = l.value, v = Object.keys(f).length, !!Ar.isBlankNode(f)); )
          ;
        delete b["@id"], b["@list"] = m.reverse();
        for (const R of S)
          delete p[R];
      }
      delete u.usages;
    }
  }
  const d = [], c = Object.keys(a).sort();
  for (const h of c) {
    const p = a[h];
    if (h in o) {
      const u = p["@graph"] = [], l = o[h], f = Object.keys(l).sort();
      for (const y of f) {
        const b = l[y];
        Ar.isSubjectReference(b) || u.push(b);
      }
    }
    Ar.isSubjectReference(p) || d.push(p);
  }
  return d;
};
function Ec(e, t, n, r) {
  if (e.termType.endsWith("Node"))
    return { "@id": e.value };
  const i = { "@value": e.value };
  if (e.language)
    e.language.match(po) || r.eventHandler && yo({
      event: {
        type: ["JsonLdEvent"],
        code: "invalid @language value",
        level: "warning",
        message: "@language value must be valid BCP47.",
        details: {
          language: e.language
        }
      },
      options: r
    }), i["@language"] = e.language;
  else {
    let a = e.datatype.value;
    if (a || (a = Tr), a === _c) {
      a = "@json";
      try {
        i["@value"] = JSON.parse(i["@value"]);
      } catch (o) {
        throw new li(
          "JSON literal could not be parsed.",
          "jsonld.InvalidJsonLiteral",
          { code: "invalid JSON literal", value: i["@value"], cause: o }
        );
      }
    }
    if (t) {
      if (a === bo)
        i["@value"] === "true" ? i["@value"] = !0 : i["@value"] === "false" && (i["@value"] = !1);
      else if (ln.isNumeric(i["@value"]))
        if (a === mo) {
          const o = parseInt(i["@value"], 10);
          o.toFixed(0) === i["@value"] && (i["@value"] = o);
        } else
          a === wo && (i["@value"] = parseFloat(i["@value"]));
      [bo, mo, wo, Tr].includes(a) || (i["@type"] = a);
    } else if (n === "i18n-datatype" && a.startsWith("https://www.w3.org/ns/i18n#")) {
      const [, o, s] = a.split(/[#_]/);
      o.length > 0 && (i["@language"] = o, o.match(po) || r.eventHandler && yo({
        event: {
          type: ["JsonLdEvent"],
          code: "invalid @language value",
          level: "warning",
          message: "@language value must be valid BCP47.",
          details: {
            language: o
          }
        },
        options: r
      })), i["@direction"] = s;
    } else
      a !== Tr && (i["@type"] = a);
  }
  return i;
}
const { createNodeMap: Rc } = Qn, { isKeyword: Ic } = kt, vo = ot, Ac = il, _o = ke, an = Ae, xc = $e, {
  handleEvent: xt
} = wn, {
  // RDF,
  // RDF_LIST,
  RDF_FIRST: Nc,
  RDF_REST: Dc,
  RDF_NIL: Tc,
  RDF_TYPE: Oc,
  // RDF_PLAIN_LITERAL,
  // RDF_XML_LITERAL,
  RDF_JSON_LITERAL: jc,
  // RDF_OBJECT,
  RDF_LANGSTRING: Lc,
  // XSD,
  XSD_BOOLEAN: kc,
  XSD_DOUBLE: So,
  XSD_INTEGER: $c,
  XSD_STRING: Mc
} = xi, {
  isAbsolute: Gn
} = pt, Ba = {};
var Pc = Ba;
Ba.toRDF = (e, t) => {
  const n = new xc.IdentifierIssuer("_:b"), r = { "@default": {} };
  Rc(e, r, "@default", n);
  const i = [], a = Object.keys(r).sort();
  for (const o of a) {
    let s;
    if (o === "@default")
      s = { termType: "DefaultGraph", value: "" };
    else if (Gn(o))
      o.startsWith("_:") ? s = { termType: "BlankNode" } : s = { termType: "NamedNode" }, s.value = o;
    else {
      t.eventHandler && xt({
        event: {
          type: ["JsonLdEvent"],
          code: "relative graph reference",
          level: "warning",
          message: "Relative graph reference found.",
          details: {
            graph: o
          }
        },
        options: t
      });
      continue;
    }
    Fc(i, r[o], s, n, t);
  }
  return i;
};
function Fc(e, t, n, r, i) {
  const a = Object.keys(t).sort();
  for (const o of a) {
    const s = t[o], d = Object.keys(s).sort();
    for (let c of d) {
      const h = s[c];
      if (c === "@type")
        c = Oc;
      else if (Ic(c))
        continue;
      for (const p of h) {
        const u = {
          termType: o.startsWith("_:") ? "BlankNode" : "NamedNode",
          value: o
        };
        if (!Gn(o)) {
          i.eventHandler && xt({
            event: {
              type: ["JsonLdEvent"],
              code: "relative subject reference",
              level: "warning",
              message: "Relative subject reference found.",
              details: {
                subject: o
              }
            },
            options: i
          });
          continue;
        }
        const l = {
          termType: c.startsWith("_:") ? "BlankNode" : "NamedNode",
          value: c
        };
        if (!Gn(c)) {
          i.eventHandler && xt({
            event: {
              type: ["JsonLdEvent"],
              code: "relative predicate reference",
              level: "warning",
              message: "Relative predicate reference found.",
              details: {
                predicate: c
              }
            },
            options: i
          });
          continue;
        }
        if (l.termType === "BlankNode" && !i.produceGeneralizedRdf) {
          i.eventHandler && xt({
            event: {
              type: ["JsonLdEvent"],
              code: "blank node predicate",
              level: "warning",
              message: "Dropping blank node predicate.",
              details: {
                // FIXME: add better issuer API to get reverse mapping
                property: r.getOldIds().find((y) => r.getId(y) === c)
              }
            },
            options: i
          });
          continue;
        }
        const f = ci(
          p,
          r,
          e,
          n,
          i.rdfDirection,
          i
        );
        f && e.push({
          subject: u,
          predicate: l,
          object: f,
          graph: n
        });
      }
    }
  }
}
function Wc(e, t, n, r, i, a) {
  const o = { termType: "NamedNode", value: Nc }, s = { termType: "NamedNode", value: Dc }, d = { termType: "NamedNode", value: Tc }, c = e.pop(), h = c ? { termType: "BlankNode", value: t.getId() } : d;
  let p = h;
  for (const u of e) {
    const l = ci(
      u,
      t,
      n,
      r,
      i,
      a
    ), f = { termType: "BlankNode", value: t.getId() };
    n.push({
      subject: p,
      predicate: o,
      object: l,
      graph: r
    }), n.push({
      subject: p,
      predicate: s,
      object: f,
      graph: r
    }), p = f;
  }
  if (c) {
    const u = ci(
      c,
      t,
      n,
      r,
      i,
      a
    );
    n.push({
      subject: p,
      predicate: o,
      object: u,
      graph: r
    }), n.push({
      subject: p,
      predicate: s,
      object: d,
      graph: r
    });
  }
  return h;
}
function ci(e, t, n, r, i, a) {
  const o = {};
  if (vo.isValue(e)) {
    o.termType = "Literal", o.value = void 0, o.datatype = {
      termType: "NamedNode"
    };
    let s = e["@value"];
    const d = e["@type"] || null;
    if (d === "@json")
      o.value = Ac(s), o.datatype.value = jc;
    else if (an.isBoolean(s))
      o.value = s.toString(), o.datatype.value = d || kc;
    else if (an.isDouble(s) || d === So)
      an.isDouble(s) || (s = parseFloat(s)), o.value = s.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), o.datatype.value = d || So;
    else if (an.isNumber(s))
      o.value = s.toFixed(0), o.datatype.value = d || $c;
    else if ("@direction" in e && i === "i18n-datatype") {
      const c = (e["@language"] || "").toLowerCase(), h = e["@direction"], p = `https://www.w3.org/ns/i18n#${c}_${h}`;
      o.datatype.value = p, o.value = s;
    } else {
      if ("@direction" in e && i === "compound-literal")
        throw new _o(
          "Unsupported rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: i }
        );
      if ("@direction" in e && i)
        throw new _o(
          "Unknown rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: i }
        );
      "@language" in e ? ("@direction" in e && !i && a.eventHandler && xt({
        event: {
          type: ["JsonLdEvent"],
          code: "rdfDirection not set",
          level: "warning",
          message: "rdfDirection not set for @direction.",
          details: {
            object: o.value
          }
        },
        options: a
      }), o.value = s, o.datatype.value = d || Lc, o.language = e["@language"]) : ("@direction" in e && !i && a.eventHandler && xt({
        event: {
          type: ["JsonLdEvent"],
          code: "rdfDirection not set",
          level: "warning",
          message: "rdfDirection not set for @direction.",
          details: {
            object: o.value
          }
        },
        options: a
      }), o.value = s, o.datatype.value = d || Mc);
    }
  } else if (vo.isList(e)) {
    const s = Wc(
      e["@list"],
      t,
      n,
      r,
      i,
      a
    );
    o.termType = s.termType, o.value = s.value;
  } else {
    const s = an.isObject(e) ? e["@id"] : e;
    o.termType = s.startsWith("_:") ? "BlankNode" : "NamedNode", o.value = s;
  }
  return o.termType === "NamedNode" && !Gn(o.value) ? (a.eventHandler && xt({
    event: {
      type: ["JsonLdEvent"],
      code: "relative object reference",
      level: "warning",
      message: "Relative object reference found.",
      details: {
        object: o.value
      }
    },
    options: a
  }), null) : o;
}
const { isKeyword: di } = kt, De = ot, V = Ae, de = $e, Eo = pt, pn = ke, {
  createNodeMap: Bc,
  mergeNodeMapGraphs: Hc
} = Qn, Oe = {};
var Uc = Oe;
Oe.frameMergedOrDefault = (e, t, n) => {
  const r = {
    options: n,
    embedded: !1,
    graph: "@default",
    graphMap: { "@default": {} },
    subjectStack: [],
    link: {},
    bnodeMap: {}
  }, i = new de.IdentifierIssuer("_:b");
  Bc(e, r.graphMap, "@default", i), n.merged && (r.graphMap["@merged"] = Hc(r.graphMap), r.graph = "@merged"), r.subjects = r.graphMap[r.graph];
  const a = [];
  Oe.frame(r, Object.keys(r.subjects).sort(), t, a), n.pruneBlankNodeIdentifiers && (n.bnodesToClear = Object.keys(r.bnodeMap).filter((o) => r.bnodeMap[o].length === 1));
  // remove @preserve from results
  return n.link = {}, Wn(a, n);
};
Oe.frame = (e, t, n, r, i = null) => {
  Ha(n), n = n[0];
  const a = e.options, o = {
    embed: Rn(n, a, "embed"),
    explicit: Rn(n, a, "explicit"),
    requireAll: Rn(n, a, "requireAll")
  };
  e.link.hasOwnProperty(e.graph) || (e.link[e.graph] = {});
  const s = e.link[e.graph], d = Gc(e, t, n, o), c = Object.keys(d).sort();
  for (const h of c) {
    const p = d[h];
    if (i === null ? e.uniqueEmbeds = { [e.graph]: {} } : e.uniqueEmbeds[e.graph] = e.uniqueEmbeds[e.graph] || {}, o.embed === "@link" && h in s) {
      mt(r, i, s[h]);
      continue;
    }
    const u = { "@id": h };
    if (h.indexOf("_:") === 0 && de.addValue(e.bnodeMap, h, u, { propertyIsArray: !0 }), s[h] = u, (o.embed === "@first" || o.embed === "@last") && e.is11)
      throw new pn(
        "Invalid JSON-LD syntax; invalid value of @embed.",
        "jsonld.SyntaxError",
        { code: "invalid @embed value", frame: n }
      );
    if (!(!e.embedded && e.uniqueEmbeds[e.graph].hasOwnProperty(h))) {
      if (e.embedded && (o.embed === "@never" || Jc(p, e.graph, e.subjectStack))) {
        mt(r, i, u);
        continue;
      }
      if (e.embedded && (o.embed == "@first" || o.embed == "@once") && e.uniqueEmbeds[e.graph].hasOwnProperty(h)) {
        mt(r, i, u);
        continue;
      }
      if (o.embed === "@last" && h in e.uniqueEmbeds[e.graph] && qc(e, h), e.uniqueEmbeds[e.graph][h] = { parent: r, property: i }, e.subjectStack.push({ subject: p, graph: e.graph }), h in e.graphMap) {
        let l = !1, f = null;
        "@graph" in n ? (f = n["@graph"][0], l = !(h === "@merged" || h === "@default"), V.isObject(f) || (f = {})) : (l = e.graph !== "@merged", f = {}), l && Oe.frame(
          { ...e, graph: h, embedded: !1 },
          Object.keys(e.graphMap[h]).sort(),
          [f],
          u,
          "@graph"
        );
      }
      "@included" in n && Oe.frame(
        { ...e, embedded: !1 },
        t,
        n["@included"],
        u,
        "@included"
      );
      for (const l of Object.keys(p).sort()) {
        if (di(l)) {
          if (u[l] = de.clone(p[l]), l === "@type")
            for (const f of p["@type"])
              f.indexOf("_:") === 0 && de.addValue(
                e.bnodeMap,
                f,
                u,
                { propertyIsArray: !0 }
              );
          continue;
        }
        if (!(o.explicit && !(l in n)))
          for (const f of p[l]) {
            const y = l in n ? n[l] : Ro(o);
            if (De.isList(f)) {
              const b = n[l] && n[l][0] && n[l][0]["@list"] ? n[l][0]["@list"] : Ro(o), m = { "@list": [] };
              mt(u, l, m);
              const S = f["@list"];
              for (const v of S)
                De.isSubjectReference(v) ? Oe.frame(
                  { ...e, embedded: !0 },
                  [v["@id"]],
                  b,
                  m,
                  "@list"
                ) : mt(m, "@list", de.clone(v));
            } else
              De.isSubjectReference(f) ? Oe.frame(
                { ...e, embedded: !0 },
                [f["@id"]],
                y,
                u,
                l
              ) : ui(y[0], f) && mt(u, l, de.clone(f));
          }
      }
      for (const l of Object.keys(n).sort()) {
        if (l === "@type") {
          if (!V.isObject(n[l][0]) || !("@default" in n[l][0]))
            continue;
        } else if (di(l))
          continue;
        const f = n[l][0] || {};
        if (!Rn(f, a, "omitDefault") && !(l in u)) {
          let b = "@null";
          "@default" in f && (b = de.clone(f["@default"])), V.isArray(b) || (b = [b]), u[l] = [{ "@preserve": b }];
        }
      }
      for (const l of Object.keys(n["@reverse"] || {}).sort()) {
        const f = n["@reverse"][l];
        for (const y of Object.keys(e.subjects))
          de.getValues(e.subjects[y], l).some((m) => m["@id"] === h) && (u["@reverse"] = u["@reverse"] || {}, de.addValue(
            u["@reverse"],
            l,
            [],
            { propertyIsArray: !0 }
          ), Oe.frame(
            { ...e, embedded: !0 },
            [y],
            f,
            u["@reverse"][l],
            i
          ));
      }
      mt(r, i, u), e.subjectStack.pop();
    }
  }
};
Oe.cleanupNull = (e, t) => {
  if (V.isArray(e))
    return e.map((r) => Oe.cleanupNull(r, t)).filter((r) => r);
  if (e === "@null")
    return null;
  if (V.isObject(e)) {
    if ("@id" in e) {
      const n = e["@id"];
      if (t.link.hasOwnProperty(n)) {
        const r = t.link[n].indexOf(e);
        if (r !== -1)
          return t.link[n][r];
        t.link[n].push(e);
      } else
        t.link[n] = [e];
    }
    for (const n in e)
      e[n] = Oe.cleanupNull(e[n], t);
  }
  return e;
};
function Ro(e) {
  const t = {};
  for (const n in e)
    e[n] !== void 0 && (t["@" + n] = [e[n]]);
  return [t];
}
function Jc(e, t, n) {
  for (let r = n.length - 1; r >= 0; --r) {
    const i = n[r];
    if (i.graph === t && i.subject["@id"] === e["@id"])
      return !0;
  }
  return !1;
}
function Rn(e, t, n) {
  const r = "@" + n;
  let i = r in e ? e[r][0] : t[n];
  if (n === "embed") {
    if (i === !0)
      i = "@once";
    else if (i === !1)
      i = "@never";
    else if (i !== "@always" && i !== "@never" && i !== "@link" && i !== "@first" && i !== "@last" && i !== "@once")
      throw new pn(
        "Invalid JSON-LD syntax; invalid value of @embed.",
        "jsonld.SyntaxError",
        { code: "invalid @embed value", frame: e }
      );
  }
  return i;
}
function Ha(e) {
  if (!V.isArray(e) || e.length !== 1 || !V.isObject(e[0]))
    throw new pn(
      "Invalid JSON-LD syntax; a JSON-LD frame must be a single object.",
      "jsonld.SyntaxError",
      { frame: e }
    );
  if ("@id" in e[0]) {
    for (const t of de.asArray(e[0]["@id"]))
      if (!(V.isObject(t) || Eo.isAbsolute(t)) || V.isString(t) && t.indexOf("_:") === 0)
        throw new pn(
          "Invalid JSON-LD syntax; invalid @id in frame.",
          "jsonld.SyntaxError",
          { code: "invalid frame", frame: e }
        );
  }
  if ("@type" in e[0]) {
    for (const t of de.asArray(e[0]["@type"]))
      if (!(V.isObject(t) || Eo.isAbsolute(t) || t === "@json") || V.isString(t) && t.indexOf("_:") === 0)
        throw new pn(
          "Invalid JSON-LD syntax; invalid @type in frame.",
          "jsonld.SyntaxError",
          { code: "invalid frame", frame: e }
        );
  }
}
function Gc(e, t, n, r) {
  const i = {};
  for (const a of t) {
    const o = e.graphMap[e.graph][a];
    Ua(e, o, n, r) && (i[a] = o);
  }
  return i;
}
function Ua(e, t, n, r) {
  let i = !0, a = !1;
  for (const o in n) {
    let s = !1;
    const d = de.getValues(t, o), c = de.getValues(n, o).length === 0;
    if (o === "@id") {
      if (V.isEmptyObject(n["@id"][0] || {}) ? s = !0 : n["@id"].length >= 0 && (s = n["@id"].includes(d[0])), !r.requireAll)
        return s;
    } else if (o === "@type") {
      if (i = !1, c) {
        if (d.length > 0)
          return !1;
        s = !0;
      } else if (n["@type"].length === 1 && V.isEmptyObject(n["@type"][0]))
        s = d.length > 0;
      else
        for (const h of n["@type"])
          V.isObject(h) && "@default" in h ? s = !0 : s = s || d.some((p) => p === h);
      if (!r.requireAll)
        return s;
    } else {
      if (di(o))
        continue;
      {
        const h = de.getValues(n, o)[0];
        let p = !1;
        if (h && (Ha([h]), p = "@default" in h), i = !1, d.length === 0 && p)
          continue;
        if (d.length > 0 && c)
          return !1;
        if (h === void 0) {
          if (d.length > 0)
            return !1;
          s = !0;
        } else if (De.isList(h)) {
          const u = h["@list"][0];
          if (De.isList(d[0])) {
            const l = d[0]["@list"];
            De.isValue(u) ? s = l.some((f) => ui(u, f)) : (De.isSubject(u) || De.isSubjectReference(u)) && (s = l.some((f) => Io(
              e,
              u,
              f,
              r
            )));
          }
        } else
          De.isValue(h) ? s = d.some((u) => ui(h, u)) : De.isSubjectReference(h) ? s = d.some((u) => Io(e, h, u, r)) : V.isObject(h) ? s = d.length > 0 : s = !1;
      }
    }
    if (!s && r.requireAll)
      return !1;
    a = a || s;
  }
  return i || a;
}
function qc(e, t) {
  const n = e.uniqueEmbeds[e.graph], r = n[t], i = r.parent, a = r.property, o = { "@id": t };
  if (V.isArray(i)) {
    for (let d = 0; d < i.length; ++d)
      if (de.compareValues(i[d], o)) {
        i[d] = o;
        break;
      }
  } else {
    const d = V.isArray(i[a]);
    de.removeValue(i, a, o, { propertyIsArray: d }), de.addValue(i, a, o, { propertyIsArray: d });
  }
  const s = (d) => {
    const c = Object.keys(n);
    for (const h of c)
      h in n && V.isObject(n[h].parent) && n[h].parent["@id"] === d && (delete n[h], s(h));
  };
  s(t);
}
/**
 * Removes the @preserve keywords from expanded result of framing.
 *
 * @param input the framed, framed output.
 * @param options the framing options used.
 *
 * @return the resulting output.
 */
function Wn(e, t) {
  if (V.isArray(e))
    return e.map((n) => Wn(n, t));
  if (V.isObject(e)) {
    // remove @preserve
    if ("@preserve" in e)
      return e["@preserve"][0];
    if (De.isValue(e))
      return e;
    if (De.isList(e))
      return e["@list"] = Wn(e["@list"], t), e;
    if ("@id" in e) {
      const n = e["@id"];
      if (t.link.hasOwnProperty(n)) {
        const r = t.link[n].indexOf(e);
        if (r !== -1)
          return t.link[n][r];
        t.link[n].push(e);
      } else
        t.link[n] = [e];
    }
    for (const n in e) {
      if (n === "@id" && t.bnodesToClear.includes(e[n])) {
        delete e["@id"];
        continue;
      }
      e[n] = Wn(e[n], t);
    }
  }
  return e;
}
function mt(e, t, n) {
  V.isObject(e) ? de.addValue(e, t, n, { propertyIsArray: !0 }) : e.push(n);
}
function Io(e, t, n, r) {
  if (!("@id" in n))
    return !1;
  const i = e.subjects[n["@id"]];
  return i && Ua(e, i, t, r);
}
function ui(e, t) {
  const n = t["@value"], r = t["@type"], i = t["@language"], a = e["@value"] ? V.isArray(e["@value"]) ? e["@value"] : [e["@value"]] : [], o = e["@type"] ? V.isArray(e["@type"]) ? e["@type"] : [e["@type"]] : [], s = e["@language"] ? V.isArray(e["@language"]) ? e["@language"] : [e["@language"]] : [];
  return a.length === 0 && o.length === 0 && s.length === 0 ? !0 : !(!(a.includes(n) || V.isEmptyObject(a[0])) || !(!r && o.length === 0 || o.includes(r) || r && V.isEmptyObject(o[0])) || !(!i && s.length === 0 || s.includes(i) || i && V.isEmptyObject(s[0])));
}
const Ti = ke, {
  isArray: lt,
  isObject: ht,
  isString: Ja,
  isUndefined: Or
} = Ae, {
  isList: fi,
  isValue: tt,
  isGraph: Ga,
  isSimpleGraph: Ao,
  isSubjectReference: jr
} = ot, {
  expandIri: qa,
  getContextValue: be,
  isKeyword: Va,
  process: Lr,
  processingMode: Vc
} = kt, {
  removeBase: xo,
  prependBase: Cc
} = pt, {
  REGEX_KEYWORD: zc,
  addValue: Se,
  asArray: In,
  compareShortestLeast: Xc
} = $e, W = {};
var Kc = W;
W.compact = async ({
  activeCtx: e,
  activeProperty: t = null,
  element: n,
  options: r = {}
}) => {
  if (lt(n)) {
    let a = [];
    for (let o = 0; o < n.length; ++o) {
      const s = await W.compact({
        activeCtx: e,
        activeProperty: t,
        element: n[o],
        options: r
      });
      s !== null && a.push(s);
    }
    return r.compactArrays && a.length === 1 && (be(
      e,
      t,
      "@container"
    ) || []).length === 0 && (a = a[0]), a;
  }
  const i = be(e, t, "@context");
  if (Or(i) || (e = await Lr({
    activeCtx: e,
    localCtx: i,
    propagate: !0,
    overrideProtected: !0,
    options: r
  })), ht(n)) {
    if (r.link && "@id" in n && r.link.hasOwnProperty(n["@id"])) {
      const u = r.link[n["@id"]];
      for (let l = 0; l < u.length; ++l)
        if (u[l].expanded === n)
          return u[l].compacted;
    }
    if (tt(n) || jr(n)) {
      const u = W.compactValue({ activeCtx: e, activeProperty: t, value: n, options: r });
      return r.link && jr(n) && (r.link.hasOwnProperty(n["@id"]) || (r.link[n["@id"]] = []), r.link[n["@id"]].push({ expanded: n, compacted: u })), u;
    }
    if (fi(n) && (be(
      e,
      t,
      "@container"
    ) || []).includes("@list"))
      return W.compact({
        activeCtx: e,
        activeProperty: t,
        element: n["@list"],
        options: r
      });
    const a = t === "@reverse", o = {}, s = e;
    !tt(n) && !jr(n) && (e = e.revertToPreviousContext());
    const d = be(s, t, "@context");
    Or(d) || (e = await Lr({
      activeCtx: e,
      localCtx: d,
      propagate: !0,
      overrideProtected: !0,
      options: r
    })), r.link && "@id" in n && (r.link.hasOwnProperty(n["@id"]) || (r.link[n["@id"]] = []), r.link[n["@id"]].push({ expanded: n, compacted: o }));
    let c = n["@type"] || [];
    c.length > 1 && (c = Array.from(c).sort());
    const h = e;
    for (const u of c) {
      const l = W.compactIri(
        { activeCtx: h, iri: u, relativeTo: { vocab: !0 } }
      ), f = be(s, l, "@context");
      Or(f) || (e = await Lr({
        activeCtx: e,
        localCtx: f,
        options: r,
        propagate: !1
      }));
    }
    const p = Object.keys(n).sort();
    for (const u of p) {
      const l = n[u];
      if (u === "@id") {
        let f = In(l).map(
          (b) => W.compactIri({
            activeCtx: e,
            iri: b,
            relativeTo: { vocab: !1 },
            base: r.base
          })
        );
        f.length === 1 && (f = f[0]);
        const y = W.compactIri(
          { activeCtx: e, iri: "@id", relativeTo: { vocab: !0 } }
        );
        o[y] = f;
        continue;
      }
      if (u === "@type") {
        let f = In(l).map(
          (v) => W.compactIri({
            activeCtx: s,
            iri: v,
            relativeTo: { vocab: !0 }
          })
        );
        f.length === 1 && (f = f[0]);
        const y = W.compactIri(
          { activeCtx: e, iri: "@type", relativeTo: { vocab: !0 } }
        ), S = (be(
          e,
          y,
          "@container"
        ) || []).includes("@set") && Vc(e, 1.1) || lt(f) && l.length === 0;
        Se(o, y, f, { propertyIsArray: S });
        continue;
      }
      if (u === "@reverse") {
        const f = await W.compact({
          activeCtx: e,
          activeProperty: "@reverse",
          element: l,
          options: r
        });
        for (const y in f)
          if (e.mappings.has(y) && e.mappings.get(y).reverse) {
            const b = f[y], S = (be(
              e,
              y,
              "@container"
            ) || []).includes("@set") || !r.compactArrays;
            Se(
              o,
              y,
              b,
              { propertyIsArray: S }
            ), delete f[y];
          }
        if (Object.keys(f).length > 0) {
          const y = W.compactIri({
            activeCtx: e,
            iri: u,
            relativeTo: { vocab: !0 }
          });
          Se(o, y, f);
        }
        continue;
      }
      if (u === "@preserve") {
        const f = await W.compact({
          activeCtx: e,
          activeProperty: t,
          element: l,
          options: r
        });
        lt(f) && f.length === 0 || Se(o, u, f);
        continue;
      }
      if (u === "@index") {
        if ((be(
          e,
          t,
          "@container"
        ) || []).includes("@index"))
          continue;
        const y = W.compactIri({
          activeCtx: e,
          iri: u,
          relativeTo: { vocab: !0 }
        });
        Se(o, y, l);
        continue;
      }
      if (u !== "@graph" && u !== "@list" && u !== "@included" && Va(u)) {
        const f = W.compactIri({
          activeCtx: e,
          iri: u,
          relativeTo: { vocab: !0 }
        });
        Se(o, f, l);
        continue;
      }
      if (!lt(l))
        throw new Ti(
          "JSON-LD expansion error; expanded value must be an array.",
          "jsonld.SyntaxError"
        );
      if (l.length === 0) {
        const f = W.compactIri({
          activeCtx: e,
          iri: u,
          value: l,
          relativeTo: { vocab: !0 },
          reverse: a
        }), y = e.mappings.has(f) ? e.mappings.get(f)["@nest"] : null;
        let b = o;
        y && (No(e, y, r), ht(o[y]) || (o[y] = {}), b = o[y]), Se(
          b,
          f,
          l,
          {
            propertyIsArray: !0
          }
        );
      }
      for (const f of l) {
        const y = W.compactIri({
          activeCtx: e,
          iri: u,
          value: f,
          relativeTo: { vocab: !0 },
          reverse: a
        }), b = e.mappings.has(y) ? e.mappings.get(y)["@nest"] : null;
        let m = o;
        b && (No(e, b, r), ht(o[b]) || (o[b] = {}), m = o[b]);
        const S = be(
          e,
          y,
          "@container"
        ) || [], v = Ga(f), R = fi(f);
        let x;
        R ? x = f["@list"] : v && (x = f["@graph"]);
        let I = await W.compact({
          activeCtx: e,
          activeProperty: y,
          element: R || v ? x : f,
          options: r
        });
        if (R)
          if (lt(I) || (I = [I]), !S.includes("@list"))
            I = {
              [W.compactIri({
                activeCtx: e,
                iri: "@list",
                relativeTo: { vocab: !0 }
              })]: I
            }, "@index" in f && (I[W.compactIri({
              activeCtx: e,
              iri: "@index",
              relativeTo: { vocab: !0 }
            })] = f["@index"]);
          else {
            Se(m, y, I, {
              valueIsArray: !0,
              allowDuplicate: !0
            });
            continue;
          }
        if (v)
          if (S.includes("@graph") && (S.includes("@id") || S.includes("@index") && Ao(f))) {
            let G;
            m.hasOwnProperty(y) ? G = m[y] : m[y] = G = {};
            const k = (S.includes("@id") ? f["@id"] : f["@index"]) || W.compactIri({
              activeCtx: e,
              iri: "@none",
              relativeTo: { vocab: !0 }
            });
            Se(
              G,
              k,
              I,
              {
                propertyIsArray: !r.compactArrays || S.includes("@set")
              }
            );
          } else
            S.includes("@graph") && Ao(f) ? (lt(I) && I.length > 1 && (I = { "@included": I }), Se(
              m,
              y,
              I,
              {
                propertyIsArray: !r.compactArrays || S.includes("@set")
              }
            )) : (lt(I) && I.length === 1 && r.compactArrays && (I = I[0]), I = {
              [W.compactIri({
                activeCtx: e,
                iri: "@graph",
                relativeTo: { vocab: !0 }
              })]: I
            }, "@id" in f && (I[W.compactIri({
              activeCtx: e,
              iri: "@id",
              relativeTo: { vocab: !0 }
            })] = f["@id"]), "@index" in f && (I[W.compactIri({
              activeCtx: e,
              iri: "@index",
              relativeTo: { vocab: !0 }
            })] = f["@index"]), Se(
              m,
              y,
              I,
              {
                propertyIsArray: !r.compactArrays || S.includes("@set")
              }
            ));
        else if (S.includes("@language") || S.includes("@index") || S.includes("@id") || S.includes("@type")) {
          let G;
          m.hasOwnProperty(y) ? G = m[y] : m[y] = G = {};
          let k;
          if (S.includes("@language"))
            tt(I) && (I = I["@value"]), k = f["@language"];
          else if (S.includes("@index")) {
            const F = be(
              e,
              y,
              "@index"
            ) || "@index", ne = W.compactIri(
              { activeCtx: e, iri: F, relativeTo: { vocab: !0 } }
            );
            if (F === "@index")
              k = f["@index"], delete I[ne];
            else {
              let se;
              if ([k, ...se] = In(I[F] || []), !Ja(k))
                k = null;
              else
                switch (se.length) {
                  case 0:
                    delete I[F];
                    break;
                  case 1:
                    I[F] = se[0];
                    break;
                  default:
                    I[F] = se;
                    break;
                }
            }
          } else if (S.includes("@id")) {
            const F = W.compactIri({
              activeCtx: e,
              iri: "@id",
              relativeTo: { vocab: !0 }
            });
            k = I[F], delete I[F];
          } else if (S.includes("@type")) {
            const F = W.compactIri({
              activeCtx: e,
              iri: "@type",
              relativeTo: { vocab: !0 }
            });
            let ne;
            switch ([k, ...ne] = In(I[F] || []), ne.length) {
              case 0:
                delete I[F];
                break;
              case 1:
                I[F] = ne[0];
                break;
              default:
                I[F] = ne;
                break;
            }
            Object.keys(I).length === 1 && "@id" in f && (I = await W.compact({
              activeCtx: e,
              activeProperty: y,
              element: { "@id": f["@id"] },
              options: r
            }));
          }
          k || (k = W.compactIri({
            activeCtx: e,
            iri: "@none",
            relativeTo: { vocab: !0 }
          })), Se(
            G,
            k,
            I,
            {
              propertyIsArray: S.includes("@set")
            }
          );
        } else {
          const G = !r.compactArrays || S.includes("@set") || S.includes("@list") || lt(I) && I.length === 0 || u === "@list" || u === "@graph";
          Se(
            m,
            y,
            I,
            { propertyIsArray: G }
          );
        }
      }
    }
    return o;
  }
  return n;
};
W.compactIri = ({
  activeCtx: e,
  iri: t,
  value: n = null,
  relativeTo: r = { vocab: !1 },
  reverse: i = !1,
  base: a = null
}) => {
  if (t === null)
    return t;
  e.isPropertyTermScoped && e.previousContext && (e = e.previousContext);
  const o = e.getInverse();
  if (Va(t) && t in o && "@none" in o[t] && "@type" in o[t]["@none"] && "@none" in o[t]["@none"]["@type"])
    return o[t]["@none"]["@type"]["@none"];
  if (r.vocab && t in o) {
    const p = e["@language"] || "@none", u = [];
    ht(n) && "@index" in n && !("@graph" in n) && u.push("@index", "@index@set"), ht(n) && "@preserve" in n && (n = n["@preserve"][0]), Ga(n) ? ("@index" in n && u.push(
      "@graph@index",
      "@graph@index@set",
      "@index",
      "@index@set"
    ), "@id" in n && u.push(
      "@graph@id",
      "@graph@id@set"
    ), u.push("@graph", "@graph@set", "@set"), "@index" in n || u.push(
      "@graph@index",
      "@graph@index@set",
      "@index",
      "@index@set"
    ), "@id" in n || u.push("@graph@id", "@graph@id@set")) : ht(n) && !tt(n) && u.push("@id", "@id@set", "@type", "@set@type");
    let l = "@language", f = "@null";
    if (i)
      l = "@type", f = "@reverse", u.push("@set");
    else if (fi(n)) {
      "@index" in n || u.push("@list");
      const b = n["@list"];
      if (b.length === 0)
        l = "@any", f = "@none";
      else {
        let m = b.length === 0 ? p : null, S = null;
        for (let v = 0; v < b.length; ++v) {
          const R = b[v];
          let x = "@none", I = "@none";
          if (tt(R))
            if ("@direction" in R) {
              const G = (R["@language"] || "").toLowerCase(), k = R["@direction"];
              x = `${G}_${k}`;
            } else
              "@language" in R ? x = R["@language"].toLowerCase() : "@type" in R ? I = R["@type"] : x = "@null";
          else
            I = "@id";
          if (m === null ? m = x : x !== m && tt(R) && (m = "@none"), S === null ? S = I : I !== S && (S = "@none"), m === "@none" && S === "@none")
            break;
        }
        m = m || "@none", S = S || "@none", S !== "@none" ? (l = "@type", f = S) : f = m;
      }
    } else {
      if (tt(n))
        if ("@language" in n && !("@index" in n)) {
          u.push("@language", "@language@set"), f = n["@language"];
          const b = n["@direction"];
          b && (f = `${f}_${b}`);
        } else
          "@direction" in n && !("@index" in n) ? f = `_${n["@direction"]}` : "@type" in n && (l = "@type", f = n["@type"]);
      else
        l = "@type", f = "@id";
      u.push("@set");
    }
    u.push("@none"), ht(n) && !("@index" in n) && u.push("@index", "@index@set"), tt(n) && Object.keys(n).length === 1 && u.push("@language", "@language@set");
    const y = Qc(
      e,
      t,
      n,
      u,
      l,
      f
    );
    if (y !== null)
      return y;
  }
  if (r.vocab && "@vocab" in e) {
    const p = e["@vocab"];
    if (t.indexOf(p) === 0 && t !== p) {
      const u = t.substr(p.length);
      if (!e.mappings.has(u))
        return u;
    }
  }
  let s = null;
  const d = [];
  let c = e.fastCurieMap;
  const h = t.length - 1;
  for (let p = 0; p < h && t[p] in c; ++p)
    c = c[t[p]], "" in c && d.push(c[""][0]);
  for (let p = d.length - 1; p >= 0; --p) {
    const u = d[p], l = u.terms;
    for (const f of l) {
      const y = f + ":" + t.substr(u.iri.length);
      e.mappings.get(f)._prefix && (!e.mappings.has(y) || n === null && e.mappings.get(y)["@id"] === t) && (s === null || Xc(y, s) < 0) && (s = y);
    }
  }
  if (s !== null)
    return s;
  for (const [p, u] of e.mappings)
    if (u && u._prefix && t.startsWith(p + ":"))
      throw new Ti(
        `Absolute IRI "${t}" confused with prefix "${p}".`,
        "jsonld.SyntaxError",
        { code: "IRI confused with prefix", context: e }
      );
  if (!r.vocab)
    if ("@base" in e)
      if (e["@base"]) {
        const p = xo(Cc(a, e["@base"]), t);
        return zc.test(p) ? `./${p}` : p;
      } else
        return t;
    else
      return xo(a, t);
  return t;
};
W.compactValue = ({ activeCtx: e, activeProperty: t, value: n, options: r }) => {
  if (tt(n)) {
    const s = be(e, t, "@type"), d = be(e, t, "@language"), c = be(e, t, "@direction"), h = be(e, t, "@container") || [], p = "@index" in n && !h.includes("@index");
    if (!p && s !== "@none" && (n["@type"] === s || "@language" in n && n["@language"] === d && "@direction" in n && n["@direction"] === c || "@language" in n && n["@language"] === d || "@direction" in n && n["@direction"] === c))
      return n["@value"];
    const u = Object.keys(n).length, l = u === 1 || u === 2 && "@index" in n && !p, f = "@language" in e, y = Ja(n["@value"]), b = e.mappings.has(t) && e.mappings.get(t)["@language"] === null;
    if (l && s !== "@none" && (!f || !y || b))
      return n["@value"];
    const m = {};
    return p && (m[W.compactIri({
      activeCtx: e,
      iri: "@index",
      relativeTo: { vocab: !0 }
    })] = n["@index"]), "@type" in n ? m[W.compactIri({
      activeCtx: e,
      iri: "@type",
      relativeTo: { vocab: !0 }
    })] = W.compactIri(
      { activeCtx: e, iri: n["@type"], relativeTo: { vocab: !0 } }
    ) : "@language" in n && (m[W.compactIri({
      activeCtx: e,
      iri: "@language",
      relativeTo: { vocab: !0 }
    })] = n["@language"]), "@direction" in n && (m[W.compactIri({
      activeCtx: e,
      iri: "@direction",
      relativeTo: { vocab: !0 }
    })] = n["@direction"]), m[W.compactIri({
      activeCtx: e,
      iri: "@value",
      relativeTo: { vocab: !0 }
    })] = n["@value"], m;
  }
  const i = qa(
    e,
    t,
    { vocab: !0 },
    r
  ), a = be(e, t, "@type"), o = W.compactIri({
    activeCtx: e,
    iri: n["@id"],
    relativeTo: { vocab: a === "@vocab" },
    base: r.base
  });
  return a === "@id" || a === "@vocab" || i === "@graph" ? o : {
    [W.compactIri({
      activeCtx: e,
      iri: "@id",
      relativeTo: { vocab: !0 }
    })]: o
  };
};
function Qc(e, t, n, r, i, a) {
  a === null && (a = "@null");
  const o = [];
  if ((a === "@id" || a === "@reverse") && ht(n) && "@id" in n) {
    a === "@reverse" && o.push("@reverse");
    const d = W.compactIri(
      { activeCtx: e, iri: n["@id"], relativeTo: { vocab: !0 } }
    );
    e.mappings.has(d) && e.mappings.get(d) && e.mappings.get(d)["@id"] === n["@id"] ? o.push.apply(o, ["@vocab", "@id"]) : o.push.apply(o, ["@id", "@vocab"]);
  } else {
    o.push(a);
    const d = o.find((c) => c.includes("_"));
    d && o.push(d.replace(/^[^_]+_/, "_"));
  }
  o.push("@none");
  const s = e.inverse[t];
  for (const d of r) {
    if (!(d in s))
      continue;
    const c = s[d][i];
    for (const h of o)
      if (h in c)
        return c[h];
  }
  return null;
}
function No(e, t, n) {
  if (qa(e, t, { vocab: !0 }, n) !== "@nest")
    throw new Ti(
      "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
      "jsonld.SyntaxError",
      { code: "invalid @nest value" }
    );
}
var kr, Do;
function Yc() {
  return Do || (Do = 1, kr = (e) => {
    class t {
      toString() {
        return "[object JsonLdProcessor]";
      }
    }
    return Object.defineProperty(t, "prototype", {
      writable: !1,
      enumerable: !1
    }), Object.defineProperty(t.prototype, "constructor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: t
    }), t.compact = function(n, r) {
      return arguments.length < 2 ? Promise.reject(
        new TypeError("Could not compact, too few arguments.")
      ) : e.compact(n, r);
    }, t.expand = function(n) {
      return arguments.length < 1 ? Promise.reject(
        new TypeError("Could not expand, too few arguments.")
      ) : e.expand(n);
    }, t.flatten = function(n) {
      return arguments.length < 1 ? Promise.reject(
        new TypeError("Could not flatten, too few arguments.")
      ) : e.flatten(n);
    }, t;
  }), kr;
}
/**
 * A JavaScript implementation of the JSON-LD API.
 *
 * @author Dave Longley
 *
 * @license BSD 3-Clause License
 * Copyright (c) 2011-2022 Digital Bazaar, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 *
 * Neither the name of the Digital Bazaar, Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
 * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
const To = Ai, Oo = Wl, ct = $e, Ye = Yl, $r = ct.IdentifierIssuer, Ue = ke, Zc = Na, An = ec, { expand: ed } = hc, { flatten: td } = wc, { fromRDF: nd } = Sc, { toRDF: rd } = Pc, {
  frameMergedOrDefault: id,
  cleanupNull: od
} = Uc, {
  isArray: Jt,
  isObject: vt,
  isString: Je
} = Ae, {
  isSubjectReference: ad
} = ot, {
  expandIri: sd,
  getInitialContext: xn,
  process: jo,
  processingMode: Mr
} = kt, {
  compact: ld,
  compactIri: cd
} = Kc, {
  createNodeMap: dd,
  createMergedNodeMap: ud,
  mergeNodeMaps: fd
} = Qn, {
  logEventHandler: hd,
  logWarningEventHandler: pd,
  safeEventHandler: gd,
  setDefaultEventHandler: yd,
  setupEventHandler: bd,
  strictEventHandler: wd,
  unhandledEventHandler: md
} = wn, Ca = function(e) {
  const t = {}, r = new Zc({ max: 100 });
  e.compact = async function(a, o, s) {
    if (arguments.length < 2)
      throw new TypeError("Could not compact, too few arguments.");
    if (o === null)
      throw new Ue(
        "The compaction context must not be null.",
        "jsonld.CompactError",
        { code: "invalid local context" }
      );
    if (a === null)
      return null;
    s = i(s, {
      base: Je(a) ? a : "",
      compactArrays: !0,
      compactToRelative: !0,
      graph: !1,
      skipExpansion: !1,
      link: !1,
      issuer: new $r("_:b"),
      contextResolver: new Ye(
        { sharedCache: r }
      )
    }), s.link && (s.skipExpansion = !0), s.compactToRelative || delete s.base;
    let d;
    s.skipExpansion ? d = a : d = await e.expand(a, s);
    const c = await e.processContext(
      xn(s),
      o,
      s
    );
    let h = await ld({
      activeCtx: c,
      element: d,
      options: s
    });
    s.compactArrays && !s.graph && Jt(h) ? h.length === 1 ? h = h[0] : h.length === 0 && (h = {}) : s.graph && vt(h) && (h = [h]), vt(o) && "@context" in o && (o = o["@context"]), o = ct.clone(o), Jt(o) || (o = [o]);
    const p = o;
    o = [];
    for (let l = 0; l < p.length; ++l)
      (!vt(p[l]) || Object.keys(p[l]).length > 0) && o.push(p[l]);
    const u = o.length > 0;
    if (o.length === 1 && (o = o[0]), Jt(h)) {
      const l = cd({
        activeCtx: c,
        iri: "@graph",
        relativeTo: { vocab: !0 }
      }), f = h;
      h = {}, u && (h["@context"] = o), h[l] = f;
    } else if (vt(h) && u) {
      const l = h;
      h = { "@context": o };
      for (const f in l)
        h[f] = l[f];
    }
    return h;
  }, e.expand = async function(a, o) {
    if (arguments.length < 1)
      throw new TypeError("Could not expand, too few arguments.");
    o = i(o, {
      keepFreeFloatingNodes: !1,
      contextResolver: new Ye(
        { sharedCache: r }
      )
    });
    const s = {}, d = [];
    if ("expandContext" in o) {
      const u = ct.clone(o.expandContext);
      vt(u) && "@context" in u ? s.expandContext = u : s.expandContext = { "@context": u }, d.push(s.expandContext);
    }
    let c;
    if (!Je(a))
      s.input = ct.clone(a);
    else {
      const u = await e.get(a, o);
      c = u.documentUrl, s.input = u.document, u.contextUrl && (s.remoteContext = { "@context": u.contextUrl }, d.push(s.remoteContext));
    }
    "base" in o || (o.base = c || "");
    let h = xn(o);
    for (const u of d)
      h = await jo({ activeCtx: h, localCtx: u, options: o });
    let p = await ed({
      activeCtx: h,
      element: s.input,
      options: o
    });
    return vt(p) && "@graph" in p && Object.keys(p).length === 1 ? p = p["@graph"] : p === null && (p = []), Jt(p) || (p = [p]), p;
  }, e.flatten = async function(a, o, s) {
    if (arguments.length < 1)
      return new TypeError("Could not flatten, too few arguments.");
    typeof o == "function" ? o = null : o = o || null, s = i(s, {
      base: Je(a) ? a : "",
      contextResolver: new Ye(
        { sharedCache: r }
      )
    });
    const d = await e.expand(a, s), c = td(d);
    return o === null ? c : (s.graph = !0, s.skipExpansion = !0, await e.compact(c, o, s));
  }, e.frame = async function(a, o, s) {
    if (arguments.length < 2)
      throw new TypeError("Could not frame, too few arguments.");
    if (s = i(s, {
      base: Je(a) ? a : "",
      embed: "@once",
      explicit: !1,
      requireAll: !1,
      omitDefault: !1,
      bnodesToClear: [],
      contextResolver: new Ye(
        { sharedCache: r }
      )
    }), Je(o)) {
      const b = await e.get(o, s);
      if (o = b.document, b.contextUrl) {
        let m = o["@context"];
        m ? Jt(m) ? m.push(b.contextUrl) : m = [m, b.contextUrl] : m = b.contextUrl, o["@context"] = m;
      }
    }
    const d = o ? o["@context"] || {} : {}, c = await e.processContext(
      xn(s),
      d,
      s
    );
    s.hasOwnProperty("omitGraph") || (s.omitGraph = Mr(c, 1.1)), s.hasOwnProperty("pruneBlankNodeIdentifiers") || (s.pruneBlankNodeIdentifiers = Mr(c, 1.1));
    const h = await e.expand(a, s), p = { ...s };
    p.isFrame = !0, p.keepFreeFloatingNodes = !0;
    const u = await e.expand(o, p), l = Object.keys(o).map((b) => sd(c, b, { vocab: !0 }));
    p.merged = !l.includes("@graph"), p.is11 = Mr(c, 1.1);
    const f = id(h, u, p);
    p.graph = !s.omitGraph, p.skipExpansion = !0, p.link = {}, p.framing = !0;
    let y = await e.compact(f, d, p);
    return p.link = {}, y = od(y, p), y;
  }, e.link = async function(a, o, s) {
    const d = {};
    return o && (d["@context"] = o), d["@embed"] = "@link", e.frame(a, d, s);
  }, e.normalize = e.canonize = async function(a, o) {
    if (arguments.length < 1)
      throw new TypeError("Could not canonize, too few arguments.");
    if (o = i(o, {
      base: Je(a) ? a : null,
      algorithm: "URDNA2015",
      skipExpansion: !1,
      safe: !0,
      contextResolver: new Ye(
        { sharedCache: r }
      )
    }), "inputFormat" in o) {
      if (o.inputFormat !== "application/n-quads" && o.inputFormat !== "application/nquads")
        throw new Ue(
          "Unknown canonicalization input format.",
          "jsonld.CanonizeError"
        );
      const c = An.parse(a);
      return To.canonize(c, o);
    }
    const s = { ...o };
    delete s.format, s.produceGeneralizedRdf = !1;
    const d = await e.toRDF(a, s);
    return To.canonize(d, o);
  }, e.fromRDF = async function(a, o) {
    if (arguments.length < 1)
      throw new TypeError("Could not convert from RDF, too few arguments.");
    o = i(o, {
      format: Je(a) ? "application/n-quads" : void 0
    });
    const { format: s } = o;
    let { rdfParser: d } = o;
    if (s) {
      if (d = d || t[s], !d)
        throw new Ue(
          "Unknown input format.",
          "jsonld.UnknownFormat",
          { format: s }
        );
    } else
      d = () => a;
    const c = await d(a);
    return nd(c, o);
  }, e.toRDF = async function(a, o) {
    if (arguments.length < 1)
      throw new TypeError("Could not convert to RDF, too few arguments.");
    o = i(o, {
      base: Je(a) ? a : "",
      skipExpansion: !1,
      contextResolver: new Ye(
        { sharedCache: r }
      )
    });
    let s;
    o.skipExpansion ? s = a : s = await e.expand(a, o);
    const d = rd(s, o);
    if (o.format) {
      if (o.format === "application/n-quads" || o.format === "application/nquads")
        return An.serialize(d);
      throw new Ue(
        "Unknown output format.",
        "jsonld.UnknownFormat",
        { format: o.format }
      );
    }
    return d;
  }, e.createNodeMap = async function(a, o) {
    if (arguments.length < 1)
      throw new TypeError("Could not create node map, too few arguments.");
    o = i(o, {
      base: Je(a) ? a : "",
      contextResolver: new Ye(
        { sharedCache: r }
      )
    });
    const s = await e.expand(a, o);
    return ud(s, o);
  }, e.merge = async function(a, o, s) {
    if (arguments.length < 1)
      throw new TypeError("Could not merge, too few arguments.");
    if (!Jt(a))
      throw new TypeError('Could not merge, "docs" must be an array.');
    typeof o == "function" ? o = null : o = o || null, s = i(s, {
      contextResolver: new Ye(
        { sharedCache: r }
      )
    });
    const d = await Promise.all(a.map((b) => {
      const m = { ...s };
      return e.expand(b, m);
    }));
    let c = !0;
    "mergeNodes" in s && (c = s.mergeNodes);
    const h = s.issuer || new $r("_:b"), p = { "@default": {} };
    for (let b = 0; b < d.length; ++b) {
      const m = ct.relabelBlankNodes(d[b], {
        issuer: new $r("_:b" + b + "-")
      }), S = c || b === 0 ? p : { "@default": {} };
      if (dd(m, S, "@default", h), S !== p)
        for (const v in S) {
          const R = S[v];
          if (!(v in p)) {
            p[v] = R;
            continue;
          }
          const x = p[v];
          for (const I in R)
            I in x || (x[I] = R[I]);
        }
    }
    const u = fd(p), l = [], f = Object.keys(u).sort();
    for (let b = 0; b < f.length; ++b) {
      const m = u[f[b]];
      ad(m) || l.push(m);
    }
    return o === null ? l : (s.graph = !0, s.skipExpansion = !0, await e.compact(l, o, s));
  }, Object.defineProperty(e, "documentLoader", {
    get: () => e._documentLoader,
    set: (a) => e._documentLoader = a
  }), e.documentLoader = async (a) => {
    throw new Ue(
      "Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.",
      "jsonld.LoadDocumentError",
      { code: "loading document failed", url: a }
    );
  }, e.get = async function(a, o) {
    let s;
    typeof o.documentLoader == "function" ? s = o.documentLoader : s = e.documentLoader;
    const d = await s(a);
    try {
      if (!d.document)
        throw new Ue(
          "No remote document found at the given URL.",
          "jsonld.NullRemoteDocument"
        );
      Je(d.document) && (d.document = JSON.parse(d.document));
    } catch (c) {
      throw new Ue(
        "Could not retrieve a JSON-LD document from the URL.",
        "jsonld.LoadDocumentError",
        {
          code: "loading document failed",
          cause: c,
          remoteDoc: d
        }
      );
    }
    return d;
  }, e.processContext = async function(a, o, s) {
    return s = i(s, {
      base: "",
      contextResolver: new Ye(
        { sharedCache: r }
      )
    }), o === null ? xn(s) : (o = ct.clone(o), vt(o) && "@context" in o || (o = { "@context": o }), jo({ activeCtx: a, localCtx: o, options: s }));
  }, e.getContextValue = kt.getContextValue, e.documentLoaders = {}, e.useDocumentLoader = function(a) {
    if (!(a in e.documentLoaders))
      throw new Ue(
        'Unknown document loader type: "' + a + '"',
        "jsonld.UnknownDocumentLoader",
        { type: a }
      );
    e.documentLoader = e.documentLoaders[a].apply(
      e,
      Array.prototype.slice.call(arguments, 1)
    );
  }, e.registerRDFParser = function(a, o) {
    t[a] = o;
  }, e.unregisterRDFParser = function(a) {
    delete t[a];
  }, e.registerRDFParser("application/n-quads", An.parse), e.registerRDFParser("application/nquads", An.parse), e.url = pt, e.logEventHandler = hd, e.logWarningEventHandler = pd, e.safeEventHandler = gd, e.setDefaultEventHandler = yd, e.strictEventHandler = wd, e.unhandledEventHandler = md, e.util = ct, Object.assign(e, ct), e.promises = e, e.RequestQueue = Aa(), e.JsonLdProcessor = Yc()(e), Oo.setupGlobals(e), Oo.setupDocumentLoaders(e);
  function i(a, {
    documentLoader: o = e.documentLoader,
    ...s
  }) {
    if (a && "compactionMap" in a)
      throw new Ue(
        '"compactionMap" not supported.',
        "jsonld.OptionsError"
      );
    if (a && "expansionMap" in a)
      throw new Ue(
        '"expansionMap" not supported.',
        "jsonld.OptionsError"
      );
    return Object.assign(
      {},
      { documentLoader: o },
      s,
      a,
      { eventHandler: bd({ options: a }) }
    );
  }
  return e;
}, Oi = function() {
  return Ca(function() {
    return Oi();
  });
};
Ca(Oi);
var vd = Oi;
const Nn = /* @__PURE__ */ el(vd);
var za = { exports: {} }, Pr = { exports: {} }, te = {
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
  ArrayPrototypeSlice(e, t, n) {
    return e.slice(t, n);
  },
  Error,
  FunctionPrototypeCall(e, t, ...n) {
    return e.call(t, ...n);
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
  ObjectDefineProperty(e, t, n) {
    return Object.defineProperty(e, t, n);
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
  PromisePrototypeThen(e, t, n) {
    return e.then(t, n);
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
  StringPrototypeSlice(e, t, n) {
    return e.slice(t, n);
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
  TypedArrayPrototypeSet(e, t, n) {
    return e.set(t, n);
  },
  Boolean,
  Uint8Array
}, Xa = { exports: {} };
(function(e) {
  const t = jt, { kResistStopPropagation: n, SymbolDispose: r } = te, i = globalThis.AbortSignal || yn().AbortSignal, a = globalThis.AbortController || yn().AbortController, o = Object.getPrototypeOf(async function() {
  }).constructor, s = globalThis.Blob || t.Blob, d = typeof s < "u" ? function(l) {
    return l instanceof s;
  } : function(l) {
    return !1;
  }, c = (u, l) => {
    if (u !== void 0 && (u === null || typeof u != "object" || !("aborted" in u)))
      throw new ERR_INVALID_ARG_TYPE(l, "AbortSignal", u);
  }, h = (u, l) => {
    if (typeof u != "function")
      throw new ERR_INVALID_ARG_TYPE(l, "Function", u);
  };
  class p extends Error {
    constructor(l) {
      if (!Array.isArray(l))
        throw new TypeError(`Expected input to be an Array, got ${typeof l}`);
      let f = "";
      for (let y = 0; y < l.length; y++)
        f += `    ${l[y].stack}
`;
      super(f), this.name = "AggregateError", this.errors = l;
    }
  }
  e.exports = {
    AggregateError: p,
    kEmptyObject: Object.freeze({}),
    once(u) {
      let l = !1;
      return function(...f) {
        l || (l = !0, u.apply(this, f));
      };
    },
    createDeferredPromise: function() {
      let u, l;
      return {
        promise: new Promise((y, b) => {
          u = y, l = b;
        }),
        resolve: u,
        reject: l
      };
    },
    promisify(u) {
      return new Promise((l, f) => {
        u((y, ...b) => y ? f(y) : l(...b));
      });
    },
    debuglog() {
      return function() {
      };
    },
    format(u, ...l) {
      return u.replace(/%([sdifj])/g, function(...[f, y]) {
        const b = l.shift();
        return y === "f" ? b.toFixed(6) : y === "j" ? JSON.stringify(b) : y === "s" && typeof b == "object" ? `${b.constructor !== Object ? b.constructor.name : ""} {}`.trim() : b.toString();
      });
    },
    inspect(u) {
      switch (typeof u) {
        case "string":
          if (u.includes("'"))
            if (u.includes('"')) {
              if (!u.includes("`") && !u.includes("${"))
                return `\`${u}\``;
            } else
              return `"${u}"`;
          return `'${u}'`;
        case "number":
          return isNaN(u) ? "NaN" : Object.is(u, -0) ? String(u) : u;
        case "bigint":
          return `${String(u)}n`;
        case "boolean":
        case "undefined":
          return String(u);
        case "object":
          return "{}";
      }
    },
    types: {
      isAsyncFunction(u) {
        return u instanceof o;
      },
      isArrayBufferView(u) {
        return ArrayBuffer.isView(u);
      }
    },
    isBlob: d,
    deprecate(u, l) {
      return u;
    },
    addAbortListener: zn.addAbortListener || function(l, f) {
      if (l === void 0)
        throw new ERR_INVALID_ARG_TYPE("signal", "AbortSignal", l);
      c(l, "signal"), h(f, "listener");
      let y;
      return l.aborted ? queueMicrotask(() => f()) : (l.addEventListener("abort", f, {
        __proto__: null,
        once: !0,
        [n]: !0
      }), y = () => {
        l.removeEventListener("abort", f);
      }), {
        __proto__: null,
        [r]() {
          var b;
          (b = y) === null || b === void 0 || b();
        }
      };
    },
    AbortSignalAny: i.any || function(l) {
      if (l.length === 1)
        return l[0];
      const f = new a(), y = () => f.abort();
      return l.forEach((b) => {
        c(b, "signals"), b.addEventListener("abort", y, {
          once: !0
        });
      }), f.signal.addEventListener(
        "abort",
        () => {
          l.forEach((b) => b.removeEventListener("abort", y));
        },
        {
          once: !0
        }
      ), f.signal;
    }
  }, e.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
})(Xa);
var me = Xa.exports, ji = {};
const { format: _d, inspect: qn, AggregateError: Sd } = me, Ed = globalThis.AggregateError || Sd, Rd = Symbol("kIsNodeError"), Id = [
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
], Ad = /^([A-Z][a-z0-9]*)+$/, xd = "__node_internal_", Yn = {};
function Nt(e, t) {
  if (!e)
    throw new Yn.ERR_INTERNAL_ASSERTION(t);
}
function Lo(e) {
  let t = "", n = e.length;
  const r = e[0] === "-" ? 1 : 0;
  for (; n >= r + 4; n -= 3)
    t = `_${e.slice(n - 3, n)}${t}`;
  return `${e.slice(0, n)}${t}`;
}
function Nd(e, t, n) {
  if (typeof t == "function")
    return Nt(
      t.length <= n.length,
      // Default options do not count.
      `Code: ${e}; The provided arguments length (${n.length}) does not match the required ones (${t.length}).`
    ), t(...n);
  const r = (t.match(/%[dfijoOs]/g) || []).length;
  return Nt(
    r === n.length,
    `Code: ${e}; The provided arguments length (${n.length}) does not match the required ones (${r}).`
  ), n.length === 0 ? t : _d(t, ...n);
}
function ue(e, t, n) {
  n || (n = Error);
  class r extends n {
    constructor(...a) {
      super(Nd(e, t, a));
    }
    toString() {
      return `${this.name} [${e}]: ${this.message}`;
    }
  }
  Object.defineProperties(r.prototype, {
    name: {
      value: n.name,
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
  }), r.prototype.code = e, r.prototype[Rd] = !0, Yn[e] = r;
}
function ko(e) {
  const t = xd + e.name;
  return Object.defineProperty(e, "name", {
    value: t
  }), e;
}
function Dd(e, t) {
  if (e && t && e !== t) {
    if (Array.isArray(t.errors))
      return t.errors.push(e), t;
    const n = new Ed([t, e], t.message);
    return n.code = t.code, n;
  }
  return e || t;
}
let Td = class extends Error {
  constructor(t = "The operation was aborted", n = void 0) {
    if (n !== void 0 && typeof n != "object")
      throw new Yn.ERR_INVALID_ARG_TYPE("options", "Object", n);
    super(t, n), this.code = "ABORT_ERR", this.name = "AbortError";
  }
};
ue("ERR_ASSERTION", "%s", Error);
ue(
  "ERR_INVALID_ARG_TYPE",
  (e, t, n) => {
    Nt(typeof e == "string", "'name' must be a string"), Array.isArray(t) || (t = [t]);
    let r = "The ";
    e.endsWith(" argument") ? r += `${e} ` : r += `"${e}" ${e.includes(".") ? "property" : "argument"} `, r += "must be ";
    const i = [], a = [], o = [];
    for (const d of t)
      Nt(typeof d == "string", "All expected entries have to be of type string"), Id.includes(d) ? i.push(d.toLowerCase()) : Ad.test(d) ? a.push(d) : (Nt(d !== "object", 'The value "object" should be written as "Object"'), o.push(d));
    if (a.length > 0) {
      const d = i.indexOf("object");
      d !== -1 && (i.splice(i, d, 1), a.push("Object"));
    }
    if (i.length > 0) {
      switch (i.length) {
        case 1:
          r += `of type ${i[0]}`;
          break;
        case 2:
          r += `one of type ${i[0]} or ${i[1]}`;
          break;
        default: {
          const d = i.pop();
          r += `one of type ${i.join(", ")}, or ${d}`;
        }
      }
      (a.length > 0 || o.length > 0) && (r += " or ");
    }
    if (a.length > 0) {
      switch (a.length) {
        case 1:
          r += `an instance of ${a[0]}`;
          break;
        case 2:
          r += `an instance of ${a[0]} or ${a[1]}`;
          break;
        default: {
          const d = a.pop();
          r += `an instance of ${a.join(", ")}, or ${d}`;
        }
      }
      o.length > 0 && (r += " or ");
    }
    switch (o.length) {
      case 0:
        break;
      case 1:
        o[0].toLowerCase() !== o[0] && (r += "an "), r += `${o[0]}`;
        break;
      case 2:
        r += `one of ${o[0]} or ${o[1]}`;
        break;
      default: {
        const d = o.pop();
        r += `one of ${o.join(", ")}, or ${d}`;
      }
    }
    if (n == null)
      r += `. Received ${n}`;
    else if (typeof n == "function" && n.name)
      r += `. Received function ${n.name}`;
    else if (typeof n == "object") {
      var s;
      if ((s = n.constructor) !== null && s !== void 0 && s.name)
        r += `. Received an instance of ${n.constructor.name}`;
      else {
        const d = qn(n, {
          depth: -1
        });
        r += `. Received ${d}`;
      }
    } else {
      let d = qn(n, {
        colors: !1
      });
      d.length > 25 && (d = `${d.slice(0, 25)}...`), r += `. Received type ${typeof n} (${d})`;
    }
    return r;
  },
  TypeError
);
ue(
  "ERR_INVALID_ARG_VALUE",
  (e, t, n = "is invalid") => {
    let r = qn(t);
    return r.length > 128 && (r = r.slice(0, 128) + "..."), `The ${e.includes(".") ? "property" : "argument"} '${e}' ${n}. Received ${r}`;
  },
  TypeError
);
ue(
  "ERR_INVALID_RETURN_VALUE",
  (e, t, n) => {
    var r;
    const i = n != null && (r = n.constructor) !== null && r !== void 0 && r.name ? `instance of ${n.constructor.name}` : `type ${typeof n}`;
    return `Expected ${e} to be returned from the "${t}" function but got ${i}.`;
  },
  TypeError
);
ue(
  "ERR_MISSING_ARGS",
  (...e) => {
    Nt(e.length > 0, "At least one arg needs to be specified");
    let t;
    const n = e.length;
    switch (e = (Array.isArray(e) ? e : [e]).map((r) => `"${r}"`).join(" or "), n) {
      case 1:
        t += `The ${e[0]} argument`;
        break;
      case 2:
        t += `The ${e[0]} and ${e[1]} arguments`;
        break;
      default:
        {
          const r = e.pop();
          t += `The ${e.join(", ")}, and ${r} arguments`;
        }
        break;
    }
    return `${t} must be specified`;
  },
  TypeError
);
ue(
  "ERR_OUT_OF_RANGE",
  (e, t, n) => {
    Nt(t, 'Missing "range" argument');
    let r;
    return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? r = Lo(String(n)) : typeof n == "bigint" ? (r = String(n), (n > 2n ** 32n || n < -(2n ** 32n)) && (r = Lo(r)), r += "n") : r = qn(n), `The value of "${e}" is out of range. It must be ${t}. Received ${r}`;
  },
  RangeError
);
ue("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
ue("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
ue("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
ue("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
ue("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
ue("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
ue("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
ue("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
ue("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
ue("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
ue("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
var _e = {
  AbortError: Td,
  aggregateTwoErrors: ko(Dd),
  hideStackFrames: ko,
  codes: Yn
};
const {
  ArrayIsArray: Li,
  ArrayPrototypeIncludes: Ka,
  ArrayPrototypeJoin: Qa,
  ArrayPrototypeMap: Od,
  NumberIsInteger: ki,
  NumberIsNaN: jd,
  NumberMAX_SAFE_INTEGER: Ld,
  NumberMIN_SAFE_INTEGER: kd,
  NumberParseInt: $d,
  ObjectPrototypeHasOwnProperty: Md,
  RegExpPrototypeExec: Ya,
  String: Pd,
  StringPrototypeToUpperCase: Fd,
  StringPrototypeTrim: Wd
} = te, {
  hideStackFrames: Me,
  codes: { ERR_SOCKET_BAD_PORT: Bd, ERR_INVALID_ARG_TYPE: ye, ERR_INVALID_ARG_VALUE: Qt, ERR_OUT_OF_RANGE: Ot, ERR_UNKNOWN_SIGNAL: $o }
} = _e, { normalizeEncoding: Hd } = me, { isAsyncFunction: Ud, isArrayBufferView: Jd } = me.types, Mo = {};
function Gd(e) {
  return e === (e | 0);
}
function qd(e) {
  return e === e >>> 0;
}
const Vd = /^[0-7]+$/, Cd = "must be a 32-bit unsigned integer or an octal string";
function zd(e, t, n) {
  if (typeof e > "u" && (e = n), typeof e == "string") {
    if (Ya(Vd, e) === null)
      throw new Qt(t, e, Cd);
    e = $d(e, 8);
  }
  return Za(e, t), e;
}
const Xd = Me((e, t, n = kd, r = Ld) => {
  if (typeof e != "number")
    throw new ye(t, "number", e);
  if (!ki(e))
    throw new Ot(t, "an integer", e);
  if (e < n || e > r)
    throw new Ot(t, `>= ${n} && <= ${r}`, e);
}), Kd = Me((e, t, n = -2147483648, r = 2147483647) => {
  if (typeof e != "number")
    throw new ye(t, "number", e);
  if (!ki(e))
    throw new Ot(t, "an integer", e);
  if (e < n || e > r)
    throw new Ot(t, `>= ${n} && <= ${r}`, e);
}), Za = Me((e, t, n = !1) => {
  if (typeof e != "number")
    throw new ye(t, "number", e);
  if (!ki(e))
    throw new Ot(t, "an integer", e);
  const r = n ? 1 : 0, i = 4294967295;
  if (e < r || e > i)
    throw new Ot(t, `>= ${r} && <= ${i}`, e);
});
function $i(e, t) {
  if (typeof e != "string")
    throw new ye(t, "string", e);
}
function Qd(e, t, n = void 0, r) {
  if (typeof e != "number")
    throw new ye(t, "number", e);
  if (n != null && e < n || r != null && e > r || (n != null || r != null) && jd(e))
    throw new Ot(
      t,
      `${n != null ? `>= ${n}` : ""}${n != null && r != null ? " && " : ""}${r != null ? `<= ${r}` : ""}`,
      e
    );
}
const Yd = Me((e, t, n) => {
  if (!Ka(n, e)) {
    const i = "must be one of: " + Qa(
      Od(n, (a) => typeof a == "string" ? `'${a}'` : Pd(a)),
      ", "
    );
    throw new Qt(t, e, i);
  }
});
function es(e, t) {
  if (typeof e != "boolean")
    throw new ye(t, "boolean", e);
}
function Fr(e, t, n) {
  return e == null || !Md(e, t) ? n : e[t];
}
const Zd = Me((e, t, n = null) => {
  const r = Fr(n, "allowArray", !1), i = Fr(n, "allowFunction", !1);
  if (!Fr(n, "nullable", !1) && e === null || !r && Li(e) || typeof e != "object" && (!i || typeof e != "function"))
    throw new ye(t, "Object", e);
}), eu = Me((e, t) => {
  if (e != null && typeof e != "object" && typeof e != "function")
    throw new ye(t, "a dictionary", e);
}), Zn = Me((e, t, n = 0) => {
  if (!Li(e))
    throw new ye(t, "Array", e);
  if (e.length < n) {
    const r = `must be longer than ${n}`;
    throw new Qt(t, e, r);
  }
});
function tu(e, t) {
  Zn(e, t);
  for (let n = 0; n < e.length; n++)
    $i(e[n], `${t}[${n}]`);
}
function nu(e, t) {
  Zn(e, t);
  for (let n = 0; n < e.length; n++)
    es(e[n], `${t}[${n}]`);
}
function ru(e, t) {
  Zn(e, t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n], i = `${t}[${n}]`;
    if (r == null)
      throw new ye(i, "AbortSignal", r);
    ts(r, i);
  }
}
function iu(e, t = "signal") {
  if ($i(e, t), Mo[e] === void 0)
    throw Mo[Fd(e)] !== void 0 ? new $o(e + " (signals must use all capital letters)") : new $o(e);
}
const ou = Me((e, t = "buffer") => {
  if (!Jd(e))
    throw new ye(t, ["Buffer", "TypedArray", "DataView"], e);
});
function au(e, t) {
  const n = Hd(t), r = e.length;
  if (n === "hex" && r % 2 !== 0)
    throw new Qt("encoding", t, `is invalid for data of length ${r}`);
}
function su(e, t = "Port", n = !0) {
  if (typeof e != "number" && typeof e != "string" || typeof e == "string" && Wd(e).length === 0 || +e !== +e >>> 0 || e > 65535 || e === 0 && !n)
    throw new Bd(t, e, n);
  return e | 0;
}
const ts = Me((e, t) => {
  if (e !== void 0 && (e === null || typeof e != "object" || !("aborted" in e)))
    throw new ye(t, "AbortSignal", e);
}), lu = Me((e, t) => {
  if (typeof e != "function")
    throw new ye(t, "Function", e);
}), cu = Me((e, t) => {
  if (typeof e != "function" || Ud(e))
    throw new ye(t, "Function", e);
}), du = Me((e, t) => {
  if (e !== void 0)
    throw new ye(t, "undefined", e);
});
function uu(e, t, n) {
  if (!Ka(n, e))
    throw new ye(t, `('${Qa(n, "|")}')`, e);
}
const fu = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
function Po(e, t) {
  if (typeof e > "u" || !Ya(fu, e))
    throw new Qt(
      t,
      e,
      'must be an array or string of format "</styles.css>; rel=preload; as=style"'
    );
}
function hu(e) {
  if (typeof e == "string")
    return Po(e, "hints"), e;
  if (Li(e)) {
    const t = e.length;
    let n = "";
    if (t === 0)
      return n;
    for (let r = 0; r < t; r++) {
      const i = e[r];
      Po(i, "hints"), n += i, r !== t - 1 && (n += ", ");
    }
    return n;
  }
  throw new Qt(
    "hints",
    e,
    'must be an array or string of format "</styles.css>; rel=preload; as=style"'
  );
}
var mn = {
  isInt32: Gd,
  isUint32: qd,
  parseFileMode: zd,
  validateArray: Zn,
  validateStringArray: tu,
  validateBooleanArray: nu,
  validateAbortSignalArray: ru,
  validateBoolean: es,
  validateBuffer: ou,
  validateDictionary: eu,
  validateEncoding: au,
  validateFunction: lu,
  validateInt32: Kd,
  validateInteger: Xd,
  validateNumber: Qd,
  validateObject: Zd,
  validateOneOf: Yd,
  validatePlainFunction: cu,
  validatePort: su,
  validateSignalName: iu,
  validateString: $i,
  validateUint32: Za,
  validateUndefined: du,
  validateUnion: uu,
  validateAbortSignal: ts,
  validateLinkHeaderValue: hu
}, Mi = { exports: {} };
const { SymbolAsyncIterator: Fo, SymbolIterator: Wo, SymbolFor: $t } = te, ns = $t("nodejs.stream.destroyed"), rs = $t("nodejs.stream.errored"), hi = $t("nodejs.stream.readable"), pi = $t("nodejs.stream.writable"), is = $t("nodejs.stream.disturbed"), pu = $t("nodejs.webstream.isClosedPromise"), gu = $t("nodejs.webstream.controllerErrorFunction");
function er(e, t = !1) {
  var n;
  return !!(e && typeof e.pipe == "function" && typeof e.on == "function" && (!t || typeof e.pause == "function" && typeof e.resume == "function") && (!e._writableState || ((n = e._readableState) === null || n === void 0 ? void 0 : n.readable) !== !1) && // Duplex
  (!e._writableState || e._readableState));
}
function tr(e) {
  var t;
  return !!(e && typeof e.write == "function" && typeof e.on == "function" && (!e._readableState || ((t = e._writableState) === null || t === void 0 ? void 0 : t.writable) !== !1));
}
function yu(e) {
  return !!(e && typeof e.pipe == "function" && e._readableState && typeof e.on == "function" && typeof e.write == "function");
}
function ze(e) {
  return e && (e._readableState || e._writableState || typeof e.write == "function" && typeof e.on == "function" || typeof e.pipe == "function" && typeof e.on == "function");
}
function os(e) {
  return !!(e && !ze(e) && typeof e.pipeThrough == "function" && typeof e.getReader == "function" && typeof e.cancel == "function");
}
function as(e) {
  return !!(e && !ze(e) && typeof e.getWriter == "function" && typeof e.abort == "function");
}
function ss(e) {
  return !!(e && !ze(e) && typeof e.readable == "object" && typeof e.writable == "object");
}
function bu(e) {
  return os(e) || as(e) || ss(e);
}
function wu(e, t) {
  return e == null ? !1 : t === !0 ? typeof e[Fo] == "function" : t === !1 ? typeof e[Wo] == "function" : typeof e[Fo] == "function" || typeof e[Wo] == "function";
}
function nr(e) {
  if (!ze(e))
    return null;
  const t = e._writableState, n = e._readableState, r = t || n;
  return !!(e.destroyed || e[ns] || r != null && r.destroyed);
}
function ls(e) {
  if (!tr(e))
    return null;
  if (e.writableEnded === !0)
    return !0;
  const t = e._writableState;
  return t != null && t.errored ? !1 : typeof (t == null ? void 0 : t.ended) != "boolean" ? null : t.ended;
}
function mu(e, t) {
  if (!tr(e))
    return null;
  if (e.writableFinished === !0)
    return !0;
  const n = e._writableState;
  return n != null && n.errored ? !1 : typeof (n == null ? void 0 : n.finished) != "boolean" ? null : !!(n.finished || t === !1 && n.ended === !0 && n.length === 0);
}
function vu(e) {
  if (!er(e))
    return null;
  if (e.readableEnded === !0)
    return !0;
  const t = e._readableState;
  return !t || t.errored ? !1 : typeof (t == null ? void 0 : t.ended) != "boolean" ? null : t.ended;
}
function cs(e, t) {
  if (!er(e))
    return null;
  const n = e._readableState;
  return n != null && n.errored ? !1 : typeof (n == null ? void 0 : n.endEmitted) != "boolean" ? null : !!(n.endEmitted || t === !1 && n.ended === !0 && n.length === 0);
}
function ds(e) {
  return e && e[hi] != null ? e[hi] : typeof (e == null ? void 0 : e.readable) != "boolean" ? null : nr(e) ? !1 : er(e) && e.readable && !cs(e);
}
function us(e) {
  return e && e[pi] != null ? e[pi] : typeof (e == null ? void 0 : e.writable) != "boolean" ? null : nr(e) ? !1 : tr(e) && e.writable && !ls(e);
}
function _u(e, t) {
  return ze(e) ? nr(e) ? !0 : !((t == null ? void 0 : t.readable) !== !1 && ds(e) || (t == null ? void 0 : t.writable) !== !1 && us(e)) : null;
}
function Su(e) {
  var t, n;
  return ze(e) ? e.writableErrored ? e.writableErrored : (t = (n = e._writableState) === null || n === void 0 ? void 0 : n.errored) !== null && t !== void 0 ? t : null : null;
}
function Eu(e) {
  var t, n;
  return ze(e) ? e.readableErrored ? e.readableErrored : (t = (n = e._readableState) === null || n === void 0 ? void 0 : n.errored) !== null && t !== void 0 ? t : null : null;
}
function Ru(e) {
  if (!ze(e))
    return null;
  if (typeof e.closed == "boolean")
    return e.closed;
  const t = e._writableState, n = e._readableState;
  return typeof (t == null ? void 0 : t.closed) == "boolean" || typeof (n == null ? void 0 : n.closed) == "boolean" ? (t == null ? void 0 : t.closed) || (n == null ? void 0 : n.closed) : typeof e._closed == "boolean" && fs(e) ? e._closed : null;
}
function fs(e) {
  return typeof e._closed == "boolean" && typeof e._defaultKeepAlive == "boolean" && typeof e._removedConnection == "boolean" && typeof e._removedContLen == "boolean";
}
function hs(e) {
  return typeof e._sent100 == "boolean" && fs(e);
}
function Iu(e) {
  var t;
  return typeof e._consuming == "boolean" && typeof e._dumped == "boolean" && ((t = e.req) === null || t === void 0 ? void 0 : t.upgradeOrConnect) === void 0;
}
function Au(e) {
  if (!ze(e))
    return null;
  const t = e._writableState, n = e._readableState, r = t || n;
  return !r && hs(e) || !!(r && r.autoDestroy && r.emitClose && r.closed === !1);
}
function xu(e) {
  var t;
  return !!(e && ((t = e[is]) !== null && t !== void 0 ? t : e.readableDidRead || e.readableAborted));
}
function Nu(e) {
  var t, n, r, i, a, o, s, d, c, h;
  return !!(e && ((t = (n = (r = (i = (a = (o = e[rs]) !== null && o !== void 0 ? o : e.readableErrored) !== null && a !== void 0 ? a : e.writableErrored) !== null && i !== void 0 ? i : (s = e._readableState) === null || s === void 0 ? void 0 : s.errorEmitted) !== null && r !== void 0 ? r : (d = e._writableState) === null || d === void 0 ? void 0 : d.errorEmitted) !== null && n !== void 0 ? n : (c = e._readableState) === null || c === void 0 ? void 0 : c.errored) !== null && t !== void 0 ? t : !((h = e._writableState) === null || h === void 0) && h.errored));
}
var at = {
  isDestroyed: nr,
  kIsDestroyed: ns,
  isDisturbed: xu,
  kIsDisturbed: is,
  isErrored: Nu,
  kIsErrored: rs,
  isReadable: ds,
  kIsReadable: hi,
  kIsClosedPromise: pu,
  kControllerErrorFunction: gu,
  kIsWritable: pi,
  isClosed: Ru,
  isDuplexNodeStream: yu,
  isFinished: _u,
  isIterable: wu,
  isReadableNodeStream: er,
  isReadableStream: os,
  isReadableEnded: vu,
  isReadableFinished: cs,
  isReadableErrored: Eu,
  isNodeStream: ze,
  isWebStream: bu,
  isWritable: us,
  isWritableNodeStream: tr,
  isWritableStream: as,
  isWritableEnded: ls,
  isWritableFinished: mu,
  isWritableErrored: Su,
  isServerRequest: Iu,
  isServerResponse: hs,
  willEmitClose: Au,
  isTransformStream: ss
};
const dt = Lt, { AbortError: ps, codes: Du } = _e, { ERR_INVALID_ARG_TYPE: Tu, ERR_STREAM_PREMATURE_CLOSE: Bo } = Du, { kEmptyObject: gi, once: yi } = me, { validateAbortSignal: Ou, validateFunction: ju, validateObject: Lu, validateBoolean: ku } = mn, { Promise: $u, PromisePrototypeThen: Mu, SymbolDispose: gs } = te, {
  isClosed: Pu,
  isReadable: Ho,
  isReadableNodeStream: Wr,
  isReadableStream: Fu,
  isReadableFinished: Uo,
  isReadableErrored: Jo,
  isWritable: Go,
  isWritableNodeStream: qo,
  isWritableStream: Wu,
  isWritableFinished: Vo,
  isWritableErrored: Co,
  isNodeStream: Bu,
  willEmitClose: Hu,
  kIsClosedPromise: Uu
} = at;
let Xt;
function Ju(e) {
  return e.setHeader && typeof e.abort == "function";
}
const bi = () => {
};
function ys(e, t, n) {
  var r, i;
  if (arguments.length === 2 ? (n = t, t = gi) : t == null ? t = gi : Lu(t, "options"), ju(n, "callback"), Ou(t.signal, "options.signal"), n = yi(n), Fu(e) || Wu(e))
    return Gu(e, t, n);
  if (!Bu(e))
    throw new Tu("stream", ["ReadableStream", "WritableStream", "Stream"], e);
  const a = (r = t.readable) !== null && r !== void 0 ? r : Wr(e), o = (i = t.writable) !== null && i !== void 0 ? i : qo(e), s = e._writableState, d = e._readableState, c = () => {
    e.writable || u();
  };
  let h = Hu(e) && Wr(e) === a && qo(e) === o, p = Vo(e, !1);
  const u = () => {
    p = !0, e.destroyed && (h = !1), !(h && (!e.readable || a)) && (!a || l) && n.call(e);
  };
  let l = Uo(e, !1);
  const f = () => {
    l = !0, e.destroyed && (h = !1), !(h && (!e.writable || o)) && (!o || p) && n.call(e);
  }, y = (x) => {
    n.call(e, x);
  };
  let b = Pu(e);
  const m = () => {
    b = !0;
    const x = Co(e) || Jo(e);
    if (x && typeof x != "boolean")
      return n.call(e, x);
    if (a && !l && Wr(e, !0) && !Uo(e, !1))
      return n.call(e, new Bo());
    if (o && !p && !Vo(e, !1))
      return n.call(e, new Bo());
    n.call(e);
  }, S = () => {
    b = !0;
    const x = Co(e) || Jo(e);
    if (x && typeof x != "boolean")
      return n.call(e, x);
    n.call(e);
  }, v = () => {
    e.req.on("finish", u);
  };
  Ju(e) ? (e.on("complete", u), h || e.on("abort", m), e.req ? v() : e.on("request", v)) : o && !s && (e.on("end", c), e.on("close", c)), !h && typeof e.aborted == "boolean" && e.on("aborted", m), e.on("end", f), e.on("finish", u), t.error !== !1 && e.on("error", y), e.on("close", m), b ? dt.nextTick(m) : s != null && s.errorEmitted || d != null && d.errorEmitted ? h || dt.nextTick(S) : (!a && (!h || Ho(e)) && (p || Go(e) === !1) || !o && (!h || Go(e)) && (l || Ho(e) === !1) || d && e.req && e.aborted) && dt.nextTick(S);
  const R = () => {
    n = bi, e.removeListener("aborted", m), e.removeListener("complete", u), e.removeListener("abort", m), e.removeListener("request", v), e.req && e.req.removeListener("finish", u), e.removeListener("end", c), e.removeListener("close", c), e.removeListener("finish", u), e.removeListener("end", f), e.removeListener("error", y), e.removeListener("close", m);
  };
  if (t.signal && !b) {
    const x = () => {
      const I = n;
      R(), I.call(
        e,
        new ps(void 0, {
          cause: t.signal.reason
        })
      );
    };
    if (t.signal.aborted)
      dt.nextTick(x);
    else {
      Xt = Xt || me.addAbortListener;
      const I = Xt(t.signal, x), G = n;
      n = yi((...k) => {
        I[gs](), G.apply(e, k);
      });
    }
  }
  return R;
}
function Gu(e, t, n) {
  let r = !1, i = bi;
  if (t.signal)
    if (i = () => {
      r = !0, n.call(
        e,
        new ps(void 0, {
          cause: t.signal.reason
        })
      );
    }, t.signal.aborted)
      dt.nextTick(i);
    else {
      Xt = Xt || me.addAbortListener;
      const o = Xt(t.signal, i), s = n;
      n = yi((...d) => {
        o[gs](), s.apply(e, d);
      });
    }
  const a = (...o) => {
    r || dt.nextTick(() => n.apply(e, o));
  };
  return Mu(e[Uu].promise, a, a), bi;
}
function qu(e, t) {
  var n;
  let r = !1;
  return t === null && (t = gi), (n = t) !== null && n !== void 0 && n.cleanup && (ku(t.cleanup, "cleanup"), r = t.cleanup), new $u((i, a) => {
    const o = ys(e, t, (s) => {
      r && o(), s ? a(s) : i();
    });
  });
}
Mi.exports = ys;
Mi.exports.finished = qu;
var gt = Mi.exports;
const Ve = Lt, {
  aggregateTwoErrors: Vu,
  codes: { ERR_MULTIPLE_CALLBACK: Cu },
  AbortError: zu
} = _e, { Symbol: bs } = te, { kIsDestroyed: Xu, isDestroyed: Ku, isFinished: Qu, isServerRequest: Yu } = at, ws = bs("kDestroy"), wi = bs("kConstruct");
function ms(e, t, n) {
  e && (e.stack, t && !t.errored && (t.errored = e), n && !n.errored && (n.errored = e));
}
function Zu(e, t) {
  const n = this._readableState, r = this._writableState, i = r || n;
  return r != null && r.destroyed || n != null && n.destroyed ? (typeof t == "function" && t(), this) : (ms(e, r, n), r && (r.destroyed = !0), n && (n.destroyed = !0), i.constructed ? zo(this, e, t) : this.once(ws, function(a) {
    zo(this, Vu(a, e), t);
  }), this);
}
function zo(e, t, n) {
  let r = !1;
  function i(a) {
    if (r)
      return;
    r = !0;
    const o = e._readableState, s = e._writableState;
    ms(a, s, o), s && (s.closed = !0), o && (o.closed = !0), typeof n == "function" && n(a), a ? Ve.nextTick(ef, e, a) : Ve.nextTick(vs, e);
  }
  try {
    e._destroy(t || null, i);
  } catch (a) {
    i(a);
  }
}
function ef(e, t) {
  mi(e, t), vs(e);
}
function vs(e) {
  const t = e._readableState, n = e._writableState;
  n && (n.closeEmitted = !0), t && (t.closeEmitted = !0), (n != null && n.emitClose || t != null && t.emitClose) && e.emit("close");
}
function mi(e, t) {
  const n = e._readableState, r = e._writableState;
  r != null && r.errorEmitted || n != null && n.errorEmitted || (r && (r.errorEmitted = !0), n && (n.errorEmitted = !0), e.emit("error", t));
}
function tf() {
  const e = this._readableState, t = this._writableState;
  e && (e.constructed = !0, e.closed = !1, e.closeEmitted = !1, e.destroyed = !1, e.errored = null, e.errorEmitted = !1, e.reading = !1, e.ended = e.readable === !1, e.endEmitted = e.readable === !1), t && (t.constructed = !0, t.destroyed = !1, t.closed = !1, t.closeEmitted = !1, t.errored = null, t.errorEmitted = !1, t.finalCalled = !1, t.prefinished = !1, t.ended = t.writable === !1, t.ending = t.writable === !1, t.finished = t.writable === !1);
}
function vi(e, t, n) {
  const r = e._readableState, i = e._writableState;
  if (i != null && i.destroyed || r != null && r.destroyed)
    return this;
  r != null && r.autoDestroy || i != null && i.autoDestroy ? e.destroy(t) : t && (t.stack, i && !i.errored && (i.errored = t), r && !r.errored && (r.errored = t), n ? Ve.nextTick(mi, e, t) : mi(e, t));
}
function nf(e, t) {
  if (typeof e._construct != "function")
    return;
  const n = e._readableState, r = e._writableState;
  n && (n.constructed = !1), r && (r.constructed = !1), e.once(wi, t), !(e.listenerCount(wi) > 1) && Ve.nextTick(rf, e);
}
function rf(e) {
  let t = !1;
  function n(r) {
    if (t) {
      vi(e, r ?? new Cu());
      return;
    }
    t = !0;
    const i = e._readableState, a = e._writableState, o = a || i;
    i && (i.constructed = !0), a && (a.constructed = !0), o.destroyed ? e.emit(ws, r) : r ? vi(e, r, !0) : Ve.nextTick(of, e);
  }
  try {
    e._construct((r) => {
      Ve.nextTick(n, r);
    });
  } catch (r) {
    Ve.nextTick(n, r);
  }
}
function of(e) {
  e.emit(wi);
}
function Xo(e) {
  return (e == null ? void 0 : e.setHeader) && typeof e.abort == "function";
}
function _s(e) {
  e.emit("close");
}
function af(e, t) {
  e.emit("error", t), Ve.nextTick(_s, e);
}
function sf(e, t) {
  !e || Ku(e) || (!t && !Qu(e) && (t = new zu()), Yu(e) ? (e.socket = null, e.destroy(t)) : Xo(e) ? e.abort() : Xo(e.req) ? e.req.abort() : typeof e.destroy == "function" ? e.destroy(t) : typeof e.close == "function" ? e.close() : t ? Ve.nextTick(af, e, t) : Ve.nextTick(_s, e), e.destroyed || (e[Xu] = !0));
}
var Yt = {
  construct: nf,
  destroyer: sf,
  destroy: Zu,
  undestroy: tf,
  errorOrDestroy: vi
};
const { ArrayIsArray: lf, ObjectSetPrototypeOf: Ss } = te, { EventEmitter: rr } = zn;
function ir(e) {
  rr.call(this, e);
}
Ss(ir.prototype, rr.prototype);
Ss(ir, rr);
ir.prototype.pipe = function(e, t) {
  const n = this;
  function r(h) {
    e.writable && e.write(h) === !1 && n.pause && n.pause();
  }
  n.on("data", r);
  function i() {
    n.readable && n.resume && n.resume();
  }
  e.on("drain", i), !e._isStdio && (!t || t.end !== !1) && (n.on("end", o), n.on("close", s));
  let a = !1;
  function o() {
    a || (a = !0, e.end());
  }
  function s() {
    a || (a = !0, typeof e.destroy == "function" && e.destroy());
  }
  function d(h) {
    c(), rr.listenerCount(this, "error") === 0 && this.emit("error", h);
  }
  _i(n, "error", d), _i(e, "error", d);
  function c() {
    n.removeListener("data", r), e.removeListener("drain", i), n.removeListener("end", o), n.removeListener("close", s), n.removeListener("error", d), e.removeListener("error", d), n.removeListener("end", c), n.removeListener("close", c), e.removeListener("close", c);
  }
  return n.on("end", c), n.on("close", c), e.on("close", c), e.emit("pipe", n), e;
};
function _i(e, t, n) {
  if (typeof e.prependListener == "function")
    return e.prependListener(t, n);
  !e._events || !e._events[t] ? e.on(t, n) : lf(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]];
}
var Pi = {
  Stream: ir,
  prependListener: _i
}, Es = { exports: {} };
(function(e) {
  const { SymbolDispose: t } = te, { AbortError: n, codes: r } = _e, { isNodeStream: i, isWebStream: a, kControllerErrorFunction: o } = at, s = gt, { ERR_INVALID_ARG_TYPE: d } = r;
  let c;
  const h = (p, u) => {
    if (typeof p != "object" || !("aborted" in p))
      throw new d(u, "AbortSignal", p);
  };
  e.exports.addAbortSignal = function(u, l) {
    if (h(u, "signal"), !i(l) && !a(l))
      throw new d("stream", ["ReadableStream", "WritableStream", "Stream"], l);
    return e.exports.addAbortSignalNoValidate(u, l);
  }, e.exports.addAbortSignalNoValidate = function(p, u) {
    if (typeof p != "object" || !("aborted" in p))
      return u;
    const l = i(u) ? () => {
      u.destroy(
        new n(void 0, {
          cause: p.reason
        })
      );
    } : () => {
      u[o](
        new n(void 0, {
          cause: p.reason
        })
      );
    };
    if (p.aborted)
      l();
    else {
      c = c || me.addAbortListener;
      const f = c(p, l);
      s(u, f[t]);
    }
    return u;
  };
})(Es);
var or = Es.exports;
const { StringPrototypeSlice: Ko, SymbolIterator: cf, TypedArrayPrototypeSet: Dn, Uint8Array: df } = te, { Buffer: Br } = jt, { inspect: uf } = me;
var ff = class {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  push(t) {
    const n = {
      data: t,
      next: null
    };
    this.length > 0 ? this.tail.next = n : this.head = n, this.tail = n, ++this.length;
  }
  unshift(t) {
    const n = {
      data: t,
      next: this.head
    };
    this.length === 0 && (this.tail = n), this.head = n, ++this.length;
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
    let n = this.head, r = "" + n.data;
    for (; (n = n.next) !== null; )
      r += t + n.data;
    return r;
  }
  concat(t) {
    if (this.length === 0)
      return Br.alloc(0);
    const n = Br.allocUnsafe(t >>> 0);
    let r = this.head, i = 0;
    for (; r; )
      Dn(n, r.data, i), i += r.data.length, r = r.next;
    return n;
  }
  // Consumes a specified amount of bytes or characters from the buffered data.
  consume(t, n) {
    const r = this.head.data;
    if (t < r.length) {
      const i = r.slice(0, t);
      return this.head.data = r.slice(t), i;
    }
    return t === r.length ? this.shift() : n ? this._getString(t) : this._getBuffer(t);
  }
  first() {
    return this.head.data;
  }
  *[cf]() {
    for (let t = this.head; t; t = t.next)
      yield t.data;
  }
  // Consumes a specified amount of characters from the buffered data.
  _getString(t) {
    let n = "", r = this.head, i = 0;
    do {
      const a = r.data;
      if (t > a.length)
        n += a, t -= a.length;
      else {
        t === a.length ? (n += a, ++i, r.next ? this.head = r.next : this.head = this.tail = null) : (n += Ko(a, 0, t), this.head = r, r.data = Ko(a, t));
        break;
      }
      ++i;
    } while ((r = r.next) !== null);
    return this.length -= i, n;
  }
  // Consumes a specified amount of bytes from the buffered data.
  _getBuffer(t) {
    const n = Br.allocUnsafe(t), r = t;
    let i = this.head, a = 0;
    do {
      const o = i.data;
      if (t > o.length)
        Dn(n, o, r - t), t -= o.length;
      else {
        t === o.length ? (Dn(n, o, r - t), ++a, i.next ? this.head = i.next : this.head = this.tail = null) : (Dn(n, new df(o.buffer, o.byteOffset, t), r - t), this.head = i, i.data = o.slice(t));
        break;
      }
      ++a;
    } while ((i = i.next) !== null);
    return this.length -= a, n;
  }
  // Make sure the linked list only shows the minimal necessary information.
  [Symbol.for("nodejs.util.inspect.custom")](t, n) {
    return uf(this, {
      ...n,
      // Only inspect one level.
      depth: 0,
      // It should not recurse.
      customInspect: !1
    });
  }
};
const { MathFloor: hf, NumberIsInteger: pf } = te, { validateInteger: gf } = mn, { ERR_INVALID_ARG_VALUE: yf } = _e.codes;
let Rs = 16 * 1024, Is = 16;
function bf(e, t, n) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[n] : null;
}
function As(e) {
  return e ? Is : Rs;
}
function wf(e, t) {
  gf(t, "value", 0), e ? Is = t : Rs = t;
}
function mf(e, t, n, r) {
  const i = bf(t, r, n);
  if (i != null) {
    if (!pf(i) || i < 0) {
      const a = r ? `options.${n}` : "options.highWaterMark";
      throw new yf(a, i);
    }
    return hf(i);
  }
  return As(e.objectMode);
}
var ar = {
  getHighWaterMark: mf,
  getDefaultHighWaterMark: As,
  setDefaultHighWaterMark: wf
};
const Qo = Lt, { PromisePrototypeThen: vf, SymbolAsyncIterator: Yo, SymbolIterator: Zo } = te, { Buffer: _f } = jt, { ERR_INVALID_ARG_TYPE: Sf, ERR_STREAM_NULL_VALUES: Ef } = _e.codes;
function Rf(e, t, n) {
  let r;
  if (typeof t == "string" || t instanceof _f)
    return new e({
      objectMode: !0,
      ...n,
      read() {
        this.push(t), this.push(null);
      }
    });
  let i;
  if (t && t[Yo])
    i = !0, r = t[Yo]();
  else if (t && t[Zo])
    i = !1, r = t[Zo]();
  else
    throw new Sf("iterable", ["Iterable"], t);
  const a = new e({
    objectMode: !0,
    highWaterMark: 1,
    // TODO(ronag): What options should be allowed?
    ...n
  });
  let o = !1;
  a._read = function() {
    o || (o = !0, d());
  }, a._destroy = function(c, h) {
    vf(
      s(c),
      () => Qo.nextTick(h, c),
      // nextTick is here in case cb throws
      (p) => Qo.nextTick(h, p || c)
    );
  };
  async function s(c) {
    const h = c != null, p = typeof r.throw == "function";
    if (h && p) {
      const { value: u, done: l } = await r.throw(c);
      if (await u, l)
        return;
    }
    if (typeof r.return == "function") {
      const { value: u } = await r.return();
      await u;
    }
  }
  async function d() {
    for (; ; ) {
      try {
        const { value: c, done: h } = i ? await r.next() : r.next();
        if (h)
          a.push(null);
        else {
          const p = c && typeof c.then == "function" ? await c : c;
          if (p === null)
            throw o = !1, new Ef();
          if (a.push(p))
            continue;
          o = !1;
        }
      } catch (c) {
        a.destroy(c);
      }
      break;
    }
  }
  return a;
}
var xs = Rf, Hr, ea;
function sr() {
  if (ea)
    return Hr;
  ea = 1;
  const e = Lt, {
    ArrayPrototypeIndexOf: t,
    NumberIsInteger: n,
    NumberIsNaN: r,
    NumberParseInt: i,
    ObjectDefineProperties: a,
    ObjectKeys: o,
    ObjectSetPrototypeOf: s,
    Promise: d,
    SafeSet: c,
    SymbolAsyncDispose: h,
    SymbolAsyncIterator: p,
    Symbol: u
  } = te;
  Hr = P, P.ReadableState = Ke;
  const { EventEmitter: l } = zn, { Stream: f, prependListener: y } = Pi, { Buffer: b } = jt, { addAbortSignal: m } = or, S = gt;
  let v = me.debuglog("stream", (g) => {
    v = g;
  });
  const R = ff, x = Yt, { getHighWaterMark: I, getDefaultHighWaterMark: G } = ar, {
    aggregateTwoErrors: k,
    codes: {
      ERR_INVALID_ARG_TYPE: F,
      ERR_METHOD_NOT_IMPLEMENTED: ne,
      ERR_OUT_OF_RANGE: se,
      ERR_STREAM_PUSH_AFTER_EOF: U,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT: N
    },
    AbortError: C
  } = _e, { validateObject: B } = mn, H = u("kPaused"), { StringDecoder: re } = tl(), ie = xs;
  s(P.prototype, f.prototype), s(P, f);
  const ee = () => {
  }, { errorOrDestroy: oe } = x, z = 1, Xe = 2, M = 4, le = 8, He = 16, Ft = 32, Wt = 64, Bt = 128, Zt = 256, cr = 512, en = 1024, Ht = 2048, _ = 4096, E = 8192, A = 16384, j = 32768, L = 65536, K = 1 << 17, Z = 1 << 18;
  function X(g) {
    return {
      enumerable: !1,
      get() {
        return (this.state & g) !== 0;
      },
      set(w) {
        w ? this.state |= g : this.state &= ~g;
      }
    };
  }
  a(Ke.prototype, {
    objectMode: X(z),
    ended: X(Xe),
    endEmitted: X(M),
    reading: X(le),
    // Stream is still being constructed and cannot be
    // destroyed until construction finished or failed.
    // Async construction is opt in, therefore we start as
    // constructed.
    constructed: X(He),
    // A flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    sync: X(Ft),
    // Whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    needReadable: X(Wt),
    emittedReadable: X(Bt),
    readableListening: X(Zt),
    resumeScheduled: X(cr),
    // True if the error was already emitted and should not be thrown again.
    errorEmitted: X(en),
    emitClose: X(Ht),
    autoDestroy: X(_),
    // Has it been destroyed.
    destroyed: X(E),
    // Indicates whether the stream has finished destroying.
    closed: X(A),
    // True if close has been emitted or would have been emitted
    // depending on emitClose.
    closeEmitted: X(j),
    multiAwaitDrain: X(L),
    // If true, a maybeReadMore has been scheduled.
    readingMore: X(K),
    dataEmitted: X(Z)
  });
  function Ke(g, w, D) {
    typeof D != "boolean" && (D = w instanceof rt()), this.state = Ht | _ | He | Ft, g && g.objectMode && (this.state |= z), D && g && g.readableObjectMode && (this.state |= z), this.highWaterMark = g ? I(this, g, "readableHighWaterMark", D) : G(!1), this.buffer = new R(), this.length = 0, this.pipes = [], this.flowing = null, this[H] = null, g && g.emitClose === !1 && (this.state &= ~Ht), g && g.autoDestroy === !1 && (this.state &= ~_), this.errored = null, this.defaultEncoding = g && g.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.decoder = null, this.encoding = null, g && g.encoding && (this.decoder = new re(g.encoding), this.encoding = g.encoding);
  }
  function P(g) {
    if (!(this instanceof P))
      return new P(g);
    const w = this instanceof rt();
    this._readableState = new Ke(g, this, w), g && (typeof g.read == "function" && (this._read = g.read), typeof g.destroy == "function" && (this._destroy = g.destroy), typeof g.construct == "function" && (this._construct = g.construct), g.signal && !w && m(g.signal, this)), f.call(this, g), x.construct(this, () => {
      this._readableState.needReadable && Sn(this, this._readableState);
    });
  }
  P.prototype.destroy = x.destroy, P.prototype._undestroy = x.undestroy, P.prototype._destroy = function(g, w) {
    w(g);
  }, P.prototype[l.captureRejectionSymbol] = function(g) {
    this.destroy(g);
  }, P.prototype[h] = function() {
    let g;
    return this.destroyed || (g = this.readableEnded ? null : new C(), this.destroy(g)), new d((w, D) => S(this, (T) => T && T !== g ? D(T) : w(null)));
  }, P.prototype.push = function(g, w) {
    return st(this, g, w, !1);
  }, P.prototype.unshift = function(g, w) {
    return st(this, g, w, !0);
  };
  function st(g, w, D, T) {
    v("readableAddChunk", w);
    const O = g._readableState;
    let fe;
    if (O.state & z || (typeof w == "string" ? (D = D || O.defaultEncoding, O.encoding !== D && (T && O.encoding ? w = b.from(w, D).toString(O.encoding) : (w = b.from(w, D), D = ""))) : w instanceof b ? D = "" : f._isUint8Array(w) ? (w = f._uint8ArrayToBuffer(w), D = "") : w != null && (fe = new F("chunk", ["string", "Buffer", "Uint8Array"], w))), fe)
      oe(g, fe);
    else if (w === null)
      O.state &= ~le, Hs(g, O);
    else if (O.state & z || w && w.length > 0)
      if (T)
        if (O.state & M)
          oe(g, new N());
        else {
          if (O.destroyed || O.errored)
            return !1;
          dr(g, O, w, !0);
        }
      else if (O.ended)
        oe(g, new U());
      else {
        if (O.destroyed || O.errored)
          return !1;
        O.state &= ~le, O.decoder && !D ? (w = O.decoder.write(w), O.objectMode || w.length !== 0 ? dr(g, O, w, !1) : Sn(g, O)) : dr(g, O, w, !1);
      }
    else
      T || (O.state &= ~le, Sn(g, O));
    return !O.ended && (O.length < O.highWaterMark || O.length === 0);
  }
  function dr(g, w, D, T) {
    w.flowing && w.length === 0 && !w.sync && g.listenerCount("data") > 0 ? (w.state & L ? w.awaitDrainWriters.clear() : w.awaitDrainWriters = null, w.dataEmitted = !0, g.emit("data", D)) : (w.length += w.objectMode ? 1 : D.length, T ? w.buffer.unshift(D) : w.buffer.push(D), w.state & Wt && _n(g)), Sn(g, w);
  }
  P.prototype.isPaused = function() {
    const g = this._readableState;
    return g[H] === !0 || g.flowing === !1;
  }, P.prototype.setEncoding = function(g) {
    const w = new re(g);
    this._readableState.decoder = w, this._readableState.encoding = this._readableState.decoder.encoding;
    const D = this._readableState.buffer;
    let T = "";
    for (const O of D)
      T += w.write(O);
    return D.clear(), T !== "" && D.push(T), this._readableState.length = T.length, this;
  };
  const Ws = 1073741824;
  function Bs(g) {
    if (g > Ws)
      throw new se("size", "<= 1GiB", g);
    return g--, g |= g >>> 1, g |= g >>> 2, g |= g >>> 4, g |= g >>> 8, g |= g >>> 16, g++, g;
  }
  function Ji(g, w) {
    return g <= 0 || w.length === 0 && w.ended ? 0 : w.state & z ? 1 : r(g) ? w.flowing && w.length ? w.buffer.first().length : w.length : g <= w.length ? g : w.ended ? w.length : 0;
  }
  P.prototype.read = function(g) {
    v("read", g), g === void 0 ? g = NaN : n(g) || (g = i(g, 10));
    const w = this._readableState, D = g;
    if (g > w.highWaterMark && (w.highWaterMark = Bs(g)), g !== 0 && (w.state &= ~Bt), g === 0 && w.needReadable && ((w.highWaterMark !== 0 ? w.length >= w.highWaterMark : w.length > 0) || w.ended))
      return v("read: emitReadable", w.length, w.ended), w.length === 0 && w.ended ? ur(this) : _n(this), null;
    if (g = Ji(g, w), g === 0 && w.ended)
      return w.length === 0 && ur(this), null;
    let T = (w.state & Wt) !== 0;
    if (v("need readable", T), (w.length === 0 || w.length - g < w.highWaterMark) && (T = !0, v("length less than watermark", T)), w.ended || w.reading || w.destroyed || w.errored || !w.constructed)
      T = !1, v("reading, ended or constructing", T);
    else if (T) {
      v("do read"), w.state |= le | Ft, w.length === 0 && (w.state |= Wt);
      try {
        this._read(w.highWaterMark);
      } catch (fe) {
        oe(this, fe);
      }
      w.state &= ~Ft, w.reading || (g = Ji(D, w));
    }
    let O;
    return g > 0 ? O = zi(g, w) : O = null, O === null ? (w.needReadable = w.length <= w.highWaterMark, g = 0) : (w.length -= g, w.multiAwaitDrain ? w.awaitDrainWriters.clear() : w.awaitDrainWriters = null), w.length === 0 && (w.ended || (w.needReadable = !0), D !== g && w.ended && ur(this)), O !== null && !w.errorEmitted && !w.closeEmitted && (w.dataEmitted = !0, this.emit("data", O)), O;
  };
  function Hs(g, w) {
    if (v("onEofChunk"), !w.ended) {
      if (w.decoder) {
        const D = w.decoder.end();
        D && D.length && (w.buffer.push(D), w.length += w.objectMode ? 1 : D.length);
      }
      w.ended = !0, w.sync ? _n(g) : (w.needReadable = !1, w.emittedReadable = !0, Gi(g));
    }
  }
  function _n(g) {
    const w = g._readableState;
    v("emitReadable", w.needReadable, w.emittedReadable), w.needReadable = !1, w.emittedReadable || (v("emitReadable", w.flowing), w.emittedReadable = !0, e.nextTick(Gi, g));
  }
  function Gi(g) {
    const w = g._readableState;
    v("emitReadable_", w.destroyed, w.length, w.ended), !w.destroyed && !w.errored && (w.length || w.ended) && (g.emit("readable"), w.emittedReadable = !1), w.needReadable = !w.flowing && !w.ended && w.length <= w.highWaterMark, Vi(g);
  }
  function Sn(g, w) {
    !w.readingMore && w.constructed && (w.readingMore = !0, e.nextTick(Us, g, w));
  }
  function Us(g, w) {
    for (; !w.reading && !w.ended && (w.length < w.highWaterMark || w.flowing && w.length === 0); ) {
      const D = w.length;
      if (v("maybeReadMore read 0"), g.read(0), D === w.length)
        break;
    }
    w.readingMore = !1;
  }
  P.prototype._read = function(g) {
    throw new ne("_read()");
  }, P.prototype.pipe = function(g, w) {
    const D = this, T = this._readableState;
    T.pipes.length === 1 && (T.multiAwaitDrain || (T.multiAwaitDrain = !0, T.awaitDrainWriters = new c(T.awaitDrainWriters ? [T.awaitDrainWriters] : []))), T.pipes.push(g), v("pipe count=%d opts=%j", T.pipes.length, w);
    const fe = (!w || w.end !== !1) && g !== e.stdout && g !== e.stderr ? Ki : tn;
    T.endEmitted ? e.nextTick(fe) : D.once("end", fe), g.on("unpipe", xe);
    function xe(bt, Qe) {
      v("onunpipe"), bt === D && Qe && Qe.hasUnpiped === !1 && (Qe.hasUnpiped = !0, Ks());
    }
    function Ki() {
      v("onend"), g.end();
    }
    let yt, Qi = !1;
    function Ks() {
      v("cleanup"), g.removeListener("close", pr), g.removeListener("finish", gr), yt && g.removeListener("drain", yt), g.removeListener("error", hr), g.removeListener("unpipe", xe), D.removeListener("end", Ki), D.removeListener("end", tn), D.removeListener("data", Zi), Qi = !0, yt && T.awaitDrainWriters && (!g._writableState || g._writableState.needDrain) && yt();
    }
    function Yi() {
      Qi || (T.pipes.length === 1 && T.pipes[0] === g ? (v("false write response, pause", 0), T.awaitDrainWriters = g, T.multiAwaitDrain = !1) : T.pipes.length > 1 && T.pipes.includes(g) && (v("false write response, pause", T.awaitDrainWriters.size), T.awaitDrainWriters.add(g)), D.pause()), yt || (yt = Js(D, g), g.on("drain", yt));
    }
    D.on("data", Zi);
    function Zi(bt) {
      v("ondata");
      const Qe = g.write(bt);
      v("dest.write", Qe), Qe === !1 && Yi();
    }
    function hr(bt) {
      if (v("onerror", bt), tn(), g.removeListener("error", hr), g.listenerCount("error") === 0) {
        const Qe = g._writableState || g._readableState;
        Qe && !Qe.errorEmitted ? oe(g, bt) : g.emit("error", bt);
      }
    }
    y(g, "error", hr);
    function pr() {
      g.removeListener("finish", gr), tn();
    }
    g.once("close", pr);
    function gr() {
      v("onfinish"), g.removeListener("close", pr), tn();
    }
    g.once("finish", gr);
    function tn() {
      v("unpipe"), D.unpipe(g);
    }
    return g.emit("pipe", D), g.writableNeedDrain === !0 ? Yi() : T.flowing || (v("pipe resume"), D.resume()), g;
  };
  function Js(g, w) {
    return function() {
      const T = g._readableState;
      T.awaitDrainWriters === w ? (v("pipeOnDrain", 1), T.awaitDrainWriters = null) : T.multiAwaitDrain && (v("pipeOnDrain", T.awaitDrainWriters.size), T.awaitDrainWriters.delete(w)), (!T.awaitDrainWriters || T.awaitDrainWriters.size === 0) && g.listenerCount("data") && g.resume();
    };
  }
  P.prototype.unpipe = function(g) {
    const w = this._readableState, D = {
      hasUnpiped: !1
    };
    if (w.pipes.length === 0)
      return this;
    if (!g) {
      const O = w.pipes;
      w.pipes = [], this.pause();
      for (let fe = 0; fe < O.length; fe++)
        O[fe].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    const T = t(w.pipes, g);
    return T === -1 ? this : (w.pipes.splice(T, 1), w.pipes.length === 0 && this.pause(), g.emit("unpipe", this, D), this);
  }, P.prototype.on = function(g, w) {
    const D = f.prototype.on.call(this, g, w), T = this._readableState;
    return g === "data" ? (T.readableListening = this.listenerCount("readable") > 0, T.flowing !== !1 && this.resume()) : g === "readable" && !T.endEmitted && !T.readableListening && (T.readableListening = T.needReadable = !0, T.flowing = !1, T.emittedReadable = !1, v("on readable", T.length, T.reading), T.length ? _n(this) : T.reading || e.nextTick(Gs, this)), D;
  }, P.prototype.addListener = P.prototype.on, P.prototype.removeListener = function(g, w) {
    const D = f.prototype.removeListener.call(this, g, w);
    return g === "readable" && e.nextTick(qi, this), D;
  }, P.prototype.off = P.prototype.removeListener, P.prototype.removeAllListeners = function(g) {
    const w = f.prototype.removeAllListeners.apply(this, arguments);
    return (g === "readable" || g === void 0) && e.nextTick(qi, this), w;
  };
  function qi(g) {
    const w = g._readableState;
    w.readableListening = g.listenerCount("readable") > 0, w.resumeScheduled && w[H] === !1 ? w.flowing = !0 : g.listenerCount("data") > 0 ? g.resume() : w.readableListening || (w.flowing = null);
  }
  function Gs(g) {
    v("readable nexttick read 0"), g.read(0);
  }
  P.prototype.resume = function() {
    const g = this._readableState;
    return g.flowing || (v("resume"), g.flowing = !g.readableListening, qs(this, g)), g[H] = !1, this;
  };
  function qs(g, w) {
    w.resumeScheduled || (w.resumeScheduled = !0, e.nextTick(Vs, g, w));
  }
  function Vs(g, w) {
    v("resume", w.reading), w.reading || g.read(0), w.resumeScheduled = !1, g.emit("resume"), Vi(g), w.flowing && !w.reading && g.read(0);
  }
  P.prototype.pause = function() {
    return v("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (v("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[H] = !0, this;
  };
  function Vi(g) {
    const w = g._readableState;
    for (v("flow", w.flowing); w.flowing && g.read() !== null; )
      ;
  }
  P.prototype.wrap = function(g) {
    let w = !1;
    g.on("data", (T) => {
      !this.push(T) && g.pause && (w = !0, g.pause());
    }), g.on("end", () => {
      this.push(null);
    }), g.on("error", (T) => {
      oe(this, T);
    }), g.on("close", () => {
      this.destroy();
    }), g.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      w && g.resume && (w = !1, g.resume());
    };
    const D = o(g);
    for (let T = 1; T < D.length; T++) {
      const O = D[T];
      this[O] === void 0 && typeof g[O] == "function" && (this[O] = g[O].bind(g));
    }
    return this;
  }, P.prototype[p] = function() {
    return Ci(this);
  }, P.prototype.iterator = function(g) {
    return g !== void 0 && B(g, "options"), Ci(this, g);
  };
  function Ci(g, w) {
    typeof g.read != "function" && (g = P.wrap(g, {
      objectMode: !0
    }));
    const D = Cs(g, w);
    return D.stream = g, D;
  }
  async function* Cs(g, w) {
    let D = ee;
    function T(xe) {
      this === g ? (D(), D = ee) : D = xe;
    }
    g.on("readable", T);
    let O;
    const fe = S(
      g,
      {
        writable: !1
      },
      (xe) => {
        O = xe ? k(O, xe) : null, D(), D = ee;
      }
    );
    try {
      for (; ; ) {
        const xe = g.destroyed ? null : g.read();
        if (xe !== null)
          yield xe;
        else {
          if (O)
            throw O;
          if (O === null)
            return;
          await new d(T);
        }
      }
    } catch (xe) {
      throw O = k(O, xe), O;
    } finally {
      (O || (w == null ? void 0 : w.destroyOnReturn) !== !1) && (O === void 0 || g._readableState.autoDestroy) ? x.destroyer(g, null) : (g.off("readable", T), fe());
    }
  }
  a(P.prototype, {
    readable: {
      __proto__: null,
      get() {
        const g = this._readableState;
        return !!g && g.readable !== !1 && !g.destroyed && !g.errorEmitted && !g.endEmitted;
      },
      set(g) {
        this._readableState && (this._readableState.readable = !!g);
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
      set: function(g) {
        this._readableState && (this._readableState.flowing = g);
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
      set(g) {
        this._readableState && (this._readableState.destroyed = g);
      }
    },
    readableEnded: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.endEmitted : !1;
      }
    }
  }), a(Ke.prototype, {
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
        return this[H] !== !1;
      },
      set(g) {
        this[H] = !!g;
      }
    }
  }), P._fromList = zi;
  function zi(g, w) {
    if (w.length === 0)
      return null;
    let D;
    return w.objectMode ? D = w.buffer.shift() : !g || g >= w.length ? (w.decoder ? D = w.buffer.join("") : w.buffer.length === 1 ? D = w.buffer.first() : D = w.buffer.concat(w.length), w.buffer.clear()) : D = w.buffer.consume(g, w.decoder), D;
  }
  function ur(g) {
    const w = g._readableState;
    v("endReadable", w.endEmitted), w.endEmitted || (w.ended = !0, e.nextTick(zs, w, g));
  }
  function zs(g, w) {
    if (v("endReadableNT", g.endEmitted, g.length), !g.errored && !g.closeEmitted && !g.endEmitted && g.length === 0) {
      if (g.endEmitted = !0, w.emit("end"), w.writable && w.allowHalfOpen === !1)
        e.nextTick(Xs, w);
      else if (g.autoDestroy) {
        const D = w._writableState;
        (!D || D.autoDestroy && // We don't expect the writable to ever 'finish'
        // if writable is explicitly set to false.
        (D.finished || D.writable === !1)) && w.destroy();
      }
    }
  }
  function Xs(g) {
    g.writable && !g.writableEnded && !g.destroyed && g.end();
  }
  P.from = function(g, w) {
    return ie(P, g, w);
  };
  let fr;
  function Xi() {
    return fr === void 0 && (fr = {}), fr;
  }
  return P.fromWeb = function(g, w) {
    return Xi().newStreamReadableFromReadableStream(g, w);
  }, P.toWeb = function(g, w) {
    return Xi().newReadableStreamFromStreamReadable(g, w);
  }, P.wrap = function(g, w) {
    var D, T;
    return new P({
      objectMode: (D = (T = g.readableObjectMode) !== null && T !== void 0 ? T : g.objectMode) !== null && D !== void 0 ? D : !0,
      ...w,
      destroy(O, fe) {
        x.destroyer(g, O), fe(O);
      }
    }).wrap(g);
  }, Hr;
}
var Ur, ta;
function Fi() {
  if (ta)
    return Ur;
  ta = 1;
  const e = Lt, {
    ArrayPrototypeSlice: t,
    Error: n,
    FunctionPrototypeSymbolHasInstance: r,
    ObjectDefineProperty: i,
    ObjectDefineProperties: a,
    ObjectSetPrototypeOf: o,
    StringPrototypeToLowerCase: s,
    Symbol: d,
    SymbolHasInstance: c
  } = te;
  Ur = B, B.WritableState = N;
  const { EventEmitter: h } = zn, p = Pi.Stream, { Buffer: u } = jt, l = Yt, { addAbortSignal: f } = or, { getHighWaterMark: y, getDefaultHighWaterMark: b } = ar, {
    ERR_INVALID_ARG_TYPE: m,
    ERR_METHOD_NOT_IMPLEMENTED: S,
    ERR_MULTIPLE_CALLBACK: v,
    ERR_STREAM_CANNOT_PIPE: R,
    ERR_STREAM_DESTROYED: x,
    ERR_STREAM_ALREADY_FINISHED: I,
    ERR_STREAM_NULL_VALUES: G,
    ERR_STREAM_WRITE_AFTER_END: k,
    ERR_UNKNOWN_ENCODING: F
  } = _e.codes, { errorOrDestroy: ne } = l;
  o(B.prototype, p.prototype), o(B, p);
  function se() {
  }
  const U = d("kOnFinished");
  function N(_, E, A) {
    typeof A != "boolean" && (A = E instanceof rt()), this.objectMode = !!(_ && _.objectMode), A && (this.objectMode = this.objectMode || !!(_ && _.writableObjectMode)), this.highWaterMark = _ ? y(this, _, "writableHighWaterMark", A) : b(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    const j = !!(_ && _.decodeStrings === !1);
    this.decodeStrings = !j, this.defaultEncoding = _ && _.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = oe.bind(void 0, E), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, C(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !_ || _.emitClose !== !1, this.autoDestroy = !_ || _.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[U] = [];
  }
  function C(_) {
    _.buffered = [], _.bufferedIndex = 0, _.allBuffers = !0, _.allNoop = !0;
  }
  N.prototype.getBuffer = function() {
    return t(this.buffered, this.bufferedIndex);
  }, i(N.prototype, "bufferedRequestCount", {
    __proto__: null,
    get() {
      return this.buffered.length - this.bufferedIndex;
    }
  });
  function B(_) {
    const E = this instanceof rt();
    if (!E && !r(B, this))
      return new B(_);
    this._writableState = new N(_, this, E), _ && (typeof _.write == "function" && (this._write = _.write), typeof _.writev == "function" && (this._writev = _.writev), typeof _.destroy == "function" && (this._destroy = _.destroy), typeof _.final == "function" && (this._final = _.final), typeof _.construct == "function" && (this._construct = _.construct), _.signal && f(_.signal, this)), p.call(this, _), l.construct(this, () => {
      const A = this._writableState;
      A.writing || le(this, A), Bt(this, A);
    });
  }
  i(B, c, {
    __proto__: null,
    value: function(_) {
      return r(this, _) ? !0 : this !== B ? !1 : _ && _._writableState instanceof N;
    }
  }), B.prototype.pipe = function() {
    ne(this, new R());
  };
  function H(_, E, A, j) {
    const L = _._writableState;
    if (typeof A == "function")
      j = A, A = L.defaultEncoding;
    else {
      if (!A)
        A = L.defaultEncoding;
      else if (A !== "buffer" && !u.isEncoding(A))
        throw new F(A);
      typeof j != "function" && (j = se);
    }
    if (E === null)
      throw new G();
    if (!L.objectMode)
      if (typeof E == "string")
        L.decodeStrings !== !1 && (E = u.from(E, A), A = "buffer");
      else if (E instanceof u)
        A = "buffer";
      else if (p._isUint8Array(E))
        E = p._uint8ArrayToBuffer(E), A = "buffer";
      else
        throw new m("chunk", ["string", "Buffer", "Uint8Array"], E);
    let K;
    return L.ending ? K = new k() : L.destroyed && (K = new x("write")), K ? (e.nextTick(j, K), ne(_, K, !0), K) : (L.pendingcb++, re(_, L, E, A, j));
  }
  B.prototype.write = function(_, E, A) {
    return H(this, _, E, A) === !0;
  }, B.prototype.cork = function() {
    this._writableState.corked++;
  }, B.prototype.uncork = function() {
    const _ = this._writableState;
    _.corked && (_.corked--, _.writing || le(this, _));
  }, B.prototype.setDefaultEncoding = function(E) {
    if (typeof E == "string" && (E = s(E)), !u.isEncoding(E))
      throw new F(E);
    return this._writableState.defaultEncoding = E, this;
  };
  function re(_, E, A, j, L) {
    const K = E.objectMode ? 1 : A.length;
    E.length += K;
    const Z = E.length < E.highWaterMark;
    return Z || (E.needDrain = !0), E.writing || E.corked || E.errored || !E.constructed ? (E.buffered.push({
      chunk: A,
      encoding: j,
      callback: L
    }), E.allBuffers && j !== "buffer" && (E.allBuffers = !1), E.allNoop && L !== se && (E.allNoop = !1)) : (E.writelen = K, E.writecb = L, E.writing = !0, E.sync = !0, _._write(A, j, E.onwrite), E.sync = !1), Z && !E.errored && !E.destroyed;
  }
  function ie(_, E, A, j, L, K, Z) {
    E.writelen = j, E.writecb = Z, E.writing = !0, E.sync = !0, E.destroyed ? E.onwrite(new x("write")) : A ? _._writev(L, E.onwrite) : _._write(L, K, E.onwrite), E.sync = !1;
  }
  function ee(_, E, A, j) {
    --E.pendingcb, j(A), M(E), ne(_, A);
  }
  function oe(_, E) {
    const A = _._writableState, j = A.sync, L = A.writecb;
    if (typeof L != "function") {
      ne(_, new v());
      return;
    }
    A.writing = !1, A.writecb = null, A.length -= A.writelen, A.writelen = 0, E ? (E.stack, A.errored || (A.errored = E), _._readableState && !_._readableState.errored && (_._readableState.errored = E), j ? e.nextTick(ee, _, A, E, L) : ee(_, A, E, L)) : (A.buffered.length > A.bufferedIndex && le(_, A), j ? A.afterWriteTickInfo !== null && A.afterWriteTickInfo.cb === L ? A.afterWriteTickInfo.count++ : (A.afterWriteTickInfo = {
      count: 1,
      cb: L,
      stream: _,
      state: A
    }, e.nextTick(z, A.afterWriteTickInfo)) : Xe(_, A, 1, L));
  }
  function z({ stream: _, state: E, count: A, cb: j }) {
    return E.afterWriteTickInfo = null, Xe(_, E, A, j);
  }
  function Xe(_, E, A, j) {
    for (!E.ending && !_.destroyed && E.length === 0 && E.needDrain && (E.needDrain = !1, _.emit("drain")); A-- > 0; )
      E.pendingcb--, j();
    E.destroyed && M(E), Bt(_, E);
  }
  function M(_) {
    if (_.writing)
      return;
    for (let L = _.bufferedIndex; L < _.buffered.length; ++L) {
      var E;
      const { chunk: K, callback: Z } = _.buffered[L], X = _.objectMode ? 1 : K.length;
      _.length -= X, Z(
        (E = _.errored) !== null && E !== void 0 ? E : new x("write")
      );
    }
    const A = _[U].splice(0);
    for (let L = 0; L < A.length; L++) {
      var j;
      A[L](
        (j = _.errored) !== null && j !== void 0 ? j : new x("end")
      );
    }
    C(_);
  }
  function le(_, E) {
    if (E.corked || E.bufferProcessing || E.destroyed || !E.constructed)
      return;
    const { buffered: A, bufferedIndex: j, objectMode: L } = E, K = A.length - j;
    if (!K)
      return;
    let Z = j;
    if (E.bufferProcessing = !0, K > 1 && _._writev) {
      E.pendingcb -= K - 1;
      const X = E.allNoop ? se : (P) => {
        for (let st = Z; st < A.length; ++st)
          A[st].callback(P);
      }, Ke = E.allNoop && Z === 0 ? A : t(A, Z);
      Ke.allBuffers = E.allBuffers, ie(_, E, !0, E.length, Ke, "", X), C(E);
    } else {
      do {
        const { chunk: X, encoding: Ke, callback: P } = A[Z];
        A[Z++] = null;
        const st = L ? 1 : X.length;
        ie(_, E, !1, st, X, Ke, P);
      } while (Z < A.length && !E.writing);
      Z === A.length ? C(E) : Z > 256 ? (A.splice(0, Z), E.bufferedIndex = 0) : E.bufferedIndex = Z;
    }
    E.bufferProcessing = !1;
  }
  B.prototype._write = function(_, E, A) {
    if (this._writev)
      this._writev(
        [
          {
            chunk: _,
            encoding: E
          }
        ],
        A
      );
    else
      throw new S("_write()");
  }, B.prototype._writev = null, B.prototype.end = function(_, E, A) {
    const j = this._writableState;
    typeof _ == "function" ? (A = _, _ = null, E = null) : typeof E == "function" && (A = E, E = null);
    let L;
    if (_ != null) {
      const K = H(this, _, E);
      K instanceof n && (L = K);
    }
    return j.corked && (j.corked = 1, this.uncork()), L || (!j.errored && !j.ending ? (j.ending = !0, Bt(this, j, !0), j.ended = !0) : j.finished ? L = new I("end") : j.destroyed && (L = new x("end"))), typeof A == "function" && (L || j.finished ? e.nextTick(A, L) : j[U].push(A)), this;
  };
  function He(_) {
    return _.ending && !_.destroyed && _.constructed && _.length === 0 && !_.errored && _.buffered.length === 0 && !_.finished && !_.writing && !_.errorEmitted && !_.closeEmitted;
  }
  function Ft(_, E) {
    let A = !1;
    function j(L) {
      if (A) {
        ne(_, L ?? v());
        return;
      }
      if (A = !0, E.pendingcb--, L) {
        const K = E[U].splice(0);
        for (let Z = 0; Z < K.length; Z++)
          K[Z](L);
        ne(_, L, E.sync);
      } else
        He(E) && (E.prefinished = !0, _.emit("prefinish"), E.pendingcb++, e.nextTick(Zt, _, E));
    }
    E.sync = !0, E.pendingcb++;
    try {
      _._final(j);
    } catch (L) {
      j(L);
    }
    E.sync = !1;
  }
  function Wt(_, E) {
    !E.prefinished && !E.finalCalled && (typeof _._final == "function" && !E.destroyed ? (E.finalCalled = !0, Ft(_, E)) : (E.prefinished = !0, _.emit("prefinish")));
  }
  function Bt(_, E, A) {
    He(E) && (Wt(_, E), E.pendingcb === 0 && (A ? (E.pendingcb++, e.nextTick(
      (j, L) => {
        He(L) ? Zt(j, L) : L.pendingcb--;
      },
      _,
      E
    )) : He(E) && (E.pendingcb++, Zt(_, E))));
  }
  function Zt(_, E) {
    E.pendingcb--, E.finished = !0;
    const A = E[U].splice(0);
    for (let j = 0; j < A.length; j++)
      A[j]();
    if (_.emit("finish"), E.autoDestroy) {
      const j = _._readableState;
      (!j || j.autoDestroy && // We don't expect the readable to ever 'end'
      // if readable is explicitly set to false.
      (j.endEmitted || j.readable === !1)) && _.destroy();
    }
  }
  a(B.prototype, {
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
      set(_) {
        this._writableState && (this._writableState.destroyed = _);
      }
    },
    writable: {
      __proto__: null,
      get() {
        const _ = this._writableState;
        return !!_ && _.writable !== !1 && !_.destroyed && !_.errored && !_.ending && !_.ended;
      },
      set(_) {
        this._writableState && (this._writableState.writable = !!_);
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
        const _ = this._writableState;
        return _ ? !_.destroyed && !_.ending && _.needDrain : !1;
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
  const cr = l.destroy;
  B.prototype.destroy = function(_, E) {
    const A = this._writableState;
    return !A.destroyed && (A.bufferedIndex < A.buffered.length || A[U].length) && e.nextTick(M, A), cr.call(this, _, E), this;
  }, B.prototype._undestroy = l.undestroy, B.prototype._destroy = function(_, E) {
    E(_);
  }, B.prototype[h.captureRejectionSymbol] = function(_) {
    this.destroy(_);
  };
  let en;
  function Ht() {
    return en === void 0 && (en = {}), en;
  }
  return B.fromWeb = function(_, E) {
    return Ht().newStreamWritableFromWritableStream(_, E);
  }, B.toWeb = function(_) {
    return Ht().newWritableStreamFromStreamWritable(_);
  }, Ur;
}
var Jr, na;
function If() {
  if (na)
    return Jr;
  na = 1;
  const e = Lt, t = jt, {
    isReadable: n,
    isWritable: r,
    isIterable: i,
    isNodeStream: a,
    isReadableNodeStream: o,
    isWritableNodeStream: s,
    isDuplexNodeStream: d,
    isReadableStream: c,
    isWritableStream: h
  } = at, p = gt, {
    AbortError: u,
    codes: { ERR_INVALID_ARG_TYPE: l, ERR_INVALID_RETURN_VALUE: f }
  } = _e, { destroyer: y } = Yt, b = rt(), m = sr(), S = Fi(), { createDeferredPromise: v } = me, R = xs, x = globalThis.Blob || t.Blob, I = typeof x < "u" ? function(N) {
    return N instanceof x;
  } : function(N) {
    return !1;
  }, G = globalThis.AbortController || yn().AbortController, { FunctionPrototypeCall: k } = te;
  class F extends b {
    constructor(N) {
      super(N), (N == null ? void 0 : N.readable) === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), (N == null ? void 0 : N.writable) === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
    }
  }
  Jr = function U(N, C) {
    if (d(N))
      return N;
    if (o(N))
      return se({
        readable: N
      });
    if (s(N))
      return se({
        writable: N
      });
    if (a(N))
      return se({
        writable: !1,
        readable: !1
      });
    if (c(N))
      return se({
        readable: m.fromWeb(N)
      });
    if (h(N))
      return se({
        writable: S.fromWeb(N)
      });
    if (typeof N == "function") {
      const { value: H, write: re, final: ie, destroy: ee } = ne(N);
      if (i(H))
        return R(F, H, {
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          write: re,
          final: ie,
          destroy: ee
        });
      const oe = H == null ? void 0 : H.then;
      if (typeof oe == "function") {
        let z;
        const Xe = k(
          oe,
          H,
          (M) => {
            if (M != null)
              throw new f("nully", "body", M);
          },
          (M) => {
            y(z, M);
          }
        );
        return z = new F({
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          readable: !1,
          write: re,
          final(M) {
            ie(async () => {
              try {
                await Xe, e.nextTick(M, null);
              } catch (le) {
                e.nextTick(M, le);
              }
            });
          },
          destroy: ee
        });
      }
      throw new f("Iterable, AsyncIterable or AsyncFunction", C, H);
    }
    if (I(N))
      return U(N.arrayBuffer());
    if (i(N))
      return R(F, N, {
        // TODO (ronag): highWaterMark?
        objectMode: !0,
        writable: !1
      });
    if (c(N == null ? void 0 : N.readable) && h(N == null ? void 0 : N.writable))
      return F.fromWeb(N);
    if (typeof (N == null ? void 0 : N.writable) == "object" || typeof (N == null ? void 0 : N.readable) == "object") {
      const H = N != null && N.readable ? o(N == null ? void 0 : N.readable) ? N == null ? void 0 : N.readable : U(N.readable) : void 0, re = N != null && N.writable ? s(N == null ? void 0 : N.writable) ? N == null ? void 0 : N.writable : U(N.writable) : void 0;
      return se({
        readable: H,
        writable: re
      });
    }
    const B = N == null ? void 0 : N.then;
    if (typeof B == "function") {
      let H;
      return k(
        B,
        N,
        (re) => {
          re != null && H.push(re), H.push(null);
        },
        (re) => {
          y(H, re);
        }
      ), H = new F({
        objectMode: !0,
        writable: !1,
        read() {
        }
      });
    }
    throw new l(
      C,
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
      N
    );
  };
  function ne(U) {
    let { promise: N, resolve: C } = v();
    const B = new G(), H = B.signal;
    return {
      value: U(
        async function* () {
          for (; ; ) {
            const ie = N;
            N = null;
            const { chunk: ee, done: oe, cb: z } = await ie;
            if (e.nextTick(z), oe)
              return;
            if (H.aborted)
              throw new u(void 0, {
                cause: H.reason
              });
            ({ promise: N, resolve: C } = v()), yield ee;
          }
        }(),
        {
          signal: H
        }
      ),
      write(ie, ee, oe) {
        const z = C;
        C = null, z({
          chunk: ie,
          done: !1,
          cb: oe
        });
      },
      final(ie) {
        const ee = C;
        C = null, ee({
          done: !0,
          cb: ie
        });
      },
      destroy(ie, ee) {
        B.abort(), ee(ie);
      }
    };
  }
  function se(U) {
    const N = U.readable && typeof U.readable.read != "function" ? m.wrap(U.readable) : U.readable, C = U.writable;
    let B = !!n(N), H = !!r(C), re, ie, ee, oe, z;
    function Xe(M) {
      const le = oe;
      oe = null, le ? le(M) : M && z.destroy(M);
    }
    return z = new F({
      // TODO (ronag): highWaterMark?
      readableObjectMode: !!(N != null && N.readableObjectMode),
      writableObjectMode: !!(C != null && C.writableObjectMode),
      readable: B,
      writable: H
    }), H && (p(C, (M) => {
      H = !1, M && y(N, M), Xe(M);
    }), z._write = function(M, le, He) {
      C.write(M, le) ? He() : re = He;
    }, z._final = function(M) {
      C.end(), ie = M;
    }, C.on("drain", function() {
      if (re) {
        const M = re;
        re = null, M();
      }
    }), C.on("finish", function() {
      if (ie) {
        const M = ie;
        ie = null, M();
      }
    })), B && (p(N, (M) => {
      B = !1, M && y(N, M), Xe(M);
    }), N.on("readable", function() {
      if (ee) {
        const M = ee;
        ee = null, M();
      }
    }), N.on("end", function() {
      z.push(null);
    }), z._read = function() {
      for (; ; ) {
        const M = N.read();
        if (M === null) {
          ee = z._read;
          return;
        }
        if (!z.push(M))
          return;
      }
    }), z._destroy = function(M, le) {
      !M && oe !== null && (M = new u()), ee = null, re = null, ie = null, oe === null ? le(M) : (oe = le, y(C, M), y(N, M));
    }, z;
  }
  return Jr;
}
var Gr, ra;
function rt() {
  if (ra)
    return Gr;
  ra = 1;
  const {
    ObjectDefineProperties: e,
    ObjectGetOwnPropertyDescriptor: t,
    ObjectKeys: n,
    ObjectSetPrototypeOf: r
  } = te;
  Gr = o;
  const i = sr(), a = Fi();
  r(o.prototype, i.prototype), r(o, i);
  {
    const h = n(a.prototype);
    for (let p = 0; p < h.length; p++) {
      const u = h[p];
      o.prototype[u] || (o.prototype[u] = a.prototype[u]);
    }
  }
  function o(h) {
    if (!(this instanceof o))
      return new o(h);
    i.call(this, h), a.call(this, h), h ? (this.allowHalfOpen = h.allowHalfOpen !== !1, h.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), h.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
  }
  e(o.prototype, {
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
  function d() {
    return s === void 0 && (s = {}), s;
  }
  o.fromWeb = function(h, p) {
    return d().newStreamDuplexFromReadableWritablePair(h, p);
  }, o.toWeb = function(h) {
    return d().newReadableWritablePairFromDuplex(h);
  };
  let c;
  return o.from = function(h) {
    return c || (c = If()), c(h, "body");
  }, Gr;
}
const { ObjectSetPrototypeOf: Ns, Symbol: Af } = te;
var Ds = it;
const { ERR_METHOD_NOT_IMPLEMENTED: xf } = _e.codes, Wi = rt(), { getHighWaterMark: Nf } = ar;
Ns(it.prototype, Wi.prototype);
Ns(it, Wi);
const gn = Af("kCallback");
function it(e) {
  if (!(this instanceof it))
    return new it(e);
  const t = e ? Nf(this, e, "readableHighWaterMark", !0) : null;
  t === 0 && (e = {
    ...e,
    highWaterMark: null,
    readableHighWaterMark: t,
    // TODO (ronag): 0 is not optimal since we have
    // a "bug" where we check needDrain before calling _write and not after.
    // Refs: https://github.com/nodejs/node/pull/32887
    // Refs: https://github.com/nodejs/node/pull/35941
    writableHighWaterMark: e.writableHighWaterMark || 0
  }), Wi.call(this, e), this._readableState.sync = !1, this[gn] = null, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", Df);
}
function Si(e) {
  typeof this._flush == "function" && !this.destroyed ? this._flush((t, n) => {
    if (t) {
      e ? e(t) : this.destroy(t);
      return;
    }
    n != null && this.push(n), this.push(null), e && e();
  }) : (this.push(null), e && e());
}
function Df() {
  this._final !== Si && Si.call(this);
}
it.prototype._final = Si;
it.prototype._transform = function(e, t, n) {
  throw new xf("_transform()");
};
it.prototype._write = function(e, t, n) {
  const r = this._readableState, i = this._writableState, a = r.length;
  this._transform(e, t, (o, s) => {
    if (o) {
      n(o);
      return;
    }
    s != null && this.push(s), i.ended || // Backwards compat.
    a === r.length || // Backwards compat.
    r.length < r.highWaterMark ? n() : this[gn] = n;
  });
};
it.prototype._read = function() {
  if (this[gn]) {
    const e = this[gn];
    this[gn] = null, e();
  }
};
const { ObjectSetPrototypeOf: Ts } = te;
var Os = Kt;
const Bi = Ds;
Ts(Kt.prototype, Bi.prototype);
Ts(Kt, Bi);
function Kt(e) {
  if (!(this instanceof Kt))
    return new Kt(e);
  Bi.call(this, e);
}
Kt.prototype._transform = function(e, t, n) {
  n(null, e);
};
const cn = Lt, { ArrayIsArray: Tf, Promise: Of, SymbolAsyncIterator: jf, SymbolDispose: Lf } = te, Vn = gt, { once: kf } = me, $f = Yt, ia = rt(), {
  aggregateTwoErrors: Mf,
  codes: {
    ERR_INVALID_ARG_TYPE: Ei,
    ERR_INVALID_RETURN_VALUE: qr,
    ERR_MISSING_ARGS: Pf,
    ERR_STREAM_DESTROYED: Ff,
    ERR_STREAM_PREMATURE_CLOSE: Wf
  },
  AbortError: Bf
} = _e, { validateFunction: Hf, validateAbortSignal: Uf } = mn, {
  isIterable: St,
  isReadable: Vr,
  isReadableNodeStream: Bn,
  isNodeStream: oa,
  isTransformStream: Gt,
  isWebStream: Jf,
  isReadableStream: Cr,
  isReadableFinished: Gf
} = at, qf = globalThis.AbortController || yn().AbortController;
let zr, Xr, Kr;
function aa(e, t, n) {
  let r = !1;
  e.on("close", () => {
    r = !0;
  });
  const i = Vn(
    e,
    {
      readable: t,
      writable: n
    },
    (a) => {
      r = !a;
    }
  );
  return {
    destroy: (a) => {
      r || (r = !0, $f.destroyer(e, a || new Ff("pipe")));
    },
    cleanup: i
  };
}
function Vf(e) {
  return Hf(e[e.length - 1], "streams[stream.length - 1]"), e.pop();
}
function Qr(e) {
  if (St(e))
    return e;
  if (Bn(e))
    return Cf(e);
  throw new Ei("val", ["Readable", "Iterable", "AsyncIterable"], e);
}
async function* Cf(e) {
  Xr || (Xr = sr()), yield* Xr.prototype[jf].call(e);
}
async function Tn(e, t, n, { end: r }) {
  let i, a = null;
  const o = (c) => {
    if (c && (i = c), a) {
      const h = a;
      a = null, h();
    }
  }, s = () => new Of((c, h) => {
    i ? h(i) : a = () => {
      i ? h(i) : c();
    };
  });
  t.on("drain", o);
  const d = Vn(
    t,
    {
      readable: !1
    },
    o
  );
  try {
    t.writableNeedDrain && await s();
    for await (const c of e)
      t.write(c) || await s();
    r && (t.end(), await s()), n();
  } catch (c) {
    n(i !== c ? Mf(i, c) : c);
  } finally {
    d(), t.off("drain", o);
  }
}
async function Yr(e, t, n, { end: r }) {
  Gt(t) && (t = t.writable);
  const i = t.getWriter();
  try {
    for await (const a of e)
      await i.ready, i.write(a).catch(() => {
      });
    await i.ready, r && await i.close(), n();
  } catch (a) {
    try {
      await i.abort(a), n(a);
    } catch (o) {
      n(o);
    }
  }
}
function zf(...e) {
  return js(e, kf(Vf(e)));
}
function js(e, t, n) {
  if (e.length === 1 && Tf(e[0]) && (e = e[0]), e.length < 2)
    throw new Pf("streams");
  const r = new qf(), i = r.signal, a = n == null ? void 0 : n.signal, o = [];
  Uf(a, "options.signal");
  function s() {
    f(new Bf());
  }
  Kr = Kr || me.addAbortListener;
  let d;
  a && (d = Kr(a, s));
  let c, h;
  const p = [];
  let u = 0;
  function l(S) {
    f(S, --u === 0);
  }
  function f(S, v) {
    var R;
    if (S && (!c || c.code === "ERR_STREAM_PREMATURE_CLOSE") && (c = S), !(!c && !v)) {
      for (; p.length; )
        p.shift()(c);
      (R = d) === null || R === void 0 || R[Lf](), r.abort(), v && (c || o.forEach((x) => x()), cn.nextTick(t, c, h));
    }
  }
  let y;
  for (let S = 0; S < e.length; S++) {
    const v = e[S], R = S < e.length - 1, x = S > 0, I = R || (n == null ? void 0 : n.end) !== !1, G = S === e.length - 1;
    if (oa(v)) {
      let k = function(F) {
        F && F.name !== "AbortError" && F.code !== "ERR_STREAM_PREMATURE_CLOSE" && l(F);
      };
      if (I) {
        const { destroy: F, cleanup: ne } = aa(v, R, x);
        p.push(F), Vr(v) && G && o.push(ne);
      }
      v.on("error", k), Vr(v) && G && o.push(() => {
        v.removeListener("error", k);
      });
    }
    if (S === 0)
      if (typeof v == "function") {
        if (y = v({
          signal: i
        }), !St(y))
          throw new qr("Iterable, AsyncIterable or Stream", "source", y);
      } else
        St(v) || Bn(v) || Gt(v) ? y = v : y = ia.from(v);
    else if (typeof v == "function") {
      if (Gt(y)) {
        var b;
        y = Qr((b = y) === null || b === void 0 ? void 0 : b.readable);
      } else
        y = Qr(y);
      if (y = v(y, {
        signal: i
      }), R) {
        if (!St(y, !0))
          throw new qr("AsyncIterable", `transform[${S - 1}]`, y);
      } else {
        var m;
        zr || (zr = Os);
        const k = new zr({
          objectMode: !0
        }), F = (m = y) === null || m === void 0 ? void 0 : m.then;
        if (typeof F == "function")
          u++, F.call(
            y,
            (U) => {
              h = U, U != null && k.write(U), I && k.end(), cn.nextTick(l);
            },
            (U) => {
              k.destroy(U), cn.nextTick(l, U);
            }
          );
        else if (St(y, !0))
          u++, Tn(y, k, l, {
            end: I
          });
        else if (Cr(y) || Gt(y)) {
          const U = y.readable || y;
          u++, Tn(U, k, l, {
            end: I
          });
        } else
          throw new qr("AsyncIterable or Promise", "destination", y);
        y = k;
        const { destroy: ne, cleanup: se } = aa(y, !1, !0);
        p.push(ne), G && o.push(se);
      }
    } else if (oa(v)) {
      if (Bn(y)) {
        u += 2;
        const k = Xf(y, v, l, {
          end: I
        });
        Vr(v) && G && o.push(k);
      } else if (Gt(y) || Cr(y)) {
        const k = y.readable || y;
        u++, Tn(k, v, l, {
          end: I
        });
      } else if (St(y))
        u++, Tn(y, v, l, {
          end: I
        });
      else
        throw new Ei(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          y
        );
      y = v;
    } else if (Jf(v)) {
      if (Bn(y))
        u++, Yr(Qr(y), v, l, {
          end: I
        });
      else if (Cr(y) || St(y))
        u++, Yr(y, v, l, {
          end: I
        });
      else if (Gt(y))
        u++, Yr(y.readable, v, l, {
          end: I
        });
      else
        throw new Ei(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          y
        );
      y = v;
    } else
      y = ia.from(v);
  }
  return (i != null && i.aborted || a != null && a.aborted) && cn.nextTick(s), y;
}
function Xf(e, t, n, { end: r }) {
  let i = !1;
  if (t.on("close", () => {
    i || n(new Wf());
  }), e.pipe(t, {
    end: !1
  }), r) {
    let a = function() {
      i = !0, t.end();
    };
    Gf(e) ? cn.nextTick(a) : e.once("end", a);
  } else
    n();
  return Vn(
    e,
    {
      readable: !0,
      writable: !1
    },
    (a) => {
      const o = e._readableState;
      a && a.code === "ERR_STREAM_PREMATURE_CLOSE" && o && o.ended && !o.errored && !o.errorEmitted ? e.once("end", n).once("error", n) : n(a);
    }
  ), Vn(
    t,
    {
      readable: !1,
      writable: !0
    },
    n
  );
}
var Hi = {
  pipelineImpl: js,
  pipeline: zf
};
const { pipeline: Kf } = Hi, On = rt(), { destroyer: Qf } = Yt, {
  isNodeStream: jn,
  isReadable: sa,
  isWritable: la,
  isWebStream: Zr,
  isTransformStream: _t,
  isWritableStream: ca,
  isReadableStream: da
} = at, {
  AbortError: Yf,
  codes: { ERR_INVALID_ARG_VALUE: ua, ERR_MISSING_ARGS: Zf }
} = _e, eh = gt;
var Ls = function(...t) {
  if (t.length === 0)
    throw new Zf("streams");
  if (t.length === 1)
    return On.from(t[0]);
  const n = [...t];
  if (typeof t[0] == "function" && (t[0] = On.from(t[0])), typeof t[t.length - 1] == "function") {
    const l = t.length - 1;
    t[l] = On.from(t[l]);
  }
  for (let l = 0; l < t.length; ++l)
    if (!(!jn(t[l]) && !Zr(t[l]))) {
      if (l < t.length - 1 && !(sa(t[l]) || da(t[l]) || _t(t[l])))
        throw new ua(`streams[${l}]`, n[l], "must be readable");
      if (l > 0 && !(la(t[l]) || ca(t[l]) || _t(t[l])))
        throw new ua(`streams[${l}]`, n[l], "must be writable");
    }
  let r, i, a, o, s;
  function d(l) {
    const f = o;
    o = null, f ? f(l) : l ? s.destroy(l) : !u && !p && s.destroy();
  }
  const c = t[0], h = Kf(t, d), p = !!(la(c) || ca(c) || _t(c)), u = !!(sa(h) || da(h) || _t(h));
  if (s = new On({
    // TODO (ronag): highWaterMark?
    writableObjectMode: !!(c != null && c.writableObjectMode),
    readableObjectMode: !!(h != null && h.readableObjectMode),
    writable: p,
    readable: u
  }), p) {
    if (jn(c))
      s._write = function(f, y, b) {
        c.write(f, y) ? b() : r = b;
      }, s._final = function(f) {
        c.end(), i = f;
      }, c.on("drain", function() {
        if (r) {
          const f = r;
          r = null, f();
        }
      });
    else if (Zr(c)) {
      const y = (_t(c) ? c.writable : c).getWriter();
      s._write = async function(b, m, S) {
        try {
          await y.ready, y.write(b).catch(() => {
          }), S();
        } catch (v) {
          S(v);
        }
      }, s._final = async function(b) {
        try {
          await y.ready, y.close().catch(() => {
          }), i = b;
        } catch (m) {
          b(m);
        }
      };
    }
    const l = _t(h) ? h.readable : h;
    eh(l, () => {
      if (i) {
        const f = i;
        i = null, f();
      }
    });
  }
  if (u) {
    if (jn(h))
      h.on("readable", function() {
        if (a) {
          const l = a;
          a = null, l();
        }
      }), h.on("end", function() {
        s.push(null);
      }), s._read = function() {
        for (; ; ) {
          const l = h.read();
          if (l === null) {
            a = s._read;
            return;
          }
          if (!s.push(l))
            return;
        }
      };
    else if (Zr(h)) {
      const f = (_t(h) ? h.readable : h).getReader();
      s._read = async function() {
        for (; ; )
          try {
            const { value: y, done: b } = await f.read();
            if (!s.push(y))
              return;
            if (b) {
              s.push(null);
              return;
            }
          } catch {
            return;
          }
      };
    }
  }
  return s._destroy = function(l, f) {
    !l && o !== null && (l = new Yf()), a = null, r = null, i = null, o === null ? f(l) : (o = f, jn(h) && Qf(h, l));
  }, s;
};
const th = globalThis.AbortController || yn().AbortController, {
  codes: { ERR_INVALID_ARG_VALUE: nh, ERR_INVALID_ARG_TYPE: vn, ERR_MISSING_ARGS: rh, ERR_OUT_OF_RANGE: ih },
  AbortError: Ce
} = _e, { validateAbortSignal: Mt, validateInteger: fa, validateObject: Pt } = mn, oh = te.Symbol("kWeak"), ah = te.Symbol("kResistStopPropagation"), { finished: sh } = gt, lh = Ls, { addAbortSignalNoValidate: ch } = or, { isWritable: dh, isNodeStream: uh } = at, { deprecate: fh } = me, {
  ArrayPrototypePush: hh,
  Boolean: ph,
  MathFloor: ha,
  Number: gh,
  NumberIsNaN: yh,
  Promise: pa,
  PromiseReject: ga,
  PromiseResolve: bh,
  PromisePrototypeThen: ya,
  Symbol: ks
} = te, Cn = ks("kEmpty"), ba = ks("kEof");
function wh(e, t) {
  if (t != null && Pt(t, "options"), (t == null ? void 0 : t.signal) != null && Mt(t.signal, "options.signal"), uh(e) && !dh(e))
    throw new nh("stream", e, "must be writable");
  const n = lh(this, e);
  return t != null && t.signal && ch(t.signal, n), n;
}
function lr(e, t) {
  if (typeof e != "function")
    throw new vn("fn", ["Function", "AsyncFunction"], e);
  t != null && Pt(t, "options"), (t == null ? void 0 : t.signal) != null && Mt(t.signal, "options.signal");
  let n = 1;
  (t == null ? void 0 : t.concurrency) != null && (n = ha(t.concurrency));
  let r = n - 1;
  return (t == null ? void 0 : t.highWaterMark) != null && (r = ha(t.highWaterMark)), fa(n, "options.concurrency", 1), fa(r, "options.highWaterMark", 0), r += n, (async function* () {
    const a = me.AbortSignalAny(
      [t == null ? void 0 : t.signal].filter(ph)
    ), o = this, s = [], d = {
      signal: a
    };
    let c, h, p = !1, u = 0;
    function l() {
      p = !0, f();
    }
    function f() {
      u -= 1, y();
    }
    function y() {
      h && !p && u < n && s.length < r && (h(), h = null);
    }
    async function b() {
      try {
        for await (let m of o) {
          if (p)
            return;
          if (a.aborted)
            throw new Ce();
          try {
            if (m = e(m, d), m === Cn)
              continue;
            m = bh(m);
          } catch (S) {
            m = ga(S);
          }
          u += 1, ya(m, f, l), s.push(m), c && (c(), c = null), !p && (s.length >= r || u >= n) && await new pa((S) => {
            h = S;
          });
        }
        s.push(ba);
      } catch (m) {
        const S = ga(m);
        ya(S, f, l), s.push(S);
      } finally {
        p = !0, c && (c(), c = null);
      }
    }
    b();
    try {
      for (; ; ) {
        for (; s.length > 0; ) {
          const m = await s[0];
          if (m === ba)
            return;
          if (a.aborted)
            throw new Ce();
          m !== Cn && (yield m), s.shift(), y();
        }
        await new pa((m) => {
          c = m;
        });
      }
    } finally {
      p = !0, h && (h(), h = null);
    }
  }).call(this);
}
function mh(e = void 0) {
  return e != null && Pt(e, "options"), (e == null ? void 0 : e.signal) != null && Mt(e.signal, "options.signal"), (async function* () {
    let n = 0;
    for await (const i of this) {
      var r;
      if (e != null && (r = e.signal) !== null && r !== void 0 && r.aborted)
        throw new Ce({
          cause: e.signal.reason
        });
      yield [n++, i];
    }
  }).call(this);
}
async function $s(e, t = void 0) {
  for await (const n of Ui.call(this, e, t))
    return !0;
  return !1;
}
async function vh(e, t = void 0) {
  if (typeof e != "function")
    throw new vn("fn", ["Function", "AsyncFunction"], e);
  return !await $s.call(
    this,
    async (...n) => !await e(...n),
    t
  );
}
async function _h(e, t) {
  for await (const n of Ui.call(this, e, t))
    return n;
}
async function Sh(e, t) {
  if (typeof e != "function")
    throw new vn("fn", ["Function", "AsyncFunction"], e);
  async function n(r, i) {
    return await e(r, i), Cn;
  }
  for await (const r of lr.call(this, n, t))
    ;
}
function Ui(e, t) {
  if (typeof e != "function")
    throw new vn("fn", ["Function", "AsyncFunction"], e);
  async function n(r, i) {
    return await e(r, i) ? r : Cn;
  }
  return lr.call(this, n, t);
}
class Eh extends rh {
  constructor() {
    super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
  }
}
async function Rh(e, t, n) {
  var r;
  if (typeof e != "function")
    throw new vn("reducer", ["Function", "AsyncFunction"], e);
  n != null && Pt(n, "options"), (n == null ? void 0 : n.signal) != null && Mt(n.signal, "options.signal");
  let i = arguments.length > 1;
  if (n != null && (r = n.signal) !== null && r !== void 0 && r.aborted) {
    const c = new Ce(void 0, {
      cause: n.signal.reason
    });
    throw this.once("error", () => {
    }), await sh(this.destroy(c)), c;
  }
  const a = new th(), o = a.signal;
  if (n != null && n.signal) {
    const c = {
      once: !0,
      [oh]: this,
      [ah]: !0
    };
    n.signal.addEventListener("abort", () => a.abort(), c);
  }
  let s = !1;
  try {
    for await (const c of this) {
      var d;
      if (s = !0, n != null && (d = n.signal) !== null && d !== void 0 && d.aborted)
        throw new Ce();
      i ? t = await e(t, c, {
        signal: o
      }) : (t = c, i = !0);
    }
    if (!s && !i)
      throw new Eh();
  } finally {
    a.abort();
  }
  return t;
}
async function Ih(e) {
  e != null && Pt(e, "options"), (e == null ? void 0 : e.signal) != null && Mt(e.signal, "options.signal");
  const t = [];
  for await (const r of this) {
    var n;
    if (e != null && (n = e.signal) !== null && n !== void 0 && n.aborted)
      throw new Ce(void 0, {
        cause: e.signal.reason
      });
    hh(t, r);
  }
  return t;
}
function Ah(e, t) {
  const n = lr.call(this, e, t);
  return (async function* () {
    for await (const i of n)
      yield* i;
  }).call(this);
}
function Ms(e) {
  if (e = gh(e), yh(e))
    return 0;
  if (e < 0)
    throw new ih("number", ">= 0", e);
  return e;
}
function xh(e, t = void 0) {
  return t != null && Pt(t, "options"), (t == null ? void 0 : t.signal) != null && Mt(t.signal, "options.signal"), e = Ms(e), (async function* () {
    var r;
    if (t != null && (r = t.signal) !== null && r !== void 0 && r.aborted)
      throw new Ce();
    for await (const a of this) {
      var i;
      if (t != null && (i = t.signal) !== null && i !== void 0 && i.aborted)
        throw new Ce();
      e-- <= 0 && (yield a);
    }
  }).call(this);
}
function Nh(e, t = void 0) {
  return t != null && Pt(t, "options"), (t == null ? void 0 : t.signal) != null && Mt(t.signal, "options.signal"), e = Ms(e), (async function* () {
    var r;
    if (t != null && (r = t.signal) !== null && r !== void 0 && r.aborted)
      throw new Ce();
    for await (const a of this) {
      var i;
      if (t != null && (i = t.signal) !== null && i !== void 0 && i.aborted)
        throw new Ce();
      if (e-- > 0 && (yield a), e <= 0)
        return;
    }
  }).call(this);
}
ji.streamReturningOperators = {
  asIndexedPairs: fh(mh, "readable.asIndexedPairs will be removed in a future version."),
  drop: xh,
  filter: Ui,
  flatMap: Ah,
  map: lr,
  take: Nh,
  compose: wh
};
ji.promiseReturningOperators = {
  every: vh,
  forEach: Sh,
  reduce: Rh,
  toArray: Ih,
  some: $s,
  find: _h
};
var ei, wa;
function Ps() {
  if (wa)
    return ei;
  wa = 1;
  const { ArrayPrototypePop: e, Promise: t } = te, { isIterable: n, isNodeStream: r, isWebStream: i } = at, { pipelineImpl: a } = Hi, { finished: o } = gt;
  Fs();
  function s(...d) {
    return new t((c, h) => {
      let p, u;
      const l = d[d.length - 1];
      if (l && typeof l == "object" && !r(l) && !n(l) && !i(l)) {
        const f = e(d);
        p = f.signal, u = f.end;
      }
      a(
        d,
        (f, y) => {
          f ? h(f) : c(y);
        },
        {
          signal: p,
          end: u
        }
      );
    });
  }
  return ei = {
    finished: o,
    pipeline: s
  }, ei;
}
var ma;
function Fs() {
  if (ma)
    return Pr.exports;
  ma = 1;
  const { Buffer: e } = jt, { ObjectDefineProperty: t, ObjectKeys: n, ReflectApply: r } = te, {
    promisify: { custom: i }
  } = me, { streamReturningOperators: a, promiseReturningOperators: o } = ji, {
    codes: { ERR_ILLEGAL_CONSTRUCTOR: s }
  } = _e, d = Ls, { setDefaultHighWaterMark: c, getDefaultHighWaterMark: h } = ar, { pipeline: p } = Hi, { destroyer: u } = Yt, l = gt, f = Ps(), y = at, b = Pr.exports = Pi.Stream;
  b.isDestroyed = y.isDestroyed, b.isDisturbed = y.isDisturbed, b.isErrored = y.isErrored, b.isReadable = y.isReadable, b.isWritable = y.isWritable, b.Readable = sr();
  for (const S of n(a)) {
    let R = function(...x) {
      if (new.target)
        throw s();
      return b.Readable.from(r(v, this, x));
    };
    const v = a[S];
    t(R, "name", {
      __proto__: null,
      value: v.name
    }), t(R, "length", {
      __proto__: null,
      value: v.length
    }), t(b.Readable.prototype, S, {
      __proto__: null,
      value: R,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  for (const S of n(o)) {
    let R = function(...x) {
      if (new.target)
        throw s();
      return r(v, this, x);
    };
    const v = o[S];
    t(R, "name", {
      __proto__: null,
      value: v.name
    }), t(R, "length", {
      __proto__: null,
      value: v.length
    }), t(b.Readable.prototype, S, {
      __proto__: null,
      value: R,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  b.Writable = Fi(), b.Duplex = rt(), b.Transform = Ds, b.PassThrough = Os, b.pipeline = p;
  const { addAbortSignal: m } = or;
  return b.addAbortSignal = m, b.finished = l, b.destroy = u, b.compose = d, b.setDefaultHighWaterMark = c, b.getDefaultHighWaterMark = h, t(b, "promises", {
    __proto__: null,
    configurable: !0,
    enumerable: !0,
    get() {
      return f;
    }
  }), t(p, i, {
    __proto__: null,
    enumerable: !0,
    get() {
      return f.pipeline;
    }
  }), t(l, i, {
    __proto__: null,
    enumerable: !0,
    get() {
      return f.finished;
    }
  }), b.Stream = b, b._isUint8Array = function(v) {
    return v instanceof Uint8Array;
  }, b._uint8ArrayToBuffer = function(v) {
    return e.from(v.buffer, v.byteOffset, v.byteLength);
  }, Pr.exports;
}
(function(e) {
  const t = Fs(), n = Ps(), r = t.Readable.destroy;
  e.exports = t.Readable, e.exports._uint8ArrayToBuffer = t._uint8ArrayToBuffer, e.exports._isUint8Array = t._isUint8Array, e.exports.isDisturbed = t.isDisturbed, e.exports.isErrored = t.isErrored, e.exports.isReadable = t.isReadable, e.exports.Readable = t.Readable, e.exports.Writable = t.Writable, e.exports.Duplex = t.Duplex, e.exports.Transform = t.Transform, e.exports.PassThrough = t.PassThrough, e.exports.addAbortSignal = t.addAbortSignal, e.exports.finished = t.finished, e.exports.destroy = t.destroy, e.exports.destroy = r, e.exports.pipeline = t.pipeline, e.exports.compose = t.compose, Object.defineProperty(t, "promises", {
    configurable: !0,
    enumerable: !0,
    get() {
      return n;
    }
  }), e.exports.Stream = t.Stream, e.exports.default = e.exports;
})(za);
var Dh = za.exports;
class Rt extends Dh.Readable {
  constructor(t, {
    baseIRI: n,
    compact: r,
    context: i = {},
    encoding: a = "object",
    flatten: o,
    frame: s,
    prettyPrint: d,
    skipContext: c
  } = {}) {
    super({
      objectMode: !0,
      read: () => {
      }
    }), this.compact = r, this.context = i, this.encoding = a, this.flatten = o, this.frame = s, this.prettyPrint = d, this.skipContext = c, n && (this.context["@base"] = n.value || n.toString()), t.on("prefix", (h, p) => {
      this.context[h] || (this.context[h] = p.value);
    }), this.handleData(t);
  }
  async handleData(t) {
    try {
      const n = (await nl(t)).map(Rt.toJsonldQuad), r = await Nn.fromRDF(n), i = await this.transform(r, this.options);
      this.push(i), this.push(null);
    } catch (n) {
      this.emit("error", n);
    }
  }
  async transform(t) {
    return this.compact && (t = await Nn.compact(t, this.context)), this.flatten && (t = await Nn.flatten(t, this.context)), this.frame && (t = await Nn.frame(t, this.context)), this.skipContext && t["@context"] && delete t["@context"], this.encoding === "string" ? this.prettyPrint ? JSON.stringify(t, null, 2) : JSON.stringify(t) : t;
  }
  static toJsonldQuad(t) {
    return {
      subject: Rt.toJsonldTerm(t.subject),
      predicate: Rt.toJsonldTerm(t.predicate),
      object: Rt.toJsonldTerm(t.object),
      graph: Rt.toJsonldTerm(t.graph)
    };
  }
  static toJsonldTerm(t) {
    return t.termType === "BlankNode" ? {
      termType: "BlankNode",
      value: `_:${t.value}`
    } : t;
  }
}
class Gh extends rl {
  constructor(t) {
    super(Rt, t);
  }
}
export {
  Gh as default
};
//# sourceMappingURL=index-CDRO8qms.js.map
