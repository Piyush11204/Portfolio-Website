import { useEffect, useState, useRef } from "react";
import { Github, Star, GitFork, Eye } from "lucide-react";

const GitHubStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [githubData, setGithubData] = useState({
    repos: 0,
    followers: 0,
    following: 0,
    contributions: 0
  });
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fetch GitHub data dynamically
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Piyush11204');
        const data = await response.json();
        setGithubData({
          repos: data.public_repos || 20,
          followers: data.followers || 25,
          following: data.following || 15,
          contributions: 800 // This would need GitHub GraphQL API for exact count
        });
      } catch (error) {
        console.log('GitHub API error:', error);
        // Fallback to static values
        setGithubData({
          repos: 20,
          followers: 25,
          following: 15,
          contributions: 800
        });
      }
    };

    fetchGitHubData();
  }, []);

  const stats = [
    { label: "Public Repos", value: githubData.repos, icon: Github },
    { label: "Followers", value: githubData.followers, icon: Eye },
    { label: "Following", value: githubData.following, icon: Star },
    { label: "Contributions", value: `${githubData.contributions}+`, icon: GitFork }
  ];

  return (
    <div 
      ref={statsRef}
      className="min-h-screen bg-black text-white py-20 px-6"
      id="github-stats"
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
            GitHub Analytics
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto"></div>
        </div>

        {/* Dynamic Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center transition-all duration-300 hover:scale-105">
                <IconComponent className="w-8 h-8 text-white mx-auto mb-3 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Profile Summary */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Profile Summary</h3>
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Piyush11204&theme=tokyonight" 
              alt="GitHub Profile Summary" 
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Contribution Activity */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Contribution Activity</h3>
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://github-readme-activity-graph.vercel.app/graph?username=Piyush11204&theme=tokyo-night&hide_border=true&area=true" 
              alt="GitHub Activity Graph" 
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Language & Repository Stats */}
        <div className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Piyush11204&theme=tokyonight&hide_border=true&layout=compact" 
              alt="Top Languages" 
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://github-readme-stats.vercel.app/api?username=Piyush11204&theme=tokyonight&hide_border=true&show_icons=true&count_private=true" 
              alt="GitHub Stats" 
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* GitHub Trophies */}
        <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-white">GitHub Achievements</h3>
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://github-profile-trophy.vercel.app/?username=Piyush11204&theme=tokyonight&no-frame=true&column=7&margin-w=15&margin-h=15" 
              alt="GitHub Trophies" 
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Contribution Streak */}
        <div className={`mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Contribution Streak</h3>
          <div className="overflow-hidden rounded-lg max-w-2xl mx-auto">
            <img 
              src="https://github-readme-streak-stats.herokuapp.com/?user=Piyush11204&theme=tokyonight&hide_border=true" 
              alt="GitHub Streak" 
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Fun Section */}
        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 text-gray-500 text-sm mb-8">
            <span>⚡ I debug code faster than I debug my life!</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          
          {/* Visitor Counter */}
          <div>
            <img 
              src="https://visitcount.itsvg.in/api?id=Piyush11204&icon=6&color=112" 
              alt="Visitor Count" 
              className="mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;