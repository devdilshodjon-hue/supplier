import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl
}) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Update meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Update OG image
    if (ogImage) {
      const ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (ogImageMeta) {
        ogImageMeta.setAttribute('content', ogImage);
      }
    }

    // Update canonical URL
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Add JSON-LD structured data for page
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title || "Supplier IT",
      "description": description || "Professional IT xizmatlar",
      "url": canonicalUrl || window.location.href,
      "mainEntity": {
        "@type": "Organization",
        "@id": "https://supplier.uz/#organization"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Bosh sahifa",
          "item": "https://supplier.uz/"
        }]
      }
    };

    // Remove existing page-specific JSON-LD
    const existingJsonLd = document.querySelector('script[data-page-jsonld]');
    if (existingJsonLd) {
      existingJsonLd.remove();
    }

    // Add new JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page-jsonld', 'true');
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      // Cleanup on component unmount
      const pageJsonLd = document.querySelector('script[data-page-jsonld]');
      if (pageJsonLd) {
        pageJsonLd.remove();
      }
    };
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null; // This component doesn't render anything
};

export default SEOOptimizer;

// Hook for dynamic SEO updates
export const useSEO = (options: SEOOptimizerProps) => {
  useEffect(() => {
    // Update page visibility for SEO
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Page is visible, good for engagement metrics
        console.log('Page is visible - good for SEO metrics');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null;
};
