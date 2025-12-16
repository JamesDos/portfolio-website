import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NavItem } from "./navItem";
import { NavWindow } from "./navWindow";
import { links } from "./navlinks";

export const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleReload = () => {
    window.location.reload();
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const menuVariants = {
    open: {
      width: "35vw",
      height: "35vh",
      backgroundColor: "white",
      transition: { duration: 0.75, type: "tween", ease: "easeInOut"}
    },
    closed: {
      width: "2rem",
      height: "2rem",
      top: "0px",
      right: "0px",
      transition: { duration: 0.75, type: "tween", ease: "easeInOut"}
    }
  };

  const menuIconVariants = {
    animate: {
      top: "10px",
      right: "10px",
      transition: { duration: 0.75, type: "tween", ease: "easeInOut"}
    }
  }

  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between py-5 px-8 md:px-4 relative">
        <div 
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={handleReload}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: isHovered ? 0 : -50, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full flex justify-center"
          >
            {/* <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current text-blue-500"
            >
              <path d="M12 2L2 22h20L12 2z" />
            </svg> */}
          </motion.div>
          James Tu
        </div>

        {/* Desktop NavLinks */}
        <ul className={"hidden md:flex md:space-x-8 md:w-auto md:text-lg"}>
          {
            links.map((link, idx) => {
              return (
                <NavItem 
                  key={link.text} 
                  href={link.href} 
                  text={link.text} 
                  i={idx}
                  textColor={"#fffcf0"}
                  whileHover={{ scale: 1.1, y: -4 }}
                />
              )
            })
          }
        </ul>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute right-8 top-6`}>
          <motion.div
            className="relative z-20 rounded-xl"
            variants={menuVariants}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
          >
            <motion.div 
              className="absolute"
              variants={menuIconVariants}
              animate={isOpen ? "animate" : ""}
              onClick={toggleMenu}
            >
              <HamburgerMenu isOpen={isOpen} />
            </motion.div>
            <AnimatePresence>
              {isOpen && ( <NavWindow isOpen={isOpen} /> )}  
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

const HamburgerMenu = ({ isOpen }: { isOpen: boolean }) => (
  <div className="flex flex-col gap-[0.5rem] cursor-pointer z-30">
    <motion.span
      className={`block bg-white h-1 w-8 opacity-1 rounded-lg transition-transform duration-500 ease-in-out z-20 ${
        isOpen ? "rotate-45 translate-y-3" : "rotate-0"
      }`}
      animate={{ backgroundColor: isOpen ? "black" : "white" }}
    ></motion.span>
    <motion.span
      className={`block h-1 w-8 rounded-lg transition-all ease-in-out duration-500 ${
        isOpen ? "opacity-0" : "opacity-1 bg-white"
      }`}
      animate={{ backgroundColor: isOpen ? "black" : "white" }}
    ></motion.span>
    <motion.span
      className={`block bg-white h-1 w-8 opacity-1 rounded-lg transition-transform duration-500 ease-in-out z-20 ${
        isOpen ? "-rotate-45 -translate-y-3" : "rotate-0"
      }`}
      animate={{ backgroundColor: isOpen ? "black" : "white" }}
    ></motion.span>
  </div>
);
