
export const NavBar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">James Tu</div>
        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100">
          <li>
            <div>About</div>
          </li>
          <li>
            <div>Experience</div>
          </li>
          <li>
            <div>Skills</div>
          </li>
          <li>
            <div>Projects</div>
          </li>
          <li>
            <div>Contact</div>
          </li>
          <li>
            <div>Resume</div>
          </li>
        </ul>
      </div>
    </nav>
  )
}