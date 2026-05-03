/* ============================================================
   hero.js — TextRotate + Floating Parallax
   Replicates the fancy/21st.dev LandingHero component in
   pure vanilla JS — no frameworks, no dependencies.
   ============================================================ */

export function initHero() {
  initTextRotate();
  initFloating();
}

/* ─────────────────────────────────────────────────────────
   TEXT ROTATE
   Cycles through words with per-character spring animation.
───────────────────────────────────────────────────────── */
function initTextRotate() {
  const el = document.getElementById('text-rotate-el');
  if (!el) return;

  const words = [
    'beautiful',
    'fast',
    'accessible',
    'creative',
    'memorable',
    'unique',
    'responsive',
    'polished',
    'powerful',
    'pixel-perfect',
  ];

  let current = 0;
  let animating = false;

  // Render initial word immediately
  renderWord(words[0], 'in');

  // Start cycling
  setInterval(() => {
    if (animating) return;
    const next = (current + 1) % words.length;
    exitWord(() => {
      current = next;
      renderWord(words[current], 'in');
    });
  }, 2800);

  function renderWord(word, direction) {
    animating = true;
    el.innerHTML = '';

    const chars = [...word]; // unicode-safe split
    const totalChars = chars.length;

    chars.forEach((char, i) => {
      const span = document.createElement('span');
      span.className = 'tr-char';
      span.textContent = char === ' ' ? '\u00A0' : char;

      // Stagger from last (like the original staggerFrom="last")
      const delay = (totalChars - 1 - i) * 30;

      // Start position: below + invisible
      span.style.cssText = `
        display: inline-block;
        transform: translateY(100%);
        opacity: 0;
        transition:
          transform ${380 + delay}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms,
          opacity   ${280}ms ease ${delay}ms;
      `;

      el.appendChild(span);

      // Trigger animation next frame
      requestAnimationFrame(() => requestAnimationFrame(() => {
        span.style.transform = 'translateY(0)';
        span.style.opacity   = '1';
      }));
    });

    // Mark done after last char finishes
    const lastDelay = (totalChars - 1) * 30 + 400;
    setTimeout(() => { animating = false; }, lastDelay);
  }

  function exitWord(callback) {
    animating = true;
    const chars = el.querySelectorAll('.tr-char');
    const total = chars.length;

    chars.forEach((span, i) => {
      const delay = i * 25; // exit from first
      span.style.transition = `
        transform ${300}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
        opacity   ${200}ms ease ${delay}ms
      `;
      span.style.transform = 'translateY(-120%)';
      span.style.opacity   = '0';
    });

    const exitDuration = total * 25 + 320;
    setTimeout(callback, exitDuration);
  }
}

/* ─────────────────────────────────────────────────────────
   FLOATING PARALLAX
   Each .fl-img element has data-depth.
   On mousemove, elements shift proportionally to depth.
   Uses lerp (linear interpolation) for smooth easing.
───────────────────────────────────────────────────────── */
function initFloating() {
  const hero = document.getElementById('hero');
  const imgs = document.querySelectorAll('.fl-img');
  if (!hero || !imgs.length) return;

  // Current interpolated positions
  const positions = Array.from(imgs).map(() => ({ x: 0, y: 0 }));
  // Target positions from mouse
  let targetX = 0;
  let targetY = 0;
  // Hero center for relative mouse calc
  let heroRect = hero.getBoundingClientRect();

  // Re-measure on resize
  window.addEventListener('resize', () => {
    heroRect = hero.getBoundingClientRect();
  }, { passive: true });

  hero.addEventListener('mousemove', (e) => {
    // Mouse relative to hero centre, normalised -1 → 1
    targetX = (e.clientX - heroRect.left - heroRect.width  / 2) / (heroRect.width  / 2);
    targetY = (e.clientY - heroRect.top  - heroRect.height / 2) / (heroRect.height / 2);
  }, { passive: true });

  hero.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
  });

  // Touch support
  hero.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    targetX = (t.clientX - heroRect.left - heroRect.width  / 2) / (heroRect.width  / 2);
    targetY = (t.clientY - heroRect.top  - heroRect.height / 2) / (heroRect.height / 2);
  }, { passive: true });

  const SENSITIVITY = 40; // max pixel shift at depth 1
  const EASE        = 0.06;

  function lerp(a, b, t) { return a + (b - a) * t; }

  function animate() {
    imgs.forEach((img, i) => {
      const depth = parseFloat(img.dataset.depth || '1');
      const maxShift = SENSITIVITY * depth * -0.5; // negative = moves opposite mouse

      const tx = targetX * maxShift;
      const ty = targetY * maxShift;

      positions[i].x = lerp(positions[i].x, tx, EASE);
      positions[i].y = lerp(positions[i].y, ty, EASE);

      img.style.transform = `translate3d(${positions[i].x}px, ${positions[i].y}px, 0)`;
    });

    requestAnimationFrame(animate);
  }

  // Fade in images staggered on load via CSS class
  imgs.forEach((img, i) => {
    img.style.setProperty('--fl-delay', `${0.4 + i * 0.15}s`);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      img.classList.add('fl-visible');
    }));
  });

  animate();
}
