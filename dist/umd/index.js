!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit"),require("lit/decorators.js")):"function"==typeof define&&define.amd?define(["exports","lit","lit/decorators.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).NeumoComponents={},t.Lit,t.LitDecorators)}(this,(function(t,e,i){"use strict";function n(t,e,i,n){var s,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(r<3?s(o):r>3?s(e,i,o):s(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}function s(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;const r=globalThis,o=r.trustedTypes,a=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,d="$lit$",p=`lit$${Math.random().toFixed(9).slice(2)}$`,h="?"+p,l=`<${h}>`,c=document,u=()=>c.createComment(""),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,g=Array.isArray,y="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,$=/>/g,b=RegExp(`>|${y}(?:([^\\s"'>=/]+)(${y}*=${y}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),_=/'/g,A=/"/g,x=/^(?:script|style|textarea|title)$/i,N=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),C=new WeakMap,S=c.createTreeWalker(c,129);function k(t,e){if(!g(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(e):e}const B=(t,e)=>{const i=t.length-1,n=[];let s,r=2===e?"<svg>":3===e?"<math>":"",o=f;for(let e=0;e<i;e++){const i=t[e];let a,h,c=-1,u=0;for(;u<i.length&&(o.lastIndex=u,h=o.exec(i),null!==h);)u=o.lastIndex,o===f?"!--"===h[1]?o=v:void 0!==h[1]?o=$:void 0!==h[2]?(x.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=b):void 0!==h[3]&&(o=b):o===b?">"===h[0]?(o=s??f,c=-1):void 0===h[1]?c=-2:(c=o.lastIndex-h[2].length,a=h[1],o=void 0===h[3]?b:'"'===h[3]?A:_):o===A||o===_?o=b:o===v||o===$?o=f:(o=b,s=void 0);const m=o===b&&t[e+1].startsWith("/>")?" ":"";r+=o===f?i+l:c>=0?(n.push(a),i.slice(0,c)+d+i.slice(c)+p+m):i+p+(-2===c?e:m)}return[k(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class E{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const a=t.length-1,l=this.parts,[c,m]=B(t,e);if(this.el=E.createElement(c,i),S.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=S.nextNode())&&l.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(d)){const e=m[r++],i=n.getAttribute(t).split(p),o=/([.?@])?(.*)/.exec(e);l.push({type:1,index:s,name:o[2],strings:i,ctor:"."===o[1]?M:"?"===o[1]?R:"@"===o[1]?D:z}),n.removeAttribute(t)}else t.startsWith(p)&&(l.push({type:6,index:s}),n.removeAttribute(t));if(x.test(n.tagName)){const t=n.textContent.split(p),e=t.length-1;if(e>0){n.textContent=o?o.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],u()),S.nextNode(),l.push({type:2,index:++s});n.append(t[e],u())}}}else if(8===n.nodeType)if(n.data===h)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(p,t+1));)l.push({type:7,index:s}),t+=p.length-1}s++}}static createElement(t,e){const i=c.createElement("template");return i.innerHTML=t,i}}function P(t,e,i=t,n){if(e===N)return e;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const r=m(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(e=P(t,s._$AS(t,e.values),s,n)),e}class T{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??c).importNode(e,!0);S.currentNode=n;let s=S.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new H(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new L(s,this,t)),this._$AV.push(e),a=i[++o]}r!==a?.index&&(s=S.nextNode(),r++)}return S.currentNode=c,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),m(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==N&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>g(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==w&&m(this._$AH)?this._$AA.nextSibling.data=t:this.T(c.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=E.createElement(k(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new T(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new E(t)),e}k(t){g(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new H(this.O(u()),this.O(u()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=w}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(void 0===s)t=P(this,t,e,0),r=!m(t)||t!==this._$AH&&t!==N,r&&(this._$AH=t);else{const n=t;let o,a;for(t=s[0],o=0;o<s.length-1;o++)a=P(this,n[i+o],e,o),a===N&&(a=this._$AH[o]),r||=!m(a)||a!==this._$AH[o],a===w?t=w:t!==w&&(t+=(a??"")+s[o+1]),this._$AH[o]=a}r&&!n&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class M extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}}class R extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==w)}}class D extends z{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??w)===N)return;const i=this._$AH,n=t===w&&i!==w||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==w&&(i===w||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const j=r.litHtmlPolyfillSupport;j?.(E,H),(r.litHtmlVersions??=[]).push("3.2.1");const O=1;class I{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const U=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends I{constructor(t){if(super(t),t.type!==O||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const n=!!e[t];n===this.st.has(t)||this.nt?.has(t)||(n?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return N}});t.NeumoPattern=class extends e.LitElement{constructor(){super(...arguments),this.pattern="z",this.loading=!1,this.content={main:""},this.withDropCap=!1}render(){return e.html`
      <div class="pattern-container ${this.pattern}-pattern">
        ${this._renderPattern()}
      </div>
    `}_renderPattern(){if(this.loading)return this._renderSkeleton();switch(this.pattern){case"z":return this._renderZPattern();case"f":return this._renderFPattern();case"t":return this._renderTPattern();default:return e.html`<div>Invalid pattern</div>`}}_renderZPattern(){return e.html`
      <div class="${U({"with-drop-cap":this.withDropCap})}">
        ${this.content.main}
      </div>
      ${this.content.secondary?e.html`
        <div>${this.content.secondary}</div>
      `:""}
    `}_renderFPattern(){return e.html`
      ${this.content.header?e.html`
        <div class="pattern-header ${U({"with-drop-cap":this.withDropCap})}">
          ${this.content.header}
        </div>
      `:""}
      <div class="pattern-main">
        <div class="${U({"with-drop-cap":this.withDropCap})}">
          ${this.content.main}
        </div>
        ${this.content.sidebar?e.html`
          <div class="pattern-sidebar">${this.content.sidebar}</div>
        `:""}
      </div>
    `}_renderTPattern(){return e.html`
      ${this.content.header?e.html`
        <div class="pattern-header ${U({"with-drop-cap":this.withDropCap})}">
          ${this.content.header}
        </div>
      `:""}
      <div class="pattern-content">
        <div class="${U({"with-drop-cap":this.withDropCap})}">
          ${this.content.main}
        </div>
        ${this.content.secondary?e.html`
          <div>${this.content.secondary}</div>
        `:""}
      </div>
    `}_renderSkeleton(){const t="f"===this.pattern?3:2;return e.html`
      ${Array(t).fill(0).map((()=>e.html`
        <div class="skeleton"></div>
      `))}
    `}},t.NeumoPattern.styles=e.css`
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
  `,n([i.property({type:String}),s("design:type",String)],t.NeumoPattern.prototype,"pattern",void 0),n([i.property({type:Boolean}),s("design:type",Object)],t.NeumoPattern.prototype,"loading",void 0),n([i.property({type:Object}),s("design:type",Object)],t.NeumoPattern.prototype,"content",void 0),n([i.property({type:Boolean}),s("design:type",Object)],t.NeumoPattern.prototype,"withDropCap",void 0),t.NeumoPattern=n([i.customElement("neumo-pattern")],t.NeumoPattern),t.NeumoZPattern=class extends t.NeumoPattern{constructor(){super(),this.pattern="z"}},t.NeumoZPattern=n([i.customElement("neumo-z-pattern"),s("design:paramtypes",[])],t.NeumoZPattern),t.NeumoFPattern=class extends t.NeumoPattern{constructor(){super(),this.pattern="f"}},t.NeumoFPattern=n([i.customElement("neumo-f-pattern"),s("design:paramtypes",[])],t.NeumoFPattern),t.NeumoTPattern=class extends t.NeumoPattern{constructor(){super(),this.pattern="t"}},t.NeumoTPattern=n([i.customElement("neumo-t-pattern"),s("design:paramtypes",[])],t.NeumoTPattern),t.NeumoButton=class extends e.LitElement{constructor(){super(...arguments),this.label="Click Me",this.disabled=!1,this.variant="flat",this.size="md",this.platform="web",this.bgColor="#e0e0e0",this.textColor="#333",this.shadowLight="#ffffff",this.shadowDark="#cccccc",this.useHaptics=!1,this.useRipple=!1}render(){return e.html`
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
    `}_getButtonClasses(){return`neumo-button ${this.variant} ${this.platform} ${this.size}`}_getButtonStyles(){return`\n      --button-bg: ${this.bgColor};\n      --button-text: ${this.textColor};\n      --button-shadow-light: ${this.shadowLight};\n      --button-shadow-dark: ${this.shadowDark};\n    `}_handleClick(t){this.disabled||("android"===this.platform&&this.useRipple&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.disabled||"ios"===this.platform&&this.useHaptics&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,i=document.createElement("span"),n=e.getBoundingClientRect(),s=Math.max(n.width,n.height),r=t.clientX-n.left-s/2,o=t.clientY-n.top-s/2;i.style.width=i.style.height=`${s}px`,i.style.left=`${r}px`,i.style.top=`${o}px`,i.classList.add("ripple"),e.appendChild(i),i.addEventListener("animationend",(()=>{i.remove()}))}},t.NeumoButton.styles=e.css`
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
  `,n([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"label",void 0),n([i.property({type:Boolean}),s("design:type",Boolean)],t.NeumoButton.prototype,"disabled",void 0),n([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"variant",void 0),n([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"size",void 0),n([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"platform",void 0),n([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"bgColor",void 0),n([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"textColor",void 0),n([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"shadowLight",void 0),n([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"shadowDark",void 0),n([i.property({type:Boolean}),s("design:type",Boolean)],t.NeumoButton.prototype,"useHaptics",void 0),n([i.property({type:Boolean}),s("design:type",Boolean)],t.NeumoButton.prototype,"useRipple",void 0),t.NeumoButton=n([i.customElement("neumo-button")],t.NeumoButton),t.NeumoCard=class extends e.LitElement{constructor(){super(...arguments),this.platform="web",this.variant="flat",this.size="md",this.interactive=!1,this.bgColor="#f0f0f0",this.shadowLight="#ffffff",this.shadowDark="#d1d1d1",this.width="auto",this.height="auto",this.padding="20px",this.rippleEffect=!1,this.hoverEffect=!0,this.pressEffect=!0}render(){return e.html`
      <div
        class=${this._getCardClasses()}
        style=${this._getCardStyles()}
        @click=${this._handleClick}
        @touchstart=${this._handleTouchStart}
        @touchend=${this._handleTouchEnd}
      >
        <slot></slot>
      </div>
    `}_getCardClasses(){return`neumo-card ${this.variant} ${this.platform} ${this.size} ${this.interactive?"interactive":""}`}_getCardStyles(){return`\n      --card-bg: ${this.bgColor};\n      --card-shadow-light: ${this.shadowLight};\n      --card-shadow-dark: ${this.shadowDark};\n      --card-width: ${this.width};\n      --card-height: ${this.height};\n      --card-padding: ${this.padding};\n    `}_handleClick(t){this.interactive&&("android"===this.platform&&this.rippleEffect&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-card-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.interactive&&"ios"===this.platform&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,i=document.createElement("span"),n=e.getBoundingClientRect(),s=Math.max(n.width,n.height),r=t.clientX-n.left-s/2,o=t.clientY-n.top-s/2;i.style.width=i.style.height=`${s}px`,i.style.left=`${r}px`,i.style.top=`${o}px`,i.classList.add("ripple"),e.appendChild(i),i.addEventListener("animationend",(()=>{i.remove()}))}},t.NeumoCard.styles=e.css`
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
  `,n([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"platform",void 0),n([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"variant",void 0),n([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"size",void 0),n([i.property({type:Boolean}),s("design:type",Boolean)],t.NeumoCard.prototype,"interactive",void 0),n([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"bgColor",void 0),n([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"shadowLight",void 0),n([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"shadowDark",void 0),n([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"width",void 0),n([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"height",void 0),n([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"padding",void 0),n([i.property({type:Boolean}),s("design:type",Boolean)],t.NeumoCard.prototype,"rippleEffect",void 0),n([i.property({type:Boolean}),s("design:type",Boolean)],t.NeumoCard.prototype,"hoverEffect",void 0),n([i.property({type:Boolean}),s("design:type",Boolean)],t.NeumoCard.prototype,"pressEffect",void 0),t.NeumoCard=n([i.customElement("neumo-card")],t.NeumoCard)}));
//# sourceMappingURL=index.js.map
