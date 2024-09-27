import { ThemeProvider } from "./contexts/theme-provider";
import { Skills } from "./components/Sections/Skills/skills";
import { Hero } from "./components/Sections/Hero/hero";


const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Hero/>
      <Skills/>
    </ThemeProvider>
  )
}

export default App
