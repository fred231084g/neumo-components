import { LitElement, html, css, customElement } from 'lit-element';
import './NeumoCard.scss';

@customElement('neumo-card')
export class NeumoCard extends LitElement {
    static styles = css`
        :host {
            display: block;
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
            <div class="neumo-card">
                <slot></slot>
            </div>
        `;
    }
}

customElements.define('neumo-card', NeumoCard);