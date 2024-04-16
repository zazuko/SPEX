import { m as p } from "./index-CbPxOOAJ.js";
import { m as w } from "./main-BAKK71B2.js";
const _ = p, d = w, u = /^`\[[^\]]+\](.*)$/, m = /* @__PURE__ */ new Map([
  [Date, (a) => _.dateTime(a)],
  [Number, (a) => _.number(a)]
]);
class g extends d {
  constructor(e = {}) {
    super(e);
    let {
      lists: t = null
    } = e, s = m;
    if (e.coercions) {
      s = new Map(s);
      for (let [r, n] of e.coercions)
        s.set(r, n);
    }
    let i = {
      first: ">http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
      rest: ">http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
      nil: ">http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"
    };
    if (t) {
      let {
        first: r = null,
        rest: n = null,
        nil: l = null
      } = t;
      r && (i.first = r), n && (i.rest = n), l && (i.nil = l);
    }
    Object.assign(this, {
      _xc_state: 0,
      _hm_coercions: s,
      _g_lists: i
    });
  }
  // serialize comment
  _serialize_comment(e, t) {
    let s = "";
    if (this._xc_state !== 2 && (s += `
`, this._xc_state = 2), t && t.width) {
      let i = t.width, r = [];
      for (; e.length > i; ) {
        let n = e.slice(0, i + 1), l = /^(.*[^\s])\s+/.exec(n);
        if (l) {
          let o = l[1];
          r.push(o), e = e.slice(o.length).replace(/^\s+/, "");
        } else
          r.push(e.slice(0, i)), e = e.slice(i);
      }
      e = r.join(`
`);
    }
    return s + (super._serialize_comment(e) || "");
  }
  // transcode list into concise-pairs hash
  _transcode_list(e, t = this._g_lists) {
    if (e.length) {
      let s = e[0], i = s;
      return Array.isArray(s) && (i = this._transcode_list(s, t)), {
        // first item
        [t.first]: i,
        // rest of items
        [t.rest]: e.length === 1 ? t.nil : this._transcode_list(e.slice(1), t)
        // eslint-disable-line no-invalid-this
      };
    } else
      return t.nil;
  }
  // serialize a writable data event directive
  _apply_directive(e, t) {
    let s = u.exec(e);
    if (!s)
      throw new Error(`Invalid writable data event directive string: "${e}"`);
    let i;
    try {
      i = JSON.parse(s[1]);
    } catch {
      throw new Error(`Unable to parse JSON in writable data event directive: "${s[1]}"`);
    }
    let r = i.type;
    switch (r) {
      case "comment": {
        if (this._serialize_comment)
          return {
            write: this._serialize_comment(t + "", i)
          };
        break;
      }
      case "newlines": {
        if (this._serialize_newlines)
          return {
            write: this._serialize_newlines(t)
          };
        break;
      }
      case "config":
        switch (i.value) {
          case "lists": {
            let n = this._a_list_serializers;
            n.push(this._serialize_list_object);
            let l = this._g_lists, o = {
              first: t.first || l.first,
              rest: t.rest || l.rest,
              nil: t.nil || l.nil
            };
            return this._serialize_list_object = function(c, h) {
              let f = this._transcode_list(c, o);
              return this._encode_objects(f, h);
            }, {
              exit: () => {
                this._serialize_list_object = n.pop();
              }
            };
          }
          default:
            throw new Error(`No such config key '${i.value}'`);
        }
      default:
        throw new Error(`Invalid writable data event directive type: '${r}'`);
    }
    return {};
  }
  // if not overriden by subclass, serialize quads in default graph
  _serialize_c4(e) {
    let t = this._h_prefixes, s = [], i = "";
    for (let r in e)
      r !== "*" && s.push(r), i += this._serialize_c3(e[r]);
    if (s.length) {
      let r = `Destination format does not support quads; an implicit union into the default graph was performed on the quads contained in graphs: ${s.map((n) => _.c1(n, t).verbose()).join(", ")}`;
      this.emit("warning", r) || console.warn(r);
    }
    return i;
  }
}
var z = g;
export {
  z as m
};
//# sourceMappingURL=main-43NHGzV_.js.map
