import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('neumo-button')
export class NeumoButton extends LitElement {
  // Core properties aligned with PPI principles
  @property({ type: String }) label: string = 'Click Me';
  @property({ type: Boolean }) disabled: boolean = false;
  @property({ type: String }) variant: 'flat' | 'concave' | 'convex' = 'flat';
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: String }) platform: 'web' | 'ios' | 'android' = 'web';
  
  // Theme properties
  @property({ type: String }) bgColor: string = '#e0e0e0';
  @property({ type: String }) textColor: string = '#333';
  @property({ type: String }) shadowLight: string = '#ffffff';
  @property({ type: String }) shadowDark: string = '#cccccc';

  // Platform-specific properties
  @property({ type: Boolean }) useHaptics: boolean = false;
  @property({ type: Boolean }) useRipple: boolean = false;

  static styles = css`
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
  `;

  render() {
    return html`
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
    `;
  }

  private _getButtonClasses() {
    return `neumo-button ${this.variant} ${this.platform} ${this.size}`;
  }

  private _getButtonStyles() {
    return `
      --button-bg: ${this.bgColor};
      --button-text: ${this.textColor};
      --button-shadow-light: ${this.shadowLight};
      --button-shadow-dark: ${this.shadowDark};
    `;
  }

  private _handleClick(e: MouseEvent) {
    if (this.disabled) return;
    
    if (this.platform === 'android' && this.useRipple) {
      this._createRipple(e);
    }

    this.dispatchEvent(new CustomEvent('neumo-click', {
      detail: { 
        platform: this.platform,
        variant: this.variant,
        timestamp: Date.now()
      },
      bubbles: true,
      composed: true
    }));
  }

  private _handleTouchStart() {
    if (this.disabled) return;
    
    if (this.platform === 'ios' && this.useHaptics) {
      // Trigger haptic feedback if available
      if ('vibrate' in navigator) {
        navigator.vibrate(10);
      }
    }
  }

  private _handleTouchEnd() {
    // Handle touch end events if needed
  }

  private _createRipple(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'neumo-button': NeumoButton;
  }
}