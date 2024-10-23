import HeadShot from "/images/James_Headshot.jpg"
import { motion, useScroll, useTransform, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

export const About = () => {
  const targetRefLeft = useRef(null)
  const targetRefRight = useRef(null)

   // Scroll progress for left and right sections
   const { scrollYProgress: scrollYProgressLeft } = useScroll({
    target: targetRefLeft,
    offset: ["start end", "end start"], // Triggers animation in both directions
  });
  const { scrollYProgress: scrollYProgressRight } = useScroll({
    target: targetRefRight,
    offset: ["start end", "end start"], // Same for the right
  });


  const translateLeft = useTransform(scrollYProgressLeft, [0, 0.4], [-300, 0])

  const translateRight = useTransform(scrollYProgressRight, [0, 0.4], [300, 0])

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 h-[50vh]">
      <motion.div
        ref={targetRefLeft}
        style={{x: translateLeft}}
        className="flex flex-col justify-center space-y-4 px-8"
        transition={{
          type: "tween",
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1], // Ease-in and ease-out
        }}
      >
        <h2 className="text-2xl font-bold">Hello World! I'm James Tu</h2>
        <hr className="h-1 bg-gradient-to-r from-purple via-blue-500 my-4 from-[0%] via-[20%]" />
        <div>
          I am a software engineer and student at Cornell University studying Computer Science 
          with a minor in AI. I'm passionate about leveraging full-stack development and
          AI to create innovative solutions to real-world problems. I love solving puzzles, bringing ideas to life, and collaborating
          with teams to deliver amazing solutions.
        </div>
        <div>
          When I'm not working, you can find me playing Chess, fiddling with a Rubik's cube,
          or practicing the ukulele.
        </div>
      </motion.div>
      <motion.div
        ref={targetRefRight}
        className="flex flex-col items-center"
        style={{x: translateRight}}
        transition={{
          type: "tween",
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1], // Ease-in and ease-out
        }}
      >
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <img src={HeadShot} alt="James Tu" className="rounded-full w-64 h-64 mx-auto mt-8 mb-4" />
      </motion.div>
    </section>
  )
}