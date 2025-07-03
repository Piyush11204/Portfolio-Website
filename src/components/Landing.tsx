import React, { useState, useEffect } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: { children?: React.ReactNode }) => {
  const abilities = [
    "Full-Stack Developer  ",
    "MERN Enthusiast  ",
    "UI/UX Designer  ",
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentAbilityIndex, setCurrentAbilityIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    const typingDelay = 150;
    const deleteDelay = 50;
    const pauseDelay = 1000;

    const type = () => {
      const currentText = abilities[currentAbilityIndex];

      if (!isDeleting) {
        if (displayText !== currentText) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
          setCursorPosition(displayText.length + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      } else {
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentAbilityIndex((prev) => (prev + 1) % abilities.length);
        } else {
          setDisplayText(displayText.slice(0, -1));
          setCursorPosition(displayText.length - 1);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deleteDelay : typingDelay);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentAbilityIndex, abilities]);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          {/* Left side - Text Content */}
          <div className="landing-content">
            <div className="landing-intro">
              <h2>Hello! I'm</h2>
              <h1 className="glitch-text" data-text="Piyush Krishnadutt Yadav">
                PIYUSH KRISHNADUTT
                <br />
                <span>YADAV</span>
              </h1>
            </div>

            <div className="landing-info">
              <div className="typing-container">
                <span className="typing-text">{displayText}</span>
                <span className="typing-cursor">|</span>
              </div>

              <div className="job-info">
                Intern at{" "}
                <a
                  href="https://www.linkedin.com/company/lsoysapps/posts/?feedView=all"
                  className="company-link"
                >
                  Lsoys Apps and Games
                </a>
              </div>

              <p className="hero-description">
                I'm a passionate third-year IT student at VCET, turning caffeine
                into code one project at a time. My journey in web development is
                driven by an insatiable curiosity to create innovative digital
                experiences. I specialize in the MERN stack and Next.js,
                constantly pushing the boundaries of what's possible in web
                development.
              </p>

              <div className="hero-badge">
                <span>🚀 Available for Work</span>
              </div>
            </div>
          </div>

          {/* Right side - Image with 3D effect */}
          <div className="profile-image-container">
            <div
              className="profile-image-wrapper"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
            >
              <div
                className="profile-image"
                style={{
                  transform: `
                    rotateY(${mousePosition.x * 30}deg)
                    rotateX(${-mousePosition.y * 30}deg)
                  `,
                }}
              >
                <img
                  src="https://res.cloudinary.com/dl16vvgyy/image/upload/v1734715411/Piyush_pq33tm.jpg"
                  alt="Piyush Krishnadutt Yadav"
                />
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
