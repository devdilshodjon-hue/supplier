import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance optimization: Use createRoot with concurrent features
const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');

const root = createRoot(container, {
  // Enable concurrent features for better performance
  onRecoverableError: (error, errorInfo) => {
    console.error('Recoverable error:', error, errorInfo);
  }
});

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Service Worker registration for caching and offline support
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Web Vitals reporting for performance monitoring
if (import.meta.env.PROD) {
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    function sendToAnalytics(metric: any) {
      // Replace with your analytics service
      console.log('Web Vital:', metric);
    }

    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  }).catch(() => {
    // Silently fail if web-vitals is not available
  });
}
