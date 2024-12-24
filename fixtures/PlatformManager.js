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

    setTheme(theme) {
      document.body.setAttribute('theme', theme);
    }

    toggleTheme() {
      const currentTheme = document.body.getAttribute('theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      this.setTheme(newTheme);
    }

    setPlatform(platform) {
      this.switchPlatform(platform);
      this.updateAriaStates(`${platform}-switch`);
    }

    getPlatform() {
      return document.body.className.replace('-platform', '');
    }

    getTheme() {
      return document.body.getAttribute('theme');
    }
  }