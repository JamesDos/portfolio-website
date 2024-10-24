import { resumeLink } from "@/utils/data/resume";

export const NavBar = () => {
  return (
    <nav className="">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        <div className="text-white text-2xl font-bold">James Tu</div>
        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col gap-4 items-start text-lg opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-4 md:border-0 md:opacity-100">
          <NavItem href="#about" text="About" />
          <NavItem href="#skills" text="Skills" />
          <NavItem href="#projects" text="Projects" />
          <NavItem href="#contact" text="Contact" />
          <NavItem href={resumeLink} text="Resume" />
        </ul>
      </div>
    </nav>
  );
}

interface NavItemProps {
  href: string,
  text: string
}

const NavItem = (props: NavItemProps) => {
  return (
    <li className="py-2 md:py-0">
      <a href={props.href} className="text-white hover:text-[#4A7AE2] cursor-pointer">{props.text}</a>
    </li>
  )
}