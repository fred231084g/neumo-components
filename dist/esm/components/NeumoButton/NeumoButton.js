import{__decorate as t,__metadata as e}from"../../node_modules/tslib/tslib.es6.js";import{css as i,LitElement as o,html as n}from"lit";import{property as s,customElement as a}from"lit/decorators.js";let r=class extends o{constructor(){super(...arguments),this.label="Click Me",this.disabled=!1,this.variant="flat",this.size="md",this.platform="web",this.bgColor="#e0e0e0",this.textColor="#333",this.shadowLight="#ffffff",this.shadowDark="#cccccc",this.useHaptics=!1,this.useRipple=!1}render(){return n`
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
    `}_getButtonClasses(){return`neumo-button ${this.variant} ${this.platform} ${this.size}`}_getButtonStyles(){return`\n      --button-bg: ${this.bgColor};\n      --button-text: ${this.textColor};\n      --button-shadow-light: ${this.shadowLight};\n      --button-shadow-dark: ${this.shadowDark};\n    `}_handleClick(t){this.disabled||("android"===this.platform&&this.useRipple&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.disabled||"ios"===this.platform&&this.useHaptics&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,i=document.createElement("span"),o=e.getBoundingClientRect(),n=Math.max(o.width,o.height),s=t.clientX-o.left-n/2,a=t.clientY-o.top-n/2;i.style.width=i.style.height=`${n}px`,i.style.left=`${s}px`,i.style.top=`${a}px`,i.classList.add("ripple"),e.appendChild(i),i.addEventListener("animationend",(()=>{i.remove()}))}};r.styles=i`
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
  `,t([s({type:String}),e("design:type",String)],r.prototype,"label",void 0),t([s({type:Boolean}),e("design:type",Boolean)],r.prototype,"disabled",void 0),t([s({type:String}),e("design:type",String)],r.prototype,"variant",void 0),t([s({type:String}),e("design:type",String)],r.prototype,"size",void 0),t([s({type:String}),e("design:type",String)],r.prototype,"platform",void 0),t([s({type:String}),e("design:type",String)],r.prototype,"bgColor",void 0),t([s({type:String}),e("design:type",String)],r.prototype,"textColor",void 0),t([s({type:String}),e("design:type",String)],r.prototype,"shadowLight",void 0),t([s({type:String}),e("design:type",String)],r.prototype,"shadowDark",void 0),t([s({type:Boolean}),e("design:type",Boolean)],r.prototype,"useHaptics",void 0),t([s({type:Boolean}),e("design:type",Boolean)],r.prototype,"useRipple",void 0),r=t([a("neumo-button")],r);export{r as NeumoButton};
//# sourceMappingURL=NeumoButton.js.map
