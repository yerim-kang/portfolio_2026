/**
 * Design Tokens
 * 실무에서는 디자인 시스템을 변수로 관리해 일관성 유지 및 유지보수성 향상
 * - 컬러, 타이포그래피, 간격, breakpoint 등을 중앙 관리
 */

export const colors = {
  primary: '#0F1AF2',
  accent: '#BFF205',
  background: '#F2F2F2',
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
} as const;

export const typography = {
  fontFamily: {
    base: "'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    display: "'Playfair Display', serif",
    mono: "'Fira Code', monospace",
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
    '8xl': '6rem',    // 96px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const spacing = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
  '3xl': '6rem',  // 96px
  '4xl': '8rem',  // 128px
  '5xl': '12rem', // 192px
} as const;

export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
} as const;

export const animations = {
  duration: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
    slower: '0.8s',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

export const zIndex = {
  base: 1,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modal: 400,
  popover: 500,
  tooltip: 600,
} as const;

