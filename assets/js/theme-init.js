/* theme-init.js — Runs synchronously before page renders to prevent
   flash of wrong theme. Must be loaded as regular <script> (not module)
   in <head> before any CSS.

   Priority:
     1. localStorage (manual user choice) — persists
     2. Time-based auto: 07:00-18:00 local time → light, else → dark
*/
(function () {
  var saved = localStorage.getItem('em-theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    return;
  }
  try {
    var hour = new Date().getHours();
    var auto = (hour >= 7 && hour < 18) ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', auto);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}());
