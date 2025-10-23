import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BE Information Technology (Honors in CyberSecurity)</h4>
                <h5>Vidyavardhini's College Of Engineering & Technology</h5>
              </div>
              <h3>2022-2026</h3>
            </div>
            <p>
              Currently pursuing Bachelor's degree in Information Technology with Honors in CyberSecurity. 
              Maintaining a CGPA of 7.52 while actively participating in technical committees and hackathons. 
              Serving as Technical Head for Hackathon Committee and Core Coding Committee.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer Intern</h4>
                <h5>Lsoys Apps and Games</h5>
              </div>
              <h3>Feb 2024</h3>
            </div>
            <p>
              Working on 20+ full-stack projects involving MERN, Flask, Next.js, and AI integrations. 
              Built live applications like StackPop Job Portal, Cricket Card Game, and worked as frontend 
              developer for MigooAI. Enhanced user engagement by 45% through modern responsive UI implementations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Leadership & Open Source</h4>
                <h5>Multiple Platforms</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Active contributor to open-source projects with successful pull requests in Hacktoberfest 2024. 
              Leading technical initiatives in college, organizing hackathons, and mentoring fellow students. 
              Continuously learning and implementing cutting-edge technologies in AI/ML and web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
