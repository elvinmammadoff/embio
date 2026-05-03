================================================================
  EMBio — Frontend Developer Portfolio HTML Template
  Version: 1.1.0 (SCSS Edition)
  Author:  Elvin Mammadov
  Email:   elvinmammadoff@gmail.com
================================================================

Thank you for using EMBio Portfolio Template!

🆕 NEW IN v1.1.0:
  - Complete SCSS architecture for all 3 versions
  - Modular, maintainable stylesheet structure
  - NPM scripts for easy compilation
  - Improved preview page with navigation menu
  - Smooth scroll functionality
  - Enhanced documentation

----------------------------------------------------------------
PACKAGE CONTENTS
----------------------------------------------------------------

  embio/
  ├── preview.html            Live preview with navigation menu
  ├── index.html              Version 1 — Dark Industrial (default)
  ├── v2.html                 Version 2 — Cream Minimal (Cobalt)
  ├── v3.html                 Version 3 — Neon Cyberpunk (Magenta)
  ├── scss-test.html          SCSS compilation guide
  ├── README.md               GitHub README (detailed)
  ├── README.txt              This file
  ├── SCSS_GUIDE.md           SCSS usage guide (Azerbaijani)
  ├── CHANGELOG.md            Version history
  ├── package.json            NPM configuration
  ├── .gitignore              Git ignore rules
  ├── documentation/          Full documentation (open index.html)
  └── assets/
      ├── css/
      │   ├── variables.css   Design tokens & CSS custom properties
      │   ├── base.css        Reset, typography, global elements
      │   ├── nav.css         Navigation bar styles
      │   ├── sections.css    All section styles + utility classes
      │   ├── responsive.css  Mobile breakpoints
      │   ├── style-v2.css    Version 2 specific overrides
      │   ├── style-v3.css    Version 3 specific overrides
      │   ├── style.min.css   Shared CSS — combined & minified
      │   ├── style-v2.min.css  V2 CSS minified
      │   └── style-v3.min.css  V3 CSS minified
      ├── scss/               🆕 SCSS source files
      │   ├── _variables.scss   Global variables (colors, fonts)
      │   ├── _mixins.scss      Reusable mixins & functions
      │   ├── README.md         SCSS structure documentation
      │   ├── v1/              Version 1 SCSS files
      │   │   ├── style.scss
      │   │   ├── _base.scss
      │   │   ├── _nav.scss
      │   │   ├── sections/
      │   │   └── components/
      │   ├── v2/              Version 2 SCSS files
      │   │   ├── style-v2.scss
      │   │   ├── _variables-v2.scss
      │   │   ├── sections/
      │   │   └── ...
      │   └── v3/              Version 3 SCSS files
      │       ├── style-v3.scss
      │       ├── _variables-v3.scss
      │       ├── sections/
      │       ├── components/
      │       └── ...
      ├── js/
      │   ├── theme-init.js   Flash-prevention theme loader (head)
      │   ├── main.js         Entry point (ES module)
      │   ├── cursor.js       Custom cursor animation
      │   ├── scroll.js       Scroll reveal + smooth scroll
      │   ├── nav.js          Navigation mobile toggle & scroll
      │   ├── theme.js        Light/dark mode toggle
      │   ├── hero.js         Text rotate + floating parallax
      │   ├── form.js         Contact form handler
      │   └── main.min.js     All JS combined & minified
      └── ElvinMammadov_CV.pdf  Sample CV (replace with your own)

----------------------------------------------------------------
3 VERSIONS — HOW THEY WORK
----------------------------------------------------------------

All 3 HTML files share the same assets/ folder and JS modules.
The version is identified by the data-version attribute on <html>:

  index.html  → <html data-version="1">  loads: style.min.css
  v2.html     → <html data-version="2">  loads: style.min.css + style-v2.css
  v3.html     → <html data-version="3">  loads: style.min.css + style-v3.css

To switch version: just open the corresponding HTML file.
The preview.html page lets you switch between all 3 with tabs.

----------------------------------------------------------------
QUICK START
----------------------------------------------------------------

IMPORTANT: ES Modules require a local server (not file://).

  Option A — VS Code Live Server extension → click "Go Live"
  Option B — Terminal: npx serve .
  Option C — Python:  python3 -m http.server 3000

Open: http://localhost:3000/preview.html

Keyboard shortcuts in preview.html:
  Press 1 → Version 1 (Dark Industrial)
  Press 2 → Version 2 (Cream Minimal)
  Press 3 → Version 3 (Neon Cyberpunk)

----------------------------------------------------------------
🆕 USING SCSS (OPTIONAL)
----------------------------------------------------------------

SCSS is completely OPTIONAL. You can use the template with just CSS.

If you want to use SCSS for easier customization:

1. Install Node.js from https://nodejs.org

2. Install dependencies:
   cd embio
   npm install

3. Compile SCSS to CSS:
   npm run compile:all      # All versions
   npm run compile:v1       # Version 1 only
   npm run compile:v2       # Version 2 only
   npm run compile:v3       # Version 3 only

4. Development mode (auto-compile on save):
   npm run dev:v1
   npm run dev:v2
   npm run dev:v3

5. Edit SCSS files in assets/scss/ folder

For detailed SCSS guide, see:
  - SCSS_GUIDE.md (Azerbaijani)
  - assets/scss/README.md (English)

----------------------------------------------------------------
BROWSER SUPPORT
----------------------------------------------------------------

  ✔ Chrome 90+    ✔ Firefox 88+
  ✔ Safari 14+    ✔ Edge 90+
  ✗ IE 11 (ES Modules not supported)

----------------------------------------------------------------
CREDITS
----------------------------------------------------------------

  Fonts:  Google Fonts (Bebas Neue, DM Sans, Space Mono)
  Images: Unsplash (demo only — replace with your own)
  Icons:  Inline SVG (no icon library required)

----------------------------------------------------------------
CHANGELOG
----------------------------------------------------------------

  v1.0.0 — 2026-04-21 — Initial release

----------------------------------------------------------------
SUPPORT
----------------------------------------------------------------

  ThemeForest comments section or: elvinmammadoff@gmail.com
  Response time: within 24 hours on business days.

================================================================
