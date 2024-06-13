import { m as o } from "./index-BhI9pmWG.js";
import { m as f } from "./main-DH1xp4kk.js";
if (typeof queueMicrotask != "function") {
  let a = Promise.resolve();
  try {
    queueMicrotask = (e) => a.then(e).catch((r) => setTimeout(() => {
      throw r;
    }, 0));
  } catch {
  }
}
const h = o, _ = f, p = 32768;
class n extends _.Transform {
  // flush buffer
  static _flush_buffer(e) {
    e._s_push && (e.push(e._s_push), e._s_push = "");
  }
  constructor(e = {}) {
    super({
      writableObjectMode: !0,
      readableObjectMode: !1
    });
    let {
      prefixes: r = {}
    } = e;
    this._s_push = "", this._n_max_buffer = e.max_buffer || e.maxBuffer || p, this._h_prefixes = h.cache_prefixes(r || {}), this.on("pipe", (t) => {
      t.on("prefix", (i, s) => {
        this.write({
          type: "prefixes",
          value: {
            [i]: s
          }
        });
      }), t.on("comment", (i) => {
        this.write({
          type: "comment",
          value: i
        });
      });
    }), e.close && this.once("close", e.close), e.drain && this.on("drain", e.drain), e.error && this.on("error", e.error), e.finish && this.once("finish", e.finish), e.data && this.on("data", e.data), e.end && this.once("end", e.end), e.warning && this.on("warning", e.warning);
  }
  _serialize_hash_comment(e) {
    return "# " + e.replace(/\n/g, `
# `) + `
`;
  }
  _serialize_newlines(e = 1) {
    return `
`.repeat(e);
  }
  _serialize_c4r(e) {
    let r = this._h_prefixes, t = [], i = "";
    for (let s in e)
      s !== "*" && t.push(s), i += this._serialize_c3r(e[s]);
    if (t.length) {
      let s = `Destination format does not support quads; an implicit union into the default graph was performed on the quads contained in graphs: ${t.map((u) => h.c1(u, r).verbose()).join(", ")}`;
      this.emit("warning", s) || console.warn(s);
    }
    return i;
  }
  _serialize_c3() {
    throw new Error(`Write event type 'c3' not supported by ${this.constructor.name}`);
  }
  _serialize_c4() {
    throw new Error(`Write event type 'c4' not supported by ${this.constructor.name}`);
  }
  _serialize_c3r() {
    throw new Error(`Write event type 'c3r' should have been implemented by subclass ${this.constructor.name}`);
  }
  _serialize_quad() {
    throw new Error(`Write event type 'quad' should have been implemented by subclass ${this.constructor.name}`);
  }
  // ignorable events
  _serialize_comment() {
  }
  // eslint-disable-line class-methods-use-this
  // update prefix mappings
  _update_prefixes(e, r = !1) {
    let t = {
      ...this._h_prefixes,
      ...e
    };
    this._h_prefixes = h.cachePrefixes(t || {}, r);
  }
  // implement stream.Transform
  _transform(e, r, t) {
    let i;
    try {
      i = this.serialize(e);
    } catch (s) {
      return t(s), s;
    }
    if (i)
      n._flush_buffer(this), this.push(i);
    else {
      let s = this._s_push.length;
      s > this._n_max_buffer ? n._flush_buffer(this) : s && queueMicrotask(() => n._flush_buffer(this));
    }
    t();
  }
  // queue data to be pushed later
  _queue(e) {
    this._s_push += e, this._s_push.length > this._n_max_buffer ? n._flush_buffer(this) : queueMicrotask(() => n._flush_buffer(this));
  }
  // route event object to serialization method
  serialize(e) {
    switch (e.type) {
      case void 0:
        return this._serialize_quad(e);
      case "c3r":
        return this._serialize_c3r(e.value);
      case "c4r":
        return this._serialize_c4r(e.value);
      case "array": {
        let r = "";
        for (let t of e.value) {
          let i = this.serialize(t);
          i ? r += i : this._s_push && (r += this._s_push, this._s_push = "");
        }
        return r;
      }
      case "quad":
        return this._serialize_quad(e.value);
      case "c3":
        return this._serialize_c3(e.value);
      case "c4":
        return this._serialize_c4(e.value);
      case "prefixes":
        return this._serialize_prefixes(e.value);
      case "comment":
        return this._serialize_comment(e.value);
      case "newline":
      case "newlines":
        return this._serialize_newlines(e.value);
      default:
        throw new Error(`no such writable data event type for RDF stream: '${e.type}'`);
    }
  }
  // rinse off buffer to writable
  rinse() {
    this._reset(), n._flush_buffer(this);
  }
  _flush() {
    n._flush_buffer(this), this.push(null);
  }
}
Object.assign(n.prototype, {
  isGraphyWritable: !0,
  _serialize_prefixes: n.prototype._update_prefixes
});
var c = n;
export {
  c as m
};
//# sourceMappingURL=main-DC4ASMzX.js.map
