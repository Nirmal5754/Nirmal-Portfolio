import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

function BlogCard({ date, title, excerpt }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="text-xs text-white/45">{date}</div>
      <h3 className="mt-3 text-lg sm:text-xl font-bold text-white leading-snug">{title}</h3>
      <p className="mt-3 text-sm text-white/55 leading-6">{excerpt}</p>
      <div className="mt-5 text-sm text-emerald-400/80">Read More →</div>
    </article>
  )
}

export default function BlogsPage() {
  return (
    <div className="bg-black min-h-screen">
      <main className="px-6 sm:px-10 md:px-20 lg:px-40">
        <Navbar />

        <section className="pt-8 pb-14 font-mono">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Blogs<span className="text-emerald-400">.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm sm:text-base text-white/55">
            My thoughts on software development, design, and technology.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <BlogCard
              date="Mar 22, 2026"
              title="Vector RAG vs Vectorless RAG: What Changed & Why the New One is Better"
              excerpt="Vector RAG uses chunking and embeddings for fast retrieval but can lose context... while Vectorless RAG organizes document..."
            />
            <BlogCard
              date="Feb 20, 2026"
              title="OpenClaw — Early Experiments & Realistic Future Potential"
              excerpt="I’ve been experimenting with OpenClaw as a developer — not just using it, but testing its limits. It’s more than a..."
            />
          </div>

          <p className="mt-20 text-center text-white/25 text-xs sm:text-sm">More articles coming soon!</p>
        </section>

        <Footer />
      </main>
    </div>
  )
}

