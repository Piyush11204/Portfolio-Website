import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
// import Cursor from "./Cursor";
import Landing from "./Landing";
// import Navbar from "./Navbar";
// import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setIsDesktopView(window.innerWidth > 1024);
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      {/* <Cursor /> */}
      {/* <SocialIcons /> */}

      <main className="main-content">
      {/* <Navbar /> */}
        <Landing />
        <About />
        <WhatIDo />
        <Career />
        <Work />
        {isDesktopView && (
          <Suspense fallback={<div>Loading Tech Stack...</div>}>
            <TechStack />
          </Suspense>
        )}
        <Contact />
      </main>
    </div>
  );
};

export default MainContainer;
