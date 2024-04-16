import { a as pt, e as Pt, b as je, d as Be, f as vo, c as ve } from "./index-CbPxOOAJ.js";
import { r as Co, a as Io } from "./index-BBVcuumq.js";
var pn = {}, tt = {}, it = {}, _n = {};
(function(t) {
  /**
   * Character classes and associated utilities for the 5th edition of XML 1.0.
   *
   * @author Louis-Dominique Dubeau
   * @license MIT
   * @copyright Louis-Dominique Dubeau
   */
  Object.defineProperty(t, "__esModule", { value: !0 }), t.CHAR = `	
\r -퟿-�𐀀-􏿿`, t.S = ` 	\r
`, t.NAME_START_CHAR = ":A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�𐀀-󯿿", t.NAME_CHAR = "-" + t.NAME_START_CHAR + ".0-9·̀-ͯ‿-⁀", t.CHAR_RE = new RegExp("^[" + t.CHAR + "]$", "u"), t.S_RE = new RegExp("^[" + t.S + "]+$", "u"), t.NAME_START_CHAR_RE = new RegExp("^[" + t.NAME_START_CHAR + "]$", "u"), t.NAME_CHAR_RE = new RegExp("^[" + t.NAME_CHAR + "]$", "u"), t.NAME_RE = new RegExp("^[" + t.NAME_START_CHAR + "][" + t.NAME_CHAR + "]*$", "u"), t.NMTOKEN_RE = new RegExp("^[" + t.NAME_CHAR + "]+$", "u");
  var e = 9, i = 10, r = 13, n = 32;
  t.S_LIST = [n, i, r, e];
  function a(d) {
    return d >= n && d <= 55295 || d === i || d === r || d === e || d >= 57344 && d <= 65533 || d >= 65536 && d <= 1114111;
  }
  t.isChar = a;
  function u(d) {
    return d === n || d === i || d === r || d === e;
  }
  t.isS = u;
  function b(d) {
    return d >= 65 && d <= 90 || d >= 97 && d <= 122 || d === 58 || d === 95 || d === 8204 || d === 8205 || d >= 192 && d <= 214 || d >= 216 && d <= 246 || d >= 248 && d <= 767 || d >= 880 && d <= 893 || d >= 895 && d <= 8191 || d >= 8304 && d <= 8591 || d >= 11264 && d <= 12271 || d >= 12289 && d <= 55295 || d >= 63744 && d <= 64975 || d >= 65008 && d <= 65533 || d >= 65536 && d <= 983039;
  }
  t.isNameStartChar = b;
  function g(d) {
    return b(d) || d >= 48 && d <= 57 || d === 45 || d === 46 || d === 183 || d >= 768 && d <= 879 || d >= 8255 && d <= 8256;
  }
  t.isNameChar = g;
})(_n);
var gn = {};
(function(t) {
  /**
   * Character classes and associated utilities for the 2nd edition of XML 1.1.
   *
   * @author Louis-Dominique Dubeau
   * @license MIT
   * @copyright Louis-Dominique Dubeau
   */
  Object.defineProperty(t, "__esModule", { value: !0 }), t.CHAR = "-퟿-�𐀀-􏿿", t.RESTRICTED_CHAR = "-\b\v\f---", t.S = ` 	\r
`, t.NAME_START_CHAR = ":A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�𐀀-󯿿", t.NAME_CHAR = "-" + t.NAME_START_CHAR + ".0-9·̀-ͯ‿-⁀", t.CHAR_RE = new RegExp("^[" + t.CHAR + "]$", "u"), t.RESTRICTED_CHAR_RE = new RegExp("^[" + t.RESTRICTED_CHAR + "]$", "u"), t.S_RE = new RegExp("^[" + t.S + "]+$", "u"), t.NAME_START_CHAR_RE = new RegExp("^[" + t.NAME_START_CHAR + "]$", "u"), t.NAME_CHAR_RE = new RegExp("^[" + t.NAME_CHAR + "]$", "u"), t.NAME_RE = new RegExp("^[" + t.NAME_START_CHAR + "][" + t.NAME_CHAR + "]*$", "u"), t.NMTOKEN_RE = new RegExp("^[" + t.NAME_CHAR + "]+$", "u");
  var e = 9, i = 10, r = 13, n = 32;
  t.S_LIST = [n, i, r, e];
  function a(l) {
    return l >= 1 && l <= 55295 || l >= 57344 && l <= 65533 || l >= 65536 && l <= 1114111;
  }
  t.isChar = a;
  function u(l) {
    return l >= 1 && l <= 8 || l === 11 || l === 12 || l >= 14 && l <= 31 || l >= 127 && l <= 132 || l >= 134 && l <= 159;
  }
  t.isRestrictedChar = u;
  function b(l) {
    return l === 9 || l === 10 || l === 13 || l > 31 && l < 127 || l === 133 || l > 159 && l <= 55295 || l >= 57344 && l <= 65533 || l >= 65536 && l <= 1114111;
  }
  t.isCharAndNotRestricted = b;
  function g(l) {
    return l === n || l === i || l === r || l === e;
  }
  t.isS = g;
  function d(l) {
    return l >= 65 && l <= 90 || l >= 97 && l <= 122 || l === 58 || l === 95 || l === 8204 || l === 8205 || l >= 192 && l <= 214 || l >= 216 && l <= 246 || l >= 248 && l <= 767 || l >= 880 && l <= 893 || l >= 895 && l <= 8191 || l >= 8304 && l <= 8591 || l >= 11264 && l <= 12271 || l >= 12289 && l <= 55295 || l >= 63744 && l <= 64975 || l >= 65008 && l <= 65533 || l >= 65536 && l <= 983039;
  }
  t.isNameStartChar = d;
  function _(l) {
    return d(l) || l >= 48 && l <= 57 || l === 45 || l === 46 || l === 183 || l >= 768 && l <= 879 || l >= 8255 && l <= 8256;
  }
  t.isNameChar = _;
})(gn);
var wn = {};
(function(t) {
  /**
   * Character class utilities for XML NS 1.0 edition 3.
   *
   * @author Louis-Dominique Dubeau
   * @license MIT
   * @copyright Louis-Dominique Dubeau
   */
  Object.defineProperty(t, "__esModule", { value: !0 }), t.NC_NAME_START_CHAR = "A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�𐀀-󯿿", t.NC_NAME_CHAR = "-" + t.NC_NAME_START_CHAR + ".0-9·̀-ͯ‿-⁀", t.NC_NAME_START_CHAR_RE = new RegExp("^[" + t.NC_NAME_START_CHAR + "]$", "u"), t.NC_NAME_CHAR_RE = new RegExp("^[" + t.NC_NAME_CHAR + "]$", "u"), t.NC_NAME_RE = new RegExp("^[" + t.NC_NAME_START_CHAR + "][" + t.NC_NAME_CHAR + "]*$", "u");
  function e(r) {
    return r >= 65 && r <= 90 || r === 95 || r >= 97 && r <= 122 || r >= 192 && r <= 214 || r >= 216 && r <= 246 || r >= 248 && r <= 767 || r >= 880 && r <= 893 || r >= 895 && r <= 8191 || r >= 8204 && r <= 8205 || r >= 8304 && r <= 8591 || r >= 11264 && r <= 12271 || r >= 12289 && r <= 55295 || r >= 63744 && r <= 64975 || r >= 65008 && r <= 65533 || r >= 65536 && r <= 983039;
  }
  t.isNCNameStartChar = e;
  function i(r) {
    return e(r) || r === 45 || r === 46 || r >= 48 && r <= 57 || r === 183 || r >= 768 && r <= 879 || r >= 8255 && r <= 8256;
  }
  t.isNCNameChar = i;
})(wn);
Object.defineProperty(it, "__esModule", { value: !0 });
it.SaxesParser = it.EVENTS = void 0;
const nt = _n, $o = gn, Hi = wn;
var de = nt.isS, Po = nt.isChar, dt = nt.isNameStartChar, fr = nt.isNameChar, yn = nt.S_LIST, Mo = nt.NAME_RE, Oo = $o.isChar, Lo = Hi.isNCNameStartChar, ko = Hi.isNCNameChar, Wo = Hi.NC_NAME_RE;
const Nt = "http://www.w3.org/XML/1998/namespace", Je = "http://www.w3.org/2000/xmlns/", jo = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
  __proto__: null,
  xml: Nt,
  xmlns: Je
}, Bo = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
  __proto__: null,
  amp: "&",
  gt: ">",
  lt: "<",
  quot: '"',
  apos: "'"
}, G = -1, _e = -2, cr = 0, Ho = 1, ei = 2, Uo = 3, Ke = 4, Vo = 5, Go = 6, qo = 7, ti = 8, Xo = 9, Yo = 10, Ko = 11, zo = 12, le = 13, St = 14, ii = 15, Qo = 16, ri = 17, Zo = 18, Jo = 19, ni = 20, es = 21, ts = 22, is = 23, hr = 24, oi = 25, Et = 26, br = 27, rs = 28, ns = 29, pr = 30, os = 31, ss = 32, Pe = 33, as = 34, si = 35, ft = 36, ai = 37, ls = 38, _r = 39, gr = 40, us = 41, wr = 42, ds = 43, fs = 44, li = 9, be = 10, ui = 13, yr = 32, Sr = 33, Sn = 34, ct = 38, En = 39, mt = 45, Rt = 47, cs = 59, Te = 60, ze = 61, ee = 62, ne = 63, mn = 91, Qe = 93, Er = 133, mr = 8232, At = (t) => t === Sn || t === En, Rn = [Sn, En], hs = [...Rn, mn, ee], bs = [...Rn, Te, Qe], ps = [ze, ne, ...yn], _s = [...yn, ee, ct, Te];
function vi(t, e, i) {
  switch (e) {
    case "xml":
      i !== Nt && t.fail(`xml prefix must be bound to ${Nt}.`);
      break;
    case "xmlns":
      i !== Je && t.fail(`xmlns prefix must be bound to ${Je}.`);
      break;
  }
  switch (i) {
    case Je:
      t.fail(e === "" ? `the default namespace may not be set to ${i}.` : `may not assign a prefix (even "xmlns") to the URI ${Je}.`);
      break;
    case Nt:
      switch (e) {
        case "xml":
          break;
        case "":
          t.fail(`the default namespace may not be set to ${i}.`);
          break;
        default:
          t.fail("may not assign the xml namespace to another prefix.");
      }
      break;
  }
}
function gs(t, e) {
  for (const i of Object.keys(e))
    vi(t, i, e[i]);
}
const ws = (t) => Wo.test(t), ys = (t) => Mo.test(t), Me = 0, Rr = 1, di = 2;
it.EVENTS = [
  "xmldecl",
  "text",
  "processinginstruction",
  "doctype",
  "comment",
  "opentagstart",
  "attribute",
  "opentag",
  "closetag",
  "cdata",
  "error",
  "end",
  "ready"
];
const Ar = {
  xmldecl: "xmldeclHandler",
  text: "textHandler",
  processinginstruction: "piHandler",
  doctype: "doctypeHandler",
  comment: "commentHandler",
  opentagstart: "openTagStartHandler",
  attribute: "attributeHandler",
  opentag: "openTagHandler",
  closetag: "closeTagHandler",
  cdata: "cdataHandler",
  error: "errorHandler",
  end: "endHandler",
  ready: "readyHandler"
};
class Ss {
  /**
   * Indicates whether or not the parser is closed. If ``true``, wait for
   * the ``ready`` event to write again.
   */
  get closed() {
    return this._closed;
  }
  /**
   * @param opt The parser options.
   */
  constructor(e) {
    this.opt = e ?? {}, this.fragmentOpt = !!this.opt.fragment;
    const i = this.xmlnsOpt = !!this.opt.xmlns;
    if (this.trackPosition = this.opt.position !== !1, this.fileName = this.opt.fileName, i) {
      this.nameStartCheck = Lo, this.nameCheck = ko, this.isName = ws, this.processAttribs = this.processAttribsNS, this.pushAttrib = this.pushAttribNS, this.ns = Object.assign({ __proto__: null }, jo);
      const r = this.opt.additionalNamespaces;
      r != null && (gs(this, r), Object.assign(this.ns, r));
    } else
      this.nameStartCheck = dt, this.nameCheck = fr, this.isName = ys, this.processAttribs = this.processAttribsPlain, this.pushAttrib = this.pushAttribPlain;
    this.stateTable = [
      /* eslint-disable @typescript-eslint/unbound-method */
      this.sBegin,
      this.sBeginWhitespace,
      this.sDoctype,
      this.sDoctypeQuote,
      this.sDTD,
      this.sDTDQuoted,
      this.sDTDOpenWaka,
      this.sDTDOpenWakaBang,
      this.sDTDComment,
      this.sDTDCommentEnding,
      this.sDTDCommentEnded,
      this.sDTDPI,
      this.sDTDPIEnding,
      this.sText,
      this.sEntity,
      this.sOpenWaka,
      this.sOpenWakaBang,
      this.sComment,
      this.sCommentEnding,
      this.sCommentEnded,
      this.sCData,
      this.sCDataEnding,
      this.sCDataEnding2,
      this.sPIFirstChar,
      this.sPIRest,
      this.sPIBody,
      this.sPIEnding,
      this.sXMLDeclNameStart,
      this.sXMLDeclName,
      this.sXMLDeclEq,
      this.sXMLDeclValueStart,
      this.sXMLDeclValue,
      this.sXMLDeclSeparator,
      this.sXMLDeclEnding,
      this.sOpenTag,
      this.sOpenTagSlash,
      this.sAttrib,
      this.sAttribName,
      this.sAttribNameSawWhite,
      this.sAttribValue,
      this.sAttribValueQuoted,
      this.sAttribValueClosed,
      this.sAttribValueUnquoted,
      this.sCloseTag,
      this.sCloseTagSawWhite
      /* eslint-enable @typescript-eslint/unbound-method */
    ], this._init();
  }
  _init() {
    var e;
    this.openWakaBang = "", this.text = "", this.name = "", this.piTarget = "", this.entity = "", this.q = null, this.tags = [], this.tag = null, this.topNS = null, this.chunk = "", this.chunkPosition = 0, this.i = 0, this.prevI = 0, this.carriedFromPrevious = void 0, this.forbiddenState = Me, this.attribList = [];
    const { fragmentOpt: i } = this;
    this.state = i ? le : cr, this.reportedTextBeforeRoot = this.reportedTextAfterRoot = this.closedRoot = this.sawRoot = i, this.xmlDeclPossible = !i, this.xmlDeclExpects = ["version"], this.entityReturnState = void 0;
    let { defaultXMLVersion: r } = this.opt;
    if (r === void 0) {
      if (this.opt.forceXMLVersion === !0)
        throw new Error("forceXMLVersion set but defaultXMLVersion is not set");
      r = "1.0";
    }
    this.setXMLVersion(r), this.positionAtNewLine = 0, this.doctype = !1, this._closed = !1, this.xmlDecl = {
      version: void 0,
      encoding: void 0,
      standalone: void 0
    }, this.line = 1, this.column = 0, this.ENTITIES = Object.create(Bo), (e = this.readyHandler) === null || e === void 0 || e.call(this);
  }
  /**
   * The stream position the parser is currently looking at. This field is
   * zero-based.
   *
   * This field is not based on counting Unicode characters but is to be
   * interpreted as a plain index into a JavaScript string.
   */
  get position() {
    return this.chunkPosition + this.i;
  }
  /**
   * The column number of the next character to be read by the parser.  *
   * This field is zero-based. (The first column in a line is 0.)
   *
   * This field reports the index at which the next character would be in the
   * line if the line were represented as a JavaScript string.  Note that this
   * *can* be different to a count based on the number of *Unicode characters*
   * due to how JavaScript handles astral plane characters.
   *
   * See [[column]] for a number that corresponds to a count of Unicode
   * characters.
   */
  get columnIndex() {
    return this.position - this.positionAtNewLine;
  }
  /**
   * Set an event listener on an event. The parser supports one handler per
   * event type. If you try to set an event handler over an existing handler,
   * the old handler is silently overwritten.
   *
   * @param name The event to listen to.
   *
   * @param handler The handler to set.
   */
  on(e, i) {
    this[Ar[e]] = i;
  }
  /**
   * Unset an event handler.
   *
   * @parma name The event to stop listening to.
   */
  off(e) {
    this[Ar[e]] = void 0;
  }
  /**
   * Make an error object. The error object will have a message that contains
   * the ``fileName`` option passed at the creation of the parser. If position
   * tracking was turned on, it will also have line and column number
   * information.
   *
   * @param message The message describing the error to report.
   *
   * @returns An error object with a properly formatted message.
   */
  makeError(e) {
    var i;
    let r = (i = this.fileName) !== null && i !== void 0 ? i : "";
    return this.trackPosition && (r.length > 0 && (r += ":"), r += `${this.line}:${this.column}`), r.length > 0 && (r += ": "), new Error(r + e);
  }
  /**
   * Report a parsing error. This method is made public so that client code may
   * check for issues that are outside the scope of this project and can report
   * errors.
   *
   * @param message The error to report.
   *
   * @returns this
   */
  fail(e) {
    const i = this.makeError(e), r = this.errorHandler;
    if (r === void 0)
      throw i;
    return r(i), this;
  }
  /**
   * Write a XML data to the parser.
   *
   * @param chunk The XML data to write.
   *
   * @returns this
   */
  // We do need object for the type here. Yes, it often causes problems
  // but not in this case.
  write(e) {
    if (this.closed)
      return this.fail("cannot write after close; assign an onready handler.");
    let i = !1;
    e === null ? (i = !0, e = "") : typeof e == "object" && (e = e.toString()), this.carriedFromPrevious !== void 0 && (e = `${this.carriedFromPrevious}${e}`, this.carriedFromPrevious = void 0);
    let r = e.length;
    const n = e.charCodeAt(r - 1);
    !i && // A trailing CR or surrogate must be carried over to the next
    // chunk.
    (n === ui || n >= 55296 && n <= 56319) && (this.carriedFromPrevious = e[r - 1], r--, e = e.slice(0, r));
    const { stateTable: a } = this;
    for (this.chunk = e, this.i = 0; this.i < r; )
      a[this.state].call(this);
    return this.chunkPosition += r, i ? this.end() : this;
  }
  /**
   * Close the current stream. Perform final well-formedness checks and reset
   * the parser tstate.
   *
   * @returns this
   */
  close() {
    return this.write(null);
  }
  /**
   * Get a single code point out of the current chunk. This updates the current
   * position if we do position tracking.
   *
   * This is the algorithm to use for XML 1.0.
   *
   * @returns The character read.
   */
  getCode10() {
    const { chunk: e, i } = this;
    if (this.prevI = i, this.i = i + 1, i >= e.length)
      return G;
    const r = e.charCodeAt(i);
    if (this.column++, r < 55296) {
      if (r >= yr || r === li)
        return r;
      switch (r) {
        case be:
          return this.line++, this.column = 0, this.positionAtNewLine = this.position, be;
        case ui:
          return e.charCodeAt(i + 1) === be && (this.i = i + 2), this.line++, this.column = 0, this.positionAtNewLine = this.position, _e;
        default:
          return this.fail("disallowed character."), r;
      }
    }
    if (r > 56319)
      return r >= 57344 && r <= 65533 || this.fail("disallowed character."), r;
    const n = 65536 + (r - 55296) * 1024 + (e.charCodeAt(i + 1) - 56320);
    return this.i = i + 2, n > 1114111 && this.fail("disallowed character."), n;
  }
  /**
   * Get a single code point out of the current chunk. This updates the current
   * position if we do position tracking.
   *
   * This is the algorithm to use for XML 1.1.
   *
   * @returns {number} The character read.
   */
  getCode11() {
    const { chunk: e, i } = this;
    if (this.prevI = i, this.i = i + 1, i >= e.length)
      return G;
    const r = e.charCodeAt(i);
    if (this.column++, r < 55296) {
      if (r > 31 && r < 127 || r > 159 && r !== mr || r === li)
        return r;
      switch (r) {
        case be:
          return this.line++, this.column = 0, this.positionAtNewLine = this.position, be;
        case ui: {
          const a = e.charCodeAt(i + 1);
          (a === be || a === Er) && (this.i = i + 2);
        }
        case Er:
        case mr:
          return this.line++, this.column = 0, this.positionAtNewLine = this.position, _e;
        default:
          return this.fail("disallowed character."), r;
      }
    }
    if (r > 56319)
      return r >= 57344 && r <= 65533 || this.fail("disallowed character."), r;
    const n = 65536 + (r - 55296) * 1024 + (e.charCodeAt(i + 1) - 56320);
    return this.i = i + 2, n > 1114111 && this.fail("disallowed character."), n;
  }
  /**
   * Like ``getCode`` but with the return value normalized so that ``NL`` is
   * returned for ``NL_LIKE``.
   */
  getCodeNorm() {
    const e = this.getCode();
    return e === _e ? be : e;
  }
  unget() {
    this.i = this.prevI, this.column--;
  }
  /**
   * Capture characters into a buffer until encountering one of a set of
   * characters.
   *
   * @param chars An array of codepoints. Encountering a character in the array
   * ends the capture. (``chars`` may safely contain ``NL``.)
   *
   * @return The character code that made the capture end, or ``EOC`` if we hit
   * the end of the chunk. The return value cannot be NL_LIKE: NL is returned
   * instead.
   */
  captureTo(e) {
    let { i } = this;
    const { chunk: r } = this;
    for (; ; ) {
      const n = this.getCode(), a = n === _e, u = a ? be : n;
      if (u === G || e.includes(u))
        return this.text += r.slice(i, this.prevI), u;
      a && (this.text += `${r.slice(i, this.prevI)}
`, i = this.i);
    }
  }
  /**
   * Capture characters into a buffer until encountering a character.
   *
   * @param char The codepoint that ends the capture. **NOTE ``char`` MAY NOT
   * CONTAIN ``NL``.** Passing ``NL`` will result in buggy behavior.
   *
   * @return ``true`` if we ran into the character. Otherwise, we ran into the
   * end of the current chunk.
   */
  captureToChar(e) {
    let { i } = this;
    const { chunk: r } = this;
    for (; ; ) {
      let n = this.getCode();
      switch (n) {
        case _e:
          this.text += `${r.slice(i, this.prevI)}
`, i = this.i, n = be;
          break;
        case G:
          return this.text += r.slice(i), !1;
      }
      if (n === e)
        return this.text += r.slice(i, this.prevI), !0;
    }
  }
  /**
   * Capture characters that satisfy ``isNameChar`` into the ``name`` field of
   * this parser.
   *
   * @return The character code that made the test fail, or ``EOC`` if we hit
   * the end of the chunk. The return value cannot be NL_LIKE: NL is returned
   * instead.
   */
  captureNameChars() {
    const { chunk: e, i } = this;
    for (; ; ) {
      const r = this.getCode();
      if (r === G)
        return this.name += e.slice(i), G;
      if (!fr(r))
        return this.name += e.slice(i, this.prevI), r === _e ? be : r;
    }
  }
  /**
   * Skip white spaces.
   *
   * @return The character that ended the skip, or ``EOC`` if we hit
   * the end of the chunk. The return value cannot be NL_LIKE: NL is returned
   * instead.
   */
  skipSpaces() {
    for (; ; ) {
      const e = this.getCodeNorm();
      if (e === G || !de(e))
        return e;
    }
  }
  setXMLVersion(e) {
    this.currentXMLVersion = e, e === "1.0" ? (this.isChar = Po, this.getCode = this.getCode10) : (this.isChar = Oo, this.getCode = this.getCode11);
  }
  // STATE ENGINE METHODS
  // This needs to be a state separate from S_BEGIN_WHITESPACE because we want
  // to be sure never to come back to this state later.
  sBegin() {
    this.chunk.charCodeAt(0) === 65279 && (this.i++, this.column++), this.state = Ho;
  }
  sBeginWhitespace() {
    const e = this.i, i = this.skipSpaces();
    switch (this.prevI !== e && (this.xmlDeclPossible = !1), i) {
      case Te:
        if (this.state = ii, this.text.length !== 0)
          throw new Error("no-empty text at start");
        break;
      case G:
        break;
      default:
        this.unget(), this.state = le, this.xmlDeclPossible = !1;
    }
  }
  sDoctype() {
    var e;
    const i = this.captureTo(hs);
    switch (i) {
      case ee: {
        (e = this.doctypeHandler) === null || e === void 0 || e.call(this, this.text), this.text = "", this.state = le, this.doctype = !0;
        break;
      }
      case G:
        break;
      default:
        this.text += String.fromCodePoint(i), i === mn ? this.state = Ke : At(i) && (this.state = Uo, this.q = i);
    }
  }
  sDoctypeQuote() {
    const e = this.q;
    this.captureToChar(e) && (this.text += String.fromCodePoint(e), this.q = null, this.state = ei);
  }
  sDTD() {
    const e = this.captureTo(bs);
    e !== G && (this.text += String.fromCodePoint(e), e === Qe ? this.state = ei : e === Te ? this.state = Go : At(e) && (this.state = Vo, this.q = e));
  }
  sDTDQuoted() {
    const e = this.q;
    this.captureToChar(e) && (this.text += String.fromCodePoint(e), this.state = Ke, this.q = null);
  }
  sDTDOpenWaka() {
    const e = this.getCodeNorm();
    switch (this.text += String.fromCodePoint(e), e) {
      case Sr:
        this.state = qo, this.openWakaBang = "";
        break;
      case ne:
        this.state = Ko;
        break;
      default:
        this.state = Ke;
    }
  }
  sDTDOpenWakaBang() {
    const e = String.fromCodePoint(this.getCodeNorm()), i = this.openWakaBang += e;
    this.text += e, i !== "-" && (this.state = i === "--" ? ti : Ke, this.openWakaBang = "");
  }
  sDTDComment() {
    this.captureToChar(mt) && (this.text += "-", this.state = Xo);
  }
  sDTDCommentEnding() {
    const e = this.getCodeNorm();
    this.text += String.fromCodePoint(e), this.state = e === mt ? Yo : ti;
  }
  sDTDCommentEnded() {
    const e = this.getCodeNorm();
    this.text += String.fromCodePoint(e), e === ee ? this.state = Ke : (this.fail("malformed comment."), this.state = ti);
  }
  sDTDPI() {
    this.captureToChar(ne) && (this.text += "?", this.state = zo);
  }
  sDTDPIEnding() {
    const e = this.getCodeNorm();
    this.text += String.fromCodePoint(e), e === ee && (this.state = Ke);
  }
  sText() {
    this.tags.length !== 0 ? this.handleTextInRoot() : this.handleTextOutsideRoot();
  }
  sEntity() {
    let { i: e } = this;
    const { chunk: i } = this;
    e:
      for (; ; )
        switch (this.getCode()) {
          case _e:
            this.entity += `${i.slice(e, this.prevI)}
`, e = this.i;
            break;
          case cs: {
            const { entityReturnState: r } = this, n = this.entity + i.slice(e, this.prevI);
            this.state = r;
            let a;
            n === "" ? (this.fail("empty entity name."), a = "&;") : (a = this.parseEntity(n), this.entity = ""), (r !== le || this.textHandler !== void 0) && (this.text += a);
            break e;
          }
          case G:
            this.entity += i.slice(e);
            break e;
        }
  }
  sOpenWaka() {
    const e = this.getCode();
    if (dt(e))
      this.state = as, this.unget(), this.xmlDeclPossible = !1;
    else
      switch (e) {
        case Rt:
          this.state = ds, this.xmlDeclPossible = !1;
          break;
        case Sr:
          this.state = Qo, this.openWakaBang = "", this.xmlDeclPossible = !1;
          break;
        case ne:
          this.state = is;
          break;
        default:
          this.fail("disallowed character in tag name"), this.state = le, this.xmlDeclPossible = !1;
      }
  }
  sOpenWakaBang() {
    switch (this.openWakaBang += String.fromCodePoint(this.getCodeNorm()), this.openWakaBang) {
      case "[CDATA[":
        !this.sawRoot && !this.reportedTextBeforeRoot && (this.fail("text data outside of root node."), this.reportedTextBeforeRoot = !0), this.closedRoot && !this.reportedTextAfterRoot && (this.fail("text data outside of root node."), this.reportedTextAfterRoot = !0), this.state = ni, this.openWakaBang = "";
        break;
      case "--":
        this.state = ri, this.openWakaBang = "";
        break;
      case "DOCTYPE":
        this.state = ei, (this.doctype || this.sawRoot) && this.fail("inappropriately located doctype declaration."), this.openWakaBang = "";
        break;
      default:
        this.openWakaBang.length >= 7 && this.fail("incorrect syntax.");
    }
  }
  sComment() {
    this.captureToChar(mt) && (this.state = Zo);
  }
  sCommentEnding() {
    var e;
    const i = this.getCodeNorm();
    i === mt ? (this.state = Jo, (e = this.commentHandler) === null || e === void 0 || e.call(this, this.text), this.text = "") : (this.text += `-${String.fromCodePoint(i)}`, this.state = ri);
  }
  sCommentEnded() {
    const e = this.getCodeNorm();
    e !== ee ? (this.fail("malformed comment."), this.text += `--${String.fromCodePoint(e)}`, this.state = ri) : this.state = le;
  }
  sCData() {
    this.captureToChar(Qe) && (this.state = es);
  }
  sCDataEnding() {
    const e = this.getCodeNorm();
    e === Qe ? this.state = ts : (this.text += `]${String.fromCodePoint(e)}`, this.state = ni);
  }
  sCDataEnding2() {
    var e;
    const i = this.getCodeNorm();
    switch (i) {
      case ee: {
        (e = this.cdataHandler) === null || e === void 0 || e.call(this, this.text), this.text = "", this.state = le;
        break;
      }
      case Qe:
        this.text += "]";
        break;
      default:
        this.text += `]]${String.fromCodePoint(i)}`, this.state = ni;
    }
  }
  // We need this separate state to check the first character fo the pi target
  // with this.nameStartCheck which allows less characters than this.nameCheck.
  sPIFirstChar() {
    const e = this.getCodeNorm();
    this.nameStartCheck(e) ? (this.piTarget += String.fromCodePoint(e), this.state = hr) : e === ne || de(e) ? (this.fail("processing instruction without a target."), this.state = e === ne ? Et : oi) : (this.fail("disallowed character in processing instruction name."), this.piTarget += String.fromCodePoint(e), this.state = hr);
  }
  sPIRest() {
    const { chunk: e, i } = this;
    for (; ; ) {
      const r = this.getCodeNorm();
      if (r === G) {
        this.piTarget += e.slice(i);
        return;
      }
      if (!this.nameCheck(r)) {
        this.piTarget += e.slice(i, this.prevI);
        const n = r === ne;
        n || de(r) ? this.piTarget === "xml" ? (this.xmlDeclPossible || this.fail("an XML declaration must be at the start of the document."), this.state = n ? Pe : br) : this.state = n ? Et : oi : (this.fail("disallowed character in processing instruction name."), this.piTarget += String.fromCodePoint(r));
        break;
      }
    }
  }
  sPIBody() {
    if (this.text.length === 0) {
      const e = this.getCodeNorm();
      e === ne ? this.state = Et : de(e) || (this.text = String.fromCodePoint(e));
    } else
      this.captureToChar(ne) && (this.state = Et);
  }
  sPIEnding() {
    var e;
    const i = this.getCodeNorm();
    if (i === ee) {
      const { piTarget: r } = this;
      r.toLowerCase() === "xml" && this.fail("the XML declaration must appear at the start of the document."), (e = this.piHandler) === null || e === void 0 || e.call(this, {
        target: r,
        body: this.text
      }), this.piTarget = this.text = "", this.state = le;
    } else
      i === ne ? this.text += "?" : (this.text += `?${String.fromCodePoint(i)}`, this.state = oi);
    this.xmlDeclPossible = !1;
  }
  sXMLDeclNameStart() {
    const e = this.skipSpaces();
    if (e === ne) {
      this.state = Pe;
      return;
    }
    e !== G && (this.state = rs, this.name = String.fromCodePoint(e));
  }
  sXMLDeclName() {
    const e = this.captureTo(ps);
    if (e === ne) {
      this.state = Pe, this.name += this.text, this.text = "", this.fail("XML declaration is incomplete.");
      return;
    }
    if (de(e) || e === ze) {
      if (this.name += this.text, this.text = "", !this.xmlDeclExpects.includes(this.name))
        switch (this.name.length) {
          case 0:
            this.fail("did not expect any more name/value pairs.");
            break;
          case 1:
            this.fail(`expected the name ${this.xmlDeclExpects[0]}.`);
            break;
          default:
            this.fail(`expected one of ${this.xmlDeclExpects.join(", ")}`);
        }
      this.state = e === ze ? pr : ns;
    }
  }
  sXMLDeclEq() {
    const e = this.getCodeNorm();
    if (e === ne) {
      this.state = Pe, this.fail("XML declaration is incomplete.");
      return;
    }
    de(e) || (e !== ze && this.fail("value required."), this.state = pr);
  }
  sXMLDeclValueStart() {
    const e = this.getCodeNorm();
    if (e === ne) {
      this.state = Pe, this.fail("XML declaration is incomplete.");
      return;
    }
    de(e) || (At(e) ? this.q = e : (this.fail("value must be quoted."), this.q = yr), this.state = os);
  }
  sXMLDeclValue() {
    const e = this.captureTo([this.q, ne]);
    if (e === ne) {
      this.state = Pe, this.text = "", this.fail("XML declaration is incomplete.");
      return;
    }
    if (e === G)
      return;
    const i = this.text;
    switch (this.text = "", this.name) {
      case "version": {
        this.xmlDeclExpects = ["encoding", "standalone"];
        const r = i;
        this.xmlDecl.version = r, /^1\.[0-9]+$/.test(r) ? this.opt.forceXMLVersion || this.setXMLVersion(r) : this.fail("version number must match /^1\\.[0-9]+$/.");
        break;
      }
      case "encoding":
        /^[A-Za-z][A-Za-z0-9._-]*$/.test(i) || this.fail("encoding value must match /^[A-Za-z0-9][A-Za-z0-9._-]*$/."), this.xmlDeclExpects = ["standalone"], this.xmlDecl.encoding = i;
        break;
      case "standalone":
        i !== "yes" && i !== "no" && this.fail('standalone value must match "yes" or "no".'), this.xmlDeclExpects = [], this.xmlDecl.standalone = i;
        break;
    }
    this.name = "", this.state = ss;
  }
  sXMLDeclSeparator() {
    const e = this.getCodeNorm();
    if (e === ne) {
      this.state = Pe;
      return;
    }
    de(e) || (this.fail("whitespace required."), this.unget()), this.state = br;
  }
  sXMLDeclEnding() {
    var e;
    this.getCodeNorm() === ee ? (this.piTarget !== "xml" ? this.fail("processing instructions are not allowed before root.") : this.name !== "version" && this.xmlDeclExpects.includes("version") && this.fail("XML declaration must contain a version."), (e = this.xmldeclHandler) === null || e === void 0 || e.call(this, this.xmlDecl), this.name = "", this.piTarget = this.text = "", this.state = le) : this.fail("The character ? is disallowed anywhere in XML declarations."), this.xmlDeclPossible = !1;
  }
  sOpenTag() {
    var e;
    const i = this.captureNameChars();
    if (i === G)
      return;
    const r = this.tag = {
      name: this.name,
      attributes: /* @__PURE__ */ Object.create(null)
    };
    switch (this.name = "", this.xmlnsOpt && (this.topNS = r.ns = /* @__PURE__ */ Object.create(null)), (e = this.openTagStartHandler) === null || e === void 0 || e.call(this, r), this.sawRoot = !0, !this.fragmentOpt && this.closedRoot && this.fail("documents may contain only one root."), i) {
      case ee:
        this.openTag();
        break;
      case Rt:
        this.state = si;
        break;
      default:
        de(i) || this.fail("disallowed character in tag name."), this.state = ft;
    }
  }
  sOpenTagSlash() {
    this.getCode() === ee ? this.openSelfClosingTag() : (this.fail("forward-slash in opening tag not followed by >."), this.state = ft);
  }
  sAttrib() {
    const e = this.skipSpaces();
    e !== G && (dt(e) ? (this.unget(), this.state = ai) : e === ee ? this.openTag() : e === Rt ? this.state = si : this.fail("disallowed character in attribute name."));
  }
  sAttribName() {
    const e = this.captureNameChars();
    e === ze ? this.state = _r : de(e) ? this.state = ls : e === ee ? (this.fail("attribute without value."), this.pushAttrib(this.name, this.name), this.name = this.text = "", this.openTag()) : e !== G && this.fail("disallowed character in attribute name.");
  }
  sAttribNameSawWhite() {
    const e = this.skipSpaces();
    switch (e) {
      case G:
        return;
      case ze:
        this.state = _r;
        break;
      default:
        this.fail("attribute without value."), this.text = "", this.name = "", e === ee ? this.openTag() : dt(e) ? (this.unget(), this.state = ai) : (this.fail("disallowed character in attribute name."), this.state = ft);
    }
  }
  sAttribValue() {
    const e = this.getCodeNorm();
    At(e) ? (this.q = e, this.state = gr) : de(e) || (this.fail("unquoted attribute value."), this.state = wr, this.unget());
  }
  sAttribValueQuoted() {
    const { q: e, chunk: i } = this;
    let { i: r } = this;
    for (; ; )
      switch (this.getCode()) {
        case e:
          this.pushAttrib(this.name, this.text + i.slice(r, this.prevI)), this.name = this.text = "", this.q = null, this.state = us;
          return;
        case ct:
          this.text += i.slice(r, this.prevI), this.state = St, this.entityReturnState = gr;
          return;
        case be:
        case _e:
        case li:
          this.text += `${i.slice(r, this.prevI)} `, r = this.i;
          break;
        case Te:
          this.text += i.slice(r, this.prevI), this.fail("disallowed character.");
          return;
        case G:
          this.text += i.slice(r);
          return;
      }
  }
  sAttribValueClosed() {
    const e = this.getCodeNorm();
    de(e) ? this.state = ft : e === ee ? this.openTag() : e === Rt ? this.state = si : dt(e) ? (this.fail("no whitespace between attributes."), this.unget(), this.state = ai) : this.fail("disallowed character in attribute name.");
  }
  sAttribValueUnquoted() {
    const e = this.captureTo(_s);
    switch (e) {
      case ct:
        this.state = St, this.entityReturnState = wr;
        break;
      case Te:
        this.fail("disallowed character.");
        break;
      case G:
        break;
      default:
        this.text.includes("]]>") && this.fail('the string "]]>" is disallowed in char data.'), this.pushAttrib(this.name, this.text), this.name = this.text = "", e === ee ? this.openTag() : this.state = ft;
    }
  }
  sCloseTag() {
    const e = this.captureNameChars();
    e === ee ? this.closeTag() : de(e) ? this.state = fs : e !== G && this.fail("disallowed character in closing tag.");
  }
  sCloseTagSawWhite() {
    switch (this.skipSpaces()) {
      case ee:
        this.closeTag();
        break;
      case G:
        break;
      default:
        this.fail("disallowed character in closing tag.");
    }
  }
  // END OF STATE ENGINE METHODS
  handleTextInRoot() {
    let { i: e, forbiddenState: i } = this;
    const { chunk: r, textHandler: n } = this;
    e:
      for (; ; )
        switch (this.getCode()) {
          case Te: {
            if (this.state = ii, n !== void 0) {
              const { text: a } = this, u = r.slice(e, this.prevI);
              a.length !== 0 ? (n(a + u), this.text = "") : u.length !== 0 && n(u);
            }
            i = Me;
            break e;
          }
          case ct:
            this.state = St, this.entityReturnState = le, n !== void 0 && (this.text += r.slice(e, this.prevI)), i = Me;
            break e;
          case Qe:
            switch (i) {
              case Me:
                i = Rr;
                break;
              case Rr:
                i = di;
                break;
              case di:
                break;
              default:
                throw new Error("impossible state");
            }
            break;
          case ee:
            i === di && this.fail('the string "]]>" is disallowed in char data.'), i = Me;
            break;
          case _e:
            n !== void 0 && (this.text += `${r.slice(e, this.prevI)}
`), e = this.i, i = Me;
            break;
          case G:
            n !== void 0 && (this.text += r.slice(e));
            break e;
          default:
            i = Me;
        }
    this.forbiddenState = i;
  }
  handleTextOutsideRoot() {
    let { i: e } = this;
    const { chunk: i, textHandler: r } = this;
    let n = !1;
    e:
      for (; ; ) {
        const a = this.getCode();
        switch (a) {
          case Te: {
            if (this.state = ii, r !== void 0) {
              const { text: u } = this, b = i.slice(e, this.prevI);
              u.length !== 0 ? (r(u + b), this.text = "") : b.length !== 0 && r(b);
            }
            break e;
          }
          case ct:
            this.state = St, this.entityReturnState = le, r !== void 0 && (this.text += i.slice(e, this.prevI)), n = !0;
            break e;
          case _e:
            r !== void 0 && (this.text += `${i.slice(e, this.prevI)}
`), e = this.i;
            break;
          case G:
            r !== void 0 && (this.text += i.slice(e));
            break e;
          default:
            de(a) || (n = !0);
        }
      }
    n && (!this.sawRoot && !this.reportedTextBeforeRoot && (this.fail("text data outside of root node."), this.reportedTextBeforeRoot = !0), this.closedRoot && !this.reportedTextAfterRoot && (this.fail("text data outside of root node."), this.reportedTextAfterRoot = !0));
  }
  pushAttribNS(e, i) {
    var r;
    const { prefix: n, local: a } = this.qname(e), u = { name: e, prefix: n, local: a, value: i };
    if (this.attribList.push(u), (r = this.attributeHandler) === null || r === void 0 || r.call(this, u), n === "xmlns") {
      const b = i.trim();
      this.currentXMLVersion === "1.0" && b === "" && this.fail("invalid attempt to undefine prefix in XML 1.0"), this.topNS[a] = b, vi(this, a, b);
    } else if (e === "xmlns") {
      const b = i.trim();
      this.topNS[""] = b, vi(this, "", b);
    }
  }
  pushAttribPlain(e, i) {
    var r;
    const n = { name: e, value: i };
    this.attribList.push(n), (r = this.attributeHandler) === null || r === void 0 || r.call(this, n);
  }
  /**
   * End parsing. This performs final well-formedness checks and resets the
   * parser to a clean state.
   *
   * @returns this
   */
  end() {
    var e, i;
    this.sawRoot || this.fail("document must contain a root element.");
    const { tags: r } = this;
    for (; r.length > 0; ) {
      const a = r.pop();
      this.fail(`unclosed tag: ${a.name}`);
    }
    this.state !== cr && this.state !== le && this.fail("unexpected end.");
    const { text: n } = this;
    return n.length !== 0 && ((e = this.textHandler) === null || e === void 0 || e.call(this, n), this.text = ""), this._closed = !0, (i = this.endHandler) === null || i === void 0 || i.call(this), this._init(), this;
  }
  /**
   * Resolve a namespace prefix.
   *
   * @param prefix The prefix to resolve.
   *
   * @returns The namespace URI or ``undefined`` if the prefix is not defined.
   */
  resolve(e) {
    var i, r;
    let n = this.topNS[e];
    if (n !== void 0)
      return n;
    const { tags: a } = this;
    for (let u = a.length - 1; u >= 0; u--)
      if (n = a[u].ns[e], n !== void 0)
        return n;
    return n = this.ns[e], n !== void 0 ? n : (r = (i = this.opt).resolvePrefix) === null || r === void 0 ? void 0 : r.call(i, e);
  }
  /**
   * Parse a qname into its prefix and local name parts.
   *
   * @param name The name to parse
   *
   * @returns
   */
  qname(e) {
    const i = e.indexOf(":");
    if (i === -1)
      return { prefix: "", local: e };
    const r = e.slice(i + 1), n = e.slice(0, i);
    return (n === "" || r === "" || r.includes(":")) && this.fail(`malformed name: ${e}.`), { prefix: n, local: r };
  }
  processAttribsNS() {
    var e;
    const { attribList: i } = this, r = this.tag;
    {
      const { prefix: u, local: b } = this.qname(r.name);
      r.prefix = u, r.local = b;
      const g = r.uri = (e = this.resolve(u)) !== null && e !== void 0 ? e : "";
      u !== "" && (u === "xmlns" && this.fail('tags may not have "xmlns" as prefix.'), g === "" && (this.fail(`unbound namespace prefix: ${JSON.stringify(u)}.`), r.uri = u));
    }
    if (i.length === 0)
      return;
    const { attributes: n } = r, a = /* @__PURE__ */ new Set();
    for (const u of i) {
      const { name: b, prefix: g, local: d } = u;
      let _, l;
      g === "" ? (_ = b === "xmlns" ? Je : "", l = b) : (_ = this.resolve(g), _ === void 0 && (this.fail(`unbound namespace prefix: ${JSON.stringify(g)}.`), _ = g), l = `{${_}}${d}`), a.has(l) && this.fail(`duplicate attribute: ${l}.`), a.add(l), u.uri = _, n[b] = u;
    }
    this.attribList = [];
  }
  processAttribsPlain() {
    const { attribList: e } = this, i = this.tag.attributes;
    for (const { name: r, value: n } of e)
      i[r] !== void 0 && this.fail(`duplicate attribute: ${r}.`), i[r] = n;
    this.attribList = [];
  }
  /**
   * Handle a complete open tag. This parser code calls this once it has seen
   * the whole tag. This method checks for well-formeness and then emits
   * ``onopentag``.
   */
  openTag() {
    var e;
    this.processAttribs();
    const { tags: i } = this, r = this.tag;
    r.isSelfClosing = !1, (e = this.openTagHandler) === null || e === void 0 || e.call(this, r), i.push(r), this.state = le, this.name = "";
  }
  /**
   * Handle a complete self-closing tag. This parser code calls this once it has
   * seen the whole tag. This method checks for well-formeness and then emits
   * ``onopentag`` and ``onclosetag``.
   */
  openSelfClosingTag() {
    var e, i, r;
    this.processAttribs();
    const { tags: n } = this, a = this.tag;
    a.isSelfClosing = !0, (e = this.openTagHandler) === null || e === void 0 || e.call(this, a), (i = this.closeTagHandler) === null || i === void 0 || i.call(this, a), (this.tag = (r = n[n.length - 1]) !== null && r !== void 0 ? r : null) === null && (this.closedRoot = !0), this.state = le, this.name = "";
  }
  /**
   * Handle a complete close tag. This parser code calls this once it has seen
   * the whole tag. This method checks for well-formeness and then emits
   * ``onclosetag``.
   */
  closeTag() {
    const { tags: e, name: i } = this;
    if (this.state = le, this.name = "", i === "") {
      this.fail("weird empty close tag."), this.text += "</>";
      return;
    }
    const r = this.closeTagHandler;
    let n = e.length;
    for (; n-- > 0; ) {
      const a = this.tag = e.pop();
      if (this.topNS = a.ns, r == null || r(a), a.name === i)
        break;
      this.fail("unexpected close tag.");
    }
    n === 0 ? this.closedRoot = !0 : n < 0 && (this.fail(`unmatched closing tag: ${i}.`), this.text += `</${i}>`);
  }
  /**
   * Resolves an entity. Makes any necessary well-formedness checks.
   *
   * @param entity The entity to resolve.
   *
   * @returns The parsed entity.
   */
  parseEntity(e) {
    if (e[0] !== "#") {
      const r = this.ENTITIES[e];
      return r !== void 0 ? r : (this.fail(this.isName(e) ? "undefined entity." : "disallowed character in entity name."), `&${e};`);
    }
    let i = NaN;
    return e[1] === "x" && /^#x[0-9a-f]+$/i.test(e) ? i = parseInt(e.slice(2), 16) : /^#[0-9]+$/.test(e) && (i = parseInt(e.slice(1), 10)), this.isChar(i) ? String.fromCodePoint(i) : (this.fail("malformed character entity."), `&${e};`);
  }
}
it.SaxesParser = Ss;
var An = { exports: {} }, fi = { exports: {} }, Z = {
  ArrayIsArray(t) {
    return Array.isArray(t);
  },
  ArrayPrototypeIncludes(t, e) {
    return t.includes(e);
  },
  ArrayPrototypeIndexOf(t, e) {
    return t.indexOf(e);
  },
  ArrayPrototypeJoin(t, e) {
    return t.join(e);
  },
  ArrayPrototypeMap(t, e) {
    return t.map(e);
  },
  ArrayPrototypePop(t, e) {
    return t.pop(e);
  },
  ArrayPrototypePush(t, e) {
    return t.push(e);
  },
  ArrayPrototypeSlice(t, e, i) {
    return t.slice(e, i);
  },
  Error,
  FunctionPrototypeCall(t, e, ...i) {
    return t.call(e, ...i);
  },
  FunctionPrototypeSymbolHasInstance(t, e) {
    return Function.prototype[Symbol.hasInstance].call(t, e);
  },
  MathFloor: Math.floor,
  Number,
  NumberIsInteger: Number.isInteger,
  NumberIsNaN: Number.isNaN,
  NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
  NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
  NumberParseInt: Number.parseInt,
  ObjectDefineProperties(t, e) {
    return Object.defineProperties(t, e);
  },
  ObjectDefineProperty(t, e, i) {
    return Object.defineProperty(t, e, i);
  },
  ObjectGetOwnPropertyDescriptor(t, e) {
    return Object.getOwnPropertyDescriptor(t, e);
  },
  ObjectKeys(t) {
    return Object.keys(t);
  },
  ObjectSetPrototypeOf(t, e) {
    return Object.setPrototypeOf(t, e);
  },
  Promise,
  PromisePrototypeCatch(t, e) {
    return t.catch(e);
  },
  PromisePrototypeThen(t, e, i) {
    return t.then(e, i);
  },
  PromiseReject(t) {
    return Promise.reject(t);
  },
  PromiseResolve(t) {
    return Promise.resolve(t);
  },
  ReflectApply: Reflect.apply,
  RegExpPrototypeTest(t, e) {
    return t.test(e);
  },
  SafeSet: Set,
  String,
  StringPrototypeSlice(t, e, i) {
    return t.slice(e, i);
  },
  StringPrototypeToLowerCase(t) {
    return t.toLowerCase();
  },
  StringPrototypeToUpperCase(t) {
    return t.toUpperCase();
  },
  StringPrototypeTrim(t) {
    return t.trim();
  },
  Symbol,
  SymbolFor: Symbol.for,
  SymbolAsyncIterator: Symbol.asyncIterator,
  SymbolHasInstance: Symbol.hasInstance,
  SymbolIterator: Symbol.iterator,
  SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"),
  SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"),
  TypedArrayPrototypeSet(t, e, i) {
    return t.set(e, i);
  },
  Boolean,
  Uint8Array
}, Fn = { exports: {} };
(function(t) {
  const e = je, { kResistStopPropagation: i, SymbolDispose: r } = Z, n = globalThis.AbortSignal || pt().AbortSignal, a = globalThis.AbortController || pt().AbortController, u = Object.getPrototypeOf(async function() {
  }).constructor, b = globalThis.Blob || e.Blob, g = typeof b < "u" ? function(h) {
    return h instanceof b;
  } : function(h) {
    return !1;
  }, d = (p, h) => {
    if (p !== void 0 && (p === null || typeof p != "object" || !("aborted" in p)))
      throw new ERR_INVALID_ARG_TYPE(h, "AbortSignal", p);
  }, _ = (p, h) => {
    if (typeof p != "function")
      throw new ERR_INVALID_ARG_TYPE(h, "Function", p);
  };
  class l extends Error {
    constructor(h) {
      if (!Array.isArray(h))
        throw new TypeError(`Expected input to be an Array, got ${typeof h}`);
      let F = "";
      for (let w = 0; w < h.length; w++)
        F += `    ${h[w].stack}
`;
      super(F), this.name = "AggregateError", this.errors = h;
    }
  }
  t.exports = {
    AggregateError: l,
    kEmptyObject: Object.freeze({}),
    once(p) {
      let h = !1;
      return function(...F) {
        h || (h = !0, p.apply(this, F));
      };
    },
    createDeferredPromise: function() {
      let p, h;
      return {
        promise: new Promise((w, A) => {
          p = w, h = A;
        }),
        resolve: p,
        reject: h
      };
    },
    promisify(p) {
      return new Promise((h, F) => {
        p((w, ...A) => w ? F(w) : h(...A));
      });
    },
    debuglog() {
      return function() {
      };
    },
    format(p, ...h) {
      return p.replace(/%([sdifj])/g, function(...[F, w]) {
        const A = h.shift();
        return w === "f" ? A.toFixed(6) : w === "j" ? JSON.stringify(A) : w === "s" && typeof A == "object" ? `${A.constructor !== Object ? A.constructor.name : ""} {}`.trim() : A.toString();
      });
    },
    inspect(p) {
      switch (typeof p) {
        case "string":
          if (p.includes("'"))
            if (p.includes('"')) {
              if (!p.includes("`") && !p.includes("${"))
                return `\`${p}\``;
            } else
              return `"${p}"`;
          return `'${p}'`;
        case "number":
          return isNaN(p) ? "NaN" : Object.is(p, -0) ? String(p) : p;
        case "bigint":
          return `${String(p)}n`;
        case "boolean":
        case "undefined":
          return String(p);
        case "object":
          return "{}";
      }
    },
    types: {
      isAsyncFunction(p) {
        return p instanceof u;
      },
      isArrayBufferView(p) {
        return ArrayBuffer.isView(p);
      }
    },
    isBlob: g,
    deprecate(p, h) {
      return p;
    },
    addAbortListener: Pt.addAbortListener || function(h, F) {
      if (h === void 0)
        throw new ERR_INVALID_ARG_TYPE("signal", "AbortSignal", h);
      d(h, "signal"), _(F, "listener");
      let w;
      return h.aborted ? queueMicrotask(() => F()) : (h.addEventListener("abort", F, {
        __proto__: null,
        once: !0,
        [i]: !0
      }), w = () => {
        h.removeEventListener("abort", F);
      }), {
        __proto__: null,
        [r]() {
          var A;
          (A = w) === null || A === void 0 || A();
        }
      };
    },
    AbortSignalAny: n.any || function(h) {
      if (h.length === 1)
        return h[0];
      const F = new a(), w = () => F.abort();
      return h.forEach((A) => {
        d(A, "signals"), A.addEventListener("abort", w, {
          once: !0
        });
      }), F.signal.addEventListener(
        "abort",
        () => {
          h.forEach((A) => A.removeEventListener("abort", w));
        },
        {
          once: !0
        }
      ), F.signal;
    }
  }, t.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
})(Fn);
var ue = Fn.exports, Ui = {};
const { format: Es, inspect: Ct, AggregateError: ms } = ue, Rs = globalThis.AggregateError || ms, As = Symbol("kIsNodeError"), Fs = [
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
], Ds = /^([A-Z][a-z0-9]*)+$/, xs = "__node_internal_", Mt = {};
function ke(t, e) {
  if (!t)
    throw new Mt.ERR_INTERNAL_ASSERTION(e);
}
function Fr(t) {
  let e = "", i = t.length;
  const r = t[0] === "-" ? 1 : 0;
  for (; i >= r + 4; i -= 3)
    e = `_${t.slice(i - 3, i)}${e}`;
  return `${t.slice(0, i)}${e}`;
}
function Ts(t, e, i) {
  if (typeof e == "function")
    return ke(
      e.length <= i.length,
      // Default options do not count.
      `Code: ${t}; The provided arguments length (${i.length}) does not match the required ones (${e.length}).`
    ), e(...i);
  const r = (e.match(/%[dfijoOs]/g) || []).length;
  return ke(
    r === i.length,
    `Code: ${t}; The provided arguments length (${i.length}) does not match the required ones (${r}).`
  ), i.length === 0 ? e : Es(e, ...i);
}
function oe(t, e, i) {
  i || (i = Error);
  class r extends i {
    constructor(...a) {
      super(Ts(t, e, a));
    }
    toString() {
      return `${this.name} [${t}]: ${this.message}`;
    }
  }
  Object.defineProperties(r.prototype, {
    name: {
      value: i.name,
      writable: !0,
      enumerable: !1,
      configurable: !0
    },
    toString: {
      value() {
        return `${this.name} [${t}]: ${this.message}`;
      },
      writable: !0,
      enumerable: !1,
      configurable: !0
    }
  }), r.prototype.code = t, r.prototype[As] = !0, Mt[t] = r;
}
function Dr(t) {
  const e = xs + t.name;
  return Object.defineProperty(t, "name", {
    value: e
  }), t;
}
function Ns(t, e) {
  if (t && e && t !== e) {
    if (Array.isArray(e.errors))
      return e.errors.push(t), e;
    const i = new Rs([e, t], e.message);
    return i.code = e.code, i;
  }
  return t || e;
}
let vs = class extends Error {
  constructor(e = "The operation was aborted", i = void 0) {
    if (i !== void 0 && typeof i != "object")
      throw new Mt.ERR_INVALID_ARG_TYPE("options", "Object", i);
    super(e, i), this.code = "ABORT_ERR", this.name = "AbortError";
  }
};
oe("ERR_ASSERTION", "%s", Error);
oe(
  "ERR_INVALID_ARG_TYPE",
  (t, e, i) => {
    ke(typeof t == "string", "'name' must be a string"), Array.isArray(e) || (e = [e]);
    let r = "The ";
    t.endsWith(" argument") ? r += `${t} ` : r += `"${t}" ${t.includes(".") ? "property" : "argument"} `, r += "must be ";
    const n = [], a = [], u = [];
    for (const g of e)
      ke(typeof g == "string", "All expected entries have to be of type string"), Fs.includes(g) ? n.push(g.toLowerCase()) : Ds.test(g) ? a.push(g) : (ke(g !== "object", 'The value "object" should be written as "Object"'), u.push(g));
    if (a.length > 0) {
      const g = n.indexOf("object");
      g !== -1 && (n.splice(n, g, 1), a.push("Object"));
    }
    if (n.length > 0) {
      switch (n.length) {
        case 1:
          r += `of type ${n[0]}`;
          break;
        case 2:
          r += `one of type ${n[0]} or ${n[1]}`;
          break;
        default: {
          const g = n.pop();
          r += `one of type ${n.join(", ")}, or ${g}`;
        }
      }
      (a.length > 0 || u.length > 0) && (r += " or ");
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
          const g = a.pop();
          r += `an instance of ${a.join(", ")}, or ${g}`;
        }
      }
      u.length > 0 && (r += " or ");
    }
    switch (u.length) {
      case 0:
        break;
      case 1:
        u[0].toLowerCase() !== u[0] && (r += "an "), r += `${u[0]}`;
        break;
      case 2:
        r += `one of ${u[0]} or ${u[1]}`;
        break;
      default: {
        const g = u.pop();
        r += `one of ${u.join(", ")}, or ${g}`;
      }
    }
    if (i == null)
      r += `. Received ${i}`;
    else if (typeof i == "function" && i.name)
      r += `. Received function ${i.name}`;
    else if (typeof i == "object") {
      var b;
      if ((b = i.constructor) !== null && b !== void 0 && b.name)
        r += `. Received an instance of ${i.constructor.name}`;
      else {
        const g = Ct(i, {
          depth: -1
        });
        r += `. Received ${g}`;
      }
    } else {
      let g = Ct(i, {
        colors: !1
      });
      g.length > 25 && (g = `${g.slice(0, 25)}...`), r += `. Received type ${typeof i} (${g})`;
    }
    return r;
  },
  TypeError
);
oe(
  "ERR_INVALID_ARG_VALUE",
  (t, e, i = "is invalid") => {
    let r = Ct(e);
    return r.length > 128 && (r = r.slice(0, 128) + "..."), `The ${t.includes(".") ? "property" : "argument"} '${t}' ${i}. Received ${r}`;
  },
  TypeError
);
oe(
  "ERR_INVALID_RETURN_VALUE",
  (t, e, i) => {
    var r;
    const n = i != null && (r = i.constructor) !== null && r !== void 0 && r.name ? `instance of ${i.constructor.name}` : `type ${typeof i}`;
    return `Expected ${t} to be returned from the "${e}" function but got ${n}.`;
  },
  TypeError
);
oe(
  "ERR_MISSING_ARGS",
  (...t) => {
    ke(t.length > 0, "At least one arg needs to be specified");
    let e;
    const i = t.length;
    switch (t = (Array.isArray(t) ? t : [t]).map((r) => `"${r}"`).join(" or "), i) {
      case 1:
        e += `The ${t[0]} argument`;
        break;
      case 2:
        e += `The ${t[0]} and ${t[1]} arguments`;
        break;
      default:
        {
          const r = t.pop();
          e += `The ${t.join(", ")}, and ${r} arguments`;
        }
        break;
    }
    return `${e} must be specified`;
  },
  TypeError
);
oe(
  "ERR_OUT_OF_RANGE",
  (t, e, i) => {
    ke(e, 'Missing "range" argument');
    let r;
    return Number.isInteger(i) && Math.abs(i) > 2 ** 32 ? r = Fr(String(i)) : typeof i == "bigint" ? (r = String(i), (i > 2n ** 32n || i < -(2n ** 32n)) && (r = Fr(r)), r += "n") : r = Ct(i), `The value of "${t}" is out of range. It must be ${e}. Received ${r}`;
  },
  RangeError
);
oe("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
oe("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
oe("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
oe("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
oe("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
oe("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
oe("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
oe("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
oe("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
oe("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
oe("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
var fe = {
  AbortError: vs,
  aggregateTwoErrors: Dr(Ns),
  hideStackFrames: Dr,
  codes: Mt
};
const {
  ArrayIsArray: Vi,
  ArrayPrototypeIncludes: Dn,
  ArrayPrototypeJoin: xn,
  ArrayPrototypeMap: Cs,
  NumberIsInteger: Gi,
  NumberIsNaN: Is,
  NumberMAX_SAFE_INTEGER: $s,
  NumberMIN_SAFE_INTEGER: Ps,
  NumberParseInt: Ms,
  ObjectPrototypeHasOwnProperty: Os,
  RegExpPrototypeExec: Tn,
  String: Ls,
  StringPrototypeToUpperCase: ks,
  StringPrototypeTrim: Ws
} = Z, {
  hideStackFrames: he,
  codes: { ERR_SOCKET_BAD_PORT: js, ERR_INVALID_ARG_TYPE: ae, ERR_INVALID_ARG_VALUE: ot, ERR_OUT_OF_RANGE: We, ERR_UNKNOWN_SIGNAL: xr }
} = fe, { normalizeEncoding: Bs } = ue, { isAsyncFunction: Hs, isArrayBufferView: Us } = ue.types, Tr = {};
function Vs(t) {
  return t === (t | 0);
}
function Gs(t) {
  return t === t >>> 0;
}
const qs = /^[0-7]+$/, Xs = "must be a 32-bit unsigned integer or an octal string";
function Ys(t, e, i) {
  if (typeof t > "u" && (t = i), typeof t == "string") {
    if (Tn(qs, t) === null)
      throw new ot(e, t, Xs);
    t = Ms(t, 8);
  }
  return Nn(t, e), t;
}
const Ks = he((t, e, i = Ps, r = $s) => {
  if (typeof t != "number")
    throw new ae(e, "number", t);
  if (!Gi(t))
    throw new We(e, "an integer", t);
  if (t < i || t > r)
    throw new We(e, `>= ${i} && <= ${r}`, t);
}), zs = he((t, e, i = -2147483648, r = 2147483647) => {
  if (typeof t != "number")
    throw new ae(e, "number", t);
  if (!Gi(t))
    throw new We(e, "an integer", t);
  if (t < i || t > r)
    throw new We(e, `>= ${i} && <= ${r}`, t);
}), Nn = he((t, e, i = !1) => {
  if (typeof t != "number")
    throw new ae(e, "number", t);
  if (!Gi(t))
    throw new We(e, "an integer", t);
  const r = i ? 1 : 0, n = 4294967295;
  if (t < r || t > n)
    throw new We(e, `>= ${r} && <= ${n}`, t);
});
function qi(t, e) {
  if (typeof t != "string")
    throw new ae(e, "string", t);
}
function Qs(t, e, i = void 0, r) {
  if (typeof t != "number")
    throw new ae(e, "number", t);
  if (i != null && t < i || r != null && t > r || (i != null || r != null) && Is(t))
    throw new We(
      e,
      `${i != null ? `>= ${i}` : ""}${i != null && r != null ? " && " : ""}${r != null ? `<= ${r}` : ""}`,
      t
    );
}
const Zs = he((t, e, i) => {
  if (!Dn(i, t)) {
    const n = "must be one of: " + xn(
      Cs(i, (a) => typeof a == "string" ? `'${a}'` : Ls(a)),
      ", "
    );
    throw new ot(e, t, n);
  }
});
function vn(t, e) {
  if (typeof t != "boolean")
    throw new ae(e, "boolean", t);
}
function ci(t, e, i) {
  return t == null || !Os(t, e) ? i : t[e];
}
const Js = he((t, e, i = null) => {
  const r = ci(i, "allowArray", !1), n = ci(i, "allowFunction", !1);
  if (!ci(i, "nullable", !1) && t === null || !r && Vi(t) || typeof t != "object" && (!n || typeof t != "function"))
    throw new ae(e, "Object", t);
}), ea = he((t, e) => {
  if (t != null && typeof t != "object" && typeof t != "function")
    throw new ae(e, "a dictionary", t);
}), Ot = he((t, e, i = 0) => {
  if (!Vi(t))
    throw new ae(e, "Array", t);
  if (t.length < i) {
    const r = `must be longer than ${i}`;
    throw new ot(e, t, r);
  }
});
function ta(t, e) {
  Ot(t, e);
  for (let i = 0; i < t.length; i++)
    qi(t[i], `${e}[${i}]`);
}
function ia(t, e) {
  Ot(t, e);
  for (let i = 0; i < t.length; i++)
    vn(t[i], `${e}[${i}]`);
}
function ra(t, e) {
  Ot(t, e);
  for (let i = 0; i < t.length; i++) {
    const r = t[i], n = `${e}[${i}]`;
    if (r == null)
      throw new ae(n, "AbortSignal", r);
    Cn(r, n);
  }
}
function na(t, e = "signal") {
  if (qi(t, e), Tr[t] === void 0)
    throw Tr[ks(t)] !== void 0 ? new xr(t + " (signals must use all capital letters)") : new xr(t);
}
const oa = he((t, e = "buffer") => {
  if (!Us(t))
    throw new ae(e, ["Buffer", "TypedArray", "DataView"], t);
});
function sa(t, e) {
  const i = Bs(e), r = t.length;
  if (i === "hex" && r % 2 !== 0)
    throw new ot("encoding", e, `is invalid for data of length ${r}`);
}
function aa(t, e = "Port", i = !0) {
  if (typeof t != "number" && typeof t != "string" || typeof t == "string" && Ws(t).length === 0 || +t !== +t >>> 0 || t > 65535 || t === 0 && !i)
    throw new js(e, t, i);
  return t | 0;
}
const Cn = he((t, e) => {
  if (t !== void 0 && (t === null || typeof t != "object" || !("aborted" in t)))
    throw new ae(e, "AbortSignal", t);
}), la = he((t, e) => {
  if (typeof t != "function")
    throw new ae(e, "Function", t);
}), ua = he((t, e) => {
  if (typeof t != "function" || Hs(t))
    throw new ae(e, "Function", t);
}), da = he((t, e) => {
  if (t !== void 0)
    throw new ae(e, "undefined", t);
});
function fa(t, e, i) {
  if (!Dn(i, t))
    throw new ae(e, `('${xn(i, "|")}')`, t);
}
const ca = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
function Nr(t, e) {
  if (typeof t > "u" || !Tn(ca, t))
    throw new ot(
      e,
      t,
      'must be an array or string of format "</styles.css>; rel=preload; as=style"'
    );
}
function ha(t) {
  if (typeof t == "string")
    return Nr(t, "hints"), t;
  if (Vi(t)) {
    const e = t.length;
    let i = "";
    if (e === 0)
      return i;
    for (let r = 0; r < e; r++) {
      const n = t[r];
      Nr(n, "hints"), i += n, r !== e - 1 && (i += ", ");
    }
    return i;
  }
  throw new ot(
    "hints",
    t,
    'must be an array or string of format "</styles.css>; rel=preload; as=style"'
  );
}
var _t = {
  isInt32: Vs,
  isUint32: Gs,
  parseFileMode: Ys,
  validateArray: Ot,
  validateStringArray: ta,
  validateBooleanArray: ia,
  validateAbortSignalArray: ra,
  validateBoolean: vn,
  validateBuffer: oa,
  validateDictionary: ea,
  validateEncoding: sa,
  validateFunction: la,
  validateInt32: zs,
  validateInteger: Ks,
  validateNumber: Qs,
  validateObject: Js,
  validateOneOf: Zs,
  validatePlainFunction: ua,
  validatePort: aa,
  validateSignalName: na,
  validateString: qi,
  validateUint32: Nn,
  validateUndefined: da,
  validateUnion: fa,
  validateAbortSignal: Cn,
  validateLinkHeaderValue: ha
}, Xi = { exports: {} };
const { SymbolAsyncIterator: vr, SymbolIterator: Cr, SymbolFor: He } = Z, In = He("nodejs.stream.destroyed"), $n = He("nodejs.stream.errored"), Ci = He("nodejs.stream.readable"), Ii = He("nodejs.stream.writable"), Pn = He("nodejs.stream.disturbed"), ba = He("nodejs.webstream.isClosedPromise"), pa = He("nodejs.webstream.controllerErrorFunction");
function Lt(t, e = !1) {
  var i;
  return !!(t && typeof t.pipe == "function" && typeof t.on == "function" && (!e || typeof t.pause == "function" && typeof t.resume == "function") && (!t._writableState || ((i = t._readableState) === null || i === void 0 ? void 0 : i.readable) !== !1) && // Duplex
  (!t._writableState || t._readableState));
}
function kt(t) {
  var e;
  return !!(t && typeof t.write == "function" && typeof t.on == "function" && (!t._readableState || ((e = t._writableState) === null || e === void 0 ? void 0 : e.writable) !== !1));
}
function _a(t) {
  return !!(t && typeof t.pipe == "function" && t._readableState && typeof t.on == "function" && typeof t.write == "function");
}
function ye(t) {
  return t && (t._readableState || t._writableState || typeof t.write == "function" && typeof t.on == "function" || typeof t.pipe == "function" && typeof t.on == "function");
}
function Mn(t) {
  return !!(t && !ye(t) && typeof t.pipeThrough == "function" && typeof t.getReader == "function" && typeof t.cancel == "function");
}
function On(t) {
  return !!(t && !ye(t) && typeof t.getWriter == "function" && typeof t.abort == "function");
}
function Ln(t) {
  return !!(t && !ye(t) && typeof t.readable == "object" && typeof t.writable == "object");
}
function ga(t) {
  return Mn(t) || On(t) || Ln(t);
}
function wa(t, e) {
  return t == null ? !1 : e === !0 ? typeof t[vr] == "function" : e === !1 ? typeof t[Cr] == "function" : typeof t[vr] == "function" || typeof t[Cr] == "function";
}
function Wt(t) {
  if (!ye(t))
    return null;
  const e = t._writableState, i = t._readableState, r = e || i;
  return !!(t.destroyed || t[In] || r != null && r.destroyed);
}
function kn(t) {
  if (!kt(t))
    return null;
  if (t.writableEnded === !0)
    return !0;
  const e = t._writableState;
  return e != null && e.errored ? !1 : typeof (e == null ? void 0 : e.ended) != "boolean" ? null : e.ended;
}
function ya(t, e) {
  if (!kt(t))
    return null;
  if (t.writableFinished === !0)
    return !0;
  const i = t._writableState;
  return i != null && i.errored ? !1 : typeof (i == null ? void 0 : i.finished) != "boolean" ? null : !!(i.finished || e === !1 && i.ended === !0 && i.length === 0);
}
function Sa(t) {
  if (!Lt(t))
    return null;
  if (t.readableEnded === !0)
    return !0;
  const e = t._readableState;
  return !e || e.errored ? !1 : typeof (e == null ? void 0 : e.ended) != "boolean" ? null : e.ended;
}
function Wn(t, e) {
  if (!Lt(t))
    return null;
  const i = t._readableState;
  return i != null && i.errored ? !1 : typeof (i == null ? void 0 : i.endEmitted) != "boolean" ? null : !!(i.endEmitted || e === !1 && i.ended === !0 && i.length === 0);
}
function jn(t) {
  return t && t[Ci] != null ? t[Ci] : typeof (t == null ? void 0 : t.readable) != "boolean" ? null : Wt(t) ? !1 : Lt(t) && t.readable && !Wn(t);
}
function Bn(t) {
  return t && t[Ii] != null ? t[Ii] : typeof (t == null ? void 0 : t.writable) != "boolean" ? null : Wt(t) ? !1 : kt(t) && t.writable && !kn(t);
}
function Ea(t, e) {
  return ye(t) ? Wt(t) ? !0 : !((e == null ? void 0 : e.readable) !== !1 && jn(t) || (e == null ? void 0 : e.writable) !== !1 && Bn(t)) : null;
}
function ma(t) {
  var e, i;
  return ye(t) ? t.writableErrored ? t.writableErrored : (e = (i = t._writableState) === null || i === void 0 ? void 0 : i.errored) !== null && e !== void 0 ? e : null : null;
}
function Ra(t) {
  var e, i;
  return ye(t) ? t.readableErrored ? t.readableErrored : (e = (i = t._readableState) === null || i === void 0 ? void 0 : i.errored) !== null && e !== void 0 ? e : null : null;
}
function Aa(t) {
  if (!ye(t))
    return null;
  if (typeof t.closed == "boolean")
    return t.closed;
  const e = t._writableState, i = t._readableState;
  return typeof (e == null ? void 0 : e.closed) == "boolean" || typeof (i == null ? void 0 : i.closed) == "boolean" ? (e == null ? void 0 : e.closed) || (i == null ? void 0 : i.closed) : typeof t._closed == "boolean" && Hn(t) ? t._closed : null;
}
function Hn(t) {
  return typeof t._closed == "boolean" && typeof t._defaultKeepAlive == "boolean" && typeof t._removedConnection == "boolean" && typeof t._removedContLen == "boolean";
}
function Un(t) {
  return typeof t._sent100 == "boolean" && Hn(t);
}
function Fa(t) {
  var e;
  return typeof t._consuming == "boolean" && typeof t._dumped == "boolean" && ((e = t.req) === null || e === void 0 ? void 0 : e.upgradeOrConnect) === void 0;
}
function Da(t) {
  if (!ye(t))
    return null;
  const e = t._writableState, i = t._readableState, r = e || i;
  return !r && Un(t) || !!(r && r.autoDestroy && r.emitClose && r.closed === !1);
}
function xa(t) {
  var e;
  return !!(t && ((e = t[Pn]) !== null && e !== void 0 ? e : t.readableDidRead || t.readableAborted));
}
function Ta(t) {
  var e, i, r, n, a, u, b, g, d, _;
  return !!(t && ((e = (i = (r = (n = (a = (u = t[$n]) !== null && u !== void 0 ? u : t.readableErrored) !== null && a !== void 0 ? a : t.writableErrored) !== null && n !== void 0 ? n : (b = t._readableState) === null || b === void 0 ? void 0 : b.errorEmitted) !== null && r !== void 0 ? r : (g = t._writableState) === null || g === void 0 ? void 0 : g.errorEmitted) !== null && i !== void 0 ? i : (d = t._readableState) === null || d === void 0 ? void 0 : d.errored) !== null && e !== void 0 ? e : !((_ = t._writableState) === null || _ === void 0) && _.errored));
}
var De = {
  isDestroyed: Wt,
  kIsDestroyed: In,
  isDisturbed: xa,
  kIsDisturbed: Pn,
  isErrored: Ta,
  kIsErrored: $n,
  isReadable: jn,
  kIsReadable: Ci,
  kIsClosedPromise: ba,
  kControllerErrorFunction: pa,
  kIsWritable: Ii,
  isClosed: Aa,
  isDuplexNodeStream: _a,
  isFinished: Ea,
  isIterable: wa,
  isReadableNodeStream: Lt,
  isReadableStream: Mn,
  isReadableEnded: Sa,
  isReadableFinished: Wn,
  isReadableErrored: Ra,
  isNodeStream: ye,
  isWebStream: ga,
  isWritable: Bn,
  isWritableNodeStream: kt,
  isWritableStream: On,
  isWritableEnded: kn,
  isWritableFinished: ya,
  isWritableErrored: ma,
  isServerRequest: Fa,
  isServerResponse: Un,
  willEmitClose: Da,
  isTransformStream: Ln
};
const Ne = Be, { AbortError: Vn, codes: Na } = fe, { ERR_INVALID_ARG_TYPE: va, ERR_STREAM_PREMATURE_CLOSE: Ir } = Na, { kEmptyObject: $i, once: Pi } = ue, { validateAbortSignal: Ca, validateFunction: Ia, validateObject: $a, validateBoolean: Pa } = _t, { Promise: Ma, PromisePrototypeThen: Oa, SymbolDispose: Gn } = Z, {
  isClosed: La,
  isReadable: $r,
  isReadableNodeStream: hi,
  isReadableStream: ka,
  isReadableFinished: Pr,
  isReadableErrored: Mr,
  isWritable: Or,
  isWritableNodeStream: Lr,
  isWritableStream: Wa,
  isWritableFinished: kr,
  isWritableErrored: Wr,
  isNodeStream: ja,
  willEmitClose: Ba,
  kIsClosedPromise: Ha
} = De;
let et;
function Ua(t) {
  return t.setHeader && typeof t.abort == "function";
}
const Mi = () => {
};
function qn(t, e, i) {
  var r, n;
  if (arguments.length === 2 ? (i = e, e = $i) : e == null ? e = $i : $a(e, "options"), Ia(i, "callback"), Ca(e.signal, "options.signal"), i = Pi(i), ka(t) || Wa(t))
    return Va(t, e, i);
  if (!ja(t))
    throw new va("stream", ["ReadableStream", "WritableStream", "Stream"], t);
  const a = (r = e.readable) !== null && r !== void 0 ? r : hi(t), u = (n = e.writable) !== null && n !== void 0 ? n : Lr(t), b = t._writableState, g = t._readableState, d = () => {
    t.writable || p();
  };
  let _ = Ba(t) && hi(t) === a && Lr(t) === u, l = kr(t, !1);
  const p = () => {
    l = !0, t.destroyed && (_ = !1), !(_ && (!t.readable || a)) && (!a || h) && i.call(t);
  };
  let h = Pr(t, !1);
  const F = () => {
    h = !0, t.destroyed && (_ = !1), !(_ && (!t.writable || u)) && (!u || l) && i.call(t);
  }, w = ($) => {
    i.call(t, $);
  };
  let A = La(t);
  const I = () => {
    A = !0;
    const $ = Wr(t) || Mr(t);
    if ($ && typeof $ != "boolean")
      return i.call(t, $);
    if (a && !h && hi(t, !0) && !Pr(t, !1))
      return i.call(t, new Ir());
    if (u && !l && !kr(t, !1))
      return i.call(t, new Ir());
    i.call(t);
  }, v = () => {
    A = !0;
    const $ = Wr(t) || Mr(t);
    if ($ && typeof $ != "boolean")
      return i.call(t, $);
    i.call(t);
  }, S = () => {
    t.req.on("finish", p);
  };
  Ua(t) ? (t.on("complete", p), _ || t.on("abort", I), t.req ? S() : t.on("request", S)) : u && !b && (t.on("end", d), t.on("close", d)), !_ && typeof t.aborted == "boolean" && t.on("aborted", I), t.on("end", F), t.on("finish", p), e.error !== !1 && t.on("error", w), t.on("close", I), A ? Ne.nextTick(I) : b != null && b.errorEmitted || g != null && g.errorEmitted ? _ || Ne.nextTick(v) : (!a && (!_ || $r(t)) && (l || Or(t) === !1) || !u && (!_ || Or(t)) && (h || $r(t) === !1) || g && t.req && t.aborted) && Ne.nextTick(v);
  const j = () => {
    i = Mi, t.removeListener("aborted", I), t.removeListener("complete", p), t.removeListener("abort", I), t.removeListener("request", S), t.req && t.req.removeListener("finish", p), t.removeListener("end", d), t.removeListener("close", d), t.removeListener("finish", p), t.removeListener("end", F), t.removeListener("error", w), t.removeListener("close", I);
  };
  if (e.signal && !A) {
    const $ = () => {
      const V = i;
      j(), V.call(
        t,
        new Vn(void 0, {
          cause: e.signal.reason
        })
      );
    };
    if (e.signal.aborted)
      Ne.nextTick($);
    else {
      et = et || ue.addAbortListener;
      const V = et(e.signal, $), ie = i;
      i = Pi((...H) => {
        V[Gn](), ie.apply(t, H);
      });
    }
  }
  return j;
}
function Va(t, e, i) {
  let r = !1, n = Mi;
  if (e.signal)
    if (n = () => {
      r = !0, i.call(
        t,
        new Vn(void 0, {
          cause: e.signal.reason
        })
      );
    }, e.signal.aborted)
      Ne.nextTick(n);
    else {
      et = et || ue.addAbortListener;
      const u = et(e.signal, n), b = i;
      i = Pi((...g) => {
        u[Gn](), b.apply(t, g);
      });
    }
  const a = (...u) => {
    r || Ne.nextTick(() => i.apply(t, u));
  };
  return Oa(t[Ha].promise, a, a), Mi;
}
function Ga(t, e) {
  var i;
  let r = !1;
  return e === null && (e = $i), (i = e) !== null && i !== void 0 && i.cleanup && (Pa(e.cleanup, "cleanup"), r = e.cleanup), new Ma((n, a) => {
    const u = qn(t, e, (b) => {
      r && u(), b ? a(b) : n();
    });
  });
}
Xi.exports = qn;
Xi.exports.finished = Ga;
var Ce = Xi.exports;
const ge = Be, {
  aggregateTwoErrors: qa,
  codes: { ERR_MULTIPLE_CALLBACK: Xa },
  AbortError: Ya
} = fe, { Symbol: Xn } = Z, { kIsDestroyed: Ka, isDestroyed: za, isFinished: Qa, isServerRequest: Za } = De, Yn = Xn("kDestroy"), Oi = Xn("kConstruct");
function Kn(t, e, i) {
  t && (t.stack, e && !e.errored && (e.errored = t), i && !i.errored && (i.errored = t));
}
function Ja(t, e) {
  const i = this._readableState, r = this._writableState, n = r || i;
  return r != null && r.destroyed || i != null && i.destroyed ? (typeof e == "function" && e(), this) : (Kn(t, r, i), r && (r.destroyed = !0), i && (i.destroyed = !0), n.constructed ? jr(this, t, e) : this.once(Yn, function(a) {
    jr(this, qa(a, t), e);
  }), this);
}
function jr(t, e, i) {
  let r = !1;
  function n(a) {
    if (r)
      return;
    r = !0;
    const u = t._readableState, b = t._writableState;
    Kn(a, b, u), b && (b.closed = !0), u && (u.closed = !0), typeof i == "function" && i(a), a ? ge.nextTick(el, t, a) : ge.nextTick(zn, t);
  }
  try {
    t._destroy(e || null, n);
  } catch (a) {
    n(a);
  }
}
function el(t, e) {
  Li(t, e), zn(t);
}
function zn(t) {
  const e = t._readableState, i = t._writableState;
  i && (i.closeEmitted = !0), e && (e.closeEmitted = !0), (i != null && i.emitClose || e != null && e.emitClose) && t.emit("close");
}
function Li(t, e) {
  const i = t._readableState, r = t._writableState;
  r != null && r.errorEmitted || i != null && i.errorEmitted || (r && (r.errorEmitted = !0), i && (i.errorEmitted = !0), t.emit("error", e));
}
function tl() {
  const t = this._readableState, e = this._writableState;
  t && (t.constructed = !0, t.closed = !1, t.closeEmitted = !1, t.destroyed = !1, t.errored = null, t.errorEmitted = !1, t.reading = !1, t.ended = t.readable === !1, t.endEmitted = t.readable === !1), e && (e.constructed = !0, e.destroyed = !1, e.closed = !1, e.closeEmitted = !1, e.errored = null, e.errorEmitted = !1, e.finalCalled = !1, e.prefinished = !1, e.ended = e.writable === !1, e.ending = e.writable === !1, e.finished = e.writable === !1);
}
function ki(t, e, i) {
  const r = t._readableState, n = t._writableState;
  if (n != null && n.destroyed || r != null && r.destroyed)
    return this;
  r != null && r.autoDestroy || n != null && n.autoDestroy ? t.destroy(e) : e && (e.stack, n && !n.errored && (n.errored = e), r && !r.errored && (r.errored = e), i ? ge.nextTick(Li, t, e) : Li(t, e));
}
function il(t, e) {
  if (typeof t._construct != "function")
    return;
  const i = t._readableState, r = t._writableState;
  i && (i.constructed = !1), r && (r.constructed = !1), t.once(Oi, e), !(t.listenerCount(Oi) > 1) && ge.nextTick(rl, t);
}
function rl(t) {
  let e = !1;
  function i(r) {
    if (e) {
      ki(t, r ?? new Xa());
      return;
    }
    e = !0;
    const n = t._readableState, a = t._writableState, u = a || n;
    n && (n.constructed = !0), a && (a.constructed = !0), u.destroyed ? t.emit(Yn, r) : r ? ki(t, r, !0) : ge.nextTick(nl, t);
  }
  try {
    t._construct((r) => {
      ge.nextTick(i, r);
    });
  } catch (r) {
    ge.nextTick(i, r);
  }
}
function nl(t) {
  t.emit(Oi);
}
function Br(t) {
  return (t == null ? void 0 : t.setHeader) && typeof t.abort == "function";
}
function Qn(t) {
  t.emit("close");
}
function ol(t, e) {
  t.emit("error", e), ge.nextTick(Qn, t);
}
function sl(t, e) {
  !t || za(t) || (!e && !Qa(t) && (e = new Ya()), Za(t) ? (t.socket = null, t.destroy(e)) : Br(t) ? t.abort() : Br(t.req) ? t.req.abort() : typeof t.destroy == "function" ? t.destroy(e) : typeof t.close == "function" ? t.close() : e ? ge.nextTick(ol, t, e) : ge.nextTick(Qn, t), t.destroyed || (t[Ka] = !0));
}
var st = {
  construct: il,
  destroyer: sl,
  destroy: Ja,
  undestroy: tl,
  errorOrDestroy: ki
};
const { ArrayIsArray: al, ObjectSetPrototypeOf: Zn } = Z, { EventEmitter: jt } = Pt;
function Bt(t) {
  jt.call(this, t);
}
Zn(Bt.prototype, jt.prototype);
Zn(Bt, jt);
Bt.prototype.pipe = function(t, e) {
  const i = this;
  function r(_) {
    t.writable && t.write(_) === !1 && i.pause && i.pause();
  }
  i.on("data", r);
  function n() {
    i.readable && i.resume && i.resume();
  }
  t.on("drain", n), !t._isStdio && (!e || e.end !== !1) && (i.on("end", u), i.on("close", b));
  let a = !1;
  function u() {
    a || (a = !0, t.end());
  }
  function b() {
    a || (a = !0, typeof t.destroy == "function" && t.destroy());
  }
  function g(_) {
    d(), jt.listenerCount(this, "error") === 0 && this.emit("error", _);
  }
  Wi(i, "error", g), Wi(t, "error", g);
  function d() {
    i.removeListener("data", r), t.removeListener("drain", n), i.removeListener("end", u), i.removeListener("close", b), i.removeListener("error", g), t.removeListener("error", g), i.removeListener("end", d), i.removeListener("close", d), t.removeListener("close", d);
  }
  return i.on("end", d), i.on("close", d), t.on("close", d), t.emit("pipe", i), t;
};
function Wi(t, e, i) {
  if (typeof t.prependListener == "function")
    return t.prependListener(e, i);
  !t._events || !t._events[e] ? t.on(e, i) : al(t._events[e]) ? t._events[e].unshift(i) : t._events[e] = [i, t._events[e]];
}
var Yi = {
  Stream: Bt,
  prependListener: Wi
}, Jn = { exports: {} };
(function(t) {
  const { SymbolDispose: e } = Z, { AbortError: i, codes: r } = fe, { isNodeStream: n, isWebStream: a, kControllerErrorFunction: u } = De, b = Ce, { ERR_INVALID_ARG_TYPE: g } = r;
  let d;
  const _ = (l, p) => {
    if (typeof l != "object" || !("aborted" in l))
      throw new g(p, "AbortSignal", l);
  };
  t.exports.addAbortSignal = function(p, h) {
    if (_(p, "signal"), !n(h) && !a(h))
      throw new g("stream", ["ReadableStream", "WritableStream", "Stream"], h);
    return t.exports.addAbortSignalNoValidate(p, h);
  }, t.exports.addAbortSignalNoValidate = function(l, p) {
    if (typeof l != "object" || !("aborted" in l))
      return p;
    const h = n(p) ? () => {
      p.destroy(
        new i(void 0, {
          cause: l.reason
        })
      );
    } : () => {
      p[u](
        new i(void 0, {
          cause: l.reason
        })
      );
    };
    if (l.aborted)
      h();
    else {
      d = d || ue.addAbortListener;
      const F = d(l, h);
      b(p, F[e]);
    }
    return p;
  };
})(Jn);
var Ht = Jn.exports;
const { StringPrototypeSlice: Hr, SymbolIterator: ll, TypedArrayPrototypeSet: Ft, Uint8Array: ul } = Z, { Buffer: bi } = je, { inspect: dl } = ue;
var fl = class {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  push(e) {
    const i = {
      data: e,
      next: null
    };
    this.length > 0 ? this.tail.next = i : this.head = i, this.tail = i, ++this.length;
  }
  unshift(e) {
    const i = {
      data: e,
      next: this.head
    };
    this.length === 0 && (this.tail = i), this.head = i, ++this.length;
  }
  shift() {
    if (this.length === 0)
      return;
    const e = this.head.data;
    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
  }
  clear() {
    this.head = this.tail = null, this.length = 0;
  }
  join(e) {
    if (this.length === 0)
      return "";
    let i = this.head, r = "" + i.data;
    for (; (i = i.next) !== null; )
      r += e + i.data;
    return r;
  }
  concat(e) {
    if (this.length === 0)
      return bi.alloc(0);
    const i = bi.allocUnsafe(e >>> 0);
    let r = this.head, n = 0;
    for (; r; )
      Ft(i, r.data, n), n += r.data.length, r = r.next;
    return i;
  }
  // Consumes a specified amount of bytes or characters from the buffered data.
  consume(e, i) {
    const r = this.head.data;
    if (e < r.length) {
      const n = r.slice(0, e);
      return this.head.data = r.slice(e), n;
    }
    return e === r.length ? this.shift() : i ? this._getString(e) : this._getBuffer(e);
  }
  first() {
    return this.head.data;
  }
  *[ll]() {
    for (let e = this.head; e; e = e.next)
      yield e.data;
  }
  // Consumes a specified amount of characters from the buffered data.
  _getString(e) {
    let i = "", r = this.head, n = 0;
    do {
      const a = r.data;
      if (e > a.length)
        i += a, e -= a.length;
      else {
        e === a.length ? (i += a, ++n, r.next ? this.head = r.next : this.head = this.tail = null) : (i += Hr(a, 0, e), this.head = r, r.data = Hr(a, e));
        break;
      }
      ++n;
    } while ((r = r.next) !== null);
    return this.length -= n, i;
  }
  // Consumes a specified amount of bytes from the buffered data.
  _getBuffer(e) {
    const i = bi.allocUnsafe(e), r = e;
    let n = this.head, a = 0;
    do {
      const u = n.data;
      if (e > u.length)
        Ft(i, u, r - e), e -= u.length;
      else {
        e === u.length ? (Ft(i, u, r - e), ++a, n.next ? this.head = n.next : this.head = this.tail = null) : (Ft(i, new ul(u.buffer, u.byteOffset, e), r - e), this.head = n, n.data = u.slice(e));
        break;
      }
      ++a;
    } while ((n = n.next) !== null);
    return this.length -= a, i;
  }
  // Make sure the linked list only shows the minimal necessary information.
  [Symbol.for("nodejs.util.inspect.custom")](e, i) {
    return dl(this, {
      ...i,
      // Only inspect one level.
      depth: 0,
      // It should not recurse.
      customInspect: !1
    });
  }
};
const { MathFloor: cl, NumberIsInteger: hl } = Z, { validateInteger: bl } = _t, { ERR_INVALID_ARG_VALUE: pl } = fe.codes;
let eo = 16 * 1024, to = 16;
function _l(t, e, i) {
  return t.highWaterMark != null ? t.highWaterMark : e ? t[i] : null;
}
function io(t) {
  return t ? to : eo;
}
function gl(t, e) {
  bl(e, "value", 0), t ? to = e : eo = e;
}
function wl(t, e, i, r) {
  const n = _l(e, r, i);
  if (n != null) {
    if (!hl(n) || n < 0) {
      const a = r ? `options.${i}` : "options.highWaterMark";
      throw new pl(a, n);
    }
    return cl(n);
  }
  return io(t.objectMode);
}
var Ut = {
  getHighWaterMark: wl,
  getDefaultHighWaterMark: io,
  setDefaultHighWaterMark: gl
};
const Ur = Be, { PromisePrototypeThen: yl, SymbolAsyncIterator: Vr, SymbolIterator: Gr } = Z, { Buffer: Sl } = je, { ERR_INVALID_ARG_TYPE: El, ERR_STREAM_NULL_VALUES: ml } = fe.codes;
function Rl(t, e, i) {
  let r;
  if (typeof e == "string" || e instanceof Sl)
    return new t({
      objectMode: !0,
      ...i,
      read() {
        this.push(e), this.push(null);
      }
    });
  let n;
  if (e && e[Vr])
    n = !0, r = e[Vr]();
  else if (e && e[Gr])
    n = !1, r = e[Gr]();
  else
    throw new El("iterable", ["Iterable"], e);
  const a = new t({
    objectMode: !0,
    highWaterMark: 1,
    // TODO(ronag): What options should be allowed?
    ...i
  });
  let u = !1;
  a._read = function() {
    u || (u = !0, g());
  }, a._destroy = function(d, _) {
    yl(
      b(d),
      () => Ur.nextTick(_, d),
      // nextTick is here in case cb throws
      (l) => Ur.nextTick(_, l || d)
    );
  };
  async function b(d) {
    const _ = d != null, l = typeof r.throw == "function";
    if (_ && l) {
      const { value: p, done: h } = await r.throw(d);
      if (await p, h)
        return;
    }
    if (typeof r.return == "function") {
      const { value: p } = await r.return();
      await p;
    }
  }
  async function g() {
    for (; ; ) {
      try {
        const { value: d, done: _ } = n ? await r.next() : r.next();
        if (_)
          a.push(null);
        else {
          const l = d && typeof d.then == "function" ? await d : d;
          if (l === null)
            throw u = !1, new ml();
          if (a.push(l))
            continue;
          u = !1;
        }
      } catch (d) {
        a.destroy(d);
      }
      break;
    }
  }
  return a;
}
var ro = Rl, pi, qr;
function Vt() {
  if (qr)
    return pi;
  qr = 1;
  const t = Be, {
    ArrayPrototypeIndexOf: e,
    NumberIsInteger: i,
    NumberIsNaN: r,
    NumberParseInt: n,
    ObjectDefineProperties: a,
    ObjectKeys: u,
    ObjectSetPrototypeOf: b,
    Promise: g,
    SafeSet: d,
    SymbolAsyncDispose: _,
    SymbolAsyncIterator: l,
    Symbol: p
  } = Z;
  pi = C, C.ReadableState = Ee;
  const { EventEmitter: h } = Pt, { Stream: F, prependListener: w } = Yi, { Buffer: A } = je, { addAbortSignal: I } = Ht, v = Ce;
  let S = ue.debuglog("stream", (o) => {
    S = o;
  });
  const j = fl, $ = st, { getHighWaterMark: V, getDefaultHighWaterMark: ie } = Ut, {
    aggregateTwoErrors: H,
    codes: {
      ERR_INVALID_ARG_TYPE: q,
      ERR_METHOD_NOT_IMPLEMENTED: re,
      ERR_OUT_OF_RANGE: te,
      ERR_STREAM_PUSH_AFTER_EOF: O,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT: E
    },
    AbortError: k
  } = fe, { validateObject: P } = _t, M = p("kPaused"), { StringDecoder: X } = vo(), Q = ro;
  b(C.prototype, F.prototype), b(C, F);
  const Y = () => {
  }, { errorOrDestroy: K } = $, W = 1, Se = 2, N = 4, J = 8, pe = 16, Ge = 32, qe = 64, Xe = 128, at = 256, Xt = 512, lt = 1024, Ye = 2048, f = 4096, c = 8192, y = 16384, x = 32768, T = 65536, U = 1 << 17, z = 1 << 18;
  function B(o) {
    return {
      enumerable: !1,
      get() {
        return (this.state & o) !== 0;
      },
      set(s) {
        s ? this.state |= o : this.state &= ~o;
      }
    };
  }
  a(Ee.prototype, {
    objectMode: B(W),
    ended: B(Se),
    endEmitted: B(N),
    reading: B(J),
    // Stream is still being constructed and cannot be
    // destroyed until construction finished or failed.
    // Async construction is opt in, therefore we start as
    // constructed.
    constructed: B(pe),
    // A flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    sync: B(Ge),
    // Whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    needReadable: B(qe),
    emittedReadable: B(Xe),
    readableListening: B(at),
    resumeScheduled: B(Xt),
    // True if the error was already emitted and should not be thrown again.
    errorEmitted: B(lt),
    emitClose: B(Ye),
    autoDestroy: B(f),
    // Has it been destroyed.
    destroyed: B(c),
    // Indicates whether the stream has finished destroying.
    closed: B(y),
    // True if close has been emitted or would have been emitted
    // depending on emitClose.
    closeEmitted: B(x),
    multiAwaitDrain: B(T),
    // If true, a maybeReadMore has been scheduled.
    readingMore: B(U),
    dataEmitted: B(z)
  });
  function Ee(o, s, m) {
    typeof m != "boolean" && (m = s instanceof Ae()), this.state = Ye | f | pe | Ge, o && o.objectMode && (this.state |= W), m && o && o.readableObjectMode && (this.state |= W), this.highWaterMark = o ? V(this, o, "readableHighWaterMark", m) : ie(!1), this.buffer = new j(), this.length = 0, this.pipes = [], this.flowing = null, this[M] = null, o && o.emitClose === !1 && (this.state &= ~Ye), o && o.autoDestroy === !1 && (this.state &= ~f), this.errored = null, this.defaultEncoding = o && o.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.decoder = null, this.encoding = null, o && o.encoding && (this.decoder = new X(o.encoding), this.encoding = o.encoding);
  }
  function C(o) {
    if (!(this instanceof C))
      return new C(o);
    const s = this instanceof Ae();
    this._readableState = new Ee(o, this, s), o && (typeof o.read == "function" && (this._read = o.read), typeof o.destroy == "function" && (this._destroy = o.destroy), typeof o.construct == "function" && (this._construct = o.construct), o.signal && !s && I(o.signal, this)), F.call(this, o), $.construct(this, () => {
      this._readableState.needReadable && yt(this, this._readableState);
    });
  }
  C.prototype.destroy = $.destroy, C.prototype._undestroy = $.undestroy, C.prototype._destroy = function(o, s) {
    s(o);
  }, C.prototype[h.captureRejectionSymbol] = function(o) {
    this.destroy(o);
  }, C.prototype[_] = function() {
    let o;
    return this.destroyed || (o = this.readableEnded ? null : new k(), this.destroy(o)), new g((s, m) => v(this, (R) => R && R !== o ? m(R) : s(null)));
  }, C.prototype.push = function(o, s) {
    return xe(this, o, s, !1);
  }, C.prototype.unshift = function(o, s) {
    return xe(this, o, s, !0);
  };
  function xe(o, s, m, R) {
    S("readableAddChunk", s);
    const D = o._readableState;
    let se;
    if (D.state & W || (typeof s == "string" ? (m = m || D.defaultEncoding, D.encoding !== m && (R && D.encoding ? s = A.from(s, m).toString(D.encoding) : (s = A.from(s, m), m = ""))) : s instanceof A ? m = "" : F._isUint8Array(s) ? (s = F._uint8ArrayToBuffer(s), m = "") : s != null && (se = new q("chunk", ["string", "Buffer", "Uint8Array"], s))), se)
      K(o, se);
    else if (s === null)
      D.state &= ~J, So(o, D);
    else if (D.state & W || s && s.length > 0)
      if (R)
        if (D.state & N)
          K(o, new E());
        else {
          if (D.destroyed || D.errored)
            return !1;
          Yt(o, D, s, !0);
        }
      else if (D.ended)
        K(o, new O());
      else {
        if (D.destroyed || D.errored)
          return !1;
        D.state &= ~J, D.decoder && !m ? (s = D.decoder.write(s), D.objectMode || s.length !== 0 ? Yt(o, D, s, !1) : yt(o, D)) : Yt(o, D, s, !1);
      }
    else
      R || (D.state &= ~J, yt(o, D));
    return !D.ended && (D.length < D.highWaterMark || D.length === 0);
  }
  function Yt(o, s, m, R) {
    s.flowing && s.length === 0 && !s.sync && o.listenerCount("data") > 0 ? (s.state & T ? s.awaitDrainWriters.clear() : s.awaitDrainWriters = null, s.dataEmitted = !0, o.emit("data", m)) : (s.length += s.objectMode ? 1 : m.length, R ? s.buffer.unshift(m) : s.buffer.push(m), s.state & qe && wt(o)), yt(o, s);
  }
  C.prototype.isPaused = function() {
    const o = this._readableState;
    return o[M] === !0 || o.flowing === !1;
  }, C.prototype.setEncoding = function(o) {
    const s = new X(o);
    this._readableState.decoder = s, this._readableState.encoding = this._readableState.decoder.encoding;
    const m = this._readableState.buffer;
    let R = "";
    for (const D of m)
      R += s.write(D);
    return m.clear(), R !== "" && m.push(R), this._readableState.length = R.length, this;
  };
  const wo = 1073741824;
  function yo(o) {
    if (o > wo)
      throw new te("size", "<= 1GiB", o);
    return o--, o |= o >>> 1, o |= o >>> 2, o |= o >>> 4, o |= o >>> 8, o |= o >>> 16, o++, o;
  }
  function er(o, s) {
    return o <= 0 || s.length === 0 && s.ended ? 0 : s.state & W ? 1 : r(o) ? s.flowing && s.length ? s.buffer.first().length : s.length : o <= s.length ? o : s.ended ? s.length : 0;
  }
  C.prototype.read = function(o) {
    S("read", o), o === void 0 ? o = NaN : i(o) || (o = n(o, 10));
    const s = this._readableState, m = o;
    if (o > s.highWaterMark && (s.highWaterMark = yo(o)), o !== 0 && (s.state &= ~Xe), o === 0 && s.needReadable && ((s.highWaterMark !== 0 ? s.length >= s.highWaterMark : s.length > 0) || s.ended))
      return S("read: emitReadable", s.length, s.ended), s.length === 0 && s.ended ? Kt(this) : wt(this), null;
    if (o = er(o, s), o === 0 && s.ended)
      return s.length === 0 && Kt(this), null;
    let R = (s.state & qe) !== 0;
    if (S("need readable", R), (s.length === 0 || s.length - o < s.highWaterMark) && (R = !0, S("length less than watermark", R)), s.ended || s.reading || s.destroyed || s.errored || !s.constructed)
      R = !1, S("reading, ended or constructing", R);
    else if (R) {
      S("do read"), s.state |= J | Ge, s.length === 0 && (s.state |= qe);
      try {
        this._read(s.highWaterMark);
      } catch (se) {
        K(this, se);
      }
      s.state &= ~Ge, s.reading || (o = er(m, s));
    }
    let D;
    return o > 0 ? D = or(o, s) : D = null, D === null ? (s.needReadable = s.length <= s.highWaterMark, o = 0) : (s.length -= o, s.multiAwaitDrain ? s.awaitDrainWriters.clear() : s.awaitDrainWriters = null), s.length === 0 && (s.ended || (s.needReadable = !0), m !== o && s.ended && Kt(this)), D !== null && !s.errorEmitted && !s.closeEmitted && (s.dataEmitted = !0, this.emit("data", D)), D;
  };
  function So(o, s) {
    if (S("onEofChunk"), !s.ended) {
      if (s.decoder) {
        const m = s.decoder.end();
        m && m.length && (s.buffer.push(m), s.length += s.objectMode ? 1 : m.length);
      }
      s.ended = !0, s.sync ? wt(o) : (s.needReadable = !1, s.emittedReadable = !0, tr(o));
    }
  }
  function wt(o) {
    const s = o._readableState;
    S("emitReadable", s.needReadable, s.emittedReadable), s.needReadable = !1, s.emittedReadable || (S("emitReadable", s.flowing), s.emittedReadable = !0, t.nextTick(tr, o));
  }
  function tr(o) {
    const s = o._readableState;
    S("emitReadable_", s.destroyed, s.length, s.ended), !s.destroyed && !s.errored && (s.length || s.ended) && (o.emit("readable"), s.emittedReadable = !1), s.needReadable = !s.flowing && !s.ended && s.length <= s.highWaterMark, rr(o);
  }
  function yt(o, s) {
    !s.readingMore && s.constructed && (s.readingMore = !0, t.nextTick(Eo, o, s));
  }
  function Eo(o, s) {
    for (; !s.reading && !s.ended && (s.length < s.highWaterMark || s.flowing && s.length === 0); ) {
      const m = s.length;
      if (S("maybeReadMore read 0"), o.read(0), m === s.length)
        break;
    }
    s.readingMore = !1;
  }
  C.prototype._read = function(o) {
    throw new re("_read()");
  }, C.prototype.pipe = function(o, s) {
    const m = this, R = this._readableState;
    R.pipes.length === 1 && (R.multiAwaitDrain || (R.multiAwaitDrain = !0, R.awaitDrainWriters = new d(R.awaitDrainWriters ? [R.awaitDrainWriters] : []))), R.pipes.push(o), S("pipe count=%d opts=%j", R.pipes.length, s);
    const se = (!s || s.end !== !1) && o !== t.stdout && o !== t.stderr ? ar : ut;
    R.endEmitted ? t.nextTick(se) : m.once("end", se), o.on("unpipe", ce);
    function ce($e, me) {
      S("onunpipe"), $e === m && me && me.hasUnpiped === !1 && (me.hasUnpiped = !0, No());
    }
    function ar() {
      S("onend"), o.end();
    }
    let Ie, lr = !1;
    function No() {
      S("cleanup"), o.removeListener("close", Zt), o.removeListener("finish", Jt), Ie && o.removeListener("drain", Ie), o.removeListener("error", Qt), o.removeListener("unpipe", ce), m.removeListener("end", ar), m.removeListener("end", ut), m.removeListener("data", dr), lr = !0, Ie && R.awaitDrainWriters && (!o._writableState || o._writableState.needDrain) && Ie();
    }
    function ur() {
      lr || (R.pipes.length === 1 && R.pipes[0] === o ? (S("false write response, pause", 0), R.awaitDrainWriters = o, R.multiAwaitDrain = !1) : R.pipes.length > 1 && R.pipes.includes(o) && (S("false write response, pause", R.awaitDrainWriters.size), R.awaitDrainWriters.add(o)), m.pause()), Ie || (Ie = mo(m, o), o.on("drain", Ie));
    }
    m.on("data", dr);
    function dr($e) {
      S("ondata");
      const me = o.write($e);
      S("dest.write", me), me === !1 && ur();
    }
    function Qt($e) {
      if (S("onerror", $e), ut(), o.removeListener("error", Qt), o.listenerCount("error") === 0) {
        const me = o._writableState || o._readableState;
        me && !me.errorEmitted ? K(o, $e) : o.emit("error", $e);
      }
    }
    w(o, "error", Qt);
    function Zt() {
      o.removeListener("finish", Jt), ut();
    }
    o.once("close", Zt);
    function Jt() {
      S("onfinish"), o.removeListener("close", Zt), ut();
    }
    o.once("finish", Jt);
    function ut() {
      S("unpipe"), m.unpipe(o);
    }
    return o.emit("pipe", m), o.writableNeedDrain === !0 ? ur() : R.flowing || (S("pipe resume"), m.resume()), o;
  };
  function mo(o, s) {
    return function() {
      const R = o._readableState;
      R.awaitDrainWriters === s ? (S("pipeOnDrain", 1), R.awaitDrainWriters = null) : R.multiAwaitDrain && (S("pipeOnDrain", R.awaitDrainWriters.size), R.awaitDrainWriters.delete(s)), (!R.awaitDrainWriters || R.awaitDrainWriters.size === 0) && o.listenerCount("data") && o.resume();
    };
  }
  C.prototype.unpipe = function(o) {
    const s = this._readableState, m = {
      hasUnpiped: !1
    };
    if (s.pipes.length === 0)
      return this;
    if (!o) {
      const D = s.pipes;
      s.pipes = [], this.pause();
      for (let se = 0; se < D.length; se++)
        D[se].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    const R = e(s.pipes, o);
    return R === -1 ? this : (s.pipes.splice(R, 1), s.pipes.length === 0 && this.pause(), o.emit("unpipe", this, m), this);
  }, C.prototype.on = function(o, s) {
    const m = F.prototype.on.call(this, o, s), R = this._readableState;
    return o === "data" ? (R.readableListening = this.listenerCount("readable") > 0, R.flowing !== !1 && this.resume()) : o === "readable" && !R.endEmitted && !R.readableListening && (R.readableListening = R.needReadable = !0, R.flowing = !1, R.emittedReadable = !1, S("on readable", R.length, R.reading), R.length ? wt(this) : R.reading || t.nextTick(Ro, this)), m;
  }, C.prototype.addListener = C.prototype.on, C.prototype.removeListener = function(o, s) {
    const m = F.prototype.removeListener.call(this, o, s);
    return o === "readable" && t.nextTick(ir, this), m;
  }, C.prototype.off = C.prototype.removeListener, C.prototype.removeAllListeners = function(o) {
    const s = F.prototype.removeAllListeners.apply(this, arguments);
    return (o === "readable" || o === void 0) && t.nextTick(ir, this), s;
  };
  function ir(o) {
    const s = o._readableState;
    s.readableListening = o.listenerCount("readable") > 0, s.resumeScheduled && s[M] === !1 ? s.flowing = !0 : o.listenerCount("data") > 0 ? o.resume() : s.readableListening || (s.flowing = null);
  }
  function Ro(o) {
    S("readable nexttick read 0"), o.read(0);
  }
  C.prototype.resume = function() {
    const o = this._readableState;
    return o.flowing || (S("resume"), o.flowing = !o.readableListening, Ao(this, o)), o[M] = !1, this;
  };
  function Ao(o, s) {
    s.resumeScheduled || (s.resumeScheduled = !0, t.nextTick(Fo, o, s));
  }
  function Fo(o, s) {
    S("resume", s.reading), s.reading || o.read(0), s.resumeScheduled = !1, o.emit("resume"), rr(o), s.flowing && !s.reading && o.read(0);
  }
  C.prototype.pause = function() {
    return S("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (S("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[M] = !0, this;
  };
  function rr(o) {
    const s = o._readableState;
    for (S("flow", s.flowing); s.flowing && o.read() !== null; )
      ;
  }
  C.prototype.wrap = function(o) {
    let s = !1;
    o.on("data", (R) => {
      !this.push(R) && o.pause && (s = !0, o.pause());
    }), o.on("end", () => {
      this.push(null);
    }), o.on("error", (R) => {
      K(this, R);
    }), o.on("close", () => {
      this.destroy();
    }), o.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      s && o.resume && (s = !1, o.resume());
    };
    const m = u(o);
    for (let R = 1; R < m.length; R++) {
      const D = m[R];
      this[D] === void 0 && typeof o[D] == "function" && (this[D] = o[D].bind(o));
    }
    return this;
  }, C.prototype[l] = function() {
    return nr(this);
  }, C.prototype.iterator = function(o) {
    return o !== void 0 && P(o, "options"), nr(this, o);
  };
  function nr(o, s) {
    typeof o.read != "function" && (o = C.wrap(o, {
      objectMode: !0
    }));
    const m = Do(o, s);
    return m.stream = o, m;
  }
  async function* Do(o, s) {
    let m = Y;
    function R(ce) {
      this === o ? (m(), m = Y) : m = ce;
    }
    o.on("readable", R);
    let D;
    const se = v(
      o,
      {
        writable: !1
      },
      (ce) => {
        D = ce ? H(D, ce) : null, m(), m = Y;
      }
    );
    try {
      for (; ; ) {
        const ce = o.destroyed ? null : o.read();
        if (ce !== null)
          yield ce;
        else {
          if (D)
            throw D;
          if (D === null)
            return;
          await new g(R);
        }
      }
    } catch (ce) {
      throw D = H(D, ce), D;
    } finally {
      (D || (s == null ? void 0 : s.destroyOnReturn) !== !1) && (D === void 0 || o._readableState.autoDestroy) ? $.destroyer(o, null) : (o.off("readable", R), se());
    }
  }
  a(C.prototype, {
    readable: {
      __proto__: null,
      get() {
        const o = this._readableState;
        return !!o && o.readable !== !1 && !o.destroyed && !o.errorEmitted && !o.endEmitted;
      },
      set(o) {
        this._readableState && (this._readableState.readable = !!o);
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
      set: function(o) {
        this._readableState && (this._readableState.flowing = o);
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
      set(o) {
        this._readableState && (this._readableState.destroyed = o);
      }
    },
    readableEnded: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.endEmitted : !1;
      }
    }
  }), a(Ee.prototype, {
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
        return this[M] !== !1;
      },
      set(o) {
        this[M] = !!o;
      }
    }
  }), C._fromList = or;
  function or(o, s) {
    if (s.length === 0)
      return null;
    let m;
    return s.objectMode ? m = s.buffer.shift() : !o || o >= s.length ? (s.decoder ? m = s.buffer.join("") : s.buffer.length === 1 ? m = s.buffer.first() : m = s.buffer.concat(s.length), s.buffer.clear()) : m = s.buffer.consume(o, s.decoder), m;
  }
  function Kt(o) {
    const s = o._readableState;
    S("endReadable", s.endEmitted), s.endEmitted || (s.ended = !0, t.nextTick(xo, s, o));
  }
  function xo(o, s) {
    if (S("endReadableNT", o.endEmitted, o.length), !o.errored && !o.closeEmitted && !o.endEmitted && o.length === 0) {
      if (o.endEmitted = !0, s.emit("end"), s.writable && s.allowHalfOpen === !1)
        t.nextTick(To, s);
      else if (o.autoDestroy) {
        const m = s._writableState;
        (!m || m.autoDestroy && // We don't expect the writable to ever 'finish'
        // if writable is explicitly set to false.
        (m.finished || m.writable === !1)) && s.destroy();
      }
    }
  }
  function To(o) {
    o.writable && !o.writableEnded && !o.destroyed && o.end();
  }
  C.from = function(o, s) {
    return Q(C, o, s);
  };
  let zt;
  function sr() {
    return zt === void 0 && (zt = {}), zt;
  }
  return C.fromWeb = function(o, s) {
    return sr().newStreamReadableFromReadableStream(o, s);
  }, C.toWeb = function(o, s) {
    return sr().newReadableStreamFromStreamReadable(o, s);
  }, C.wrap = function(o, s) {
    var m, R;
    return new C({
      objectMode: (m = (R = o.readableObjectMode) !== null && R !== void 0 ? R : o.objectMode) !== null && m !== void 0 ? m : !0,
      ...s,
      destroy(D, se) {
        $.destroyer(o, D), se(D);
      }
    }).wrap(o);
  }, pi;
}
var _i, Xr;
function Ki() {
  if (Xr)
    return _i;
  Xr = 1;
  const t = Be, {
    ArrayPrototypeSlice: e,
    Error: i,
    FunctionPrototypeSymbolHasInstance: r,
    ObjectDefineProperty: n,
    ObjectDefineProperties: a,
    ObjectSetPrototypeOf: u,
    StringPrototypeToLowerCase: b,
    Symbol: g,
    SymbolHasInstance: d
  } = Z;
  _i = P, P.WritableState = E;
  const { EventEmitter: _ } = Pt, l = Yi.Stream, { Buffer: p } = je, h = st, { addAbortSignal: F } = Ht, { getHighWaterMark: w, getDefaultHighWaterMark: A } = Ut, {
    ERR_INVALID_ARG_TYPE: I,
    ERR_METHOD_NOT_IMPLEMENTED: v,
    ERR_MULTIPLE_CALLBACK: S,
    ERR_STREAM_CANNOT_PIPE: j,
    ERR_STREAM_DESTROYED: $,
    ERR_STREAM_ALREADY_FINISHED: V,
    ERR_STREAM_NULL_VALUES: ie,
    ERR_STREAM_WRITE_AFTER_END: H,
    ERR_UNKNOWN_ENCODING: q
  } = fe.codes, { errorOrDestroy: re } = h;
  u(P.prototype, l.prototype), u(P, l);
  function te() {
  }
  const O = g("kOnFinished");
  function E(f, c, y) {
    typeof y != "boolean" && (y = c instanceof Ae()), this.objectMode = !!(f && f.objectMode), y && (this.objectMode = this.objectMode || !!(f && f.writableObjectMode)), this.highWaterMark = f ? w(this, f, "writableHighWaterMark", y) : A(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    const x = !!(f && f.decodeStrings === !1);
    this.decodeStrings = !x, this.defaultEncoding = f && f.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = K.bind(void 0, c), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, k(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !f || f.emitClose !== !1, this.autoDestroy = !f || f.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[O] = [];
  }
  function k(f) {
    f.buffered = [], f.bufferedIndex = 0, f.allBuffers = !0, f.allNoop = !0;
  }
  E.prototype.getBuffer = function() {
    return e(this.buffered, this.bufferedIndex);
  }, n(E.prototype, "bufferedRequestCount", {
    __proto__: null,
    get() {
      return this.buffered.length - this.bufferedIndex;
    }
  });
  function P(f) {
    const c = this instanceof Ae();
    if (!c && !r(P, this))
      return new P(f);
    this._writableState = new E(f, this, c), f && (typeof f.write == "function" && (this._write = f.write), typeof f.writev == "function" && (this._writev = f.writev), typeof f.destroy == "function" && (this._destroy = f.destroy), typeof f.final == "function" && (this._final = f.final), typeof f.construct == "function" && (this._construct = f.construct), f.signal && F(f.signal, this)), l.call(this, f), h.construct(this, () => {
      const y = this._writableState;
      y.writing || J(this, y), Xe(this, y);
    });
  }
  n(P, d, {
    __proto__: null,
    value: function(f) {
      return r(this, f) ? !0 : this !== P ? !1 : f && f._writableState instanceof E;
    }
  }), P.prototype.pipe = function() {
    re(this, new j());
  };
  function M(f, c, y, x) {
    const T = f._writableState;
    if (typeof y == "function")
      x = y, y = T.defaultEncoding;
    else {
      if (!y)
        y = T.defaultEncoding;
      else if (y !== "buffer" && !p.isEncoding(y))
        throw new q(y);
      typeof x != "function" && (x = te);
    }
    if (c === null)
      throw new ie();
    if (!T.objectMode)
      if (typeof c == "string")
        T.decodeStrings !== !1 && (c = p.from(c, y), y = "buffer");
      else if (c instanceof p)
        y = "buffer";
      else if (l._isUint8Array(c))
        c = l._uint8ArrayToBuffer(c), y = "buffer";
      else
        throw new I("chunk", ["string", "Buffer", "Uint8Array"], c);
    let U;
    return T.ending ? U = new H() : T.destroyed && (U = new $("write")), U ? (t.nextTick(x, U), re(f, U, !0), U) : (T.pendingcb++, X(f, T, c, y, x));
  }
  P.prototype.write = function(f, c, y) {
    return M(this, f, c, y) === !0;
  }, P.prototype.cork = function() {
    this._writableState.corked++;
  }, P.prototype.uncork = function() {
    const f = this._writableState;
    f.corked && (f.corked--, f.writing || J(this, f));
  }, P.prototype.setDefaultEncoding = function(c) {
    if (typeof c == "string" && (c = b(c)), !p.isEncoding(c))
      throw new q(c);
    return this._writableState.defaultEncoding = c, this;
  };
  function X(f, c, y, x, T) {
    const U = c.objectMode ? 1 : y.length;
    c.length += U;
    const z = c.length < c.highWaterMark;
    return z || (c.needDrain = !0), c.writing || c.corked || c.errored || !c.constructed ? (c.buffered.push({
      chunk: y,
      encoding: x,
      callback: T
    }), c.allBuffers && x !== "buffer" && (c.allBuffers = !1), c.allNoop && T !== te && (c.allNoop = !1)) : (c.writelen = U, c.writecb = T, c.writing = !0, c.sync = !0, f._write(y, x, c.onwrite), c.sync = !1), z && !c.errored && !c.destroyed;
  }
  function Q(f, c, y, x, T, U, z) {
    c.writelen = x, c.writecb = z, c.writing = !0, c.sync = !0, c.destroyed ? c.onwrite(new $("write")) : y ? f._writev(T, c.onwrite) : f._write(T, U, c.onwrite), c.sync = !1;
  }
  function Y(f, c, y, x) {
    --c.pendingcb, x(y), N(c), re(f, y);
  }
  function K(f, c) {
    const y = f._writableState, x = y.sync, T = y.writecb;
    if (typeof T != "function") {
      re(f, new S());
      return;
    }
    y.writing = !1, y.writecb = null, y.length -= y.writelen, y.writelen = 0, c ? (c.stack, y.errored || (y.errored = c), f._readableState && !f._readableState.errored && (f._readableState.errored = c), x ? t.nextTick(Y, f, y, c, T) : Y(f, y, c, T)) : (y.buffered.length > y.bufferedIndex && J(f, y), x ? y.afterWriteTickInfo !== null && y.afterWriteTickInfo.cb === T ? y.afterWriteTickInfo.count++ : (y.afterWriteTickInfo = {
      count: 1,
      cb: T,
      stream: f,
      state: y
    }, t.nextTick(W, y.afterWriteTickInfo)) : Se(f, y, 1, T));
  }
  function W({ stream: f, state: c, count: y, cb: x }) {
    return c.afterWriteTickInfo = null, Se(f, c, y, x);
  }
  function Se(f, c, y, x) {
    for (!c.ending && !f.destroyed && c.length === 0 && c.needDrain && (c.needDrain = !1, f.emit("drain")); y-- > 0; )
      c.pendingcb--, x();
    c.destroyed && N(c), Xe(f, c);
  }
  function N(f) {
    if (f.writing)
      return;
    for (let T = f.bufferedIndex; T < f.buffered.length; ++T) {
      var c;
      const { chunk: U, callback: z } = f.buffered[T], B = f.objectMode ? 1 : U.length;
      f.length -= B, z(
        (c = f.errored) !== null && c !== void 0 ? c : new $("write")
      );
    }
    const y = f[O].splice(0);
    for (let T = 0; T < y.length; T++) {
      var x;
      y[T](
        (x = f.errored) !== null && x !== void 0 ? x : new $("end")
      );
    }
    k(f);
  }
  function J(f, c) {
    if (c.corked || c.bufferProcessing || c.destroyed || !c.constructed)
      return;
    const { buffered: y, bufferedIndex: x, objectMode: T } = c, U = y.length - x;
    if (!U)
      return;
    let z = x;
    if (c.bufferProcessing = !0, U > 1 && f._writev) {
      c.pendingcb -= U - 1;
      const B = c.allNoop ? te : (C) => {
        for (let xe = z; xe < y.length; ++xe)
          y[xe].callback(C);
      }, Ee = c.allNoop && z === 0 ? y : e(y, z);
      Ee.allBuffers = c.allBuffers, Q(f, c, !0, c.length, Ee, "", B), k(c);
    } else {
      do {
        const { chunk: B, encoding: Ee, callback: C } = y[z];
        y[z++] = null;
        const xe = T ? 1 : B.length;
        Q(f, c, !1, xe, B, Ee, C);
      } while (z < y.length && !c.writing);
      z === y.length ? k(c) : z > 256 ? (y.splice(0, z), c.bufferedIndex = 0) : c.bufferedIndex = z;
    }
    c.bufferProcessing = !1;
  }
  P.prototype._write = function(f, c, y) {
    if (this._writev)
      this._writev(
        [
          {
            chunk: f,
            encoding: c
          }
        ],
        y
      );
    else
      throw new v("_write()");
  }, P.prototype._writev = null, P.prototype.end = function(f, c, y) {
    const x = this._writableState;
    typeof f == "function" ? (y = f, f = null, c = null) : typeof c == "function" && (y = c, c = null);
    let T;
    if (f != null) {
      const U = M(this, f, c);
      U instanceof i && (T = U);
    }
    return x.corked && (x.corked = 1, this.uncork()), T || (!x.errored && !x.ending ? (x.ending = !0, Xe(this, x, !0), x.ended = !0) : x.finished ? T = new V("end") : x.destroyed && (T = new $("end"))), typeof y == "function" && (T || x.finished ? t.nextTick(y, T) : x[O].push(y)), this;
  };
  function pe(f) {
    return f.ending && !f.destroyed && f.constructed && f.length === 0 && !f.errored && f.buffered.length === 0 && !f.finished && !f.writing && !f.errorEmitted && !f.closeEmitted;
  }
  function Ge(f, c) {
    let y = !1;
    function x(T) {
      if (y) {
        re(f, T ?? S());
        return;
      }
      if (y = !0, c.pendingcb--, T) {
        const U = c[O].splice(0);
        for (let z = 0; z < U.length; z++)
          U[z](T);
        re(f, T, c.sync);
      } else
        pe(c) && (c.prefinished = !0, f.emit("prefinish"), c.pendingcb++, t.nextTick(at, f, c));
    }
    c.sync = !0, c.pendingcb++;
    try {
      f._final(x);
    } catch (T) {
      x(T);
    }
    c.sync = !1;
  }
  function qe(f, c) {
    !c.prefinished && !c.finalCalled && (typeof f._final == "function" && !c.destroyed ? (c.finalCalled = !0, Ge(f, c)) : (c.prefinished = !0, f.emit("prefinish")));
  }
  function Xe(f, c, y) {
    pe(c) && (qe(f, c), c.pendingcb === 0 && (y ? (c.pendingcb++, t.nextTick(
      (x, T) => {
        pe(T) ? at(x, T) : T.pendingcb--;
      },
      f,
      c
    )) : pe(c) && (c.pendingcb++, at(f, c))));
  }
  function at(f, c) {
    c.pendingcb--, c.finished = !0;
    const y = c[O].splice(0);
    for (let x = 0; x < y.length; x++)
      y[x]();
    if (f.emit("finish"), c.autoDestroy) {
      const x = f._readableState;
      (!x || x.autoDestroy && // We don't expect the readable to ever 'end'
      // if readable is explicitly set to false.
      (x.endEmitted || x.readable === !1)) && f.destroy();
    }
  }
  a(P.prototype, {
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
      set(f) {
        this._writableState && (this._writableState.destroyed = f);
      }
    },
    writable: {
      __proto__: null,
      get() {
        const f = this._writableState;
        return !!f && f.writable !== !1 && !f.destroyed && !f.errored && !f.ending && !f.ended;
      },
      set(f) {
        this._writableState && (this._writableState.writable = !!f);
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
        const f = this._writableState;
        return f ? !f.destroyed && !f.ending && f.needDrain : !1;
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
  const Xt = h.destroy;
  P.prototype.destroy = function(f, c) {
    const y = this._writableState;
    return !y.destroyed && (y.bufferedIndex < y.buffered.length || y[O].length) && t.nextTick(N, y), Xt.call(this, f, c), this;
  }, P.prototype._undestroy = h.undestroy, P.prototype._destroy = function(f, c) {
    c(f);
  }, P.prototype[_.captureRejectionSymbol] = function(f) {
    this.destroy(f);
  };
  let lt;
  function Ye() {
    return lt === void 0 && (lt = {}), lt;
  }
  return P.fromWeb = function(f, c) {
    return Ye().newStreamWritableFromWritableStream(f, c);
  }, P.toWeb = function(f) {
    return Ye().newWritableStreamFromStreamWritable(f);
  }, _i;
}
var gi, Yr;
function Al() {
  if (Yr)
    return gi;
  Yr = 1;
  const t = Be, e = je, {
    isReadable: i,
    isWritable: r,
    isIterable: n,
    isNodeStream: a,
    isReadableNodeStream: u,
    isWritableNodeStream: b,
    isDuplexNodeStream: g,
    isReadableStream: d,
    isWritableStream: _
  } = De, l = Ce, {
    AbortError: p,
    codes: { ERR_INVALID_ARG_TYPE: h, ERR_INVALID_RETURN_VALUE: F }
  } = fe, { destroyer: w } = st, A = Ae(), I = Vt(), v = Ki(), { createDeferredPromise: S } = ue, j = ro, $ = globalThis.Blob || e.Blob, V = typeof $ < "u" ? function(E) {
    return E instanceof $;
  } : function(E) {
    return !1;
  }, ie = globalThis.AbortController || pt().AbortController, { FunctionPrototypeCall: H } = Z;
  class q extends A {
    constructor(E) {
      super(E), (E == null ? void 0 : E.readable) === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), (E == null ? void 0 : E.writable) === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
    }
  }
  gi = function O(E, k) {
    if (g(E))
      return E;
    if (u(E))
      return te({
        readable: E
      });
    if (b(E))
      return te({
        writable: E
      });
    if (a(E))
      return te({
        writable: !1,
        readable: !1
      });
    if (d(E))
      return te({
        readable: I.fromWeb(E)
      });
    if (_(E))
      return te({
        writable: v.fromWeb(E)
      });
    if (typeof E == "function") {
      const { value: M, write: X, final: Q, destroy: Y } = re(E);
      if (n(M))
        return j(q, M, {
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          write: X,
          final: Q,
          destroy: Y
        });
      const K = M == null ? void 0 : M.then;
      if (typeof K == "function") {
        let W;
        const Se = H(
          K,
          M,
          (N) => {
            if (N != null)
              throw new F("nully", "body", N);
          },
          (N) => {
            w(W, N);
          }
        );
        return W = new q({
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          readable: !1,
          write: X,
          final(N) {
            Q(async () => {
              try {
                await Se, t.nextTick(N, null);
              } catch (J) {
                t.nextTick(N, J);
              }
            });
          },
          destroy: Y
        });
      }
      throw new F("Iterable, AsyncIterable or AsyncFunction", k, M);
    }
    if (V(E))
      return O(E.arrayBuffer());
    if (n(E))
      return j(q, E, {
        // TODO (ronag): highWaterMark?
        objectMode: !0,
        writable: !1
      });
    if (d(E == null ? void 0 : E.readable) && _(E == null ? void 0 : E.writable))
      return q.fromWeb(E);
    if (typeof (E == null ? void 0 : E.writable) == "object" || typeof (E == null ? void 0 : E.readable) == "object") {
      const M = E != null && E.readable ? u(E == null ? void 0 : E.readable) ? E == null ? void 0 : E.readable : O(E.readable) : void 0, X = E != null && E.writable ? b(E == null ? void 0 : E.writable) ? E == null ? void 0 : E.writable : O(E.writable) : void 0;
      return te({
        readable: M,
        writable: X
      });
    }
    const P = E == null ? void 0 : E.then;
    if (typeof P == "function") {
      let M;
      return H(
        P,
        E,
        (X) => {
          X != null && M.push(X), M.push(null);
        },
        (X) => {
          w(M, X);
        }
      ), M = new q({
        objectMode: !0,
        writable: !1,
        read() {
        }
      });
    }
    throw new h(
      k,
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
      E
    );
  };
  function re(O) {
    let { promise: E, resolve: k } = S();
    const P = new ie(), M = P.signal;
    return {
      value: O(
        async function* () {
          for (; ; ) {
            const Q = E;
            E = null;
            const { chunk: Y, done: K, cb: W } = await Q;
            if (t.nextTick(W), K)
              return;
            if (M.aborted)
              throw new p(void 0, {
                cause: M.reason
              });
            ({ promise: E, resolve: k } = S()), yield Y;
          }
        }(),
        {
          signal: M
        }
      ),
      write(Q, Y, K) {
        const W = k;
        k = null, W({
          chunk: Q,
          done: !1,
          cb: K
        });
      },
      final(Q) {
        const Y = k;
        k = null, Y({
          done: !0,
          cb: Q
        });
      },
      destroy(Q, Y) {
        P.abort(), Y(Q);
      }
    };
  }
  function te(O) {
    const E = O.readable && typeof O.readable.read != "function" ? I.wrap(O.readable) : O.readable, k = O.writable;
    let P = !!i(E), M = !!r(k), X, Q, Y, K, W;
    function Se(N) {
      const J = K;
      K = null, J ? J(N) : N && W.destroy(N);
    }
    return W = new q({
      // TODO (ronag): highWaterMark?
      readableObjectMode: !!(E != null && E.readableObjectMode),
      writableObjectMode: !!(k != null && k.writableObjectMode),
      readable: P,
      writable: M
    }), M && (l(k, (N) => {
      M = !1, N && w(E, N), Se(N);
    }), W._write = function(N, J, pe) {
      k.write(N, J) ? pe() : X = pe;
    }, W._final = function(N) {
      k.end(), Q = N;
    }, k.on("drain", function() {
      if (X) {
        const N = X;
        X = null, N();
      }
    }), k.on("finish", function() {
      if (Q) {
        const N = Q;
        Q = null, N();
      }
    })), P && (l(E, (N) => {
      P = !1, N && w(E, N), Se(N);
    }), E.on("readable", function() {
      if (Y) {
        const N = Y;
        Y = null, N();
      }
    }), E.on("end", function() {
      W.push(null);
    }), W._read = function() {
      for (; ; ) {
        const N = E.read();
        if (N === null) {
          Y = W._read;
          return;
        }
        if (!W.push(N))
          return;
      }
    }), W._destroy = function(N, J) {
      !N && K !== null && (N = new p()), Y = null, X = null, Q = null, K === null ? J(N) : (K = J, w(k, N), w(E, N));
    }, W;
  }
  return gi;
}
var wi, Kr;
function Ae() {
  if (Kr)
    return wi;
  Kr = 1;
  const {
    ObjectDefineProperties: t,
    ObjectGetOwnPropertyDescriptor: e,
    ObjectKeys: i,
    ObjectSetPrototypeOf: r
  } = Z;
  wi = u;
  const n = Vt(), a = Ki();
  r(u.prototype, n.prototype), r(u, n);
  {
    const _ = i(a.prototype);
    for (let l = 0; l < _.length; l++) {
      const p = _[l];
      u.prototype[p] || (u.prototype[p] = a.prototype[p]);
    }
  }
  function u(_) {
    if (!(this instanceof u))
      return new u(_);
    n.call(this, _), a.call(this, _), _ ? (this.allowHalfOpen = _.allowHalfOpen !== !1, _.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), _.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
  }
  t(u.prototype, {
    writable: {
      __proto__: null,
      ...e(a.prototype, "writable")
    },
    writableHighWaterMark: {
      __proto__: null,
      ...e(a.prototype, "writableHighWaterMark")
    },
    writableObjectMode: {
      __proto__: null,
      ...e(a.prototype, "writableObjectMode")
    },
    writableBuffer: {
      __proto__: null,
      ...e(a.prototype, "writableBuffer")
    },
    writableLength: {
      __proto__: null,
      ...e(a.prototype, "writableLength")
    },
    writableFinished: {
      __proto__: null,
      ...e(a.prototype, "writableFinished")
    },
    writableCorked: {
      __proto__: null,
      ...e(a.prototype, "writableCorked")
    },
    writableEnded: {
      __proto__: null,
      ...e(a.prototype, "writableEnded")
    },
    writableNeedDrain: {
      __proto__: null,
      ...e(a.prototype, "writableNeedDrain")
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
      },
      set(_) {
        this._readableState && this._writableState && (this._readableState.destroyed = _, this._writableState.destroyed = _);
      }
    }
  });
  let b;
  function g() {
    return b === void 0 && (b = {}), b;
  }
  u.fromWeb = function(_, l) {
    return g().newStreamDuplexFromReadableWritablePair(_, l);
  }, u.toWeb = function(_) {
    return g().newReadableWritablePairFromDuplex(_);
  };
  let d;
  return u.from = function(_) {
    return d || (d = Al()), d(_, "body");
  }, wi;
}
const { ObjectSetPrototypeOf: no, Symbol: Fl } = Z;
var oo = Fe;
const { ERR_METHOD_NOT_IMPLEMENTED: Dl } = fe.codes, zi = Ae(), { getHighWaterMark: xl } = Ut;
no(Fe.prototype, zi.prototype);
no(Fe, zi);
const bt = Fl("kCallback");
function Fe(t) {
  if (!(this instanceof Fe))
    return new Fe(t);
  const e = t ? xl(this, t, "readableHighWaterMark", !0) : null;
  e === 0 && (t = {
    ...t,
    highWaterMark: null,
    readableHighWaterMark: e,
    // TODO (ronag): 0 is not optimal since we have
    // a "bug" where we check needDrain before calling _write and not after.
    // Refs: https://github.com/nodejs/node/pull/32887
    // Refs: https://github.com/nodejs/node/pull/35941
    writableHighWaterMark: t.writableHighWaterMark || 0
  }), zi.call(this, t), this._readableState.sync = !1, this[bt] = null, t && (typeof t.transform == "function" && (this._transform = t.transform), typeof t.flush == "function" && (this._flush = t.flush)), this.on("prefinish", Tl);
}
function ji(t) {
  typeof this._flush == "function" && !this.destroyed ? this._flush((e, i) => {
    if (e) {
      t ? t(e) : this.destroy(e);
      return;
    }
    i != null && this.push(i), this.push(null), t && t();
  }) : (this.push(null), t && t());
}
function Tl() {
  this._final !== ji && ji.call(this);
}
Fe.prototype._final = ji;
Fe.prototype._transform = function(t, e, i) {
  throw new Dl("_transform()");
};
Fe.prototype._write = function(t, e, i) {
  const r = this._readableState, n = this._writableState, a = r.length;
  this._transform(t, e, (u, b) => {
    if (u) {
      i(u);
      return;
    }
    b != null && this.push(b), n.ended || // Backwards compat.
    a === r.length || // Backwards compat.
    r.length < r.highWaterMark ? i() : this[bt] = i;
  });
};
Fe.prototype._read = function() {
  if (this[bt]) {
    const t = this[bt];
    this[bt] = null, t();
  }
};
const { ObjectSetPrototypeOf: so } = Z;
var ao = rt;
const Qi = oo;
so(rt.prototype, Qi.prototype);
so(rt, Qi);
function rt(t) {
  if (!(this instanceof rt))
    return new rt(t);
  Qi.call(this, t);
}
rt.prototype._transform = function(t, e, i) {
  i(null, t);
};
const ht = Be, { ArrayIsArray: Nl, Promise: vl, SymbolAsyncIterator: Cl, SymbolDispose: Il } = Z, It = Ce, { once: $l } = ue, Pl = st, zr = Ae(), {
  aggregateTwoErrors: Ml,
  codes: {
    ERR_INVALID_ARG_TYPE: Bi,
    ERR_INVALID_RETURN_VALUE: yi,
    ERR_MISSING_ARGS: Ol,
    ERR_STREAM_DESTROYED: Ll,
    ERR_STREAM_PREMATURE_CLOSE: kl
  },
  AbortError: Wl
} = fe, { validateFunction: jl, validateAbortSignal: Bl } = _t, {
  isIterable: Le,
  isReadable: Si,
  isReadableNodeStream: vt,
  isNodeStream: Qr,
  isTransformStream: Ze,
  isWebStream: Hl,
  isReadableStream: Ei,
  isReadableFinished: Ul
} = De, Vl = globalThis.AbortController || pt().AbortController;
let mi, Ri, Ai;
function Zr(t, e, i) {
  let r = !1;
  t.on("close", () => {
    r = !0;
  });
  const n = It(
    t,
    {
      readable: e,
      writable: i
    },
    (a) => {
      r = !a;
    }
  );
  return {
    destroy: (a) => {
      r || (r = !0, Pl.destroyer(t, a || new Ll("pipe")));
    },
    cleanup: n
  };
}
function Gl(t) {
  return jl(t[t.length - 1], "streams[stream.length - 1]"), t.pop();
}
function Fi(t) {
  if (Le(t))
    return t;
  if (vt(t))
    return ql(t);
  throw new Bi("val", ["Readable", "Iterable", "AsyncIterable"], t);
}
async function* ql(t) {
  Ri || (Ri = Vt()), yield* Ri.prototype[Cl].call(t);
}
async function Dt(t, e, i, { end: r }) {
  let n, a = null;
  const u = (d) => {
    if (d && (n = d), a) {
      const _ = a;
      a = null, _();
    }
  }, b = () => new vl((d, _) => {
    n ? _(n) : a = () => {
      n ? _(n) : d();
    };
  });
  e.on("drain", u);
  const g = It(
    e,
    {
      readable: !1
    },
    u
  );
  try {
    e.writableNeedDrain && await b();
    for await (const d of t)
      e.write(d) || await b();
    r && (e.end(), await b()), i();
  } catch (d) {
    i(n !== d ? Ml(n, d) : d);
  } finally {
    g(), e.off("drain", u);
  }
}
async function Di(t, e, i, { end: r }) {
  Ze(e) && (e = e.writable);
  const n = e.getWriter();
  try {
    for await (const a of t)
      await n.ready, n.write(a).catch(() => {
      });
    await n.ready, r && await n.close(), i();
  } catch (a) {
    try {
      await n.abort(a), i(a);
    } catch (u) {
      i(u);
    }
  }
}
function Xl(...t) {
  return lo(t, $l(Gl(t)));
}
function lo(t, e, i) {
  if (t.length === 1 && Nl(t[0]) && (t = t[0]), t.length < 2)
    throw new Ol("streams");
  const r = new Vl(), n = r.signal, a = i == null ? void 0 : i.signal, u = [];
  Bl(a, "options.signal");
  function b() {
    F(new Wl());
  }
  Ai = Ai || ue.addAbortListener;
  let g;
  a && (g = Ai(a, b));
  let d, _;
  const l = [];
  let p = 0;
  function h(v) {
    F(v, --p === 0);
  }
  function F(v, S) {
    var j;
    if (v && (!d || d.code === "ERR_STREAM_PREMATURE_CLOSE") && (d = v), !(!d && !S)) {
      for (; l.length; )
        l.shift()(d);
      (j = g) === null || j === void 0 || j[Il](), r.abort(), S && (d || u.forEach(($) => $()), ht.nextTick(e, d, _));
    }
  }
  let w;
  for (let v = 0; v < t.length; v++) {
    const S = t[v], j = v < t.length - 1, $ = v > 0, V = j || (i == null ? void 0 : i.end) !== !1, ie = v === t.length - 1;
    if (Qr(S)) {
      let H = function(q) {
        q && q.name !== "AbortError" && q.code !== "ERR_STREAM_PREMATURE_CLOSE" && h(q);
      };
      if (V) {
        const { destroy: q, cleanup: re } = Zr(S, j, $);
        l.push(q), Si(S) && ie && u.push(re);
      }
      S.on("error", H), Si(S) && ie && u.push(() => {
        S.removeListener("error", H);
      });
    }
    if (v === 0)
      if (typeof S == "function") {
        if (w = S({
          signal: n
        }), !Le(w))
          throw new yi("Iterable, AsyncIterable or Stream", "source", w);
      } else
        Le(S) || vt(S) || Ze(S) ? w = S : w = zr.from(S);
    else if (typeof S == "function") {
      if (Ze(w)) {
        var A;
        w = Fi((A = w) === null || A === void 0 ? void 0 : A.readable);
      } else
        w = Fi(w);
      if (w = S(w, {
        signal: n
      }), j) {
        if (!Le(w, !0))
          throw new yi("AsyncIterable", `transform[${v - 1}]`, w);
      } else {
        var I;
        mi || (mi = ao);
        const H = new mi({
          objectMode: !0
        }), q = (I = w) === null || I === void 0 ? void 0 : I.then;
        if (typeof q == "function")
          p++, q.call(
            w,
            (O) => {
              _ = O, O != null && H.write(O), V && H.end(), ht.nextTick(h);
            },
            (O) => {
              H.destroy(O), ht.nextTick(h, O);
            }
          );
        else if (Le(w, !0))
          p++, Dt(w, H, h, {
            end: V
          });
        else if (Ei(w) || Ze(w)) {
          const O = w.readable || w;
          p++, Dt(O, H, h, {
            end: V
          });
        } else
          throw new yi("AsyncIterable or Promise", "destination", w);
        w = H;
        const { destroy: re, cleanup: te } = Zr(w, !1, !0);
        l.push(re), ie && u.push(te);
      }
    } else if (Qr(S)) {
      if (vt(w)) {
        p += 2;
        const H = Yl(w, S, h, {
          end: V
        });
        Si(S) && ie && u.push(H);
      } else if (Ze(w) || Ei(w)) {
        const H = w.readable || w;
        p++, Dt(H, S, h, {
          end: V
        });
      } else if (Le(w))
        p++, Dt(w, S, h, {
          end: V
        });
      else
        throw new Bi(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          w
        );
      w = S;
    } else if (Hl(S)) {
      if (vt(w))
        p++, Di(Fi(w), S, h, {
          end: V
        });
      else if (Ei(w) || Le(w))
        p++, Di(w, S, h, {
          end: V
        });
      else if (Ze(w))
        p++, Di(w.readable, S, h, {
          end: V
        });
      else
        throw new Bi(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          w
        );
      w = S;
    } else
      w = zr.from(S);
  }
  return (n != null && n.aborted || a != null && a.aborted) && ht.nextTick(b), w;
}
function Yl(t, e, i, { end: r }) {
  let n = !1;
  if (e.on("close", () => {
    n || i(new kl());
  }), t.pipe(e, {
    end: !1
  }), r) {
    let a = function() {
      n = !0, e.end();
    };
    Ul(t) ? ht.nextTick(a) : t.once("end", a);
  } else
    i();
  return It(
    t,
    {
      readable: !0,
      writable: !1
    },
    (a) => {
      const u = t._readableState;
      a && a.code === "ERR_STREAM_PREMATURE_CLOSE" && u && u.ended && !u.errored && !u.errorEmitted ? t.once("end", i).once("error", i) : i(a);
    }
  ), It(
    e,
    {
      readable: !1,
      writable: !0
    },
    i
  );
}
var Zi = {
  pipelineImpl: lo,
  pipeline: Xl
};
const { pipeline: Kl } = Zi, xt = Ae(), { destroyer: zl } = st, {
  isNodeStream: Tt,
  isReadable: Jr,
  isWritable: en,
  isWebStream: xi,
  isTransformStream: Oe,
  isWritableStream: tn,
  isReadableStream: rn
} = De, {
  AbortError: Ql,
  codes: { ERR_INVALID_ARG_VALUE: nn, ERR_MISSING_ARGS: Zl }
} = fe, Jl = Ce;
var uo = function(...e) {
  if (e.length === 0)
    throw new Zl("streams");
  if (e.length === 1)
    return xt.from(e[0]);
  const i = [...e];
  if (typeof e[0] == "function" && (e[0] = xt.from(e[0])), typeof e[e.length - 1] == "function") {
    const h = e.length - 1;
    e[h] = xt.from(e[h]);
  }
  for (let h = 0; h < e.length; ++h)
    if (!(!Tt(e[h]) && !xi(e[h]))) {
      if (h < e.length - 1 && !(Jr(e[h]) || rn(e[h]) || Oe(e[h])))
        throw new nn(`streams[${h}]`, i[h], "must be readable");
      if (h > 0 && !(en(e[h]) || tn(e[h]) || Oe(e[h])))
        throw new nn(`streams[${h}]`, i[h], "must be writable");
    }
  let r, n, a, u, b;
  function g(h) {
    const F = u;
    u = null, F ? F(h) : h ? b.destroy(h) : !p && !l && b.destroy();
  }
  const d = e[0], _ = Kl(e, g), l = !!(en(d) || tn(d) || Oe(d)), p = !!(Jr(_) || rn(_) || Oe(_));
  if (b = new xt({
    // TODO (ronag): highWaterMark?
    writableObjectMode: !!(d != null && d.writableObjectMode),
    readableObjectMode: !!(_ != null && _.readableObjectMode),
    writable: l,
    readable: p
  }), l) {
    if (Tt(d))
      b._write = function(F, w, A) {
        d.write(F, w) ? A() : r = A;
      }, b._final = function(F) {
        d.end(), n = F;
      }, d.on("drain", function() {
        if (r) {
          const F = r;
          r = null, F();
        }
      });
    else if (xi(d)) {
      const w = (Oe(d) ? d.writable : d).getWriter();
      b._write = async function(A, I, v) {
        try {
          await w.ready, w.write(A).catch(() => {
          }), v();
        } catch (S) {
          v(S);
        }
      }, b._final = async function(A) {
        try {
          await w.ready, w.close().catch(() => {
          }), n = A;
        } catch (I) {
          A(I);
        }
      };
    }
    const h = Oe(_) ? _.readable : _;
    Jl(h, () => {
      if (n) {
        const F = n;
        n = null, F();
      }
    });
  }
  if (p) {
    if (Tt(_))
      _.on("readable", function() {
        if (a) {
          const h = a;
          a = null, h();
        }
      }), _.on("end", function() {
        b.push(null);
      }), b._read = function() {
        for (; ; ) {
          const h = _.read();
          if (h === null) {
            a = b._read;
            return;
          }
          if (!b.push(h))
            return;
        }
      };
    else if (xi(_)) {
      const F = (Oe(_) ? _.readable : _).getReader();
      b._read = async function() {
        for (; ; )
          try {
            const { value: w, done: A } = await F.read();
            if (!b.push(w))
              return;
            if (A) {
              b.push(null);
              return;
            }
          } catch {
            return;
          }
      };
    }
  }
  return b._destroy = function(h, F) {
    !h && u !== null && (h = new Ql()), a = null, r = null, n = null, u === null ? F(h) : (u = F, Tt(_) && zl(_, h));
  }, b;
};
const eu = globalThis.AbortController || pt().AbortController, {
  codes: { ERR_INVALID_ARG_VALUE: tu, ERR_INVALID_ARG_TYPE: gt, ERR_MISSING_ARGS: iu, ERR_OUT_OF_RANGE: ru },
  AbortError: we
} = fe, { validateAbortSignal: Ue, validateInteger: on, validateObject: Ve } = _t, nu = Z.Symbol("kWeak"), ou = Z.Symbol("kResistStopPropagation"), { finished: su } = Ce, au = uo, { addAbortSignalNoValidate: lu } = Ht, { isWritable: uu, isNodeStream: du } = De, { deprecate: fu } = ue, {
  ArrayPrototypePush: cu,
  Boolean: hu,
  MathFloor: sn,
  Number: bu,
  NumberIsNaN: pu,
  Promise: an,
  PromiseReject: ln,
  PromiseResolve: _u,
  PromisePrototypeThen: un,
  Symbol: fo
} = Z, $t = fo("kEmpty"), dn = fo("kEof");
function gu(t, e) {
  if (e != null && Ve(e, "options"), (e == null ? void 0 : e.signal) != null && Ue(e.signal, "options.signal"), du(t) && !uu(t))
    throw new tu("stream", t, "must be writable");
  const i = au(this, t);
  return e != null && e.signal && lu(e.signal, i), i;
}
function Gt(t, e) {
  if (typeof t != "function")
    throw new gt("fn", ["Function", "AsyncFunction"], t);
  e != null && Ve(e, "options"), (e == null ? void 0 : e.signal) != null && Ue(e.signal, "options.signal");
  let i = 1;
  (e == null ? void 0 : e.concurrency) != null && (i = sn(e.concurrency));
  let r = i - 1;
  return (e == null ? void 0 : e.highWaterMark) != null && (r = sn(e.highWaterMark)), on(i, "options.concurrency", 1), on(r, "options.highWaterMark", 0), r += i, (async function* () {
    const a = ue.AbortSignalAny(
      [e == null ? void 0 : e.signal].filter(hu)
    ), u = this, b = [], g = {
      signal: a
    };
    let d, _, l = !1, p = 0;
    function h() {
      l = !0, F();
    }
    function F() {
      p -= 1, w();
    }
    function w() {
      _ && !l && p < i && b.length < r && (_(), _ = null);
    }
    async function A() {
      try {
        for await (let I of u) {
          if (l)
            return;
          if (a.aborted)
            throw new we();
          try {
            if (I = t(I, g), I === $t)
              continue;
            I = _u(I);
          } catch (v) {
            I = ln(v);
          }
          p += 1, un(I, F, h), b.push(I), d && (d(), d = null), !l && (b.length >= r || p >= i) && await new an((v) => {
            _ = v;
          });
        }
        b.push(dn);
      } catch (I) {
        const v = ln(I);
        un(v, F, h), b.push(v);
      } finally {
        l = !0, d && (d(), d = null);
      }
    }
    A();
    try {
      for (; ; ) {
        for (; b.length > 0; ) {
          const I = await b[0];
          if (I === dn)
            return;
          if (a.aborted)
            throw new we();
          I !== $t && (yield I), b.shift(), w();
        }
        await new an((I) => {
          d = I;
        });
      }
    } finally {
      l = !0, _ && (_(), _ = null);
    }
  }).call(this);
}
function wu(t = void 0) {
  return t != null && Ve(t, "options"), (t == null ? void 0 : t.signal) != null && Ue(t.signal, "options.signal"), (async function* () {
    let i = 0;
    for await (const n of this) {
      var r;
      if (t != null && (r = t.signal) !== null && r !== void 0 && r.aborted)
        throw new we({
          cause: t.signal.reason
        });
      yield [i++, n];
    }
  }).call(this);
}
async function co(t, e = void 0) {
  for await (const i of Ji.call(this, t, e))
    return !0;
  return !1;
}
async function yu(t, e = void 0) {
  if (typeof t != "function")
    throw new gt("fn", ["Function", "AsyncFunction"], t);
  return !await co.call(
    this,
    async (...i) => !await t(...i),
    e
  );
}
async function Su(t, e) {
  for await (const i of Ji.call(this, t, e))
    return i;
}
async function Eu(t, e) {
  if (typeof t != "function")
    throw new gt("fn", ["Function", "AsyncFunction"], t);
  async function i(r, n) {
    return await t(r, n), $t;
  }
  for await (const r of Gt.call(this, i, e))
    ;
}
function Ji(t, e) {
  if (typeof t != "function")
    throw new gt("fn", ["Function", "AsyncFunction"], t);
  async function i(r, n) {
    return await t(r, n) ? r : $t;
  }
  return Gt.call(this, i, e);
}
class mu extends iu {
  constructor() {
    super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
  }
}
async function Ru(t, e, i) {
  var r;
  if (typeof t != "function")
    throw new gt("reducer", ["Function", "AsyncFunction"], t);
  i != null && Ve(i, "options"), (i == null ? void 0 : i.signal) != null && Ue(i.signal, "options.signal");
  let n = arguments.length > 1;
  if (i != null && (r = i.signal) !== null && r !== void 0 && r.aborted) {
    const d = new we(void 0, {
      cause: i.signal.reason
    });
    throw this.once("error", () => {
    }), await su(this.destroy(d)), d;
  }
  const a = new eu(), u = a.signal;
  if (i != null && i.signal) {
    const d = {
      once: !0,
      [nu]: this,
      [ou]: !0
    };
    i.signal.addEventListener("abort", () => a.abort(), d);
  }
  let b = !1;
  try {
    for await (const d of this) {
      var g;
      if (b = !0, i != null && (g = i.signal) !== null && g !== void 0 && g.aborted)
        throw new we();
      n ? e = await t(e, d, {
        signal: u
      }) : (e = d, n = !0);
    }
    if (!b && !n)
      throw new mu();
  } finally {
    a.abort();
  }
  return e;
}
async function Au(t) {
  t != null && Ve(t, "options"), (t == null ? void 0 : t.signal) != null && Ue(t.signal, "options.signal");
  const e = [];
  for await (const r of this) {
    var i;
    if (t != null && (i = t.signal) !== null && i !== void 0 && i.aborted)
      throw new we(void 0, {
        cause: t.signal.reason
      });
    cu(e, r);
  }
  return e;
}
function Fu(t, e) {
  const i = Gt.call(this, t, e);
  return (async function* () {
    for await (const n of i)
      yield* n;
  }).call(this);
}
function ho(t) {
  if (t = bu(t), pu(t))
    return 0;
  if (t < 0)
    throw new ru("number", ">= 0", t);
  return t;
}
function Du(t, e = void 0) {
  return e != null && Ve(e, "options"), (e == null ? void 0 : e.signal) != null && Ue(e.signal, "options.signal"), t = ho(t), (async function* () {
    var r;
    if (e != null && (r = e.signal) !== null && r !== void 0 && r.aborted)
      throw new we();
    for await (const a of this) {
      var n;
      if (e != null && (n = e.signal) !== null && n !== void 0 && n.aborted)
        throw new we();
      t-- <= 0 && (yield a);
    }
  }).call(this);
}
function xu(t, e = void 0) {
  return e != null && Ve(e, "options"), (e == null ? void 0 : e.signal) != null && Ue(e.signal, "options.signal"), t = ho(t), (async function* () {
    var r;
    if (e != null && (r = e.signal) !== null && r !== void 0 && r.aborted)
      throw new we();
    for await (const a of this) {
      var n;
      if (e != null && (n = e.signal) !== null && n !== void 0 && n.aborted)
        throw new we();
      if (t-- > 0 && (yield a), t <= 0)
        return;
    }
  }).call(this);
}
Ui.streamReturningOperators = {
  asIndexedPairs: fu(wu, "readable.asIndexedPairs will be removed in a future version."),
  drop: Du,
  filter: Ji,
  flatMap: Fu,
  map: Gt,
  take: xu,
  compose: gu
};
Ui.promiseReturningOperators = {
  every: yu,
  forEach: Eu,
  reduce: Ru,
  toArray: Au,
  some: co,
  find: Su
};
var Ti, fn;
function bo() {
  if (fn)
    return Ti;
  fn = 1;
  const { ArrayPrototypePop: t, Promise: e } = Z, { isIterable: i, isNodeStream: r, isWebStream: n } = De, { pipelineImpl: a } = Zi, { finished: u } = Ce;
  po();
  function b(...g) {
    return new e((d, _) => {
      let l, p;
      const h = g[g.length - 1];
      if (h && typeof h == "object" && !r(h) && !i(h) && !n(h)) {
        const F = t(g);
        l = F.signal, p = F.end;
      }
      a(
        g,
        (F, w) => {
          F ? _(F) : d(w);
        },
        {
          signal: l,
          end: p
        }
      );
    });
  }
  return Ti = {
    finished: u,
    pipeline: b
  }, Ti;
}
var cn;
function po() {
  if (cn)
    return fi.exports;
  cn = 1;
  const { Buffer: t } = je, { ObjectDefineProperty: e, ObjectKeys: i, ReflectApply: r } = Z, {
    promisify: { custom: n }
  } = ue, { streamReturningOperators: a, promiseReturningOperators: u } = Ui, {
    codes: { ERR_ILLEGAL_CONSTRUCTOR: b }
  } = fe, g = uo, { setDefaultHighWaterMark: d, getDefaultHighWaterMark: _ } = Ut, { pipeline: l } = Zi, { destroyer: p } = st, h = Ce, F = bo(), w = De, A = fi.exports = Yi.Stream;
  A.isDestroyed = w.isDestroyed, A.isDisturbed = w.isDisturbed, A.isErrored = w.isErrored, A.isReadable = w.isReadable, A.isWritable = w.isWritable, A.Readable = Vt();
  for (const v of i(a)) {
    let j = function(...$) {
      if (new.target)
        throw b();
      return A.Readable.from(r(S, this, $));
    };
    const S = a[v];
    e(j, "name", {
      __proto__: null,
      value: S.name
    }), e(j, "length", {
      __proto__: null,
      value: S.length
    }), e(A.Readable.prototype, v, {
      __proto__: null,
      value: j,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  for (const v of i(u)) {
    let j = function(...$) {
      if (new.target)
        throw b();
      return r(S, this, $);
    };
    const S = u[v];
    e(j, "name", {
      __proto__: null,
      value: S.name
    }), e(j, "length", {
      __proto__: null,
      value: S.length
    }), e(A.Readable.prototype, v, {
      __proto__: null,
      value: j,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  A.Writable = Ki(), A.Duplex = Ae(), A.Transform = oo, A.PassThrough = ao, A.pipeline = l;
  const { addAbortSignal: I } = Ht;
  return A.addAbortSignal = I, A.finished = h, A.destroy = p, A.compose = g, A.setDefaultHighWaterMark = d, A.getDefaultHighWaterMark = _, e(A, "promises", {
    __proto__: null,
    configurable: !0,
    enumerable: !0,
    get() {
      return F;
    }
  }), e(l, n, {
    __proto__: null,
    enumerable: !0,
    get() {
      return F.pipeline;
    }
  }), e(h, n, {
    __proto__: null,
    enumerable: !0,
    get() {
      return F.finished;
    }
  }), A.Stream = A, A._isUint8Array = function(S) {
    return S instanceof Uint8Array;
  }, A._uint8ArrayToBuffer = function(S) {
    return t.from(S.buffer, S.byteOffset, S.byteLength);
  }, fi.exports;
}
(function(t) {
  const e = po(), i = bo(), r = e.Readable.destroy;
  t.exports = e.Readable, t.exports._uint8ArrayToBuffer = e._uint8ArrayToBuffer, t.exports._isUint8Array = e._isUint8Array, t.exports.isDisturbed = e.isDisturbed, t.exports.isErrored = e.isErrored, t.exports.isReadable = e.isReadable, t.exports.Readable = e.Readable, t.exports.Writable = e.Writable, t.exports.Duplex = e.Duplex, t.exports.Transform = e.Transform, t.exports.PassThrough = e.PassThrough, t.exports.addAbortSignal = e.addAbortSignal, t.exports.finished = e.finished, t.exports.destroy = e.destroy, t.exports.destroy = r, t.exports.pipeline = e.pipeline, t.exports.compose = e.compose, Object.defineProperty(e, "promises", {
    configurable: !0,
    enumerable: !0,
    get() {
      return i;
    }
  }), t.exports.Stream = e.Stream, t.exports.default = t.exports;
})(An);
var Tu = An.exports, qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.ParseError = void 0;
class Nu extends Error {
  constructor(e, i) {
    const r = e.saxParser;
    super(e.trackPosition ? `Line ${r.line} column ${r.column + 1}: ${i}` : i);
  }
}
qt.ParseError = Nu;
var _o = {}, go = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.validateIri = t.IriValidationStrategy = void 0;
  function e() {
    const b = "[!$&'()*+,;=]", g = "%[a-fA-F0-9]{2}", d = "([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", _ = `${d}\\.${d}\\.${d}\\.${d}`, l = "[a-fA-F0-9]{1,4}", p = `(${l}:${l}|${_})`, h = `((${l}:){6}${p}|::(${l}:){5}${p}|(${l})?::(${l}:){4}${p}|((${l}:){0,1}${l})?::(${l}:){3}${p}|((${l}:){0,2}${l})?::(${l}:){2}${p}|((${l}:){0,3}${l})?::${l}:${p}|((${l}:){0,4}${l})?::${p}|((${l}:){0,5}${l})?::${l}|((${l}:){0,6}${l})?::)`, F = `v[a-fA-F0-9]+\\.(${b}|${b}|":)+`, w = `\\[(${h}|${F})\\]`, A = "[0-9]*", I = "[a-zA-Z][a-zA-Z0-9+\\-.]*", S = "[-󰀀-󿿽􀀀-􏿽]", V = "[a-zA-Z0-9\\-._~ -퟿豈-﷏ﷰ-￯𐀀-🿽𠀀-𯿽𰀀-𿿽񀀀-񏿽񐀀-񟿽񠀀-񯿽񰀀-񿿽򀀀-򏿽򐀀-򟿽򠀀-򯿽򰀀-򿿽󀀀-󏿽󐀀-󟿽󡀀-󯿽]", ie = `(${V}|${g}|${b}|[:@])*`, H = `(${ie}|[\\/?])*`, q = `(${ie}|${S}|[\\/?])*`, re = `(${ie})+`, te = `(${ie})*`, O = "", E = `${re}(\\/${te})*`, k = `\\/(${re}(\\/${te})*)?`, P = `(\\/${te})*`, M = `(${V}|${g}|${b})*`, X = `(${w}|${_}|${M})`, K = `(\\/\\/${`(${`(${V}|${g}|${b}|:)*`}@)?${X}(:${A})?`}${P}|${k}|${E}|${O})`, W = `^${I}:${K}(\\?${q})?(#${H})?$`;
    return new RegExp(W, "u");
  }
  const i = e(), r = /^[A-Za-z][\d+-.A-Za-z]*:[^\u0000-\u0020"<>\\^`{|}]*$/u;
  var n;
  (function(u) {
    u.Strict = "strict", u.Pragmatic = "pragmatic", u.None = "none";
  })(n = t.IriValidationStrategy || (t.IriValidationStrategy = {}));
  function a(u, b = n.Strict) {
    switch (b) {
      case n.Strict:
        return i.test(u) ? void 0 : new Error(`Invalid IRI according to RFC 3987: '${u}'`);
      case n.Pragmatic:
        return r.test(u) ? void 0 : new Error(`Invalid IRI according to RDF Turtle: '${u}'`);
      case n.None:
        return;
      default:
        return new Error(`Not supported validation strategy "${b}"`);
    }
  }
  t.validateIri = a;
})(go);
(function(t) {
  var e = ve && ve.__createBinding || (Object.create ? function(r, n, a, u) {
    u === void 0 && (u = a);
    var b = Object.getOwnPropertyDescriptor(n, a);
    (!b || ("get" in b ? !n.__esModule : b.writable || b.configurable)) && (b = { enumerable: !0, get: function() {
      return n[a];
    } }), Object.defineProperty(r, u, b);
  } : function(r, n, a, u) {
    u === void 0 && (u = a), r[u] = n[a];
  }), i = ve && ve.__exportStar || function(r, n) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(n, a) && e(n, r, a);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), i(go, t);
})(_o);
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.ParseType = tt.RdfXmlParser = void 0;
const hn = Co, vu = it, bn = Tu, Cu = qt, Iu = Io, Ni = _o;
class L extends bn.Transform {
  constructor(e) {
    super({ readableObjectMode: !0 }), this.activeTagStack = [], this.nodeIds = {}, e && (Object.assign(this, e), this.options = e), this.dataFactory || (this.dataFactory = new Iu.DataFactory()), this.baseIRI || (this.baseIRI = ""), this.defaultGraph || (this.defaultGraph = this.dataFactory.defaultGraph()), this.validateUri !== !1 && (this.validateUri = !0), this.iriValidationStrategy || (this.iriValidationStrategy = this.validateUri ? Ni.IriValidationStrategy.Pragmatic : Ni.IriValidationStrategy.None), this.saxParser = new vu.SaxesParser({ xmlns: !0, position: this.trackPosition }), this.attachSaxListeners();
  }
  /**
   * Parses the given text stream into a quad stream.
   * @param {NodeJS.EventEmitter} stream A text stream.
   * @return {RDF.Stream} A quad stream.
   */
  import(e) {
    const i = new bn.PassThrough({ readableObjectMode: !0 });
    e.on("error", (n) => r.emit("error", n)), e.on("data", (n) => i.push(n)), e.on("end", () => i.push(null));
    const r = i.pipe(new L(this.options));
    return r;
  }
  _transform(e, i, r) {
    try {
      this.saxParser.write(e);
    } catch (n) {
      return r(n);
    }
    r();
  }
  /**
   * Create a new parse error instance.
   * @param {string} message An error message.
   * @return {Error} An error instance.
   */
  newParseError(e) {
    return new Cu.ParseError(this, e);
  }
  /**
   * Convert the given value to a IRI by taking into account the baseIRI.
   *
   * This will follow the RDF/XML spec for converting values with baseIRIs to a IRI.
   *
   * @param {string} value The value to convert to an IRI.
   * @param {IActiveTag} activeTag The active tag.
   * @return {NamedNode} an IRI.
   */
  valueToUri(e, i) {
    return this.uriToNamedNode((0, hn.resolve)(e, i.baseIRI));
  }
  /**
   * Convert the given value URI string to a named node.
   *
   * This throw an error if the URI is invalid.
   *
   * @param {string} uri A URI string.
   * @return {NamedNode} a named node.
   */
  uriToNamedNode(e) {
    const i = (0, Ni.validateIri)(e, this.iriValidationStrategy);
    if (i instanceof Error)
      throw this.newParseError(i.message);
    return this.dataFactory.namedNode(e);
  }
  /**
   * Validate the given value as an NCName: https://www.w3.org/TR/xml-names/#NT-NCName
   * If it is invalid, an error will thrown emitted.
   * @param {string} value A value.
   */
  validateNcname(e) {
    if (!L.NCNAME_MATCHER.test(e))
      throw this.newParseError(`Not a valid NCName: ${e}`);
  }
  attachSaxListeners() {
    this.saxParser.on("error", (e) => this.emit("error", e)), this.saxParser.on("opentag", this.onTag.bind(this)), this.saxParser.on("text", this.onText.bind(this)), this.saxParser.on("cdata", this.onText.bind(this)), this.saxParser.on("closetag", this.onCloseTag.bind(this)), this.saxParser.on("doctype", this.onDoctype.bind(this));
  }
  /**
   * Handle the given tag.
   * @param {SaxesTagNS} tag A SAX tag.
   */
  onTag(e) {
    const i = this.activeTagStack.length ? this.activeTagStack[this.activeTagStack.length - 1] : null;
    let r = Re.RESOURCE;
    if (i && (i.hadChildren = !0, r = i.childrenParseType), i && i.childrenStringTags) {
      const a = e.name;
      let u = "";
      for (const _ in e.attributes)
        u += ` ${_}="${e.attributes[_].value}"`;
      const g = `<${`${a}${u}`}>`;
      i.childrenStringTags.push(g);
      const d = { childrenStringTags: i.childrenStringTags };
      d.childrenStringEmitClosingTag = `</${a}>`, this.activeTagStack.push(d);
      return;
    }
    const n = {};
    i ? (n.language = i.language, n.baseIRI = i.baseIRI) : n.baseIRI = this.baseIRI, this.activeTagStack.push(n), r === Re.RESOURCE ? this.onTagResource(e, n, i, !i) : this.onTagProperty(e, n, i);
  }
  /**
   * Handle the given node element in resource-mode.
   * @param {SaxesTagNS} tag A SAX tag.
   * @param {IActiveTag} activeTag The currently active tag.
   * @param {IActiveTag} parentTag The parent tag or null.
   * @param {boolean} rootTag If we are currently processing the root tag.
   */
  onTagResource(e, i, r, n) {
    i.childrenParseType = Re.PROPERTY;
    let a = !0;
    if (e.uri === L.RDF) {
      if (!n && L.FORBIDDEN_NODE_ELEMENTS.indexOf(e.local) >= 0)
        throw this.newParseError(`Illegal node element name: ${e.local}`);
      switch (e.local) {
        case "RDF":
          i.childrenParseType = Re.RESOURCE;
        case "Description":
          a = !1;
      }
    }
    const u = [], b = [];
    let g = null, d = !1, _ = !1, l = null;
    for (const p in e.attributes) {
      const h = e.attributes[p];
      if (r && h.uri === L.RDF)
        switch (h.local) {
          case "about":
            if (g)
              throw this.newParseError(`Only one of rdf:about, rdf:nodeID and rdf:ID can be present, while ${h.value} and ${g} where found.`);
            g = h.value;
            continue;
          case "ID":
            if (g)
              throw this.newParseError(`Only one of rdf:about, rdf:nodeID and rdf:ID can be present, while ${h.value} and ${g} where found.`);
            this.validateNcname(h.value), g = "#" + h.value, d = !0;
            continue;
          case "nodeID":
            if (g)
              throw this.newParseError(`Only one of rdf:about, rdf:nodeID and rdf:ID can be present, while ${h.value} and ${g} where found.`);
            this.validateNcname(h.value), g = h.value, _ = !0;
            continue;
          case "bagID":
            throw this.newParseError("rdf:bagID is not supported.");
          case "type":
            l = h.value;
            continue;
          case "aboutEach":
            throw this.newParseError("rdf:aboutEach is not supported.");
          case "aboutEachPrefix":
            throw this.newParseError("rdf:aboutEachPrefix is not supported.");
          case "li":
            throw this.newParseError("rdf:li on node elements are not supported.");
        }
      else if (h.uri === L.XML) {
        if (h.local === "lang") {
          i.language = h.value === "" ? null : h.value.toLowerCase();
          continue;
        } else if (h.local === "base") {
          i.baseIRI = (0, hn.resolve)(h.value, i.baseIRI);
          continue;
        }
      }
      h.prefix !== "xml" && h.prefix !== "xmlns" && (h.prefix !== "" || h.local !== "xmlns") && h.uri && (u.push(this.uriToNamedNode(h.uri + h.local)), b.push(h.value));
    }
    if (g !== null && (i.subject = _ ? this.dataFactory.blankNode(g) : this.valueToUri(g, i), d && this.claimNodeId(i.subject)), i.subject || (i.subject = this.dataFactory.blankNode()), a) {
      const p = this.uriToNamedNode(e.uri + e.local);
      this.emitTriple(i.subject, this.dataFactory.namedNode(L.RDF + "type"), p, r ? r.reifiedStatementId : null);
    }
    if (r) {
      if (r.predicate)
        if (r.childrenCollectionSubject) {
          const p = this.dataFactory.blankNode();
          this.emitTriple(r.childrenCollectionSubject, r.childrenCollectionPredicate, p, r.reifiedStatementId), this.emitTriple(p, this.dataFactory.namedNode(L.RDF + "first"), i.subject, i.reifiedStatementId), r.childrenCollectionSubject = p, r.childrenCollectionPredicate = this.dataFactory.namedNode(L.RDF + "rest");
        } else {
          this.emitTriple(r.subject, r.predicate, i.subject, r.reifiedStatementId);
          for (let p = 0; p < r.predicateSubPredicates.length; p++)
            this.emitTriple(i.subject, r.predicateSubPredicates[p], r.predicateSubObjects[p], null);
          r.predicateSubPredicates = [], r.predicateSubObjects = [], r.predicateEmitted = !0;
        }
      for (let p = 0; p < u.length; p++) {
        const h = this.dataFactory.literal(b[p], i.datatype || i.language);
        this.emitTriple(i.subject, u[p], h, r.reifiedStatementId);
      }
      l && this.emitTriple(i.subject, this.dataFactory.namedNode(L.RDF + "type"), this.uriToNamedNode(l), null);
    }
  }
  /**
   * Handle the given property element in property-mode.
   * @param {SaxesTagNS} tag A SAX tag.
   * @param {IActiveTag} activeTag The currently active tag.
   * @param {IActiveTag} parentTag The parent tag or null.
   */
  onTagProperty(e, i, r) {
    if (i.childrenParseType = Re.RESOURCE, i.subject = r.subject, e.uri === L.RDF && e.local === "li" ? (r.listItemCounter || (r.listItemCounter = 1), i.predicate = this.uriToNamedNode(e.uri + "_" + r.listItemCounter++)) : i.predicate = this.uriToNamedNode(e.uri + e.local), e.uri === L.RDF && L.FORBIDDEN_PROPERTY_ELEMENTS.indexOf(e.local) >= 0)
      throw this.newParseError(`Illegal property element name: ${e.local}`);
    i.predicateSubPredicates = [], i.predicateSubObjects = [];
    let n = !1, a = !1, u = null, b = !0;
    const g = [], d = [];
    for (const _ in e.attributes) {
      const l = e.attributes[_];
      if (l.uri === L.RDF)
        switch (l.local) {
          case "resource":
            if (u)
              throw this.newParseError(`Found both rdf:resource (${l.value}) and rdf:nodeID (${u}).`);
            if (n)
              throw this.newParseError(`rdf:parseType is not allowed on property elements with rdf:resource (${l.value})`);
            i.hadChildren = !0, u = l.value, b = !1;
            continue;
          case "datatype":
            if (a)
              throw this.newParseError(`Found both non-rdf:* property attributes and rdf:datatype (${l.value}).`);
            if (n)
              throw this.newParseError(`rdf:parseType is not allowed on property elements with rdf:datatype (${l.value})`);
            i.datatype = this.valueToUri(l.value, i);
            continue;
          case "nodeID":
            if (a)
              throw this.newParseError(`Found both non-rdf:* property attributes and rdf:nodeID (${l.value}).`);
            if (i.hadChildren)
              throw this.newParseError(`Found both rdf:resource and rdf:nodeID (${l.value}).`);
            if (n)
              throw this.newParseError(`rdf:parseType is not allowed on property elements with rdf:nodeID (${l.value})`);
            this.validateNcname(l.value), i.hadChildren = !0, u = l.value, b = !0;
            continue;
          case "bagID":
            throw this.newParseError("rdf:bagID is not supported.");
          case "parseType":
            if (a)
              throw this.newParseError("rdf:parseType is not allowed when non-rdf:* property attributes are present");
            if (i.datatype)
              throw this.newParseError(`rdf:parseType is not allowed on property elements with rdf:datatype (${i.datatype.value})`);
            if (u)
              throw this.newParseError(`rdf:parseType is not allowed on property elements with rdf:nodeID or rdf:resource (${u})`);
            if (l.value === "Resource") {
              n = !0, i.childrenParseType = Re.PROPERTY;
              const p = this.dataFactory.blankNode();
              this.emitTriple(i.subject, i.predicate, p, i.reifiedStatementId), i.subject = p, i.predicate = null;
            } else
              l.value === "Collection" ? (n = !0, i.hadChildren = !0, i.childrenCollectionSubject = i.subject, i.childrenCollectionPredicate = i.predicate, b = !1) : l.value === "Literal" && (n = !0, i.childrenTagsToString = !0, i.childrenStringTags = []);
            continue;
          case "ID":
            this.validateNcname(l.value), i.reifiedStatementId = this.valueToUri("#" + l.value, i), this.claimNodeId(i.reifiedStatementId);
            continue;
        }
      else if (l.uri === L.XML && l.local === "lang") {
        i.language = l.value === "" ? null : l.value.toLowerCase();
        continue;
      }
      if (l.prefix !== "xml" && l.prefix !== "xmlns" && (l.prefix !== "" || l.local !== "xmlns") && l.uri) {
        if (n || i.datatype)
          throw this.newParseError(`Found illegal rdf:* properties on property element with attribute: ${l.value}`);
        i.hadChildren = !0, a = !0, g.push(this.uriToNamedNode(l.uri + l.local)), d.push(this.dataFactory.literal(l.value, i.datatype || i.language));
      }
    }
    if (u !== null) {
      const _ = i.subject;
      i.subject = b ? this.dataFactory.blankNode(u) : this.valueToUri(u, i), this.emitTriple(_, i.predicate, i.subject, i.reifiedStatementId);
      for (let l = 0; l < g.length; l++)
        this.emitTriple(i.subject, g[l], d[l], null);
      i.predicateEmitted = !0;
    } else
      b && (i.predicateSubPredicates = g, i.predicateSubObjects = d, i.predicateEmitted = !1);
  }
  /**
   * Emit the given triple to the stream.
   * @param {Term} subject A subject term.
   * @param {Term} predicate A predicate term.
   * @param {Term} object An object term.
   * @param {Term} statementId An optional resource that identifies the triple.
   *                           If truthy, then the given triple will also be emitted reified.
   */
  emitTriple(e, i, r, n) {
    this.push(this.dataFactory.quad(e, i, r, this.defaultGraph)), n && (this.push(this.dataFactory.quad(n, this.dataFactory.namedNode(L.RDF + "type"), this.dataFactory.namedNode(L.RDF + "Statement"), this.defaultGraph)), this.push(this.dataFactory.quad(n, this.dataFactory.namedNode(L.RDF + "subject"), e, this.defaultGraph)), this.push(this.dataFactory.quad(n, this.dataFactory.namedNode(L.RDF + "predicate"), i, this.defaultGraph)), this.push(this.dataFactory.quad(n, this.dataFactory.namedNode(L.RDF + "object"), r, this.defaultGraph)));
  }
  /**
   * Register the given term as a node ID.
   * If one was already registered, this will emit an error.
   *
   * This is used to check duplicate occurrences of rdf:ID in scope of the baseIRI.
   * @param {Term} term An RDF term.
   */
  claimNodeId(e) {
    if (!this.allowDuplicateRdfIds) {
      if (this.nodeIds[e.value])
        throw this.newParseError(`Found multiple occurrences of rdf:ID='${e.value}'.`);
      this.nodeIds[e.value] = !0;
    }
  }
  /**
   * Handle the given text string.
   * @param {string} text A parsed text string.
   */
  onText(e) {
    const i = this.activeTagStack.length ? this.activeTagStack[this.activeTagStack.length - 1] : null;
    i && (i.childrenStringTags ? i.childrenStringTags.push(e) : i.predicate && (i.text = e));
  }
  /**
   * Handle the closing of the last tag.
   */
  onCloseTag() {
    const e = this.activeTagStack.pop();
    if (e.childrenStringEmitClosingTag && e.childrenStringTags.push(e.childrenStringEmitClosingTag), e.childrenTagsToString && (e.datatype = this.dataFactory.namedNode(L.RDF + "XMLLiteral"), e.text = e.childrenStringTags.join(""), e.hadChildren = !1), e.childrenCollectionSubject)
      this.emitTriple(e.childrenCollectionSubject, e.childrenCollectionPredicate, this.dataFactory.namedNode(L.RDF + "nil"), e.reifiedStatementId);
    else if (e.predicate) {
      if (!e.hadChildren && e.childrenParseType !== Re.PROPERTY)
        this.emitTriple(e.subject, e.predicate, this.dataFactory.literal(e.text || "", e.datatype || e.language), e.reifiedStatementId);
      else if (!e.predicateEmitted) {
        const i = this.dataFactory.blankNode();
        this.emitTriple(e.subject, e.predicate, i, e.reifiedStatementId);
        for (let r = 0; r < e.predicateSubPredicates.length; r++)
          this.emitTriple(i, e.predicateSubPredicates[r], e.predicateSubObjects[r], null);
      }
    }
  }
  /**
   * Fetch local DOCTYPE ENTITY's and make the parser recognise them.
   * @param {string} doctype The read doctype.
   */
  onDoctype(e) {
    e.replace(/<!ENTITY\s+([^\s]+)\s+["']([^"']+)["']\s*>/g, (i, r, n) => (this.saxParser.ENTITIES[r] = n, ""));
  }
}
tt.RdfXmlParser = L;
L.MIME_TYPE = "application/rdf+xml";
L.RDF = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
L.XML = "http://www.w3.org/XML/1998/namespace";
L.FORBIDDEN_NODE_ELEMENTS = [
  "RDF",
  "ID",
  "about",
  "bagID",
  "parseType",
  "resource",
  "nodeID",
  "li",
  "aboutEach",
  "aboutEachPrefix"
];
L.FORBIDDEN_PROPERTY_ELEMENTS = [
  "Description",
  "RDF",
  "ID",
  "about",
  "bagID",
  "parseType",
  "resource",
  "nodeID",
  "aboutEach",
  "aboutEachPrefix"
];
L.NCNAME_MATCHER = /^([A-Za-z\xC0-\xD6\xD8-\xF6\u{F8}-\u{2FF}\u{370}-\u{37D}\u{37F}-\u{1FFF}\u{200C}-\u{200D}\u{2070}-\u{218F}\u{2C00}-\u{2FEF}\u{3001}-\u{D7FF}\u{F900}-\u{FDCF}\u{FDF0}-\u{FFFD}\u{10000}-\u{EFFFF}_])([A-Za-z\xC0-\xD6\xD8-\xF6\u{F8}-\u{2FF}\u{370}-\u{37D}\u{37F}-\u{1FFF}\u{200C}-\u{200D}\u{2070}-\u{218F}\u{2C00}-\u{2FEF}\u{3001}-\u{D7FF}\u{F900}-\u{FDCF}\u{FDF0}-\u{FFFD}\u{10000}-\u{EFFFF}_\-.0-9#xB7\u{0300}-\u{036F}\u{203F}-\u{2040}])*$/u;
var Re;
(function(t) {
  t[t.RESOURCE = 0] = "RESOURCE", t[t.PROPERTY = 1] = "PROPERTY";
})(Re || (tt.ParseType = Re = {}));
(function(t) {
  var e = ve && ve.__createBinding || (Object.create ? function(r, n, a, u) {
    u === void 0 && (u = a);
    var b = Object.getOwnPropertyDescriptor(n, a);
    (!b || ("get" in b ? !n.__esModule : b.writable || b.configurable)) && (b = { enumerable: !0, get: function() {
      return n[a];
    } }), Object.defineProperty(r, u, b);
  } : function(r, n, a, u) {
    u === void 0 && (u = a), r[u] = n[a];
  }), i = ve && ve.__exportStar || function(r, n) {
    for (var a in r)
      a !== "default" && !Object.prototype.hasOwnProperty.call(n, a) && e(n, r, a);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), i(tt, t);
})(pn);
class Lu extends pn.RdfXmlParser {
  constructor({ factory: e, ...i } = {}) {
    super({ ...i, dataFactory: e });
  }
}
export {
  Lu as default
};
//# sourceMappingURL=CustomRdfXmlParser-DFszYljk.js.map
