import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Calendar, Building } from 'lucide-react';
import "./styles/Work.css";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  hours?: string;
  description: string;
  certificateUrl?: string;
  skills: string[];
  image: string;
  tags: string[];
}

const Certifications = () => {
  const [visibleCerts, setVisibleCerts] = useState<number[]>([]);
  const certRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Add custom styles for image hover effect
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .work-image-link:hover img {
        transform: scale(1.05);
      }
      .work-image-link:hover .work-image-overlay {
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "June 21, 2024",
      hours: "25 hours",
      description: "Gained expertise in Python programming, data analysis, and libraries like Pandas and NumPy. Enhanced skills in web scraping, using APIs, and developing code with Jupyter Notebooks for data science and AI applications.",
      certificateUrl: "https://www.coursera.org/account/accomplishments/verify/2HLGV9W732GB",
      skills: ["Python", "Pandas", "NumPy", "Data Science", "AI", "Jupyter", "APIs"],
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop",
      tags: ["Python", "AI", "IBM"]
    },
    {
      id: 2,
      title: "Foundations of User Experience (UX) Design",
      issuer: "Google",
      date: "February 3, 2024",
      hours: "18 hours",
      description: "Gained expertise in user-centered design, accessibility, and practical skills like prototyping and wireframing. Enhanced ability to create impactful user experiences through design sprints and UX research.",
      certificateUrl: "https://www.coursera.org/account/accomplishments/verify/2G3HYKKGMR8W",
      skills: ["UX Design", "Prototyping", "Wireframing", "Design Sprints", "UX Research", "Accessibility"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      tags: ["UX", "Design", "Google"]
    },
    {
      id: 3,
      title: "HacktoberFest 2024",
      issuer: "Digital Ocean",
      date: "October 7, 2024",
      description: "Actively participated in Hacktoberfest, contributing to Open-Source Projects using Next.js and Node.js, with six pull requests successfully merged.",
      certificateUrl: "https://www.holopin.io/@piyush11204#badges",
      skills: ["Open Source", "Next.js", "Node.js", "Git", "GitHub", "Collaboration"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop",
      tags: ["Open Source", "Next.js", "GitHub"]
    },
    {
      id: 4,
      title: "JavaScript, jQuery and React",
      issuer: "Udemy",
      date: "June 26, 2024",
      hours: "13 hours",
      description: "Developed expertise in modern web development techniques, including interactive UI creation and advanced JavaScript concepts.",
      certificateUrl: "https://www.udemy.com/certificate/UC-ce1ba7df-df36-49d6-a2de-af0a46028061/",
      skills: ["JavaScript", "jQuery", "React", "UI Development", "Frontend"],
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
      tags: ["JavaScript", "React", "Frontend"]
    },
    {
      id: 5,
      title: "Blockchain",
      issuer: "Cyfrin Updraft",
      date: "June 2025",
      description: "Comprehensive blockchain development certification covering smart contracts, decentralized applications, and blockchain fundamentals. Credential ID: BBCC-JK/X1TXKZ4IRQ",
      certificateUrl: "https://drive.google.com/file/d/1Lz56G4Gn7Fesw2ADzCkYX22Xt0i5O7VT/view?usp=sharing",
      skills: ["Blockchain", "Smart Contracts", "DApps", "Web3", "Solidity", "Cryptocurrency"],
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop",
      tags: ["Blockchain", "Web3", "Smart Contracts"]
    },
    {
      id: 6,
      title: "Data Analytics Simulation",
      issuer: "Forage",
      date: "February 2025",
      description: "Practical data analytics simulation covering data analysis, visualization, and business intelligence. Hands-on experience with real-world data scenarios. Credential ID: 2v6mET7N3L99fvzns",
      certificateUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_soku3w6rzN64mkpDE_1739110801632_completion_certificate.pdf",
      skills: ["Data Analytics", "Business Intelligence", "Data Visualization", "SQL", "Statistics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Data Analytics", "BI", "Simulation"]
    },
    {
      id: 7,
      title: "Tata Group - Cybersecurity Analyst Job Simulation",
      issuer: "Forage",
      date: "January 2025",
      description: "Comprehensive cybersecurity analyst simulation covering threat detection, security analysis, and incident response. Real-world cybersecurity scenarios and best practices. Credential ID: dtN4Z3e9AYhk2x2Tv",
      certificateUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_soku3w6rzN64mkpDE_1737214960484_completion_certificate.pdf",
      skills: ["Cybersecurity", "Threat Detection", "Security Analysis", "Incident Response", "Risk Assessment"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      tags: ["Cybersecurity", "Tata Group", "Security"]
    },
    {
      id: 8,
      title: "Google Cloud Badges",
      issuer: "Google Cloud Skills Boost",
      date: "December 2023",
      description: "Multiple Google Cloud certifications and badges demonstrating proficiency in cloud computing, infrastructure, and Google Cloud Platform services.",
      certificateUrl: "https://www.cloudskillsboost.google/public_profiles/a645caef-9a86-45bc-94be-790bba741b1e",
      skills: ["Google Cloud", "Cloud Computing", "GCP", "Infrastructure", "DevOps", "Cloud Services"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      tags: ["Google Cloud", "GCP", "Cloud"]
    },
    {
      id: 9,
      title: "Build Your Own Chatbot",
      issuer: "IBM",
      date: "December 2023",
      description: "Hands-on certification in building intelligent chatbots using IBM Watson and AI technologies. Covers natural language processing, conversation design, and chatbot deployment.",
      certificateUrl: "https://www.credly.com/badges/17ff1b5f-15bc-40b7-bd4a-5caee56caacf/linked_in_profile",
      skills: ["Chatbot Development", "IBM Watson", "NLP", "AI", "Conversation Design", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
      tags: ["Chatbot", "IBM Watson", "AI"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCerts(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    certRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="work-section" id="certifications">
      <div className="work-container">
        <div className="work-header">
          <h2 className="work-title">
            My <span className="work-title-accent">Certifications</span>
          </h2>
          <p className="work-subtitle">
            Professional certifications validating my expertise across various technologies and methodologies
          </p>
        </div>

        <div className="work-horizontal-scroll">
          <div className="work-horizontal-container">
            {certifications.map((cert, index) => (
              <div 
                className="work-card" 
                key={cert.id}
                ref={el => certRefs.current[index] = el}
                data-index={index}
                style={{
                  transform: visibleCerts.includes(index) ? 'translateY(0)' : 'translateY(2rem)',
                  opacity: visibleCerts.includes(index) ? 1 : 0,
                  transition: `all 0.8s ease ${index * 0.2}s`
                }}
              >
                <div className="work-image-container">
                  {cert.certificateUrl ? (
                    <a 
                      href={cert.certificateUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="work-image-link"
                      style={{ display: 'block', position: 'relative' }}
                    >
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="work-image"
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                      <div className="work-image-overlay" style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        background: 'rgba(0, 0, 0, 0.7)',
                        borderRadius: '50%',
                        padding: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <ExternalLink style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                      </div>
                    </a>
                  ) : (
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="work-image"
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '8px'
                      }}
                    />
                  )}
                </div>
                
                <div className="work-content">
                  <div className="work-tags">
                    {cert.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="work-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="work-project-title">{cert.title}</h3>
                  <p className="work-category">{cert.issuer}</p>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    fontSize: '0.875rem', 
                    color: '#888888',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar style={{ width: '0.875rem', height: '0.875rem' }} />
                      <span>{cert.date}</span>
                    </div>
                    {cert.hours && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Building style={{ width: '0.875rem', height: '0.875rem' }} />
                        <span>{cert.hours}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="work-description">{cert.description}</p>
                  
                  <div className="work-tech">
                    <h4>Skills:</h4>
                    <div className="work-tech-list">
                      {cert.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="work-tech-item">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="work-links">
                    {cert.certificateUrl && (
                      <a 
                        href={cert.certificateUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="work-link work-link-live"
                      >
                        <ExternalLink style={{ width: '1rem', height: '1rem' }} />
                        Certificate
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

export default Certifications;