import { ThemeProvider } from "./contexts/theme-provider";
import { Skills } from "./components/Sections/Skills/skills";
import { Hero } from "./components/Sections/Hero/hero";
import { NavBar } from "./components/navbar";
import { Projects } from "./components/Sections/Projects/projects";
import { Contact } from "./components/Sections/Contact/contact";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar/>
      <section id="hero">
        <Hero/>
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
    </ThemeProvider>
  )
}

export default App

