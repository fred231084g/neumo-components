// Constants for better maintainability
const PLATFORMS = {
  IOS: 'ios',
  ANDROID: 'android',
  WEB: 'web'
};

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

const EVENTS = {
  PLATFORM_CHANGED: 'platform-changed',
  THEME_CHANGED: 'theme-changed'
};

/**
 * Enhanced Platform Manager for handling platform-specific behaviors and themes
 */
export class PlatformManager {
  constructor() {
    this.platformButtons = {
      'ios-switch': PLATFORMS.IOS,
      'android-switch': PLATFORMS.ANDROID,
      'web-switch': PLATFORMS.WEB
    };
    
    this._currentTheme = THEMES.LIGHT;
    this._currentPlatform = PLATFORMS.WEB;
    this._observers = new Set();
    
    this.init();
  }

  /**
   * Initialize the platform manager
   */
  init() {
    try {
      this.setupPlatformSwitching();
      this.setupEventHandling();
      this.setupPreferenceObservers();
      this.setInitialPlatform();
    } catch (error) {
      console.error('Failed to initialize PlatformManager:', error);
    }
  }

  /**
   * Set up platform switching event listeners
   */
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

  /**
   * Set up event handlers for components
   */
  setupEventHandling() {
    // Component event delegation
    document.addEventListener('neumo-click', this.handleComponentClick.bind(this));
    document.addEventListener('neumo-card-click', this.handleComponentClick.bind(this));
  }

  /**
   * Handle component click events
   * @param {CustomEvent} event 
   */
  handleComponentClick(event) {
    const { platform, variant, timestamp } = event.detail;
    console.log(`${event.type}:`, {
      platform,
      variant,
      timestamp,
      element: event.target.tagName.toLowerCase()
    });
  }

  /**
   * Set up preference observers for motion and contrast
   */
  setupPreferenceObservers() {
    // Motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionQuery.addEventListener('change', this.handleMotionPreference.bind(this));
    this.handleMotionPreference(motionQuery);

    // Contrast preference
    const contrastQuery = window.matchMedia('(prefers-contrast: more)');
    contrastQuery.addEventListener('change', this.handleContrastPreference.bind(this));
    this.handleContrastPreference(contrastQuery);
  }

  /**
   * Handle motion preference changes
   * @param {MediaQueryListEvent} event 
   */
  handleMotionPreference(event) {
    document.documentElement.style.setProperty(
      '--transition-duration',
      event.matches ? '0.01ms' : '0.2s'
    );
  }

  /**
   * Handle contrast preference changes
   * @param {MediaQueryListEvent} event 
   */
  handleContrastPreference(event) {
    document.documentElement.classList.toggle('high-contrast', event.matches);
  }

  /**
   * Set initial platform based on user agent
   */
  setInitialPlatform() {
    const platform = this.detectPlatform();
    this.switchPlatform(platform);
    this.updateAriaStates(`${platform}-switch`);
  }

  /**
   * Detect platform from user agent
   * @returns {string}
   */
  detectPlatform() {
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(ua)) return PLATFORMS.IOS;
    if (/Android/.test(ua)) return PLATFORMS.ANDROID;
    return PLATFORMS.WEB;
  }

  /**
   * Switch to a different platform
   * @param {string} platform 
   */
  switchPlatform(platform) {
    if (!Object.values(PLATFORMS).includes(platform)) {
      console.warn(`Invalid platform: ${platform}`);
      return;
    }

    this._currentPlatform = platform;

    // Update components
    document.querySelectorAll('neumo-card, neumo-button').forEach(component => {
      component.setAttribute('platform', platform);
    });

    // Update body class
    document.body.className = `${platform}-platform`;

    // Dispatch event
    this.dispatchCustomEvent(EVENTS.PLATFORM_CHANGED, { platform });
  }

  /**
   * Update ARIA states for platform buttons
   * @param {string} activeButtonId 
   */
  updateAriaStates(activeButtonId) {
    Object.keys(this.platformButtons).forEach(buttonId => {
      const button = document.getElementById(buttonId);
      if (button) {
        button.setAttribute('aria-pressed', buttonId === activeButtonId);
      }
    });
  }

  /**
   * Set theme
   * @param {string} theme 
   */
  setTheme(theme) {
    if (!Object.values(THEMES).includes(theme)) {
      console.warn(`Invalid theme: ${theme}`);
      return;
    }

    this._currentTheme = theme;
    document.body.setAttribute('theme', theme);
    this.dispatchCustomEvent(EVENTS.THEME_CHANGED, { theme });
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme() {
    const newTheme = this._currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    this.setTheme(newTheme);
  }

  /**
   * Set platform with validation
   * @param {string} platform 
   */
  setPlatform(platform) {
    if (!Object.values(PLATFORMS).includes(platform)) {
      console.warn(`Invalid platform: ${platform}`);
      return;
    }

    this.switchPlatform(platform);
    this.updateAriaStates(`${platform}-switch`);
  }

  /**
   * Get current platform
   * @returns {string}
   */
  getPlatform() {
    return this._currentPlatform;
  }

  /**
   * Get current theme
   * @returns {string}
   */
  getTheme() {
    return this._currentTheme;
  }

  /**
   * Dispatch a custom event
   * @param {string} eventName 
   * @param {Object} detail 
   */
  dispatchCustomEvent(eventName, detail) {
    window.dispatchEvent(new CustomEvent(eventName, { detail }));
  }

  /**
   * Cleanup method to remove event listeners
   */
  destroy() {
    document.removeEventListener('neumo-click', this.handleComponentClick);
    document.removeEventListener('neumo-card-click', this.handleComponentClick);
  }
}

// Export constants for external use
export { PLATFORMS, THEMES, EVENTS };