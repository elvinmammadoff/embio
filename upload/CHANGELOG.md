# CHANGELOG - EMBio Portfolio Template

## Version 1.1.0 - April 29, 2026

### 🎨 Preview Page Updates

#### Removed/Hidden Elements:
- ❌ `.demo-area` section - iframe demo bölməsi gizlədildi
- ❌ `.ph-tabs` - versiya seçmə tabları gizlədildi
- ❌ `onclick` event-ləri silindi - JavaScript inline kodlar təmizləndi

#### Added Features:
- ✅ **Navigation Menu** - Header-ə one-page scroll menyu əlavə edildi:
  - Home
  - Versions
  - Features
  - Tech Stack
  
- ✅ **Section Background Effects** - Bütün section başlıqlarına dekorativ arxa fon effektləri əlavə edildi
  - `data-text` atributu ilə böyük arxa fon mətnləri
  - CSS `::before` pseudo-element ilə görünüş
  - Opacity 0.03 ilə incə effekt

- ✅ **Direct Links** - Version kartlarındakı `.vc-btn` elementləri artıq birbaşa linklərdir:
  - `<a href="index.html">` - Version 1
  - `<a href="v2.html">` - Version 2
  - `<a href="v3.html">` - Version 3

#### Modified Sections:
- 🔄 Header strukturu yenidən təşkil edildi
- 🔄 Section ID-ləri əlavə edildi scroll üçün:
  - `#home` - Splash section
  - `#versions` - Versions section
  - `#features` - Features section
  - `#tech` - Tech Stack section

### 📦 SCSS Architecture

#### Qlobal Fayllar:
```
assets/scss/
├── _variables.scss    # Ümumi dəyişənlər (rənglər, fontlar)
├── _mixins.scss      # Təkrar istifadə olunan mixins
```

#### Version 1 - Dark Industrial:
```
v1/
├── style.scss              # Əsas giriş nöqtəsi
├── _base.scss             # Reset və base stillər
├── _nav.scss              # Naviqasiya
├── _responsive.scss       # Media queries
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

#### Version 2 - Cream Minimal:
```
v2/
├── style-v2.scss
├── _variables-v2.scss     # V2 xüsusi rənglər
├── _base-v2.scss
├── _nav-v2.scss
├── _responsive-v2.scss
└── sections/
    └── (5 section faylı)
```

#### Version 3 - Neon Cyberpunk:
```
v3/
├── style-v3.scss
├── _variables-v3.scss     # V3 xüsusi rənglər
├── _base-v3.scss
├── _nav-v3.scss
├── _responsive-v3.scss
├── sections/
│   └── (5 section faylı)
└── components/
    ├── _scanlines-v3.scss
    └── _neon-glow-v3.scss
```

### 🛠️ Development Tools

#### package.json scripts:
```bash
npm run compile:v1      # V1 SCSS → CSS
npm run compile:v2      # V2 SCSS → CSS
npm run compile:v3      # V3 SCSS → CSS
npm run compile:all     # Hamısını compile et

npm run watch:v1        # V1 watch mode
npm run watch:v2        # V2 watch mode
npm run watch:v3        # V3 watch mode

npm run dev:v1          # V1 development
npm run dev:v2          # V2 development
npm run dev:v3          # V3 development
```

### 📝 Documentation

Yeni sənədlər əlavə edildi:
- ✅ `assets/scss/README.md` - SCSS struktur təsviri (İngilis)
- ✅ `SCSS_GUIDE.md` - Ətraflı istifadə təlimatı (Azərbaycan)
- ✅ `.gitignore` - Git üçün ignore qaydaları
- ✅ `package.json` - NPM konfiqurasiyası

### 🎯 SCSS Features

#### Mixins:
- `@include mobile` - 600px-dən kiçik
- `@include tablet` - 900px-dən kiçik
- `@include desktop` - 901px-dən böyük
- `@include flex-center` - Flexbox mərkəzləşdirmə
- `@include absolute-fill` - Tam dolduran absolut
- `@include transition()` - Smooth keçidlər
- `@include hover-lift()` - Hover effekti
- `@include section-spacing` - Bölmə padding-i

#### Variables (V1):
- Colors: `$bg`, `$text`, `$accent`, `$muted`
- Fonts: `$font-display`, `$font-body`, `$font-mono`
- Spacing: `$nav-h`
- Easing: `$ease-spring`, `$ease-out`

#### Variables (V2 - Cream):
- `$accent-v2: #1a56db` (Cobalt Blue)
- `$bg-v2: #1a1d2e` (Dark Navy)
- Grid texture overlay

#### Variables (V3 - Neon):
- `$accent-v3: #ff00cc` (Magenta)
- `$accent-2-v3: #00e5ff` (Cyan)
- Scanline animation effect
- Neon glow shadows

### 🔧 Technical Improvements

1. **Modular Structure** - Hər komponent ayrı faylda
2. **Color System** - Dəyişənlərlə asanlıqla dəyişdirmə
3. **Responsive Mixins** - Təkrar kod azalması
4. **Light/Dark Support** - Hər versiyada işıq/qaranlıq rejim
5. **Nesting** - Daha oxunaqlı kod
6. **Auto-compilation** - Watch mode ilə avtomatik yeniləmə

### 📊 File Statistics

- **Total SCSS Files:** 40+
- **Versions:** 3 (V1, V2, V3)
- **Components:** 10+
- **Sections:** 5 per version
- **Mixins:** 8
- **Variables:** 50+

### 🚀 Usage

#### İlk istifadə:
```bash
cd embio
npm install
npm run compile:all
```

#### Development:
```bash
npm run dev:v1
# SCSS fayllarını dəyişdirin və avtomatik yenilənsin
```

#### Production:
```bash
npm run compile:all
# Minified CSS faylları yaradılır
```

### 🎨 Customization Examples

#### Rəng dəyişdirmək:
```scss
// assets/scss/_variables.scss
$accent: #00ff00;  // Yaşıl accent
```

#### Yeni komponent:
```scss
// v1/components/_new-component.scss
@import '../../variables';

.my-component {
  background: $bg-2;
  
  @include mobile {
    padding: 1rem;
  }
}
```

### 📋 Migration Guide

Əgər mövcud layihəniz varsa:

1. CSS fayllarını SCSS-ə konvertasiya etmək lazım deyil
2. Yeni SCSS strukturundan istifadə edə bilərsiniz
3. Köhnə CSS faylları `assets/css/` qovluğunda qalır
4. Compiled fayllar `-compiled.css` suffix alır

### ⚠️ Breaking Changes

Yoxdur - köhnə fayllar işləməyə davam edir.

### 🐛 Bug Fixes

- Preview page layout təkmilləşdirildi
- Navigation smooth scroll əlavə edildi
- Section IDs düzgün təyin edildi

### 📌 Notes

- Original CSS faylları toxunulmadan qalıb
- SCSS isteğe bağlıdır - CSS ilə də işləyə bilərsiniz
- Compiled CSS faylları gitignore-da (optional)
- Light/Dark mode hər 3 versiyada dəstəklənir

---

**İstifadə təlimatları üçün:**
- `SCSS_GUIDE.md` - Azərbaycan dilində
- `assets/scss/README.md` - İngilis dilində
