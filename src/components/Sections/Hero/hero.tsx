import { RubiksCube } from "./rubiks";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Hero = () => {
  const [text, helper] = useTypewriter({
    words: ["Software Engineer", "Full-Stack Developer", "Student"],
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 50,
  })

  return (
    <section className="h-[100vh]">
      <BackgroundLines className="h-full -z-10">
        <RubiksCube/>
        <div className="flex flex-col gap-1">
          <h1 className="text-7xl font-bold">Hi, I'm James!</h1>
          <h1 className="text-3xl">
            I'm a {" "}
            <span className="text-[#4A7AE2] font-bold">
              {text}
            </span>
            <span>
              <Cursor/>
            </span>
          </h1>
        </div>

      </BackgroundLines>
    </section>
  )
}

