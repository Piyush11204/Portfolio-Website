import React, { useEffect, useState } from "react";
import "./styles/About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "3+", label: "Years Coding", icon: "💻" },
    { number: "20+", label: "Projects", icon: "🚀" },
    { number: "10+", label: "Technologies", icon: "⚡" },
    { number: "5+", label: "Hackathons", icon: "🏆" }
  ];

  const highlights = [
    {
      title: "Deputy Tech Head",
      subtitle: "Hackathon & C3 Committee",
      icon: "🎯",
    },
    {
      title: "MERN Stack Developer",
      subtitle: "Full-Stack Enthusiast",
      icon: "🌟",
    },
    {
      title: "VCET Student",
      subtitle: "IT Engineering",
      icon: "🎓",
    }
  ];

  return (
    <div className="about-section" id="about">
      <div className={`about-container ${isVisible ? 'fade-in-visible' : ''}`}>
        
        {/* Main About Content */}
        <div className="about-content">
          <div className="about-header">
            <h3>About Me</h3>
            <div className="header-line"></div>
          </div>
          
          <div className="about-text">
            <p>
              I'm <span className="highlight">Piyush Krishnadutta Yadav</span>, a passionate third-year IT student at VCET, 
              serving as Deputy Tech Head for Hackathons & C3. I specialize in full-stack development 
              with expertise in the <span className="highlight">MERN stack, Next.js, GraphQL, and AI/ML</span> technologies.
            </p>
            
            <p>
              My journey spans across web development, system automation, and real-time applications. 
              I'm enthusiastic about creating innovative solutions that bridge cutting-edge technology 
              with practical applications.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="highlight-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="highlight-gradient"></div>
                <div className="highlight-content">
                  <span className="highlight-icon">{item.icon}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="stats-container">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-item"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <span className="stat-icon">{stat.icon}</span>
                <h4>{stat.number}</h4>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
