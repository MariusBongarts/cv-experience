/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),n=new Map;class i{constructor(t,n){if(this._$cssResult$=!0,n!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=n.get(this.cssText);return t&&void 0===e&&(n.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=t=>new i("string"==typeof t?t:t+"",e),s=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1]),t[0]);return new i(o,e)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o(e)})(t):t;var l,c;const a={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},d=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,n)=>{const i=this._$Eh(n,e);void 0!==i&&(this._$Eu.set(i,n),t.push(i))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,n;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const n=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,n)=>{t?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),i=window.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=t.cssText,e.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$Eg(t,e,n=h){var i,o;const s=this.constructor._$Eh(t,n);if(void 0!==s&&!0===n.reflect){const r=(null!==(o=null===(i=n.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==o?o:a.toAttribute)(e,n.type);this._$Ei=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Ei=null}}_$AK(t,e){var n,i,o;const s=this.constructor,r=s._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=s.getPropertyOptions(r),l=t.converter,c=null!==(o=null!==(i=null===(n=l)||void 0===n?void 0:n.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==o?o:a.fromAttribute;this._$Ei=r,this[r]=c(e,t.type),this._$Ei=null}}requestUpdate(t,e,n){let i=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(n)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}var u,f;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null===(l=globalThis.reactiveElementPolyfillSupport)||void 0===l||l.call(globalThis,{ReactiveElement:p}),(null!==(c=globalThis.reactiveElementVersions)&&void 0!==c?c:globalThis.reactiveElementVersions=[]).push("1.0.0");const v=globalThis.trustedTypes,x=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,g="?"+$,m=`<${g}>`,_=document,y=(t="")=>_.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,S=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,P=/"/g,k=/^(?:script|style|textarea)$/i,R=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),U=R(1),H=(R(2),Symbol.for("lit-noChange")),O=Symbol.for("lit-nothing"),N=new WeakMap,z=_.createTreeWalker(_,129,null,!1),M=(t,e)=>{const n=t.length-1,i=[];let o,s=2===e?"<svg>":"",r=w;for(let e=0;e<n;e++){const n=t[e];let l,c,a=-1,d=0;for(;d<n.length&&(r.lastIndex=d,c=r.exec(n),null!==c);)d=r.lastIndex,r===w?"!--"===c[1]?r=E:void 0!==c[1]?r=S:void 0!==c[2]?(k.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=C):void 0!==c[3]&&(r=C):r===C?">"===c[0]?(r=null!=o?o:w,a=-1):void 0===c[1]?a=-2:(a=r.lastIndex-c[2].length,l=c[1],r=void 0===c[3]?C:'"'===c[3]?P:T):r===P||r===T?r=C:r===E||r===S?r=w:(r=C,o=void 0);const h=r===C&&t[e+1].startsWith("/>")?" ":"";s+=r===w?n+m:a>=0?(i.push(l),n.slice(0,a)+"$lit$"+n.slice(a)+$+h):n+$+(-2===a?(i.push(void 0),e):h)}const l=s+(t[n]||"<?>")+(2===e?"</svg>":"");return[void 0!==x?x.createHTML(l):l,i]};class L{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,s=0;const r=t.length-1,l=this.parts,[c,a]=M(t,e);if(this.el=L.createElement(c,n),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=z.nextNode())&&l.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const n=a[s++];if(t.push(e),void 0!==n){const t=i.getAttribute(n.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(n);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?q:"@"===e[1]?J:D})}else l.push({type:6,index:o})}for(const e of t)i.removeAttribute(e)}if(k.test(i.tagName)){const t=i.textContent.split($),e=t.length-1;if(e>0){i.textContent=v?v.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],y()),z.nextNode(),l.push({type:2,index:++o});i.append(t[e],y())}}}else if(8===i.nodeType)if(i.data===g)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf($,t+1));)l.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const n=_.createElement("template");return n.innerHTML=t,n}}function j(t,e,n=t,i){var o,s,r,l;if(e===H)return e;let c=void 0!==i?null===(o=n._$Cl)||void 0===o?void 0:o[i]:n._$Cu;const a=b(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==a&&(null===(s=null==c?void 0:c._$AO)||void 0===s||s.call(c,!1),void 0===a?c=void 0:(c=new a(t),c._$AT(t,n,i)),void 0!==i?(null!==(r=(l=n)._$Cl)&&void 0!==r?r:l._$Cl=[])[i]=c:n._$Cu=c),void 0!==c&&(e=j(t,c._$AS(t,e.values),c,i)),e}class I{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:n},parts:i}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(n,!0);z.currentNode=o;let s=z.nextNode(),r=0,l=0,c=i[0];for(;void 0!==c;){if(r===c.index){let e;2===c.type?e=new B(s,s.nextSibling,this,t):1===c.type?e=new c.ctor(s,c.name,c.strings,this,t):6===c.type&&(e=new W(s,this,t)),this.v.push(e),c=i[++l]}r!==(null==c?void 0:c.index)&&(s=z.nextNode(),r++)}return o}m(t){let e=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class B{constructor(t,e,n,i){var o;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cg=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),b(t)?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==H&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==O&&b(this._$AH)?this._$AA.nextSibling.data=t:this.S(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:n,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=L.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(n);else{const t=new I(o,this),e=t.p(this.options);t.m(n),this.S(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new L(t)),e}M(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const o of t)i===e.length?e.push(n=new B(this.A(y()),this.A(y()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class D{constructor(t,e,n,i,o){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,i){const o=this.strings;let s=!1;if(void 0===o)t=j(this,t,e,0),s=!b(t)||t!==this._$AH&&t!==H,s&&(this._$AH=t);else{const i=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=j(this,i[n+r],e,r),l===H&&(l=this._$AH[r]),s||(s=!b(l)||l!==this._$AH[r]),l===O?t=O:t!==O&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}s&&!i&&this.k(t)}k(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends D{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===O?void 0:t}}class q extends D{constructor(){super(...arguments),this.type=4}k(t){t&&t!==O?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class J extends D{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=j(this,t,e,0))&&void 0!==n?n:O)===H)return;const i=this._$AH,o=t===O&&i!==O||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==O&&(i===O||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}var X,K,F;null===(u=globalThis.litHtmlPolyfillSupport)||void 0===u||u.call(globalThis,L,B),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.0.0");class Z extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,n)=>{var i,o;const s=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:e;let r=s._$litPart$;if(void 0===r){const t=null!==(o=null==n?void 0:n.renderBefore)&&void 0!==o?o:null;s._$litPart$=r=new B(e.insertBefore(y(),t),t,void 0,null!=n?n:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return H}}Z.finalized=!0,Z._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:Z}),null===(K=globalThis.litElementPolyfillSupport)||void 0===K||K.call(globalThis,{LitElement:Z}),(null!==(F=globalThis.litElementVersions)&&void 0!==F?F:globalThis.litElementVersions=[]).push("3.0.0");const Q=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Y(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):Q(t,e)}const G=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),tt=s`
  :root {
    font-family: "Roboto Slab", serif;
    color: #444;
    background: #f9f9f9;
    font-size: 16px;
    font-family: "PT Sans", sans-serif;
  }
`;var et=function(t,e,n,i){var o,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(s<3?o(r):s>3?o(e,n,r):o(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r};const nt=s`
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
`;let it=class extends Z{render(){return U`
      <li class=${this.index%2==0?"even":"odd"}>
        <div class="experience-content hidden">
          <h2>${this.cvEntry.company}</h2>
          <div class="experience-time">
            ${this.cvEntry.from} - ${this.cvEntry.to}
          </div>
          <p>${this.cvEntry.description}</p>
        </div>
      </li>
    `}};it.styles=[tt,nt],et([Y()],it.prototype,"cvEntry",void 0),et([Y()],it.prototype,"index",void 0),it=et([G("experience-content")],it);var ot=function(t,e,n,i){var o,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(s<3?o(r):s>3?o(e,n,r):o(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r};let st=class extends Z{constructor(){super(),this.cvEntries=[],this.innerHTML+="\n<style>\n@import url(https://fonts.googleapis.com/css?family=PT+Sans);\n *, *:before, *:after {\n\t margin: 0;\n\t padding: 0;\n\t box-sizing: border-box;\n}\n:root {\n\t--color-primary: #04c2c9;\n    --color-action: #e31b6d;\n    --color-bg: #d2dbdd;\n    --color-chip-bg: #f2f2f2;\n    --color-chip-bg-hover: #e6e6e6;\n  }\n\n.experience {\n\t width: 100%;\n\t height: 100%;\n\t color: #444;\n\t background: #f9f9f9;\n\t font-size: 16px;\n\t font-family: 'PT Sans', sans-serif;\n}\n a {\n\t color: inherit;\n\t text-decoration: none;\n}\n section {\n\t position: relative;\n\t width: 100%;\n}\n\n/*##### EXPERIENCE SECTION #####*/\n .experience {\n\t background: #002440;\n\t padding: 50px 0;\n\t overflow-x: hidden;\n}\n .experience .content {\n\t text-align: center;\n}\n .experience .content h1 {\n\t font-size: 2em;\n\t color: #fff;\n}\n .experience .content ul {\n\t padding: 50px 0;\n\t list-style-type: none;\n}\n .experience .content ul li {\n\t background: #f5f5f5;\n\t position: relative;\n\t margin-left: 20px;\n\t width: 5px;\n\t padding-bottom: 40px;\n}\n .experience .content ul li:last-child {\n\t padding-bottom: 7px;\n}\n .experience .content ul li:before {\n\t content: '';\n\t background: #002440;\n\t position: absolute;\n\t left: 50%;\n\t top: 0;\n\t -webkit-transform: translateX(-50%);\n\t transform: translateX(-50%);\n\t width: 20px;\n\t height: 20px;\n\t border: 4px solid #f5f5f5;\n}\n .experience .content ul li .hidden {\n\t opacity: 0;\n\t margin-left: 10vw;\n}\n .experience .content ul li .experience-content {\n\t background: #f5f5f5;\n\t position: relative;\n\t top: 7px;\n\t left: 48px;\n\t width: calc(100vw - 100px);\n\t padding: 20px;\n\t text-align: center;\n\t -webkit-border-radius: 0 5px 5px;\n\t -moz-border-radius: 0 5px 5px;\n\t border-radius: 0 5px 5px;\n}\n .experience .content ul li .experience-content h2 {\n\t font-size: 1.5em;\n\t color: #3c3c3c;\n\t padding-bottom: 10px;\n}\n .experience .content ul li .experience-content .experience-time {\n\t color: #777;\n\t font-size: 1.1em;\n\t padding-bottom: 10px;\n}\n .experience .content ul li .experience-content p {\n\t color: #1a1a1a;\n\t font-size: 0.95em;\n}\n .experience .content ul li .experience-content:before {\n\t content: '';\n\t background: #f5f5f5;\n\t position: absolute;\n\t top: 0;\n\t left: -35px;\n\t width: 35px;\n\t height: 5px;\n}\n\n/* ############################ RESPONSIVE ############################### */\n\n @media screen and (min-width: 960px) {\n\t .experience .content ul li {\n\t\t margin: 0 auto;\n\t}\n\t .experience .content ul li .experience-content {\n\t\t width: 40vw;\n\t}\n\t .experience .content ul li:nth-child(odd) .experience-content {\n\t\t left: 63px;\n\t}\n\t .experience .content ul li:nth-child(odd) .experience-content:before {\n\t\t left: -50px;\n\t\t width: 50px;\n\t}\n\t .experience .content ul li:nth-child(even) .experience-content {\n\t\t left: calc(-40vw - 57px);\n\t\t -webkit-border-radius: 5px 0px 5px 5px;\n\t\t -moz-border-radius: 5px 0px 5px 5px;\n\t\t border-radius: 5px 0px 5px 5px;\n\t}\n\t .experience .content ul li:nth-child(even) .experience-content:before {\n\t\t left: auto;\n\t\t right: -50px;\n\t\t width: 50px;\n\t}\n\t .experience .content ul li:nth-child(odd) .hidden {\n\t\t margin-left: 10vw;\n\t}\n\t .experience .content ul li:nth-child(even) .hidden {\n\t\t margin-left: -10vw;\n\t}\n}\n \n  </style>\n"}firstUpdated(){return function(t,e,n,i){return new(n||(n=Promise))((function(o,s){function r(t){try{c(i.next(t))}catch(t){s(t)}}function l(t){try{c(i.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,l)}c((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){this.cvEntries=yield(yield fetch("https://unruffled-varahamihira-0fe598.netlify.app/.netlify/functions/sheets?sheet=my-cv&spreadsheetId=1SjV3Ho0_EV7oxyf9Mz_JjQJ77CiFRtFR8-YOqi7RJ5s")).json(),function(){function t(){const t=[...document.querySelectorAll(".experience .content experience-content")].map((t=>{var e;return null===(e=t.shadowRoot)||void 0===e?void 0:e.querySelector(".hidden")}));for(let n of t)n&&e(n)}function e(t){if(t.getBoundingClientRect().bottom-window.innerHeight<t.clientHeight){const e=600;t.animate({opacity:"1",marginLeft:"0"},{duration:e}),setTimeout((()=>{t.classList.remove("hidden")}),e)}}window.onscroll=()=>t(),setTimeout((()=>{t()}),0)}()}))}createRenderRoot(){return this}render(){return U`
      <section class="experience">
        <div class="content">
          <ul>
            ${this.cvEntries.length?this.cvEntries.map(((t,e)=>U`
                    <experience-content
                      .cvEntry=${t}
                      .index=${e}
                    ></experience-content>
                  `)):U`<span>Loading...</span>`}
          </ul>
        </div>
      </section>
    `}};ot([Y()],st.prototype,"cvEntries",void 0),st=ot([G("my-cv")],st)})();