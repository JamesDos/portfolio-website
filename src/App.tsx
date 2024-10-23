import { ThemeProvider } from "./contexts/theme-provider";
import { Skills } from "./components/Sections/Skills/skills";
import { Hero } from "./components/Sections/Hero/hero";
import { NavBar } from "./components/navbar";


const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar/>
      <Hero/>
      <Skills/>
    </ThemeProvider>
  )
}

export default App

