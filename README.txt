========================================================
EMBio — Portfolio & Personal Branding HTML Template
Version: 3.1.3
Author: Elvin Mammadov
========================================================

Thank you for purchasing EMBio!

--------------------------------------------------------
QUICK START
--------------------------------------------------------

1. Open index.html (V1 Dark Industrial) in your browser
2. Open v2.html (V2 Cream Minimal) in your browser
3. Open v3.html (V3 Neon Cyberpunk) in your browser
4. Open preview.html to see all versions side by side

For production deployment, use assets/css/style.min.css
and assets/js/main.min.js (both already linked by default).

--------------------------------------------------------
FILE STRUCTURE
--------------------------------------------------------

EMBio/
├── index.html              — Version 1: Dark Industrial
├── v2.html                 — Version 2: Cream Minimal
├── v3.html                 — Version 3: Neon Cyberpunk
├── preview.html            — Version selector / demo page
├── README.txt              — This file
├── changelog.txt           — Version history
├── documentation/
│   └── index.html          — Full documentation (open in browser)
└── assets/
    ├── css/
    │   ├── variables.css   — Design tokens (colors, fonts)
    │   ├── base.css        — Reset and base styles
    │   ├── nav.css         — Navigation styles
    │   ├── sections.css    — All section styles
    │   ├── responsive.css  — Mobile breakpoints
    │   └── style.min.css   — Production minified bundle
    ├── js/
    │   ├── main.js         — Main entry point
    │   ├── theme.js        — Light/dark mode
    │   ├── theme-init.js   — Flash-free theme init
    │   ├── hero.js         — Text rotate + parallax
    │   ├── cursor.js       — Custom cursor
    │   ├── nav.js          — Navigation behavior
    │   ├── scroll.js       — Scroll reveal
    │   ├── form.js         — Contact form UI
    │   └── main.min.js     — Production minified bundle
    ├── scss/               — SCSS source files
    │   ├── style.scss      — Main entry point
    │   ├── _variables.scss — All version design tokens
    │   ├── _overrides.scss — V2 and V3 version overrides
    │   └── ...
    └── ElvinMammadov_CV.pdf — Sample CV (replace with your own)

--------------------------------------------------------
CUSTOMIZATION
--------------------------------------------------------

COLORS:
Edit assets/css/variables.css
- Default (dark):    --accent: #c8ff00
- Light mode:        --accent: #c8ff00  (same)
- Version 2:         --accent: #1a56db
- Version 3:         --accent: #ff00cc

PERSONAL INFO:
Search and replace in HTML files:
- "Elvin Mammadov"     → Your name
- "elvinmammadoff@gmail.com" → Your email
- "Baku, Azerbaijan"   → Your location
- social media links   → Your profiles

CV FILE:
Replace assets/ElvinMammadov_CV.pdf with your own CV.
Update the href in HTML: href="assets/YourName_CV.pdf"

IMAGES:
Replace Unsplash image URLs in HTML with your own images.
Recommended sizes:
- About/Avatar: 600×600px
- Projects: 800×500px
- Blog: 600×400px
- Hero floating: 400-500px wide

SCSS (optional):
If you prefer editing SCSS:
  npm install
  npm run compile    (compile once)
  npm run watch      (watch mode)

--------------------------------------------------------
DARK / LIGHT MODE
--------------------------------------------------------

Auto-switches based on local time:
  07:00 - 18:00  →  Light mode
  18:00 - 07:00  →  Dark mode

Manual toggle overrides auto mode and saves to localStorage.

--------------------------------------------------------
SUPPORT
--------------------------------------------------------

Full documentation: documentation/index.html
GitHub: https://github.com/elvinmammadoff/embio

========================================================


---------- COMPONENTS
------------------------------------------------------------

components.html — Full UI component library with V1/V2/V3 version switcher:
  01 Buttons & Actions
  02 Badges & Tags
  03 Content Cards
  04 Stat Blocks
  05 Form Elements
  06 Alert Messages
  07 Progress Bars
  08 Pricing Blocks
  09 Timeline
  10 Testimonial Block
  11 Service Cards (8-card 4x2 grid)
  12 Client Logo Grid (10-logo 5x2 divider layout)

Click V1 / V2 / V3 tabs at the top to preview
all components in each version's accent color.

---------- CONTACT FORM / EMAIL SETUP
------------------------------------------------------------

The contact form uses Web3Forms to send emails to your inbox.
No server or backend required. Free up to 250 submissions/month.

SETUP (2 steps):
  1. Go to https://web3forms.com
     Enter your email → click "Create Access Key" → copy the key

  2. Open assets/js/form.js
     Replace: const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY';
     With:    const WEB3FORMS_KEY = 'your-actual-key-here';

Form fields: name, email, subject, message
Reply-to is set automatically so you can reply directly to the sender.

