import { resumeLink } from "@/utils/data/resume";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  {
      href: "#about",
      text: "About"
  },
  {
      href: "#skills",
      text: "Skills"
  },
  {
      href: "#projects",
      text: "Projects"
  },
  {
      href: "#contact",
      text: "Contact"
  },
  {
      href: resumeLink,
      text: "Resume"
  }
]

export const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleReload = () => {
    window.location.reload();
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        <div 
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={handleReload}
        >
          James Tu
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col gap-4 items-start text-lg opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-4 md:border-0 md:opacity-100">
          {
            links.map((link, idx) => {
              return (
                <NavItem key={link.text} href={link.href} text={link.text} i={idx}/>
              )
            })
          }
        </ul>
      </div>
    </nav>
  );
}

interface NavItemProps {
  href: string,
  text: string,
  i: number,
  className?: string;
}

const NavItem = (props: NavItemProps) => {
  return (
    <div 
      style={{
        perspective: "120px",
        perspectiveOrigin: "bottom",
      }}
    >
      <motion.li
        className="relative py-2 md:py-0 cursor-pointer"
        whileHover={{ scale: 1.1, y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <a 
          href={props.href} 
          className="text-white hover:text-[#4A7AE2] cursor-pointer" 
          target={props.text === "Resume" ? "blank" : ""}
          style={{
            background: "linear-gradient(90deg, #3b82f6 0%, #3b82f6 50%, #fffcf0 50%, #fffcf0 100%)", // Gradient color to simulate the fill
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundSize: "200% 100%", // Double width for transition effect
            backgroundPosition: "100% 0",
            transition: "background-position 0.5s ease", // Smooth transition of the fill
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundPosition = "0 0"; // Start from left
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundPosition = "100% 0"; // Reset to right
          }}
        >{props.text}</a>
      </motion.li>
    </div>

  )
}