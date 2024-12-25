import{__decorate as t,__metadata as e}from"../../node_modules/tslib/tslib.es6.js";import{css as i,LitElement as r,html as a}from"lit";import{property as o,customElement as d}from"lit/decorators.js";let s=class extends r{constructor(){super(...arguments),this.platform="web",this.variant="flat",this.size="md",this.interactive=!1,this.bgColor="#f0f0f0",this.shadowLight="#ffffff",this.shadowDark="#d1d1d1",this.width="auto",this.height="auto",this.padding="20px",this.rippleEffect=!1,this.hoverEffect=!0,this.pressEffect=!0}render(){return a`
      <div
        class=${this._getCardClasses()}
        style=${this._getCardStyles()}
        @click=${this._handleClick}
        @touchstart=${this._handleTouchStart}
        @touchend=${this._handleTouchEnd}
      >
        <slot></slot>
      </div>
    `}_getCardClasses(){return`neumo-card ${this.variant} ${this.platform} ${this.size} ${this.interactive?"interactive":""}`}_getCardStyles(){return`\n      --card-bg: ${this.bgColor};\n      --card-shadow-light: ${this.shadowLight};\n      --card-shadow-dark: ${this.shadowDark};\n      --card-width: ${this.width};\n      --card-height: ${this.height};\n      --card-padding: ${this.padding};\n    `}_handleClick(t){this.interactive&&("android"===this.platform&&this.rippleEffect&&this._createRipple(t),this.dispatchEvent(new CustomEvent("neumo-card-click",{detail:{platform:this.platform,variant:this.variant,timestamp:Date.now()},bubbles:!0,composed:!0})))}_handleTouchStart(){this.interactive&&"ios"===this.platform&&"vibrate"in navigator&&navigator.vibrate(10)}_handleTouchEnd(){}_createRipple(t){const e=t.currentTarget,i=document.createElement("span"),r=e.getBoundingClientRect(),a=Math.max(r.width,r.height),o=t.clientX-r.left-a/2,d=t.clientY-r.top-a/2;i.style.width=i.style.height=`${a}px`,i.style.left=`${o}px`,i.style.top=`${d}px`,i.classList.add("ripple"),e.appendChild(i),i.addEventListener("animationend",(()=>{i.remove()}))}};s.styles=i`
    :host {
      --neumo-card-bg: var(--card-bg, #f0f0f0);
      --neumo-card-shadow-light: var(--card-shadow-light, #ffffff);
      --neumo-card-shadow-dark: var(--card-shadow-dark, #d1d1d1);
      --neumo-card-radius: var(--card-radius, 16px);
      --neumo-card-padding: var(--card-padding, 20px);
      --neumo-card-hover-scale: 0;
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
  `,t([o({type:String}),e("design:type",String)],s.prototype,"platform",void 0),t([o({type:String}),e("design:type",String)],s.prototype,"variant",void 0),t([o({type:String}),e("design:type",String)],s.prototype,"size",void 0),t([o({type:Boolean}),e("design:type",Boolean)],s.prototype,"interactive",void 0),t([o({type:String}),e("design:type",String)],s.prototype,"bgColor",void 0),t([o({type:String}),e("design:type",String)],s.prototype,"shadowLight",void 0),t([o({type:String}),e("design:type",String)],s.prototype,"shadowDark",void 0),t([o({type:String}),e("design:type",String)],s.prototype,"width",void 0),t([o({type:String}),e("design:type",String)],s.prototype,"height",void 0),t([o({type:String}),e("design:type",String)],s.prototype,"padding",void 0),t([o({type:Boolean}),e("design:type",Boolean)],s.prototype,"rippleEffect",void 0),t([o({type:Boolean}),e("design:type",Boolean)],s.prototype,"hoverEffect",void 0),t([o({type:Boolean}),e("design:type",Boolean)],s.prototype,"pressEffect",void 0),s=t([d("neumo-card")],s);export{s as NeumoCard};
//# sourceMappingURL=NeumoCard.js.map
