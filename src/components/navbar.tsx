

export const NavBar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        <div className="text-white text-lg font-bold">James Tu</div>
        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-4 md:border-0 md:opacity-100">
          <li className="py-2 md:py-0">
            <a href="#hero" className="text-white hover:text-gray-400 cursor-pointer">About</a>
          </li>
          {/* <li className="py-2 md:py-0">
            <a href="#experience" className="text-white hover:text-gray-400 cursor-pointer">Experience</a>
          </li> */}
          <li className="py-2 md:py-0">
            <a href="#skills" className="text-white hover:text-gray-400 cursor-pointer">Skills</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#projects" className="text-white hover:text-gray-400 cursor-pointer">Projects</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#contact" className="text-white hover:text-gray-400 cursor-pointer">Contact</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#resume" className="text-white hover:text-gray-400 cursor-pointer">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}