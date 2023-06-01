/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),i=new Map;class n{constructor(e,i){if(this._$cssResult$=!0,i!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let t=i.get(this.cssText);return e&&void 0===t&&(i.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const s=e=>new n("string"==typeof e?e:e+"",t),o=(e,...i)=>{const s=1===e.length?e[0]:i.reduce(((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1]),e[0]);return new n(s,t)},r=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return s(t)})(e):e;var l,a;const c={toAttribute(e,t){switch(t){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},h=(e,t)=>t!==e&&(t==t||e==e),d={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:h};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const n=this._$Eh(i,t);void 0!==n&&(this._$Eu.set(n,i),e.push(n))})),e}static createProperty(e,t=d){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const s=this[e];this[t]=n,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eh(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ev=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$Em)&&void 0!==t?t:this._$Em=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$Em)||void 0===t||t.splice(this._$Em.indexOf(e)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),n=window.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$Eg(e,t,i=d){var n,s;const o=this.constructor._$Eh(e,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(s=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==s?s:c.toAttribute)(t,i.type);this._$Ei=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(e,t){var i,n,s;const o=this.constructor,r=o._$Eu.get(e);if(void 0!==r&&this._$Ei!==r){const e=o.getPropertyOptions(r),l=e.converter,a=null!==(s=null!==(n=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:"function"==typeof l?l:null)&&void 0!==s?s:c.fromAttribute;this._$Ei=r,this[r]=a(t,e.type),this._$Ei=null}}requestUpdate(e,t,i){let n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||h)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Ei!==e&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Em)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(e){return!0}update(e){void 0!==this._$ES&&(this._$ES.forEach(((e,t)=>this._$Eg(t,this[t],e))),this._$ES=void 0),this._$ET()}updated(e){}firstUpdated(e){}}var u,f;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null===(l=globalThis.reactiveElementPolyfillSupport)||void 0===l||l.call(globalThis,{ReactiveElement:p}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.0.0");const v=globalThis.trustedTypes,g=v?v.createPolicy("lit-html",{createHTML:e=>e}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,m="?"+$,_=`<${m}>`,x=document,y=(e="")=>x.createComment(e),b=e=>null===e||"object"!=typeof e&&"function"!=typeof e,A=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,E=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,k=/"/g,P=/^(?:script|style|textarea)$/i,U=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),H=U(1),M=(U(2),Symbol.for("lit-noChange")),R=Symbol.for("lit-nothing"),N=new WeakMap,O=x.createTreeWalker(x,129,null,!1),z=(e,t)=>{const i=e.length-1,n=[];let s,o=2===t?"<svg>":"",r=w;for(let t=0;t<i;t++){const i=e[t];let l,a,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,a=r.exec(i),null!==a);)h=r.lastIndex,r===w?"!--"===a[1]?r=S:void 0!==a[1]?r=E:void 0!==a[2]?(P.test(a[2])&&(s=RegExp("</"+a[2],"g")),r=T):void 0!==a[3]&&(r=T):r===T?">"===a[0]?(r=null!=s?s:w,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?T:'"'===a[3]?k:C):r===k||r===C?r=T:r===S||r===E?r=w:(r=T,s=void 0);const d=r===T&&e[t+1].startsWith("/>")?" ":"";o+=r===w?i+_:c>=0?(n.push(l),i.slice(0,c)+"$lit$"+i.slice(c)+$+d):i+$+(-2===c?(n.push(void 0),t):d)}const l=o+(e[i]||"<?>")+(2===t?"</svg>":"");return[void 0!==g?g.createHTML(l):l,n]};class D{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,o=0;const r=e.length-1,l=this.parts,[a,c]=z(e,t);if(this.el=D.createElement(a,i),O.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=O.nextNode())&&l.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith($)){const i=c[o++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+"$lit$").split($),t=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?B:"?"===t[1]?V:"@"===t[1]?Y:F})}else l.push({type:6,index:s})}for(const t of e)n.removeAttribute(t)}if(P.test(n.tagName)){const e=n.textContent.split($),t=e.length-1;if(t>0){n.textContent=v?v.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],y()),O.nextNode(),l.push({type:2,index:++s});n.append(e[t],y())}}}else if(8===n.nodeType)if(n.data===m)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=n.data.indexOf($,e+1));)l.push({type:7,index:s}),e+=$.length-1}s++}}static createElement(e,t){const i=x.createElement("template");return i.innerHTML=e,i}}function j(e,t,i=e,n){var s,o,r,l;if(t===M)return t;let a=void 0!==n?null===(s=i._$Cl)||void 0===s?void 0:s[n]:i._$Cu;const c=b(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===c?a=void 0:(a=new c(e),a._$AT(e,i,n)),void 0!==n?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[n]=a:i._$Cu=a),void 0!==a&&(t=j(e,a._$AS(e,t.values),a,n)),t}class L{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:n}=this._$AD,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:x).importNode(i,!0);O.currentNode=s;let o=O.nextNode(),r=0,l=0,a=n[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new I(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new q(o,this,e)),this.v.push(t),a=n[++l]}r!==(null==a?void 0:a.index)&&(o=O.nextNode(),r++)}return s}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class I{constructor(e,t,i,n){var s;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cg=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=j(this,e,t),b(e)?e===R||null==e||""===e?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==M&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):(e=>{var t;return A(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==R&&b(this._$AH)?this._$AA.nextSibling.data=e:this.S(x.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:n}=e,s="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=D.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.m(i);else{const e=new L(s,this),t=e.p(this.options);e.m(i),this.S(t),this._$AH=e}}_$AC(e){let t=N.get(e.strings);return void 0===t&&N.set(e.strings,t=new D(e)),t}M(e){A(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const s of e)n===t.length?t.push(i=new I(this.A(y()),this.A(y()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class F{constructor(e,t,i,n,s){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const s=this.strings;let o=!1;if(void 0===s)e=j(this,e,t,0),o=!b(e)||e!==this._$AH&&e!==M,o&&(this._$AH=e);else{const n=e;let r,l;for(e=s[0],r=0;r<s.length-1;r++)l=j(this,n[i+r],t,r),l===M&&(l=this._$AH[r]),o||(o=!b(l)||l!==this._$AH[r]),l===R?e=R:e!==R&&(e+=(null!=l?l:"")+s[r+1]),this._$AH[r]=l}o&&!n&&this.k(e)}k(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class B extends F{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===R?void 0:e}}class V extends F{constructor(){super(...arguments),this.type=4}k(e){e&&e!==R?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Y extends F{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=j(this,e,t,0))&&void 0!==i?i:R)===M)return;const n=this._$AH,s=e===R&&n!==R||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==R&&(n===R||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class q{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){j(this,e)}}var J,W,K;null===(u=globalThis.litHtmlPolyfillSupport)||void 0===u||u.call(globalThis,D,I),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.0.0");class X extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,i)=>{var n,s;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let r=o._$litPart$;if(void 0===r){const e=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new I(t.insertBefore(y(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return M}}X.finalized=!0,X._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:X}),null===(W=globalThis.litElementPolyfillSupport)||void 0===W||W.call(globalThis,{LitElement:X}),(null!==(K=globalThis.litElementVersions)&&void 0!==K?K:globalThis.litElementVersions=[]).push("3.0.0");const Z=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function Q(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Z(e,t)}const G=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t);const ee=o`
  :root {
    font-family: "Roboto Slab", serif;
    color: #444;
    background: #f9f9f9;
    font-size: 16px;
    font-family: "PT Sans", sans-serif;
  }
`;var te=function(e,t,i,n){var s,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,i,r):s(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};const ie=o`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    background: var(--experience_background);
    position: relative;
    margin-left: 20px;
    width: 5px;
    padding-bottom: 40px;
  }
  @keyframes circle {
    from {
      box-shadow: 0 0 0 0px var(--primary_color);
    }
    to {
      box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
    }
  }
  li:hover::before {
    animation: circle 1.2s infinite;
    background: var(--primary_color);
  }
  li:last-child {
    padding-bottom: 30px;
  }
  li::before {
    content: "";
    background: #002440;
    position: absolute;
    left: 50%;
    top: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    border: 4px solid var(--experience_background);
    border-radius: 50%;
  }
  li .hidden {
    opacity: 0;
    margin-left: 10vw;
  }
  .experience-content {
    background: var(--experience_background);
    position: relative;
    top: 7px;
    left: 48px;
    width: calc(100vw - 90px);
    padding: 20px 40px;
    text-align: center;
    -webkit-border-radius: 0 5px 5px;
    -moz-border-radius: 0 5px 5px;
    border-radius: 0 5px 5px;
  }

  @media screen and (min-width: 1200px) {
    .experience-content {
      width: calc(100vw - 500px);
    }
  }
  @media screen and (min-width: 900px) {
    .experience-content {
      width: calc(100vw - 300px);
    }
  }
  @media screen and (min-width: 600px) {
    .experience-content {
      width: calc(100vw - 200px);
    }
  }

  .experience-content h3 {
    font-size: 1.5em;
    color: var(--header_font_color);
  }
  .experience-content .experience-time,
  .company {
    color: var(--font_color);
    font-size: 1.1em;
    padding-bottom: 10px;
  }

  .experience-content p {
    color: var(--font_color);
    font-size: 1em;
  }
  .experience-content:before {
    content: "";
    background: var(--experience_background);
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
  }

  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  }

  .logo {
    height: 35px;
    width: 35px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo img {
    width: 100%;
    height: 100%;
  }
  .company {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }
  .company .feather-map-pin {
    margin-left: 15px;
    margin-right: 4px;
  }
`;let ne=class extends X{connectedCallback(){super.connectedCallback(),this.dateTo=this.getDateFromString(this.experience.to),this.dateFrom=this.getDateFromString(this.experience.from)}getDateFromString(e){return isNaN(new Date(e).getTime())?new Date:new Date(e)}getMonthFromDate(e){return e.toLocaleString("default",{month:"long"})}monthDiff(){return this.dateTo.getMonth()-this.dateFrom.getMonth()+12*(this.dateTo.getFullYear()-this.dateFrom.getFullYear())+1}get duration(){const e=this.monthDiff(),t=e%12,i=12===e?1:e<12?0:Math.ceil((e-12)/12);return console.log(e),`${i>0?`${i} ${1===i?"Year ":"Years "}`:""}\n            ${0===t?"":`${t}${1===t?" Month":" Months"}`}`}get experienceTime(){const e=new Date,t=this.dateTo.getMonth()===e.getMonth()&&this.dateTo.getFullYear()===e.getFullYear();return`${this.getMonthFromDate(this.dateFrom)} ${this.dateFrom.getFullYear()}\n            -\n            ${t?"Today":`${this.getMonthFromDate(this.dateTo)} ${this.dateTo.getFullYear()}`}`}render(){return H`
      <li class=${this.index%2==0?"even":"odd"}>
        <div class="experience-content hidden">
          <div class="header">
            ${this.experience.logo?H`<div class="logo">
                    <img src="${this.experience.logo}" alt="company-logo" />
                  </div>`:H``}
            <h3>${this.experience.job_title}</h3>
          </div>
          <div class="company">
            <h4>${this.experience.company}</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <h4>${this.experience.city}</h4>
          </div>
          <div>

          </div>
          <div class="experience-time">
            <span>${this.experienceTime}</span>
            <span class="duration">&#183 ${this.duration}</span>
          </div>
          <p>${this.experience.description}</p>
        </div>
      </li>
    `}};ne.styles=[ee,ie],te([Q()],ne.prototype,"experience",void 0),te([Q()],ne.prototype,"index",void 0),ne=te([G("experience-content")],ne);class se extends class{constructor(e){this.baseUrl=e}get(e){return function(e,t,i,n){return new(i||(i=Promise))((function(s,o){function r(e){try{a(n.next(e))}catch(e){o(e)}}function l(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,l)}a((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){const t=yield fetch(`${this.baseUrl}${e}`);return yield t.json()}))}}{constructor(e){super("https://unruffled-varahamihira-0fe598.netlify.app/.netlify/functions/sheets"),this.spreadsheetId=e}getConfig(){return super.get(`?sheet=experiences,design&spreadsheetId=${this.spreadsheetId}`)}}var oe=function(e,t,i,n){var s,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,i,r):s(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};const re=o`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .experience {
    width: 100%;
    height: 100%;
    color: #444;
    background: var(--background_color);
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
    background: var(--background_color);
    padding: 0px 0;
    overflow-x: hidden;
  }

  @media screen and (min-width: 600px) {
    .experience {
      padding: 0px 50px;
    }
  }

  @media screen and (min-width: 900px) {
    .experience {
      padding: 0px 100px;
    }
  }
  @media screen and (min-width: 1200px) {
    .experience {
      padding: 0px 200px;
    }
  }
  .experience .content {
    text-align: center;
  }
  .experience .content h1 {
    font-size: 2em;
    color: #fff;
  }
  .experience .content ul {
    padding: 0px 0;
    list-style-type: none;
  }
`;let le=class extends X{constructor(){super(),this.config=null,this.spreadsheetId="",this.innerHTML+="\n<style>\n@import url(https://fonts.googleapis.com/css?family=PT+Sans);\n</style>\n"}firstUpdated(){return function(e,t,i,n){return new(i||(i=Promise))((function(s,o){function r(e){try{a(n.next(e))}catch(e){o(e)}}function l(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,l)}a((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){this.configService=new se(this.spreadsheetId||"1SjV3Ho0_EV7oxyf9Mz_JjQJ77CiFRtFR8-YOqi7RJ5s"),this.config=yield this.configService.getConfig(),this.innerHTML+=(({accent_color:e,primary_color:t,background_color:i,experience_background:n,font_color:s,header_font_color:o})=>`\n<style>\n:root {\n  --primary_color: ${t};\n  --accent_color: ${e};\n  --background_color: ${i};\n  --experience_background: ${n};\n  --font_color: ${s};\n  --header_font_color: ${o};\n}\n</style>\n`)(this.config.design[0]),function(e){function t(){[...e.querySelectorAll(".experience .content experience-content")].map((e=>{var t;return null===(t=e.shadowRoot)||void 0===t?void 0:t.querySelector(".hidden")})).filter((e=>!!e)).forEach(((e,t)=>function(e,t){setTimeout((()=>{if(e.getBoundingClientRect().bottom-window.innerHeight<e.clientHeight){const t=600;e.animate({opacity:"1",marginLeft:"0"},{duration:t}),setTimeout((()=>{e.classList.remove("hidden")}),t)}}),100*t)}(e,t)))}window.onscroll=()=>t(),setTimeout((()=>{t()}),0)}(this.shadowRoot)}))}render(){return H`
      <section class="experience">
        <div class="content">
          <ul>
            ${this.config?this.config.experiences.map(((e,t)=>H`
                    <experience-content
                      .experience=${e}
                      .index=${t}
                    ></experience-content>
                  `)):H`<span>Loading...</span>`}
          </ul>
        </div>
      </section>
    `}};le.styles=[re],oe([Q()],le.prototype,"config",void 0),oe([Q()],le.prototype,"spreadsheetId",void 0),le=oe([G("cv-experience")],le)})();