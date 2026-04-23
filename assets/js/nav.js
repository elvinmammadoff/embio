/* ============================================================
   nav.js — Navigation: scroll effect, mobile toggle, resize fix
   ============================================================ */

export function initNav() {
  const nav    = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  if (!nav) return;

  /* ── Scrolled glass effect ── */
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ── Mobile burger toggle ── */
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.contains('mobile-open');

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    /* Close when a link is clicked */
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMenu);
    });

    /* ── Resize fix: if window grows to desktop width, reset mobile state ── */
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        closeMenu(true); // silent close — no animation, just reset
      }
    }, { passive: true });
  }

  function openMenu() {
    links.classList.add('mobile-open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // prevent scroll while menu open
  }

  function closeMenu(silent = false) {
    links.classList.remove('mobile-open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}
