# EMBio SCSS Architecture

All 3 versions compile from **one entry point**: `assets/scss/style.scss`

## File Structure

```
assets/scss/
├── style.scss           ← 🎯 Entry point (compiles all versions)
├── _variables.scss      ← All version tokens (V1 + V2 + V3)
├── _mixins.scss         ← Shared mixins
├── _base.scss
├── _nav.scss
├── _responsive.scss
├── _overrides.scss      ← All version overrides in one file (V2, V3, …)
├── sections/
│   ├── _hero.scss
│   ├── _about.scss
│   ├── _portfolio.scss
│   ├── _contact.scss
│   └── _footer.scss
└── components/
    ├── _cursor.scss
    ├── _floating-images.scss
    └── _text-rotate.scss
```

## How Versions Work

Each HTML file declares its version on the `<html>` tag:
```html
<html data-version="1">  <!-- V1 Dark Industrial  -->
<html data-version="2">  <!-- V2 Cream Minimal    -->
<html data-version="3">  <!-- V3 Neon Cyberpunk   -->
```

Version-specific styles live in `_overrides.scss`, grouped by version:
```scss
// VERSION 2 — Cream Minimal
[data-version="2"] { --accent: #{$accent-v2}; }
[data-version="2"] .hero-headline { text-align: center; }

// VERSION 3 — Neon Cyberpunk
[data-version="3"] { --accent: #{$accent-v3}; }
[data-version="3"] .section-title { text-shadow: …; }
```

## Compile

```bash
npm install          # Install sass
npm run compile      # Compile → assets/css/style.min.css
npm run watch        # Watch mode
npm run dev          # Alias for watch
```

## Variable Naming

```scss
$accent:      #c8ff00;  // V1 — no suffix
$accent-v2:   #1a56db;  // V2 — -v2 suffix
$accent-v3:   #ff00cc;  // V3 — -v3 suffix
$bg-dark-v2:  #0d0d0f;  // V2 dark mode variant
```

## Adding a New Version

1. Add tokens to `_variables.scss` with `-v4` suffix
2. Add a new section in `_overrides.scss` with `[data-version="4"]` selectors
3. No import change needed — `style.scss` already imports `overrides`
4. Add `data-version="4"` to your new HTML file
