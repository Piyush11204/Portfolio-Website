import "./styles/Work.css";
import WorkImage from "./WorkImage";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Lsoys - Cricket Card Game",
      category: "MERN Stack",
      description: "Interactive cricket card game with real-time gameplay and user engagement features.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      gitUrl: "https://github.com/lsoys/criket-card-game",
      websiteUrl: "https://criket-card-game-1.onrender.com/",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop",
      tags: ["Gaming", "MERN"]
    },
    {
      id: 2,
      title: "StackPop Jobs",
      category: "MERN Stack",
      description: "Platform for internships, jobs, and events with advanced filtering and application tracking.",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      gitUrl: "https://github.com/lsoys/StackPop-Jobs",
      websiteUrl: "https://stackpop.onrender.com/login",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      tags: ["Jobs", "Platform"]
    },
    {
      id: 3,
      title: "Plants Ecommerce",
      category: "MERN Stack",
      description: "A beautiful nursery website for plant enthusiasts with shopping cart and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      gitUrl: "https://github.com/Piyush11204/PlantsEcom",
      websiteUrl: "https://plantsecom.onrender.com/",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      tags: ["Ecommerce", "Plants"]
    },
    {
      id: 4,
      title: "Report Generator AI",
      category: "Flask",
      description: "AI-powered report generation tool for major projects with customizable templates.",
      technologies: ["Flask", "Python", "AI/ML", "PostgreSQL"],
      gitUrl: "https://github.com/lsoys/report-generator-ai",
      websiteUrl: "https://reportgen.tech/",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["AI", "Reports"]
    },
    {
      id: 5,
      title: "RentItems.in",
      category: "MERN Stack",
      description: "My first project at Lsoys - a comprehensive rental platform for various items.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      gitUrl: "https://github.com/lsoys/rentitems.in",
      websiteUrl: "https://rentitems.in",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["Rental", "Platform"]
    },
    {
      id: 6,
      title: "Flat Finder",
      category: "MERN Stack",
      description: "Real estate platform for finding and renting flats with advanced search filters.",
      technologies: ["React", "Node.js", "MongoDB", "Maps API"],
      gitUrl: "https://github.com/lsoys/flat-finder",
      websiteUrl: "https://rentify-zeta-liard.vercel.app/",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      tags: ["Real Estate", "Rental"]
    },
    {
      id: 7,
      title: "Domain Fit",
      category: "Next.js",
      description: "My first site with 170+ users - domain name suggestion and availability checker.",
      technologies: ["Next.js", "React", "Vercel", "API"],
      gitUrl: "https://github.com/lsoys/domain-fit",
      websiteUrl: "http://domain-fit.onrender.com",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      tags: ["Domain", "Tool"]
    },
    {
      id: 8,
      title: "Music Link Shortener",
      category: "EJS",
      description: "Automation project for artists to manage and share their music links efficiently.",
      technologies: ["EJS", "Node.js", "Express", "MongoDB"],
      gitUrl: "http://github.com/lsoys/music-link-shortner/",
      websiteUrl: "https://musicflow.tech/",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      tags: ["Music", "Automation"]
    },
    {
      id: 9,
      title: "TechConnect",
      category: "Next.js",
      description: "My freelancer website showcasing technical skills and project portfolio.",
      technologies: ["Next.js", "React", "Tailwind", "Vercel"],
      gitUrl: "https://github.com/Piyush11204/TechConnect",
      websiteUrl: "https://tech-connect-gray.vercel.app/",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      tags: ["Portfolio", "Freelance"]
    },
    {
      id: 10,
      title: "Matrimonial Platform",
      category: "MERN Stack",
      description: "Complete matrimonial website with profile matching and communication features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      gitUrl: "https://github.com/Piyush11204/Matrimonial",
      websiteUrl: "https://matrimonial-1.onrender.com/",
      image: "https://images.unsplash.com/photo-1529634597243-61d4905da2e2?w=600&h=400&fit=crop",
      tags: ["Matrimonial", "Social"]
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container">
        <div className="work-header">
          <h2 className="work-title">
            My <span className="work-title-accent">Work</span>
          </h2>
          <p className="work-subtitle">
            Showcasing my journey through various technologies and domains
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
