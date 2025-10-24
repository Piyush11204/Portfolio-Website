import { lazy, PropsWithChildren, Suspense } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Landing from "./Landing";
import Work from "./Work";
import GitHubStats from "./GitHubStats";
import Certifications from "./Certifications";
import GitHubSponsors from "./GitHubSponsors";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {

  return (
    <div
      className="container-main"
      style={{ position: "relative", overflow: "auto" }}
    >
      <main className="main-content" style={{ position: "relative" }}>
        <section style={{ position: "relative", zIndex: 1 }}>
          <Landing>{children}</Landing>
        </section>
        <section style={{ position: "relative", zIndex: 1 }}>
          <About />
        </section>
       
        <section style={{ position: "relative", zIndex: 1 }}>
          <Career />
        </section>
        <section style={{ position: "relative", zIndex: 1 }}>
          <Work />
        </section>
        <section style={{ position: "relative", zIndex: 1 }}>
          <Certifications />
        </section>
        <section style={{ position: "relative", zIndex: 1 }}>
          <Suspense fallback={<div>Loading Tech Stack...</div>}>
            <TechStack />
          </Suspense>
        </section>
        <section style={{ position: "relative", zIndex: 1 }}>
          <GitHubStats />
        </section>
        <section style={{ position: "relative", zIndex: 1 }}>
          <GitHubSponsors />
        </section>
        <section style={{ position: "relative", zIndex: 1 }}>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default MainContainer;
