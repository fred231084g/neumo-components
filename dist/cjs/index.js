"use strict";var t=require("lit"),e=require("lit/decorators.js");function i(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}function r(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;const s=globalThis,o=s.trustedTypes,n=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,a="$lit$",p=`lit$${Math.random().toFixed(9).slice(2)}$`,d="?"+p,h=`<${d}>`,l=document,c=()=>l.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,m=Array.isArray,g="[ \t\n\f\r]",y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,f=/>/g,$=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),_=/'/g,b=/"/g,x=/^(?:script|style|textarea|title)$/i,A=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),w=new WeakMap,C=l.createTreeWalker(l,129);function S(t,e){if(!m(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==n?n.createHTML(e):e}const k=(t,e)=>{const i=t.length-1,r=[];let s,o=2===e?"<svg>":3===e?"<math>":"",n=y;for(let e=0;e<i;e++){const i=t[e];let d,l,c=-1,u=0;for(;u<i.length&&(n.lastIndex=u,l=n.exec(i),null!==l);)u=n.lastIndex,n===y?"!--"===l[1]?n=v:void 0!==l[1]?n=f:void 0!==l[2]?(x.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=$):void 0!==l[3]&&(n=$):n===$?">"===l[0]?(n=s??y,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,d=l[1],n=void 0===l[3]?$:'"'===l[3]?b:_):n===b||n===_?n=$:n===v||n===f?n=y:(n=$,s=void 0);const m=n===$&&t[e+1].startsWith("/>")?" ":"";o+=n===y?i+h:c>=0?(r.push(d),i.slice(0,c)+a+i.slice(c)+p+m):i+p+(-2===c?e:m)}return[S(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class B{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,n=0;const h=t.length-1,l=this.parts,[u,m]=k(t,e);if(this.el=B.createElement(u,i),C.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=C.nextNode())&&l.length<h;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(a)){const e=m[n++],i=r.getAttribute(t).split(p),o=/([.?@])?(.*)/.exec(e);l.push({type:1,index:s,name:o[2],strings:i,ctor:"."===o[1]?z:"?"===o[1]?M:"@"===o[1]?R:T}),r.removeAttribute(t)}else t.startsWith(p)&&(l.push({type:6,index:s}),r.removeAttribute(t));if(x.test(r.tagName)){const t=r.textContent.split(p),e=t.length-1;if(e>0){r.textContent=o?o.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],c()),C.nextNode(),l.push({type:2,index:++s});r.append(t[e],c())}}}else if(8===r.nodeType)if(r.data===d)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(p,t+1));)l.push({type:7,index:s}),t+=p.length-1}s++}}static createElement(t,e){const i=l.createElement("template");return i.innerHTML=t,i}}function E(t,e,i=t,r){if(e===A)return e;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const o=u(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(e=E(t,s._$AS(t,e.values),s,r)),e}class P{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??l).importNode(e,!0);C.currentNode=r;let s=C.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new H(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new D(s,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(s=C.nextNode(),o++)}return C.currentNode=l,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),u(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==A&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>m(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==N&&u(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=B.createElement(S(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new P(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=w.get(t.strings);return void 0===e&&w.set(t.strings,e=new B(t)),e}k(t){m(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new H(this.O(c()),this.O(c()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class T{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}_$AI(t,e=this,i,r){const s=this.strings;let o=!1;if(void 0===s)t=E(this,t,e,0),o=!u(t)||t!==this._$AH&&t!==A,o&&(this._$AH=t);else{const r=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=E(this,r[i+n],e,n),a===A&&(a=this._$AH[n]),o||=!u(a)||a!==this._$AH[n],a===N?t=N:t!==N&&(t+=(a??"")+s[n+1]),this._$AH[n]=a}o&&!r&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class z extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}class M extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==N)}}class R extends T{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??N)===A)return;const i=this._$AH,r=t===N&&i!==N||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==N&&(i===N||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class D{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const L=s.litHtmlPolyfillSupport;L?.(B,H),(s.litHtmlVersions??=[]).push("3.2.1");const j=1;class O{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const I=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends O{constructor(t){if(super(t),t.type!==j||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return A}});exports.NeumoPattern=class extends t.LitElement{constructor(){super(...arguments),this.pattern="z",this.loading=!1,this.content={main:""},this.withDropCap=!1}render(){return t.html`
      <div class="pattern-container ${this.pattern}-pattern">
        ${this._renderPattern()}
      </div>
    `}_renderPattern(){if(this.loading)return this._renderSkeleton();switch(this.pattern){case"z":return this._renderZPattern();case"f":return this._renderFPattern();case"t":return this._renderTPattern();default:return t.html`<div>Invalid pattern</div>`}}_renderZPattern(){return t.html`
      <div class="${I({"with-drop-cap":this.withDropCap})}">
        ${this.content.main}
      </div>
      ${this.content.secondary?t.html`
        <div>${this.content.secondary}</div>
      `:""}
    `}_renderFPattern(){return t.html`
      ${this.content.header?t.html`
        <div class="pattern-header ${I({"with-drop-cap":this.withDropCap})}">
          ${this.content.header}
        </div>
      `:""}
      <div class="pattern-main">
        <div class="${I({"with-drop-cap":this.withDropCap})}">
          ${this.content.main}
        </div>
        ${this.content.sidebar?t.html`
          <div class="pattern-sidebar">${this.content.sidebar}</div>
        `:""}
      </div>
    `}_renderTPattern(){return t.html`
      ${this.content.header?t.html`
        <div class="pattern-header ${I({"with-drop-cap":this.withDropCap})}">
          ${this.content.header}
        </div>
      `:""}
      <div class="pattern-content">
        <div class="${I({"with-drop-cap":this.withDropCap})}">
          ${this.content.main}
        </div>
        ${this.content.secondary?t.html`
          <div>${this.content.secondary}</div>
        `:""}
      </div>
    `}_renderSkeleton(){const e="f"===this.pattern?3:2;return t.html`
      ${Array(e).fill(0).map((()=>t.html`
        <div class="skeleton"></div>
      `))}
    `}},exports.NeumoPattern.styles=t.css`
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
  `,i([e.property({type:String}),r("design:type",String)],exports.NeumoPattern.prototype,"pattern",void 0),i([e.property({type:Boolean}),r("design:type",Object)],exports.NeumoPattern.prototype,"loading",void 0),i([e.property({type:Object}),r("design:type",Object)],exports.NeumoPattern.prototype,"content",void 0),i([e.property({type:Boolean}),r("design:type",Object)],exports.NeumoPattern.prototype,"withDropCap",void 0),exports.NeumoPattern=i([e.customElement("neumo-pattern")],exports.NeumoPattern),exports.NeumoZPattern=class extends exports.NeumoPattern{constructor(){super(),this.pattern="z"}},exports.NeumoZPattern=i([e.customElement("neumo-z-pattern"),r("design:paramtypes",[])],exports.NeumoZPattern),exports.NeumoFPattern=class extends exports.NeumoPattern{constructor(){super(),this.pattern="f"}},exports.NeumoFPattern=i([e.customElement("neumo-f-pattern"),r("design:paramtypes",[])],exports.NeumoFPattern),exports.NeumoTPattern=class extends exports.NeumoPattern{constructor(){super(),this.pattern="t"}},exports.NeumoTPattern=i([e.customElement("neumo-t-pattern"),r("design:paramtypes",[])],exports.NeumoTPattern),exports.NeumoButton=class extends t.LitElement{constructor(){super(...arguments),this.label="Click Me",this.disabled=!1,this.variant="flat",this.size="md",this.platform="web",this.bgColor="#e0e0e0",this.textColor="#333",this.shadowLight="#ffffff",this.shadowDark="#cccccc",this.useHaptics=!1,this.useRipple=!1}render(){return t.html`
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
    `}_getButtonClasses(){return`neumo-button ${this.variant} ${this.platform} ${this.size}`}_getButtonStyles(){return`\n      --button-bg: ${this.bgColor};\n      --button-text: ${this.textColor};\n      --button-shadow-light: ${this.shadowLight};\n      --button-shadow-dark: ${this.shadowDark};\n    `}_handleClick(t){this.disabled||("android"===this.platform&&this.useRipple&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.disabled||"ios"===this.platform&&this.useHaptics&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,i=document.createElement("span"),r=e.getBoundingClientRect(),s=Math.max(r.width,r.height),o=t.clientX-r.left-s/2,n=t.clientY-r.top-s/2;i.style.width=i.style.height=`${s}px`,i.style.left=`${o}px`,i.style.top=`${n}px`,i.classList.add("ripple"),e.appendChild(i),i.addEventListener("animationend",(()=>{i.remove()}))}},exports.NeumoButton.styles=t.css`
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
  `,i([e.property({type:String}),r("design:type",String)],exports.NeumoButton.prototype,"label",void 0),i([e.property({type:Boolean}),r("design:type",Boolean)],exports.NeumoButton.prototype,"disabled",void 0),i([e.property({type:String}),r("design:type",String)],exports.NeumoButton.prototype,"variant",void 0),i([e.property({type:String}),r("design:type",String)],exports.NeumoButton.prototype,"size",void 0),i([e.property({type:String}),r("design:type",String)],exports.NeumoButton.prototype,"platform",void 0),i([e.property({type:String}),r("design:type",String)],exports.NeumoButton.prototype,"bgColor",void 0),i([e.property({type:String}),r("design:type",String)],exports.NeumoButton.prototype,"textColor",void 0),i([e.property({type:String}),r("design:type",String)],exports.NeumoButton.prototype,"shadowLight",void 0),i([e.property({type:String}),r("design:type",String)],exports.NeumoButton.prototype,"shadowDark",void 0),i([e.property({type:Boolean}),r("design:type",Boolean)],exports.NeumoButton.prototype,"useHaptics",void 0),i([e.property({type:Boolean}),r("design:type",Boolean)],exports.NeumoButton.prototype,"useRipple",void 0),exports.NeumoButton=i([e.customElement("neumo-button")],exports.NeumoButton),exports.NeumoCard=class extends t.LitElement{constructor(){super(...arguments),this.platform="web",this.variant="flat",this.size="md",this.interactive=!1,this.bgColor="#f0f0f0",this.shadowLight="#ffffff",this.shadowDark="#d1d1d1",this.width="auto",this.height="auto",this.padding="20px",this.rippleEffect=!1,this.hoverEffect=!0,this.pressEffect=!0}render(){return t.html`
      <div
        class=${this._getCardClasses()}
        style=${this._getCardStyles()}
        @click=${this._handleClick}
        @touchstart=${this._handleTouchStart}
        @touchend=${this._handleTouchEnd}
      >
        <slot></slot>
      </div>
    `}_getCardClasses(){return`neumo-card ${this.variant} ${this.platform} ${this.size} ${this.interactive?"interactive":""}`}_getCardStyles(){return`\n      --card-bg: ${this.bgColor};\n      --card-shadow-light: ${this.shadowLight};\n      --card-shadow-dark: ${this.shadowDark};\n      --card-width: ${this.width};\n      --card-height: ${this.height};\n      --card-padding: ${this.padding};\n    `}_handleClick(t){this.interactive&&("android"===this.platform&&this.rippleEffect&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-card-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.interactive&&"ios"===this.platform&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,i=document.createElement("span"),r=e.getBoundingClientRect(),s=Math.max(r.width,r.height),o=t.clientX-r.left-s/2,n=t.clientY-r.top-s/2;i.style.width=i.style.height=`${s}px`,i.style.left=`${o}px`,i.style.top=`${n}px`,i.classList.add("ripple"),e.appendChild(i),i.addEventListener("animationend",(()=>{i.remove()}))}},exports.NeumoCard.styles=t.css`
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
  `,i([e.property({type:String}),r("design:type",String)],exports.NeumoCard.prototype,"platform",void 0),i([e.property({type:String}),r("design:type",String)],exports.NeumoCard.prototype,"variant",void 0),i([e.property({type:String}),r("design:type",String)],exports.NeumoCard.prototype,"size",void 0),i([e.property({type:Boolean}),r("design:type",Boolean)],exports.NeumoCard.prototype,"interactive",void 0),i([e.property({type:String}),r("design:type",String)],exports.NeumoCard.prototype,"bgColor",void 0),i([e.property({type:String}),r("design:type",String)],exports.NeumoCard.prototype,"shadowLight",void 0),i([e.property({type:String}),r("design:type",String)],exports.NeumoCard.prototype,"shadowDark",void 0),i([e.property({type:String}),r("design:type",String)],exports.NeumoCard.prototype,"width",void 0),i([e.property({type:String}),r("design:type",String)],exports.NeumoCard.prototype,"height",void 0),i([e.property({type:String}),r("design:type",String)],exports.NeumoCard.prototype,"padding",void 0),i([e.property({type:Boolean}),r("design:type",Boolean)],exports.NeumoCard.prototype,"rippleEffect",void 0),i([e.property({type:Boolean}),r("design:type",Boolean)],exports.NeumoCard.prototype,"hoverEffect",void 0),i([e.property({type:Boolean}),r("design:type",Boolean)],exports.NeumoCard.prototype,"pressEffect",void 0),exports.NeumoCard=i([e.customElement("neumo-card")],exports.NeumoCard);
//# sourceMappingURL=index.js.map
