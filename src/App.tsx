import React, { useEffect, useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import LazySection from './components/LazySection';
import SEOOptimizer from './components/SEOOptimizer';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { usePerformanceOptimization } from './hooks/usePerformance';
import { useAnimationOptimization } from './hooks/useAnimationOptimization';

// Lazy load non-critical components
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));
const Blog = lazy(() => import('./components/Blog'));
const Footer = lazy(() => import('./components/Footer'));

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isDark } = useTheme();

  // Apply performance optimizations
  usePerformanceOptimization();
  useAnimationOptimization();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <SEOOptimizer
        title="Supplier IT - Professional Veb Dasturlash, Mobil Ilovalar va Telegram Botlar"
        description="Supplier IT - O'zbekistondagi yetakchi IT kompaniya. Professional veb-sayt dasturlash, iOS va Android uchun mobil ilovalar, maxsus Telegram botlar."
        keywords="veb dasturlash, mobil ilovalar, telegram botlar, iOS, Android, IT xizmatlar, O'zbekiston, Toshkent"
        canonicalUrl="https://supplier.uz/"
      />
      <Header />
      <Hero />
      <LazySection>
        <About />
      </LazySection>
      <LazySection>
        <Services />
      </LazySection>
      <LazySection>
        <Portfolio />
      </LazySection>
      <LazySection>
        <Contact />
      </LazySection>
      <LazySection>
        <Blog />
      </LazySection>
      <LazySection>
        <Footer />
      </LazySection>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
