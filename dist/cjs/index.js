"use strict";var t=require("lit"),e=require("lit/decorators.js");function o(t,e,o,s){var r,i=arguments.length,n=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(i<3?r(n):i>3?r(e,o,n):r(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n}function s(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;const r=globalThis,i=r.trustedTypes,n=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,a="$lit$",p=`lit$${Math.random().toFixed(9).slice(2)}$`,d="?"+p,l=`<${d}>`,h=document,c=()=>h.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,m=Array.isArray,g="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,f=/>/g,$=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),b=/'/g,x=/"/g,_=/^(?:script|style|textarea|title)$/i,A=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),N=new WeakMap,C=h.createTreeWalker(h,129);function S(t,e){if(!m(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==n?n.createHTML(e):e}const k=(t,e)=>{const o=t.length-1,s=[];let r,i=2===e?"<svg>":3===e?"<math>":"",n=v;for(let e=0;e<o;e++){const o=t[e];let d,h,c=-1,u=0;for(;u<o.length&&(n.lastIndex=u,h=n.exec(o),null!==h);)u=n.lastIndex,n===v?"!--"===h[1]?n=y:void 0!==h[1]?n=f:void 0!==h[2]?(_.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=$):void 0!==h[3]&&(n=$):n===$?">"===h[0]?(n=r??v,c=-1):void 0===h[1]?c=-2:(c=n.lastIndex-h[2].length,d=h[1],n=void 0===h[3]?$:'"'===h[3]?x:b):n===x||n===b?n=$:n===y||n===f?n=v:(n=$,r=void 0);const m=n===$&&t[e+1].startsWith("/>")?" ":"";i+=n===v?o+l:c>=0?(s.push(d),o.slice(0,c)+a+o.slice(c)+p+m):o+p+(-2===c?e:m)}return[S(t,i+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class B{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let r=0,n=0;const l=t.length-1,h=this.parts,[u,m]=k(t,e);if(this.el=B.createElement(u,o),C.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=C.nextNode())&&h.length<l;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(a)){const e=m[n++],o=s.getAttribute(t).split(p),i=/([.?@])?(.*)/.exec(e);h.push({type:1,index:r,name:i[2],strings:o,ctor:"."===i[1]?z:"?"===i[1]?M:"@"===i[1]?L:H}),s.removeAttribute(t)}else t.startsWith(p)&&(h.push({type:6,index:r}),s.removeAttribute(t));if(_.test(s.tagName)){const t=s.textContent.split(p),e=t.length-1;if(e>0){s.textContent=i?i.emptyScript:"";for(let o=0;o<e;o++)s.append(t[o],c()),C.nextNode(),h.push({type:2,index:++r});s.append(t[e],c())}}}else if(8===s.nodeType)if(s.data===d)h.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(p,t+1));)h.push({type:7,index:r}),t+=p.length-1}r++}}static createElement(t,e){const o=h.createElement("template");return o.innerHTML=t,o}}function T(t,e,o=t,s){if(e===A)return e;let r=void 0!==s?o._$Co?.[s]:o._$Cl;const i=u(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),void 0===i?r=void 0:(r=new i(t),r._$AT(t,o,s)),void 0!==s?(o._$Co??=[])[s]=r:o._$Cl=r),void 0!==r&&(e=T(t,r._$AS(t,e.values),r,s)),e}class E{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,s=(t?.creationScope??h).importNode(e,!0);C.currentNode=s;let r=C.nextNode(),i=0,n=0,a=o[0];for(;void 0!==a;){if(i===a.index){let e;2===a.type?e=new P(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new R(r,this,t)),this._$AV.push(e),a=o[++n]}i!==a?.index&&(r=C.nextNode(),i++)}return C.currentNode=h,s}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class P{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,s){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),u(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==A&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>m(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==w&&u(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,s="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=B.createElement(S(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new E(s,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new B(t)),e}k(t){m(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const r of t)s===e.length?e.push(o=new P(this.O(c()),this.O(c()),this,this.options)):o=e[s],o._$AI(r),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,s,r){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=w}_$AI(t,e=this,o,s){const r=this.strings;let i=!1;if(void 0===r)t=T(this,t,e,0),i=!u(t)||t!==this._$AH&&t!==A,i&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=T(this,s[o+n],e,n),a===A&&(a=this._$AH[n]),i||=!u(a)||a!==this._$AH[n],a===w?t=w:t!==w&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}i&&!s&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class z extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}}class M extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==w)}}class L extends H{constructor(t,e,o,s,r){super(t,e,o,s,r),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??w)===A)return;const o=this._$AH,s=t===w&&o!==w||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==w&&(o===w||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class R{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const j=r.litHtmlPolyfillSupport;j?.(B,P),(r.litHtmlVersions??=[]).push("3.2.1");const D=1;class O{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const I=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends O{constructor(t){if(super(t),t.type!==D||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const o=t.element.classList;for(const t of this.st)t in e||(o.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return A}});exports.NeumoPattern=class extends t.LitElement{constructor(){super(...arguments),this.pattern="z",this.loading=!1,this.content={main:""},this.withDropCap=!1,this.role=null,this.ariaLabel=null}render(){const e={"pattern-container":!0,[`${this.pattern}-pattern`]:!0};return t.html`
      <div class=${I(e)} 
           role=${this.role||t.nothing}
           aria-label=${this.ariaLabel||t.nothing}>
        ${this._renderPattern()}
      </div>
    `}_renderPattern(){if(this.loading)return this._renderSkeleton();switch(this.pattern){case"z":return this._renderZPattern();case"f":return this._renderFPattern();case"t":return this._renderTPattern();default:return t.html`<div>Invalid pattern</div>`}}_renderZPattern(){const e={"with-drop-cap":this.withDropCap};return t.html`
      <div class=${I(e)}>
        ${this._renderContent(this.content.main)}
      </div>
      ${this.content.secondary?t.html`
        <div>${this._renderContent(this.content.secondary)}</div>
      `:t.nothing}
    `}_renderFPattern(){const e={"with-drop-cap":this.withDropCap};return t.html`
      ${this.content.header?t.html`
        <div class="pattern-header ${I(e)}">
          ${this._renderContent(this.content.header)}
        </div>
      `:t.nothing}
      <div class="pattern-main">
        <div class=${I(e)}>
          ${this._renderContent(this.content.main)}
        </div>
        ${this.content.sidebar?t.html`
          <div class="pattern-sidebar">
            ${this._renderContent(this.content.sidebar)}
          </div>
        `:t.nothing}
      </div>
    `}_renderTPattern(){const e={"with-drop-cap":this.withDropCap};return t.html`
      ${this.content.header?t.html`
        <div class="pattern-header ${I(e)}">
          ${this._renderContent(this.content.header)}
        </div>
      `:t.nothing}
      <div class="pattern-content">
        <div class=${I(e)}>
          ${this._renderContent(this.content.main)}
        </div>
        ${this.content.secondary?t.html`
          <div>${this._renderContent(this.content.secondary)}</div>
        `:t.nothing}
      </div>
    `}_renderSkeleton(){const e="f"===this.pattern?3:2;return t.html`
      ${Array(e).fill(0).map((()=>t.html`
        <div class="skeleton"></div>
      `))}
    `}_renderContent(e){return"string"==typeof e?t.html`${e}`:e}},exports.NeumoPattern.styles=t.css`
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
  `,o([e.property({type:String}),s("design:type",String)],exports.NeumoPattern.prototype,"pattern",void 0),o([e.property({type:Boolean}),s("design:type",Object)],exports.NeumoPattern.prototype,"loading",void 0),o([e.property({type:Object}),s("design:type",Object)],exports.NeumoPattern.prototype,"content",void 0),o([e.property({type:Boolean}),s("design:type",Object)],exports.NeumoPattern.prototype,"withDropCap",void 0),o([e.property({type:String}),s("design:type",Object)],exports.NeumoPattern.prototype,"role",void 0),o([e.property({type:String}),s("design:type",Object)],exports.NeumoPattern.prototype,"ariaLabel",void 0),exports.NeumoPattern=o([e.customElement("neumo-pattern")],exports.NeumoPattern),exports.NeumoZPattern=class extends exports.NeumoPattern{constructor(){super(),this.pattern="z"}},exports.NeumoZPattern=o([e.customElement("neumo-z-pattern"),s("design:paramtypes",[])],exports.NeumoZPattern),exports.NeumoFPattern=class extends exports.NeumoPattern{constructor(){super(),this.pattern="f"}},exports.NeumoFPattern=o([e.customElement("neumo-f-pattern"),s("design:paramtypes",[])],exports.NeumoFPattern),exports.NeumoTPattern=class extends exports.NeumoPattern{constructor(){super(),this.pattern="t"}},exports.NeumoTPattern=o([e.customElement("neumo-t-pattern"),s("design:paramtypes",[])],exports.NeumoTPattern),exports.NeumoButton=class extends t.LitElement{constructor(){super(...arguments),this.label="Click Me",this.disabled=!1,this.variant="flat",this.size="md",this.platform="web",this.bgColor="#e0e0e0",this.textColor="#333",this.shadowLight="#ffffff",this.shadowDark="#cccccc",this.useHaptics=!1,this.useRipple=!1}render(){return t.html`
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
    `}_getButtonClasses(){return`neumo-button ${this.variant} ${this.platform} ${this.size}`}_getButtonStyles(){return`\n      --button-bg: ${this.bgColor};\n      --button-text: ${this.textColor};\n      --button-shadow-light: ${this.shadowLight};\n      --button-shadow-dark: ${this.shadowDark};\n    `}_handleClick(t){this.disabled||("android"===this.platform&&this.useRipple&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.disabled||"ios"===this.platform&&this.useHaptics&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,o=document.createElement("span"),s=e.getBoundingClientRect(),r=Math.max(s.width,s.height),i=t.clientX-s.left-r/2,n=t.clientY-s.top-r/2;o.style.width=o.style.height=`${r}px`,o.style.left=`${i}px`,o.style.top=`${n}px`,o.classList.add("ripple"),e.appendChild(o),o.addEventListener("animationend",(()=>{o.remove()}))}},exports.NeumoButton.styles=t.css`
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
  `,o([e.property({type:String}),s("design:type",String)],exports.NeumoButton.prototype,"label",void 0),o([e.property({type:Boolean}),s("design:type",Boolean)],exports.NeumoButton.prototype,"disabled",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoButton.prototype,"variant",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoButton.prototype,"size",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoButton.prototype,"platform",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoButton.prototype,"bgColor",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoButton.prototype,"textColor",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoButton.prototype,"shadowLight",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoButton.prototype,"shadowDark",void 0),o([e.property({type:Boolean}),s("design:type",Boolean)],exports.NeumoButton.prototype,"useHaptics",void 0),o([e.property({type:Boolean}),s("design:type",Boolean)],exports.NeumoButton.prototype,"useRipple",void 0),exports.NeumoButton=o([e.customElement("neumo-button")],exports.NeumoButton),exports.NeumoCard=class extends t.LitElement{constructor(){super(...arguments),this.platform="web",this.variant="flat",this.size="md",this.interactive=!1,this.bgColor="#f0f0f0",this.shadowLight="#ffffff",this.shadowDark="#d1d1d1",this.width="auto",this.height="auto",this.padding="20px",this.rippleEffect=!1,this.hoverEffect=!0,this.pressEffect=!0}render(){return t.html`
      <div
        class=${this._getCardClasses()}
        style=${this._getCardStyles()}
        @click=${this._handleClick}
        @touchstart=${this._handleTouchStart}
        @touchend=${this._handleTouchEnd}
      >
        <slot></slot>
      </div>
    `}_getCardClasses(){return`neumo-card ${this.variant} ${this.platform} ${this.size} ${this.interactive?"interactive":""}`}_getCardStyles(){return`\n      --card-bg: ${this.bgColor};\n      --card-shadow-light: ${this.shadowLight};\n      --card-shadow-dark: ${this.shadowDark};\n      --card-width: ${this.width};\n      --card-height: ${this.height};\n      --card-padding: ${this.padding};\n    `}_handleClick(t){this.interactive&&("android"===this.platform&&this.rippleEffect&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-card-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.interactive&&"ios"===this.platform&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,o=document.createElement("span"),s=e.getBoundingClientRect(),r=Math.max(s.width,s.height),i=t.clientX-s.left-r/2,n=t.clientY-s.top-r/2;o.style.width=o.style.height=`${r}px`,o.style.left=`${i}px`,o.style.top=`${n}px`,o.classList.add("ripple"),e.appendChild(o),o.addEventListener("animationend",(()=>{o.remove()}))}},exports.NeumoCard.styles=t.css`
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
  `,o([e.property({type:String}),s("design:type",String)],exports.NeumoCard.prototype,"platform",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoCard.prototype,"variant",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoCard.prototype,"size",void 0),o([e.property({type:Boolean}),s("design:type",Boolean)],exports.NeumoCard.prototype,"interactive",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoCard.prototype,"bgColor",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoCard.prototype,"shadowLight",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoCard.prototype,"shadowDark",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoCard.prototype,"width",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoCard.prototype,"height",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoCard.prototype,"padding",void 0),o([e.property({type:Boolean}),s("design:type",Boolean)],exports.NeumoCard.prototype,"rippleEffect",void 0),o([e.property({type:Boolean}),s("design:type",Boolean)],exports.NeumoCard.prototype,"hoverEffect",void 0),o([e.property({type:Boolean}),s("design:type",Boolean)],exports.NeumoCard.prototype,"pressEffect",void 0),exports.NeumoCard=o([e.customElement("neumo-card")],exports.NeumoCard),exports.NeumoToast=class extends t.LitElement{constructor(){super(...arguments),this.message="",this.type="info",this.duration=3e3,this.position="bottom",this.open=!1,this.platform="web",this.timeout=null}connectedCallback(){super.connectedCallback(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}disconnectedCallback(){super.disconnectedCallback(),this.timeout&&window.clearTimeout(this.timeout)}updated(t){t.has("open")&&this.open&&this.startTimer()}startTimer(){this.timeout&&window.clearTimeout(this.timeout),this.duration>0&&(this.timeout=window.setTimeout((()=>{this.close()}),this.duration))}getIcon(){switch(this.type){case"success":return t.html`<svg class="icon" viewBox="0 0 20 20" fill="var(--toast-success)">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>`;case"error":return t.html`<svg class="icon" viewBox="0 0 20 20" fill="var(--toast-error)">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>`;case"warning":return t.html`<svg class="icon" viewBox="0 0 20 20" fill="var(--toast-warning)">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>`;default:return t.html`<svg class="icon" viewBox="0 0 20 20" fill="var(--toast-info)">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
        </svg>`}}close(){this.open=!1,this.dispatchEvent(new CustomEvent("neumo-toast-close"))}render(){const e={toast:!0,open:this.open,[this.type]:!0};return t.html`
      <div 
        class=${I(e)}
        @click=${this.close}
      >
        ${this.getIcon()}
        <span class="message">${this.message}</span>
      </div>
    `}},exports.NeumoToast.styles=t.css`
    :host {
      --toast-success: #10B981;
      --toast-error: #EF4444;
      --toast-warning: #F59E0B;
      --toast-info: #3B82F6;
      --toast-shadow-light: rgba(255, 255, 255, 0.8);
      --toast-shadow-dark: rgba(0, 0, 0, 0.1);
      
      position: fixed;
      z-index: 9999;
      pointer-events: none;
    }

    .toast {
      min-width: 300px;
      max-width: 500px;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      margin: 1rem;
      background: var(--neumo-bg-light, #f0f0f0);
      box-shadow: -4px -4px 8px var(--toast-shadow-light),
                  4px 4px 8px var(--toast-shadow-dark);
      display: flex;
      align-items: center;
      gap: 0.75rem;
      opacity: 0;
      transform: translateY(100%);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: auto;
    }

    .toast.open {
      opacity: 1;
      transform: translateY(0);
    }

    .icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    .message {
      flex: 1;
      color: var(--neumo-text-color, #1f2937);
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    /* Platform specific styles */
    :host([platform="ios"]) .toast {
      border-radius: 16px;
      backdrop-filter: blur(8px);
    }

    :host([platform="android"]) .toast {
      border-radius: 8px;
      box-shadow: 0 4px 6px var(--toast-shadow-dark);
    }

    /* Position variants */
    :host([position="top"]) {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    :host([position="bottom"]) {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    :host([position="top-left"]) {
      top: 0;
      left: 0;
    }

    :host([position="top-right"]) {
      top: 0;
      right: 0;
    }

    :host([position="bottom-left"]) {
      bottom: 0;
      left: 0;
    }

    :host([position="bottom-right"]) {
      bottom: 0;
      right: 0;
    }

    /* Type variants */
    .toast.success {
      border-left: 4px solid var(--toast-success);
    }

    .toast.error {
      border-left: 4px solid var(--toast-error);
    }

    .toast.warning {
      border-left: 4px solid var(--toast-warning);
    }

    .toast.info {
      border-left: 4px solid var(--toast-info);
    }

    @media (prefers-color-scheme: dark) {
      :host {
        --neumo-bg-light: #374151;
        --neumo-text-color: #f3f4f6;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .toast {
        transition: none;
      }
    }
  `,o([e.property({type:String}),s("design:type",Object)],exports.NeumoToast.prototype,"message",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoToast.prototype,"type",void 0),o([e.property({type:Number}),s("design:type",Object)],exports.NeumoToast.prototype,"duration",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoToast.prototype,"position",void 0),o([e.property({type:Boolean}),s("design:type",Object)],exports.NeumoToast.prototype,"open",void 0),o([e.property({type:String}),s("design:type",String)],exports.NeumoToast.prototype,"platform",void 0),exports.NeumoToast=o([e.customElement("neumo-toast")],exports.NeumoToast);
//# sourceMappingURL=index.js.map
