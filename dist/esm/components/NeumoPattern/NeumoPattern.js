import{__decorate as t,__metadata as e}from"../../node_modules/tslib/tslib.es6.js";import{css as n,LitElement as r,html as i}from"lit";import{property as s,customElement as a}from"lit/decorators.js";import{classMap as o}from"../../node_modules/lit-html/directives/class-map.js";let d=class extends r{constructor(){super(...arguments),this.pattern="z",this.loading=!1,this.content={main:""},this.withDropCap=!1}render(){return i`
      <div class="pattern-container ${this.pattern}-pattern">
        ${this._renderPattern()}
      </div>
    `}_renderPattern(){if(this.loading)return this._renderSkeleton();switch(this.pattern){case"z":return this._renderZPattern();case"f":return this._renderFPattern();case"t":return this._renderTPattern();default:return i`<div>Invalid pattern</div>`}}_renderZPattern(){return i`
      <div class="${o({"with-drop-cap":this.withDropCap})}">
        ${this.content.main}
      </div>
      ${this.content.secondary?i`
        <div>${this.content.secondary}</div>
      `:""}
    `}_renderFPattern(){return i`
      ${this.content.header?i`
        <div class="pattern-header ${o({"with-drop-cap":this.withDropCap})}">
          ${this.content.header}
        </div>
      `:""}
      <div class="pattern-main">
        <div class="${o({"with-drop-cap":this.withDropCap})}">
          ${this.content.main}
        </div>
        ${this.content.sidebar?i`
          <div class="pattern-sidebar">${this.content.sidebar}</div>
        `:""}
      </div>
    `}_renderTPattern(){return i`
      ${this.content.header?i`
        <div class="pattern-header ${o({"with-drop-cap":this.withDropCap})}">
          ${this.content.header}
        </div>
      `:""}
      <div class="pattern-content">
        <div class="${o({"with-drop-cap":this.withDropCap})}">
          ${this.content.main}
        </div>
        ${this.content.secondary?i`
          <div>${this.content.secondary}</div>
        `:""}
      </div>
    `}_renderSkeleton(){const t="f"===this.pattern?3:2;return i`
      ${Array(t).fill(0).map((()=>i`
        <div class="skeleton"></div>
      `))}
    `}};d.styles=n`
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
  `,t([s({type:String}),e("design:type",String)],d.prototype,"pattern",void 0),t([s({type:Boolean}),e("design:type",Object)],d.prototype,"loading",void 0),t([s({type:Object}),e("design:type",Object)],d.prototype,"content",void 0),t([s({type:Boolean}),e("design:type",Object)],d.prototype,"withDropCap",void 0),d=t([a("neumo-pattern")],d);let p=class extends d{constructor(){super(),this.pattern="z"}};p=t([a("neumo-z-pattern"),e("design:paramtypes",[])],p);let c=class extends d{constructor(){super(),this.pattern="f"}};c=t([a("neumo-f-pattern"),e("design:paramtypes",[])],c);let h=class extends d{constructor(){super(),this.pattern="t"}};h=t([a("neumo-t-pattern"),e("design:paramtypes",[])],h);export{c as NeumoFPattern,d as NeumoPattern,h as NeumoTPattern,p as NeumoZPattern};
//# sourceMappingURL=NeumoPattern.js.map
