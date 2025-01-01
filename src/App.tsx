import { ThemeProvider } from "./contexts/theme-provider";
import { Skills } from "./components/Sections/Skills/skills";
import { Hero } from "./components/Sections/Hero/hero";
import { NavBar } from "./components/Sections/Navbar/navbar";
import { Projects } from "./components/Sections/Projects/projects";
import { Contact } from "./components/Sections/Contact/contact";
import { About } from "./components/Sections/About/about";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="scrollbar">
        <NavBar/>
        <section id="hero">
          <Hero/>
        </section>
        <section className="flex justify-center" id="about">
          <About/>
        </section>
        <section id="skills">
          <Skills/>
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </main>
    </ThemeProvider>
  )
}

export default App

