import { motion } from "framer-motion"

interface NavItemProps {
  href: string,
  text: string,
  i: number,
  className?: string,
  textColor?: string,
  whileHover?: { scale: number, x?:number, y?: number },
}

export const NavItem = (props: NavItemProps) => {
  
  return (
    <div 
      style={{
        perspective: "120px",
        perspectiveOrigin: "bottom",
      }}
    >
      <motion.li
        className="relative py-2 md:py-0 cursor-pointer"
        whileHover={props.whileHover}
        transition={{ duration: 0.2 }}
      >
        <a 
          href={props.href} 
          className={`cursor-pointer z-20`} 
          target={props.text === "Resume" ? "blank" : ""}
          style={{
            backgroundImage: `linear-gradient(90deg, #3b82f6 0%, #3b82f6 50%, ${props.textColor} 50%, ${props.textColor} 100%)`,
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