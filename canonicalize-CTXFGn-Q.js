var a = function u(r) {
  return r === null || typeof r != "object" || r.toJSON != null ? JSON.stringify(r) : Array.isArray(r) ? "[" + r.reduce((e, n, l) => {
    const i = l === 0 ? "" : ",", s = n === void 0 || typeof n == "symbol" ? null : n;
    return e + i + u(s);
  }, "") + "]" : "{" + Object.keys(r).sort().reduce((e, n, l) => {
    if (r[n] === void 0 || typeof r[n] == "symbol")
      return e;
    const i = e.length === 0 ? "" : ",";
    return e + i + u(n) + ":" + u(r[n]);
  }, "") + "}";
};
export {
  a as c
};
//# sourceMappingURL=canonicalize-CTXFGn-Q.js.map