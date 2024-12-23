import { PlatformManager } from './PlatformManager.js';

// Initialize platform management
let platformManager;

window.addEventListener('DOMContentLoaded', () => {
  platformManager = new PlatformManager();
  
  // Move these calls inside the DOMContentLoaded event
  // Switch theme
  platformManager.setTheme('dark');

  // Switch platform
  platformManager.setPlatform('ios');
  // Remove this line as themeManager is not defined
  // themeManager.setPlatform('ios');
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

// Listen for changes
window.addEventListener('theme-changed', (e) => {
  console.log('Theme changed:', e.detail.theme);
});

window.addEventListener('platform-changed', (e) => {
  console.log('Platform changed:', e.detail.platform);
});