import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('neumo-card')
export class NeumoCard extends LitElement {
  // Core PPI properties
  @property({ type: String }) platform: 'web' | 'ios' | 'android' = 'web';
  @property({ type: String }) variant: 'flat' | 'concave' | 'convex' = 'flat';
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: Boolean }) interactive: boolean = false;
  
  // Theme properties
  @property({ type: String }) bgColor: string = '#f0f0f0';
  @property({ type: String }) shadowLight: string = '#ffffff';
  @property({ type: String }) shadowDark: string = '#d1d1d1';
  
  // Layout properties
  @property({ type: String }) width: string = 'auto';
  @property({ type: String }) height: string = 'auto';
  @property({ type: String }) padding: string = '20px';
  
  // Interactive properties
  @property({ type: Boolean }) rippleEffect: boolean = false;
  @property({ type: Boolean }) hoverEffect: boolean = true;
  @property({ type: Boolean }) pressEffect: boolean = true;

  static styles = css`
    :host {
      --neumo-card-bg: var(--card-bg, #f0f0f0);
      --neumo-card-shadow-light: var(--card-shadow-light, #ffffff);
      --neumo-card-shadow-dark: var(--card-shadow-dark, #d1d1d1);
      --neumo-card-radius: var(--card-radius, 16px);
      --neumo-card-padding: var(--card-padding, 20px);
      --neumo-card-hover-scale: 1.02;
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
  `;

  render() {
    return html`
      <div
        class=${this._getCardClasses()}
        style=${this._getCardStyles()}
        @click=${this._handleClick}
        @touchstart=${this._handleTouchStart}
        @touchend=${this._handleTouchEnd}
      >
        <slot></slot>
      </div>
    `;
  }

  private _getCardClasses() {
    return `neumo-card ${this.variant} ${this.platform} ${this.size} ${
      this.interactive ? 'interactive' : ''
    }`;
  }

  private _getCardStyles() {
    return `
      --card-bg: ${this.bgColor};
      --card-shadow-light: ${this.shadowLight};
      --card-shadow-dark: ${this.shadowDark};
      --card-width: ${this.width};
      --card-height: ${this.height};
      --card-padding: ${this.padding};
    `;
  }

  private _handleClick(e: MouseEvent) {
    if (!this.interactive) return;
    
    if (this.platform === 'android' && this.rippleEffect) {
      this._createRipple(e);
    }

    this.dispatchEvent(new CustomEvent('neumo-card-click', {
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
    if (!this.interactive) return;
    
    if (this.platform === 'ios') {
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
    const card = event.currentTarget as HTMLElement;
    const ripple = document.createElement('span');
    const rect = card.getBoundingClientRect();
    
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    
    card.appendChild(ripple);
    
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'neumo-card': NeumoCard;
  }
}