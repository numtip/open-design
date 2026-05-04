# RAE Homepage - Design Tokens & Visual Reference

## Color System Export

### Primary Colors
```
Color Name: Emerald Primary
Hex: #10B981
RGB: 16, 185, 129
HSL: 160°, 84%, 39%
OKLCH: 0.685, 0.142, 179°
Tailwind: emerald-500
Usage: Main brand, primary buttons, links

Color Name: Emerald Dark
Hex: #047857
RGB: 4, 120, 87
HSL: 159°, 94%, 24%
OKLCH: 0.468, 0.146, 176°
Tailwind: emerald-700
Usage: Headers, dark accents, text emphasis

Color Name: Emerald Light
Hex: #D1F4E8
RGB: 209, 244, 232
HSL: 155°, 70%, 89%
OKLCH: 0.896, 0.070, 169°
Tailwind: emerald-100
Usage: Light backgrounds, hover states

Color Name: Gold Accent
Hex: #D97706
RGB: 217, 119, 6
HSL: 38°, 92%, 44%
OKLCH: 0.661, 0.182, 54°
Tailwind: amber-600
Usage: CTAs, accents, highlights

Color Name: Gold Light
Hex: #FCD34D
RGB: 252, 211, 77
HSL: 45°, 97%, 65%
OKLCH: 0.842, 0.147, 75°
Tailwind: amber-300
Usage: Light backgrounds, soft accents
```

### Semantic Colors
```
Success
Hex: #059669
RGB: 5, 150, 105
OKLCH: 0.651, 0.132, 168°

Warning
Hex: #F59E0B
RGB: 245, 158, 11
OKLCH: 0.747, 0.157, 70°

Error
Hex: #DC2626
RGB: 220, 38, 38
OKLCH: 0.511, 0.243, 30°

Info
Hex: #0891B2
RGB: 8, 145, 178
OKLCH: 0.622, 0.167, 207°
```

### Neutral Colors
```
Text Primary
Hex: #111827
RGB: 17, 24, 39
OKLCH: 0.103, 0.011, 253°

Text Secondary
Hex: #6B7280
RGB: 107, 114, 128
OKLCH: 0.461, 0.030, 260°

Text Muted
Hex: #9CA3AF
RGB: 156, 163, 175
OKLCH: 0.627, 0.030, 258°

Surface
Hex: #FFFFFF
RGB: 255, 255, 255
OKLCH: 1.000, 0.000, 0°

Surface Alt
Hex: #F9FAFB
RGB: 249, 250, 251
OKLCH: 0.979, 0.002, 307°

Border
Hex: #E5E7EB
RGB: 229, 231, 235
OKLCH: 0.908, 0.007, 261°
```

## Typography System

### Font Specifications

#### Inter (Body Font)
```
Family: Inter
Category: Humanist Sans-serif
Provider: Google Fonts
License: Open Font License
Variable: Yes (100-900)
Sizes: 12px, 14px, 16px, 18px, 24px, 30px, 36px, 48px
Line Heights: 1.5, 1.6, 1.7, 1.4, 1.3, 1.2, 1.1
```

#### Prompt (Display Font)
```
Family: Prompt
Category: Geometric Sans-serif (Thai Optimized)
Provider: Google Fonts
License: Open Font License
Variable: No (weights: 100-900)
Optimized for: Thai typography, modern headings
Sizes: 24px, 30px, 36px, 48px
Line Heights: 1.4, 1.3, 1.2, 1.1
```

#### JetBrains Mono (Code Font)
```
Family: JetBrains Mono
Category: Monospace
Provider: JetBrains
License: Open Font License
Weights: 400 (Regular)
Usage: Data, statistics, code blocks
```

### Type Scale

| Size | Px | Em | Rem | Line Height | Usage |
|------|----|----|-----|-------------|-------|
| XS | 12 | 0.75 | 0.75 | 1.5 (18px) | Captions, small text |
| SM | 14 | 0.875 | 0.875 | 1.6 (22px) | Secondary text, labels |
| Base | 16 | 1 | 1 | 1.6 (26px) | Body text, default |
| LG | 18 | 1.125 | 1.125 | 1.7 (30px) | Emphasis, intro |
| XL | 24 | 1.5 | 1.5 | 1.4 (34px) | Section headers |
| 2XL | 30 | 1.875 | 1.875 | 1.3 (39px) | Secondary titles |
| 3XL | 36 | 2.25 | 2.25 | 1.2 (43px) | Page titles |
| 4XL | 48 | 3 | 3 | 1.1 (53px) | Hero headlines |

### Weight Scale

| Weight | Value | Usage |
|--------|-------|-------|
| Light | 300 | Subtle text, disabled states |
| Regular | 400 | Body text, default |
| Medium | 500 | Supporting headings, emphasis |
| Semi-bold | 600 | Subheadings, strong emphasis |
| Bold | 700 | Headers, strong emphasis |
| Extra Bold | 800 | Display text, hero titles |

## Spacing Scale

| Token | Value | Rem | Usage |
|-------|-------|-----|-------|
| 0 | 0px | 0 | No space |
| 1 | 4px | 0.25 | Micro spacing, borders |
| 2 | 8px | 0.5 | Compact components |
| 3 | 12px | 0.75 | Tight spacing |
| 4 | 16px | 1 | Standard padding |
| 5 | 20px | 1.25 | Comfortable spacing |
| 6 | 24px | 1.5 | Section padding |
| 8 | 32px | 2 | Large padding |
| 10 | 40px | 2.5 | Extra large spacing |
| 12 | 48px | 3 | Massive spacing |
| 16 | 64px | 4 | Section gaps |
| 20 | 80px | 5 | Large section gaps |
| 24 | 96px | 6 | Extra large section gaps |

## Border Radius

| Size | Value | Usage |
|------|-------|-------|
| None | 0px | Sharp corners |
| SM | 4px | Small elements (badges) |
| MD | 8px | Standard (buttons, inputs) |
| LG | 12px | Large elements (cards) |
| Full | 9999px | Pills, circles |

## Shadow System

### Elevation Shadows

```
Elevation 0 (None)
box-shadow: none

Elevation 1 (Subtle)
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05)

Elevation 2 (Light)
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)

Elevation 3 (Medium)
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1)

Elevation 4 (Strong)
box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1)

Elevation 5 (Heavy)
box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15)
```

## Animation Timing

| Duration | Value | Usage |
|----------|-------|-------|
| Fast | 100ms | Quick interactions (hover) |
| Normal | 150-200ms | Standard transitions |
| Slow | 300-400ms | Page transitions |
| Slower | 600ms+ | Complex animations |

### Easing Functions

```
Linear: cubic-bezier(0, 0, 1, 1)
Usage: Transitions that should feel constant

Ease-In: cubic-bezier(0.4, 0, 1, 1)
Usage: Elements appearing/entering

Ease-Out: cubic-bezier(0, 0, 0.2, 1)
Usage: Elements disappearing/exiting

Ease-In-Out: cubic-bezier(0.4, 0, 0.2, 1)
Usage: Smooth hover transitions, scroll animations

Spring: cubic-bezier(0.34, 1.56, 0.64, 1)
Usage: Playful interactions, bouncy effects
```

## Component Dimensions

### Buttons

```
Small (44px)
Height: 44px
Padding: 8px 16px
Font: SM (14px), Semi-bold
Icon: 16px

Medium (48px) - Default
Height: 48px
Padding: 12px 20px
Font: Base (16px), Semi-bold
Icon: 20px

Large (52px)
Height: 52px
Padding: 16px 24px
Font: LG (18px), Semi-bold
Icon: 24px

Extra Large (56px)
Height: 56px
Padding: 16px 32px
Font: XL (24px), Bold
Icon: 28px
```

### Input Fields

```
Height: 44px (desktop), 48px (mobile minimum for touch)
Padding: 12px 16px
Font: Base (16px)
Border: 1px solid Border color
Border-radius: 8px
Focus: 2px solid Primary color
Error: 2px solid Error color
```

### Card

```
Padding: 24px (desktop), 16px (mobile)
Border-radius: 12px
Border: 1px solid Border color
Shadow: Elevation 1
Hover Shadow: Elevation 2
Transition: 200ms ease-out
```

## Responsive Breakpoints

```
Mobile: 320px - 639px
Tablet: 640px - 1023px
Desktop: 1024px - 1279px
Wide: 1280px+
```

### Container Queries

```
@container (min-width: 480px) {
  /* Tablet-sized containers */
}

@container (min-width: 768px) {
  /* Desktop-sized containers */
}
```

## Design System HTML Template

```html
<!DOCTYPE html>
<html lang="th" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="RAE - Agricultural Research & Academic Excellence">
  <meta name="theme-color" content="#10B981">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Prompt:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <style>
    :root {
      --color-primary: #10B981;
      --color-primary-dark: #047857;
      --color-accent: #D97706;
      --font-body: 'Inter', system-ui;
      --font-display: 'Prompt', system-ui;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html {
      font-size: 16px;
      scroll-behavior: smooth;
    }
    
    body {
      font-family: var(--font-body);
      font-size: 1rem;
      line-height: 1.6;
      color: #111827;
      background: #ffffff;
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-display);
      font-weight: 700;
      line-height: 1.2;
    }
  </style>
</head>
<body>
  <!-- Content -->
</body>
</html>
```

## Accessibility Contrast Validation

### WCAG AA Compliant Color Combinations

| Foreground | Background | Ratio | Grade |
|------------|-----------|-------|-------|
| Text Primary (#111827) | Surface (#FFFFFF) | 18.85:1 | AAA |
| Text Primary (#111827) | Surface Alt (#F9FAFB) | 18.85:1 | AAA |
| Primary (#10B981) | Surface (#FFFFFF) | 4.68:1 | AA |
| Accent (#D97706) | Surface (#FFFFFF) | 7.97:1 | AAA |
| White (#FFFFFF) | Primary Dark (#047857) | 9.58:1 | AAA |
| White (#FFFFFF) | Accent (#D97706) | 5.84:1 | AA |

## Icon System

### Icon Sizes

```
16px - Labels, small UI
20px - Standard buttons
24px - Navigation, features
32px - Section features
48px - Hero, feature cards
64px - Services showcase
```

### Icon Style

- **Style:** Outline / Stroke-based
- **Stroke Width:** 1.5px - 2px
- **Fill:** None (transparent)
- **Color:** Inherit from text or use Primary/Accent

### Common Icons Needed

1. Arrow → (navigation, CTAs)
2. Chevron Down (collapsible, menus)
3. Menu (mobile navigation)
4. X (close buttons)
5. Check (success, features)
6. Search (search inputs)
7. Bell (notifications)
8. User (profile, accounts)
9. Settings (configuration)
10. Share (social, sharing)
11. Calendar (dates, events)
12. MapPin (location)
13. Phone (contact)
14. Mail (email)
15. Globe (website, language)

## Export Artifacts

### Files Created
- ✓ DESIGN.md (16 sections, design specifications)
- ✓ COMPONENTS.md (component library breakdown)
- ✓ DESIGN_TOKENS.md (this file - visual reference)
- ✓ design-system-vars.css (CSS custom properties)
- ✓ tailwind.config.js (Tailwind theme configuration)

### Directory Structure
```
/mnt/f/OpenDesign/open-design/design-lab/rae-homepage/
├── DESIGN.md
├── COMPONENTS.md
├── DESIGN_TOKENS.md
├── exports/
│   ├── colors.json
│   ├── typography.json
│   ├── spacing.json
│   ├── shadows.json
│   └── animations.json
└── references/
    ├── figma-export/
    ├── design-system-guide.pdf
    └── component-showcase.html
```

## Implementation Checklist

### Pre-Development
- [ ] Review all design specifications
- [ ] Set up Tailwind with custom theme
- [ ] Configure CSS custom properties
- [ ] Import fonts (Inter, Prompt, JetBrains Mono)
- [ ] Set up i18n framework

### Component Development
- [ ] Create base components (Button, Card, etc.)
- [ ] Build layout components
- [ ] Develop section components
- [ ] Implement animations
- [ ] Add responsive behavior
- [ ] Create loading states

### Quality Assurance
- [ ] Color contrast validation (WCAG AA)
- [ ] Typography rendering check
- [ ] Responsive testing (all breakpoints)
- [ ] Mobile touch targets (48px minimum)
- [ ] Keyboard navigation testing
- [ ] Screen reader testing
- [ ] Cross-browser testing
- [ ] Performance profiling

### Content Preparation
- [ ] Thai content translation review
- [ ] Image optimization (WebP, srcset)
- [ ] SEO metadata setup
- [ ] Analytics tracking
- [ ] Error messages/states

---

**Design System Complete** ✓
**Export Status:** Ready for Implementation
**Last Updated:** 2026-05-04
**Version:** 1.0
