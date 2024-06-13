import { b as d, p as f, r as b } from "./index-BhI9pmWG.js";
const u = b;
class c extends u.Readable {
  constructor(e = {}) {
    if (super(e), e.iterator)
      throw new Error("readable stream iterator shortcut not yet implemented");
  }
  until(e, s) {
    return new Promise((i, n) => {
      this.on("error", (t) => {
        n(t);
      }), s ? this.once(e, (...t) => {
        i(this, ...t);
      }) : this.once(e, i);
    });
  }
  bucket(e = "utf8") {
    if (this._readableState.objectMode)
      return new Promise((i, n) => {
        let t = [];
        this.pipe(new u.Writable({
          write(r, o, a) {
            t.push(r), a();
          },
          writev(r, o) {
            t.push(...r), o();
          }
        })).on("error", (r) => {
          n(r);
        }).on("finish", () => {
          i(t);
        });
      });
    if (e === "utf8" || e === "utf-8")
      return new Promise((i, n) => {
        let t = "";
        this.setEncoding(e), this.pipe(new u.Writable({
          decodeStrings: !1,
          write(r, o, a) {
            t += r, a();
          },
          writev(r, o) {
            t += r.join(""), o();
          }
        })).on("error", (r) => {
          n(r);
        }).on("finish", () => {
          i(t);
        });
      });
    if (e === "buffer")
      return new Promise((i, n) => {
        let t = d.Buffer.from([]);
        this.pipe(new u.Writable({
          decodeStrings: !0,
          write(r, o, a) {
            t = d.Buffer.concat([t, r], t.length + r.length), a();
          }
        })).on("error", (r) => {
          n(r);
        }).on("finish", () => {
          i(t);
        });
      });
  }
}
class m extends u.Writable {
  until(e, s) {
    return new Promise((i, n) => {
      this.on("error", (t) => {
        n(t);
      }), s ? this.once(e, (...t) => {
        i(this, ...t);
      }) : this.once(e, i);
    });
  }
  // rdfjs impl
  import(e) {
    return e.on("data", (s) => this.write(s)).on("end", () => this.end()).on("error", (s) => this.emit("error", s)), this;
  }
}
class w extends u.Duplex {
  until(e, s) {
    return new Promise((i, n) => {
      this.on("error", (t) => {
        n(t);
      }), s ? this.once(e, (...t) => {
        i(this, ...t);
      }) : this.once(e, i);
    });
  }
  bucket(e = "utf8") {
    if (this._readableState.objectMode)
      return new Promise((i, n) => {
        let t = [];
        this.pipe(new u.Writable({
          write(r, o, a) {
            t.push(r), a();
          },
          writev(r, o) {
            t.push(...r), o();
          }
        })).on("error", (r) => {
          n(r);
        }).on("finish", () => {
          i(t);
        });
      });
    if (e === "utf8" || e === "utf-8")
      return new Promise((i, n) => {
        let t = "";
        this.setEncoding(e), this.pipe(new u.Writable({
          decodeStrings: !1,
          write(r, o, a) {
            t += r, a();
          },
          writev(r, o) {
            t += r.join(""), o();
          }
        })).on("error", (r) => {
          n(r);
        }).on("finish", () => {
          i(t);
        });
      });
    if (e === "buffer")
      return new Promise((i, n) => {
        let t = d.Buffer.from([]);
        this.pipe(new u.Writable({
          decodeStrings: !0,
          write(r, o, a) {
            t = d.Buffer.concat([t, r], t.length + r.length), a();
          }
        })).on("error", (r) => {
          n(r);
        }).on("finish", () => {
          i(t);
        });
      });
  }
}
class h extends u.Transform {
  until(e, s) {
    return new Promise((i, n) => {
      this.on("error", (t) => {
        n(t);
      }), s ? this.once(e, (...t) => {
        i(this, ...t);
      }) : this.once(e, i);
    });
  }
  bucket(e = "utf8") {
    if (this._readableState.objectMode)
      return new Promise((i, n) => {
        let t = [];
        this.pipe(new u.Writable({
          write(r, o, a) {
            t.push(r), a();
          },
          writev(r, o) {
            t.push(...r), o();
          }
        })).on("error", (r) => {
          n(r);
        }).on("finish", () => {
          i(t);
        });
      });
    if (e === "utf8" || e === "utf-8")
      return new Promise((i, n) => {
        let t = "";
        this.setEncoding(e), this.pipe(new u.Writable({
          decodeStrings: !1,
          write(r, o, a) {
            t += r, a();
          },
          writev(r, o) {
            t += r.join(""), o();
          }
        })).on("error", (r) => {
          n(r);
        }).on("finish", () => {
          i(t);
        });
      });
    if (e === "buffer")
      return new Promise((i, n) => {
        let t = d.Buffer.from([]);
        this.pipe(new u.Writable({
          decodeStrings: !0,
          write(r, o, a) {
            t = d.Buffer.concat([t, r], t.length + r.length), a();
          }
        })).on("error", (r) => {
          n(r);
        }).on("finish", () => {
          i(t);
        });
      });
  }
  // rdfjs impl
  import(e) {
    return e.on("data", (s) => this.write(s)).on("end", () => this.end()).on("error", (s) => this.emit("error", s)), this;
  }
  demolish(e) {
    if (this.push = (s) => {
      if (s !== null)
        throw new Error("[ERR_STREAM_DESTROYED]: Cannot push after stream was destroyed");
    }, this.emit = function(s, ...i) {
      s !== "end" && Object.getPrototypeOf(this).emit.apply(this, [s, ...i]);
    }, e)
      return u.Transform.prototype.destroy.call(this, e);
  }
}
const _ = new Function(
  /* syntax: js */
  "try {return this===global;}catch(e){return false;}"
)(), [P, g] = typeof f > "u" ? [!0, !1] : f.browser ? [!0, !0] : f.versions === "undefined" || f.versions.node === "undefined" ? [!0, !1] : [!1, !1];
(g || _ && +/^v(\d+)/.exec(f.version)[1] < 10) && (h.prototype.destroy = w.prototype.destroy = function(l, e) {
  this._readableState.destroyed = !0, this._writableState.destroyed = !0;
  let s = () => {
    this._writableState.emitClose && this._readableState.emitClose && this.emit("close");
  };
  return this._destroy(l || null, (i) => {
    !e && i ? (f.nextTick(() => {
      this.emit("error", i), s();
    }), this._writableState.errorEmitted = !0) : (f.nextTick(s), e && e(i));
  }), this;
}, h.prototype._destroy = w.prototype._destroy = (l, e) => e(l));
class p extends h {
  constructor(e = {}) {
    super({
      ...e,
      writableObjectMode: !0,
      readableObjectMode: !0
    }), this._as_inputs = /* @__PURE__ */ new Set(), this.on("pipe", (s) => {
      this._as_inputs.add(s), s.on("prefix", (...i) => {
        this.emit("prefix", ...i);
      }).on("comment", (...i) => {
        this.emit("comment", ...i);
      });
    }), this.on("unpipe", (s) => {
      this._as_inputs.delete(s);
    });
  }
  _destroy() {
    for (let e of this._as_inputs)
      e.destroy();
  }
}
class S extends p {
  // serializse json
  _transform(e, s, i) {
    i(null, JSON.stringify(e.isolate()) + `
`);
  }
}
class y extends p {
  _transform(e, s, i) {
    i(null, {
      type: "quad",
      value: e
    });
  }
}
h.QuadsToOther = p;
var W = {
  ...u,
  Readable: c,
  Writable: m,
  Duplex: w,
  Transform: h,
  QuadsToOther: p,
  // create a transform from quad objects into JSON strings for trivial serialization
  quads_to_json() {
    return new S();
  },
  // create a transform from quad objects into writable data events
  quads_to_writable() {
    return new y();
  },
  // create a simple, single-event readable stream
  source(l, e = null) {
    return !e && typeof l == "string" && (e = "utf8"), new c({
      objectMode: !e && typeof l != "string" && !d.Buffer.isBuffer(l),
      read() {
        this.push(l, e), this.push(null);
      }
    });
  }
};
export {
  W as m
};
//# sourceMappingURL=main-DH1xp4kk.js.map
