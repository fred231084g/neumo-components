import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('neumo-card')
export class NeumoCard extends LitElement {
  // Define component properties
  @property({ type: String }) bgColor: string = '#f0f0f0';
  @property({ type: String }) shadowLight: string = '#ffffff';
  @property({ type: String }) shadowDark: string = '#d1d1d1';
  @property({ type: String }) borderRadius: string = '16px';
  @property({ type: String }) padding: string = '20px';

  // Dynamic styles using CSS variables
  static styles = css`
    :host {
      display: block;
      --neumo-card-bg: var(--card-bg, #f0f0f0);
      --neumo-card-shadow-light: var(--card-shadow-light, #ffffff);
      --neumo-card-shadow-dark: var(--card-shadow-dark, #d1d1d1);
      --neumo-card-border-radius: var(--card-border-radius, 16px);
      --neumo-card-padding: var(--card-padding, 20px);
    }

    .neumo-card {
      background: var(--neumo-card-bg);
      border-radius: var(--neumo-card-border-radius);
      padding: var(--neumo-card-padding);
      box-shadow: 10px 10px 20px var(--neumo-card-shadow-dark),
                  -10px -10px 20px var(--neumo-card-shadow-light);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    .neumo-card:hover {
      transform: scale(1.02);
      box-shadow: 8px 8px 16px var(--neumo-card-shadow-dark),
                  -8px -8px 16px var(--neumo-card-shadow-light);
    }

    .neumo-card:active {
      transform: scale(0.98);
      box-shadow: 5px 5px 10px var(--neumo-card-shadow-dark),
                  -5px -5px 10px var(--neumo-card-shadow-light);
    }
  `;

  render() {
    return html`
      <div
        class="neumo-card"
        style="${this._dynamicStyles()}"
      >
        <slot></slot>
      </div>
    `;
  }

  private _dynamicStyles(): string {
    return `
      --card-bg: ${this.bgColor};
      --card-shadow-light: ${this.shadowLight};
      --card-shadow-dark: ${this.shadowDark};
      --card-border-radius: ${this.borderRadius};
      --card-padding: ${this.padding};
    `;
  }
}
