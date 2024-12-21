import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('neumo-button')
export class NeumoButton extends HTMLElement {
  // Define component properties
  @property({ type: String }) label: string = 'Click Me';
  @property({ type: Boolean }) disabled: boolean = false;
  @property({ type: String }) bgColor: string = '#e0e0e0';
  @property({ type: String }) textColor: string = '#333';
  @property({ type: String }) shadowLight: string = '#ffffff';
  @property({ type: String }) shadowDark: string = '#cccccc';

  // Dynamic styles using CSS variables
  static styles = css`
    :host {
      --neumo-btn-bg: var(--button-bg, #e0e0e0);
      --neumo-btn-text: var(--button-text, #333);
      --neumo-btn-shadow-light: var(--button-shadow-light, #ffffff);
      --neumo-btn-shadow-dark: var(--button-shadow-dark, #cccccc);
      --neumo-btn-hover-scale: 0.1;
      --neumo-btn-active-scale: 0.2;
      --neumo-btn-disabled-opacity: 0.6;
    }

    button {
      all: unset;
      display: inline-block;
      padding: 10px 20px;
      border-radius: 12px;
      background: var(--neumo-btn-bg);
      color: var(--neumo-btn-text);
      box-shadow: 5px 5px 10px var(--neumo-btn-shadow-dark),
        -5px -5px 10px var(--neumo-btn-shadow-light);
      font-size: 1rem;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    button:hover {
      transform: scale(1.1);
    }

    button:active {
      transform: scale(1.2);
      box-shadow: 2px 2px 5px var(--neumo-btn-shadow-dark),
        -2px -2px 5px var(--neumo-btn-shadow-light);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: var(--neumo-btn-disabled-opacity);
    }
  `;

  render() {
    return html`
      <button
        class="neumo-button"
        style="${this._dynamicStyles()}"
        ?disabled="${this.disabled}"
        @click="${this._handleClick}"
      >
        ${this.label}
      </button>
    `;
  }

  private _dynamicStyles(): string {
    return `
      --button-bg: ${this.bgColor};
      --button-text: ${this.textColor};
      --button-shadow-light: ${this.shadowLight};
      --button-shadow-dark: ${this.shadowDark};
    `;
  }

  private _handleClick() {
    if (!this.disabled) {
      const event = new CustomEvent('neumo-click', {
        detail: { message: `${this.label} clicked!` },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    }
  }
}
