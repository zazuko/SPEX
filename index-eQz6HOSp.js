import { c as d } from "./index-BhI9pmWG.js";
var S = {}, o = {};
Object.defineProperty(o, "__esModule", { value: !0 });
o.removeDotSegmentsOfPath = o.removeDotSegments = o.resolve = void 0;
function P(t, e) {
  e = e || "";
  const r = e.indexOf("#");
  if (r > 0 && (e = e.substr(0, r)), !t.length) {
    if (e.indexOf(":") < 0)
      throw new Error(`Found invalid baseIRI '${e}' for value '${t}'`);
    return e;
  }
  if (t.startsWith("?")) {
    const h = e.indexOf("?");
    return h > 0 && (e = e.substr(0, h)), e + t;
  }
  if (t.startsWith("#"))
    return e + t;
  if (!e.length) {
    const h = t.indexOf(":");
    if (h < 0)
      throw new Error(`Found invalid relative IRI '${t}' for a missing baseIRI`);
    return l(t, h);
  }
  const a = t.indexOf(":");
  if (a >= 0)
    return l(t, a);
  const u = e.indexOf(":");
  if (u < 0)
    throw new Error(`Found invalid baseIRI '${e}' for value '${t}'`);
  const n = e.substr(0, u + 1);
  if (t.indexOf("//") === 0)
    return n + l(t, a);
  let s;
  if (e.indexOf("//", u) === u + 1) {
    if (s = e.indexOf("/", u + 3), s < 0)
      return e.length > u + 3 ? e + "/" + l(t, a) : n + l(t, a);
  } else if (s = e.indexOf("/", u + 1), s < 0)
    return n + l(t, a);
  if (t.indexOf("/") === 0)
    return e.substr(0, s) + v(t);
  let c = e.substr(s);
  const O = c.lastIndexOf("/");
  return O >= 0 && O < c.length - 1 && (c = c.substr(0, O + 1), t[0] === "." && t[1] !== "." && t[1] !== "/" && t[2] && (t = t.substr(1))), t = c + t, t = v(t), e.substr(0, s) + t;
}
o.resolve = P;
function v(t) {
  const e = [];
  let r = 0;
  for (; r < t.length; )
    switch (t[r]) {
      case "/":
        if (t[r + 1] === ".")
          if (t[r + 2] === ".") {
            if (!T(t[r + 3])) {
              e.push([]), r++;
              break;
            }
            e.pop(), t[r + 3] || e.push([]), r += 3;
          } else {
            if (!T(t[r + 2])) {
              e.push([]), r++;
              break;
            }
            t[r + 2] || e.push([]), r += 2;
          }
        else
          e.push([]), r++;
        break;
      case "#":
      case "?":
        e.length || e.push([]), e[e.length - 1].push(t.substr(r)), r = t.length;
        break;
      default:
        e.length || e.push([]), e[e.length - 1].push(t[r]), r++;
        break;
    }
  return "/" + e.map((a) => a.join("")).join("/");
}
o.removeDotSegments = v;
function l(t, e) {
  let r = e + 1;
  e >= 0 ? t[e + 1] === "/" && t[e + 2] === "/" && (r = e + 3) : t[0] === "/" && t[1] === "/" && (r = 2);
  const a = t.indexOf("/", r);
  if (a < 0)
    return t;
  const u = t.substr(0, a), n = t.substr(a);
  return u + v(n);
}
o.removeDotSegmentsOfPath = l;
function T(t) {
  return !t || t === "#" || t === "?" || t === "/";
}
(function(t) {
  var e = d && d.__createBinding || (Object.create ? function(a, u, n, s) {
    s === void 0 && (s = n), Object.defineProperty(a, s, { enumerable: !0, get: function() {
      return u[n];
    } });
  } : function(a, u, n, s) {
    s === void 0 && (s = n), a[s] = u[n];
  }), r = d && d.__exportStar || function(a, u) {
    for (var n in a)
      n !== "default" && !Object.prototype.hasOwnProperty.call(u, n) && e(u, a, n);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), r(o, t);
})(S);
var D = {}, m = {};
Object.defineProperty(m, "__esModule", { value: !0 });
m.BlankNode = void 0;
class G {
  constructor(e) {
    this.termType = "BlankNode", this.value = e;
  }
  equals(e) {
    return !!e && e.termType === "BlankNode" && e.value === this.value;
  }
}
m.BlankNode = G;
var y = {}, N = {};
Object.defineProperty(N, "__esModule", { value: !0 });
N.DefaultGraph = void 0;
class g {
  constructor() {
    this.termType = "DefaultGraph", this.value = "";
  }
  equals(e) {
    return !!e && e.termType === "DefaultGraph";
  }
}
N.DefaultGraph = g;
g.INSTANCE = new g();
var p = {}, i = {};
Object.defineProperty(i, "__esModule", { value: !0 });
i.NamedNode = void 0;
class $ {
  constructor(e) {
    this.termType = "NamedNode", this.value = e;
  }
  equals(e) {
    return !!e && e.termType === "NamedNode" && e.value === this.value;
  }
}
i.NamedNode = $;
Object.defineProperty(p, "__esModule", { value: !0 });
p.Literal = void 0;
const j = i;
class f {
  constructor(e, r) {
    this.termType = "Literal", this.value = e, typeof r == "string" ? (this.language = r, this.datatype = f.RDF_LANGUAGE_STRING) : r ? (this.language = "", this.datatype = r) : (this.language = "", this.datatype = f.XSD_STRING);
  }
  equals(e) {
    return !!e && e.termType === "Literal" && e.value === this.value && e.language === this.language && e.datatype.equals(this.datatype);
  }
}
p.Literal = f;
f.RDF_LANGUAGE_STRING = new j.NamedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString");
f.XSD_STRING = new j.NamedNode("http://www.w3.org/2001/XMLSchema#string");
var b = {};
Object.defineProperty(b, "__esModule", { value: !0 });
b.Quad = void 0;
class B {
  constructor(e, r, a, u) {
    this.termType = "Quad", this.value = "", this.subject = e, this.predicate = r, this.object = a, this.graph = u;
  }
  equals(e) {
    return !!e && (e.termType === "Quad" || !e.termType) && this.subject.equals(e.subject) && this.predicate.equals(e.predicate) && this.object.equals(e.object) && this.graph.equals(e.graph);
  }
}
b.Quad = B;
var _ = {};
Object.defineProperty(_, "__esModule", { value: !0 });
_.Variable = void 0;
class q {
  constructor(e) {
    this.termType = "Variable", this.value = e;
  }
  equals(e) {
    return !!e && e.termType === "Variable" && e.value === this.value;
  }
}
_.Variable = q;
Object.defineProperty(y, "__esModule", { value: !0 });
y.DataFactory = void 0;
const x = m, C = N, w = p, F = i, L = b, k = _;
let M = 0;
class Q {
  constructor(e) {
    this.blankNodeCounter = 0, e = e || {}, this.blankNodePrefix = e.blankNodePrefix || `df_${M++}_`;
  }
  /**
   * @param value The IRI for the named node.
   * @return A new instance of NamedNode.
   * @see NamedNode
   */
  namedNode(e) {
    return new F.NamedNode(e);
  }
  /**
   * @param value The optional blank node identifier.
   * @return A new instance of BlankNode.
   *         If the `value` parameter is undefined a new identifier
   *         for the blank node is generated for each call.
   * @see BlankNode
   */
  blankNode(e) {
    return new x.BlankNode(e || `${this.blankNodePrefix}${this.blankNodeCounter++}`);
  }
  /**
   * @param value              The literal value.
   * @param languageOrDatatype The optional language or datatype.
   *                           If `languageOrDatatype` is a NamedNode,
   *                           then it is used for the value of `NamedNode.datatype`.
   *                           Otherwise `languageOrDatatype` is used for the value
   *                           of `NamedNode.language`.
   * @return A new instance of Literal.
   * @see Literal
   */
  literal(e, r) {
    return new w.Literal(e, r);
  }
  /**
   * This method is optional.
   * @param value The variable name
   * @return A new instance of Variable.
   * @see Variable
   */
  variable(e) {
    return new k.Variable(e);
  }
  /**
   * @return An instance of DefaultGraph.
   */
  defaultGraph() {
    return C.DefaultGraph.INSTANCE;
  }
  /**
   * @param subject   The quad subject term.
   * @param predicate The quad predicate term.
   * @param object    The quad object term.
   * @param graph     The quad graph term.
   * @return A new instance of Quad.
   * @see Quad
   */
  quad(e, r, a, u) {
    return new L.Quad(e, r, a, u || this.defaultGraph());
  }
  /**
   * Create a deep copy of the given term using this data factory.
   * @param original An RDF term.
   * @return A deep copy of the given term.
   */
  fromTerm(e) {
    switch (e.termType) {
      case "NamedNode":
        return this.namedNode(e.value);
      case "BlankNode":
        return this.blankNode(e.value);
      case "Literal":
        return e.language ? this.literal(e.value, e.language) : e.datatype.equals(w.Literal.XSD_STRING) ? this.literal(e.value) : this.literal(e.value, this.fromTerm(e.datatype));
      case "Variable":
        return this.variable(e.value);
      case "DefaultGraph":
        return this.defaultGraph();
      case "Quad":
        return this.quad(this.fromTerm(e.subject), this.fromTerm(e.predicate), this.fromTerm(e.object), this.fromTerm(e.graph));
    }
  }
  /**
   * Create a deep copy of the given quad using this data factory.
   * @param original An RDF quad.
   * @return A deep copy of the given quad.
   */
  fromQuad(e) {
    return this.fromTerm(e);
  }
  /**
   * Reset the internal blank node counter.
   */
  resetBlankNodeCounter() {
    this.blankNodeCounter = 0;
  }
}
y.DataFactory = Q;
(function(t) {
  var e = d && d.__createBinding || (Object.create ? function(a, u, n, s) {
    s === void 0 && (s = n), Object.defineProperty(a, s, { enumerable: !0, get: function() {
      return u[n];
    } });
  } : function(a, u, n, s) {
    s === void 0 && (s = n), a[s] = u[n];
  }), r = d && d.__exportStar || function(a, u) {
    for (var n in a)
      n !== "default" && !Object.prototype.hasOwnProperty.call(u, n) && e(u, a, n);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), r(m, t), r(y, t), r(N, t), r(p, t), r(i, t), r(b, t), r(_, t);
})(D);
export {
  D as a,
  S as r
};
//# sourceMappingURL=index-eQz6HOSp.js.map
