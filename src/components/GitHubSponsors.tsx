import { useState, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';

const GitHubSponsors = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="sponsors" 
      style={{ 
        padding: '4rem 2rem 2rem 2rem', 
        background: 'transparent',
        maxWidth: '800px',
        margin: '0 auto'
      }}
    >
      <div 
        style={{
          textAlign: 'center',
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s ease'
        }}
      >
        {/* Simple Header */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '0.75rem', 
          marginBottom: '2rem' 
        }}>
          <Heart style={{ width: '1.5rem', height: '1.5rem', color: '#ec4899' }} />
          <h3 style={{ 
            color: 'white', 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            margin: 0 
          }}>
            Support My Work
          </h3>
        </div>

        {/* GitHub Sponsors Iframe */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '1rem',
          padding: '1.5rem',
          border: '1px solid rgba(75, 85, 99, 0.3)',
          marginBottom: '1rem'
        }}>
          <iframe 
            src="https://github.com/sponsors/Piyush11204/card" 
            title="Sponsor Piyush11204" 
            height="225" 
            width="100%" 
            style={{
              border: 'none',
              borderRadius: '0.5rem',
              maxWidth: '600px',
              margin: '0 auto',
              display: 'block'
            }}
          />
        </div>

        {/* Simple Thank You */}
        <p style={{ 
          color: '#9ca3af', 
          fontSize: '0.875rem',
          margin: 0
        }}>
          Thank you for supporting open source! 💜
        </p>
      </div>
    </section>
  );
};

export default GitHubSponsors;