import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

@customElement('neumo-toast')
export class NeumoToast extends LitElement {
  @property({ type: String }) message = '';
  @property({ type: String }) type: ToastType = 'info';
  @property({ type: Number }) duration = 3000;
  @property({ type: String }) position: ToastPosition = 'bottom';
  @property({ type: Boolean }) open = false;
  @property({ type: String }) platform: 'ios' | 'android' | 'web' = 'web';

  private timeout: number | null = null;

  static styles = css`
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
  `;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'alert');
    this.setAttribute('aria-live', 'polite');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('open') && this.open) {
      this.startTimer();
    }
  }

  private startTimer() {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }

    if (this.duration > 0) {
      this.timeout = window.setTimeout(() => {
        this.close();
      }, this.duration);
    }
  }

  private getIcon() {
    switch (this.type) {
      case 'success':
        return html`<svg class="icon" viewBox="0 0 20 20" fill="var(--toast-success)">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>`;
      case 'error':
        return html`<svg class="icon" viewBox="0 0 20 20" fill="var(--toast-error)">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>`;
      case 'warning':
        return html`<svg class="icon" viewBox="0 0 20 20" fill="var(--toast-warning)">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>`;
      default:
        return html`<svg class="icon" viewBox="0 0 20 20" fill="var(--toast-info)">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
        </svg>`;
    }
  }

  close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('neumo-toast-close'));
  }

  render() {
    const classes = {
      'toast': true,
      'open': this.open,
      [this.type]: true
    };

    return html`
      <div 
        class=${classMap(classes)}
        @click=${this.close}
      >
        ${this.getIcon()}
        <span class="message">${this.message}</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'neumo-toast': NeumoToast;
  }
}