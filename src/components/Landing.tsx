import React, { useState, useEffect } from "react";
import "./styles/Landing.css";

const Landing = () => {
  const abilities = [
    "Full-Stack Developer",
    "MERN Enthusiast",
    "UI/UX Designer"
  ];

  const [displayText, setDisplayText] = useState("Full-Stack Developer");
  const [currentAbilityIndex, setCurrentAbilityIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingDelay = 150;
    const deleteDelay = 50;
    const pauseDelay = 2000;

    const type = () => {
      const currentText = abilities[currentAbilityIndex];

      if (!isDeleting) {
        if (displayText !== currentText) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      } else {
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentAbilityIndex((prev) => (prev + 1) % abilities.length);
        } else {
          setDisplayText(displayText.slice(0, -1));
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deleteDelay : typingDelay);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentAbilityIndex, abilities]);

  return (
    <section className="landing-section" id="home">
      {/* Background decorative circles */}
      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      
      <div className="landing-container">
        <div className="landing-grid">
          
          {/* Left Content */}
          <div className="landing-content">
            {/* Greeting */}
            <div className="greeting-section">
              <div className="greeting-text">
                <span className="wave-emoji">👋</span>
                <h2>Hello! I'm</h2>
              </div>
              
              <h1 className="main-title">
                <span className="first-name">PIYUSH</span>
                <span className="last-name">KRISHNADUTTA YADAV</span>
              </h1>
            </div>
            
            {/* Dynamic Role */}
            <div className="role-section">
              <div className="role-display">
                <span className="role-prefix">I'm a</span>
                <div className="typing-wrapper">
                  <span className="typing-text">{displayText}</span>
                  <span className="typing-cursor">|</span>
                </div>
              </div>
              
              {/* Current Position */}
              <div className="current-position">
                <span className="position-icon">💼</span>
                <span>Currently interning at</span>
                <a
                  href="https://www.linkedin.com/company/lsoysapps/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-link"
                >
                  Lsoys Apps and Games
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="hero-description">
              A passionate third-year IT student at VCET, turning caffeine into code one project at a time. 
              I specialize in the <span className="highlight">MERN stack</span> and{" "}
              <span className="highlight">Next.js</span>, constantly pushing 
              the boundaries of web development with innovative solutions.
            </p>
            
            {/* Action Buttons */}
            <div className="cta-section">
              {/* Availability Badge */}
              <div className="hero-badge">
                <span className="status-dot"></span>
                <span>Available for Work</span>
              </div>
              
              {/* CTA Buttons */}
              <div className="cta-buttons">
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary"
                >
                  About Me
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-secondary"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="profile-section">
            <div className="profile-card">
              <div className="profile-image-wrapper">
                <img
                  src="https://res.cloudinary.com/dl16vvgyy/image/upload/v1734715411/Piyush_pq33tm.jpg"
                  alt="Piyush Krishnadutta Yadav"
                  className="profile-image"
                />
                <div className="profile-glow"></div>
              </div>
              
              {/* Profile Info */}
              <div className="profile-info">
                <div className="info-item">
                  <span>📍</span>
                  <span>Mumbai, India</span>
                </div>
                <div className="info-item">
                  <span>🎓</span>
                  <span>IT Engineering at VCET</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Landing;
