'use client';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove('what-noTouch');
          container.addEventListener('click', () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener('click', () => handleClick(container));
        }
      });
    };
  }, []);

  const handleClick = (container: HTMLDivElement) => {
    container.classList.toggle('what-content-active');
    container.classList.remove('what-sibling');
    if (container.parentElement) {
      const siblings = Array.from(container.parentElement.children);
      siblings.forEach((sibling) => {
        if (sibling !== container) {
          sibling.classList.remove('what-content-active');
          sibling.classList.toggle('what-sibling');
        }
      });
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen max-h-screen overflow-hidden relative z-[1] w-[var(--cWidth)] max-w-[1920px] mx-auto sm:h-auto sm:py-[50px]">
      <div className="w-1/2 flex justify-center relative z-[9] sm:w-[500px] sm:max-w-[calc(100%-50px)] sm:mx-auto md:max-w-[calc(100%-25px)] md:mx-0">
        <h2 className="text-[calc(4vw+25px)] leading-[calc(4vw+20px)] font-semibold mr-[10%] mb-[100px] xl:mr-[18%] 2xl:mr-[20%] 3xl:text-[7rem] 3xl:leading-[6.8rem] sm:mb-[50px] sm:text-[55px] sm:leading-[53px]">
          W<span className="italic">HAT</span>
          <div>
            I<span className="text-accentColor"> DO</span>
          </div>
        </h2>
      </div>
      <div className="w-1/2 flex justify-center relative z-[9] sm:w-[500px] sm:max-w-[calc(100%-50px)] sm:mx-auto md:max-w-[calc(100%-25px)] md:mx-0">
        <div className="flex flex-col h-[500px] ml-[200px] relative xl:ml-[50px] 2xl:h-[400px] sm:h-[500px] sm:ml-[-50px] md:h-[450px] md:ml-0">
          <div className="absolute top-1/2 w-full left-0 -translate-y-1/2 h-full max-h-0 overflow-hidden opacity-80 animate-whatBorders">
            <svg className="h-[500px] absolute top-1/2 -translate-y-1/2">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>
          <div
            className="group w-[450px] h-1/3 min-h-[50%] transition-all duration-500 relative p-[50px] box-border what-noTouch hover:min-h-[67%] hover:p-[40px_50px] what-content-active:min-h-[67%] what-content-active:p-[40px_50px] what-sibling:min-h-[33%] what-sibling:p-[10px_50px] xl:w-[400px] xl:p-[30px] xl:hover:p-[20px_30px] xl:what-content-active:p-[20px_30px] xl:what-sibling:p-[10px_30px] 2xl:w-[380px] sm:w-[500px] sm:p-[50px] sm:hover:p-[50px] sm:what-content-active:p-[50px] sm:what-sibling:p-[10px_50px] md:w-full md:p-[30px] md:hover:p-[10px_30px] md:what-content-active:p-[10px_30px] md:what-sibling:p-[5px_30px] animate-whatScale"
            ref={(el) => setRef(el, 0)}
          >
            <div className="absolute top-0 w-full left-1/2 -translate-x-1/2 h-full max-w-0 overflow-hidden opacity-80 animate-whatBorders transition-all duration-500">
              <svg className="absolute left-1/2 -translate-x-1/2 w-[450px]">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="absolute w-[10px] h-[10px] top-[-2px] right-[-2px] border-[4px] border-white border-l-0 border-b-0 opacity-0 animate-whatCorners [animation-delay:0.5s]" />
            <div className="absolute w-[10px] h-[10px] top-[-2px] left-[-2px] border-[4px] border-white border-r-0 border-b-0 opacity-0 animate-whatCorners [animation-delay:0.5s]" />
            <div className="absolute w-[10px] h-[10px] bottom-[-2px] left-[-2px] border-[4px] border-white border-t-0 border-r-0 opacity-0 animate-whatCorners [animation-delay:0.5s]" />
            <div className="absolute w-[10px] h-[10px] bottom-[-2px] right-[-2px] border-[4px] border-white border-l-0 border-t-0 opacity-0 animate-whatCorners [animation-delay:0.5s]" />
            <div className="h-full overflow-hidden opacity-0 animate-whatFlicker [animation-delay:1s]">
              <h3 className="text-[35px] tracking-[1px] m-0 xl:text-[28px] md:text-[25px]">FULL-STACK DEVELOPMENT</h3>
              <h4 className="font-light tracking-[1px] m-0 text-sm opacity-30">Building Modern Web Applications</h4>
              <p className="text-sm leading-[18px] font-light tracking-[0.7px] xl:text-[13px] md:text-[11px]">
                Creating responsive, scalable web applications using cutting-edge technologies. 
                Specializing in MERN stack development with focus on performance and user experience.
              </p>
              <h5 className="font-light opacity-50 text-xs tracking-[1px] font-geist mb-[5px] md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 md:what-content-active:opacity-100">Technologies & Tools</h5>
              <div className="flex flex-wrap gap-[5px] md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 md:what-content-active:opacity-100">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Tailwind CSS', 'Three.js'].map((tag) => (
                  <div key={tag} className="text-[13px] font-normal px-[7px] py-[2px] bg-white/15 border border-white/50 rounded-[30px] xl:text-[12px] md:text-[11px]">
                    {tag}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-5 right-5 w-[25px] h-[25px] border border-white">
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] border-l border-b border-white w-[10px] h-[10px] transition-transform duration-500 group-hover:-translate-y-[20%] group-hover:rotate-[-225deg] what-content-active:-translate-y-[20%] what-content-active:rotate-[-225deg]" />
              </div>
            </div>
          </div>
          <div
            className="group w-[450px] h-1/3 min-h-[50%] transition-all duration-500 relative p-[50px] box-border what-noTouch hover:min-h-[67%] hover:p-[40px_50px] what-content-active:min-h-[67%] what-content-active:p-[40px_50px] what-sibling:min-h-[33%] what-sibling:p-[10px_50px] xl:w-[400px] xl:p-[30px] xl:hover:p-[20px_30px] xl:what-content-active:p-[20px_30px] xl:what-sibling:p-[10px_30px] 2xl:w-[380px] sm:w-[500px] sm:p-[50px] sm:hover:p-[50px] sm:what-content-active:p-[50px] sm:what-sibling:p-[10px_50px] md:w-full md:p-[30px] md:hover:p-[10px_30px] md:what-content-active:p-[10px_30px] md:what-sibling:p-[5px_30px] animate-whatScale"
            ref={(el) => setRef(el, 1)}
          >
            <div className="absolute top-0 w-full left-1/2 -translate-x-1/2 h-full max-w-0 overflow-hidden opacity-80 animate-whatBorders transition-all duration-500">
              <svg className="absolute left-1/2 -translate-x-1/2 w-[450px]">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="absolute w-[10px] h-[10px] top-[-2px] right-[-2px] border-[4px] border-white border-l-0 border-b-0 opacity-0 animate-whatCorners [animation-delay:0.5s]" />
            <div className="absolute w-[10px] h-[10px] top-[-2px] left-[-2px] border-[4px] border-white border-r-0 border-b-0 opacity-0 animate-whatCorners [animation-delay:0.5s]" />
            <div className="absolute w-[10px] h-[10px] bottom-[-2px] left-[-2px] border-[4px] border-white border-t-0 border-r-0 opacity-0 animate-whatCorners [animation-delay:0.5s]" />
            <div className="absolute w-[10px] h-[10px] bottom-[-2px] right-[-2px] border-[4px] border-white border-l-0 border-t-0 opacity-0 animate-whatCorners [animation-delay:0.5s]" />
            <div className="h-full overflow-hidden opacity-0 animate-whatFlicker [animation-delay:1s]">
              <h3 className="text-[35px] tracking-[1px] m-0 xl:text-[28px] md:text-[25px]">UI/UX DESIGN</h3>
              <h4 className="font-light tracking-[1px] m-0 text-sm opacity-30">Crafting Digital Experiences</h4>
              <p className="text-sm leading-[18px] font-light tracking-[0.7px] xl:text-[13px] md:text-[11px]">
                Designing intuitive user interfaces and seamless user experiences. 
                From wireframes to interactive prototypes, creating designs that users love.
              </p>
              <h5 className="font-light opacity-50 text-xs tracking-[1px] font-geist mb-[5px] md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 md:what-content-active:opacity-100">Design Tools & Skills</h5>
              <div className="flex flex-wrap gap-[5px] md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 md:what-content-active:opacity-100">
                {['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Prototyping', 'Wireframing', 'User Research', 'Design Systems', 'Mobile Design'].map((tag) => (
                  <div key={tag} className="text-[13px] font-normal px-[7px] py-[2px] bg-white/15 border border-white/50 rounded-[30px] xl:text-[12px] md:text-[11px]">
                    {tag}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-5 right-5 w-[25px] h-[25px] border border-white">
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] border-l border-b border-white w-[10px] h-[10px] transition-transform duration-500 group-hover:-translate-y-[20%] group-hover:rotate-[-225deg] what-content-active:-translate-y-[20%] what-content-active:rotate-[-225deg]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;