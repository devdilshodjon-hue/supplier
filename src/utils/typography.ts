// Consistent typography system for the entire website
export const typography = {
  // Main headings
  h1: 'text-xl sm:text-2xl lg:text-4xl font-bold',
  h2: 'text-lg sm:text-xl lg:text-2xl font-bold',
  h3: 'text-base sm:text-lg lg:text-xl font-semibold',
  h4: 'text-sm sm:text-base lg:text-lg font-semibold',
  
  // Hero specific (still impressive but more readable)
  heroMain: 'text-2xl sm:text-4xl lg:text-6xl font-bold',
  heroAnimated: 'text-lg sm:text-2xl lg:text-4xl font-bold',
  heroSubtitle: 'text-base sm:text-lg lg:text-xl',
  
  // Body text
  body: 'text-sm sm:text-base',
  bodyLarge: 'text-base sm:text-lg',
  bodySmall: 'text-xs sm:text-sm',
  
  // Buttons
  button: 'text-sm sm:text-base font-semibold',
  buttonLarge: 'text-base sm:text-lg font-semibold',
  
  // Cards and components
  cardTitle: 'text-base sm:text-lg lg:text-xl font-semibold',
  cardSubtitle: 'text-sm sm:text-base',
  cardBody: 'text-xs sm:text-sm',
  
  // Navigation
  nav: 'text-sm sm:text-base font-medium',
  navLarge: 'text-base sm:text-lg font-medium',
  
  // Stats and numbers
  statNumber: 'text-2xl sm:text-3xl lg:text-4xl font-bold',
  statLabel: 'text-xs sm:text-sm',
  
  // Forms
  input: 'text-sm sm:text-base',
  label: 'text-xs sm:text-sm font-medium',
  
  // Footer
  footerTitle: 'text-sm sm:text-base font-semibold',
  footerText: 'text-xs sm:text-sm'
};

// Theme-aware text colors
export const getTextColors = (isDark: boolean) => ({
  primary: isDark ? 'text-white' : 'text-gray-900',
  secondary: isDark ? 'text-gray-300' : 'text-gray-600',
  muted: isDark ? 'text-gray-400' : 'text-gray-500',
  accent: 'text-blue-600',
  success: isDark ? 'text-green-400' : 'text-green-600',
  warning: isDark ? 'text-yellow-400' : 'text-yellow-600',
  error: isDark ? 'text-red-400' : 'text-red-600'
});

// Spacing system
export const spacing = {
  xs: 'mb-1',
  sm: 'mb-2',
  md: 'mb-4',
  lg: 'mb-6',
  xl: 'mb-8',
  xxl: 'mb-12'
};
