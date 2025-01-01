import { RubiksCube } from "./rubiks";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Hero = () => {
  const text = useTypewriter({
    words: ["Software Engineer", "Full-Stack Developer", "Student"],
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 50,
  })[0]

  return (
    <section className="h-[75vh] md:h-[100vh] flex items-center justify-center">
      <BackgroundLines className="h-full -z-10">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <RubiksCube/>
          <div className="flex flex-col gap-1 text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">Hi, I'm James!</h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl">
              I'm a {" "}
              <span className="text-[#4A7AE2] font-bold">
                {text}
              </span>
              <span>
                <Cursor/>
              </span>
            </h1>
          </div>
        </div>
      </BackgroundLines>
    </section>
  )
}

