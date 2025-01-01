import { motion } from "framer-motion"
import { links } from "./navlinks"
import { NavItem } from "./navItem"

interface NavWindowProps {
  isOpen: boolean,
}

export const NavWindow = (props: NavWindowProps) => {

  return (
    <div key="nav-window" className="shadow-lg z-10 overflow-hidden h-full">
      <ul className={`${props.isOpen ? "flex" : "hidden" } md:flex flex-col justify-between px-4 pb-8 pt-10 h-full text-lg`}>
        {
          links.map((link, idx) => {
            return (
              <NavItem 
                key={link.text} 
                href={link.href} 
                text={link.text} 
                i={idx}
                textColor="black"
                whileHover={{ scale: 1.1, x: 20 }}
              />
            )
          })
        }
      </ul>
    </div>
  )
}