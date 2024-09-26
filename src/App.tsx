import { ThemeProvider } from "./contexts/theme-provider";
import { RubiksCube } from "./components/Rubiks/rubiks";
import { TypewriterEffect } from "./components/ui/typewriter-effect";
import { ModeToggle } from "./components/ui/mode-toggle";


const App = () => {
  const words = [
    {
      text: "James",
    },
    {
      text: "Tu",
    }
  ]

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <RubiksCube/>
      <div className="bg-white">Hello</div>
      <TypewriterEffect words={words}/>
    </ThemeProvider>
  )
}

export default App
