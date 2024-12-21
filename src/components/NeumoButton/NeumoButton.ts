import { LitElement, html, css } from 'lit';
import './NeumoButton.scss';

export class NeumoButton extends LitElement {
  render() {
    return html`<button><slot></slot></button>`;
  }
}

customElements.define('neumo-button', NeumoButton);
