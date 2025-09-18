import  { useEffect, useState, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      title: "Tech Head",
      subtitle: "Hackathon & C3 Committee",
      icon: "⚡",
      description: "Leading technical initiatives and hackathon events"
    },
    {
      title: "MERN Stack Developer",
      subtitle: "Full-Stack Enthusiast",
      icon: "💻",
      description: "Building scalable web applications with modern tech stack"
    },
    {
      title: "VCET Student",
      subtitle: "IT Engineering",
      icon: "🎓",
      description: "Third-year student specializing in software development"
    }
  ];

  const skills = [
    "React & Next.js",
    "Node.js & Express",
    "MongoDB & PostgreSQL",
    "GraphQL & REST APIs",
    "AI/ML Integration",
    "System Automation"
  ];

  return (
    <div 
      ref={aboutRef}
      className="min-h-screen bg-black text-white py-20 px-6"
      id="about"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <p className="text-xl leading-relaxed text-gray-300">
                I'm <span className="text-white font-semibold">Piyush Krishnadutta Yadav</span>, 
                a passionate third-year IT student at VCET, serving as Deputy Tech Head for Hackathons & C3.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-400">
                I specialize in full-stack development with expertise in the MERN stack, Next.js, GraphQL, 
                and AI/ML technologies. My focus is on creating efficient, scalable solutions that solve real-world problems.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-400">
                My journey spans web development, system automation, and real-time applications. 
                I'm committed to bridging cutting-edge technology with practical implementations.
              </p>
            </div>

            {/* Skills Grid */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-xl font-semibold mb-4 text-white">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-gray-300 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              {[
                { number: "3+", label: "Years Experience" },
                { number: "15+", label: "Projects Completed" },
                { number: "50+", label: "Technologies Used" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 delay-${300 + index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="relative p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-600 transition-all duration-300 hover:bg-gray-800">
                  {/* Left Border Indicator */}
                  <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-white to-gray-600 rounded-l-xl transition-all duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-gray-100 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">
                        {item.subtitle}
                      </p>
                      <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
            <span>Currently exploring new technologies and opportunities</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;