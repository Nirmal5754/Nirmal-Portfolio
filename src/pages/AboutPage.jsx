import AboutTerminal from '../components/AboutTerminal.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

export default function AboutPage() {
  return (
    <main className="bg-black px-6 sm:px-10 md:px-20 lg:px-40 min-h-screen">
      <Navbar />
      <AboutTerminal />
      <Footer />
    </main>
  )
}
