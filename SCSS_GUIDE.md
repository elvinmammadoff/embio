# EMBIO SCSS Guide

Bu faylda SCSS versiyalarının necə istifadə olunacağı izah edilir.

## Quraşdırma

### 1. Node.js və npm quraşdırın

Əgər sisteminizdə Node.js yoxdursa, [nodejs.org](https://nodejs.org/) saytından yükləyin.

### 2. Dependencies quraşdırın

```bash
cd embio
npm install
```

Bu əmr `package.json` faylındakı bütün lazımi paketləri (Sass compiler) quraşdıracaq.

## SCSS-dən CSS-ə Çevirmə (Compilation)

### Bütün versiyaları bir dəfə çevirmək:

```bash
npm run compile:all
```

### Ayrı-ayrılıqda çevirmək:

```bash
# Version 1 (Dark Industrial)
npm run compile:v1

# Version 2 (Cream Minimal)
npm run compile:v2

# Version 3 (Neon Cyberpunk)
npm run compile:v3
```

### Watch mode (avtomatik çevirmə):

Dəyişiklikləri avtomatik izləyib CSS-ə çevirmək üçün:

```bash
# Version 1 üçün
npm run watch:v1

# Version 2 üçün
npm run watch:v2

# Version 3 üçün
npm run watch:v3

# və ya qısa formada:
npm run dev:v1
npm run dev:v2
npm run dev:v3
```

Watch mode aktiv olduqda, SCSS fayllarında hər hansı dəyişiklik etdikdə avtomatik olaraq CSS faylı yenilənəcək.

## Strukturun İzahı

### Əsas Fayllar

- **`_variables.scss`** - Bütün versiyalar üçün ümumi dəyişənlər (rənglər, font-lar, spacing)
- **`_mixins.scss`** - Təkrar istifadə olunan SCSS mixins və funksiyalar

### Versiya Faylları

Hər versiya öz qovluğunda yerləşir:

```
v1/ - Dark Industrial
v2/ - Cream Minimal  
v3/ - Neon Cyberpunk
```

Hər versiyada:
- `style.scss` / `style-v2.scss` / `style-v3.scss` - Əsas giriş faylı
- `_base.scss` - Reset və ümumi stillər
- `_nav.scss` - Naviqasiya stilləri
- `_responsive.scss` - Media query-lər
- `sections/` - Səhifə bölmələrinin stilləri
- `components/` - Təkrar istifadə olunan komponentlər

## Rəng Dəyişdirmək

### Version 1 rənglərini dəyişdirmək:

`assets/scss/_variables.scss` faylında:

```scss
$accent: #c8ff00;  // Accent rəng (yaşıl-sarı)
$bg: #080808;      // Arxa fon
$text: #e8e8e8;    // Mətn rəngi
```

### Version 2 rənglərini dəyişdirmək:

`assets/scss/v2/_variables-v2.scss` faylında:

```scss
$accent-v2: #1a56db;  // Cobalt blue
$bg-v2: #1a1d2e;      // Dark navy
```

### Version 3 rənglərini dəyişdirmək:

`assets/scss/v3/_variables-v3.scss` faylında:

```scss
$accent-v3: #ff00cc;    // Magenta
$accent-2-v3: #00e5ff;  // Cyan
```

## Responsive Breakpoint-lər

Mixins istifadə edərək responsive dizayn:

```scss
.my-section {
  padding: 8rem 2rem;
  
  @include tablet {
    padding: 5rem 2rem;
  }
  
  @include mobile {
    padding: 3rem 1.5rem;
  }
}
```

Mövcud breakpoint-lər:
- `@include mobile` - max-width: 600px
- `@include tablet` - max-width: 900px
- `@include desktop` - min-width: 901px

## Yeni Komponent Əlavə Etmək

1. Uyğun qovluqda yeni fayl yaradın:

```bash
# V1 üçün
assets/scss/v1/components/_my-component.scss

# V2 üçün
assets/scss/v2/components/_my-component-v2.scss
```

2. Əsas style faylına import edin:

```scss
// assets/scss/v1/style.scss
@import 'components/my-component';
```

3. Komponent kodunu yazın:

```scss
// _my-component.scss
@import '../../variables';
@import '../../mixins';

.my-component {
  background: $bg-2;
  padding: 2rem;
  border: 1px solid $border;
  
  @include mobile {
    padding: 1rem;
  }
  
  &:hover {
    @include hover-lift;
  }
}
```

## Faydalı SCSS Xüsusiyyətləri

### Nesting (İç-içə yazma):

```scss
.nav {
  background: $bg;
  
  .nav-logo {
    color: $accent;
    
    &:hover {
      color: $accent-hover;
    }
  }
}
```

### Variables (Dəyişənlər):

```scss
$primary-color: #ff00cc;
$spacing-unit: 1rem;

.element {
  color: $primary-color;
  padding: $spacing-unit * 2;
}
```

### Mixins (Təkrar istifadə):

```scss
@mixin button-style {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  @include transition(all);
}

.btn-primary {
  @include button-style;
  background: $accent;
}
```

### Functions (Hesablamalar):

```scss
$base-size: 16px;

@function rem($pixels) {
  @return #{$pixels / $base-size}rem;
}

.text {
  font-size: rem(24); // 1.5rem
}
```

## Production Üçün Hazırlanma

Production üçün minified (sıxışdırılmış) CSS lazımdır:

```bash
npm run compile:all
```

Bu əmr `--style compressed` flag-i ilə CSS yaradacaq ki, fayl ölçüsü minimum olsun.

## Problemlərin Həlli

### SCSS compile olmur:

```bash
# Node modules-ləri təmizləyib yenidən quraşdırın
rm -rf node_modules
npm install
```

### Syntax xətası:

- SCSS faylında açılan/bağlanan mötərizələri yoxlayın
- İmport path-lərin düzgün olduğundan əmin olun
- Terminal-da xəta mesajını diqqətlə oxuyun

### CSS dəyişmirlər görünmür:

- Brauzer cache-ni təmizləyin (Ctrl+Shift+R və ya Cmd+Shift+R)
- SCSS-in düzgün compile olduğunu yoxlayın
- HTML faylında CSS linki düzgün olduğunu yoxlayın

## Əlavə Məlumat

SCSS haqqında daha ətraflı:
- [Official Sass Documentation](https://sass-lang.com/documentation)
- [Sass Guidelines](https://sass-guidelin.es/)

Suallarınız olarsa, documentation/index.html faylına baxın.
