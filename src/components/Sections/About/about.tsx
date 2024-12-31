import HeadShot from "/images/James_Headshot.jpg"
import { motion } from "framer-motion"
import { Heading } from "../../ui/heading"

export const About = () => {

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 h-[50vh]">
      <motion.div
        initial={{ x: "-10vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.40 }}
        className="flex flex-col justify-center space-y-4 px-8 text-lg"
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
        initial={{ x: "10vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.40 }}
        className="flex flex-col items-center"
      >
        <Heading title="About Me"/>
        <img src={HeadShot} alt="James Tu" className="rounded-full w-64 h-64 mx-auto mt-8 mb-4" />
      </motion.div>
    </section>
  )
}