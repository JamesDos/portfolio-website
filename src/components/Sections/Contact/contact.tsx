import { motion } from "framer-motion";
import Particles from "@/components/ui/particle-background";
import * as Constants from "../../../utils/constants/constants";
import TrueFocus from "@/components/ui/true-focus";


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Contact = () => {

  return (
    <motion.section
      className="relative flex flex-col items-center w-full min-h-screen px-6 py-16 md:px-12 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 w-full h-full">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.15}
          particleColors={Constants.rainbowColors}
          alphaParticles={true}
          particleBaseSize={350}
          moveParticlesOnHover={true}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-between w-full max-w-6xl h-full min-h-screen pointer-events-none">
      <div className="flex-1 flex flex-col items-center justify-center gap-12 md:gap-16 w-full pt-24 md:pt-32">

      <div className="flex justify-center w-full text-5xl md:text-6xl lg:text-7xl">
        <TrueFocus 
          sentence="Contact Me"
          manualMode={false}
          blurAmount={3}
          borderColor="#4A7AE2"
          animationDuration={1}
          pauseBetweenAnimations={1}
        />
      </div>

      {/* <h1 className="flex justify-center w-full text-5xl md:text-6xl lg:text-7xl font-bold">Contact Me</h1> */}
      <div className="flex justify-around items-center w-full gap-6 md:gap-8">
        <motion.div
          className="flex pointer-events-auto"
          whileHover={{ scale: 1.1, rotate: "-10deg" }}
        >
          <a href="https://github.com/JamesDos" target="blank">
            <svg
            viewBox="0 0 1024 1024"
            className = "w-[12vw] sm:w-[10vw] sm:tall:w-[6vw] xl:w-[5vw] fill-[#fffcf0] cursor-pointer hover:fill-[#4A7AE2]"
            style = {{
                transition: "fill 0.2s"
            }}
            >
            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
            </svg>
          </a>
        </motion.div>
        <motion.div
          className="flex pointer-events-auto"
          whileHover={{ scale: 1.1, rotate: "-10deg" }}
        >
          <a href="https://www.linkedin.com/in/jamestu2026/" target="blank">
            <svg fill="none" viewBox="0 0 15 15" className = "w-[12vw] sm:w-[10vw] sm:tall:w-[6vw] xl:w-[5vw] fill-[#fffcf0] cursor-pointer hover:fill-[#4A7AE2]"
                  style = {{
                      transition: "fill 0.2s"
                  }}>
            <path
                fillRule="evenodd"
                d="M2 1a1 1 0 00-1 1v11a1 1 0 001 1h11a1 1 0 001-1V2a1 1 0 00-1-1H2zm1.05 5h1.9v6h-1.9V6zm2.025-1.995a1.075 1.075 0 11-2.15 0 1.075 1.075 0 012.15 0zM12 8.357c0-1.805-1.167-2.507-2.326-2.507-.379-.018-.757.061-1.095.231-.257.13-.526.424-.734.938h-.053V6H6v6.005h1.906V8.81c-.027-.327.077-.75.291-1.001.215-.252.52-.312.753-.342h.073c.606 0 1.056.375 1.056 1.32v3.217h1.906L12 8.357z"
                clipRule="evenodd"
            />
            </svg>
          </a>
        </motion.div>
        <motion.div
          className="flex pointer-events-auto"
          whileHover={{ scale: 1.1, rotate: "-10deg" }}
        >
          <a href="mailto:jamestucontact@gmail.com" target="blank">
            <svg viewBox="0 0 24 24"
              className = "w-[15vw] sm:w-[10vw] xl:w-[5vw] fill-[#fffcf0] cursor-pointer hover:fill-[#4A7AE2]"
              style = {{
                  transition: "fill 0.2s"
              }}
              >
              <path d="M18.73 5.41l-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 002 7.05v11.59A1.36 1.36 0 003.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0022 18.64V7.05a2 2 0 00-3.27-1.64z" />
            </svg>
          </a>
        </motion.div>
        <motion.div
          className="flex items-center justify-items-center pointer-events-auto"
          whileHover={{ scale: 1.3, rotate: "-10deg" }}
        >
          <a
            href="https://drive.google.com/file/d/1E7TquXToIiSKHfQzRJ6mmHPyEL6_lMcT/view?usp=sharing"
            target="blank" 
            className="bg-[#fffcf0] w-[25vw] md:w-[20vw] lg:w-[15vw] xl:w-[10vw] h-auto px-2 py-2 flex items-center justify-center gap-2 
            text-center cursor-pointer rounded-2xl overflow-hidden group relative transition-colors duration-200">
              <div className = "bg-black rounded-full w-2 h-2 group-hover:scale-[4000%] group-hover:bg-[#4A7AE2] transition-all duration-300 ease-out"/>
              <span className=" text-black group-hover:text-[#fffcf0] group-hover:-translate-x-2 
              z-20 transition-all duration-300 ease-out">Resume</span>
          </a>
        </motion.div>
      </div>
      </div>
      <div className="flex w-full justify-between items-center pb-4">
        <div className="text-center text-sm md:text-base">
          &copy; {new Date().getFullYear()} James Tu
        </div>
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, rotate: "360deg" }}
          transition={{ duration: 0.3 }}
          className="pointer-events-auto"
        >
          <svg viewBox="0 0 24 24"
            className = "w-[10vw] sm:w-[5vw] sm:tall:w-[6vw] fill-[#fffcf0] cursor-pointer hover:fill-[#4A7AE2]"
          >
            <path d="M18.746 15.204l0.742-0.742-6.379-6.379-6.378 6.379 0.742 0.742 5.112-5.112v12.727h1.049v-12.727z"/>
          </svg>
        </motion.button>
      </div>
      </div>
    </motion.section>
  );
};

export default Contact;