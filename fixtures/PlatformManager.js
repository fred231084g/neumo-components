 // Enhanced Platform Management
export class PlatformManager {
    constructor() {
      this.platformButtons = {
        'ios-switch': 'ios',
        'android-switch': 'android',
        'web-switch': 'web'
      };
      
      this.init();
    }

    init() {
      this.setupPlatformSwitching();
      this.setupEventHandling();
      this.setInitialPlatform();
    }

    setupPlatformSwitching() {
      Object.entries(this.platformButtons).forEach(([buttonId, platform]) => {
        const button = document.getElementById(buttonId);
        if (button) {
          button.addEventListener('neumo-click', () => {
            this.switchPlatform(platform);
            this.updateAriaStates(buttonId);
          });
        }
      });
    }

    setupEventHandling() {
      // Button click handling
      document.querySelectorAll('neumo-button').forEach(button => {
        button.addEventListener('neumo-click', event => {
          console.log('Button clicked:', {
            platform: event.detail.platform,
            variant: event.detail.variant,
            timestamp: event.detail.timestamp
          });
        });
      });

      // Card click handling
      document.querySelectorAll('neumo-card[interactive="true"]').forEach(card => {
        card.addEventListener('neumo-card-click', event => {
          console.log('Card clicked:', {
            platform: event.detail.platform,
            variant: event.detail.variant,
            timestamp: event.detail.timestamp
          });
        });
      });
    }

    setInitialPlatform() {
      const platform = this.detectPlatform();
      this.switchPlatform(platform);
      this.updateAriaStates(`${platform}-switch`);
    }

    detectPlatform() {
      const ua = navigator.userAgent;
      if (/iPhone|iPad|iPod/.test(ua)) return 'ios';
      if (/Android/.test(ua)) return 'android';
      return 'web';
    }

    switchPlatform(platform) {
      // Update components
      document.querySelectorAll('neumo-card, neumo-button').forEach(component => {
        component.setAttribute('platform', platform);
      });

      // Update body class
      document.body.className = `${platform}-platform`;

      // Dispatch custom event
      window.dispatchEvent(new CustomEvent('platform-changed', {
        detail: { platform }
      }));
    }

    updateAriaStates(activeButtonId) {
      Object.keys(this.platformButtons).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
          button.setAttribute('aria-pressed', buttonId === activeButtonId);
        }
      });
    }
  }

  // Initialize platform management
  window.addEventListener('DOMContentLoaded', () => {
    new PlatformManager();
  });

  // Handle reduced motion preference
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const handleMotionPreference = e => {
    document.documentElement.style.setProperty(
      '--transition-duration',
      e.matches ? '0.01ms' : '0.2s'
    );
  };
  mediaQuery.addEventListener('change', handleMotionPreference);
  handleMotionPreference(mediaQuery);

  // Handle contrast preference
  const contrastQuery = window.matchMedia('(prefers-contrast: more)');
  const handleContrastPreference = e => {
    document.documentElement.classList.toggle('high-contrast', e.matches);
  };
  contrastQuery.addEventListener('change', handleContrastPreference);
  handleContrastPreference(contrastQuery);