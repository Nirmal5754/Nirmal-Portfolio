import TerminalWindow from './TerminalWindow.jsx'

function SkillGroup({ title, items }) {
  return (
    <div>
      <div className="text-white/45 text-xs mb-2">{title}</div>
      <ul className="space-y-1 text-emerald-400/80 text-sm">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="text-emerald-400/70">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function AboutTerminal() {
  return (
    <section className="py-14 font-mono">
      <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tight">About Me</h2>

      <div className="mt-8">
        <TerminalWindow title="AboutMe.txt" bodyClassName="space-y-4">
          <div className="text-emerald-400/80 text-sm">{'> cat about.txt'}</div>
          <p className="text-emerald-400/70 text-sm leading-7">
            Frontend Developer with strong foundations in C++ (DSA) and hands-on experience building scalable,
            responsive applications using React.js and Redux Toolkit. Skilled in MySQL, Firebase, and writing optimized,
            maintainable code with focus on performance and clean architecture.
          </p>

          <div className="pt-2 text-emerald-400/80 text-sm">{'> ls -l skills'}</div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 pt-2">
            <SkillGroup title="Frontend" items={['HTML', 'CSS', 'JavaScript', 'React.js']} />
            <SkillGroup title="Backend" items={['RESTful APIs']} />
            <SkillGroup title="Languages" items={['Java', 'JavaScript', 'C++']} />
            <SkillGroup title="Database" items={['MySQL']} />
            <SkillGroup title="Others" items={['Git', 'GitHub']} />
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}
