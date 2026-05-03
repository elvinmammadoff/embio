/* ============================================================
   form.js — Contact form submit handler
   ============================================================ */

export function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const fb  = document.getElementById('form-feedback');
    if (!btn || !fb) return;

    btn.classList.add('loading');
    btn.disabled = true;

    setTimeout(() => {
      btn.classList.remove('loading');
      btn.disabled = false;
      fb.textContent = "✓ Message sent! I'll get back to you within 24 hours.";
      fb.className = 'form-feedback success';
      form.reset();
      setTimeout(() => {
        fb.textContent = '';
        fb.className = 'form-feedback';
      }, 5000);
    }, 1500);
  });
}
