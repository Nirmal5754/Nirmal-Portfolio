import { IconContext } from 'react-icons'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'
import Menu from './Menu.jsx'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const typedTargetRef = useRef(null)

  useEffect(() => {
    if (!typedTargetRef.current) return
    const typed = new Typed(typedTargetRef.current, {
      strings: ['  Full Stack Web Developer !', '  Java Spring Developer !', '  Sports Enthusiast'],
      typeSpeed: 100,
      backSpeed: 120,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen)
    return () => document.body.classList.remove('overflow-hidden')
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen((open) => !open)
  const customFontStyle = { fontFamily: 'Britannic Bold' }

  return (
    <div>
      <section className={`min-h-screen relative border-b border-yourColor pb-4 ${isMenuOpen ? 'fixed inset-0' : ''}`}>
        {isMenuOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
            <div className="w-full h-full absolute top-0 left-0">
              <div className="absolute top-0 right-0 p-4">
                <AiOutlineClose className="text-3xl text-gray-400 cursor-pointer" onClick={toggleMenu} />
              </div>
              <Menu />
            </div>
          </div>
        )}

        <nav className="py-10 mb-12 flex justify-between text-white">
          <img src="/A.png" className="h-20 w-20 cursor-pointer" alt="Logo" />
          <div className="flex items-center">
            <div className="cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? (
                <AiOutlineClose className="text-3xl text-teal-500" />
              ) : (
                <AiOutlineMenu className="text-3xl text-teal-500" />
              )}
            </div>
          </div>
        </nav>

        <div className="text-center p-10 py-10" style={customFontStyle}>
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl hover:scale-105 transition-transform duration-300">
            Nirmal Patil
          </h2>
          <div className="text-2xl py-10 text-white md:text-3xl">
            <span className="pl-3" ref={typedTargetRef} />
          </div>
          <p className="text-md py-5 leading-8 text-gray-200 max-w-xl mx-auto md:text-xl">
            Freelancer providing services for programming and design content needs. Join me down below and lets get cracking!
          </p>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
            <IconContext.Provider value={{ size: '1.5em' }}>
              <a href="https://twitter.com/ArnavPanchal9" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: '1.5em' }}>
              <a href="https://github.com/Arnav-Panchal" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: '1.5em' }}>
              <a href="https://www.instagram.com/_arnav2827/" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: '1.5em' }}>
              <a href="https://www.linkedin.com/in/arnav-panchal-39403223a/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </section>
    </div>
  )
}

