# RAE Agricultural Research & Academic Promotion Institute - Website Rebuild

## 🎨 Design Lab Project

This is a premium institutional website design for the Agricultural Research and Academic Promotion Institute (สำนักวิจัยและส่งเสริมวิชาการการเกษตร) at Maejo University.

**Status:** ✅ Design Phase Complete - Ready for Development
**Design Version:** 1.0
**Last Updated:** May 4, 2026

---

## 📋 Project Overview

### Brand
- **Organization:** Agricultural Research & Academic Promotion Institute, Maejo University
- **Thai Name:** สำนักวิจัยและส่งเสริมวิชาการการเกษตร มหาวิทยาลัยแม่โจ้
- **Color Scheme:** Emerald Green (#10B981) + Gold (#D97706)
- **Typography:** Prompt (Thai) + Inter (English)
- **Style:** Modern, Premium, Institutional
- **Approach:** Mobile-First, Bilingual (TH/EN)

### Key Features
- ✅ Comprehensive Design System
- ✅ Component Library Specifications
- ✅ Design Tokens (JSON + CSS)
- ✅ Tailwind Configuration
- ✅ Responsive Grid System
- ✅ Animation Specifications
- ✅ Accessibility Guidelines (WCAG 2.1 AA)
- ✅ i18n Ready (Thai + English)

---

## 📁 Project Structure

```
design-lab/rae-homepage/
├── DESIGN.md                    # Main design specifications (16 sections)
├── COMPONENTS.md                # Next.js component architecture
├── DESIGN_TOKENS.md             # Visual reference & color palette
├── README.md                    # This file
├── exports/
│   ├── tokens.json              # Design tokens in JSON format
│   ├── design-system.css        # CSS custom properties & utilities
│   ├── tailwind.config.js       # Tailwind CSS configuration
│   ├── content-en.json          # English content structure
│   ├── content-th.json          # Thai content structure
│   └── component-specs.md       # Detailed component specifications
├── references/
│   ├── figma-export/            # (Optional) Figma design files
│   ├── design-system-guide.pdf  # (Optional) Printable design guide
│   └── screenshots/             # (Optional) Design previews
└── assets/
    ├── icons/                   # SVG icon set
    ├── illustrations/           # Line art illustrations
    └── color-swatches/          # Color palette exports
```

---

## 🎯 Key Sections

### 1. **Hero Section**
- Full-screen banner with gradient background
- Bilingual headline and subheading
- Primary CTA button
- Parallax scrolling effect
- Responsive image with proper sizing

### 2. **KPI Statistics**
- 4 animated counters
- Scroll-triggered animations
- Staggered appearance
- Responsive grid (4 desktop, 2 tablet, 1 mobile)

### 3. **Quick Links**
- 6-8 navigation buttons
- Icon + label layout
- Hover fill animation
- Responsive grid system

### 4. **Research Services**
- 3-4 feature cards
- Horizontal scroll on mobile
- Grid layout on desktop
- Icon, title, description, CTA per card

### 5. **Academic Services**
- 2-column layout (services + illustration)
- Checkbox-style feature list
- Primary CTA button
- Responsive stacking

### 6. **News & Updates**
- 3 featured cards on desktop
- Image with overlay
- Title, excerpt, metadata
- Category badges

### 7. **Digital Services**
- Service feature grid
- Icon showcases
- Feature lists
- Outlined buttons

### 8. **Footer**
- Dark background (Emerald Dark)
- Multi-column layout
- Newsletter signup form
- Social links
- Contact information
- Language toggle

---

## 🎨 Design System

### Color Palette

#### Primary Colors
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Emerald Base | #10B981 | 16, 185, 129 | Main brand |
| Emerald Dark | #047857 | 4, 120, 87 | Headers, emphasis |
| Emerald Light | #D1F4E8 | 209, 244, 232 | Backgrounds |
| Gold | #D97706 | 217, 119, 6 | CTAs, accents |
| Gold Light | #FCD34D | 252, 211, 77 | Light accents |

### Typography

| Family | Usage | Weights |
|--------|-------|---------|
| **Prompt** | Display, headings, Thai text | 500, 600, 700, 800 |
| **Inter** | Body text, UI, English text | 400, 500, 600, 700 |
| **JetBrains Mono** | Data, statistics, code | 400 |

### Spacing Scale
`0 → 4px → 8px → 12px → 16px → 20px → 24px → 32px → 40px → 48px → 64px → 80px → 96px → 128px`

### Responsive Breakpoints
- **Mobile:** 320px - 639px
- **Tablet:** 640px - 1023px
- **Desktop:** 1024px - 1279px
- **Wide:** 1280px+

---

## 📦 Exports & Artifacts

### Design Documents
1. **DESIGN.md** (20 KB)
   - Complete design specifications
   - Visual theme guidelines
   - Component details
   - Accessibility requirements

2. **COMPONENTS.md** (45 KB)
   - Next.js component breakdown
   - Component specifications
   - Props interfaces
   - Implementation guidelines

3. **DESIGN_TOKENS.md** (35 KB)
   - Visual reference guide
   - Color palette with contrast validation
   - Typography system
   - Spacing and layout scale

### Code Artifacts
1. **tokens.json** (8 KB)
   - Machine-readable design tokens
   - Color definitions
   - Typography scale
   - Component dimensions

2. **design-system.css** (28 KB)
   - CSS custom properties
   - Component utilities
   - Global styles
   - Animation keyframes

3. **tailwind.config.js** (15 KB)
   - Tailwind CSS theme configuration
   - Custom colors
   - Typography setup
   - Plugin definitions

### Total Export Size
**~150 KB** of design specifications and implementation-ready code

---

## 🚀 Getting Started

### For Designers
1. Review **DESIGN.md** for visual specifications
2. Reference **DESIGN_TOKENS.md** for exact colors and typography
3. Check **COMPONENTS.md** for component layouts
4. Use design system CSS or Tailwind config for local prototyping

### For Developers
1. Install dependencies:
   ```bash
   npm install tailwindcss postcss autoprefixer
   npm install @next/font
   npm install next-intl
   ```

2. Set up Tailwind:
   ```bash
   npx tailwindcss init -p
   # Use tailwind.config.js from exports/
   ```

3. Copy design tokens:
   ```bash
   cp exports/tokens.json src/styles/tokens.json
   cp exports/design-system.css src/styles/design-system.css
   ```

4. Create component structure (see COMPONENTS.md):
   ```
   src/
   ├── components/
   │   ├── layout/
   │   ├── sections/
   │   ├── ui/
   │   └── common/
   ├── styles/
   ├── content/
   └── pages/
   ```

5. Implement components following specifications in COMPONENTS.md

### Development Timeline
- **Setup & Architecture:** 2-3 days
- **Component Development:** 8-10 days
- **Testing & Optimization:** 3-4 days
- **Total Estimate:** 13-17 days (full-time)

---

## ✅ Accessibility Checklist

- [x] WCAG 2.1 AA Color Contrast
- [x] Semantic HTML Structure
- [x] Keyboard Navigation Support
- [x] Focus Visible Indicators
- [x] ARIA Labels for Images
- [x] Form Label Associations
- [x] Error Message Announcements
- [x] Skip Navigation Link
- [x] Motion Preferences Respected
- [x] Touch Target Minimums (48px)
- [x] Alternative Text for Images
- [x] Language Markup (lang attribute)

---

## 🌍 Internationalization (i18n)

### Supported Languages
- **Thai (ไทย)** - Primary language
- **English (EN)** - Secondary language

### Content Management
- Separate content files for each language
- Language toggle in header and footer
- No hardcoded strings in components
- All UI text available in both languages

### Thai-Specific Considerations
- Font: Prompt (optimized for Thai)
- Line height: 1.7-1.8 (higher for Thai)
- Word spacing: Account for Thai word boundaries
- Direction: LTR for both Thai and English (no RTL needed)
- Date format: DD/MM/YYYY

---

## 📊 Performance Targets

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 3s
- **Lighthouse Score:** > 90

### Optimization Strategies
- Image lazy loading with srcset
- Code splitting by route
- CSS-in-JS with styled-components (optional)
- Minification and compression
- CDN delivery for static assets

---

## 🔐 Security & Compliance

- HTTPS enforced
- CSP headers configured
- No sensitive data in frontend
- GDPR-compliant newsletter signup
- Secure form handling
- Regular dependency updates

---

## 📱 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions
- ES6+ required

---

## 📚 Design References

### Documentation Files
- `DESIGN.md` - Main specifications
- `COMPONENTS.md` - Component architecture
- `DESIGN_TOKENS.md` - Visual reference

### Exported Artifacts
- `tokens.json` - Design tokens
- `design-system.css` - CSS utilities
- `tailwind.config.js` - Tailwind config

### Content
- `content-en.json` - English content
- `content-th.json` - Thai content

---

## 🎯 Next Steps

### Before Development
1. ✅ Review all design specifications (DESIGN.md)
2. ✅ Validate component breakdown (COMPONENTS.md)
3. ✅ Approve color palette and typography (DESIGN_TOKENS.md)
4. ✅ Finalize content (English + Thai)
5. ✅ Set up development environment

### During Development
1. Follow component specifications exactly
2. Use provided design tokens
3. Test responsive behavior on all breakpoints
4. Verify accessibility requirements
5. Optimize performance metrics

### Quality Assurance
1. Lighthouse audit (score > 90)
2. WCAG 2.1 AA compliance
3. Cross-browser testing
4. Mobile responsiveness (all breakpoints)
5. Bilingual content verification

---

## 📞 Support & Questions

**Project Status:** ✅ Ready for Development
**Design Approved:** ✅ Yes
**Ready for Implementation:** ✅ Yes

All specifications are complete and ready for development. Refer to the specific documents for detailed information:
- Design specifics → DESIGN.md
- Component details → COMPONENTS.md
- Visual reference → DESIGN_TOKENS.md

---

## 📄 License

Design System: © 2026 Agricultural Research & Academic Promotion Institute
All design specifications and components are proprietary.

---

**Project Created:** May 4, 2026
**Design System Version:** 1.0
**Status:** ✅ Complete & Ready for Development
