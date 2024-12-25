!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit"),require("lit/decorators.js")):"function"==typeof define&&define.amd?define(["exports","lit","lit/decorators.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).NeumoComponents={},t.Lit,t.LitDecorators)}(this,(function(t,e,i){"use strict";function o(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}function s(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;const r=globalThis,n=r.trustedTypes,a=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,d="$lit$",p=`lit$${Math.random().toFixed(9).slice(2)}$`,l="?"+p,h=`<${l}>`,c=document,u=()=>c.createComment(""),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,g=Array.isArray,f="[ \t\n\f\r]",y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,$=/>/g,b=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),_=/'/g,A=/"/g,x=/^(?:script|style|textarea|title)$/i,w=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),C=new WeakMap,S=c.createTreeWalker(c,129);function k(t,e){if(!g(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(e):e}const T=(t,e)=>{const i=t.length-1,o=[];let s,r=2===e?"<svg>":3===e?"<math>":"",n=y;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,u=0;for(;u<i.length&&(n.lastIndex=u,l=n.exec(i),null!==l);)u=n.lastIndex,n===y?"!--"===l[1]?n=v:void 0!==l[1]?n=$:void 0!==l[2]?(x.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=b):void 0!==l[3]&&(n=b):n===b?">"===l[0]?(n=s??y,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?b:'"'===l[3]?A:_):n===A||n===_?n=b:n===v||n===$?n=y:(n=b,s=void 0);const m=n===b&&t[e+1].startsWith("/>")?" ":"";r+=n===y?i+h:c>=0?(o.push(a),i.slice(0,c)+d+i.slice(c)+p+m):i+p+(-2===c?e:m)}return[k(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class B{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,r=0;const a=t.length-1,h=this.parts,[c,m]=T(t,e);if(this.el=B.createElement(c,i),S.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=S.nextNode())&&h.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(d)){const e=m[r++],i=o.getAttribute(t).split(p),n=/([.?@])?(.*)/.exec(e);h.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?L:"?"===n[1]?M:"@"===n[1]?j:z}),o.removeAttribute(t)}else t.startsWith(p)&&(h.push({type:6,index:s}),o.removeAttribute(t));if(x.test(o.tagName)){const t=o.textContent.split(p),e=t.length-1;if(e>0){o.textContent=n?n.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],u()),S.nextNode(),h.push({type:2,index:++s});o.append(t[e],u())}}}else if(8===o.nodeType)if(o.data===l)h.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(p,t+1));)h.push({type:7,index:s}),t+=p.length-1}s++}}static createElement(t,e){const i=c.createElement("template");return i.innerHTML=t,i}}function E(t,e,i=t,o){if(e===w)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const r=m(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=E(t,s._$AS(t,e.values),s,o)),e}class P{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??c).importNode(e,!0);S.currentNode=o;let s=S.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new H(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new R(s,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(s=S.nextNode(),r++)}return S.currentNode=c,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),m(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>g(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==N&&m(this._$AH)?this._$AA.nextSibling.data=t:this.T(c.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=B.createElement(k(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new P(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new B(t)),e}k(t){g(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new H(this.O(u()),this.O(u()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}_$AI(t,e=this,i,o){const s=this.strings;let r=!1;if(void 0===s)t=E(this,t,e,0),r=!m(t)||t!==this._$AH&&t!==w,r&&(this._$AH=t);else{const o=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=E(this,o[i+n],e,n),a===w&&(a=this._$AH[n]),r||=!m(a)||a!==this._$AH[n],a===N?t=N:t!==N&&(t+=(a??"")+s[n+1]),this._$AH[n]=a}r&&!o&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class L extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}class M extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==N)}}class j extends z{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??N)===w)return;const i=this._$AH,o=t===N&&i!==N||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==N&&(i===N||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class R{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const D=r.litHtmlPolyfillSupport;D?.(B,H),(r.litHtmlVersions??=[]).push("3.2.1");const O=1;class I{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const U=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends I{constructor(t){if(super(t),t.type!==O||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return w}});t.NeumoPattern=class extends e.LitElement{constructor(){super(...arguments),this.pattern="z",this.loading=!1,this.content={main:""},this.withDropCap=!1,this.role=null,this.ariaLabel=null}render(){const t={"pattern-container":!0,[`${this.pattern}-pattern`]:!0};return e.html`
      <div class=${U(t)} 
           role=${this.role||e.nothing}
           aria-label=${this.ariaLabel||e.nothing}>
        ${this._renderPattern()}
      </div>
    `}_renderPattern(){if(this.loading)return this._renderSkeleton();switch(this.pattern){case"z":return this._renderZPattern();case"f":return this._renderFPattern();case"t":return this._renderTPattern();default:return e.html`<div>Invalid pattern</div>`}}_renderZPattern(){const t={"with-drop-cap":this.withDropCap};return e.html`
      <div class=${U(t)}>
        ${this._renderContent(this.content.main)}
      </div>
      ${this.content.secondary?e.html`
        <div>${this._renderContent(this.content.secondary)}</div>
      `:e.nothing}
    `}_renderFPattern(){const t={"with-drop-cap":this.withDropCap};return e.html`
      ${this.content.header?e.html`
        <div class="pattern-header ${U(t)}">
          ${this._renderContent(this.content.header)}
        </div>
      `:e.nothing}
      <div class="pattern-main">
        <div class=${U(t)}>
          ${this._renderContent(this.content.main)}
        </div>
        ${this.content.sidebar?e.html`
          <div class="pattern-sidebar">
            ${this._renderContent(this.content.sidebar)}
          </div>
        `:e.nothing}
      </div>
    `}_renderTPattern(){const t={"with-drop-cap":this.withDropCap};return e.html`
      ${this.content.header?e.html`
        <div class="pattern-header ${U(t)}">
          ${this._renderContent(this.content.header)}
        </div>
      `:e.nothing}
      <div class="pattern-content">
        <div class=${U(t)}>
          ${this._renderContent(this.content.main)}
        </div>
        ${this.content.secondary?e.html`
          <div>${this._renderContent(this.content.secondary)}</div>
        `:e.nothing}
      </div>
    `}_renderSkeleton(){const t="f"===this.pattern?3:2;return e.html`
      ${Array(t).fill(0).map((()=>e.html`
        <div class="skeleton"></div>
      `))}
    `}_renderContent(t){return"string"==typeof t?e.html`${t}`:t}},t.NeumoPattern.styles=e.css`
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
  `,o([i.property({type:String}),s("design:type",String)],t.NeumoPattern.prototype,"pattern",void 0),o([i.property({type:Boolean}),s("design:type",Object)],t.NeumoPattern.prototype,"loading",void 0),o([i.property({type:Object}),s("design:type",Object)],t.NeumoPattern.prototype,"content",void 0),o([i.property({type:Boolean}),s("design:type",Object)],t.NeumoPattern.prototype,"withDropCap",void 0),o([i.property({type:String}),s("design:type",Object)],t.NeumoPattern.prototype,"role",void 0),o([i.property({type:String}),s("design:type",Object)],t.NeumoPattern.prototype,"ariaLabel",void 0),t.NeumoPattern=o([i.customElement("neumo-pattern")],t.NeumoPattern),t.NeumoZPattern=class extends t.NeumoPattern{constructor(){super(),this.pattern="z"}},t.NeumoZPattern=o([i.customElement("neumo-z-pattern"),s("design:paramtypes",[])],t.NeumoZPattern),t.NeumoFPattern=class extends t.NeumoPattern{constructor(){super(),this.pattern="f"}},t.NeumoFPattern=o([i.customElement("neumo-f-pattern"),s("design:paramtypes",[])],t.NeumoFPattern),t.NeumoTPattern=class extends t.NeumoPattern{constructor(){super(),this.pattern="t"}},t.NeumoTPattern=o([i.customElement("neumo-t-pattern"),s("design:paramtypes",[])],t.NeumoTPattern),t.NeumoButton=class extends e.LitElement{constructor(){super(...arguments),this.label="Click Me",this.disabled=!1,this.variant="flat",this.size="md",this.platform="web",this.bgColor="#e0e0e0",this.textColor="#333",this.shadowLight="#ffffff",this.shadowDark="#cccccc",this.useHaptics=!1,this.useRipple=!1}render(){return e.html`
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
    `}_getButtonClasses(){return`neumo-button ${this.variant} ${this.platform} ${this.size}`}_getButtonStyles(){return`\n      --button-bg: ${this.bgColor};\n      --button-text: ${this.textColor};\n      --button-shadow-light: ${this.shadowLight};\n      --button-shadow-dark: ${this.shadowDark};\n    `}_handleClick(t){this.disabled||("android"===this.platform&&this.useRipple&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.disabled||"ios"===this.platform&&this.useHaptics&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,i=document.createElement("span"),o=e.getBoundingClientRect(),s=Math.max(o.width,o.height),r=t.clientX-o.left-s/2,n=t.clientY-o.top-s/2;i.style.width=i.style.height=`${s}px`,i.style.left=`${r}px`,i.style.top=`${n}px`,i.classList.add("ripple"),e.appendChild(i),i.addEventListener("animationend",(()=>{i.remove()}))}},t.NeumoButton.styles=e.css`
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
  `,o([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"label",void 0),o([i.property({type:Boolean}),s("design:type",Boolean)],t.NeumoButton.prototype,"disabled",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"variant",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"size",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"platform",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"bgColor",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"textColor",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"shadowLight",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoButton.prototype,"shadowDark",void 0),o([i.property({type:Boolean}),s("design:type",Boolean)],t.NeumoButton.prototype,"useHaptics",void 0),o([i.property({type:Boolean}),s("design:type",Boolean)],t.NeumoButton.prototype,"useRipple",void 0),t.NeumoButton=o([i.customElement("neumo-button")],t.NeumoButton),t.NeumoCard=class extends e.LitElement{constructor(){super(...arguments),this.platform="web",this.variant="flat",this.size="md",this.interactive=!1,this.bgColor="#f0f0f0",this.shadowLight="#ffffff",this.shadowDark="#d1d1d1",this.width="auto",this.height="auto",this.padding="20px",this.rippleEffect=!1,this.hoverEffect=!0,this.pressEffect=!0}render(){return e.html`
      <div
        class=${this._getCardClasses()}
        style=${this._getCardStyles()}
        @click=${this._handleClick}
        @touchstart=${this._handleTouchStart}
        @touchend=${this._handleTouchEnd}
      >
        <slot></slot>
      </div>
    `}_getCardClasses(){return`neumo-card ${this.variant} ${this.platform} ${this.size} ${this.interactive?"interactive":""}`}_getCardStyles(){return`\n      --card-bg: ${this.bgColor};\n      --card-shadow-light: ${this.shadowLight};\n      --card-shadow-dark: ${this.shadowDark};\n      --card-width: ${this.width};\n      --card-height: ${this.height};\n      --card-padding: ${this.padding};\n    `}_handleClick(t){this.interactive&&("android"===this.platform&&this.rippleEffect&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-card-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.interactive&&"ios"===this.platform&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,i=document.createElement("span"),o=e.getBoundingClientRect(),s=Math.max(o.width,o.height),r=t.clientX-o.left-s/2,n=t.clientY-o.top-s/2;i.style.width=i.style.height=`${s}px`,i.style.left=`${r}px`,i.style.top=`${n}px`,i.classList.add("ripple"),e.appendChild(i),i.addEventListener("animationend",(()=>{i.remove()}))}},t.NeumoCard.styles=e.css`
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
  `,o([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"platform",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"variant",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"size",void 0),o([i.property({type:Boolean}),s("design:type",Boolean)],t.NeumoCard.prototype,"interactive",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"bgColor",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"shadowLight",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"shadowDark",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"width",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"height",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoCard.prototype,"padding",void 0),o([i.property({type:Boolean}),s("design:type",Boolean)],t.NeumoCard.prototype,"rippleEffect",void 0),o([i.property({type:Boolean}),s("design:type",Boolean)],t.NeumoCard.prototype,"hoverEffect",void 0),o([i.property({type:Boolean}),s("design:type",Boolean)],t.NeumoCard.prototype,"pressEffect",void 0),t.NeumoCard=o([i.customElement("neumo-card")],t.NeumoCard),t.NeumoToast=class extends e.LitElement{constructor(){super(...arguments),this.message="",this.type="info",this.duration=3e3,this.position="bottom",this.open=!1,this.platform="web",this.timeout=null}connectedCallback(){super.connectedCallback(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}disconnectedCallback(){super.disconnectedCallback(),this.timeout&&window.clearTimeout(this.timeout)}updated(t){t.has("open")&&this.open&&this.startTimer()}startTimer(){this.timeout&&window.clearTimeout(this.timeout),this.duration>0&&(this.timeout=window.setTimeout((()=>{this.close()}),this.duration))}getIcon(){switch(this.type){case"success":return e.html`<svg class="icon" viewBox="0 0 20 20" fill="var(--toast-success)">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>`;case"error":return e.html`<svg class="icon" viewBox="0 0 20 20" fill="var(--toast-error)">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>`;case"warning":return e.html`<svg class="icon" viewBox="0 0 20 20" fill="var(--toast-warning)">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>`;default:return e.html`<svg class="icon" viewBox="0 0 20 20" fill="var(--toast-info)">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
        </svg>`}}close(){this.open=!1,this.dispatchEvent(new CustomEvent("neumo-toast-close"))}render(){const t={toast:!0,open:this.open,[this.type]:!0};return e.html`
      <div 
        class=${U(t)}
        @click=${this.close}
      >
        ${this.getIcon()}
        <span class="message">${this.message}</span>
      </div>
    `}},t.NeumoToast.styles=e.css`
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
  `,o([i.property({type:String}),s("design:type",Object)],t.NeumoToast.prototype,"message",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoToast.prototype,"type",void 0),o([i.property({type:Number}),s("design:type",Object)],t.NeumoToast.prototype,"duration",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoToast.prototype,"position",void 0),o([i.property({type:Boolean}),s("design:type",Object)],t.NeumoToast.prototype,"open",void 0),o([i.property({type:String}),s("design:type",String)],t.NeumoToast.prototype,"platform",void 0),t.NeumoToast=o([i.customElement("neumo-toast")],t.NeumoToast)}));
//# sourceMappingURL=index.js.map
