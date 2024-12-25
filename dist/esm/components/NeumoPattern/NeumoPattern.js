import{__decorate as t,__metadata as e}from"../../node_modules/tslib/tslib.es6.js";import{css as n,LitElement as r,html as i,nothing as s}from"lit";import{property as a,customElement as o}from"lit/decorators.js";import{classMap as d}from"../../node_modules/lit-html/directives/class-map.js";let p=class extends r{constructor(){super(...arguments),this.pattern="z",this.loading=!1,this.content={main:""},this.withDropCap=!1}render(){const t={"pattern-container":!0,[`${this.pattern}-pattern`]:!0};return i`
      <div class=${d(t)} 
           role=${this.role||s}
           aria-label=${this.ariaLabel||s}>
        ${this._renderPattern()}
      </div>
    `}_renderPattern(){if(this.loading)return this._renderSkeleton();switch(this.pattern){case"z":return this._renderZPattern();case"f":return this._renderFPattern();case"t":return this._renderTPattern();default:return i`<div>Invalid pattern</div>`}}_renderZPattern(){const t={"with-drop-cap":this.withDropCap};return i`
      <div class=${d(t)}>
        ${this._renderContent(this.content.main)}
      </div>
      ${this.content.secondary?i`
        <div>${this._renderContent(this.content.secondary)}</div>
      `:s}
    `}_renderFPattern(){const t={"with-drop-cap":this.withDropCap};return i`
      ${this.content.header?i`
        <div class="pattern-header ${d(t)}">
          ${this._renderContent(this.content.header)}
        </div>
      `:s}
      <div class="pattern-main">
        <div class=${d(t)}>
          ${this._renderContent(this.content.main)}
        </div>
        ${this.content.sidebar?i`
          <div class="pattern-sidebar">
            ${this._renderContent(this.content.sidebar)}
          </div>
        `:s}
      </div>
    `}_renderTPattern(){const t={"with-drop-cap":this.withDropCap};return i`
      ${this.content.header?i`
        <div class="pattern-header ${d(t)}">
          ${this._renderContent(this.content.header)}
        </div>
      `:s}
      <div class="pattern-content">
        <div class=${d(t)}>
          ${this._renderContent(this.content.main)}
        </div>
        ${this.content.secondary?i`
          <div>${this._renderContent(this.content.secondary)}</div>
        `:s}
      </div>
    `}_renderSkeleton(){const t="f"===this.pattern?3:2;return i`
      ${Array(t).fill(0).map((()=>i`
        <div class="skeleton"></div>
      `))}
    `}_renderContent(t){return"string"==typeof t?i`${t}`:t}};p.styles=n`
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
  `,t([a({type:String}),e("design:type",String)],p.prototype,"pattern",void 0),t([a({type:Boolean}),e("design:type",Object)],p.prototype,"loading",void 0),t([a({type:Object}),e("design:type",Object)],p.prototype,"content",void 0),t([a({type:Boolean}),e("design:type",Object)],p.prototype,"withDropCap",void 0),t([a({type:String}),e("design:type",Object)],p.prototype,"role",void 0),t([a({type:String}),e("design:type",Object)],p.prototype,"ariaLabel",void 0),p=t([o("neumo-pattern")],p);let c=class extends p{constructor(){super(),this.pattern="z"}};c=t([o("neumo-z-pattern"),e("design:paramtypes",[])],c);let h=class extends p{constructor(){super(),this.pattern="f"}};h=t([o("neumo-f-pattern"),e("design:paramtypes",[])],h);let l=class extends p{constructor(){super(),this.pattern="t"}};l=t([o("neumo-t-pattern"),e("design:paramtypes",[])],l);export{h as NeumoFPattern,p as NeumoPattern,l as NeumoTPattern,c as NeumoZPattern};
//# sourceMappingURL=NeumoPattern.js.map
