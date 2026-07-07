import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className="h-screen bg-white px-10 pt-[15%] pb-10">
      <div className="max-w-3xl mx-auto">
        <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="block">
          <div className="m-2 p-4 text-2xl cursor-pointer rounded border-2 border-white text-black hover:bg-black hover:text-white transition-colors">
            Resume
          </div>
        </a>
        <Link to="/about" className="block">
          <div className="m-2 p-4 text-2xl cursor-pointer rounded border-2 border-white text-black hover:bg-black hover:text-white transition-colors">
            About Me
          </div>
        </Link>
        <Link to="/email" className="block">
          <div className="m-2 p-4 text-2xl cursor-pointer rounded border-2 border-white text-black hover:bg-black hover:text-white transition-colors">
            Contact Me
          </div>
        </Link>
        <Link to="/projects" className="block">
          <div className="m-2 p-4 text-2xl cursor-pointer rounded border-2 border-white text-black hover:bg-black hover:text-white transition-colors">
            Projects
          </div>
        </Link>
      </div>
    </div>
  )
}

