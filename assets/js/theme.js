/* ============================================================
   theme.js — Light / dark mode toggle
   Priority order:
     1. User's manual choice (localStorage)  — persists forever
     2. Time-based auto: 07:00–18:00 → light, 18:00–07:00 → dark
   Applies [data-theme="dark"|"light"] on <html>.
   ============================================================ */

export function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const root   = document.documentElement;

  // ── Determine initial theme ────────────────────────────────
  const saved    = localStorage.getItem('em-theme');   // null if never set
  const autTheme = getTimeBasedTheme();
  const initial  = saved || autTheme;

  applyTheme(initial);

  // ── Manual toggle ──────────────────────────────────────────
  if (toggle) {
    toggle.checked = initial === 'light';

    toggle.addEventListener('change', () => {
      const next = toggle.checked ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('em-theme', next);   // remember manual choice
    });
  }

  // ── Auto-update every minute (in case user leaves tab open) ─
  setInterval(() => {
    // Only auto-update if user has NOT set a manual preference
    if (!localStorage.getItem('em-theme')) {
      applyTheme(getTimeBasedTheme());
    }
  }, 60 * 1000);

  // ── Helpers ───────────────────────────────────────────────
  function getTimeBasedTheme() {
    const hour = new Date().getHours();   // local time, 0-23
    return (hour >= 7 && hour < 18) ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (toggle) toggle.checked = theme === 'light';
  }
}
