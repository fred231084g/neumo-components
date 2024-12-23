function t(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n}function e(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=globalThis,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new n(s,t,r)},h=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,r))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:d,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:f}=Object,g=globalThis,$=g.trustedTypes,m=$?$.emptyScript:"",y=g.reactiveElementPolyfillSupport,_=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},A=(t,e)=>!d(t,e),b={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const o=i?.call(this);r.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...p(t),...u(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(i)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),r=s.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:v).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??A)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[_("elementProperties")]=new Map,S[_("finalized")]=new Map,y?.({ReactiveElement:S}),(g.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,E=w.trustedTypes,x=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,U="?"+P,k=`<${U}>`,R=document,T=()=>R.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,M="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,z=/>/g,D=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,j=/"/g,I=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),V=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Y=new WeakMap,J=R.createTreeWalker(R,129);function K(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const Z=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=N;for(let e=0;e<s;e++){const s=t[e];let a,h,d=-1,c=0;for(;c<s.length&&(n.lastIndex=c,h=n.exec(s),null!==h);)c=n.lastIndex,n===N?"!--"===h[1]?n=L:void 0!==h[1]?n=z:void 0!==h[2]?(I.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=D):void 0!==h[3]&&(n=D):n===D?">"===h[0]?(n=r??N,d=-1):void 0===h[1]?d=-2:(d=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?D:'"'===h[3]?j:B):n===j||n===B?n=D:n===L||n===z?n=N:(n=D,r=void 0);const l=n===D&&t[e+1].startsWith("/>")?" ":"";o+=n===N?s+k:d>=0?(i.push(a),s.slice(0,d)+C+s.slice(d)+P+l):s+P+(-2===d?e:l)}return[K(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class F{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[h,d]=Z(t,e);if(this.el=F.createElement(h,s),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=d[o++],s=i.getAttribute(t).split(P),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?et:"?"===n[1]?st:"@"===n[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(I.test(i.tagName)){const t=i.textContent.split(P),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),J.nextNode(),a.push({type:2,index:++r});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===U)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(P,t+1));)a.push({type:7,index:r}),t+=P.length-1}r++}}static createElement(t,e){const s=R.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===V)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=O(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,i)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??R).importNode(e,!0);J.currentNode=i;let r=J.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new rt(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=J.nextNode(),o++)}return J.currentNode=R,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),O(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=F.createElement(K(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new G(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new F(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Q(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=X(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=X(this,i[s+n],e,n),a===V&&(a=this._$AH[n]),o||=!O(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class it extends tt{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??q)===V)return;const s=this._$AH,i=t===q&&s!==q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==q&&(s===q||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(F,Q),(w.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class nt extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Q(e.insertBefore(T(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const at=globalThis.litElementPolyfillSupport;at?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,dt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:A},ct=(t=dt,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function lt(t){return(e,s)=>"object"==typeof s?ct(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}let pt=class extends nt{constructor(){super(...arguments),this.platform="web",this.variant="flat",this.size="md",this.interactive=!1,this.bgColor="#f0f0f0",this.shadowLight="#ffffff",this.shadowDark="#d1d1d1",this.width="auto",this.height="auto",this.padding="20px",this.rippleEffect=!1,this.hoverEffect=!0,this.pressEffect=!0}render(){return W`
      <div
        class=${this._getCardClasses()}
        style=${this._getCardStyles()}
        @click=${this._handleClick}
        @touchstart=${this._handleTouchStart}
        @touchend=${this._handleTouchEnd}
      >
        <slot></slot>
      </div>
    `}_getCardClasses(){return`neumo-card ${this.variant} ${this.platform} ${this.size} ${this.interactive?"interactive":""}`}_getCardStyles(){return`\n      --card-bg: ${this.bgColor};\n      --card-shadow-light: ${this.shadowLight};\n      --card-shadow-dark: ${this.shadowDark};\n      --card-width: ${this.width};\n      --card-height: ${this.height};\n      --card-padding: ${this.padding};\n    `}_handleClick(t){this.interactive&&("android"===this.platform&&this.rippleEffect&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-card-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.interactive&&"ios"===this.platform&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,s=document.createElement("span"),i=e.getBoundingClientRect(),r=Math.max(i.width,i.height),o=t.clientX-i.left-r/2,n=t.clientY-i.top-r/2;s.style.width=s.style.height=`${r}px`,s.style.left=`${o}px`,s.style.top=`${n}px`,s.classList.add("ripple"),e.appendChild(s),s.addEventListener("animationend",(()=>{s.remove()}))}};pt.styles=a`
    :host {
      --neumo-card-bg: var(--card-bg, #f0f0f0);
      --neumo-card-shadow-light: var(--card-shadow-light, #ffffff);
      --neumo-card-shadow-dark: var(--card-shadow-dark, #d1d1d1);
      --neumo-card-radius: var(--card-radius, 16px);
      --neumo-card-padding: var(--card-padding, 20px);
      --neumo-card-hover-scale: 1.02;
      --neumo-card-press-scale: 0.98;
      
      display: block;
      width: var(--card-width, auto);
      height: var(--card-height, auto);
      
      /* Mobile-first defaults */
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
      user-select: none;
    }

    .neumo-card {
      position: relative;
      width: 100%;
      height: 100%;
      background: var(--neumo-card-bg);
      border-radius: var(--neumo-card-radius);
      padding: var(--neumo-card-padding);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;

      /* Platform-specific styles handled by mixins */
      @include neu-card-platform-styles();
    }

    /* Platform-specific hover states */
    @media (hover: hover) {
      .neumo-card.interactive:hover {
        transform: translateY(-2px) scale(var(--neumo-card-hover-scale));
      }
    }

    /* Active/press state */
    .neumo-card.interactive:active {
      transform: translateY(1px) scale(var(--neumo-card-press-scale));
    }

    /* Ripple effect for Android */
    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 600ms linear;
      background-color: rgba(255, 255, 255, 0.7);
    }

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    /* Size variants */
    :host([size="sm"]) .neumo-card {
      --neumo-card-padding: 12px;
      --neumo-card-radius: 12px;
    }

    :host([size="lg"]) .neumo-card {
      --neumo-card-padding: 24px;
      --neumo-card-radius: 20px;
    }
  `,t([lt({type:String}),e("design:type",String)],pt.prototype,"platform",void 0),t([lt({type:String}),e("design:type",String)],pt.prototype,"variant",void 0),t([lt({type:String}),e("design:type",String)],pt.prototype,"size",void 0),t([lt({type:Boolean}),e("design:type",Boolean)],pt.prototype,"interactive",void 0),t([lt({type:String}),e("design:type",String)],pt.prototype,"bgColor",void 0),t([lt({type:String}),e("design:type",String)],pt.prototype,"shadowLight",void 0),t([lt({type:String}),e("design:type",String)],pt.prototype,"shadowDark",void 0),t([lt({type:String}),e("design:type",String)],pt.prototype,"width",void 0),t([lt({type:String}),e("design:type",String)],pt.prototype,"height",void 0),t([lt({type:String}),e("design:type",String)],pt.prototype,"padding",void 0),t([lt({type:Boolean}),e("design:type",Boolean)],pt.prototype,"rippleEffect",void 0),t([lt({type:Boolean}),e("design:type",Boolean)],pt.prototype,"hoverEffect",void 0),t([lt({type:Boolean}),e("design:type",Boolean)],pt.prototype,"pressEffect",void 0),pt=t([ht("neumo-card")],pt);let ut=class extends nt{constructor(){super(...arguments),this.bgColor="#f0f0f0",this.shadowLight="#ffffff",this.shadowDark="#d1d1d1",this.borderRadius="16px",this.padding="20px"}render(){return W`
      <div
        class="neumo-card"
        style="${this._dynamicStyles()}"
      >
        <slot></slot>
      </div>
    `}_dynamicStyles(){return`\n      --card-bg: ${this.bgColor};\n      --card-shadow-light: ${this.shadowLight};\n      --card-shadow-dark: ${this.shadowDark};\n      --card-border-radius: ${this.borderRadius};\n      --card-padding: ${this.padding};\n    `}};ut.styles=a`
    :host {
      display: block;
      --neumo-card-bg: var(--card-bg, #f0f0f0);
      --neumo-card-shadow-light: var(--card-shadow-light, #ffffff);
      --neumo-card-shadow-dark: var(--card-shadow-dark, #d1d1d1);
      --neumo-card-border-radius: var(--card-border-radius, 16px);
      --neumo-card-padding: var(--card-padding, 20px);
    }

    .neumo-card {
      background: var(--neumo-card-bg);
      border-radius: var(--neumo-card-border-radius);
      padding: var(--neumo-card-padding);
      box-shadow: 10px 10px 20px var(--neumo-card-shadow-dark),
                  -10px -10px 20px var(--neumo-card-shadow-light);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    .neumo-card:hover {
      transform: scale(1.02);
      box-shadow: 8px 8px 16px var(--neumo-card-shadow-dark),
                  -8px -8px 16px var(--neumo-card-shadow-light);
    }

    .neumo-card:active {
      transform: scale(0.98);
      box-shadow: 5px 5px 10px var(--neumo-card-shadow-dark),
                  -5px -5px 10px var(--neumo-card-shadow-light);
    }
  `,t([lt({type:String}),e("design:type",String)],ut.prototype,"bgColor",void 0),t([lt({type:String}),e("design:type",String)],ut.prototype,"shadowLight",void 0),t([lt({type:String}),e("design:type",String)],ut.prototype,"shadowDark",void 0),t([lt({type:String}),e("design:type",String)],ut.prototype,"borderRadius",void 0),t([lt({type:String}),e("design:type",String)],ut.prototype,"padding",void 0),ut=t([ht("neumo-card")],ut);
//# sourceMappingURL=index.esm.js.map
