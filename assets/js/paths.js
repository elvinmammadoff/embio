/* ============================================================
   paths.js — Background Paths animation initialiser
   Sets pathLength="1" on every .bp element so that
   stroke-dasharray:1 / stroke-dashoffset animation works
   as a normalised 0→1 path draw (matching the React original).
   ============================================================ */

export function initPaths() {
  const paths = document.querySelectorAll('.bp');
  if (!paths.length) return;

  paths.forEach((path, i) => {
    // pathLength="1" lets us use dasharray/offset in 0–1 range
    path.setAttribute('pathLength', '1');

    // Each path gets its own phase so they don't all pulse together
    const dur    = 20 + (i % 18) * 0.9;          // 20s – 36.2s
    const delay  = -(i % 18) * 0.65;              // stagger, negative = pre-start
    const baseOp = 0.04 + (i % 18) * 0.016;      // 0.04 – 0.33

    path.style.setProperty('--dur',  dur  + 's');
    path.style.setProperty('--delay', delay + 's');
    path.style.setProperty('--base-op', baseOp.toFixed(3));
  });
}
