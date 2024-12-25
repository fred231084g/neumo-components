"use strict";var t=require("lit"),e=require("lit/decorators.js");function r(t,e,r,i){var s,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(n<3?s(o):n>3?s(e,r,o):s(e,r))||o);return n>3&&o&&Object.defineProperty(e,r,o),o}function i(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;const s=globalThis,n=s.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,a="$lit$",p=`lit$${Math.random().toFixed(9).slice(2)}$`,d="?"+p,h=`<${d}>`,l=document,c=()=>l.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,m=Array.isArray,g="[ \t\n\f\r]",y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,f=/>/g,$=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),_=/'/g,b=/"/g,x=/^(?:script|style|textarea|title)$/i,A=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),w=new WeakMap,C=l.createTreeWalker(l,129);function S(t,e){if(!m(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(e):e}const k=(t,e)=>{const r=t.length-1,i=[];let s,n=2===e?"<svg>":3===e?"<math>":"",o=y;for(let e=0;e<r;e++){const r=t[e];let d,l,c=-1,u=0;for(;u<r.length&&(o.lastIndex=u,l=o.exec(r),null!==l);)u=o.lastIndex,o===y?"!--"===l[1]?o=v:void 0!==l[1]?o=f:void 0!==l[2]?(x.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=$):void 0!==l[3]&&(o=$):o===$?">"===l[0]?(o=s??y,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,d=l[1],o=void 0===l[3]?$:'"'===l[3]?b:_):o===b||o===_?o=$:o===v||o===f?o=y:(o=$,s=void 0);const m=o===$&&t[e+1].startsWith("/>")?" ":"";n+=o===y?r+h:c>=0?(i.push(d),r.slice(0,c)+a+r.slice(c)+p+m):r+p+(-2===c?e:m)}return[S(t,n+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class E{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let s=0,o=0;const h=t.length-1,l=this.parts,[u,m]=k(t,e);if(this.el=E.createElement(u,r),C.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=C.nextNode())&&l.length<h;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(a)){const e=m[o++],r=i.getAttribute(t).split(p),n=/([.?@])?(.*)/.exec(e);l.push({type:1,index:s,name:n[2],strings:r,ctor:"."===n[1]?z:"?"===n[1]?M:"@"===n[1]?R:H}),i.removeAttribute(t)}else t.startsWith(p)&&(l.push({type:6,index:s}),i.removeAttribute(t));if(x.test(i.tagName)){const t=i.textContent.split(p),e=t.length-1;if(e>0){i.textContent=n?n.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],c()),C.nextNode(),l.push({type:2,index:++s});i.append(t[e],c())}}}else if(8===i.nodeType)if(i.data===d)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(p,t+1));)l.push({type:7,index:s}),t+=p.length-1}s++}}static createElement(t,e){const r=l.createElement("template");return r.innerHTML=t,r}}function B(t,e,r=t,i){if(e===A)return e;let s=void 0!==i?r._$Co?.[i]:r._$Cl;const n=u(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,r,i)),void 0!==i?(r._$Co??=[])[i]=s:r._$Cl=s),void 0!==s&&(e=B(t,s._$AS(t,e.values),s,i)),e}class P{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??l).importNode(e,!0);C.currentNode=i;let s=C.nextNode(),n=0,o=0,a=r[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new T(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new L(s,this,t)),this._$AV.push(e),a=r[++o]}n!==a?.index&&(s=C.nextNode(),n++)}return C.currentNode=l,i}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class T{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),u(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==A&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>m(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==N&&u(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=E.createElement(S(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new P(i,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=w.get(t.strings);return void 0===e&&w.set(t.strings,e=new E(t)),e}k(t){m(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const s of t)i===e.length?e.push(r=new T(this.O(c()),this.O(c()),this,this.options)):r=e[i],r._$AI(s),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=N}_$AI(t,e=this,r,i){const s=this.strings;let n=!1;if(void 0===s)t=B(this,t,e,0),n=!u(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{const i=t;let o,a;for(t=s[0],o=0;o<s.length-1;o++)a=B(this,i[r+o],e,o),a===A&&(a=this._$AH[o]),n||=!u(a)||a!==this._$AH[o],a===N?t=N:t!==N&&(t+=(a??"")+s[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class z extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}class M extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==N)}}class R extends H{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t,e=this){if((t=B(this,t,e,0)??N)===A)return;const r=this._$AH,i=t===N&&r!==N||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==N&&(r===N||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const D=s.litHtmlPolyfillSupport;D?.(E,T),(s.litHtmlVersions??=[]).push("3.2.1");const j=1,O=2,I=t=>(...e)=>({_$litDirective$:t,values:e});class U{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const Z=I(class extends U{constructor(t){if(super(t),t.type!==j||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const r=t.element.classList;for(const t of this.st)t in e||(r.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return A}});class F extends U{constructor(t){if(super(t),this.it=N,t.type!==O)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===N||null==t)return this._t=void 0,this.it=t;if(t===A)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}F.directiveName="unsafeHTML",F.resultType=1;const W=I(F);exports.NeumoPattern=class extends t.LitElement{constructor(){super(...arguments),this.pattern="z",this.loading=!1,this.content={main:""},this.withDropCap=!1}render(){return t.html`
      <div class="pattern-container ${this.pattern}-pattern">
        ${this._renderPattern()}
      </div>
    `}_renderPattern(){if(this.loading)return this._renderSkeleton();switch(this.pattern){case"z":return this._renderZPattern();case"f":return this._renderFPattern();case"t":return this._renderTPattern();default:return t.html`<div>Invalid pattern</div>`}}_renderZPattern(){const e={"with-drop-cap":this.withDropCap};return t.html`
      <div class=${Z(e)}>
        ${this._renderContent(this.content.main)}
      </div>
      ${this.content.secondary?t.html`
        <div>${this._renderContent(this.content.secondary)}</div>
      `:""}
    `}_renderFPattern(){const e={"with-drop-cap":this.withDropCap};return t.html`
      ${this.content.header?t.html`
        <div class="pattern-header ${Z(e)}">
          ${this._renderContent(this.content.header)}
        </div>
      `:""}
      <div class="pattern-main">
        <div class=${Z(e)}>
          ${this._renderContent(this.content.main)}
        </div>
        ${this.content.sidebar?t.html`
          <div class="pattern-sidebar">
            ${this._renderContent(this.content.sidebar)}
          </div>
        `:""}
      </div>
    `}_renderTPattern(){const e={"with-drop-cap":this.withDropCap};return t.html`
      ${this.content.header?t.html`
        <div class="pattern-header ${Z(e)}">
          ${this._renderContent(this.content.header)}
        </div>
      `:""}
      <div class="pattern-content">
        <div class=${Z(e)}>
          ${this._renderContent(this.content.main)}
        </div>
        ${this.content.secondary?t.html`
          <div>${this._renderContent(this.content.secondary)}</div>
        `:""}
      </div>
    `}_renderSkeleton(){const e="f"===this.pattern?3:2;return t.html`
      ${Array(e).fill(0).map((()=>t.html`
        <div class="skeleton"></div>
      `))}
    `}_renderContent(e){return"string"==typeof e?t.html`${W(e)}`:e}},exports.NeumoPattern.styles=t.css`
    :host {
      display: block;
      --pattern-spacing: var(--neumo-spacing-md, 1rem);
      --pattern-transition: var(--neumo-transition, 0.3s ease);
    }

    .pattern-container {
      display: grid;
      gap: var(--pattern-spacing);
    }

    .with-drop-cap::first-letter {
      float: left;
      font-size: 3em;
      line-height: 0.8;
      padding-right: 0.1em;
      font-weight: bold;
      color: var(--neumo-primary-color, #2c5282);
    }

    /* Loading skeleton styles */
    .skeleton {
      background: linear-gradient(90deg,
        var(--neumo-skeleton-base, #e2e8f0) 25%,
        var(--neumo-skeleton-highlight, #f8fafc) 50%,
        var(--neumo-skeleton-base, #e2e8f0) 75%
      );
      background-size: 200% 100%;
      animation: skeleton-loading 1.5s infinite;
      border-radius: 4px;
      height: 1em;
      margin: 0.5em 0;
    }

    @keyframes skeleton-loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `,r([e.property({type:String}),i("design:type",String)],exports.NeumoPattern.prototype,"pattern",void 0),r([e.property({type:Boolean}),i("design:type",Object)],exports.NeumoPattern.prototype,"loading",void 0),r([e.property({type:Object}),i("design:type",Object)],exports.NeumoPattern.prototype,"content",void 0),r([e.property({type:Boolean}),i("design:type",Object)],exports.NeumoPattern.prototype,"withDropCap",void 0),exports.NeumoPattern=r([e.customElement("neumo-pattern")],exports.NeumoPattern),exports.NeumoZPattern=class extends exports.NeumoPattern{constructor(){super(),this.pattern="z"}},exports.NeumoZPattern=r([e.customElement("neumo-z-pattern"),i("design:paramtypes",[])],exports.NeumoZPattern),exports.NeumoFPattern=class extends exports.NeumoPattern{constructor(){super(),this.pattern="f"}},exports.NeumoFPattern=r([e.customElement("neumo-f-pattern"),i("design:paramtypes",[])],exports.NeumoFPattern),exports.NeumoTPattern=class extends exports.NeumoPattern{constructor(){super(),this.pattern="t"}},exports.NeumoTPattern=r([e.customElement("neumo-t-pattern"),i("design:paramtypes",[])],exports.NeumoTPattern),exports.NeumoButton=class extends t.LitElement{constructor(){super(...arguments),this.label="Click Me",this.disabled=!1,this.variant="flat",this.size="md",this.platform="web",this.bgColor="#e0e0e0",this.textColor="#333",this.shadowLight="#ffffff",this.shadowDark="#cccccc",this.useHaptics=!1,this.useRipple=!1}render(){return t.html`
      <button
        class=${this._getButtonClasses()}
        ?disabled=${this.disabled}
        style=${this._getButtonStyles()}
        @click=${this._handleClick}
        @touchstart=${this._handleTouchStart}
        @touchend=${this._handleTouchEnd}
      >
        ${this.label}
        <slot></slot>
      </button>
    `}_getButtonClasses(){return`neumo-button ${this.variant} ${this.platform} ${this.size}`}_getButtonStyles(){return`\n      --button-bg: ${this.bgColor};\n      --button-text: ${this.textColor};\n      --button-shadow-light: ${this.shadowLight};\n      --button-shadow-dark: ${this.shadowDark};\n    `}_handleClick(t){this.disabled||("android"===this.platform&&this.useRipple&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.disabled||"ios"===this.platform&&this.useHaptics&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,r=document.createElement("span"),i=e.getBoundingClientRect(),s=Math.max(i.width,i.height),n=t.clientX-i.left-s/2,o=t.clientY-i.top-s/2;r.style.width=r.style.height=`${s}px`,r.style.left=`${n}px`,r.style.top=`${o}px`,r.classList.add("ripple"),e.appendChild(r),r.addEventListener("animationend",(()=>{r.remove()}))}},exports.NeumoButton.styles=t.css`
    :host {
      --neumo-btn-bg: var(--button-bg, #e0e0e0);
      --neumo-btn-text: var(--button-text, #333);
      --neumo-btn-shadow-light: var(--button-shadow-light, #ffffff);
      --neumo-btn-shadow-dark: var(--button-shadow-dark, #cccccc);
      --neumo-btn-hover-scale: 0.1;
      --neumo-btn-active-scale: 0.2;
      --neumo-btn-disabled-opacity: 0.6;
      display: inline-block;
      
      /* Mobile-first defaults */
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
      user-select: none;
    }

    button {
      all: unset;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--neumo-btn-padding, 12px 24px);
      border-radius: var(--neumo-btn-radius, 12px);
      background: var(--neumo-btn-bg);
      color: var(--neumo-btn-text);
      font-size: var(--neumo-btn-font-size, 1rem);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      /* Platform-specific styles handled by mixins */
      @include neu-button-platform-styles();
    }

    /* Size variants */
    :host([size="sm"]) button {
      padding: 8px 16px;
      font-size: 0.875rem;
    }

    :host([size="lg"]) button {
      padding: 16px 32px;
      font-size: 1.125rem;
    }

    /* Platform-specific hover states */
    @media (hover: hover) {
      button:hover:not(:disabled) {
        transform: translateY(-1px) scale(1.02);
      }
    }

    /* Active state */
    button:active:not(:disabled) {
      transform: translateY(1px) scale(0.98);
    }

    /* Disabled state */
    button:disabled {
      cursor: not-allowed;
      opacity: var(--neumo-btn-disabled-opacity);
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
  `,r([e.property({type:String}),i("design:type",String)],exports.NeumoButton.prototype,"label",void 0),r([e.property({type:Boolean}),i("design:type",Boolean)],exports.NeumoButton.prototype,"disabled",void 0),r([e.property({type:String}),i("design:type",String)],exports.NeumoButton.prototype,"variant",void 0),r([e.property({type:String}),i("design:type",String)],exports.NeumoButton.prototype,"size",void 0),r([e.property({type:String}),i("design:type",String)],exports.NeumoButton.prototype,"platform",void 0),r([e.property({type:String}),i("design:type",String)],exports.NeumoButton.prototype,"bgColor",void 0),r([e.property({type:String}),i("design:type",String)],exports.NeumoButton.prototype,"textColor",void 0),r([e.property({type:String}),i("design:type",String)],exports.NeumoButton.prototype,"shadowLight",void 0),r([e.property({type:String}),i("design:type",String)],exports.NeumoButton.prototype,"shadowDark",void 0),r([e.property({type:Boolean}),i("design:type",Boolean)],exports.NeumoButton.prototype,"useHaptics",void 0),r([e.property({type:Boolean}),i("design:type",Boolean)],exports.NeumoButton.prototype,"useRipple",void 0),exports.NeumoButton=r([e.customElement("neumo-button")],exports.NeumoButton),exports.NeumoCard=class extends t.LitElement{constructor(){super(...arguments),this.platform="web",this.variant="flat",this.size="md",this.interactive=!1,this.bgColor="#f0f0f0",this.shadowLight="#ffffff",this.shadowDark="#d1d1d1",this.width="auto",this.height="auto",this.padding="20px",this.rippleEffect=!1,this.hoverEffect=!0,this.pressEffect=!0}render(){return t.html`
      <div
        class=${this._getCardClasses()}
        style=${this._getCardStyles()}
        @click=${this._handleClick}
        @touchstart=${this._handleTouchStart}
        @touchend=${this._handleTouchEnd}
      >
        <slot></slot>
      </div>
    `}_getCardClasses(){return`neumo-card ${this.variant} ${this.platform} ${this.size} ${this.interactive?"interactive":""}`}_getCardStyles(){return`\n      --card-bg: ${this.bgColor};\n      --card-shadow-light: ${this.shadowLight};\n      --card-shadow-dark: ${this.shadowDark};\n      --card-width: ${this.width};\n      --card-height: ${this.height};\n      --card-padding: ${this.padding};\n    `}_handleClick(t){this.interactive&&("android"===this.platform&&this.rippleEffect&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-card-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.interactive&&"ios"===this.platform&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,r=document.createElement("span"),i=e.getBoundingClientRect(),s=Math.max(i.width,i.height),n=t.clientX-i.left-s/2,o=t.clientY-i.top-s/2;r.style.width=r.style.height=`${s}px`,r.style.left=`${n}px`,r.style.top=`${o}px`,r.classList.add("ripple"),e.appendChild(r),r.addEventListener("animationend",(()=>{r.remove()}))}},exports.NeumoCard.styles=t.css`
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
  `,r([e.property({type:String}),i("design:type",String)],exports.NeumoCard.prototype,"platform",void 0),r([e.property({type:String}),i("design:type",String)],exports.NeumoCard.prototype,"variant",void 0),r([e.property({type:String}),i("design:type",String)],exports.NeumoCard.prototype,"size",void 0),r([e.property({type:Boolean}),i("design:type",Boolean)],exports.NeumoCard.prototype,"interactive",void 0),r([e.property({type:String}),i("design:type",String)],exports.NeumoCard.prototype,"bgColor",void 0),r([e.property({type:String}),i("design:type",String)],exports.NeumoCard.prototype,"shadowLight",void 0),r([e.property({type:String}),i("design:type",String)],exports.NeumoCard.prototype,"shadowDark",void 0),r([e.property({type:String}),i("design:type",String)],exports.NeumoCard.prototype,"width",void 0),r([e.property({type:String}),i("design:type",String)],exports.NeumoCard.prototype,"height",void 0),r([e.property({type:String}),i("design:type",String)],exports.NeumoCard.prototype,"padding",void 0),r([e.property({type:Boolean}),i("design:type",Boolean)],exports.NeumoCard.prototype,"rippleEffect",void 0),r([e.property({type:Boolean}),i("design:type",Boolean)],exports.NeumoCard.prototype,"hoverEffect",void 0),r([e.property({type:Boolean}),i("design:type",Boolean)],exports.NeumoCard.prototype,"pressEffect",void 0),exports.NeumoCard=r([e.customElement("neumo-card")],exports.NeumoCard);
//# sourceMappingURL=index.js.map
