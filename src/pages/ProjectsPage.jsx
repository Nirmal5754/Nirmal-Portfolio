import Header from '../components/Header.jsx'

export default function ProjectsPage() {
  const customFontStyle = { fontFamily: 'Britannic Bold' }

  return (
    <main className="bg-black px-10 md:px-20 lg:px-40 min-h-screen text-white">
      <Header />
      <h1 className="text-center text-6xl py-10 text-teal-500" style={customFontStyle}>
        Projects
      </h1>
      <p className="text-center text-gray-400 pb-10">
        Add your projects section here.
      </p>
    </main>
  )
}

