import "./App.css";
import { useEffect } from "react";
import MainContainer from "./components/MainContainer";
import SEO from "./components/SEO";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import ScrollManager from "./components/ScrollManager";
import ErrorBoundary from "./components/ErrorBoundary";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";

const App = () => {
  useEffect(() => {
    // Kill all GSAP timelines and animations
    if (window.gsap) {
      window.gsap.killTweensOf("*");
      window.gsap.set("*", { clearProps: "all" });
    }

    // Force unlock scroll
    const unlockScroll = () => {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'relative';
      document.body.style.transform = 'none';
      document.body.style.height = 'auto';
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.height = 'auto';
      
      // Remove any scroll lock classes
      document.body.classList.remove('no-scroll', 'scroll-locked', 'overflow-hidden');
      document.documentElement.classList.remove('no-scroll', 'scroll-locked', 'overflow-hidden');
      
      // Remove any GSAP scroll containers
      const smoothWrapper = document.getElementById('smooth-wrapper');
      const smoothContent = document.getElementById('smooth-content');
      if (smoothWrapper) smoothWrapper.remove();
      if (smoothContent) smoothContent.remove();
      
      // Force remove any inline styles that might lock scroll
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        const element = el as HTMLElement;
        if (element.style.overflow === 'hidden' && element.tagName !== 'IMG') {
          element.style.overflow = 'visible';
        }
        if (element.style.position === 'fixed' && !element.classList.contains('cursor')) {
          element.style.position = 'relative';
        }
      });
    };

    // Run immediately and after a short delay
    unlockScroll();
    setTimeout(unlockScroll, 100);
    setTimeout(unlockScroll, 500);
    
    // Also run on window load
    window.addEventListener('load', unlockScroll);
    
    return () => {
      window.removeEventListener('load', unlockScroll);
    };
  }, []);

  return (
    <ErrorBoundary>
      <SEO />
      <PerformanceOptimizer />
      <ScrollManager />
      <AccessibilityEnhancer />
      <MainContainer />
    </ErrorBoundary>
  );
};

export default App;
