import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isBlogs = location.pathname === '/blogs'

  return (
    <header className="w-full py-6 flex items-center justify-between font-mono">
      <Link to="/" className="text-white text-lg tracking-tight">
        Nirmal<span className="text-emerald-400">.</span>
      </Link>
      <nav className="flex items-center gap-4">
        <Link to="/blogs" className={`text-sm ${isBlogs ? 'text-white' : 'text-white/60'} hover:text-white`}>
          Blogs
        </Link>
        <a
          href="/#contact"
          className="text-sm px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:bg-emerald-400 transition-colors"
        >
          Get In Touch
        </a>
      </nav>
    </header>
  )
}

