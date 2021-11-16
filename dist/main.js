/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class n{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=t=>new n("string"==typeof t?t:t+"",e),s=(t,...i)=>{const o=1===t.length?t[0]:i.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new n(o,e)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return o(e)})(t):t;var l,a;const c={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),d={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:h};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Eh(i,e);void 0!==n&&(this._$Eu.set(n,i),t.push(n))})),t}static createProperty(t,e=d){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),n=window.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=d){var n,o;const s=this.constructor._$Eh(t,i);if(void 0!==s&&!0===i.reflect){const r=(null!==(o=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==o?o:c.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Ei=null}}_$AK(t,e){var i,n,o;const s=this.constructor,r=s._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=s.getPropertyOptions(r),l=t.converter,a=null!==(o=null!==(n=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:"function"==typeof l?l:null)&&void 0!==o?o:c.fromAttribute;this._$Ei=r,this[r]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}var u,f;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null===(l=globalThis.reactiveElementPolyfillSupport)||void 0===l||l.call(globalThis,{ReactiveElement:p}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.0.0");const v=globalThis.trustedTypes,g=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,m="?"+$,_=`<${m}>`,x=document,y=(t="")=>x.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,E=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,k=/"/g,P=/^(?:script|style|textarea)$/i,U=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),H=U(1),M=(U(2),Symbol.for("lit-noChange")),R=Symbol.for("lit-nothing"),N=new WeakMap,O=x.createTreeWalker(x,129,null,!1),z=(t,e)=>{const i=t.length-1,n=[];let o,s=2===e?"<svg>":"",r=w;for(let e=0;e<i;e++){const i=t[e];let l,a,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,a=r.exec(i),null!==a);)h=r.lastIndex,r===w?"!--"===a[1]?r=S:void 0!==a[1]?r=E:void 0!==a[2]?(P.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=T):void 0!==a[3]&&(r=T):r===T?">"===a[0]?(r=null!=o?o:w,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?T:'"'===a[3]?k:C):r===k||r===C?r=T:r===S||r===E?r=w:(r=T,o=void 0);const d=r===T&&t[e+1].startsWith("/>")?" ":"";s+=r===w?i+_:c>=0?(n.push(l),i.slice(0,c)+"$lit$"+i.slice(c)+$+d):i+$+(-2===c?(n.push(void 0),e):d)}const l=s+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==g?g.createHTML(l):l,n]};class D{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const r=t.length-1,l=this.parts,[a,c]=z(t,e);if(this.el=D.createElement(a,i),O.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=O.nextNode())&&l.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=c[s++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?B:"?"===e[1]?V:"@"===e[1]?Y:F})}else l.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(P.test(n.tagName)){const t=n.textContent.split($),e=t.length-1;if(e>0){n.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],y()),O.nextNode(),l.push({type:2,index:++o});n.append(t[e],y())}}}else if(8===n.nodeType)if(n.data===m)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf($,t+1));)l.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function j(t,e,i=t,n){var o,s,r,l;if(e===M)return e;let a=void 0!==n?null===(o=i._$Cl)||void 0===o?void 0:o[n]:i._$Cu;const c=b(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(s=null==a?void 0:a._$AO)||void 0===s||s.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,i,n)),void 0!==n?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[n]=a:i._$Cu=a),void 0!==a&&(e=j(t,a._$AS(t,e.values),a,n)),e}class L{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);O.currentNode=o;let s=O.nextNode(),r=0,l=0,a=n[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new I(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new q(s,this,t)),this.v.push(e),a=n[++l]}r!==(null==a?void 0:a.index)&&(s=O.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{constructor(t,e,i,n){var o;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),b(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==M&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==R&&b(this._$AH)?this._$AA.nextSibling.data=t:this.S(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=D.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new L(o,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new D(t)),e}M(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new I(this.A(y()),this.A(y()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,n,o){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(void 0===o)t=j(this,t,e,0),s=!b(t)||t!==this._$AH&&t!==M,s&&(this._$AH=t);else{const n=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=j(this,n[i+r],e,r),l===M&&(l=this._$AH[r]),s||(s=!b(l)||l!==this._$AH[r]),l===R?t=R:t!==R&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}s&&!n&&this.k(t)}k(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class B extends F{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===R?void 0:t}}class V extends F{constructor(){super(...arguments),this.type=4}k(t){t&&t!==R?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Y extends F{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=j(this,t,e,0))&&void 0!==i?i:R)===M)return;const n=this._$AH,o=t===R&&n!==R||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==R&&(n===R||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}var J,W,K;null===(u=globalThis.litHtmlPolyfillSupport)||void 0===u||u.call(globalThis,D,I),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.0.0");class X extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var n,o;const s=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=s._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;s._$litPart$=r=new I(e.insertBefore(y(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return M}}X.finalized=!0,X._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:X}),null===(W=globalThis.litElementPolyfillSupport)||void 0===W||W.call(globalThis,{LitElement:X}),(null!==(K=globalThis.litElementVersions)&&void 0!==K?K:globalThis.litElementVersions=[]).push("3.0.0");const Z=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Q(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Z(t,e)}const G=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e);const tt=s`
  :root {
    font-family: "Roboto Slab", serif;
    color: #444;
    background: #f9f9f9;
    font-size: 16px;
    font-family: "PT Sans", sans-serif;
  }
`;var et=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};const it=s`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .experience {
    background: var(--experience_background);
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
    padding-bottom: 7px;
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
    width: calc(100vw - 100px);
    padding: 20px;
    text-align: center;
    -webkit-border-radius: 0 5px 5px;
    -moz-border-radius: 0 5px 5px;
    border-radius: 0 5px 5px;
  }
  .experience-content h3 {
    font-size: 1.5em;
    color: var(--header_font_color);
  }
  .experience-content .experience-time, .company {
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
`;let nt=class extends X{connectedCallback(){super.connectedCallback(),this.dateTo=this.getDateFromString(this.experience.to),this.dateFrom=this.getDateFromString(this.experience.from)}getDateFromString(t){return isNaN(new Date(t).getTime())?new Date:new Date(t)}getMonthFromDate(t){return t.toLocaleString("default",{month:"long"})}monthDiff(){return this.dateTo.getMonth()-this.dateFrom.getMonth()+12*(this.dateTo.getFullYear()-this.dateFrom.getFullYear())+1}get duration(){const t=this.monthDiff(),e=t%12,i=12===t?1:Math.round(t/12)-1;return`${i>0?`${i} ${1===i?"Year ":"Years "}`:""}\n            ${0===e?"":`${e}${1===e?" Month":" Months"}`}`}get experienceTime(){const t=new Date,e=this.dateTo.getMonth()===t.getMonth()&&this.dateTo.getFullYear()===t.getFullYear();return`${this.getMonthFromDate(this.dateFrom)} ${this.dateFrom.getFullYear()}\n            -\n            ${e?"Today":`${this.getMonthFromDate(this.dateTo)} ${this.dateTo.getFullYear()}`}`}render(){return H`
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
    `}};nt.styles=[tt,it],et([Q()],nt.prototype,"experience",void 0),et([Q()],nt.prototype,"index",void 0),nt=et([G("experience-content")],nt);class ot extends class{constructor(t){this.baseUrl=t}get(t){return function(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{a(n.next(t))}catch(t){s(t)}}function l(t){try{a(n.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,l)}a((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const e=yield fetch(`${this.baseUrl}${t}`);return yield e.json()}))}}{constructor(t){super("https://unruffled-varahamihira-0fe598.netlify.app/.netlify/functions/sheets"),this.spreadsheetId=t}getConfig(){return super.get(`?sheet=experiences,design&spreadsheetId=${this.spreadsheetId}`)}}var st=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};const rt=s`
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
`;let lt=class extends X{constructor(){super(),this.config=null,this.spreadsheetId="",this.innerHTML+="\n<style>\n@import url(https://fonts.googleapis.com/css?family=PT+Sans);\n</style>\n"}firstUpdated(){return function(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{a(n.next(t))}catch(t){s(t)}}function l(t){try{a(n.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,l)}a((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){this.configService=new ot(this.spreadsheetId||"1SjV3Ho0_EV7oxyf9Mz_JjQJ77CiFRtFR8-YOqi7RJ5s"),this.config=yield this.configService.getConfig(),this.innerHTML+=(({accent_color:t,primary_color:e,background_color:i,experience_background:n,font_color:o,header_font_color:s})=>`\n<style>\n:root {\n  --primary_color: ${e};\n  --accent_color: ${t};\n  --background_color: ${i};\n  --experience_background: ${n};\n  --font_color: ${o};\n  --header_font_color: ${s};\n}\n</style>\n`)(this.config.design[0]),function(t){function e(){[...t.querySelectorAll(".experience .content experience-content")].map((t=>{var e;return null===(e=t.shadowRoot)||void 0===e?void 0:e.querySelector(".hidden")})).filter((t=>!!t)).forEach(((t,e)=>function(t,e){setTimeout((()=>{if(t.getBoundingClientRect().bottom-window.innerHeight<t.clientHeight){const e=600;t.animate({opacity:"1",marginLeft:"0"},{duration:e}),setTimeout((()=>{t.classList.remove("hidden")}),e)}}),100*e)}(t,e)))}window.onscroll=()=>e(),setTimeout((()=>{e()}),0)}(this.shadowRoot)}))}render(){return H`
      <section class="experience">
        <div class="content">
          <ul>
            ${this.config?this.config.experiences.map(((t,e)=>H`
                    <experience-content
                      .experience=${t}
                      .index=${e}
                    ></experience-content>
                  `)):H`<span>Loading...</span>`}
          </ul>
        </div>
      </section>
    `}};lt.styles=[rt],st([Q()],lt.prototype,"config",void 0),st([Q()],lt.prototype,"spreadsheetId",void 0),lt=st([G("cv-experience")],lt)})();