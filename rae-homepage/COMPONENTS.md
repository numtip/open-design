# RAE Homepage - Next.js Component Architecture

## Project Structure

```
apps/web/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── LanguageToggle.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── KPIStats.tsx
│   │   │   ├── QuickLinks.tsx
│   │   │   ├── ResearchServices.tsx
│   │   │   ├── AcademicServices.tsx
│   │   │   ├── NewsCards.tsx
│   │   │   ├── DigitalServices.tsx
│   │   │   └── Newsletter.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── IconButton.tsx
│   │   │   ├── Counter.tsx
│   │   │   └── Form.tsx
│   │   └── common/
│   │       ├── SectionHeader.tsx
│   │       ├── TextLink.tsx
│   │       └── LoadingSkeletons.tsx
│   ├── content/
│   │   ├── home.en.ts
│   │   ├── home.th.ts
│   │   ├── navigation.en.ts
│   │   └── navigation.th.ts
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css (design tokens)
│   │   ├── animations.css
│   │   └── typography.css
│   ├── utils/
│   │   ├── i18n.ts
│   │   ├── animations.ts
│   │   └── classNames.ts
│   ├── pages/
│   │   ├── index.tsx (homepage)
│   │   ├── _app.tsx
│   │   └── _document.tsx
│   └── types/
│       └── index.ts
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   └── news/
│   ├── icons/
│   └── fonts/
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Component Specifications

### 1. Layout Components

#### Header.tsx
```typescript
// Props
interface HeaderProps {
  locale: 'en' | 'th';
  onLanguageChange: (locale: 'en' | 'th') => void;
}

// Features
- Sticky positioning on scroll
- Logo with brand name (bilingual)
- Navigation links (desktop/tablet)
- Mobile hamburger menu
- Language toggle button
- CTA button (primary action)
- Shadow on scroll

// Export Path
apps/web/src/components/layout/Header.tsx
```

#### Navigation.tsx
```typescript
// Props
interface NavigationProps {
  items: NavItem[];
  locale: 'en' | 'th';
  activeSection?: string;
}

// Features
- Desktop horizontal nav with underline animation
- Mobile vertical nav in overlay
- Smooth scroll anchor links
- Active state tracking
- Language-aware labels

// Export Path
apps/web/src/components/layout/Navigation.tsx
```

#### Footer.tsx
```typescript
// Props
interface FooterProps {
  locale: 'en' | 'th';
  onLanguageChange: (locale: 'en' | 'th') => void;
}

// Features
- Dark background with white text
- 4 column grid (desktop), 2 col (tablet), 1 col (mobile)
- About section
- Quick links
- Resources
- Contact info
- Newsletter signup form
- Social links
- Bottom bar (copyright, privacy, terms)
- Language toggle

// Export Path
apps/web/src/components/layout/Footer.tsx
```

#### LanguageToggle.tsx
```typescript
// Props
interface LanguageToggleProps {
  current: 'en' | 'th';
  onChange: (locale: 'en' | 'th') => void;
}

// Features
- Compact button design
- Flags or language codes
- Smooth transition

// Export Path
apps/web/src/components/layout/LanguageToggle.tsx
```

### 2. Section Components

#### Hero.tsx
```typescript
// Props
interface HeroProps {
  locale: 'en' | 'th';
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage?: string;
}

// Features
- Full-screen hero section (600px desktop, 400px mobile)
- Gradient background (Emerald Dark → Primary)
- Centered content alignment
- Parallax scrolling effect
- Responsive hero image with srcset
- Prominent CTA button
- Fade-in animation on load

// Export Path
apps/web/src/components/sections/Hero.tsx
```

#### KPIStats.tsx
```typescript
// Props
interface KPIStatsProps {
  locale: 'en' | 'th';
  stats: {
    number: number;
    label: string;
    suffix?: string;
  }[];
}

// Features
- 4 cards on desktop, 2x2 tablet, stacked mobile
- Gold accent top border (4px)
- Number counter animation on scroll
- Staggered animation between cards
- Responsive grid layout
- Hover elevation effect

// Export Path
apps/web/src/components/sections/KPIStats.tsx
```

#### QuickLinks.tsx
```typescript
// Props
interface QuickLinksProps {
  locale: 'en' | 'th';
  links: {
    id: string;
    icon: React.ReactNode;
    label: string;
    href: string;
  }[];
}

// Features
- 6-8 button grid (3 columns desktop, 2 tablet/mobile)
- Green border with hover fill animation
- Icons above text
- Responsive spacing
- Smooth hover transitions

// Export Path
apps/web/src/components/sections/QuickLinks.tsx
```

#### ResearchServices.tsx
```typescript
// Props
interface ResearchServicesProps {
  locale: 'en' | 'th';
  services: {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
  }[];
}

// Features
- 3-4 horizontal scroll cards (mobile), grid (tablet+)
- Left border accent (4px emerald)
- Fixed height cards (320px)
- Icon, title, description, CTA
- Hover card lift effect
- Stagger fade-in animation

// Export Path
apps/web/src/components/sections/ResearchServices.tsx
```

#### AcademicServices.tsx
```typescript
// Props
interface AcademicServicesProps {
  locale: 'en' | 'th';
  services: string[];
  title: string;
  description: string;
  ctaText: string;
  illustration?: React.ReactNode;
}

// Features
- 2-column layout (services list + illustration)
- Single column on mobile
- Checkbox icon list
- Emerald primary CTA button
- Illustrated side (line art style)
- Responsive content reordering

// Export Path
apps/web/src/components/sections/AcademicServices.tsx
```

#### NewsCards.tsx
```typescript
// Props
interface NewsCardsProps {
  locale: 'en' | 'th';
  news: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    href: string;
  }[];
}

// Features
- 3 featured cards on desktop, 2 tablet, 1 mobile
- Card image with overlay (240px height)
- Title, excerpt, metadata (date, category)
- Category badges
- "Read more" link with arrow
- Image scale on hover
- Lazy loading with skeleton

// Export Path
apps/web/src/components/sections/NewsCards.tsx
```

#### DigitalServices.tsx
```typescript
// Props
interface DigitalServicesProps {
  locale: 'en' | 'th';
  services: {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
  }[];
}

// Features
- 3-column grid (desktop), 2 tablet, 1 mobile
- Icon, title, description, feature list
- Checkmark icons for features
- Outlined button with gold hover
- Responsive stacking
- Consistent card heights

// Export Path
apps/web/src/components/sections/DigitalServices.tsx
```

#### Newsletter.tsx
```typescript
// Props
interface NewsletterProps {
  locale: 'en' | 'th';
  onSubmit: (email: string) => Promise<void>;
}

// Features
- Email input field
- Submit button (Gold accent)
- Validation and error messages
- Success confirmation
- Loading state
- GDPR-compliant copy
- Responsive layout

// Export Path
apps/web/src/components/sections/Newsletter.tsx
```

### 3. UI Components

#### Button.tsx
```typescript
// Props
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  className?: string;
}

// Variants
- primary: Emerald background, white text, hover brightened
- secondary: Gray background, darker hover
- outline: Emerald border, emerald text, filled on hover
- ghost: Transparent, underline on hover

// Export Path
apps/web/src/components/ui/Button.tsx
```

#### Card.tsx
```typescript
// Props
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  accent?: 'top' | 'left' | 'none';
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

// Features
- Consistent padding and radius
- Optional accent border (gold/emerald)
- Hover elevation effect
- Responsive padding

// Export Path
apps/web/src/components/ui/Card.tsx
```

#### Badge.tsx
```typescript
// Props
interface BadgeProps {
  text: string;
  category?: 'news' | 'research' | 'academic' | 'event';
  size?: 'sm' | 'md';
  className?: string;
}

// Features
- Category-specific colors
- Compact pill shape
- Semantic text content

// Export Path
apps/web/src/components/ui/Badge.tsx
```

#### Counter.tsx
```typescript
// Props
interface CounterProps {
  from: number;
  to: number;
  duration: number;
  suffix?: string;
  prefix?: string;
  isVisible: boolean;
}

// Features
- Animated counter from 0 to target
- Smooth easing function
- Optional prefix/suffix
- Triggers on visibility
- Performance optimized

// Export Path
apps/web/src/components/ui/Counter.tsx
```

#### IconButton.tsx
```typescript
// Props
interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel: string;
}

// Features
- Minimum 48px touch target
- Accessible aria-label
- Hover and focus states
- Icon centering

// Export Path
apps/web/src/components/ui/IconButton.tsx
```

#### Form.tsx
```typescript
// Components
- Input
- Textarea
- Select
- Checkbox
- Radio

// Features
- Label associations
- Error states
- Focus visible indicators
- Touch-friendly sizing (44px min height)
- Validation messages

// Export Path
apps/web/src/components/ui/Form.tsx
```

### 4. Common Components

#### SectionHeader.tsx
```typescript
// Props
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  locale: 'en' | 'th';
}

// Features
- Consistent heading styles
- Optional subtitle and description
- Flexible alignment
- Responsive typography

// Export Path
apps/web/src/components/common/SectionHeader.tsx
```

#### TextLink.tsx
```typescript
// Props
interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  underline?: boolean;
}

// Features
- Emerald color with underline animation
- External link handling
- Accessible (target="_blank" + rel)
- Hover state animations

// Export Path
apps/web/src/components/common/TextLink.tsx
```

#### LoadingSkeletons.tsx
```typescript
// Components
- CardSkeleton
- ImageSkeleton
- TextSkeleton
- HeadingSkeleton

// Features
- Emerald gradient pulse animation
- Responsive sizing
- Content-accurate placeholder dimensions
- Accessible (aria-busy)

// Export Path
apps/web/src/components/common/LoadingSkeletons.tsx
```

## Page Implementation

### pages/index.tsx (Homepage)
```typescript
export default function Home() {
  const [locale, setLocale] = useState<'en' | 'th'>('th');
  const content = locale === 'th' ? homeContentTH : homeContentEN;

  return (
    <>
      <Header locale={locale} onLanguageChange={setLocale} />
      <main>
        <Hero {...content.hero} locale={locale} />
        <KPIStats {...content.stats} locale={locale} />
        <QuickLinks {...content.quickLinks} locale={locale} />
        <ResearchServices {...content.research} locale={locale} />
        <AcademicServices {...content.academic} locale={locale} />
        <NewsCards {...content.news} locale={locale} />
        <DigitalServices {...content.services} locale={locale} />
        <Newsletter locale={locale} onSubmit={handleNewsletterSubmit} />
      </main>
      <Footer locale={locale} onLanguageChange={setLocale} />
    </>
  );
}
```

## Styling Strategy

### CSS Variables (Design Tokens)
```css
:root {
  /* Colors */
  --color-primary: #10B981;
  --color-primary-dark: #047857;
  --color-accent: #D97706;
  --color-accent-light: #FCD34D;
  
  /* Typography */
  --font-body: 'Inter', system-ui, sans-serif;
  --font-display: 'Prompt', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-base: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  
  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### Tailwind Configuration
```javascript
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#10B981',
      'primary-dark': '#047857',
      accent: '#D97706',
      'accent-light': '#FCD34D',
      // ... standard colors
    },
    fontFamily: {
      body: ['Inter', 'system-ui'],
      display: ['Prompt', 'system-ui'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      base: '16px',
      lg: '24px',
      xl: '32px',
    },
  },
};
```

## Animation Utilities

### animations.ts
```typescript
// Scroll triggers
useIntersectionObserver() // Trigger animations on scroll

// Counter animation
useCounter(from, to, duration) // Number counter for stats

// Stagger animation
createStaggerDelay(index, delayMs) // Sequential element animation

// Parallax effect
useParallax(speed) // Background parallax on scroll
```

## i18n Strategy

### Content Structure
```typescript
// home.en.ts
export const homeContent = {
  hero: {
    title: 'Agricultural Research Excellence for Tomorrow',
    subtitle: 'Advancing sustainable farming through innovation',
    // ...
  },
  // ...
};

// home.th.ts
export const homeContent = {
  hero: {
    title: 'เสริมสร้างความเป็นเลิศด้านการวิจัยเกษตร',
    subtitle: 'ส่งเสริมการเกษตรที่ยั่งยืนผ่านการวิจัยที่ก้าวหน้า',
    // ...
  },
  // ...
};
```

## Build & Deployment Checklist

- [ ] Component library complete
- [ ] All design tokens implemented
- [ ] i18n setup (next-intl or similar)
- [ ] SEO optimization (meta tags, structured data)
- [ ] Performance optimized (image lazy load, code splitting)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Mobile responsiveness tested
- [ ] Cross-browser testing
- [ ] Bundle size analysis
- [ ] Lighthouse score > 90
- [ ] Security headers configured
- [ ] Analytics tracking setup
- [ ] Error boundaries implemented
- [ ] Loading states designed
- [ ] Dark mode support (optional)

## Timeline Estimate

- Component setup & structure: 2-3 days
- Layout components (Header, Footer, Nav): 1-2 days
- Section components: 3-4 days
- UI components library: 2-3 days
- Styling & animations: 2-3 days
- i18n integration: 1 day
- Testing & optimization: 2-3 days
- **Total: 13-18 days** (full-time development)

---

**Status:** Ready for development ✓
**Export Date:** 2026-05-04
**Design System:** RAE Premium Institutional
