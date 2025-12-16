import { ThemeProvider } from "./contexts/theme-provider";
import { Skills } from "./components/sections/Skills/skills";
import { Hero } from "./components/sections/Hero/hero";
import { NavBar } from "./components/sections/Navbar/navbar";
import { Projects } from "./components/sections/Projects/projects";
import { Contact } from "./components/sections/Contact/contact";
import { About } from "./components/sections/About/about";
import { Experience } from "./components/sections/Experience/experience";
import PreLoader from "./components/ui/animations/preloader/preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during animation
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Force scroll to top with multiple methods to ensure it works
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Re-enable scrolling after animation
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }, 2500);

    return () => {
      clearTimeout(timer);
      // Ensure scrolling is re-enabled on cleanup
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnimatePresence mode="wait">{isLoading && <PreLoader />}</AnimatePresence>
      <main className="scrollbar">
        <NavBar />
        <section id="hero">
          <Hero />
        </section>
        <section className="flex justify-center" id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </ThemeProvider>
  );
};

export default App;
