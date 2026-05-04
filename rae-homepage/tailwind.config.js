/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#145231',
          base: '#10B981',
          dark: '#047857',
          light: '#D1F4E8',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          base: '#D97706',
          light: '#FCD34D',
        },
        semantic: {
          success: '#059669',
          warning: '#F59E0B',
          error: '#DC2626',
          info: '#0891B2',
        },
        neutral: {
          text: {
            primary: '#111827',
            secondary: '#6B7280',
            muted: '#9CA3AF',
          },
          surface: {
            base: '#FFFFFF',
            alt: '#F9FAFB',
            dark: '#0F172A',
          },
          border: '#E5E7EB',
        },
      },
      fontFamily: {
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Prompt', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '18px' }],
        sm: ['14px', { lineHeight: '22px' }],
        base: ['16px', { lineHeight: '26px' }],
        lg: ['18px', { lineHeight: '30px' }],
        xl: ['24px', { lineHeight: '34px' }],
        '2xl': ['30px', { lineHeight: '39px' }],
        '3xl': ['36px', { lineHeight: '43px' }],
        '4xl': ['48px', { lineHeight: '53px' }],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      spacing: {
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        16: '64px',
        20: '80px',
        24: '96px',
        32: '128px',
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        full: '9999px',
      },
      boxShadow: {
        none: 'none',
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
      },
      transitionDuration: {
        fast: '100ms',
        normal: '200ms',
        slow: '300ms',
        slower: '600ms',
      },
      transitionTimingFunction: {
        'ease-linear': 'cubic-bezier(0, 0, 1, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      screens: {
        mobile: '320px',
        tablet: '640px',
        desktop: '1024px',
        wide: '1280px',
      },
      animation: {
        fadeIn: 'fadeIn 200ms ease-out',
        slideInUp: 'slideInUp 300ms ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInUp: {
          from: { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      minHeight: {
        touchTarget: '48px',
      },
      minWidth: {
        touchTarget: '48px',
      },
    },
  },
  plugins: [
    // Custom plugins for RAE-specific components
    function ({ addComponents, theme }) {
      addComponents({
        // Button variants
        '.btn-primary': {
          '@apply px-5 py-3 rounded-md font-semibold text-white bg-primary-base transition-all duration-200 ease-in-out hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-base disabled:opacity-50 disabled:cursor-not-allowed': {},
        },
        '.btn-secondary': {
          '@apply px-5 py-3 rounded-md font-semibold text-white bg-accent-base transition-all duration-200 ease-in-out hover:bg-accent-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-base disabled:opacity-50 disabled:cursor-not-allowed': {},
        },
        '.btn-outline': {
          '@apply px-5 py-3 rounded-md font-semibold text-primary-base border-2 border-primary-base bg-transparent transition-all duration-200 ease-in-out hover:bg-primary-light hover:border-primary-dark hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-base disabled:opacity-50 disabled:cursor-not-allowed': {},
        },
        '.btn-ghost': {
          '@apply px-5 py-3 rounded-md font-semibold text-primary-base bg-transparent transition-all duration-200 ease-in-out hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-base disabled:opacity-50 disabled:cursor-not-allowed': {},
        },

        // Card variants
        '.card': {
          '@apply p-6 border border-neutral-border rounded-lg bg-white shadow-sm transition-all duration-200 ease-in-out hover:shadow-md hover:-translate-y-0.5': {},
        },
        '.card-elevated': {
          '@apply p-6 border border-neutral-border rounded-lg bg-white shadow-md transition-all duration-200 ease-in-out': {},
        },
        '.card-accent-top': {
          '@apply border-t-4 border-t-accent-base': {},
        },
        '.card-accent-left': {
          '@apply border-l-4 border-l-primary-base': {},
        },

        // Badge
        '.badge': {
          '@apply inline-flex items-center px-3 py-1 rounded-full text-sm font-medium': {},
        },
        '.badge-primary': {
          '@apply bg-primary-100 text-primary-900': {},
        },
        '.badge-accent': {
          '@apply bg-accent-100 text-accent-900': {},
        },
        '.badge-success': {
          '@apply bg-green-100 text-green-900': {},
        },

        // Link
        '.link': {
          '@apply text-primary-base no-underline transition-colors duration-100 ease-in-out hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-base': {},
        },
        '.link-underline': {
          '@apply border-b-2 border-transparent transition-colors duration-100 ease-in-out hover:border-primary-dark': {},
        },

        // Section header
        '.section-header': {
          '@apply mb-12': {},
        },
        '.section-title': {
          '@apply text-4xl font-bold text-primary-dark font-display mb-4': {},
        },
        '.section-subtitle': {
          '@apply text-lg text-neutral-text-secondary font-display mb-2': {},
        },
        '.section-description': {
          '@apply text-base text-neutral-text-secondary max-w-2xl': {},
        },

        // Input
        '.input': {
          '@apply px-4 py-3 border border-neutral-border rounded-md bg-white text-base placeholder-neutral-text-muted transition-all duration-200 ease-in-out focus:outline-none focus:border-primary-base focus:ring-2 focus:ring-primary-base/10 disabled:bg-neutral-surface-alt disabled:text-neutral-text-muted disabled:cursor-not-allowed disabled:opacity-50': {},
        },

        // Skeleton loader
        '.skeleton': {
          '@apply bg-gradient-to-r from-neutral-surface-alt to-neutral-border bg-[length:1000px_100%] animate-shimmer': {},
        },
      });
    },

    // Dark mode plugin
    function ({ addVariant, e }) {
      addVariant('dark', '@media (prefers-color-scheme: dark)');
    },

    // Motion preferences plugin
    function ({ addVariant }) {
      addVariant('motion-safe', '@media (prefers-reduced-motion: no-preference)');
      addVariant('motion-reduce', '@media (prefers-reduced-motion: reduce)');
    },

    // High contrast plugin
    function ({ addVariant }) {
      addVariant('high-contrast', '@media (prefers-contrast: more)');
    },
  ],
};
