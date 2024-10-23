export const NavBar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        <div className="text-white text-lg font-bold">James Tu</div>
        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-4 md:border-0 md:opacity-100">
          <li className="py-2 md:py-0">
            <div className="text-white hover:text-gray-400 cursor-pointer">About</div>
          </li>
          <li className="py-2 md:py-0">
            <div className="text-white hover:text-gray-400 cursor-pointer">Experience</div>
          </li>
          <li className="py-2 md:py-0">
            <div className="text-white hover:text-gray-400 cursor-pointer">Skills</div>
          </li>
          <li className="py-2 md:py-0">
            <div className="text-white hover:text-gray-400 cursor-pointer">Projects</div>
          </li>
          <li className="py-2 md:py-0">
            <div className="text-white hover:text-gray-400 cursor-pointer">Contact</div>
          </li>
          <li className="py-2 md:py-0">
            <div className="text-white hover:text-gray-400 cursor-pointer">Resume</div>
          </li>
        </ul>
      </div>
    </nav>
  )
}