/*! For license information please see main.js.LICENSE.txt */
(() => {
  "use strict";
  const t =
      window.ShadowRoot &&
      (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
      "adoptedStyleSheets" in Document.prototype &&
      "replace" in CSSStyleSheet.prototype,
    e = Symbol(),
    i = new Map();
  class n {
    constructor(t, i) {
      if (((this._$cssResult$ = !0), i !== e))
        throw Error(
          "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
        );
      this.cssText = t;
    }
    get styleSheet() {
      let e = i.get(this.cssText);
      return (
        t &&
          void 0 === e &&
          (i.set(this.cssText, (e = new CSSStyleSheet())),
          e.replaceSync(this.cssText)),
        e
      );
    }
    toString() {
      return this.cssText;
    }
  }
  const s = (t) => new n("string" == typeof t ? t : t + "", e),
    o = (t, ...i) => {
      const s =
        1 === t.length
          ? t[0]
          : i.reduce(
              (e, i, n) =>
                e +
                ((t) => {
                  if (!0 === t._$cssResult$) return t.cssText;
                  if ("number" == typeof t) return t;
                  throw Error(
                    "Value passed to 'css' function must be a 'css' function result: " +
                      t +
                      ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                  );
                })(i) +
                t[n + 1],
              t[0]
            );
      return new n(s, e);
    },
    r = t
      ? (t) => t
      : (t) =>
          t instanceof CSSStyleSheet
            ? ((t) => {
                let e = "";
                for (const i of t.cssRules) e += i.cssText;
                return s(e);
              })(t)
            : t;
  var l, c;
  const a = {
      toAttribute(t, e) {
        switch (e) {
          case Boolean:
            t = t ? "" : null;
            break;
          case Object:
          case Array:
            t = null == t ? t : JSON.stringify(t);
        }
        return t;
      },
      fromAttribute(t, e) {
        let i = t;
        switch (e) {
          case Boolean:
            i = null !== t;
            break;
          case Number:
            i = null === t ? null : Number(t);
            break;
          case Object:
          case Array:
            try {
              i = JSON.parse(t);
            } catch (t) {
              i = null;
            }
        }
        return i;
      },
    },
    h = (t, e) => e !== t && (e == e || t == t),
    d = {
      attribute: !0,
      type: String,
      converter: a,
      reflect: !1,
      hasChanged: h,
    };
  class p extends HTMLElement {
    constructor() {
      super(),
        (this._$Et = new Map()),
        (this.isUpdatePending = !1),
        (this.hasUpdated = !1),
        (this._$Ei = null),
        this.o();
    }
    static addInitializer(t) {
      var e;
      (null !== (e = this.l) && void 0 !== e) || (this.l = []), this.l.push(t);
    }
    static get observedAttributes() {
      this.finalize();
      const t = [];
      return (
        this.elementProperties.forEach((e, i) => {
          const n = this._$Eh(i, e);
          void 0 !== n && (this._$Eu.set(n, i), t.push(n));
        }),
        t
      );
    }
    static createProperty(t, e = d) {
      if (
        (e.state && (e.attribute = !1),
        this.finalize(),
        this.elementProperties.set(t, e),
        !e.noAccessor && !this.prototype.hasOwnProperty(t))
      ) {
        const i = "symbol" == typeof t ? Symbol() : "__" + t,
          n = this.getPropertyDescriptor(t, i, e);
        void 0 !== n && Object.defineProperty(this.prototype, t, n);
      }
    }
    static getPropertyDescriptor(t, e, i) {
      return {
        get() {
          return this[e];
        },
        set(n) {
          const s = this[t];
          (this[e] = n), this.requestUpdate(t, s, i);
        },
        configurable: !0,
        enumerable: !0,
      };
    }
    static getPropertyOptions(t) {
      return this.elementProperties.get(t) || d;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized")) return !1;
      this.finalized = !0;
      const t = Object.getPrototypeOf(this);
      if (
        (t.finalize(),
        (this.elementProperties = new Map(t.elementProperties)),
        (this._$Eu = new Map()),
        this.hasOwnProperty("properties"))
      ) {
        const t = this.properties,
          e = [
            ...Object.getOwnPropertyNames(t),
            ...Object.getOwnPropertySymbols(t),
          ];
        for (const i of e) this.createProperty(i, t[i]);
      }
      return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
    }
    static finalizeStyles(t) {
      const e = [];
      if (Array.isArray(t)) {
        const i = new Set(t.flat(1 / 0).reverse());
        for (const t of i) e.unshift(r(t));
      } else void 0 !== t && e.push(r(t));
      return e;
    }
    static _$Eh(t, e) {
      const i = e.attribute;
      return !1 === i
        ? void 0
        : "string" == typeof i
        ? i
        : "string" == typeof t
        ? t.toLowerCase()
        : void 0;
    }
    o() {
      var t;
      (this._$Ev = new Promise((t) => (this.enableUpdating = t))),
        (this._$AL = new Map()),
        this._$Ep(),
        this.requestUpdate(),
        null === (t = this.constructor.l) ||
          void 0 === t ||
          t.forEach((t) => t(this));
    }
    addController(t) {
      var e, i;
      (null !== (e = this._$Em) && void 0 !== e ? e : (this._$Em = [])).push(t),
        void 0 !== this.renderRoot &&
          this.isConnected &&
          (null === (i = t.hostConnected) || void 0 === i || i.call(t));
    }
    removeController(t) {
      var e;
      null === (e = this._$Em) ||
        void 0 === e ||
        e.splice(this._$Em.indexOf(t) >>> 0, 1);
    }
    _$Ep() {
      this.constructor.elementProperties.forEach((t, e) => {
        this.hasOwnProperty(e) && (this._$Et.set(e, this[e]), delete this[e]);
      });
    }
    createRenderRoot() {
      var e;
      const i =
        null !== (e = this.shadowRoot) && void 0 !== e
          ? e
          : this.attachShadow(this.constructor.shadowRootOptions);
      return (
        ((e, i) => {
          t
            ? (e.adoptedStyleSheets = i.map((t) =>
                t instanceof CSSStyleSheet ? t : t.styleSheet
              ))
            : i.forEach((t) => {
                const i = document.createElement("style"),
                  n = window.litNonce;
                void 0 !== n && i.setAttribute("nonce", n),
                  (i.textContent = t.cssText),
                  e.appendChild(i);
              });
        })(i, this.constructor.elementStyles),
        i
      );
    }
    connectedCallback() {
      var t;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
        this.enableUpdating(!0),
        null === (t = this._$Em) ||
          void 0 === t ||
          t.forEach((t) => {
            var e;
            return null === (e = t.hostConnected) || void 0 === e
              ? void 0
              : e.call(t);
          });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
      var t;
      null === (t = this._$Em) ||
        void 0 === t ||
        t.forEach((t) => {
          var e;
          return null === (e = t.hostDisconnected) || void 0 === e
            ? void 0
            : e.call(t);
        });
    }
    attributeChangedCallback(t, e, i) {
      this._$AK(t, i);
    }
    _$Eg(t, e, i = d) {
      var n, s;
      const o = this.constructor._$Eh(t, i);
      if (void 0 !== o && !0 === i.reflect) {
        const r = (
          null !==
            (s =
              null === (n = i.converter) || void 0 === n
                ? void 0
                : n.toAttribute) && void 0 !== s
            ? s
            : a.toAttribute
        )(e, i.type);
        (this._$Ei = t),
          null == r ? this.removeAttribute(o) : this.setAttribute(o, r),
          (this._$Ei = null);
      }
    }
    _$AK(t, e) {
      var i, n, s;
      const o = this.constructor,
        r = o._$Eu.get(t);
      if (void 0 !== r && this._$Ei !== r) {
        const t = o.getPropertyOptions(r),
          l = t.converter,
          c =
            null !==
              (s =
                null !==
                  (n =
                    null === (i = l) || void 0 === i
                      ? void 0
                      : i.fromAttribute) && void 0 !== n
                  ? n
                  : "function" == typeof l
                  ? l
                  : null) && void 0 !== s
              ? s
              : a.fromAttribute;
        (this._$Ei = r), (this[r] = c(e, t.type)), (this._$Ei = null);
      }
    }
    requestUpdate(t, e, i) {
      let n = !0;
      void 0 !== t &&
        (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || h)(
          this[t],
          e
        )
          ? (this._$AL.has(t) || this._$AL.set(t, e),
            !0 === i.reflect &&
              this._$Ei !== t &&
              (void 0 === this._$ES && (this._$ES = new Map()),
              this._$ES.set(t, i)))
          : (n = !1)),
        !this.isUpdatePending && n && (this._$Ev = this._$EC());
    }
    async _$EC() {
      this.isUpdatePending = !0;
      try {
        await this._$Ev;
      } catch (t) {
        Promise.reject(t);
      }
      const t = this.scheduleUpdate();
      return null != t && (await t), !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t;
      if (!this.isUpdatePending) return;
      this.hasUpdated,
        this._$Et &&
          (this._$Et.forEach((t, e) => (this[e] = t)), (this._$Et = void 0));
      let e = !1;
      const i = this._$AL;
      try {
        (e = this.shouldUpdate(i)),
          e
            ? (this.willUpdate(i),
              null === (t = this._$Em) ||
                void 0 === t ||
                t.forEach((t) => {
                  var e;
                  return null === (e = t.hostUpdate) || void 0 === e
                    ? void 0
                    : e.call(t);
                }),
              this.update(i))
            : this._$ET();
      } catch (t) {
        throw ((e = !1), this._$ET(), t);
      }
      e && this._$AE(i);
    }
    willUpdate(t) {}
    _$AE(t) {
      var e;
      null === (e = this._$Em) ||
        void 0 === e ||
        e.forEach((t) => {
          var e;
          return null === (e = t.hostUpdated) || void 0 === e
            ? void 0
            : e.call(t);
        }),
        this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
        this.updated(t);
    }
    _$ET() {
      (this._$AL = new Map()), (this.isUpdatePending = !1);
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$Ev;
    }
    shouldUpdate(t) {
      return !0;
    }
    update(t) {
      void 0 !== this._$ES &&
        (this._$ES.forEach((t, e) => this._$Eg(e, this[e], t)),
        (this._$ES = void 0)),
        this._$ET();
    }
    updated(t) {}
    firstUpdated(t) {}
  }
  var u, f;
  (p.finalized = !0),
    (p.elementProperties = new Map()),
    (p.elementStyles = []),
    (p.shadowRootOptions = { mode: "open" }),
    null === (l = globalThis.reactiveElementPolyfillSupport) ||
      void 0 === l ||
      l.call(globalThis, { ReactiveElement: p }),
    (null !== (c = globalThis.reactiveElementVersions) && void 0 !== c
      ? c
      : (globalThis.reactiveElementVersions = [])
    ).push("1.0.0");
  const v = globalThis.trustedTypes,
    $ = v ? v.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
    g = `lit$${(Math.random() + "").slice(9)}$`,
    m = "?" + g,
    _ = `<${m}>`,
    y = document,
    x = (t = "") => y.createComment(t),
    b = (t) => null === t || ("object" != typeof t && "function" != typeof t),
    A = Array.isArray,
    E = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    w = /-->/g,
    S = />/g,
    C =
      />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
    T = /'/g,
    P = /"/g,
    U = /^(?:script|style|textarea)$/i,
    R =
      (t) =>
      (e, ...i) => ({ _$litType$: t, strings: e, values: i }),
    H = R(1),
    k = (R(2), Symbol.for("lit-noChange")),
    O = Symbol.for("lit-nothing"),
    N = new WeakMap(),
    M = y.createTreeWalker(y, 129, null, !1),
    z = (t, e) => {
      const i = t.length - 1,
        n = [];
      let s,
        o = 2 === e ? "<svg>" : "",
        r = E;
      for (let e = 0; e < i; e++) {
        const i = t[e];
        let l,
          c,
          a = -1,
          h = 0;
        for (
          ;
          h < i.length && ((r.lastIndex = h), (c = r.exec(i)), null !== c);

        )
          (h = r.lastIndex),
            r === E
              ? "!--" === c[1]
                ? (r = w)
                : void 0 !== c[1]
                ? (r = S)
                : void 0 !== c[2]
                ? (U.test(c[2]) && (s = RegExp("</" + c[2], "g")), (r = C))
                : void 0 !== c[3] && (r = C)
              : r === C
              ? ">" === c[0]
                ? ((r = null != s ? s : E), (a = -1))
                : void 0 === c[1]
                ? (a = -2)
                : ((a = r.lastIndex - c[2].length),
                  (l = c[1]),
                  (r = void 0 === c[3] ? C : '"' === c[3] ? P : T))
              : r === P || r === T
              ? (r = C)
              : r === w || r === S
              ? (r = E)
              : ((r = C), (s = void 0));
        const d = r === C && t[e + 1].startsWith("/>") ? " " : "";
        o +=
          r === E
            ? i + _
            : a >= 0
            ? (n.push(l), i.slice(0, a) + "$lit$" + i.slice(a) + g + d)
            : i + g + (-2 === a ? (n.push(void 0), e) : d);
      }
      const l = o + (t[i] || "<?>") + (2 === e ? "</svg>" : "");
      return [void 0 !== $ ? $.createHTML(l) : l, n];
    };
  class L {
    constructor({ strings: t, _$litType$: e }, i) {
      let n;
      this.parts = [];
      let s = 0,
        o = 0;
      const r = t.length - 1,
        l = this.parts,
        [c, a] = z(t, e);
      if (
        ((this.el = L.createElement(c, i)),
        (M.currentNode = this.el.content),
        2 === e)
      ) {
        const t = this.el.content,
          e = t.firstChild;
        e.remove(), t.append(...e.childNodes);
      }
      for (; null !== (n = M.nextNode()) && l.length < r; ) {
        if (1 === n.nodeType) {
          if (n.hasAttributes()) {
            const t = [];
            for (const e of n.getAttributeNames())
              if (e.endsWith("$lit$") || e.startsWith(g)) {
                const i = a[o++];
                if ((t.push(e), void 0 !== i)) {
                  const t = n.getAttribute(i.toLowerCase() + "$lit$").split(g),
                    e = /([.?@])?(.*)/.exec(i);
                  l.push({
                    type: 1,
                    index: s,
                    name: e[2],
                    strings: t,
                    ctor:
                      "." === e[1]
                        ? V
                        : "?" === e[1]
                        ? q
                        : "@" === e[1]
                        ? J
                        : D,
                  });
                } else l.push({ type: 6, index: s });
              }
            for (const e of t) n.removeAttribute(e);
          }
          if (U.test(n.tagName)) {
            const t = n.textContent.split(g),
              e = t.length - 1;
            if (e > 0) {
              n.textContent = v ? v.emptyScript : "";
              for (let i = 0; i < e; i++)
                n.append(t[i], x()),
                  M.nextNode(),
                  l.push({ type: 2, index: ++s });
              n.append(t[e], x());
            }
          }
        } else if (8 === n.nodeType)
          if (n.data === m) l.push({ type: 2, index: s });
          else {
            let t = -1;
            for (; -1 !== (t = n.data.indexOf(g, t + 1)); )
              l.push({ type: 7, index: s }), (t += g.length - 1);
          }
        s++;
      }
    }
    static createElement(t, e) {
      const i = y.createElement("template");
      return (i.innerHTML = t), i;
    }
  }
  function j(t, e, i = t, n) {
    var s, o, r, l;
    if (e === k) return e;
    let c =
      void 0 !== n
        ? null === (s = i._$Cl) || void 0 === s
          ? void 0
          : s[n]
        : i._$Cu;
    const a = b(e) ? void 0 : e._$litDirective$;
    return (
      (null == c ? void 0 : c.constructor) !== a &&
        (null === (o = null == c ? void 0 : c._$AO) ||
          void 0 === o ||
          o.call(c, !1),
        void 0 === a ? (c = void 0) : ((c = new a(t)), c._$AT(t, i, n)),
        void 0 !== n
          ? ((null !== (r = (l = i)._$Cl) && void 0 !== r ? r : (l._$Cl = []))[
              n
            ] = c)
          : (i._$Cu = c)),
      void 0 !== c && (e = j(t, c._$AS(t, e.values), c, n)),
      e
    );
  }
  class I {
    constructor(t, e) {
      (this.v = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    p(t) {
      var e;
      const {
          el: { content: i },
          parts: n,
        } = this._$AD,
        s = (
          null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e
            ? e
            : y
        ).importNode(i, !0);
      M.currentNode = s;
      let o = M.nextNode(),
        r = 0,
        l = 0,
        c = n[0];
      for (; void 0 !== c; ) {
        if (r === c.index) {
          let e;
          2 === c.type
            ? (e = new B(o, o.nextSibling, this, t))
            : 1 === c.type
            ? (e = new c.ctor(o, c.name, c.strings, this, t))
            : 6 === c.type && (e = new W(o, this, t)),
            this.v.push(e),
            (c = n[++l]);
        }
        r !== (null == c ? void 0 : c.index) && ((o = M.nextNode()), r++);
      }
      return s;
    }
    m(t) {
      let e = 0;
      for (const i of this.v)
        void 0 !== i &&
          (void 0 !== i.strings
            ? (i._$AI(t, i, e), (e += i.strings.length - 2))
            : i._$AI(t[e])),
          e++;
    }
  }
  class B {
    constructor(t, e, i, n) {
      var s;
      (this.type = 2),
        (this._$AH = O),
        (this._$AN = void 0),
        (this._$AA = t),
        (this._$AB = e),
        (this._$AM = i),
        (this.options = n),
        (this._$Cg =
          null === (s = null == n ? void 0 : n.isConnected) ||
          void 0 === s ||
          s);
    }
    get _$AU() {
      var t, e;
      return null !==
        (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
        void 0 !== e
        ? e
        : this._$Cg;
    }
    get parentNode() {
      let t = this._$AA.parentNode;
      const e = this._$AM;
      return void 0 !== e && 11 === t.nodeType && (t = e.parentNode), t;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t, e = this) {
      (t = j(this, t, e)),
        b(t)
          ? t === O || null == t || "" === t
            ? (this._$AH !== O && this._$AR(), (this._$AH = O))
            : t !== this._$AH && t !== k && this.$(t)
          : void 0 !== t._$litType$
          ? this.T(t)
          : void 0 !== t.nodeType
          ? this.S(t)
          : ((t) => {
              var e;
              return (
                A(t) ||
                "function" ==
                  typeof (null === (e = t) || void 0 === e
                    ? void 0
                    : e[Symbol.iterator])
              );
            })(t)
          ? this.M(t)
          : this.$(t);
    }
    A(t, e = this._$AB) {
      return this._$AA.parentNode.insertBefore(t, e);
    }
    S(t) {
      this._$AH !== t && (this._$AR(), (this._$AH = this.A(t)));
    }
    $(t) {
      this._$AH !== O && b(this._$AH)
        ? (this._$AA.nextSibling.data = t)
        : this.S(y.createTextNode(t)),
        (this._$AH = t);
    }
    T(t) {
      var e;
      const { values: i, _$litType$: n } = t,
        s =
          "number" == typeof n
            ? this._$AC(t)
            : (void 0 === n.el && (n.el = L.createElement(n.h, this.options)),
              n);
      if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === s)
        this._$AH.m(i);
      else {
        const t = new I(s, this),
          e = t.p(this.options);
        t.m(i), this.S(e), (this._$AH = t);
      }
    }
    _$AC(t) {
      let e = N.get(t.strings);
      return void 0 === e && N.set(t.strings, (e = new L(t))), e;
    }
    M(t) {
      A(this._$AH) || ((this._$AH = []), this._$AR());
      const e = this._$AH;
      let i,
        n = 0;
      for (const s of t)
        n === e.length
          ? e.push((i = new B(this.A(x()), this.A(x()), this, this.options)))
          : (i = e[n]),
          i._$AI(s),
          n++;
      n < e.length && (this._$AR(i && i._$AB.nextSibling, n), (e.length = n));
    }
    _$AR(t = this._$AA.nextSibling, e) {
      var i;
      for (
        null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, e);
        t && t !== this._$AB;

      ) {
        const e = t.nextSibling;
        t.remove(), (t = e);
      }
    }
    setConnected(t) {
      var e;
      void 0 === this._$AM &&
        ((this._$Cg = t),
        null === (e = this._$AP) || void 0 === e || e.call(this, t));
    }
  }
  class D {
    constructor(t, e, i, n, s) {
      (this.type = 1),
        (this._$AH = O),
        (this._$AN = void 0),
        (this.element = t),
        (this.name = e),
        (this._$AM = n),
        (this.options = s),
        i.length > 2 || "" !== i[0] || "" !== i[1]
          ? ((this._$AH = Array(i.length - 1).fill(new String())),
            (this.strings = i))
          : (this._$AH = O);
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t, e = this, i, n) {
      const s = this.strings;
      let o = !1;
      if (void 0 === s)
        (t = j(this, t, e, 0)),
          (o = !b(t) || (t !== this._$AH && t !== k)),
          o && (this._$AH = t);
      else {
        const n = t;
        let r, l;
        for (t = s[0], r = 0; r < s.length - 1; r++)
          (l = j(this, n[i + r], e, r)),
            l === k && (l = this._$AH[r]),
            o || (o = !b(l) || l !== this._$AH[r]),
            l === O
              ? (t = O)
              : t !== O && (t += (null != l ? l : "") + s[r + 1]),
            (this._$AH[r] = l);
      }
      o && !n && this.k(t);
    }
    k(t) {
      t === O
        ? this.element.removeAttribute(this.name)
        : this.element.setAttribute(this.name, null != t ? t : "");
    }
  }
  class V extends D {
    constructor() {
      super(...arguments), (this.type = 3);
    }
    k(t) {
      this.element[this.name] = t === O ? void 0 : t;
    }
  }
  class q extends D {
    constructor() {
      super(...arguments), (this.type = 4);
    }
    k(t) {
      t && t !== O
        ? this.element.setAttribute(this.name, "")
        : this.element.removeAttribute(this.name);
    }
  }
  class J extends D {
    constructor(t, e, i, n, s) {
      super(t, e, i, n, s), (this.type = 5);
    }
    _$AI(t, e = this) {
      var i;
      if ((t = null !== (i = j(this, t, e, 0)) && void 0 !== i ? i : O) === k)
        return;
      const n = this._$AH,
        s =
          (t === O && n !== O) ||
          t.capture !== n.capture ||
          t.once !== n.once ||
          t.passive !== n.passive,
        o = t !== O && (n === O || s);
      s && this.element.removeEventListener(this.name, this, n),
        o && this.element.addEventListener(this.name, this, t),
        (this._$AH = t);
    }
    handleEvent(t) {
      var e, i;
      "function" == typeof this._$AH
        ? this._$AH.call(
            null !==
              (i =
                null === (e = this.options) || void 0 === e
                  ? void 0
                  : e.host) && void 0 !== i
              ? i
              : this.element,
            t
          )
        : this._$AH.handleEvent(t);
    }
  }
  class W {
    constructor(t, e, i) {
      (this.element = t),
        (this.type = 6),
        (this._$AN = void 0),
        (this._$AM = e),
        (this.options = i);
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t) {
      j(this, t);
    }
  }
  var K, X, F;
  null === (u = globalThis.litHtmlPolyfillSupport) ||
    void 0 === u ||
    u.call(globalThis, L, B),
    (null !== (f = globalThis.litHtmlVersions) && void 0 !== f
      ? f
      : (globalThis.litHtmlVersions = [])
    ).push("2.0.0");
  class Z extends p {
    constructor() {
      super(...arguments),
        (this.renderOptions = { host: this }),
        (this._$Dt = void 0);
    }
    createRenderRoot() {
      var t, e;
      const i = super.createRenderRoot();
      return (
        (null !== (t = (e = this.renderOptions).renderBefore) &&
          void 0 !== t) ||
          (e.renderBefore = i.firstChild),
        i
      );
    }
    update(t) {
      const e = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
        super.update(t),
        (this._$Dt = ((t, e, i) => {
          var n, s;
          const o =
            null !== (n = null == i ? void 0 : i.renderBefore) && void 0 !== n
              ? n
              : e;
          let r = o._$litPart$;
          if (void 0 === r) {
            const t =
              null !== (s = null == i ? void 0 : i.renderBefore) && void 0 !== s
                ? s
                : null;
            o._$litPart$ = r = new B(
              e.insertBefore(x(), t),
              t,
              void 0,
              null != i ? i : {}
            );
          }
          return r._$AI(t), r;
        })(e, this.renderRoot, this.renderOptions));
    }
    connectedCallback() {
      var t;
      super.connectedCallback(),
        null === (t = this._$Dt) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
      var t;
      super.disconnectedCallback(),
        null === (t = this._$Dt) || void 0 === t || t.setConnected(!1);
    }
    render() {
      return k;
    }
  }
  (Z.finalized = !0),
    (Z._$litElement$ = !0),
    null === (K = globalThis.litElementHydrateSupport) ||
      void 0 === K ||
      K.call(globalThis, { LitElement: Z }),
    null === (X = globalThis.litElementPolyfillSupport) ||
      void 0 === X ||
      X.call(globalThis, { LitElement: Z }),
    (null !== (F = globalThis.litElementVersions) && void 0 !== F
      ? F
      : (globalThis.litElementVersions = [])
    ).push("3.0.0");
  const Q = (t, e) =>
    "method" === e.kind && e.descriptor && !("value" in e.descriptor)
      ? {
          ...e,
          finisher(i) {
            i.createProperty(e.key, t);
          },
        }
      : {
          kind: "field",
          key: Symbol(),
          placement: "own",
          descriptor: {},
          originalKey: e.key,
          initializer() {
            "function" == typeof e.initializer &&
              (this[e.key] = e.initializer.call(this));
          },
          finisher(i) {
            i.createProperty(e.key, t);
          },
        };
  function Y(t) {
    return (e, i) =>
      void 0 !== i
        ? ((t, e, i) => {
            e.constructor.createProperty(i, t);
          })(t, e, i)
        : Q(t, e);
  }
  const G = (t) => (e) =>
      "function" == typeof e
        ? ((t, e) => (window.customElements.define(t, e), e))(t, e)
        : ((t, e) => {
            const { kind: i, elements: n } = e;
            return {
              kind: i,
              elements: n,
              finisher(e) {
                window.customElements.define(t, e);
              },
            };
          })(t, e),
    tt = o`
  :root {
    font-family: "Roboto Slab", serif;
    color: #444;
    background: #f9f9f9;
    font-size: 16px;
    font-family: "PT Sans", sans-serif;
  }
`;
  var et = function (t, e, i, n) {
    var s,
      o = arguments.length,
      r =
        o < 3
          ? e
          : null === n
          ? (n = Object.getOwnPropertyDescriptor(e, i))
          : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      r = Reflect.decorate(t, e, i, n);
    else
      for (var l = t.length - 1; l >= 0; l--)
        (s = t[l]) && (r = (o < 3 ? s(r) : o > 3 ? s(e, i, r) : s(e, i)) || r);
    return o > 3 && r && Object.defineProperty(e, i, r), r;
  };
  const it = o`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .experience {
    background: #002440;
    padding: 50px 0;
    overflow-x: hidden;
  }
  .experience .content {
    text-align: center;
  }
  .experience .content h1 {
    font-size: 2em;
    color: #fff;
  }
   {
    padding: 50px 0;
    list-style-type: none;
  }
  li {
    background: #f5f5f5;
    position: relative;
    margin-left: 20px;
    width: 5px;
    padding-bottom: 40px;
  }
  li:last-child {
    padding-bottom: 7px;
  }
  li:before {
    content: "";
    background: #002440;
    position: absolute;
    left: 50%;
    top: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    border: 4px solid #f5f5f5;
  }
  li .hidden {
    opacity: 0;
    margin-left: 10vw;
  }
  .experience-content {
    background: #f5f5f5;
    position: relative;
    top: 7px;
    left: 48px;
    width: calc(100vw - 100px);
    padding: 20px;
    text-align: center;
    -webkit-border-radius: 0 5px 5px;
    -moz-border-radius: 0 5px 5px;
    border-radius: 0 5px 5px;
  }
  .experience-content h2 {
    font-size: 1.5em;
    color: #3c3c3c;
    padding-bottom: 10px;
  }
  .experience-content .experience-time {
    color: #777;
    font-size: 1.1em;
    padding-bottom: 10px;
  }
  .experience-content p {
    color: #1a1a1a;
    font-size: 0.95em;
  }
  .experience-content:before {
    content: "";
    background: #f5f5f5;
    position: absolute;
    top: 0;
    left: -35px;
    width: 35px;
    height: 5px;
  }

  @media screen and (min-width: 960px) {
    li {
      margin: 0 auto;
    }
    .experience-content {
      width: 40vw;
    }
    li.odd .experience-content {
      left: 63px;
    }
    li.odd .experience-content:before {
      left: -52px;
      width: 52px;
    }
    li.even .experience-content {
      left: calc(-40vw - 57px);
      -webkit-border-radius: 5px 0px 5px 5px;
      -moz-border-radius: 5px 0px 5px 5px;
      border-radius: 5px 0px 5px 5px;
    }
    li.even .experience-content:before {
      left: auto;
      right: -52px;
      width: 52px;
    }
    li.odd .hidden {
      margin-left: 10vw;
    }
    li.even .hidden {
      margin-left: -10vw;
    }

    @keyframes circle {
      from {
        box-shadow: 0 0 0 0px var(--color-primary);
      }
      to {
        box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
      }
    }
    li:hover::before {
      animation: circle 1.2s infinite;
    }
  }
`;
  let nt = class extends Z {
    render() {
      return H`
      <li class=${this.index % 2 == 0 ? "even" : "odd"}>
        <div class="experience-content hidden">
          <h2>${this.cvEntry.company}</h2>
          <div class="experience-time">
            ${this.cvEntry.from} - ${this.cvEntry.to}
          </div>
          <p>${this.cvEntry.description}</p>
        </div>
      </li>
    `;
    }
  };
  (nt.styles = [tt, it]),
    et([Y()], nt.prototype, "cvEntry", void 0),
    et([Y()], nt.prototype, "index", void 0),
    (nt = et([G("experience-content")], nt));
  var st = function (t, e, i, n) {
    var s,
      o = arguments.length,
      r =
        o < 3
          ? e
          : null === n
          ? (n = Object.getOwnPropertyDescriptor(e, i))
          : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      r = Reflect.decorate(t, e, i, n);
    else
      for (var l = t.length - 1; l >= 0; l--)
        (s = t[l]) && (r = (o < 3 ? s(r) : o > 3 ? s(e, i, r) : s(e, i)) || r);
    return o > 3 && r && Object.defineProperty(e, i, r), r;
  };
  const ot = o`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --color-primary: #04c2c9;
    --color-action: #e31b6d;
    --color-bg: #d2dbdd;
    --color-chip-bg: #f2f2f2;
    --color-chip-bg-hover: #e6e6e6;
  }

  .experience {
    width: 100%;
    height: 100%;
    color: #444;
    background: #f9f9f9;
    font-size: 16px;
    font-family: "PT Sans", sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  section {
    position: relative;
    width: 100%;
  }

  /*##### EXPERIENCE SECTION #####*/
  .experience {
    background: #002440;
    padding: 50px 0;
    overflow-x: hidden;
  }
  .experience .content {
    text-align: center;
  }
  .experience .content h1 {
    font-size: 2em;
    color: #fff;
  }
  .experience .content ul {
    padding: 50px 0;
    list-style-type: none;
  }
`;
  let rt = class extends Z {
    constructor() {
      super(),
        (this.cvEntries = []),
        (this.innerHTML +=
          "\n<style>\n@import url(https://fonts.googleapis.com/css?family=PT+Sans);\n</style>\n");
    }
    firstUpdated() {
      return (function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, o) {
          function r(t) {
            try {
              c(n.next(t));
            } catch (t) {
              o(t);
            }
          }
          function l(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function c(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(r, l);
          }
          c((n = n.apply(t, e || [])).next());
        });
      })(this, void 0, void 0, function* () {
        (this.cvEntries = yield (yield fetch(
          "http://localhost:8888/.netlify/functions/sheets?sheet=experiences&spreadsheetId=1SjV3Ho0_EV7oxyf9Mz_JjQJ77CiFRtFR8-YOqi7RJ5s"
        )).json()),
          (function (t) {
            function e() {
              const e = [
                ...t.querySelectorAll(
                  ".experience .content experience-content"
                ),
              ].map((t) => {
                var e;
                return null === (e = t.shadowRoot) || void 0 === e
                  ? void 0
                  : e.querySelector(".hidden");
              });
              for (let t of e) t && i(t);
            }
            function i(t) {
              if (
                t.getBoundingClientRect().bottom - window.innerHeight <
                t.clientHeight
              ) {
                const e = 600;
                t.animate({ opacity: "1", marginLeft: "0" }, { duration: e }),
                  setTimeout(() => {
                    t.classList.remove("hidden");
                  }, e);
              }
            }
            (window.onscroll = () => e()),
              setTimeout(() => {
                e();
              }, 0);
          })(this.shadowRoot);
      });
    }
    render() {
      return H`
      <section class="experience">
        <div class="content">
          <ul>
            ${
              this.cvEntries.length
                ? this.cvEntries.map(
                    (t, e) => H`
                    <experience-content
                      .cvEntry=${t}
                      .index=${e}
                    ></experience-content>
                  `
                  )
                : H`<span>Loading...</span>`
            }
          </ul>
        </div>
      </section>
    `;
    }
  };
  (rt.styles = [ot]),
    st([Y()], rt.prototype, "cvEntries", void 0),
    (rt = st([G("cv-experience")], rt));
})();
