import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/react2.webp',
        '/images/next2.webp', 
        '/images/node2.webp',
        '/images/express.webp',
        '/images/mongo.webp',
        '/images/mysql.webp',
        '/images/typescript.webp',
        '/images/javascript.webp'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };
    
    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    };
    
    // Reduce layout shift by setting image dimensions
    const preventLayoutShift = () => {
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach(img => {
        const imageElement = img as HTMLImageElement;
        imageElement.style.aspectRatio = 'auto';
      });
    };
    
    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Delay non-critical third-party scripts
      const delayedScripts = [
        'https://visitcount.itsvg.in',
        'https://github-readme-stats.vercel.app',
        'https://github-readme-activity-graph.vercel.app'
      ];
      
      const loadDelayedScripts = () => {
        delayedScripts.forEach(src => {
          if (!document.querySelector(`script[src*="${src}"]`)) {
            // These are image URLs, not scripts, so we preconnect instead
            const link = document.createElement('link');
            link.rel = 'preconnect';
            link.href = new URL(src).origin;
            document.head.appendChild(link);
          }
        });
      };
      
      // Load after user interaction or after 3 seconds
      let loaded = false;
      const load = () => {
        if (!loaded) {
          loaded = true;
          loadDelayedScripts();
        }
      };
      
      const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
      events.forEach(event => {
        document.addEventListener(event, load, { once: true, passive: true });
      });
      
      setTimeout(load, 3000);
    };
    
    // Enable smooth scrolling
    const enableSmoothScrolling = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };
    
    // Optimize font loading
    const optimizeFontLoading = () => {
      const fonts = [
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont'
      ];
      
      fonts.forEach(font => {
        if (document.fonts && document.fonts.load) {
          document.fonts.load(`1em ${font}`).catch(() => {
            // Font loading failed, but we continue with fallbacks
          });
        }
      });
    };
    
    // Run optimizations
    preloadCriticalResources();
    optimizeImages();
    preventLayoutShift();
    optimizeThirdPartyScripts();
    enableSmoothScrolling();
    optimizeFontLoading();
    
    // Clean up on unmount
    return () => {
      // Remove preload links to free up memory
      const preloadLinks = document.querySelectorAll('link[rel="preload"]');
      preloadLinks.forEach(link => {
        if (link.getAttribute('href')?.includes('/images/')) {
          link.remove();
        }
      });
    };
  }, []);
  
  return null;
};

export default PerformanceOptimizer;