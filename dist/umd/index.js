!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit"),require("lit/decorators.js")):"function"==typeof define&&define.amd?define(["exports","lit","lit/decorators.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).NeumoComponents={},t.Lit,t.LitDecorators)}(this,(function(t,e,i){"use strict";function n(t,e,i,n){var r,s=arguments.length,o=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,i,o):r(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o}function r(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;const s=globalThis,o=s.trustedTypes,a=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,d="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,p="?"+h,l=`<${p}>`,c=document,u=()=>c.createComment(""),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,g=Array.isArray,y="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,$=/>/g,_=RegExp(`>|${y}(?:([^\\s"'>=/]+)(${y}*=${y}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),b=/'/g,A=/"/g,N=/^(?:script|style|textarea|title)$/i,x=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),w=new WeakMap,S=c.createTreeWalker(c,129);function k(t,e){if(!g(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(e):e}const E=(t,e)=>{const i=t.length-1,n=[];let r,s=2===e?"<svg>":3===e?"<math>":"",o=f;for(let e=0;e<i;e++){const i=t[e];let a,p,c=-1,u=0;for(;u<i.length&&(o.lastIndex=u,p=o.exec(i),null!==p);)u=o.lastIndex,o===f?"!--"===p[1]?o=v:void 0!==p[1]?o=$:void 0!==p[2]?(N.test(p[2])&&(r=RegExp("</"+p[2],"g")),o=_):void 0!==p[3]&&(o=_):o===_?">"===p[0]?(o=r??f,c=-1):void 0===p[1]?c=-2:(c=o.lastIndex-p[2].length,a=p[1],o=void 0===p[3]?_:'"'===p[3]?A:b):o===A||o===b?o=_:o===v||o===$?o=f:(o=_,r=void 0);const m=o===_&&t[e+1].startsWith("/>")?" ":"";s+=o===f?i+l:c>=0?(n.push(a),i.slice(0,c)+d+i.slice(c)+h+m):i+h+(-2===c?e:m)}return[k(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class B{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,s=0;const a=t.length-1,l=this.parts,[c,m]=E(t,e);if(this.el=B.createElement(c,i),S.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=S.nextNode())&&l.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(d)){const e=m[s++],i=n.getAttribute(t).split(h),o=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?M:"?"===o[1]?R:"@"===o[1]?L:z}),n.removeAttribute(t)}else t.startsWith(h)&&(l.push({type:6,index:r}),n.removeAttribute(t));if(N.test(n.tagName)){const t=n.textContent.split(h),e=t.length-1;if(e>0){n.textContent=o?o.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],u()),S.nextNode(),l.push({type:2,index:++r});n.append(t[e],u())}}}else if(8===n.nodeType)if(n.data===p)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(h,t+1));)l.push({type:7,index:r}),t+=h.length-1}r++}}static createElement(t,e){const i=c.createElement("template");return i.innerHTML=t,i}}function T(t,e,i=t,n){if(e===x)return e;let r=void 0!==n?i._$Co?.[n]:i._$Cl;const s=m(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t),r._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=r:i._$Cl=r),void 0!==r&&(e=T(t,r._$AS(t,e.values),r,n)),e}class P{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??c).importNode(e,!0);S.currentNode=n;let r=S.nextNode(),s=0,o=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new H(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new D(r,this,t)),this._$AV.push(e),a=i[++o]}s!==a?.index&&(r=S.nextNode(),s++)}return S.currentNode=c,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),m(t)?t===C||null==t||""===t?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==x&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>g(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==C&&m(this._$AH)?this._$AA.nextSibling.data=t:this.T(c.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=B.createElement(k(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new P(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=w.get(t.strings);return void 0===e&&w.set(t.strings,e=new B(t)),e}k(t){g(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new H(this.O(u()),this.O(u()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,r){this.type=1,this._$AH=C,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}_$AI(t,e=this,i,n){const r=this.strings;let s=!1;if(void 0===r)t=T(this,t,e,0),s=!m(t)||t!==this._$AH&&t!==x,s&&(this._$AH=t);else{const n=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=T(this,n[i+o],e,o),a===x&&(a=this._$AH[o]),s||=!m(a)||a!==this._$AH[o],a===C?t=C:t!==C&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}s&&!n&&this.j(t)}j(t){t===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class M extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===C?void 0:t}}class R extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==C)}}class L extends z{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??C)===x)return;const i=this._$AH,n=t===C&&i!==C||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==C&&(i===C||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class D{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const j=s.litHtmlPolyfillSupport;j?.(B,H),(s.litHtmlVersions??=[]).push("3.2.1");const O=1,I=2,U=t=>(...e)=>({_$litDirective$:t,values:e});class Z{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const F=U(class extends Z{constructor(t){if(super(t),t.type!==O||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const n=!!e[t];n===this.st.has(t)||this.nt?.has(t)||(n?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return x}});class W extends Z{constructor(t){if(super(t),this.it=C,t.type!==I)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===C||null==t)return this._t=void 0,this.it=t;if(t===x)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}W.directiveName="unsafeHTML",W.resultType=1;const Y=U(W);t.NeumoPattern=class extends e.LitElement{constructor(){super(...arguments),this.pattern="z",this.loading=!1,this.content={main:""},this.withDropCap=!1}render(){return e.html`
      <div class="pattern-container ${this.pattern}-pattern">
        ${this._renderPattern()}
      </div>
    `}_renderPattern(){if(this.loading)return this._renderSkeleton();switch(this.pattern){case"z":return this._renderZPattern();case"f":return this._renderFPattern();case"t":return this._renderTPattern();default:return e.html`<div>Invalid pattern</div>`}}_renderZPattern(){const t={"with-drop-cap":this.withDropCap};return e.html`
      <div class=${F(t)}>
        ${this._renderContent(this.content.main)}
      </div>
      ${this.content.secondary?e.html`
        <div>${this._renderContent(this.content.secondary)}</div>
      `:""}
    `}_renderFPattern(){const t={"with-drop-cap":this.withDropCap};return e.html`
      ${this.content.header?e.html`
        <div class="pattern-header ${F(t)}">
          ${this._renderContent(this.content.header)}
        </div>
      `:""}
      <div class="pattern-main">
        <div class=${F(t)}>
          ${this._renderContent(this.content.main)}
        </div>
        ${this.content.sidebar?e.html`
          <div class="pattern-sidebar">
            ${this._renderContent(this.content.sidebar)}
          </div>
        `:""}
      </div>
    `}_renderTPattern(){const t={"with-drop-cap":this.withDropCap};return e.html`
      ${this.content.header?e.html`
        <div class="pattern-header ${F(t)}">
          ${this._renderContent(this.content.header)}
        </div>
      `:""}
      <div class="pattern-content">
        <div class=${F(t)}>
          ${this._renderContent(this.content.main)}
        </div>
        ${this.content.secondary?e.html`
          <div>${this._renderContent(this.content.secondary)}</div>
        `:""}
      </div>
    `}_renderSkeleton(){const t="f"===this.pattern?3:2;return e.html`
      ${Array(t).fill(0).map((()=>e.html`
        <div class="skeleton"></div>
      `))}
    `}_renderContent(t){return"string"==typeof t?e.html`${Y(t)}`:t}},t.NeumoPattern.styles=e.css`
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
  `,n([i.property({type:String}),r("design:type",String)],t.NeumoPattern.prototype,"pattern",void 0),n([i.property({type:Boolean}),r("design:type",Object)],t.NeumoPattern.prototype,"loading",void 0),n([i.property({type:Object}),r("design:type",Object)],t.NeumoPattern.prototype,"content",void 0),n([i.property({type:Boolean}),r("design:type",Object)],t.NeumoPattern.prototype,"withDropCap",void 0),t.NeumoPattern=n([i.customElement("neumo-pattern")],t.NeumoPattern),t.NeumoZPattern=class extends t.NeumoPattern{constructor(){super(),this.pattern="z"}},t.NeumoZPattern=n([i.customElement("neumo-z-pattern"),r("design:paramtypes",[])],t.NeumoZPattern),t.NeumoFPattern=class extends t.NeumoPattern{constructor(){super(),this.pattern="f"}},t.NeumoFPattern=n([i.customElement("neumo-f-pattern"),r("design:paramtypes",[])],t.NeumoFPattern),t.NeumoTPattern=class extends t.NeumoPattern{constructor(){super(),this.pattern="t"}},t.NeumoTPattern=n([i.customElement("neumo-t-pattern"),r("design:paramtypes",[])],t.NeumoTPattern),t.NeumoButton=class extends e.LitElement{constructor(){super(...arguments),this.label="Click Me",this.disabled=!1,this.variant="flat",this.size="md",this.platform="web",this.bgColor="#e0e0e0",this.textColor="#333",this.shadowLight="#ffffff",this.shadowDark="#cccccc",this.useHaptics=!1,this.useRipple=!1}render(){return e.html`
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
    `}_getButtonClasses(){return`neumo-button ${this.variant} ${this.platform} ${this.size}`}_getButtonStyles(){return`\n      --button-bg: ${this.bgColor};\n      --button-text: ${this.textColor};\n      --button-shadow-light: ${this.shadowLight};\n      --button-shadow-dark: ${this.shadowDark};\n    `}_handleClick(t){this.disabled||("android"===this.platform&&this.useRipple&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.disabled||"ios"===this.platform&&this.useHaptics&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,i=document.createElement("span"),n=e.getBoundingClientRect(),r=Math.max(n.width,n.height),s=t.clientX-n.left-r/2,o=t.clientY-n.top-r/2;i.style.width=i.style.height=`${r}px`,i.style.left=`${s}px`,i.style.top=`${o}px`,i.classList.add("ripple"),e.appendChild(i),i.addEventListener("animationend",(()=>{i.remove()}))}},t.NeumoButton.styles=e.css`
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
  `,n([i.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"label",void 0),n([i.property({type:Boolean}),r("design:type",Boolean)],t.NeumoButton.prototype,"disabled",void 0),n([i.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"variant",void 0),n([i.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"size",void 0),n([i.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"platform",void 0),n([i.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"bgColor",void 0),n([i.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"textColor",void 0),n([i.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"shadowLight",void 0),n([i.property({type:String}),r("design:type",String)],t.NeumoButton.prototype,"shadowDark",void 0),n([i.property({type:Boolean}),r("design:type",Boolean)],t.NeumoButton.prototype,"useHaptics",void 0),n([i.property({type:Boolean}),r("design:type",Boolean)],t.NeumoButton.prototype,"useRipple",void 0),t.NeumoButton=n([i.customElement("neumo-button")],t.NeumoButton),t.NeumoCard=class extends e.LitElement{constructor(){super(...arguments),this.platform="web",this.variant="flat",this.size="md",this.interactive=!1,this.bgColor="#f0f0f0",this.shadowLight="#ffffff",this.shadowDark="#d1d1d1",this.width="auto",this.height="auto",this.padding="20px",this.rippleEffect=!1,this.hoverEffect=!0,this.pressEffect=!0}render(){return e.html`
      <div
        class=${this._getCardClasses()}
        style=${this._getCardStyles()}
        @click=${this._handleClick}
        @touchstart=${this._handleTouchStart}
        @touchend=${this._handleTouchEnd}
      >
        <slot></slot>
      </div>
    `}_getCardClasses(){return`neumo-card ${this.variant} ${this.platform} ${this.size} ${this.interactive?"interactive":""}`}_getCardStyles(){return`\n      --card-bg: ${this.bgColor};\n      --card-shadow-light: ${this.shadowLight};\n      --card-shadow-dark: ${this.shadowDark};\n      --card-width: ${this.width};\n      --card-height: ${this.height};\n      --card-padding: ${this.padding};\n    `}_handleClick(t){this.interactive&&("android"===this.platform&&this.rippleEffect&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-card-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.interactive&&"ios"===this.platform&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,i=document.createElement("span"),n=e.getBoundingClientRect(),r=Math.max(n.width,n.height),s=t.clientX-n.left-r/2,o=t.clientY-n.top-r/2;i.style.width=i.style.height=`${r}px`,i.style.left=`${s}px`,i.style.top=`${o}px`,i.classList.add("ripple"),e.appendChild(i),i.addEventListener("animationend",(()=>{i.remove()}))}},t.NeumoCard.styles=e.css`
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
  `,n([i.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"platform",void 0),n([i.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"variant",void 0),n([i.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"size",void 0),n([i.property({type:Boolean}),r("design:type",Boolean)],t.NeumoCard.prototype,"interactive",void 0),n([i.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"bgColor",void 0),n([i.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"shadowLight",void 0),n([i.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"shadowDark",void 0),n([i.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"width",void 0),n([i.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"height",void 0),n([i.property({type:String}),r("design:type",String)],t.NeumoCard.prototype,"padding",void 0),n([i.property({type:Boolean}),r("design:type",Boolean)],t.NeumoCard.prototype,"rippleEffect",void 0),n([i.property({type:Boolean}),r("design:type",Boolean)],t.NeumoCard.prototype,"hoverEffect",void 0),n([i.property({type:Boolean}),r("design:type",Boolean)],t.NeumoCard.prototype,"pressEffect",void 0),t.NeumoCard=n([i.customElement("neumo-card")],t.NeumoCard)}));
//# sourceMappingURL=index.js.map
