import { PlatformManager, THEMES, PLATFORMS } from './PlatformManager.js';

// Store manager instance
let platformManager;

/**
 * Initialize the application
 */
function initializeApp() {
  try {
    platformManager = new PlatformManager();
    
    // Apply initial settings
    platformManager.setTheme(getPreferredTheme());
    platformManager.setPlatform(getPreferredPlatform());
    
    // Set up event listeners
    setupEventListeners();
    
  } catch (error) {
    console.error('Failed to initialize app:', error);
  }
}

/**
 * Get preferred theme from system or stored preference
 * @returns {string}
 */
function getPreferredTheme() {
  // Check system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return THEMES.DARK;
  }
  
  // Check stored preference
  const storedTheme = localStorage.getItem('preferred-theme');
  if (storedTheme && Object.values(THEMES).includes(storedTheme)) {
    return storedTheme;
  }
  
  return THEMES.LIGHT;
}

/**
 * Get preferred platform from stored preference or detect
 * @returns {string}
 */
function getPreferredPlatform() {
  const storedPlatform = localStorage.getItem('preferred-platform');
  if (storedPlatform && Object.values(PLATFORMS).includes(storedPlatform)) {
    return storedPlatform;
  }
  
  return platformManager.detectPlatform();
}

/**
 * Set up event listeners for theme and platform changes
 */
function setupEventListeners() {
  // Theme change listener
  window.addEventListener('theme-changed', (e) => {
    console.log('Theme changed:', e.detail.theme);
    localStorage.setItem('preferred-theme', e.detail.theme);
    updateMetaThemeColor(e.detail.theme);
  });

  // Platform change listener
  window.addEventListener('platform-changed', (e) => {
    console.log('Platform changed:', e.detail.platform);
    localStorage.setItem('preferred-platform', e.detail.platform);
  });

  // System preference listeners
  setupSystemPreferenceListeners();
}

/**
 * Set up listeners for system preference changes
 */
function setupSystemPreferenceListeners() {
  // Color scheme preference
  const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  colorSchemeQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('preferred-theme')) {
      platformManager.setTheme(e.matches ? THEMES.DARK : THEMES.LIGHT);
    }
  });

  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    const platform = getPreferredPlatform();
    platformManager.setPlatform(platform);
  });
}

/**
 * Update meta theme color based on current theme
 * @param {string} theme 
 */
function updateMetaThemeColor(theme) {
  const color = theme === THEMES.DARK ? '#1a1a1a' : '#f0f0f0';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Cleanup on page unload
window.addEventListener('unload', () => {
  platformManager?.destroy();
});