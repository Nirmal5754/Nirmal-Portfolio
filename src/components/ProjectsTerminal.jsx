import TerminalChat from './TerminalChat.jsx'

const projects = ['AgriTrade', 'E-Shopping-Zone']

function ProjectCard({ title, subtitle, stack, bullets, href }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">{title}</h3>
          {subtitle ? <p className="mt-2 text-sm text-white/55">{subtitle}</p> : null}
        </div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-black hover:bg-emerald-400 transition-colors"
          >
            View
          </a>
        ) : null}
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
    </article>
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

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="AgriTrade — Farmers Online Marketplace"
            subtitle="Real-time crop auctions with timers, bid leaderboard, and listings management."
            stack="React.js, HTML, Tailwind CSS, Bootstrap, JavaScript, LocalStorage"
            bullets={[
              'Developed a real-time crop auction platform with timers and dynamic status updates.',
              'Created buyer leaderboards based on highest bids with automated auction result handling.',
              'Implemented CRUD operations for crop listings with validation and LocalStorage persistence.',
            ]}
            href="https://agri-trade-nine.vercel.app/"
          />
          <ProjectCard
            title="E-Shopping-Zone — E-Commerce Fashion App"
            subtitle="Responsive shopping app with authentication and checkout workflow."
            stack="React.js, Redux, Firebase Authentication, Tailwind CSS, JavaScript"
            bullets={[
              'Built a responsive e-commerce app using React.js and Tailwind CSS with reusable components.',
              'Implemented Firebase authentication (Google Sign-In) and product-to-checkout workflow.',
              'Managed global state with Redux and ensured data persistence using LocalStorage.',
            ]}
          />
        </div>

        <TerminalChat />
      </div>
    </section>
  )
}
