import "./styles/Work.css";
import WorkImage from "./WorkImage";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Learning Sphere",
      category: "AI-Powered LMS",
      description: "Full-stack MERN-based Learning Management System with JWT + Google reCAPTCHA authentication, AI-driven adaptive exams, and gamification features.",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML", "JWT", "reCAPTCHA"],
      gitUrl: "https://learningsphere-1fgj.onrender.com/",
      websiteUrl: "https://learningsphere-1fgj.onrender.com/",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      tags: ["AI/ML", "LMS", "MERN"]
    },
    {
      id: 2,
      title: "BreathEasy - Smoking Cessation App",
      category: "AI/ML Flutter App",
      description: "AI-driven platform analyzing smoking habits with personalized cessation reports, interactive games, and behavioral analysis.",
      technologies: ["Flutter", "AI/ML", "NLP", "Firebase", "Dart"],
      gitUrl: "https://github.com/Piyush11204/BreathEasy",
      websiteUrl: "https://github.com/Piyush11204/BreathEasy",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      tags: ["AI/ML", "Health", "Flutter"]
    },
    {
      id: 3,
      title: "EasyYoga - AI Pose Correction",
      category: "AI/ML Web App",
      description: "AI-powered yoga pose analysis with real-time corrections, video tutorials, and personalized diet plans using computer vision.",
      technologies: ["React", "AI/ML", "Computer Vision", "OAuth", "Node.js"],
      gitUrl: "https://easy-yoga.vercel.app/",
      websiteUrl: "https://easy-yoga.vercel.app/",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
      tags: ["AI/ML", "Yoga", "Computer Vision"]
    },
    {
      id: 4,
      title: "StackPop Job Portal",
      category: "MERN Stack",
      description: "Live job portal platform with authentication, resume uploads, admin dashboard, and advanced filtering for internships and jobs.",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Multer"],
      gitUrl: "https://github.com/lsoys/StackPop-Jobs",
      websiteUrl: "https://stackpop.tech/",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      tags: ["Jobs", "MERN", "Platform"]
    },
    {
      id: 5,
      title: "MigooAI Frontend",
      category: "React Frontend",
      description: "Frontend development for Israeli client's AI-driven content generation platform with dynamic user interfaces and smooth UX.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "AI APIs"],
      gitUrl: "https://github.com/lsoys/migooai",
      websiteUrl: "https://migooai.com/dashboard",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["AI", "Frontend", "React"]
    },
    {
      id: 6,
      title: "Cricket Card Game",
      category: "MERN Stack Game",
      description: "Real-time multiplayer cricket card game with dynamic scoring, leaderboard logic, and engaging gameplay mechanics.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
      gitUrl: "https://github.com/lsoys/criket-card-game",
      websiteUrl: "https://criket-card-game-1.onrender.com/",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop",
      tags: ["Gaming", "MERN", "Real-time"]
    },
    {
      id: 7,
      title: "Velvikx - Furniture E-commerce",
      category: "MERN Stack",
      description: "Full-stack eCommerce platform with multi-category products, secure payments (Razorpay/UPI/COD), enhanced user engagement by 45%.",
      technologies: ["React", "Node.js", "MongoDB", "Razorpay", "Express"],
      gitUrl: "https://github.com/lsoys/velvikx",
      websiteUrl: "https://velvikx.com/",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      tags: ["E-commerce", "MERN", "Payments"]
    },
    {
      id: 8,
      title: "Fonto - Typography Platform",
      category: "MERN Stack",
      description: "Typography and font management platform with modern UI and comprehensive font library for designers and developers.",
      technologies: ["React", "Node.js", "MongoDB", "CSS3", "Express"],
      gitUrl: "https://github.com/lsoys/fonto",
      websiteUrl: "https://fonto.in/",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&h=400&fit=crop",
      tags: ["Typography", "Design", "MERN"]
    },
    {
      id: 9,
      title: "Plants E-commerce",
      category: "MERN Stack",
      description: "Beautiful nursery website for plant enthusiasts with shopping cart, payment integration, and plant care guides.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
      gitUrl: "https://github.com/Piyush11204/PlantsEcom",
      websiteUrl: "https://plantsecom.onrender.com/",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      tags: ["E-commerce", "Plants", "MERN"]
    },
    {
      id: 10,
      title: "TechConnect Portfolio",
      category: "Next.js",
      description: "Personal freelancer website showcasing technical skills, project portfolio, and professional services.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      gitUrl: "https://github.com/Piyush11204/TechConnect",
      websiteUrl: "https://tech-connect-gray.vercel.app/",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      tags: ["Portfolio", "Next.js", "Freelance"]
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container">
        <div className="work-header">
          <h2 className="work-title">
            My <span className="work-title-accent">Projects</span>
          </h2>
          <p className="work-subtitle">
            20+ Full-Stack Projects | MERN Stack | AI/ML | Next.js | Flutter
          </p>
        </div>
        
        <div className="work-horizontal-scroll">
          <div className="work-horizontal-container">
            {projects.map((project) => (
              <div className="work-card" key={project.id}>
                
                <WorkImage 
                  image={project.image} 
                  alt={project.title}
                  link={project.websiteUrl}
                />
                
                <div className="work-content">
                  <div className="work-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="work-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="work-project-title">{project.title}</h3>
                  <p className="work-category">{project.category}</p>
                  <p className="work-description">{project.description}</p>
                  
                  <div className="work-tech">
                    <h4>Technologies:</h4>
                    <div className="work-tech-list">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="work-tech-item">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="work-links">
                    {project.gitUrl && (
                      <a 
                        href={project.gitUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="work-link work-link-git"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {project.websiteUrl && (
                      <a 
                        href={project.websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="work-link work-link-live"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
