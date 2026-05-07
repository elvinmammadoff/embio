/* ============================================================
   main.js — Application entry point
   Imports and initialises all modules on DOMContentLoaded
   ============================================================ */

import { initCursor }                         from './cursor.js';
import { initScrollReveal, initSmoothScroll } from './scroll.js';
import { initNav, initActiveNav }             from './nav.js';
import { initTheme }                          from './theme.js';
import { initHero }                           from './hero.js';
import { initForm }                           from './form.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHero();
  initCursor();
  initScrollReveal();
  initSmoothScroll();
  initNav();
  initActiveNav();
  initForm();
});
