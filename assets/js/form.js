/* ============================================================
   form.js — Contact form with Web3Forms email delivery
   SETUP: Replace YOUR_ACCESS_KEY with your key from
   https://web3forms.com (free, no server needed)
   ============================================================ */

export function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const WEB3FORMS_KEY = '261213ff-fb97-476c-a48c-34076ee66e3f';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const fb  = document.getElementById('form-feedback');
    if (!btn || !fb) return;

    const name    = form.querySelector('#f-name')?.value.trim()    || '';
    const email   = form.querySelector('#f-email')?.value.trim()   || '';
    const subject = form.querySelector('#f-subject')?.value.trim() || '(no subject)';
    const message = form.querySelector('#f-message')?.value.trim() || '';

    btn.classList.add('loading');
    btn.disabled = true;
    fb.textContent = '';
    fb.className = 'form-feedback';

    if (WEB3FORMS_KEY === 'YOUR_ACCESS_KEY') {
      await new Promise(r => setTimeout(r, 600));
      btn.classList.remove('loading');
      btn.disabled = false;
      fb.textContent = 'Set your Web3Forms key in assets/js/form.js to enable email.';
      fb.className = 'form-feedback warning';
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name, email, message,
          subject: '[EMBio Contact] ' + subject,
          from_name: name,
          replyto: email,
        }),
      });
      const data = await res.json();
      btn.classList.remove('loading');
      btn.disabled = false;
      if (data.success) {
        fb.textContent = "Message sent! I'll get back to you within 24 hours.";
        fb.className = 'form-feedback success';
        form.reset();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      btn.classList.remove('loading');
      btn.disabled = false;
      fb.textContent = 'Something went wrong. Please try again or email directly.';
      fb.className = 'form-feedback error';
      console.error('[Form]', err);
    }

    setTimeout(() => { fb.textContent = ''; fb.className = 'form-feedback'; }, 6000);
  });
}
