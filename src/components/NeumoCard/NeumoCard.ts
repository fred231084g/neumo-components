import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('neumo-card')
export class NeumoCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <div class="neumo-card">
        <slot></slot>
      </div>
    `;
  }
}
