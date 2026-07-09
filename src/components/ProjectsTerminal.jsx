import TerminalChat from './TerminalChat.jsx'
import prodisplay from '../assets/display.png'
import prodisplay2 from '../assets/display2.png'
const projects = ['AgriTrade', 'E-Shopping-Zone']

function ProjectCard({ title, subtitle, stack, bullets, href }) {
  const CardTag = href ? 'a' : 'article'
  const linkProps = href
    ? {
        href,
        target: '_blank',
        rel: 'noreferrer',
      }
    : {}

  return (
    <CardTag
      {...linkProps}
      className="block rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-colors hover:border-emerald-400/35 hover:bg-white/[0.08]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">{title}</h3>
          {subtitle ? <p className="mt-2 text-sm text-white/55">{subtitle}</p> : null}
        </div>
      </div>

      {stack ? <div className="mt-4 text-xs text-emerald-400/70">Tech Stack: {stack}</div> : null}

      {bullets?.length ? (
        <ul className="mt-4 space-y-2 text-sm text-white/65">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="text-emerald-400/70">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </CardTag>
  )
}

export default function ProjectsTerminal() {
  return (
    <section className="py-16 font-mono">
      <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tight">Projects</h2>

      <div className="mt-10">
        <div className="flex items-center gap-3 text-white/55 text-xs">
          <span className="terminal-dots">
            <span className="terminal-dot bg-red-500/90" />
            <span className="terminal-dot bg-yellow-400/90" />
            <span className="terminal-dot bg-green-500/90" />
          </span>
          <span>Projects Directory</span>
        </div>

        <ul className="mt-4 space-y-2 text-emerald-400/75 text-sm">
          {projects.map((p) => (
            <li key={p}>
              <span className="text-emerald-400/80">{'>'}</span> {p}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
         
          <div className= ' rounded-xl  bg-gray-900 justify-center'>
             <img src={prodisplay} className='w-100 h-56 rounded-tl-xl rounded-tr-xl ' alt="projectimg"/>
<h1 className='font-semibold text-xl pt-4 pl-4 text-yellow-400 '>AgriTrade — Farmers Online Marketplace</h1>
<p className='text-sm font-semibold pt-2 pl-4 text-pink-400'>Real-time crop auctions with timers, bid leaderboard, and listings management.</p>
  
    <ul className='text-center items-center justify-center m-4'>
<li className='flex gap-3'><div   className='bg-violet-800 rounded-full px-2 py-1 text-emerald-500 font-bold'>React.js</div>
  <div  className='text-emerald-500 bg-violet-800 rounded-full px-2 py-1 font-bold'>HTML</div><div  className='font-bold bg-violet-800 text-emerald-500 rounded-full px-2 py-1'>Tailwind CSS</div>
  </li>
<li className='flex gap-3  mt-3'> 
  <div   className='bg-violet-800 text-emerald-500 rounded-full px-2 py-1 font-bold'>Bootstrap</div>
<div   className='bg-violet-800 rounded-full px-2 text-emerald-500 py-1 font-bold'>JavaScript</div>
  <div   className='bg-violet-800 rounded-full px-2 text-emerald-500 py-1 font-bold'>Firebase</div></li>

    </ul>
  

  
</div>
   <div className= ' rounded-xl  bg-gray-900 justify-center'>
             <img src={prodisplay2} className='w-100 h-56 rounded-tl-xl rounded-tr-xl ' alt="projectimg"/>
<h1 className='font-semibold text-xl pt-4 pl-4 text-yellow-400 '>E-Shopping-Zone — E-Commerce Fashion App</h1>
<p className='text-sm font-semibold pt-2 pl-4 text-pink-400'>Responsive shopping app with authentication and checkout workflow.</p>
  
    <ul className='text-center items-center justify-center m-4'>
<li className='flex gap-3'><div   className='bg-violet-800 rounded-full px-2 py-1 text-emerald-500 font-extrabold'>React.js</div>
  <div  className='text-emerald-500 bg-violet-800 rounded-full px-2 py-1 font-bold'>Redux.js</div><div  className='font-bold bg-violet-800 text-emerald-500 rounded-full px-2 py-1'>Tailwind CSS</div>
  </li>
<li className='flex gap-3  mt-3'> 
  <div   className='bg-violet-800 text-emerald-500 rounded-full px-2 py-1 font-bold'>Firebase</div>
<div   className='bg-violet-800 rounded-full px-2 text-emerald-500 py-1 font-bold'>Tailwind Css</div>
  <div   className='bg-violet-800 rounded-full px-2 text-emerald-500 py-1 font-bold'>JavaScript</div></li>

    </ul>
  

  
</div>



          </div>

       
      
     
        </div>

        <TerminalChat />
    
    </section>
  )
}
