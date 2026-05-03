/* theme-init.js — Runs synchronously before page renders to prevent
   flash of wrong theme. Must be loaded as regular <script> (not module)
   in <head> before any CSS. */
(function () {
  var t = localStorage.getItem('em-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
}());
