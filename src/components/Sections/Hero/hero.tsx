import { RubiksCube } from "./rubiks";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export const Hero = () => {
  return (
    <section className="h-[100vh]">
      <BackgroundLines className="h-full -z-10">
        <RubiksCube/>
        <TypewriterEffect words={name} className="bg-clip-text"/>
        <TypewriterEffect words={title} className="bg-clip-text"/>
      </BackgroundLines>
    </section>
  )
}

const name = [
  {
    text: "James",
  },
  {
    text: "Tu",
  }
]

const title = [
  {
    text: "Software"
  },
  {
    text: "Engineer"
  }
]