import { RubiksCube } from "./rubiks";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export const Hero = () => {
  const words = [
    {
      text: "James",
    },
    {
      text: "Tu",
    }
  ]
  return (
    <section>
        <ModeToggle />
        <BackgroundLines className="absolute h-48 w-screen -z-10">
          <RubiksCube/>
          <TypewriterEffect words={words} className="bg-clip-text"/>
        </BackgroundLines>
    </section>
  )
}