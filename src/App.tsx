import React, { useEffect, useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import LazySection from './components/LazySection';
import SEOOptimizer from './components/SEOOptimizer';
import { usePerformanceOptimization } from './hooks/usePerformance';

// Lazy load non-critical components
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));
const Blog = lazy(() => import('./components/Blog'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Apply performance optimizations
  usePerformanceOptimization();

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
    <div className="min-h-screen bg-white">
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
}

export default App;
