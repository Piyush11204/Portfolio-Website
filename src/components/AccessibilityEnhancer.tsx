import { useEffect } from 'react';

const AccessibilityEnhancer = () => {
  useEffect(() => {
    // Add focus management for better keyboard navigation
    const handleFocusVisible = () => {
      // Add focus-visible polyfill behavior
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('using-keyboard');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('using-keyboard');
      });
    };

    // Enhance link accessibility
    const enhanceLinks = () => {
      const links = document.querySelectorAll('a[href^="http"]:not([target])');
      links.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        
        // Add screen reader text for external links
        if (!link.querySelector('.sr-only')) {
          const srText = document.createElement('span');
          srText.className = 'sr-only';
          srText.textContent = ' (opens in new tab)';
          link.appendChild(srText);
        }
      });
    };

    // Add skip to main content link
    const addSkipLink = () => {
      if (!document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 10000;
          font-weight: bold;
        `;
        
        skipLink.addEventListener('focus', () => {
          skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
          skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Ensure main content has ID
        const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
        if (mainContent && !mainContent.id) {
          mainContent.id = 'main';
        }
      }
    };

    // Add reduced motion support
    const handleReducedMotion = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const toggleMotion = (e: MediaQueryListEvent | MediaQueryList) => {
        if (e.matches) {
          document.documentElement.style.setProperty('--animation-duration', '0.01ms');
          document.documentElement.style.setProperty('--transition-duration', '0.01ms');
          document.body.classList.add('reduce-motion');
        } else {
          document.documentElement.style.removeProperty('--animation-duration');
          document.documentElement.style.removeProperty('--transition-duration');
          document.body.classList.remove('reduce-motion');
        }
      };
      
      toggleMotion(prefersReducedMotion);
      prefersReducedMotion.addEventListener('change', toggleMotion);
      
      return () => prefersReducedMotion.removeEventListener('change', toggleMotion);
    };

    // Add high contrast support
    const handleHighContrast = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      
      const toggleContrast = (e: MediaQueryListEvent | MediaQueryList) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };
      
      toggleContrast(prefersHighContrast);
      prefersHighContrast.addEventListener('change', toggleContrast);
      
      return () => prefersHighContrast.removeEventListener('change', toggleContrast);
    };

    // Initialize all enhancements
    handleFocusVisible();
    enhanceLinks();
    addSkipLink();
    const removeMotionListener = handleReducedMotion();
    const removeContrastListener = handleHighContrast();

    // Add ARIA live regions for dynamic content updates
    const addLiveRegions = () => {
      if (!document.querySelector('#announcements')) {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'announcements';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      }
    };

    addLiveRegions();

    // Cleanup function
    return () => {
      if (removeMotionListener) removeMotionListener();
      if (removeContrastListener) removeContrastListener();
    };
  }, []);

  // Add screen reader only styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }

      .using-keyboard *:focus {
        outline: 2px solid #60a5fa !important;
        outline-offset: 2px !important;
      }

      .reduce-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }

      .high-contrast {
        filter: contrast(2) !important;
      }

      .high-contrast img,
      .high-contrast video {
        filter: contrast(1) !important;
      }

      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }

      @media (prefers-contrast: high) {
        * {
          text-shadow: none !important;
          box-shadow: none !important;
        }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;