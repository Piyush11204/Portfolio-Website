import { useEffect } from 'react';

const ScrollManager = () => {
  useEffect(() => {
    // Smooth scroll to sections with enhanced UX
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          const headerOffset = 80; // Adjust based on your header height
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Add click listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });
    
    // Scroll progress indicator
    const createScrollIndicator = () => {
      let progressBar = document.getElementById('scroll-progress');
      
      if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress';
        progressBar.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 0%;
          height: 3px;
          background: linear-gradient(90deg, #8b5cf6, #a855f7);
          z-index: 9999;
          transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
      }
    };
    
    const updateScrollProgress = () => {
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
      }
    };
    
    // Back to top button
    const createBackToTopButton = () => {
      let backToTopBtn = document.getElementById('back-to-top');
      
      if (!backToTopBtn) {
        backToTopBtn = document.createElement('button');
        backToTopBtn.id = 'back-to-top';
        backToTopBtn.innerHTML = '↑';
        backToTopBtn.setAttribute('aria-label', 'Back to top');
        backToTopBtn.style.cssText = `
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.9);
          color: white;
          border: none;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.3);
        `;
        
        backToTopBtn.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
        
        backToTopBtn.addEventListener('mouseenter', () => {
          backToTopBtn!.style.transform = 'scale(1.1)';
          backToTopBtn!.style.background = 'rgba(139, 92, 246, 1)';
        });
        
        backToTopBtn.addEventListener('mouseleave', () => {
          backToTopBtn!.style.transform = 'scale(1)';
          backToTopBtn!.style.background = 'rgba(139, 92, 246, 0.9)';
        });
        
        document.body.appendChild(backToTopBtn);
      }
    };
    
    const toggleBackToTopButton = () => {
      const backToTopBtn = document.getElementById('back-to-top');
      if (backToTopBtn) {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        
        if (scrollTop > 300) {
          backToTopBtn.style.opacity = '1';
          backToTopBtn.style.visibility = 'visible';
        } else {
          backToTopBtn.style.opacity = '0';
          backToTopBtn.style.visibility = 'hidden';
        }
      }
    };
    
    // Initialize components
    createScrollIndicator();
    createBackToTopButton();
    
    // Scroll event handler
    const handleScroll = () => {
      updateScrollProgress();
      toggleBackToTopButton();
    };
    
    // Throttled scroll handler for better performance
    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Add scroll listener
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    // Keyboard navigation enhancement
    const handleKeyboardNavigation = (e: KeyboardEvent) => {
      // Home key - scroll to top
      if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
      // End key - scroll to bottom
      if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({ 
          top: document.documentElement.scrollHeight, 
          behavior: 'smooth' 
        });
      }
      
      // Page Up/Down for smooth scrolling
      if (e.key === 'PageUp' || e.key === 'PageDown') {
        e.preventDefault();
        const scrollAmount = window.innerHeight * 0.8;
        const direction = e.key === 'PageUp' ? -1 : 1;
        
        window.scrollBy({
          top: scrollAmount * direction,
          behavior: 'smooth'
        });
      }
    };
    
    // Add keyboard listener
    window.addEventListener('keydown', handleKeyboardNavigation);
    
    // Cleanup function
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      
      window.removeEventListener('scroll', throttledScrollHandler);
      window.removeEventListener('keydown', handleKeyboardNavigation);
      
      // Clean up created elements
      const progressBar = document.getElementById('scroll-progress');
      const backToTopBtn = document.getElementById('back-to-top');
      
      if (progressBar) progressBar.remove();
      if (backToTopBtn) backToTopBtn.remove();
    };
  }, []);
  
  return null;
};

export default ScrollManager;