// Switch theme
themeManager.setTheme('dark');

// Switch platform
themeManager.setPlatform('ios');

// Listen for changes
window.addEventListener('theme-changed', (e) => {
  console.log('Theme changed:', e.detail.theme);
});

window.addEventListener('platform-changed', (e) => {
  console.log('Platform changed:', e.detail.platform);
});