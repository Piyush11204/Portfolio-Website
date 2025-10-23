import { useState, useEffect } from "react";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  Download, 
  ExternalLink, 
  Code, 
  Zap,
  ArrowRight,
  MapPin,
  Calendar,
  Settings,
  Terminal
} from "lucide-react";

interface LandingProps {
  children?: React.ReactNode;
}

const Landing = ({ children }: LandingProps) => {
  const abilities = [
    "Full-Stack Developer  ",
    "AI/ML Enthusiast  ",
    "MERN Enthusiast  ",
    "UI/UX Designer  ",
    "System Architect  ",
    
    "Code Craftsman  "
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentAbilityIndex, setCurrentAbilityIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  // Typing effect
  useEffect(() => {
    const typingDelay = 100;
    const deleteDelay = 40;
    const pauseDelay = 2500;

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

  const socialLinks = [
    { 
      href: "https://github.com/Piyush11204", 
      icon: Github, 
      label: "GitHub",
      color: "hover:text-purple-400"
    },
    { 
      href: "https://linkedin.com/in/piyush-yadav-5a2b10240", 
      icon: Linkedin, 
      label: "LinkedIn",
      color: "hover:text-purple-400"
    },
    { 
      href: "https://twitter.com/piyush_yadav11", 
      icon: Twitter, 
      label: "Twitter",
      color: "hover:text-purple-400"
    },
    { 
      href: "https://instagram.com/piyush_yadav_11", 
      icon: Instagram, 
      label: "Instagram",
      color: "hover:text-purple-400"
    },
    { 
      href: "mailto:piyushyadav11204@gmail.com", 
      icon: Mail, 
      label: "Email",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Profile Image and Social Links (Top on Mobile) */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Social Links */}
              <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 space-y-3 lg:block hidden">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg flex items-center justify-center text-gray-500 ${link.color} transition-all hover:scale-110 hover:bg-gray-800/80 hover:border-purple-500/50 shadow-lg`}
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
              {/* Mobile Social Links (Displayed at the top) */}
              <div className="flex justify-center gap-3 mb-6 lg:hidden">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg flex items-center justify-center text-gray-500 ${link.color} transition-all hover:scale-110 hover:bg-gray-800/80 hover:border-purple-500/50 shadow-lg`}
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Profile Image Container */}
              <div
                className="relative"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
              >
                {/* Steel Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-lg p-1 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg animate-pulse-slow"></div>
                  <div className="relative w-full h-full bg-black rounded-lg"></div>
                </div>

                {/* Profile Image */}
                <div
                  className="relative w-80 h-80 rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-300 border-2 border-gray-700"
                  style={{
                    transform: `
                      perspective(1000px)
                      rotateY(${mousePosition.x * 12}deg)
                      rotateX(${-mousePosition.y * 12}deg)
                      translateZ(${Math.abs(mousePosition.x * 20)}px)
                    `,
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dl16vvgyy/image/upload/v1734715411/Piyush_pq33tm.jpg"
                    alt="Piyush Krishnadutt Yadav"
                    className="w-full h-full object-cover filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-gray-900/30"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-transparent"></div>
                </div>

                {/* Floating Tech Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center shadow-xl border border-gray-700 animate-float">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center shadow-xl border border-gray-700 animate-float-delayed">
                  <Settings className="w-8 h-8 text-purple-400 animate-spin-slow" />
                </div>

                {/* Corner Brackets */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-purple-500"></div>
           
            
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-purple-500"></div>
              </div>
            </div>
          </div>

          {/* Left Content (Text Content - Below on Mobile) */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* System Status */}
            <div className="flex items-center gap-3 text-gray-500 mb-6">
              <Terminal className="w-5 h-5" />
              <span className="text-sm font-mono tracking-wider">SYSTEM_ONLINE</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
              </div>
            </div>

            {/* Greeting */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-black tracking-tight leading-none">
                <span className="bg-gradient-to-r from-gray-100 via-white to-gray-300 bg-clip-text text-transparent">
                  PIYUSH 
                </span>
                <span className="bg-gradient-to-r px-3 from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
                  YADAV
                </span>
              </h1>
            </div>

            {/* Typing Animation */}
            <div className="flex items-center gap-3 text-xl bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
              <Code className="w-6 h-6 text-purple-400 animate-pulse" />
              <span className="text-white font-mono tracking-wide">
                {displayText}
                <span className="text-purple-400 animate-pulse">█</span>
              </span>
            </div>

            {/* Current Role */}
            <div className="flex items-center gap-2 text-lg">
              <div className="flex items-center gap-3 bg-gradient-to-r from-gray-900 to-black border border-gray-800 px-6 py-3 rounded-lg shadow-lg">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300 font-medium">DEPLOYED_AT</span>
                <a
                  href="https://www.linkedin.com/company/lsoysapps/posts/?feedView=all"
                  className="text-white hover:text-purple-400 font-bold underline decoration-gray-600 hover:decoration-purple-400 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LSOYS_APPS_&_GAMES
                </a>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 shadow-xl">
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                <span className="text-purple-400 font-mono">[PROFILE_DATA]</span> Final Year IT student at 
                <span className="text-white font-semibold"> Vidyavardhini's College Of Engineering & Technology (VCET)</span>, 
                specializing in Information Technology with CyberSecurity Honors. Core competencies include 
                <span className="text-white font-semibold"> MERN_STACK</span>, 
                <span className="text-white font-semibold"> AI/ML</span>, and 
                <span className="text-white font-semibold"> NEXT.JS</span> frameworks. 
                Mission: Transform complex problems into elegant digital solutions through innovative technology.
              </p>
            </div>

            {/* System Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-mono">LOCATION</span>
                </div>
                <p className="text-white font-semibold font-mono">MUMBAI_IN</p>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-mono">RUNTIME</span>
                </div>
                <p className="text-white font-semibold font-mono">10M_21D</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="/Temp-Resume-Oct-10.pdf" 
                download="Piyush_Yadav_Resume.pdf"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg border border-purple-500 hover:border-purple-400"
              >
                <Download className="w-5 h-5" />
                <span className="font-mono">DOWNLOAD_CV</span>
              </a>
              <button className="bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 text-gray-200 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105 border border-gray-700 hover:border-gray-600">
                <span className="font-mono">VIEW_PROJECTS</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Status Indicator */}
            <div className="inline-flex items-center gap-3 bg-gray-900/80 border border-gray-800 text-gray-300 px-6 py-3 rounded-lg shadow-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              <span className="font-mono text-sm">STATUS: AVAILABLE_FOR_HIRE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Steel Shining Effect Styles */}
      <style>{`
        @keyframes steel3DShine {
          0% { 
            background-position: -200% 0;
            filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.3));
          }
          25% { 
            background-position: -100% 0;
            filter: drop-shadow(0 0 15px rgba(168, 85, 247, 0.4));
          }
          50% { 
            background-position: 0% 0;
            filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.5));
          }
          75% { 
            background-position: 100% 0;
            filter: drop-shadow(0 0 15px rgba(168, 85, 247, 0.4));
          }
          100% { 
            background-position: 200% 0;
            filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.3));
          }
        }

        @keyframes metalGloss {
          0% { 
            transform: translateX(-100%) skewX(-15deg);
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(300%) skewX(-15deg);
            opacity: 0;
          }
        }
        
        @keyframes animate-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes animate-float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: animate-float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: animate-float-delayed 3s ease-in-out infinite 1.5s;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .steel-shine-text {
          position: relative;
          background: linear-gradient(
            135deg,
            #1a1a1a 0%,
            #4a4a4a 15%,
            #9ca3af 30%,
            #ffffff 45%,
            #e5e7eb 50%,
            #ffffff 55%,
            #9ca3af 70%,
            #4a4a4a 85%,
            #1a1a1a 100%
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: steel3DShine 4s ease-in-out infinite;
          text-shadow: 
            1px 1px 0px #374151,
            2px 2px 0px #1f2937,
            3px 3px 0px #111827,
            4px 4px 8px rgba(0, 0, 0, 0.8);
        }

        .steel-shine-text::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255, 255, 255, 0.8) 45%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.8) 55%,
            transparent 75%
          );
          animation: metalGloss 3s ease-in-out infinite;
          z-index: 1;
        }
        
        .steel-text {
          text-shadow: 
            0 0 20px rgba(168, 85, 247, 0.8),
            0 0 40px rgba(168, 85, 247, 0.4),
            2px 2px 4px rgba(0, 0, 0, 0.8);
          position: relative;
        }
      `}</style>

      {children}
    </div>
  );
};

export default Landing;