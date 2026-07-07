import Footer from '../components/Footer.jsx'
import AboutTerminal from '../components/AboutTerminal.jsx'
import ContactTerminal from '../components/ContactTerminal.jsx'
import Hero from '../components/Hero.jsx'
import Navbar from '../components/Navbar.jsx'
import ProjectsTerminal from '../components/ProjectsTerminal.jsx'

export default function HomePage() {
  return (
    <div className="bg-fixed-image bg-cover bg-center bg-no-repeat">
      <main className="bg-black/80 px-6 sm:px-10 md:px-20 lg:px-40 min-h-screen">
        <Navbar />
        <Hero />
        <AboutTerminal />
        <ProjectsTerminal />
        <ContactTerminal />
        <Footer />
      </main>
    </div>
  )
}
