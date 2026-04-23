/* ============================================================
   theme.js — Light / dark mode toggle
   Persists preference in localStorage.
   Applies [data-theme="dark"|"light"] on <html>.
   ============================================================ */

export function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const root   = document.documentElement;

  // 1. Read saved preference, fallback to dark
  const saved = localStorage.getItem('em-theme') || 'dark';
  applyTheme(saved);

  // 2. Sync checkbox state
  if (toggle) {
    toggle.checked = saved === 'light';

    toggle.addEventListener('change', () => {
      const next = toggle.checked ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('em-theme', next);
    });
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (toggle) toggle.checked = theme === 'light';
  }
}
