import { IconContext } from 'react-icons'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import SkillsStrip from './anistrip'
import resume from '../Nirmal_Resume.pdf'

export default function Hero() {
  return (
    <section className="pt-10 pb-16 font-mono">
      <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight text-white">
        Maximize Your
        <br />
        Potential with
        <br />
        <span className="text-cyan-400">Modern Web</span>
        <br />
        Solutions
      </h1>

      <p className="mt-8 max-w-xl text-sm sm:text-base  leading-7 text-yellow-200">
        I&apos;m Nirmal Patil Frontend Developer with strong foundations in C++ (DSA) and hands-on experience building scalable, responsive applications using React.js and Redux Toolkit. Skilled in MySQL, Firebase, and writing optimized, maintainable code with focus on performance and clean architecture.
      </p>

      <div className="mt-5 flex gap-3 text-emerald-400">
        <IconContext.Provider value={{ size: '1.25em' }}>
          <a href="" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <AiFillTwitterCircle />
          </a>
          <a href="https://github.com/Nirmal5754" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/raj_.5754/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <AiFillInstagram />
          </a>
          <a href="https://www.linkedin.com/in/nirmal5754/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <AiFillLinkedin />
          </a>
        </IconContext.Provider>
      </div>
<SkillsStrip className='mt-4'/>
      {/* <div className="mt-14 text-emerald-400/80 text-xs sm:text-sm flex flex-wrap justify-center gap-x-6 gap-y-2">
        <span>React</span>
        <span>Redux.js</span>
        <span>JavaScript</span>
        <span>C++</span> 
        <span>Java</span> 
        <span>MySQL</span>
        <span>BootStrap</span>
        <span>TailwindCSS</span>      
      </div> */}

      <div className="mt-6 flex justify-center">
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-pink-500/60 px-6 py-2 text-sm text-pink-400 hover:bg-emerald-700/10 transition-colors" download ="Nirmal_Resume.pdf"
        >
        <button type="button">$ Download Resume</button>
       
        </a>
      </div>
    </section>
  )
}

