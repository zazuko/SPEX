import { p as a, b as n, g as o, r } from "./index-BhI9pmWG.js";
var i = u;
const c = r;
class d extends c.Readable {
  constructor(t, s) {
    super(), this._str = t, this._encoding = s || "utf8";
  }
  _read() {
    this.ended || (a.nextTick(() => {
      this.push(n.Buffer.from(this._str, this._encoding)), this.push(null);
    }), this.ended = !0);
  }
}
function u(e, t) {
  return new d(e, t);
}
const f = /* @__PURE__ */ o(i), m = f, p = r.Readable;
export {
  p as Readable,
  m as toStream
};
//# sourceMappingURL=stream-Cbm-YXkP.js.map
